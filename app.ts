require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import swaggerSpec from "./api/Swagger";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { ErrorMiddleware } from "./api/middlewares/Errors";

// body parser
app.use(express.json({ limit: "50mb" }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.static("public"));

app.get(
  "/api/v1/heartbeat",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      success: true,
      message: "API is working",
    });
  }
);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("docs.json", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.use(ErrorMiddleware);
