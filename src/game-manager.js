"use strict";
exports.__esModule = true;
var GameManager = /** @class */ (function () {
    function GameManager(game, stage) {
        this.mode = process.env.BUILD_MODE;
        this.state = Status.STOP;
        if (this.mode === 'dev') {
            console.group('GameManager constructor()');
            console.log('game : ', game);
            console.log('stage : ', stage);
            console.groupEnd();
        }
        this.game = game;
        this.stage = stage;
    }
    GameManager.prototype.sceneChange = function (newSceneName) {
        var scene = this.game.sceneList.find(function (v) { return v.name === newSceneName; });
        if (!scene) {
            throw new Error("newScene (" + newSceneName + ") is undefined ...");
        }
        this.stage.removeAllEventListeners();
        this.stage.removeAllChildren();
        this.stage.addChild(scene.makeSceneContainer());
    };
    GameManager.prototype.getState = function () {
        return this.state;
    };
    GameManager.prototype.setRunState = function () {
        this.state = Status.RUN;
    };
    GameManager.prototype.setStopState = function () {
        this.state = Status.STOP;
    };
    return GameManager;
}());
exports.GameManager = GameManager;
var Status = /** @class */ (function () {
    function Status() {
    }
    Status.RUN = 'Run';
    Status.STOP = 'Stop';
    return Status;
}());
