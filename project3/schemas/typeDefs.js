const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    id: ID!
    email: String!
    username: String!
}

type Content {
    name: String!
    rating: Float!
    genre: String!
    reviews: String!
}
  

type Query {
    getContent(name: String!): Content
    getContents: [Content!]!
}

type Query {
    getUser(id: ID!): User
    getUsers: [User]
}
`;