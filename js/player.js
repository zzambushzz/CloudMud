(function (window) {

    function Player() {
        this.initialize();
    }

    var p = Player.prototype = new createjs.Container();
    var characterData = {
        images: ["img/sprite.png"],
        frames: {width:32.25, height:48.50},
        animations: {left:[8,11, "left", 6], right:[16,19, "right", 6], up:[24,27, "up", 6], down:[0,3, "down", 6], idle:[0]}
    };
    var spriteSheet = new createjs.SpriteSheet(characterData);
    var animation = new createjs.BitmapAnimation(spriteSheet);

// public properties:


// constructor:
    p.Container_initialize = p.initialize;	//unique to avoid overiding base class

    p.initialize = function () {
        this.Container_initialize();
        this.character = animation;
        this.addChild(this.character);

        this.vX = 0;
        this.vY = 0;
    }

// public methods:


    p.tick = function (event) {
        //move player

        this.x += event.delta/1000*this.vX;
        this.y += event.delta/1000*this.vY;

    }

    p.walk = function(direction) {
        switch (direction) {
            case "left":
                this.vX = -100;
                break;
            case "right":
                this.vX = 100;
                break;
            case "up":
                this.vY = -100;
                break;
            case "down":
                this.vY = 100;
                break;
        }

    }

    window.Player = Player;

}(window));