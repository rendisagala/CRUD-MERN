import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/routes.js";

const app = express();

// database
mongoose.connect(process.env.DB_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log(`Database is connected..`));

// cors
app.use(cors());

// json format
app.use(express.json());

// routes
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running...`));
