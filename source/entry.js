require("index.html");
require("stylesheets/style.sass");

var 
  router = require("router"),
  $ = require("jquery");

$(function() {
  router.bootTo(document.getElementById("app"));
});