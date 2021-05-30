const postsResolvers = require("./postResolver");
const usersResolvers = require("./userResolvers");
const commentsResolvers = require("./CommentResolver");

module.exports = {
  Post: {
    //   likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation
  },
  Subscription: {
    ...postsResolvers.Subscription
  }
};
