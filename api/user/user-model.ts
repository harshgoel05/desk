import * as yup from "yup";

export enum Role {
  Student = "student",
  Teacher = "teacher",
  Admin = "admin",
}

export const userSchema = yup.object().shape({
  id: yup.string().required(),
  fName: yup.string().required(),
  lName: yup.string().required(),
  email: yup.string().email().trim(),
  role: yup.string().oneOf(Object.values(Role)),
  classes: yup.array().default(function () {
    return [];
  }),
  timestamp: yup.date().default(function () {
    return +new Date();
  }),
});
