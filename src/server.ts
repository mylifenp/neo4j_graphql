import "dotenv/config";
import { ApolloServer } from "apollo-server";
import { PORT } from "./config";
import schema from "./schema";

const neoSchema = schema;

neoSchema.getSchema().then((schema) => {
  const server = new ApolloServer({ schema });
  server.listen(PORT).then(({ url }) => {
    console.log(`GraphQL server ready at ${url}`);
  });
});
