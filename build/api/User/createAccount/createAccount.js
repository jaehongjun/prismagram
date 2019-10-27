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
    createAccount: function () {
      var _createAccount = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_, args, _ref) {
        var request, username, email, _args$firstName, firstName, _args$lastName, lastName, _args$bio, bio, exists;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request;
                username = args.username, email = args.email, _args$firstName = args.firstName, firstName = _args$firstName === void 0 ? "" : _args$firstName, _args$lastName = args.lastName, lastName = _args$lastName === void 0 ? "" : _args$lastName, _args$bio = args.bio, bio = _args$bio === void 0 ? "" : _args$bio;
                _context.next = 4;
                return _prismaClient.prisma.$exists.user({
                  OR: [{
                    username: username
                  }, {
                    email: email
                  }]
                });

              case 4:
                exists = _context.sent;

                if (!exists) {
                  _context.next = 7;
                  break;
                }

                throw Error("This username / email is already token");

              case 7:
                _context.prev = 7;
                _context.next = 10;
                return _prismaClient.prisma.createUser({
                  username: username,
                  email: email,
                  firstName: firstName,
                  lastName: lastName,
                  bio: bio
                });

              case 10:
                return _context.abrupt("return", true);

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](7);
                return _context.abrupt("return", false);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[7, 13]]);
      }));

      function createAccount(_x, _x2, _x3) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }
};
exports.default = _default;