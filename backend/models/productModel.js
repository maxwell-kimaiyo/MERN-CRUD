import mongoose from 'mongoose';

const prodctSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  category: { type: String, required: true },
});

const productModel = mongoose.model("Product", prodctSchema);

export default productModel;