import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
