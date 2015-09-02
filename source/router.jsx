var
  React = require("react"),
  Router = require("react-router"),
  Router = require('react-router'),
  DefaultRoute = Router.DefaultRoute,
  Link = Router.Link,
  Route = Router.Route,
  Redirect = Router.Redirect,
  RouteHandler = Router.RouteHandler;

var
  MenuMain = require("menu_main"),
  Game = require("game");


var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="main">Main</Link></li>
            <li><Link to="game">Game</Link></li>
          </ul>
        </header>

        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="main" handler={MenuMain}/>
    <Route name="game" handler={Game}/>
    <Redirect from="/" to="main" />
  </Route>
);

exports.bootTo = function(targetDOM) {
  Router.run(routes, function (Handler) {
    React.render(<Handler/>, targetDOM);
  });
};