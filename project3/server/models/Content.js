const { Schema, Types, model } = require('mongoose');

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

const Content = model('Content', contentSchema);
module.exports = Content;