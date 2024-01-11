//We are going to download
//express: to setup the backend server
//mongoose:to interact with MONGODB
//cors: for handling Cross origin Resources
//dotenv: for handling private environment variable
//body-parser: to parsing incoming body request
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todo.js";

const app = express(); //initialised app
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//Routes
app.use("/todos", todoRoutes);

const CONNECTION = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`I am running on the port:${PORT}`);
    });
  })
  .catch(err => {
    console.log(`I ran into an error:${err}`);
  });
