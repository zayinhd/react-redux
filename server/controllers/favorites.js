import FavoriteInfo from "../models/favoriteInfo";

export const getFavorites = async (req, res) => {
    try {
        const favoriteInfo = await FavoriteInfo.find();

        res.status(200).json(favoriteInfo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
export const createFavorites = async (req, res) => {
    const favorite = req.body;

    const newFavorite = new FavoriteInfo(favorite);

    try {
        await newFavorite.save();

        res.status(201).json(newFavorite);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
