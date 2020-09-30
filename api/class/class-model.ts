import * as yup from "yup";

export const classSchema = yup.object().shape({
  subject_code: yup.string().required(),
  subject: yup.string().required(),
  meeting: yup.object({
    link: yup.string().url(),
    provider: yup.string(),
  }),
  tests: yup.array().default(function () {
    return [];
  }),
  teacher: yup.string(),
  students: yup
    .array()
    .of(
      yup.object({
        id: yup.string(),
        tests: yup.array().of(
          yup.object({
            test_id: yup.string(),
            reports: yup.array(),
            submiited: yup.bool(),
          })
        ),
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
