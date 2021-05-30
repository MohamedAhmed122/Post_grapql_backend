const { ApolloServer, PubSub } = require("apollo-server");

const typeDefs = require("./graphQl/typDefs.js");
const resolvers = require("./graphQl/resolvers/index.js");
const connectDB = require("./config/db.js");

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

connectDB();

server
  .listen({ port: 5000 })
  .then((res) => console.log(`server is Running on ${res.url}`))
  .catch((err) => console.log(`couldn't run the server ${err}`));
