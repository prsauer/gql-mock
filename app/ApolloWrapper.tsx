"use client";
// ^ this file needs the "use client" pragma

import {
  ApolloLink,
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
// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
