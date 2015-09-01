"use strict";

var
  React = require("react"),
  PIXI = require("pixi.js");


var pixi_renderer_instance = PIXI.autoDetectRenderer(400, 300);

module.exports = React.createClass({
  componentDidMount: function(){
    this.getDOMNode().appendChild(pixi_renderer_instance.view);
  },
  render: function(){
    return (
      <div/>
    );
  }
});
