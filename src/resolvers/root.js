import { GraphQLDateTime } from "graphql-iso-date";
import { GraphQLUpload } from "graphql-upload";

const rootResolvers = {
  Mutation: { status: () => true },
  Query: { status: () => true },
  Subscription: { status: () => true },
  Upload: GraphQLUpload,
  Date: GraphQLDateTime
};

export default rootResolvers;
