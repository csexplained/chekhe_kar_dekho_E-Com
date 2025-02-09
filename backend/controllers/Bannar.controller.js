// controllers/bannerController.ts
import Banner from '../models/mainbannar.model.js';
import { uploadOnCloudinary, deletefromcloudinary } from '../utils/cloudinary.js';

export const addBanner = async (req, res) => {
    try {
        const { altText } = req.body;
        const userId = req.user.id; // Assuming auth middleware adds user

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const uploadResponse = await uploadOnCloudinary(req.file.path);
        const banner = new Banner({ imgSrc: uploadResponse.url, altText, userId });
        await banner.save();
        res.status(201).json(banner);
    } catch (error) {
        res.status(500).json({ message: 'Error adding banner', error });
    }
};

export const deleteBanner = async (req, res) => {
    try {
        const { id } = req.params;
        await Banner.findByIdAndDelete(id);
        res.status(200).json({ message: 'Banner deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting banner', error });
    }
};

export const getBannersByUser = async (req, res) => {
    try {
        const banners = await Banner.find();
        res.status(200).json(banners);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching banners', error });
    }
};
