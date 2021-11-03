import useSWR from "swr";
import client from "../../client";
import { NextPage } from "next";
import { GraphQLClient } from "graphql-request";

const query = `
  {
    viewer {
      username
      name
    }
  }
`;

const fetcher = (query: string, client: GraphQLClient) => {
  return client.request(query);
};

const Index: NextPage = () => {
  const { data, error } = useSWR([query, client], fetcher);
  if (!data) return <p>loading</p>;
  if (error) return <p>error</p>;

  return <div>Hello {data.viewer.username} !</div>;
};

export default Index;
