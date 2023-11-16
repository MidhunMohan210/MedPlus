import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import useRoute from "./routes/user.js";
import doctorRoute from "./routes/doctor.js";
import adminRoute from "./routes/admin.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { truncate } from "fs";

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbURL = "mongodb://127.0.0.1:27017/MedPlus";

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

dotenv.config();

const app = express();
app.use(cookieParser());

const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "public")));

//configuring cors

const corsOptions = {
  origin: true,
  credentials: true,
};

//configuring middlwares

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors(corsOptions));
app.use("/api/auth", authRoute);
app.use("/api/users", useRoute);
app.use("/api/doctors", doctorRoute);
app.use("/api/admin", adminRoute);

app.listen(port, () => {
  try {
  console.log(`server is running on port ${port}`);
    
  } catch (error) {
    console.log(error)
  }
});
