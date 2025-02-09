import mongoose from 'mongoose';

const ComboBannerSchema = new mongoose.Schema({
    imgSrc: { type: String, required: true },
    altText: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export default mongoose.model('ComboBanner', ComboBannerSchema);