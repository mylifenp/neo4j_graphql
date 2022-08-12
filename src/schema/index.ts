import { Neo4jGraphQL } from "@neo4j/graphql";
import typeDefs from "../typeDefs";
import driver from "../driver";
import resolvers from "../resolvers";

export default new Neo4jGraphQL({
  typeDefs,
  resolvers,
  driver,
});
