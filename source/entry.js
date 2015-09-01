require("index.html");
require("stylesheets/style.sass");

var
  React = require("react"),
  App = require("app"),
  Game = require("game");

React.render(
  React.createElement(Game),
  document.getElementById("app")
);