import { Neo4jGraphQL } from "@neo4j/graphql";
import typeDefs from "../typeDefs";
import resolvers from "../resolvers";

export default new Neo4jGraphQL({
  typeDefs,
  resolvers,
});
