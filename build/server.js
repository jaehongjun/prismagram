"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("./env");

var _graphqlYoga = require("graphql-yoga");

var _morgan = _interopRequireDefault(require("morgan"));

var _schema = _interopRequireDefault(require("./schema"));

var _passport = require("./passport");

var _middlewares = require("./middlewares");

// sendSecretMail("gatsby0391@naver.com", "123");
var PORT = process.env.PORT || 4000; // context : resolver 사이에 정보를 공유할 떄 사용

var server = new _graphqlYoga.GraphQLServer({
  schema: _schema.default,
  context: function context(_ref) {
    var request = _ref.request;
    return {
      request: request,
      isAuthenticated: _middlewares.isAuthenticated
    };
  }
});
server.express.use((0, _morgan.default)("dev"));
server.express.use(_passport.authenticateJwt); // server.express.use(passport.authenticate("jwt"));

server.start({
  port: PORT
}, function () {
  return console.log("Server running on port ".concat(PORT));
});