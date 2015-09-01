"use strict";

var
  React = require("react"),
  Game = require("game"),
  MenuMain = require("menu_main");

module.exports = React.createClass({
  getInitialState: function(){
    return {
      current: "menu"
    };
  },
  toggleGameActive: function() {
    this.setState({
      current: this.state.active === "menu" ? "game" : "menu"
    });
  },
  startGame: function() {
    this.setState({current: "game"});
  },
  render: function(){
    var content = null;

    if(this.state.current === "game") content = <Game/>;
    if(this.state.current === "menu") content = <MenuMain startGame={this.startGame}/>;

    return (
      <div>      
        <a onClick={this.toggleGameActive}>Toggle Game</a>
        {content}
      </div>
    );
  }
});
