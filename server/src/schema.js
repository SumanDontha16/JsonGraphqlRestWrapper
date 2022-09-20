const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    albums: [Album]
    album(id: ID!): Album
  }

  type Album {
    userId: Int
    id: Int
    title: String
  }
`;

module.exports = typeDefs;
