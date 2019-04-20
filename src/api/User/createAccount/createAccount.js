import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args, { request }) => {
      const { username, email, firstName = "", lastName = "", bio = "" } = args;
      try {
        await prisma.createUser({
          username,
          email,
          firstName,
          lastName,
          bio
        });

        return true;
      } catch (error) {
        return false;
      }
    }
  }
};
