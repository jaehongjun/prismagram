"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _os = require("os");

var _fragments = require("../../../fragments");

var _default = {
  Query: {
    seeRooms: function seeRooms(_, __, _ref) {
      var request = _ref.request,
          isAuthenticated = _ref.isAuthenticated;
      isAuthenticated(request);
      var user = request.user;
      return _prismaClient.prisma.rooms({
        where: {
          participants_some: {
            id: _os.userInfo.id
          }
        }
      });
    }
  }
};
exports.default = _default;