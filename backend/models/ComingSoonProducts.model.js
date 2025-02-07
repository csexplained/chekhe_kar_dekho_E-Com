import mongoose, { Document, Schema } from 'mongoose';

const ComingSoonproductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  images: [String], // URLs of product images
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const ComingSoonproduct = mongoose.model('ComingSoonProduct', ComingSoonproductSchema);

export { ComingSoonproduct };