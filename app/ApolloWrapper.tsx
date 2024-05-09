"use client";

import {
  HttpLink,
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GQL_URI || "http://localhost:3000/api/gql",
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Evaluation: {
        fields: {
          alerts: {
            merge(_existing: any[], incoming: any[]) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  connectToDevTools: true,
});

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
