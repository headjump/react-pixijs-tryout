"use strict";

var
  React = require("react"),
  Link = require("react-router").Link;

module.exports = React.createClass({
  render: function(){
    return (
      <div className={"menu"}>      
        <h1 className={"sample"}>The game!</h1>
        <p>
          <Link className={"btn"} to="game">Start Game!</Link>
        </p>
      </div>
    );
  }
});
