import { Code } from "bson";
import { getDbClient, initDbClient } from "../utils/database";
import { UNAUTHORIZED_ERROR } from "../utils/errors";
import { classSchema } from "./class-model";

export async function createClass(classData: any, user: any) {
  if (!user || !user.role) throw { code: 401, message: UNAUTHORIZED_ERROR };
  if (user.role && user.role != "teacher")
    throw { code: 401, message: UNAUTHORIZED_ERROR };
  const dbClient = await getDbClient();
  let class_code = "";
  while (
    await dbClient.db().collection("classrooms").findOne({ code: class_code })
  ) {
    class_code = ("DK" + Math.floor(Math.random() * 90000) + 10000) as string;
  }
  let classDatawithCode = classData;
  classDatawithCode.code = class_code;
  const classroom = classSchema.cast(classDatawithCode);
  await dbClient
    .db()
    .collection("classrooms")
    .insertOne({ teacher: user.email, ...classroom });
}

export async function deleteClass(classid: any, user: any) {
  if (!user || !user.role) throw { code: 401, message: UNAUTHORIZED_ERROR };
  if (user.role && user.role != "teacher")
    throw { code: 401, message: UNAUTHORIZED_ERROR };
  const dbClient = await getDbClient();

  await dbClient.db().collection("classrooms").deleteOne({ code: classid });
}
