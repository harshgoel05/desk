import { Router, Request, Response } from "express";

async function handleAuthController(req: any, res: Response) {
}
export default function authController() {
  const router = Router();

  router.get("/", handleAuthController);
  return router;
}
