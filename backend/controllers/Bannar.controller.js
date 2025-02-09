// controllers/bannerController.ts
import Banner from '../models/mainbannar.model.js';
import combobannarModel from '../models/combobannar.model.js';
import DefinetlybannarModel from '../models/Definetlybannar.model.js';
import varticalbannarModel from '../models/varticalbannar.model.js';
import { uploadOnCloudinary, deletefromcloudinary } from '../utils/cloudinary.js';

const addBannerHelper = async (Model, req, res) => {
    try {
        const { altText } = req.body;
        const userId = req.user.id;

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const uploadResponse = await uploadOnCloudinary(req.file.path);
        const banner = new Model({ imgSrc: uploadResponse.url, altText, userId });
        await banner.save();
        res.status(201).json(banner);
    } catch (error) {
        res.status(500).json({ message: 'Error adding banner', error });
    }
};

const deleteBannerHelper = async (Model, req, res) => {
    try {
        const { id } = req.params;
        await Model.findByIdAndDelete(id);
        res.status(200).json({ message: 'Banner deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting banner', error });
    }
};

const getBannersByUserHelper = async (Model, req, res) => {
    try {
        const banners = await Model.find();
        res.status(200).json(banners);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching banners', error });
    }
};

export const addMainBanner = (req, res) => addBannerHelper(Banner, req, res);
export const addComboBanner = (req, res) => addBannerHelper(combobannarModel, req, res);
export const addDefinetlyBanner = (req, res) => addBannerHelper(DefinetlybannarModel, req, res);
export const addVarticalBanner = (req, res) => addBannerHelper(varticalbannarModel, req, res);

export const deleteMainBanner = (req, res) => deleteBannerHelper(Banner, req, res);
export const deleteComboBanner = (req, res) => deleteBannerHelper(combobannarModel, req, res);
export const deleteDefinetlyBanner = (req, res) => deleteBannerHelper(DefinetlybannarModel, req, res);
export const deleteVarticalBanner = (req, res) => deleteBannerHelper(varticalbannarModel, req, res);

export const getMainBanners = (req, res) => getBannersByUserHelper(Banner, req, res);
export const getComboBanners = (req, res) => getBannersByUserHelper(combobannarModel, req, res);
export const getDefinetlyBanners = (req, res) => getBannersByUserHelper(DefinetlybannarModel, req, res);
export const getVarticalBanners = (req, res) => getBannersByUserHelper(varticalbannarModel, req, res);
