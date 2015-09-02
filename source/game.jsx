"use strict";

var
  React = require("react"),
  PIXI = require("pixi.js"),
  $ = require("jquery");

var 
  pixi_renderer_instance = PIXI.autoDetectRenderer(400, 300),
  stage = new PIXI.Container(),
  graphics = new PIXI.Graphics();

// set a fill and line style
graphics.beginFill(0xFF3300);
graphics.lineStyle(10, 0xffd900, 1);

// draw a shape
graphics.moveTo(50,50);
graphics.lineTo(250, 50);
graphics.lineTo(100, 100);
graphics.lineTo(250, 220);
graphics.lineTo(50, 220);
graphics.lineTo(50, 50);
graphics.endFill();
graphics.x = 200;
graphics.y = 200;

stage.addChild(graphics);

var last_tick = new Date();
var animate = function(){
  var 
    now = new Date(),
    deltaSec = (now.getTime() - last_tick.getTime()) / 1000;

  last_tick = now;

  graphics.rotation += 1 * deltaSec;
  pixi_renderer_instance.render(stage);

  window.requestAnimationFrame(animate);
};
animate();

$(function() {
  var 
    $win = $(window);

  var fitScreen = function() {
    pixi_renderer_instance.resize($win.width() - 50, $win.height() - 50);
  };

  $win.resize(fitScreen);
  fitScreen();
});

pixi_renderer_instance.resize(600, 600);

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
