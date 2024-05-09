import { kv } from "@vercel/kv";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    users: [User]
    userById(id: String!): User
  }
  type User {
    id: String
    evaluations: [Evaluation]
  }
  type Evaluation {
    id: String
    alerts: [String]
  }
  type Mutation {
    dropAlertFromEval(evaluationId: String!, alert: String!): Evaluation
    addAlertToEval(evaluationId: String!, alert: String!): Evaluation
  }
`;

// default values to seed KV storage, not used every time
const usersDatabase = [
  {
    id: "123",
    evaluations: [
      {
        id: "123123",
        alerts: ["A", "B"],
      },
    ],
  },
  {
    id: "345",
    evaluations: [
      {
        id: "345345",
        alerts: [],
      },
    ],
  },
];

const resolvers = {
  Query: {
    users: async () => {
      return await kv.get("users");
    },
    userById: async (_ctx: any, variables: any) => {
      const usersDb = (await kv.get("users")) as typeof usersDatabase;
      return usersDb.find((a) => a.id === variables.id);
    },
  },
  Mutation: {
    dropAlertFromEval: async (_ctx: any, variables: any) => {
      const usersDb = (await kv.get("users")) as typeof usersDatabase;
      const evals = usersDb.flatMap((e) => e.evaluations);
      const ev = evals.find((e) => e.id === variables.evaluationId);
      if (!ev) throw new Error("no evaluation");
      ev.alerts = ev.alerts.filter((a) => a !== variables.alert);
      await kv.set("users", usersDb);
      return ev;
    },
    addAlertToEval: async (_ctx: any, variables: any) => {
      const usersDb = (await kv.get("users")) as typeof usersDatabase;
      const evals = usersDb.flatMap((e) => e.evaluations);
      const ev = evals.find((e) => e.id === variables.evaluationId);
      if (!ev) throw new Error("no evaluation");
      ev.alerts = [
        variables.alert,
        ...(ev?.alerts.filter((a) => a !== variables.alert) || []),
      ];
      await kv.set("users", usersDb);
      return ev;
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  //   plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res }),
});

export { handler as GET, handler as POST };

// export async function GET() {
//     return Response.json({ ex: 1 });
//   }
