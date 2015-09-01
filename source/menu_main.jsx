"use strict";

var
  React = require("react");

module.exports = React.createClass({
  render: function(){
    return (
      <div className={"menu"}>      
        <h1 className={"sample"}>The game!</h1>
        <p>
          <a className={"btn"} onClick={this.props.startGame}>Start Game!</a>
        </p>
        <p>
          <a className={"btn"}>Credits</a>
        </p>
      </div>
    );
  }
});
