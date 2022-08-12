import { gql } from "apollo-server";

export default gql`
  type Programmer {
    programmerId: ID! @id
    firstName: String!
    lastName: String!
    fullName: String! @computed
    languages: [Language!]! @relationship(type: "CAN_PROGRAMM_IN", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
  }
`;
