"use strict";

var
  React = require("react"),
  Game = require("game");

module.exports = React.createClass({
  getInitialState: function(){
    return {
      game_active: false
    };
  },
  toggleGameActive: function() {
    this.setState({
      game_active: !this.state.game_active
    });
  },
  render: function(){
    var game_content = null;
    if(this.state.game_active) game_content = <Game/>;
    return (
      <div>      
        <h1 className={"sample"}>The game!</h1>
        <a onClick={this.toggleGameActive}>Toggle Game</a>
        {game_content}
      </div>
    );
  }
});
