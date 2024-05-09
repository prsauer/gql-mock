"use client";

import {
  HttpLink,
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:3000/api/gql",
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
