import { getDbClient } from "../utils/database";
import {
  UNAUTHORIZED_ERROR,
  CLASSROOM_DOESNOT_EXISTS,
  ALREADY_JOINED_CLASSROOM,
  NO_CLASSROOMS_FOUND,
} from "../utils/errors";

export async function addTest(testData: any, classid: any) {
  let newTestData = testData;
  const dbClient = await getDbClient();
  let classroom = await dbClient
    .db()
    .collection("classrooms")
    .findOne({ code: classid });
  if (!classroom) throw { code: 404, message: NO_CLASSROOMS_FOUND };

  let test_code = ("DT" + Math.floor(Math.random() * 9000) + 1000) as string;

  while (classroom.tests.find((test: any) => test.test_code == test_code)) {
    test_code = ("DT" + Math.floor(Math.random() * 9000) + 1000) as string;
  }
  newTestData.test_code = test_code;
  classroom.tests.push(newTestData);
  await dbClient
    .db()
    .collection("classrooms")
    .findOneAndUpdate({ code: classid }, { $set: { tests: classroom.tests } });
}

export async function addTestSubmission(data: any) {}
export async function getAllTests(data: any) {}
