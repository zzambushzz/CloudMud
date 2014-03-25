var canvas = document.getElementById('canvas');
var stage = new createjs.Stage(canvas);
var circle = new createjs.Shape();
circle.graphics.beginFill("red").drawRoundRect(0, 0, 40);
circle.x = circle.y = 50;
stage.addChild(circle);
stage.update();