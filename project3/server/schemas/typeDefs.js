const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
  }

  type content {
    title: String!
    rating: Number
    genre: String!
    review: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    name: String!
    rating: Number
    genre: Sting!
    reviews: Sting!
  }

  type Mutation {
    addUser(email: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    addComment(
      thoughtId: ID!
      commentText: String!
      commentAuthor: String!
    ): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
