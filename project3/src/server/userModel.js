const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      }
  }
//   {
//     toJSON: {
//       getters: true,
//     },
//     id: false,
//   }
);

module.exports = userSchema;