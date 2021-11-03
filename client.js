import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://api.annict.com/graphql", {
  headers: {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  },
});

export default client;