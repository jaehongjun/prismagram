"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _middlewares = require("../../../middlewares");

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    toggleLike: function () {
      var _toggleLike = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_, args, _ref) {
        var request, postId, user, fillterOptions, existingLike, newLike;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request;
                (0, _middlewares.isAuthenticated)(request);
                postId = args.postId;
                user = request.user;
                fillterOptions = {
                  AND: [{
                    user: {
                      id: user.id
                    }
                  }, {
                    post: {
                      id: postId
                    }
                  }]
                };
                _context.prev = 5;
                _context.next = 8;
                return _prismaClient.prisma.$exists.like(fillterOptions);

              case 8:
                existingLike = _context.sent;

                if (!existingLike) {
                  _context.next = 14;
                  break;
                }

                _context.next = 12;
                return _prismaClient.prisma.deleteManyLikes(fillterOptions);

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.next = 16;
                return _prismaClient.prisma.createLike({
                  user: {
                    connect: {
                      id: user.id
                    }
                  },
                  post: {
                    connect: {
                      id: postId
                    }
                  }
                });

              case 16:
                newLike = _context.sent;

              case 17:
                return _context.abrupt("return", true);

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](5);
                console.log(_context.t0);
                return _context.abrupt("return", false);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 20]]);
      }));

      function toggleLike(_x, _x2, _x3) {
        return _toggleLike.apply(this, arguments);
      }

      return toggleLike;
    }()
  }
};
exports.default = _default;