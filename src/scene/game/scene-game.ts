import { Scene } from "../scene";
import { SceneName } from "../scene-name";
import { GameManager } from "../../game-manager";
//import { TextField } from "../../TextField";

/*テキストフィールド使いませんでした。（エラー解決できませんでした）*/

//成功数
let successCount: number = 0;

//スコア
let scoreText: number = 0;

//ゲームの評価
let evaluation: string;

export class SceneGame extends Scene {
  constructor(gameManager: GameManager) {
    super(gameManager, SceneName.Game);
  }

  main(): void {
    const mc: lib.PageGame = new lib.PageGame();
    this.sceneContainer.addChild(mc);

    //game.tsのメソッドを使用
    //this.gameManager.game.pgameAdPopUp();

    //const a = new TextField("0", new lib.nannidoup(), 0, 7);

    //カウントダウン(ゲーム中の)
    mc.CountDown.text = "1";

    //押したキーコードを格納する変数
    let keyCode: number = 0;

    //スマホ版のボタン
    let buttonCode: number = 0;

    //ゲーム中の待機時間
    let waitTime: number;

    //スタートカウントダウンのための変数
    let gameStartCountDown: number = 3;

    //PC版の矢印キー入力回数制限
    let inputLimit: boolean = true;

    interface GameSceneFormat {
      boyNormal: createjs.Bitmap;
      boyGameOver_1: createjs.Bitmap;
      boyGameOver_2: createjs.Bitmap;
      boyClear: createjs.Bitmap;
      boyNotEat: createjs.Bitmap;
      shopKeeper_1: createjs.Bitmap;
      shopKeeper_2: createjs.Bitmap;
      shopKeeperAngry: createjs.Bitmap;
      ramenMiso: createjs.Bitmap;
      ramenGekikara: createjs.Bitmap;
      ramenTonkotsu: createjs.Bitmap;
      ramenSyouyu: createjs.Bitmap;
      ramenShio: createjs.Bitmap;
      maru: createjs.Bitmap;
      batsu: createjs.Bitmap;
      gameOverBackScreen: createjs.Bitmap;
      difficultyImage: createjs.Bitmap;

      isKeyDownEnabled: boolean;
      hasTimeOut: boolean;
      isKeyInputRestriction: boolean;

      count: number;
      id: any;

      countDownStart(countDownTime: number): void;
      firstState(): number;
      clearGame(): void;
      mistakeRamen(): void;
      gameOver(): void;
      gekikaraRefusal(): void;
      returnCountDown(): number;
      evaluationGive(): void;
      difficultyImageAnimation(): void;
    }

    /*クラスの組み方がなんかよくないと思います*/

    //ゲームシーンのクラス
    class GameScene implements GameSceneFormat {
      //男の子
      public boyNormal: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/Boy1.png"
      );
      public boyGameOver_1: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/Boy-GameOver.png"
      );
      public boyGameOver_2: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/Boy-GameOver2.png"
      );
      public boyClear: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/Boy-Clear.png"
      );
      public boyNotEat: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/Boy-do-not-eat.png"
      );
      //店主
      public shopKeeper_1: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/ShopKeeper1.png"
      );
      public shopKeeper_2: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/ShopKeeper2.png"
      );
      public shopKeeperAngry: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/ShopKeeper-Angry.png"
      );
      //ラーメンの画像
      public ramenMiso: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/RamenMiso.png"
      );
      public ramenGekikara: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/RamenGekikara.png"
      );
      public ramenTonkotsu: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/RamenTonkotsu.png"
      );
      public ramenSyouyu: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/RamenSyouyu.png"
      );
      public ramenShio: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/RamenShio.png"
      );
      //マルバツの画像
      public maru: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/Maru.png"
      );
      public batsu: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/Batsu.png"
      );
      //ゲームオーバー時のスクリーン
      public gameOverBackScreen: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/GameOverBackScreen.png"
      );
      //難易度アップを知らせる画像
      public difficultyImage: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/nannidoupsheet.png"
      );
      //キーボード操作が有効かを判定
      public isKeyDownEnabled: boolean = false;
      //タイムアウトしたかを判定
      public hasTimeOut: boolean = false;
      //小数切り捨て用のカウント
      public count: number = 0;
      //タイマーのための変数
      public id: any;
      //キー入力の制限(有効中に一回しか押させないため)
      public isKeyInputRestriction: boolean = true;
      public constructor() {}
      //カウントダウンする処理
      public countDownStart(countDownTime: number): void {
        //キー入力できるようにする
        this.isKeyDownEnabled = true;
        this.id = setInterval(() => {
          countDownTime -= 0.1;
          //小数第一位以下切り捨て
          this.count = Math.round(countDownTime * 10) / 10;
          mc.CountDown.text = `${this.count}`;
          gauge.scaleX = this.count;
          if (countDownTime <= 0.1) {
            //タイムアウト状態の画像に切り替える
            this.timeOut();
            clearInterval(this.id);
            //タイムアウト状態の画像にする
            this.hasTimeOut = true;
          }
        }, 100);
      }
      //タイムアウトしたときの処理
      private timeOut(): void {
        //キー入力解除
        this.isKeyDownEnabled = false;
        //画像の切り替え
        maru_batsu.batsu.visible = true;
        shopKeeper.shopKeeperAngry.visible = true;
        shopKeeper.shopKeeper_2.visible = false;
        boy.boyGameOver_2.visible = true;
        boy.boyNormal.visible = false;
        backScreen_GameOver.gameOverBackScreen.visible = true;
      }
      //最初の画像の状態と出すラーメンを決める
      public firstState(): number {
        maru_batsu.maru.visible = false;
        shopKeeper.shopKeeper_2.visible = true;
        shopKeeper.shopKeeper_1.visible = false;
        boy.boyNormal.visible = true;
        boy.boyClear.visible = false;
        boy.boyNotEat.visible = false;
        return this.randomRamen();
      }
      //ラーメンを食べたときの画像状態
      public clearGame(): void {
        maru_batsu.maru.visible = true;
        shopKeeper.shopKeeper_2.visible = false;
        shopKeeper.shopKeeper_1.visible = true;
        boy.boyClear.visible = true;
        boy.boyNormal.visible = false;
        this.deleteRamen();
      }
      //ラーメンを食べなかったときの画像状態
      public mistakeRamen(): void {
        maru_batsu.batsu.visible = true;
        shopKeeper.shopKeeper_2.visible = false;
        shopKeeper.shopKeeperAngry.visible = true;
        boy.boyGameOver_2.visible = true;
        boy.boyNormal.visible = false;
        backScreen_GameOver.gameOverBackScreen.visible = true;
        this.deleteRamen();
      }
      //激辛ラーメン食べたときの画像の状態
      public gameOver(): void {
        maru_batsu.batsu.visible = true;
        shopKeeper.shopKeeper_2.visible = false;
        shopKeeper.shopKeeper_1.visible = true;
        boy.boyGameOver_1.visible = true;
        boy.boyNormal.visible = false;
        backScreen_GameOver.gameOverBackScreen.visible = true;
        this.deleteRamen();
      }
      //激辛ラーメンを食べなかったときの画像の状態
      public gekikaraRefusal(): void {
        maru_batsu.maru.visible = true;
        shopKeeper.shopKeeper_2.visible = false;
        shopKeeper.shopKeeper_1.visible = true;
        boy.boyNotEat.visible = true;
        this.deleteRamen();
      }
      //クリア数に応じてカウントダウンの秒数を返す処理(難易度アップ)
      public returnCountDown(): number {
        let countTime: number;
        if (successCount <= 20) {
          countTime = 1;
        } else if (successCount > 20 && successCount <= 50) {
          countTime = 0.9;
        } else if (successCount > 50 && successCount <= 100) {
          countTime = 0.8;
        } else if (successCount <= 200) {
          countTime = 0.7;
        } else {
          countTime = 0.6;
        }
        return countTime;
      }
      //ランダムにラーメンを表示するための処理
      private randomRamen(): number {
        const max: number = 4;
        const min: number = 0;
        let randomNumber: number =
          Math.floor(Math.random() * (max + 1 - min)) + min;
        return randomNumber;
      }
      //ラーメンを消す処理
      private deleteRamen(): void {
        ramen.ramenMiso.visible = false;
        ramen.ramenGekikara.visible = false;
        ramen.ramenTonkotsu.visible = false;
        ramen.ramenSyouyu.visible = false;
        ramen.ramenShio.visible = false;
      }
      //評価を決める処理
      public evaluationGive(): void {
        if (successCount === 0) {
          evaluation = "E";
        } else if (successCount <= 20) {
          evaluation = "D";
        } else if (successCount <= 50) {
          evaluation = "C";
        } else if (successCount <= 80) {
          evaluation = "B";
        } else if (successCount <= 100) {
          evaluation = "A";
        } else if (successCount <= 200) {
          evaluation = "S";
        } else {
          evaluation = "SS";
        }
      }
      //難易度アップを知らせるアニメーション
      public difficultyImageAnimation(): void {
        createjs.Tween.get(this.difficultyImage)
          .to({ y: 0 }, 1000)
          .wait(2000)
          .to({ y: -150 }, 1000);
      }
    }

    const gameScene = new GameScene();

    //ラーメン
    const ramen = new GameScene();
    const containerRamen: createjs.Container = new createjs.Container();
    containerRamen.scaleX = 0.35;
    containerRamen.scaleY = 0.35;
    containerRamen.x = 250;
    containerRamen.y = 200;
    this.sceneContainer.addChild(containerRamen);
    containerRamen.addChild(ramen.ramenMiso);
    containerRamen.addChild(ramen.ramenGekikara);
    containerRamen.addChild(ramen.ramenTonkotsu);
    containerRamen.addChild(ramen.ramenSyouyu);
    containerRamen.addChild(ramen.ramenShio);
    ramen.ramenMiso.visible = false;
    ramen.ramenGekikara.visible = false;
    ramen.ramenTonkotsu.visible = false;
    ramen.ramenSyouyu.visible = false;
    ramen.ramenShio.visible = false;

    //店主
    const shopKeeper = new GameScene();
    const containerShopKeeper: createjs.Container = new createjs.Container();
    containerShopKeeper.scaleX = 0.8;
    containerShopKeeper.scaleY = 0.8;
    containerShopKeeper.x = 400;
    containerShopKeeper.y = 17.5;
    this.sceneContainer.addChild(containerShopKeeper);
    containerShopKeeper.addChild(shopKeeper.shopKeeper_1);
    containerShopKeeper.addChild(shopKeeper.shopKeeper_2);
    containerShopKeeper.addChild(shopKeeper.shopKeeperAngry);
    shopKeeper.shopKeeper_1.visible = true;
    shopKeeper.shopKeeper_1.x = 20;
    shopKeeper.shopKeeper_2.visible = false;
    shopKeeper.shopKeeper_2.x = -25;
    shopKeeper.shopKeeperAngry.visible = false;
    shopKeeper.shopKeeperAngry.x = 10;

    //バックスクリーン
    const backScreen_GameOver = new GameScene();
    this.sceneContainer.addChild(backScreen_GameOver.gameOverBackScreen);
    backScreen_GameOver.gameOverBackScreen.visible = false;

    //男の子
    const boy = new GameScene();
    const containerBoy: createjs.Container = new createjs.Container();
    containerBoy.scaleX = 0.8;
    containerBoy.scaleY = 0.8;
    containerBoy.y = 240;
    this.sceneContainer.addChild(containerBoy);
    containerBoy.addChild(boy.boyNormal);
    containerBoy.addChild(boy.boyGameOver_1);
    containerBoy.addChild(boy.boyGameOver_2);
    containerBoy.addChild(boy.boyClear);
    containerBoy.addChild(boy.boyNotEat);
    boy.boyNormal.visible = true;
    boy.boyNormal.x = 30;
    boy.boyGameOver_1.visible = false;
    boy.boyGameOver_1.x = -90;
    boy.boyGameOver_1.y = -80;
    boy.boyGameOver_2.visible = false;
    boy.boyGameOver_2.x = 30;
    boy.boyGameOver_2.y = -60;
    boy.boyClear.visible = false;
    boy.boyClear.y = -60;
    boy.boyNotEat.visible = false;
    boy.boyNotEat.x = 30;

    //マルバツ
    const maru_batsu = new GameScene();
    const containerMaruBatsu: createjs.Container = new createjs.Container();
    containerMaruBatsu.x = 160;
    containerMaruBatsu.y = 50;
    this.sceneContainer.addChild(containerMaruBatsu);
    containerMaruBatsu.addChild(maru_batsu.maru);
    containerMaruBatsu.addChild(maru_batsu.batsu);
    maru_batsu.batsu.x = 25;
    maru_batsu.batsu.y = 25;
    maru_batsu.maru.visible = false;
    maru_batsu.batsu.visible = false;

    //難易度アップを知らせる画像
    const difficultyImage = new GameScene();
    difficultyImage.difficultyImage.y = -150;
    this.sceneContainer.addChild(difficultyImage.difficultyImage);

    // ゲージ
    let gauge = new createjs.Shape();
    gauge.graphics.beginFill("Green"); // 緑色で描画するように設定
    gauge.graphics.drawRect(0, 0, 200, 25); // 長方形を描画
    gauge.x = 160;
    gauge.y = 50;
    this.sceneContainer.addChild(gauge);

    /*スタートカウントダウン後の最初の動作　画像の状態を切り替え、出すラーメンを決める*/
    const firstAction = () => {
      //出すラーメンをランダムに決めている
      let randomRamen: number = gameScene.firstState();
      //0は激辛ラーメン1から4まではそれ以外
      if (randomRamen === 0) {
        ramen.ramenGekikara.visible = true;
      } else if (randomRamen === 1) {
        ramen.ramenMiso.visible = true;
      } else if (randomRamen === 2) {
        ramen.ramenTonkotsu.visible = true;
      } else if (randomRamen === 3) {
        ramen.ramenSyouyu.visible = true;
      } else if (randomRamen === 4) {
        ramen.ramenShio.visible = true;
      }
      return randomRamen;
    };
    /*カウントダウンをスタートさせる*/
    const secondAction = (randomRamen: number) => {
      //クリア数に応じてカウントダウンの秒数を決める
      let decreaseCountDown = gameScene.returnCountDown();
      //カウントダウンの開始
      gameScene.countDownStart(decreaseCountDown);
      return randomRamen;
    };
    /*↓成功か失敗かを判定する　※keyCodeはPC版の矢印キー buttonCodeはSP版の操作用のボタン*/
    const thirdAction = (randomRamen: number) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //激辛ラーメンを食べたときの処理
          if (randomRamen === 0 && (keyCode === 37 || buttonCode === 37)) {
            //評価を与え、画像状態を切り替え
            gameScene.evaluationGive();
            gameScene.gameOver();
            reject("失敗");
          }
          //激辛ラーメンを食べなかったときの処理
          else if (randomRamen === 0 && (keyCode === 39 || buttonCode === 39)) {
            //クリア数を加算
            successCount++;
            mc.SuccessCount.text = `${successCount}`;
            //激辛ラーメンを食べないと選択したときの画像状態に切り替え
            gameScene.gekikaraRefusal();
            resolve();
          }
          //激辛ラーメン以外を食べたときの処理(クリアの時)
          else if (
            (randomRamen === 1 ||
              randomRamen === 2 ||
              randomRamen === 3 ||
              randomRamen === 4) &&
            (keyCode === 37 || buttonCode === 37)
          ) {
            //クリア数を加算
            successCount++;
            //スコアの計算　止めた秒数 * 1000
            scoreText += gameScene.count * 1000;
            mc.SuccessCount.text = `${successCount}`;
            mc.ScoreText.text = `${scoreText}`;
            //クリアしたときの画像状態に切り替え
            gameScene.clearGame();
            resolve();
          }
          //激辛ラーメン以外を食べなかった時の処理
          else if (
            (randomRamen === 1 ||
              randomRamen === 2 ||
              randomRamen === 3 ||
              randomRamen === 4) &&
            (keyCode === 39 || buttonCode === 39)
          ) {
            //ゲーム評価を与え、画像状態切り替え
            gameScene.evaluationGive();
            gameScene.mistakeRamen();
            reject("失敗");
          }
          //時間切れとなったときの処理　keyCodeとbuttonCodeの0は何も押していないか矢印キー以外を押したとみなす
          else if (gameScene.hasTimeOut || keyCode === 0 || buttonCode === 0) {
            //ゲーム評価を与える処理
            gameScene.evaluationGive();
            reject("失敗");
          }
          //↓カウントダウンの秒数×1000
        }, gameScene.returnCountDown() * 1000);
      });
    };
    /*判定でクリアとみなしたら処理*/
    const fourthAction = () => {
      //難易度アップするタイミング
      if (
        successCount === 20 ||
        successCount === 50 ||
        successCount === 80 ||
        successCount === 100 ||
        successCount === 200
      ) {
        //アニメーションのため4秒処理を止める
        waitTime = 4000;
        //難易度アップを知らせるアニメーション
        difficultyImage.difficultyImageAnimation();
      } else {
        waitTime = 400;
      }
      new Promise(() => {
        setTimeout(() => {
          //キー入力回数制限を解除
          gameScene.isKeyInputRestriction = true;
          //PC版のキー入力回数制限を解除
          inputLimit = true;
          //何も押していない状態に戻す
          keyCode = 0;
          buttonCode = 0;
          //firstActionから再スタート
          seriesOfAction();
        }, waitTime);
      });
    };
    //ゲームの一連の動作
    const seriesOfAction = async () => {
      try {
        let ramenNumber: number = firstAction();
        ramenNumber = secondAction(ramenNumber);
        await thirdAction(ramenNumber);
        await fourthAction();
      } catch (message) {
        console.log(message);
        //3秒後にリザルトシーンへ
        setTimeout(() => {
          this.gameManager.sceneChange(SceneName.Result);
        }, 3000);
      }
    };

    //ゲームスタート時のカウントダウン(一番最初に実行される)
    let startId = setInterval(() => {
      gameStartCountDown--;
      mc.startCountDownText.text = `${gameStartCountDown}`;
      if (gameStartCountDown <= 0) {
        clearInterval(startId);
        mc.startCountDownText.text = "Go";
        setTimeout(() => {
          //カウントダウンテキストを非表示
          mc.startCountDownText.visible = false;
          //ゲームを開始
          seriesOfAction();
        }, 1000);
      }
    }, 1000);

    // タッチ操作をサポートしているブラウザーならば
    if (createjs.Touch.isSupported() == true) {
      //スマホ版の配置の調整
      let scale: number = 1.1;
      containerBoy.scaleX = scale;
      containerBoy.scaleY = scale;
      containerMaruBatsu.scaleX = scale;
      containerMaruBatsu.scaleY = scale;
      containerRamen.scaleX = 0.4;
      containerRamen.scaleY = 0.4;
      containerShopKeeper.scaleX = scale;
      containerShopKeeper.scaleY = scale;
      containerBoy.y += 125;
      containerMaruBatsu.y += 120;
      containerRamen.y += 200;
      containerShopKeeper.y += 116;
      backScreen_GameOver.gameOverBackScreen.scaleY = 1.6;
      //左ボタン
      mc.leftbutton.addEventListener("click", () => {
        //カウントダウン中にしか押せないようにする
        if (gameScene.isKeyDownEnabled) {
          //一回しか押せないようにする
          if (gameScene.isKeyInputRestriction) {
            buttonCode = 37;
            console.log(`押したキー「←」`);
            gameScene.isKeyInputRestriction = false;
            gameScene.isKeyDownEnabled = false;
            clearInterval(gameScene.id);
          }
        }
      });
      //右ボタン
      mc.rightbutton.addEventListener("click", () => {
        //カウントダウン中にしか押せないようにする
        if (gameScene.isKeyDownEnabled) {
          //一回しか押せないようにする
          if (gameScene.isKeyInputRestriction) {
            buttonCode = 39;
            console.log(`押したキー「→」`);
            gameScene.isKeyInputRestriction = false;
            gameScene.isKeyDownEnabled = false;
            clearInterval(gameScene.id);
          }
        }
      });
      // タッチ操作を有効にします。
      createjs.Touch.enable(this.gameManager.stage);
    } else {
      window.addEventListener("keyup", (event) => {
        if (inputLimit) {
          keyCode = event.keyCode;
          //矢印キー押下以外はキーコード0とする
          keyCode = keyCode === 37 || keyCode === 39 ? event.keyCode : 0;
          //矢印キー以外を押したときはまだキー入力を受け付ける
          inputLimit = keyCode === 37 || keyCode === 39 ? false : true;
        }
        if (keyCode === 37) {
          //カウントダウン中のみ押せるようにする
          if (!gameScene.isKeyDownEnabled) {
            event.preventDefault();
          }
          //一回しか押せないようにする
          else if (gameScene.isKeyInputRestriction) {
            console.log(`押したキー「←」`);
            gameScene.isKeyInputRestriction = false;
            gameScene.isKeyDownEnabled = false;
            clearInterval(gameScene.id);
          }
        } else if (keyCode === 39) {
          //カウントダウン中のみ押せるようにする
          if (!gameScene.isKeyDownEnabled) {
            event.preventDefault();
          }
          //一回しか押せないようにする
          else if (gameScene.isKeyInputRestriction) {
            console.log("押したキー「→」");
            gameScene.isKeyInputRestriction = false;
            gameScene.isKeyDownEnabled = false;
            clearInterval(gameScene.id);
          }
        }
      });
    }
  }
  //クリア数とスコアと評価をリザルトシーンへ
  public giveResultData(callback: any): void {
    callback(successCount, scoreText, evaluation);
  }
  //クリア数とスコアと評価をリセットする
  public reset(): void {
    successCount = 0;
    scoreText = 0;
    evaluation = "";
  }
}
