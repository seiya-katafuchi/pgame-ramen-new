"use strict";
exports.__esModule = true;
var game_manager_1 = require("./game-manager");
var scene_name_1 = require("./scene/scene-name");
var scene_top_1 = require("./scene/top/scene-top");
var scene_game_1 = require("./scene/game/scene-game");
var scene_result_1 = require("./scene/result/scene-result");
var Game = /** @class */ (function () {
    function Game(stage, type) {
        /**
         * dev:  開発環境
         * prod: 本番環境
         */
        this.build_mode = process.env.BUILD_MODE;
        if (this.build_mode === 'dev') {
            console.group('Game constructor()');
            console.log('stage : ', stage);
        }
        this.type = type;
        this.gameManager = new game_manager_1.GameManager(this, stage);
        /**
         * Scene の登録
         * (注) Scene を追加した際には追記すること
         */
        this.sceneList = [
            new scene_top_1.SceneTop(this.gameManager),
            new scene_game_1.SceneGame(this.gameManager),
            new scene_result_1.SceneResult(this.gameManager),
        ];
        this.gameManager.sceneChange(scene_name_1.SceneName.Top);
        this.gameManager.setRunState();
        if (this.build_mode === 'dev') {
            console.groupEnd();
        }
    }
    /**
     * ゲームの一時停止
     */
    Game.prototype.gamePause = function () {
        if (window.hasOwnProperty('pgame_fw_paused')) {
            if (this.build_mode === 'dev') {
                console.log('gamePause ... (fw)');
            }
            // @ts-ignore
            window.pgame_fw_paused();
        }
        else {
            if (this.build_mode === 'dev') {
                console.log('gamePause ... (no fw)');
            }
        }
    };
    /**
     * ゲームの終了
     * @param score
     */
    Game.prototype.gameEnd = function (score) {
        if (window.hasOwnProperty('pgame_fw_ended')) {
            if (this.build_mode === 'dev') {
                console.log('gameEnd ... (fw)');
            }
            // @ts-ignore
            window.pgame_fw_ended(score);
        }
        else {
            if (this.build_mode === 'dev') {
                console.log('gameEnd ... (no fw)');
            }
        }
    };
    /**
     * ゲームのスタート
     */
    Game.prototype.gameStart = function () {
        if (window.hasOwnProperty('pgame_fw_playcountup')) {
            if (this.build_mode === 'dev') {
                console.log('gameStart ... (fw)');
            }
            // @ts-ignore
            window.pgame_fw_playcountup();
        }
        else {
            if (this.build_mode === 'dev') {
                console.log('gameStart ... (no fw)');
            }
        }
        if (this.build_mode === 'dev') {
            console.log(this.gameManager.getState());
        }
    };
    /**
     * facebookでシェア
     * @param imageUrl
     * @param gameUrl
     * @param title
     * @param description
     */
    Game.prototype.pgameFacebookShare = function (imageUrl, gameUrl, title, description) {
        if (window.hasOwnProperty('pgame_fw_facebook_share')) {
            if (this.build_mode === 'dev') {
                console.log('shareFaceBook ... (fw)');
            }
            window['pgame_fw_facebook_share'](imageUrl, gameUrl, title, description);
        }
        else {
            if (this.build_mode === 'dev') {
                console.log('shareFaceBook ... (no fw)');
            }
            window.open('https://www.facebook.com/sharer.php?scr=bm&u=' + gameUrl + '&t=' + title);
        }
    };
    /**
     * lineでシェア
     * @param gameUrl
     */
    Game.prototype.pgameLineShare = function (gameUrl) {
        if (window.hasOwnProperty('pgame_fw_line_share')) {
            if (this.build_mode === 'dev') {
                console.log('shareLine ... (fw)');
            }
            window['pgame_fw_line_share'](gameUrl);
        }
        else {
            if (this.build_mode === 'dev') {
                console.log('shareLine ... (no fw)');
            }
        }
    };
    /**
     * 広告表示
     */
    Game.prototype.pgameAdPopUp = function () {
        var _this = this;
        if (window.hasOwnProperty('pgame_fw_ad_popup')) {
            if (this.build_mode === 'dev') {
                console.log('adPopUp ... (fw)');
            }
            window['pgame_fw_ad_popup']();
        }
        else {
            console.log('adPopUp ... (no fw)');
            this.gameManager.setStopState();
            var counter_1 = 0;
            var intervalId_1 = setInterval(function () {
                counter_1++;
                if (counter_1 > 9) {
                    console.log("show ad dialog  : " + '-'.repeat(counter_1) + (counter_1 ? '>' : '') + " x");
                    console.log('close ad dialog');
                    window.clearInterval(intervalId_1);
                    _this.gameManager.setRunState();
                    return;
                }
                console.log("show ad dialog  : " + '-'.repeat(counter_1) + (counter_1 ? '>' : ''));
            }, 400);
        }
    };
    return Game;
}());
exports.Game = Game;
