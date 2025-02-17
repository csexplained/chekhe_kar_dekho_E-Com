import Product from '../models/Products.model.js';
import { uploadOnCloudinary, deletefromcloudinary } from '../utils/cloudinary.js';
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      discountprice,
      storageInfo,
      ingredients,
      benifits,
      price,
      category,
      stock,
      reviews,
      ratings
    } = req.body;

    // Validate required fields
    if (!name || !ratings || !reviews || !description || !price || !category || !ingredients || !benifits || !storageInfo || !discountprice) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    // With multer, files are available in req.files
    if (!req.files) {
      return res.status(400).json({ message: 'Please upload images.' });
    }

    const mainImages = req.files['images'] || [];
    const extraImages = req.files['extraimages'] || [];

    // Upload main and extra images to Cloudinary
    const mainImageUploadPromises = mainImages.map(file => uploadOnCloudinary(file.path));
    const extraImageUploadPromises = extraImages.map(file => uploadOnCloudinary(file.path));

    const [mainImageResults, extraImageResults] = await Promise.all([
      Promise.all(mainImageUploadPromises),
      Promise.all(extraImageUploadPromises)
    ]);

    const mainImageUrls = mainImageResults.map(result => result.secure_url);
    const extraImageUrls = extraImageResults.map(result => result.secure_url);

    // Create new product
    const newProduct = await Product.create({
      name,
      description,
      price,
      discountprice,
      storageInfo,
      ingredients,
      benifits,
      category,
      ratings,
      reviews,
      images: mainImageUrls,
      extraimages: extraImageUrls,
      stock,
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
      sort = '-createdAt', // Default sort by newest first
      category,
      minPrice,
      maxPrice,
      sortOrder // New param for price sorting
    } = req.query;

    // Build query object for filtering
    const query = {};
    if (category) {
      query.category = category;
    }

    // Price range filtering
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Dynamic sorting logic
    let sortOption = sort;
    if (sortOrder === 'asc') {
      sortOption = 'price'; // Sort by ascending price
    } else if (sortOrder === 'desc') {
      sortOption = '-price'; // Sort by descending price
    }

    // Fetch products with pagination and filtering
    const products = await Product.find(query)
      .populate('category')
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalProducts = await Product.countDocuments(query);

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

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate('category');

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(200).json({
      success: true,
      product
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const files = Array.isArray(req.files) ? req.files : Object.values(req.files || {}).flat();
    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // Handle existing images from client
    const existingMainImages = req.body.existingImages || [];
    const existingExtraImages = req.body.existingExtraImages || [];

    // Delete old images from Cloudinary that are not in existing images
    const mainImagesToDelete = product.images.filter(url => !existingMainImages.includes(url));
    const extraImagesToDelete = product.extraimages.filter(url => !existingExtraImages.includes(url));
    
    const deleteMainImagePromises = mainImagesToDelete.map(url => deletefromcloudinary(url));
    const deleteExtraImagePromises = extraImagesToDelete.map(url => deletefromcloudinary(url));
    
    await Promise.all([...deleteMainImagePromises, ...deleteExtraImagePromises]);

    // Upload new main and extra images to Cloudinary
    const mainImageUploadPromises = files
      .filter(file => file.fieldname === 'images')
      .map(file => uploadOnCloudinary(file.path));
    
    const extraImageUploadPromises = files
      .filter(file => file.fieldname === 'extraimages')
      .map(file => uploadOnCloudinary(file.path));

    const [mainImageResults, extraImageResults] = await Promise.all([
      Promise.all(mainImageUploadPromises),
      Promise.all(extraImageUploadPromises)
    ]);

    const mainImageUrls = mainImageResults.map(response => response.secure_url);
    const extraImageUrls = extraImageResults.map(response => response.secure_url);

    // Combine existing and new image URLs
    updatedData.images = [...existingMainImages, ...mainImageUrls];
    updatedData.extraimages = [...existingExtraImages, ...extraImageUrls];

    // Remove temporary fields before updating
    delete updatedData.existingImages;
    delete updatedData.existingExtraImages;

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      product: updatedProduct
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
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
  getProductById,
  updateProduct,
  deleteProduct
};