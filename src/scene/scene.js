"use strict";
exports.__esModule = true;
var Scene = /** @class */ (function () {
    function Scene(gameManager, name) {
        this.sceneContainer = new createjs.Container();
        this.gameManager = gameManager;
        this.name = name;
    }
    Scene.prototype.makeSceneContainer = function () {
        this.sceneContainer = new createjs.Container();
        this.main();
        return this.sceneContainer;
    };
    Scene.prototype.main = function () {
    };
    return Scene;
}());
exports.Scene = Scene;
