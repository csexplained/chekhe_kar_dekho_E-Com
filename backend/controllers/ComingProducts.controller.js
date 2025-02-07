import { ComingSoonproduct as Product } from '../models/ComingSoonProducts.model.js';
import { uploadOnCloudinary, deletefromcloudinary } from '../utils/cloudinary.js';


export const createProduct = async (req, res) => {
  try {
    const { name, } = req.body;
    // Validate required fields
    if (!name) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    // With multer, files are available in req.files
    if (!req.files) {
      return res.status(400).json({ message: 'Please upload images.' });
    }

    const mainImages = req.files['images'] || [];

    // Upload main and extra images to Cloudinary
    const mainImageUploadPromises = mainImages.map(file => uploadOnCloudinary(file.path));

    const [mainImageResults, extraImageResults] = await Promise.all([
      Promise.all(mainImageUploadPromises),
    ]);

    const mainImageUrls = mainImageResults.map(result => result.secure_url);
   
    // Create new product
    const newProduct = await Product.create({
      name,
      images: mainImageUrls,
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product: newProduct
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};
export const getAllProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
    } = req.query;

  
    // Fetch products with pagination and filtering
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalProducts = await Product.countDocuments();

    res.status(200).json({
      success: true,
      total: totalProducts,
      page: Number(page),
      pages: Math.ceil(totalProducts / limit),
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the product in one go
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // Delete all images from Cloudinary
    const deleteMainImagePromises = product.images.map(url => deletefromcloudinary(url));
    const deleteExtraImagePromises = product.extraimages.map(url => deletefromcloudinary(url));
    await Promise.all([...deleteMainImagePromises, ...deleteExtraImagePromises]);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export default {
  createProduct,
  getAllProducts,
  deleteProduct
};