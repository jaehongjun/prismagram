import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const EDIT = "EDIT";
      const DELETE = "DELETE";
      const { id, caption, location, action } = args;
      const { user } = request;
      const post = await prisma.$exists.post({
        id,
        user: {
          id: user.id
        }
      });
      if (post) {
        if (action === EDIT) {
          return await prisma.updatePost({
            data: {
              caption,
              location
            },
            where: {
              id
            }
          });
        } else if (action === DELETE) {
          return await prisma.deletePost({
            id
          });
        }
      } else throw Error("You can't do that");
    }
  }
};
