import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import favoritesRoutes from "./routes/favorites.js";

const app = express();

app.use(bodyParser.json({ limit: "30" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", favoritesRoutes);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "";

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
