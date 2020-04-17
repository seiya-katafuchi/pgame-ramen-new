"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var scene_1 = require("../scene");
var scene_name_1 = require("../scene-name");
var SceneGame = /** @class */ (function (_super) {
    __extends(SceneGame, _super);
    function SceneGame(gameManager) {
        var _this = _super.call(this, gameManager, scene_name_1.SceneName.Game) || this;
        _this.score = 100;
        return _this;
    }
    SceneGame.prototype.main = function () {
        var _this = this;
        var mc = new lib.PageGame();
        this.sceneContainer.addChild(mc);
        mc.textScore.text = this.score.toString();
        mc.textScore2.text = this.score.toString();
        // リスナーの登録
        mc.btnBack.on('click', function () {
            _this.gameManager.sceneChange(scene_name_1.SceneName.Top);
            _this.score = 100;
            mc.textScore.text = _this.score.toString();
        });
        mc.btnNext.on('click', function () {
            _this.gameManager.sceneChange(scene_name_1.SceneName.Result);
            _this.gameManager.game.gameEnd(_this.score);
            _this.score = 100;
            mc.textScore.text = _this.score.toString();
        });
        mc.btnPlus.on('click', function () {
            console.log('hoge');
            _this.score++;
            mc.textScore.text = _this.score.toString();
            _this.gameManager.game.pgameAdPopUp();
        });
        mc.btnMinus.on('click', function () {
            _this.score--;
            mc.textScore.text = _this.score.toString();
        });
    };
    return SceneGame;
}(scene_1.Scene));
exports.SceneGame = SceneGame;
