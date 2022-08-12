import { ApolloServer } from "apollo-server";
import gqlschema from "./schema";

// export async function Server(context: any) {
//   const schema = await gqlschema.getSchema();
//   return new ApolloServer({ schema, context });
// }

const Server = async (context: any) => {
  const schema = await gqlschema.getSchema();
  const server = new ApolloServer({ schema, context });
  return server;
};

export { Server };
