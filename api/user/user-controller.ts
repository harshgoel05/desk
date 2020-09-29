import { Router, Request, Response } from "express";
import { SERVER_ERROR } from "../utils/errors";
import { validateRequest } from "../utils/validator";
import { userSchema } from "./user-model";
import { loginUser, signupUser } from "./user-service";

async function handleLoginUser(req: Request, res: Response) {
  try {
    await loginUser(req.body);
    res.status(200).send();
  } catch (err) {
    res.status(500).json(SERVER_ERROR);
  }
}
async function handleSignupUser(req: Request, res: Response) {
  try {
    const userData = req.body;
    await signupUser(userData);
    res.status(200).send();
  } catch (err) {
    if (err.code) {
      res.status(err.code).json(err.message);
    }
    res.status(500).json(SERVER_ERROR);
  }
}
export default function userController() {
  const router = Router();
  router.post("/login", handleLoginUser);
  router.post("/signup", validateRequest("body", userSchema), handleSignupUser);
  return router;
}
