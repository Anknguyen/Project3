const { AuthenticationError } = require('apollo-server-express');
const { Content } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  // Query: {
  //   users: async () => {
  //     return User.find().populate('thoughts');
  //   },
  //   user: async (parent, { username }) => {
  //     return User.findOne({ username }).populate('thoughts');
  //   },
  //   thoughts: async (parent, { username }) => {
  //     const params = username ? { username } : {};
  //     return Content.find(params).sort({ createdAt: -1 });
  //   },
  //   thought: async (parent, { thoughtId }) => {
  //     return Content.findOne({ _id: thoughtId });
  //   },
  // },
    Query: {
      async content() {
        try {
          const allContent = await Content.find();
          return allContent;
        } catch (error) {
          throw new Error(`Failed to retrieve content: ${error.message}`);
        }
      },
    },



    Mutation: {
      addContent: async (parent, args) => {
        const { title, rating, genre, review } = args;
        try {
          const newContent = new Content({ title, rating, genre, review });
          await newContent.save();
          return newContent;
        } catch (error) {
          throw new Error(`Failed to add new content: ${error.message}`);
        }
      }}};