import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.annict.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  },
});

export default client;
