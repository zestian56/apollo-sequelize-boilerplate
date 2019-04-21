import { ForbiddenError } from "apollo-server";
import { combineResolvers, skip } from "graphql-resolvers";
import jwt from "jsonwebtoken";

const isAuthenticated = (parent, args, { currentUser }) => {
  return currentUser ? skip : new ForbiddenError("Please log in again");
};

const isAdmin = combineResolvers(
  isAuthenticated,
  (parent, args, { currentUser: { role } }) =>
    role === "ADMIN"
      ? skip
      : new ForbiddenError("You dont have enough permissions for this action.")
);

const getUser = async (req, secret) => {
  const token = req.headers["authorization"];
  if (token) {
    try {
      return await jwt.verify(token, secret);
    } catch (e) {
      return;
    }
  }
};
const createToken = async (user, secret, expiresIn) => {
  const { id, email, username, role } = user;
  return await jwt.sign({ id, email, username, role }, secret, {
    expiresIn
  });
};

export { isAuthenticated, getUser, isAdmin, createToken };
