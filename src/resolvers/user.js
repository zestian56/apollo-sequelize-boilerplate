import { combineResolvers } from "graphql-resolvers";
import { AuthenticationError, UserInputError } from "apollo-server";
import { isAdmin, isAuthenticated, createToken } from "../utils/auth";

const getAllUsers = async (parent, args, { models }) => {
  return await models.User.findAll();
};

const signUp = async (parent, { input }, { models,secret }) => {
  const user = await models.User.create({ ...input });
  return { token: createToken(user, secret,"30m") };
};
const signIn = async (parent, { login,password }, { models, secret }) => {
  const user = await models.User.findByLogin(login);
  if (!user) {
    throw new UserInputError("No user found with this login credentials.");
  }
  const isValid = await user.validatePassword(password);
  if (!isValid) {
    throw new AuthenticationError("Invalid password.");
  }
  return { token: createToken(user, secret, "30m") };
};

const updateUser = async (parent, { input }, { models, currentUser }) => {
  const user = await models.User.findById(currentUser.id);
  return await user.update({ ...input });
};

const deleteUser = async (parent, { id }, { models }) => {
  return await models.User.destroy({
    where: { id }
  });
};

const userResolvers = {
  Query: {
    users: combineResolvers(isAuthenticated,getAllUsers)
  },
  Mutation: {
    signUp: signUp,
    signIn: signIn,
    updateUser: combineResolvers(isAuthenticated, updateUser),
    deleteUser: combineResolvers(isAdmin, deleteUser)
  }
};

export default userResolvers;
