const { gql } = require("apollo-server-express");

const typeDefs = gql`
  {
    type Content {
      _id: ID
      name: String
      rating: Number
      genre: String
      reviews: String
    }

    type Auth {
      token: ID
      user: User
    }

    type Query {
      _dummy: String
      contents: content
      content
    }

    type Mutation {
      
    }
  }
`;

module.exports = typeDefs;
