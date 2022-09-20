const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    albums: [Album]
    album(id: ID!): Album
    users: [User]
    user(id: ID!): User
  }

  type Album {
    userId: Int
    id: Int
    title: String
  }

  type User {
    id: Int
    name: String
    email: String
    phone: String
  }
`;

module.exports = typeDefs;
