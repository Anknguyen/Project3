const User = require('../models/userModel.js');
const Content = require('../models/contentModel.js');

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      const user = await User.findById(id);
      return user;
    },
    getUsers: async () => {
      const users = await User.find({});
      return users;
    },
    getContent: async (_, { name }) => {
      const content = await Content.findOne({ name });
      return content;
    },
    getContents: async () => {
      const contents = await Content.find({});
      return contents;
    },
  },
};

module.exports = resolvers;
