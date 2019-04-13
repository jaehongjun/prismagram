import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    // parent = 위에있는 resolver?
    // schema.js에 미리선언하여 찾을 수 있게 함
    fullName: (parent, __, { request }) => {
      return `${parent.firstName} ${parent.lastName}`;
    },
    isFollowing: async (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      try {
        return await prisma.$exists.user({
          AND: [{ id: parentId }, { following_some: { id: user.id } }]
        });
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    }
  }
};
