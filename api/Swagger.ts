import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ITSM API Docs",
      version: "1.0",
    },
    servers: [
      {
        url: "http://localhost:8000/api/v1",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
        security: [
          {
            bearerAuth: [],
          },
        ],
      },
    },
  },
  apis: ["./Routes/*.Routes.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
