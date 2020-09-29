import { getDbClient } from "../utils/database";
import {
  UNAUTHORIZED_ERROR,
  CLASSROOM_DOESNOT_EXISTS,
  ALREADY_JOINED_CLASSROOM,
  NO_CLASSROOMS_FOUND,
} from "../utils/errors";
import { classSchema } from "./class-model";

export async function createClass(classData: any, user: any) {
  if (!user || !user.role) throw { code: 401, message: UNAUTHORIZED_ERROR };
  if (user.role && user.role != "teacher")
    throw { code: 401, message: UNAUTHORIZED_ERROR };
  const dbClient = await getDbClient();
  let class_code = ("DK" + Math.floor(Math.random() * 90000) + 10000) as string;
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

export async function joinClass(classid: any, user: any) {
  if (!user || !user.role) throw { code: 401, message: UNAUTHORIZED_ERROR };
  if (user.role && user.role != "student")
    throw { code: 401, message: UNAUTHORIZED_ERROR };
  const dbClient = await getDbClient();
  let classroom = await dbClient
    .db()
    .collection("classrooms")
    .findOne({ code: classid });
  if (!classroom) throw { code: 404, message: CLASSROOM_DOESNOT_EXISTS };
  if (classroom.students.find((student: any) => student == user.email))
    throw { code: 409, message: ALREADY_JOINED_CLASSROOM };
  classroom.students.push(user.email);
  await dbClient
    .db()
    .collection("classrooms")
    .findOneAndUpdate(
      { code: classid },
      { $set: { students: classroom.students } }
    );
}
export async function getClasses(user: any) {
  if (!user || !user.role) throw { code: 401, message: UNAUTHORIZED_ERROR };
  const dbClient = await getDbClient();
  if (user.role && user.role == "student") {
    // For Student
    let student_classroom: any = [];
    let classrooms = await dbClient
      .db()
      .collection("classrooms")
      .find()
      .toArray();
    classrooms.forEach((classroom) => {
      let result = classroom.students.find(
        (student: any) => student == user.email
      );
      if (result) {
        student_classroom.push(classroom);
      }
    });
    if (student_classroom.length == 0) {
      throw { code: 404, message: NO_CLASSROOMS_FOUND };
    }
    return { classes: student_classroom };
  } else {
    // For teacher
    let classrooms = await dbClient
      .db()
      .collection("classrooms")
      .find({ teacher: user.email })
      .toArray();
    if (classrooms.length == 0) {
      throw { code: 404, message: NO_CLASSROOMS_FOUND };
    }
    return { classes: classrooms };
  }
}
