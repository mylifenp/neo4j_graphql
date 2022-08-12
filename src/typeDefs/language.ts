import { gql } from "apollo-server";

export default gql`
  type Language {
    languageId: ID! @id
    name: String!
  }
`;