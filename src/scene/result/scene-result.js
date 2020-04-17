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
var SceneResult = /** @class */ (function (_super) {
    __extends(SceneResult, _super);
    function SceneResult(gameManager) {
        return _super.call(this, gameManager, scene_name_1.SceneName.Result) || this;
    }
    SceneResult.prototype.main = function () {
        var _this = this;
        var mc = new lib.PageResult();
        this.sceneContainer.addChild(mc);
        // リスナーの登録
        mc.btnBack.on('click', function () {
            _this.gameManager.sceneChange(scene_name_1.SceneName.Game);
        });
        mc.btnNext.on('click', function () {
            _this.gameManager.sceneChange(scene_name_1.SceneName.Top);
        });
    };
    return SceneResult;
}(scene_1.Scene));
exports.SceneResult = SceneResult;
