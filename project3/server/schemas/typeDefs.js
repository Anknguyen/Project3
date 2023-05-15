const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
  }

  type Content {
    title: String!
    rating: String
    genre: String
    review: String
    url: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    content (url: String): Content
    allContent: [Content]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addContent( url: String!, title: String!, rating: String!, genre: String!, review: String!): Content
    addComment(
      contentId: ID!
      commentText: String!
      commentAuthor: String!
    ): Content
    removeContent(contentId: ID!): Content
    removeComment(contentId: ID!, commentId: ID!): Content
  }
`;

module.exports = typeDefs;
