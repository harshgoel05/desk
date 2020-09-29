import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
import rateLimit from "express-rate-limit";
import { TOO_MANY_REQUESTS_ERROR } from "./api/utils/errors";

async function createServer() {
  config();
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  //   Rate Limiter
  app.use(
    rateLimit({
      max: Number(process.env.RATE_LIMIT_MAX || 60),
      handler: (req, res) => {
        res.status(429).json(TOO_MANY_REQUESTS_ERROR);
      },
    })
  );
}

createServer();
