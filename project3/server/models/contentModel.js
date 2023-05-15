const { Schema, Types, model } = require('mongoose');

const contentSchema = new Schema(
  {
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
    rating: {
        type: Number,
        required: true,
        trim: true
      },
    genre: {
        type: String,
        required: true,
        trim: true
      },
    review: {
        type: String,
        required: true,
        trim: true
      },
      url: {
        type: String,
        unique: true,
        required: true,
        trim: true
      }
  }

);

const Content = model('content', contentSchema);
module.exports = Content;