import mongoose, { Document, Schema } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  benifits: {
    type: String,
    required: true,
  },
  storageInfo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountprice: {
    type: String,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  images: [String], // URLs of product images
  extraimages: [String], // URLs of product images
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;