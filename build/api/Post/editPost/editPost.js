"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    editPost: function () {
      var _editPost = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, EDIT, DELETE, id, caption, location, action, user, post;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                EDIT = "EDIT";
                DELETE = "DELETE";
                id = args.id, caption = args.caption, location = args.location, action = args.action;
                user = request.user;
                _context.next = 8;
                return _prismaClient.prisma.$exists.post({
                  id: id,
                  user: {
                    id: user.id
                  }
                });

              case 8:
                post = _context.sent;

                if (!post) {
                  _context.next = 22;
                  break;
                }

                if (!(action === EDIT)) {
                  _context.next = 16;
                  break;
                }

                _context.next = 13;
                return _prismaClient.prisma.updatePost({
                  data: {
                    caption: caption,
                    location: location
                  },
                  where: {
                    id: id
                  }
                });

              case 13:
                return _context.abrupt("return", _context.sent);

              case 16:
                if (!(action === DELETE)) {
                  _context.next = 20;
                  break;
                }

                _context.next = 19;
                return _prismaClient.prisma.deletePost({
                  id: id
                });

              case 19:
                return _context.abrupt("return", _context.sent);

              case 20:
                _context.next = 23;
                break;

              case 22:
                throw Error("You can't do that");

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function editPost(_x, _x2, _x3) {
        return _editPost.apply(this, arguments);
      }

      return editPost;
    }()
  }
};
exports.default = _default;