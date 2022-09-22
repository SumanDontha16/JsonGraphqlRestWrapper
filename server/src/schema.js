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
    id: ID
    name: String
    email: String
    phone: String
  }

  input CreateUserInput {
    name: String
    email: String
    phone: String
  }

  input UpdateUserInput {
    id: ID
    name: String
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    updateUserName(input: UpdateUserInput): User
    deleteUser(id: ID!): User
  }
`;

module.exports = typeDefs;
