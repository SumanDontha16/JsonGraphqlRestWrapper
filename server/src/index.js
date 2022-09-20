require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const JsonPlaceHolderAPI = require("./datasources/JsonPlaceHolderAPI");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  dataSources: () => ({
    jsonPlaceHolderAPI: new JsonPlaceHolderAPI(),
  }),
  typeDefs,
  resolvers,
});

const port = process.env.PORT || 9000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
