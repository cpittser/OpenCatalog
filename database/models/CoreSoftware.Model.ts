import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICoreSoftware extends Document {
  manufacturer: string;
  productLine: String;
  partNumber: string;
  upc: string;
  category: string;
}

const coreSoftwareSchema: Schema<ICoreSoftware> = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: [true, "Manufacturer Required"],
  },

  productLine: {
    type: String,
    required: [true, "Product Line Required"],
  },

  partNumber: {
    type: String,
    required: [true, "Part Number is required"],
  },
  upc: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "Entry must have a core categorization"],
  },
});

const coreSoftwareModel: Model<ICoreSoftware> = mongoose.model(
  "coreSoftwareData",
  coreSoftwareSchema
);
export default coreSoftwareModel;
