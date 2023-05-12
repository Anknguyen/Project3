const { Schema, Types } = require('mongoose');

const contentSchema = new Schema(
  {
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
    rating: {
        type: Number,
        unique: true,
        required: true,
        trim: true
      },
    genre: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
    reviews: {
        type: String,
        unique: true,
        required: true,
        trim: true
      }
  }

);

const Content = model('content', contentSchema);
module.exports = Content;