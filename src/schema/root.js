const { gql } = require("apollo-server");

const rootSchema = gql`
  scalar Date
  type File {
    id: ID!
    path: String!
    filename: String!
    mimetype: String!
    encoding: String!
  }
  type Mutation {
    status: Boolean!
  }
  type Query {
    status: Boolean!
  }
  type Subscription {
    status: Boolean!
  }
`;

export default rootSchema;
