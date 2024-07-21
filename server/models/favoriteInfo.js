import mongoose from "mongoose";

const favoriteSchema = mongoose.Schema({
    title: String,
    info: String,
    director: String,
    tags: [String],
    selectedFile: String,
    ratings: Number,
    createdAt: Date,
});

const FavoriteInfo = mongoose.model("FavoriteInfo", favoriteSchema);

export default FavoriteInfo;
