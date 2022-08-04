import "./setup.js";
import express, { json } from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

app.use(cors(), json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
