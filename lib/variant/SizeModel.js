import mongoose from 'mongoose';

const SizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Active',
  },
}, { timestamps: true });

export default mongoose.models.Size || mongoose.model('Size', SizeSchema);
