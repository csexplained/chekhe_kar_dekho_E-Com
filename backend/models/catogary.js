import mongoose, { Schema } from 'mongoose';


const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, min: 1, max: 5, default: 3 },
});


const categorySchema = new Schema({
  pickle: productSchema,
  chutney: productSchema,
  superSeeds: productSchema,
  healthyNuts: productSchema,
});

const Category = mongoose.model('Category', categorySchema);

export default Category;