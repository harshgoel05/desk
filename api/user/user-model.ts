import * as yup from "yup";

export enum Role {
  Student = "student",
  Teacher = "teacher",
  Admin = "admin",
}

export const userSchema = yup.object().shape({
  email: yup.string().email().trim().required(),
  password: yup.string().required(),
  fName: yup.string().required(),
  lName: yup.string().required(),
  role: yup.string().oneOf(Object.values(Role)).required(),
  classes: yup.array().default(function () {
    return [];
  }),
  isVerified: yup.bool().default(function () {
    return false;
  }),
  timestamp: yup.number().default(function () {
    return +new Date();
  }),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().trim().required(),
  password: yup.string().required(),
});
