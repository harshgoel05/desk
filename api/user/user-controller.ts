import { Router, Request, Response } from "express";
import { authenticate, getUser } from "../auth/auth";
import { SERVER_ERROR } from "../utils/errors";
import { sendMail, verifyYourEmail } from "../utils/mail";
import { validateRequest } from "../utils/validator";
import { loginSchema, userSchema } from "./user-model";
import {
  loginUser,
  signupUser,
  getUserData,
  verifyEmail,
} from "./user-service";

async function handleLoginUser(req: Request, res: Response) {
  try {
    const user = await loginUser(req.body);
    res.status(200).send(user);
  } catch (err) {
    if (err.code) {
      res.status(err.code).json(err.message);
    }
    res.status(500).json(SERVER_ERROR);
  }
}
async function handleSignupUser(req: Request, res: Response) {
  try {
    const userData = req.body;
    await signupUser(userData);
    await sendMail(userData.email, verifyYourEmail(userData.email));
    res.status(200).send();
  } catch (err) {
    console.log(err);
    if (err.code) {
      res.status(err.code).json(err.message);
    }
    res.status(500).json(SERVER_ERROR);
  }
}
async function handleGetUser(req: Request, res: Response) {
  try {
    const userData = res.locals.user;
    const user = await getUserData(userData);
    res.status(200).send(user);
  } catch (err) {
    if (err.code) {
      res.status(err.code).json(err.message);
    }
    res.status(500).json(SERVER_ERROR);
  }
}
async function handleVerifyEmail(req: Request, res: Response) {
  try {
    const email = req.params.email;
    const user = await verifyEmail(email);
    res.status(200).send(user);
  } catch (err) {
    if (err.code) {
      res.status(err.code).json(err.message);
    }
    res.status(500).json(SERVER_ERROR);
  }
}

export default function userController() {
  const router = Router();
  router.post("/login", validateRequest("body", loginSchema), handleLoginUser);
  router.post("/signup", validateRequest("body", userSchema), handleSignupUser);
  router.put("/verifyemail/:email", handleVerifyEmail);
  router.get("/", authenticate(), handleGetUser);
  return router;
}
