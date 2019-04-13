import { prisma } from "../../../../generated/prisma-client";
import { USER_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      // post를 같이 가져오고 싶을 때 1
      //   return prisma.user({ id: user.id }).$fragment(USER_FRAGMENT);

      // post를 같이 가져오고 싶을 때 2 (이게 더 편한듯)
      const userProfile = await prisma.user({ id: user.id });
      const posts = await prisma.user({ id: user.id }).posts();
      return {
        user: userProfile,
        posts
      };
    }
  }
};
