import { gql } from "apollo-server";
import programmerSchema from "./programmer";
import languageSchema from "./language";

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, programmerSchema, languageSchema];
