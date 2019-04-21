const { gql } = require("apollo-server");

const userSchema = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    role: String
  }
  type Token {
    token: String!
  }
  extend type Query {
    user(id: ID!): User
    users: [User]
  }
  input UserInput {
    username: String
    email: String
    password: String
    role: String
  }
  extend type Mutation {
    signUp(input: UserInput!): Token!
    signIn(login: String!, password: String!): Token!
    updateUser(id: ID!,input: UserInput!): User!
    deleteUser(id: ID!): Boolean!
  }
`;

export default userSchema;
