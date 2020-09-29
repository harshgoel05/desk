import { getDbClient } from "../utils/database";
import * as bcrypt from "bcryptjs";
import { userSchema } from "./user-model";
import { USER_ALREADY_EXISTS } from "../utils/errors";
export async function loginUser(userData: any) {}
export async function signupUser(userData: any) {
  let newUser = (await userSchema.cast(userData)) || userData;
  const dbClient = await getDbClient();

  let user = dbClient
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
