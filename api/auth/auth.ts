import { Request, Response, NextFunction } from "express";
import { SERVER_ERROR, UNAUTHORIZED_ERROR } from "../utils/errors";

export function authenticate() {
  return async (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    if (!header) {
      return res.status(401).json(UNAUTHORIZED_ERROR);
    }
    const token = header.split(" ")[1];
    if (!token) {
      return res.status(401).json(UNAUTHORIZED_ERROR);
    }

    try {
      const user = await token; //FIXME  Get user
      if (!user) {
        return res.status(401).json(UNAUTHORIZED_ERROR);
      }

      res.locals.token = token;
      res.locals.user = user;

      next();
    } catch (err) {
      res.status(500).json(SERVER_ERROR);
    }
  };
}
