import {Game} from "./game";

/**
 * 本番、テストデプロイ用
 * prod : 本番、テスト (プチゲームフレームワーク対応)
 * dev : プチゲームフレームワーク非対応
 * @type {string}
 */
let mode = 'prod';

/**
 * 本番のホスト名
 * @type {string}
 */
const prodHostName = 'www.p-game.jp';

/**
 * テストサーバのパス名の一部
 * @type {string}
 */
const testPathName = 'p-game4/htdocs';

/**
 * モードの変更
 */
if(location.hostname !== prodHostName) {
  // 本番サーバじゃないとき
  mode = 'dev';
}
if(location.pathname.match(testPathName)) {
  // テストサーバのとき
  mode = 'prod';
}

var pgame, canvas, stage, images, lib;
var reloadManifestList=[[],[],[]];
var pGameReTryCount = 0;
var pGameReTryMaxNum = 3;

if(mode !== 'prod'){
  console.log('mode : ', mode);
}


/**
 * モード毎の処理
 * if の中で 関数宣言 してるからやばいかも
 * なにか起きたら 関数式 に書き換える (スコープに気をつけること)
 */
if(mode === 'prod') {
  // 本番、テストサーバのとき

  window.init = init;

  /**
   * 必要な外部のJSファイルを読み込む
   */
  function init () {
    //images = images || {};
    var scriptsManifest = null;
    // script読み込み
    if(type) {
      scriptsManifest = [
        {src: './jsgame/pgame_canvas_sp.js', id: 'assets', type: 'javascript'},
      ];
    } else {
      scriptsManifest = [
        {src: './jsgame/pgame_canvas_pc.js', id: 'assets', type: 'javascript'},
      ];
    }

    if(scriptsManifest) {
      // プリローダ設定
      var loader = new createjs.LoadQueue(false);
      loader.addEventListener('fileload', loadExtendsHandleFileLoad);
      loader.addEventListener('complete', loadExtendsHandleComplete);
      loader.addEventListener('progress', loadExtendsHandleProgress);
      loader.addEventListener('error', loadExtendsHandleError);
      loader.loadManifest(scriptsManifest);
    } else {
      initGame(type);
    }
  }

  function loadExtendsHandleError (evt) {
    pgame_fw_loading_fail();
  }

  function loadExtendsHandleProgress (evt) {
  }

  function loadExtendsHandleFileLoad (evt) {
    if(evt.item.type == "javascript") {
      document.getElementById('game-contents').appendChild(evt.result);
    }
  }

  function loadExtendsHandleComplete (evt) {

    // ユニークIDの取得 SPのID / PCのID
    var id = (type) ? "235237728A5628459F398B3B054DFB64" : "22A39DC83079432BB23403B040ECA6C4";
    var comp = AdobeAn.getComposition(id);

    if (!comp) {
      throw Error('IDが違います。pgame_canvas_○○.js の中でIDを確認して下さい[main.js L98]');
    }

    lib = comp.getLibrary();
    window.lib = lib;
    images = comp.getImages();
    window.images = images;

    // イベント削除
    evt.currentTarget.removeEventListener('fileload', loadExtendsHandleFileLoad);
    evt.currentTarget.removeEventListener('complete', loadExtendsHandleComplete);
    evt.currentTarget.removeEventListener('progress', loadExtendsHandleProgress);

    // アセットを読み込む処理
    var loader = new createjs.LoadQueue(false);

    loader.addEventListener('fileload', loadHandleFileLoad);
    loader.addEventListener('complete', loadHandleComplete);
    loader.addEventListener('progress', loadHandleProgress);
    loader.addEventListener('error', loadHandleError);
    loader.loadManifest(lib.properties.manifest);
  }

  function loadHandleError (evt) {
  reloadManifestList[0].push({
    src: evt.data.src,
    id: evt.data.id,
    type: 'image'
  });
  // pgame_fw_loading_fail();
  }

  function loadHandleProgress (evt) {
    try {
      pgame_fw_loading(evt.progress * 100, 100);
    } catch (e) {
    }
  }

  function loadHandleFileLoad (evt) {
    if(evt.item.type == "image") {
      window.images[evt.item.id] = evt.result;
    }
  }

  function loadHandleComplete (evt) {
  if (pGameReTryCount < pGameReTryMaxNum && reloadManifestList[pGameReTryCount].length) {
    pGameReTryCount++; //リトライカウント
    //ロード開始
    var reloader = new createjs.LoadQueue(false);
    reloader.setMaxConnections(6);
    reloader.addEventListener('fileload', loadHandleFileLoad);
    reloader.addEventListener('complete', loadHandleComplete);
    reloader.addEventListener('error', reTryHandleError);
    reloader.loadManifest(reloadManifestList[0]);
    return;
  }
    evt.currentTarget.removeEventListener('fileload', loadHandleFileLoad);
    evt.currentTarget.removeEventListener('complete', loadHandleComplete);
    evt.currentTarget.removeEventListener('progress', loadHandleProgress);

    initGame(type);

  /*リトライ用　エラー時の処理*/
  function reTryHandleError(evt) {
    if (pGameReTryCount == pGameReTryMaxNum) {
      pgame_fw_loading_fail();
      return;
    }
    reloadManifestList[pGameReTryCount].push({
      src: evt.data.src,
      id: evt.data.id,
      type: 'image'
    });
  }
  }

  function initGame () {
    // canvas取得
    canvas = document.getElementById('canvas');
    if(window.navigator.userAgent.toLowerCase().indexOf('fban/fbios;fbav') != -1 || window.navigator.userAgent.toLowerCase().indexOf('twitter') != -1) {
      canvas.setAttribute('height', canvas.height * 1.19);
      if(window.screen.height <= 568) {
        canvas.setAttribute('height', canvas.height + 30);
      }
    }

    // stage作成
    stage = new lib.Stage(canvas);
    stage.update();
    createjs.Ticker.addEventListener('tick', stage);
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Touch.enable(stage);
    stage.enableMouseOver(30);

    try {
      pgame_fw_loaded();
      pgame_fw_started();
    } catch (e) {
    }

    pgame = new Game(stage, type);
    //Game.prototype.gameManager = pgame.gameManager;
    window.pgame = {};
    window.pgame.gameManager = function () {
      return pgame.gameManager;
    }
  }
} else {
  // フレームワーク非対応時
  window.Game = Game;
}
