import { getDbClient } from "../utils/database";
import {
  UNAUTHORIZED_ERROR,
  CLASSROOM_DOESNOT_EXISTS,
  TEST_ALREADY_GIVEN,
  NO_CLASSROOMS_FOUND,
} from "../utils/errors";
import { testSchema } from "./tests-model";

export async function addTest(testData: any, classid: any, user: any) {
  if (!user.role || user.role != "teacher")
    throw { code: 401, message: UNAUTHORIZED_ERROR };
  let newTestData = (await testSchema.cast(testData)) || testData;
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

export async function addTestSubmission(
  classid: any,
  testid: any,
  sub_data: any,
  user: any
) {
  if (!user.role || user.role != "student")
    throw { code: 401, message: UNAUTHORIZED_ERROR };
  const dbClient = await getDbClient();
  let classroom = await dbClient
    .db()
    .collection("classrooms")
    .findOne({ code: classid });

  let testindex = classroom.tests.findIndex(
    (test: any) => test.test_code == testid
  );
  let tests = classroom.tests[testindex];
  console.log(tests);
  let student = tests.submissions.find(
    (test: any) => test.student_email == sub_data.student_email
  );
  if (student) throw { code: 409, message: TEST_ALREADY_GIVEN };
  classroom.tests[testindex].submissions.push(sub_data);
  await dbClient
    .db()
    .collection("classrooms")
    .findOneAndUpdate({ code: classid }, { $set: { tests: classroom.tests } });
}
export async function getAllTests(classid: any) {}
