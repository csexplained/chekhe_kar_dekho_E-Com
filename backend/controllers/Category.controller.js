import Category from "../models/category/catogary.js";

// Controller for handling categories
const CategoryController = {

    /** 
     * @desc    Get all categories
     * @route   GET /api/categories
     * @access  Public
     */
    getAllCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            res.status(200).json({ success: true, data: categories });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server Error', error: error.message });
        }
    },

    /** 
     * @desc    Get a single category by ID
     * @route   GET /api/categories/:id
     * @access  Public
     */
    getCategoryById: async (req, res) => {
        try {
            const { id } = req.params;
            const category = await Category.findById(id);

            if (!category) {
                return res.status(404).json({ success: false, message: 'Category not found' });
            }

            res.status(200).json({ success: true, data: category });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server Error', error: error.message });
        }
    },

    /** 
     * @desc    Create a new category
     * @route   POST /api/categories
     * @access  Public
     */
    createCategory: async (req, res) => {
        try {

            const categoryData = req.body;
    const category = new Category(categoryData);
    await category.save();
            // if (!name) {
            //     return res.status(400).json({ success: false, message: 'Name is required' });
            // }

            // const newCategory = new Category({ name, description });
            // const savedCategory = await newCategory.save();

            res.status(201).json({ success: true,message:"category created sucessfully", data: category });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server Error', error: error.message });
        }
    },

    getCategoryData:async (req,res)=>{
        try {
            const { categoryId } = req.params;

            // List of valid categories that exist in the schema
            const validCategories = ['pickle', 'chutney', 'superSeeds', 'healthyNuts'];
        
            // Check if the categoryId is valid
            if (!validCategories.includes(categoryId)) {
              return res.status(400).json({ error: 'Invalid category ID. Valid categories are pickle, chutney, superSeeds, healthyNuts.' });
            }
        
            // Find categories with the specified categoryId (e.g., pickle, chutney, etc.)
            const categories = await Category.find({}, categoryId);
        
            // Extract the requested category data (e.g., pickle) from each category
            const products = categories.map(category => category[categoryId]).filter(product => product);
        
            if (products.length === 0) {
              return res.status(404).json({ message: `No ${categoryId} found` });
            }
        
            res.status(200).json(products);
          } catch (err) {
            res.status(400).json({ error: 'Failed to fetch data,category.controller', message: err.message });
          }

    },
    getAllCategoryData:async (req,res)=>{
        try {
            
            const categories = await Category.find();
      
            if (categories.length === 0) {
              return res.status(404).json({ message: 'No categories found' });
            }
      
            res.status(200).json(categories);
          } catch (err) {
            res.status(500).json({ error: 'Failed to fetch categories', message: err.message });
          }
    },

    /** 
     * @desc    Update an existing category
     * @route   PUT /api/categories/:id
     * @access  Public
     */
    updateCategory: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description } = req.body;
            const updatedData = { name, description, updatedAt: Date.now() };

            const updatedCategory = await Category.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

            if (!updatedCategory) {
                return res.status(404).json({ success: false, message: 'Category not found' });
            }

            res.status(200).json({ success: true, data: updatedCategory });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server Error', error: error.message });
        }
    },

    /** 
     * @desc    Delete a category by ID
     * @route   DELETE /api/categories/:id
     * @access  Public
     */
    deleteCategory: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedCategory = await Category.findByIdAndDelete(id);

            if (!deletedCategory) {
                return res.status(404).json({ success: false, message: 'Category not found' });
            }

            res.status(200).json({ success: true, message: 'Category deleted successfully', data: deletedCategory });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server Error', error: error.message });
        }
    },

};

export default CategoryController;
