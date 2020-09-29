import * as yup from "yup";

export const testSchema = yup.object().shape({
  test_code: yup.string(),
  test_name: yup.string().required(),
  test_duration: yup.string().required(),
  total_marks: yup.string().required(),
  startTime: yup.number().required(),
  questions: yup.array().default(function () {
    return [];
  }),
  submissions: yup
    .array()
    .of(
      yup.object({
        student_email: yup.string().email().required(),
        responses: yup.array().default(function () {
          return [];
        }),
        cheat_scores: yup.array().default(function () {
          return [];
        }),
      })
    )
    .default(function () {
      return [];
    }),
  timestamp: yup.number().default(function () {
    return +new Date();
  }),
});

export const classIdSchema = yup.string().required();
