import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import UploadRoute from './Routes/UploadRoute.js'
import cors from 'cors'

const app = express();
//to serve images for public
app.use(express.static("public"))
app.use('/images',express.static("images"))

// Middlewares
app.use(bodyParser.json({ extented: true, limit: "30mb" }));
app.use(bodyParser.urlencoded({ extented: true, limit: "30mb" }));
app.use(cors())
dotenv.config();

//Mongo DB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(process.env.PORT, () => console.log("listening")))
  .catch((err) => console.log(err));

//   Route Use
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);
