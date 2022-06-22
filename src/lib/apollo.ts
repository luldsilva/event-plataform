import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ppbcx42c4a01xlhr4a9wyh/master",
  cache: new InMemoryCache()
});
