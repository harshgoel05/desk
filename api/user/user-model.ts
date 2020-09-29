import * as yup from "yup";

export enum Role {
  Student = "student",
  Teacher = "teacher",
  Admin = "admin",
}

export const userSchema = yup.object().shape({
  fName: yup.string().required(),
  lName: yup.string().required(),
  email: yup.string().email().trim(),
  password: yup.string().required(),
  role: yup.string().oneOf(Object.values(Role)).required(),
  classes: yup.array().default(function () {
    return [];
  }),
  timestamp: yup.number().default(function () {
    return +new Date();
  }),
});
