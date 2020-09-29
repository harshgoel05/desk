import { getDbClient } from "../utils/database";
import * as bcrypt from "bcryptjs";
import { userSchema } from "./user-model";
import {
  USER_ALREADY_EXISTS,
  USER_DOESNOT_EXISTS,
  WRONG_PASSWORD,
} from "../utils/errors";
import * as jwt from "jsonwebtoken";

export async function signupUser(userData: any) {
  let newUser = (await userSchema.cast(userData)) || userData;
  const dbClient = await getDbClient();

  const user = await dbClient
    .db()
    .collection("users")
    .findOne({ email: newUser.email });
  if (user) {
    throw { code: 409, message: USER_ALREADY_EXISTS };
  }

  bcrypt.genSalt(10, async function (err, salt) {
    bcrypt.hash(userData.password, salt, async function (err, hash) {
      newUser.password = hash;
      await dbClient.db().collection("users").insertOne(newUser);
    });
  });
}

export async function loginUser(userData: any) {
  const dbClient = await getDbClient();
  const user = await dbClient
    .db()
    .collection("users")
    .findOne({ email: userData.email }, { projection: { _id: 0 } });
  if (!user) throw { code: 401, message: USER_DOESNOT_EXISTS };
  const result = bcrypt.compareSync(userData.password, user.password);
  if (!result) throw { code: 401, message: WRONG_PASSWORD };
  const token = await jwt.sign(user, process.env.JWT_SECRET || "");
  return { token: token };
}

export async function getUserData(userData: any) {
  const dbClient = await getDbClient();
  const user = await dbClient
    .db()
    .collection("users")
    .findOne(
      { email: userData.email },
      { projection: { _id: 0, password: 0 } }
    );
  if (!user) throw { code: 401, message: USER_DOESNOT_EXISTS };
  return { ...userData, ...user };
}
export async function verifyEmail(email: any) {
  const dbClient = await getDbClient();
  const user = await dbClient
    .db()
    .collection("users")
    .findOne({ email: email }, { projection: { _id: 0, password: 0 } });
  if (!user) throw { code: 401, message: USER_DOESNOT_EXISTS };
  await dbClient
    .db()
    .collection("users")
    .findOneAndUpdate({ email: email }, { $set: { isVerified: true } });
}
