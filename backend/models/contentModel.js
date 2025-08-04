import mongoose from 'mongoose';

const contentSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['hero', 'about', 'testimonial', 'benefit', 'faq', 'policy'],
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    content: {
      type: String,
    },
    image: {
      type: String,
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

const Content = mongoose.model('Content', contentSchema);

export default Content;