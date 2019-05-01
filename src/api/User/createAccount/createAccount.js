import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args, { request }) => {
      const { username, email, firstName = "", lastName = "", bio = "" } = args;
      const exists = await prisma.$exists.user({
        OR: [
          {
            username
          },
          { email }
        ]
      });
      if (exists) {
        throw Error("This username / email is already token");
      }
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
