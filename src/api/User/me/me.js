import { prisma } from "../../../../generated/prisma-client";
import { USER_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      // post를 같이 가져오고 싶을 때 1
      //   return prisma.user({ id: user.id }).$fragment(USER_FRAGMENT);

      return await prisma.user({ id: user.id });
    }
  }
};
