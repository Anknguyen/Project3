const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
  {
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      },
    password: {
        type: String,
        unique: true,
        required: true,
        trim: true
      }
  }

);

const User = model('user', userSchema);
module.exports = User;