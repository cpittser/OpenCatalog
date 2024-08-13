import express from "express";
import { newCoreHardware } from "../../database/controllers/core/coreHardware.controller";
import { newCoreSoftware } from "../../database/controllers/core/coreSoftware.controller";

const coreRouter = express.Router();

coreRouter.post("/newCoreHardware", newCoreHardware);
coreRouter.post("/newCoreSoftware", newCoreSoftware);

export default coreRouter;
