import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
import rateLimit from "express-rate-limit";
import { TOO_MANY_REQUESTS_ERROR } from "./api/utils/errors";
import { initDbClient } from "./api/utils/database";
import userController from "./api/user/user-controller";
import authController from "./api/auth/auth-controller";
import classController from "./api/class/class-controller";
import testController from "./api/tests/tests-controller";
async function createServer() {
  /************************************************
                    Initialize server
  *************************************************/
  config();
  await initDbClient();
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(
    rateLimit({
      max: Number(process.env.RATE_LIMIT_MAX || 60),
      handler: (req, res) => {
        res.status(429).json(TOO_MANY_REQUESTS_ERROR);
      },
    })
  );
  /************************************************
                    Mount Routes
  *************************************************/
  app.use("/api/v1/user", userController());
  app.use("/api/v1/auth", authController());
  app.use("/api/v1/class", classController());
  app.use("/api/v1/test", testController());
  /************************************************
                    Serve Angular File
  *************************************************/
  app.use(express.static(__dirname + "/client"));
  app.get("*", function (req, res) {
    res.sendFile(__dirname + "/client/index.html");
  });
  /************************************************
                    Start server
  *************************************************/
  app.listen(3000, () => {
    console.log("Server running on port", process.env.PORT);
  });
}

createServer();
