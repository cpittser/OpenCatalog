import { Request, Response, NextFunction } from "express";
import coreSoftwareModel from "../../models/CoreSoftware.Model";
import ErrorHandler from "../../../api/middlewares/ErrorHandler";
import { CatchAsyncError } from "../../../api/middlewares/catchAsyncErrors";

export const newCoreSoftware = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { manufacturer, productLine, partNumber, upc, category } = req.body;

      const partNumberExist = await coreSoftwareModel.findOne({ partNumber });
      if (partNumberExist) {
        return next(new ErrorHandler("Part Number Already Exists", 400));
      }

      const coreEntry = await coreSoftwareModel.create({
        manufacturer,
        productLine,
        partNumber,
        upc,
        category,
      });

      res.status(200).json({
        success: true,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);
