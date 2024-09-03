import express from "express";
import cors from "cors";
import postsRoute from "./routes/posts.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/posts", postsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
