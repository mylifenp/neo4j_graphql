import "dotenv/config";
import neo4j from "neo4j-driver";
import { NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD, ENV } from "../config";

// const driver = () => {
//   if (ENV === "development") {
//     return neo4j.driver(
//       NEO4J_URI,
//       neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD)
//     );
//   }
// };
export default neo4j.driver(
  NEO4J_URI,
  neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD)
);
