import { Scene } from "../scene";
import { SceneName } from "../scene-name";
import { GameManager } from "../../game-manager";
import { ImageSwitching } from "../Functions/ImageSwitching";
import { Functions } from "../Functions/Functions";
import { Animations } from "../Functions/Animations";

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

    //男の子
    const boyNormal: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/Boy1.png"
    );
    const boyGameOver_1: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/Boy-GameOver.png"
    );
    const boyGameOver_2: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/Boy-GameOver2.png"
    );
    const boyClear: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/Boy-Clear.png"
    );
    const boyNotEat: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/Boy-do-not-eat.png"
    );
    //店主
    const shopKeeper_1: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/ShopKeeper1.png"
    );
    const shopKeeper_2: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/ShopKeeper2.png"
    );
    const shopKeeperAngry: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/ShopKeeper-Angry.png"
    );
    //ラーメンの画像
    const ramenMiso: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/RamenMiso.png"
    );
    const ramenGekikara: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/RamenGekikara.png"
    );
    const ramenTonkotsu: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/RamenTonkotsu.png"
    );
    const ramenSyouyu: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/RamenSyouyu.png"
    );
    const ramenShio: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/RamenShio.png"
    );
    //マルバツの画像
    const maru: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/Maru.png"
    );
    const batsu: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/Batsu.png"
    );
    //ゲームオーバー時のスクリーン
    const gameOverBackScreen: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/GameOverBackScreen.png"
    );
    //集中線
    const shuchusen: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/shuchu-sen-_black.png"
    );
    //ドン
    const don: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/don.png"
    );
    //難易度アップの画像
    const difficultyImage: createjs.Bitmap = new createjs.Bitmap(
      "../../../jsgame/images_pc/nannidoupsheet.png"
    );
    //キーボード操作が有効かを判定
    let isKeyDownEnabled: boolean = false;
    //タイムアウトしたかを判定
    let hasTimeOut: boolean = false;
    //小数切り捨て用のカウント
    let count: number = 0;
    //タイマーのための変数
    let id: any;
    //キー入力の制限(有効中に一回しか押させないため)
    let isKeyInputRestriction: boolean = true;

    //カウントダウンの処理
    const countDownStart = (countDownTime: number) => {
      //キー入力できるようにする
      isKeyDownEnabled = true;
      id = setInterval(() => {
        countDownTime -= 0.1;
        //小数第一位以下切り捨て
        count = Math.round(countDownTime * 10) / 10;
        mc.CountDown.text = `${count}`;
        //gauge.scaleX = this.count;
        if (countDownTime <= 0.1) {
          //キー入力解除
          isKeyDownEnabled = false;
          //タイムアウト状態の画像に切り替える
          ImageSwitching.timeOutImageChange(
            batsu,
            shopKeeperAngry,
            shopKeeper_2,
            boyGameOver_2,
            boyNormal,
            gameOverBackScreen,
            shuchusen,
            don
          );
          Animations.vibrationAnimation(containerBoy);
          clearInterval(id);
          //タイムアウト状態の画像にする
          hasTimeOut = true;
          //ゲーム評価を与える処理
          evaluation = Functions.evaluationGive(successCount, evaluation);
          sceneChage();
        }
      }, 100);
    };

    //クリア時のテキストのアニメーション
    let addClearText: createjs.Text = new createjs.Text(
      "+1",
      "50px HGP行書体",
      "Brack"
    );
    addClearText.x = 120;
    addClearText.y = 70;
    let addScoreText: createjs.Text = new createjs.Text(
      "+900",
      "50px HGP行書体",
      "Brack"
    );
    addScoreText.x = 312;
    addScoreText.y = 70;
    addClearText.alpha = 0.0;
    addScoreText.alpha = 0.0;
    this.sceneContainer.addChild(addClearText);
    this.sceneContainer.addChild(addScoreText);

    //ラーメン
    const containerRamen: createjs.Container = new createjs.Container();
    containerRamen.scaleX = 0.35;
    containerRamen.scaleY = 0.35;
    containerRamen.x = 250;
    containerRamen.y = 200;
    this.sceneContainer.addChild(containerRamen);
    containerRamen.addChild(ramenMiso);
    containerRamen.addChild(ramenGekikara);
    containerRamen.addChild(ramenTonkotsu);
    containerRamen.addChild(ramenSyouyu);
    containerRamen.addChild(ramenShio);
    ramenMiso.visible = false;
    ramenGekikara.visible = false;
    ramenTonkotsu.visible = false;
    ramenSyouyu.visible = false;
    ramenShio.visible = false;

    //店主
    const containerShopKeeper: createjs.Container = new createjs.Container();
    containerShopKeeper.scaleX = 0.8;
    containerShopKeeper.scaleY = 0.8;
    //400
    containerShopKeeper.x = -150;
    containerShopKeeper.y = 17.5;
    this.sceneContainer.addChild(containerShopKeeper);
    containerShopKeeper.addChild(shopKeeper_1);
    containerShopKeeper.addChild(shopKeeper_2);
    containerShopKeeper.addChild(shopKeeperAngry);
    shopKeeper_1.visible = true;
    shopKeeper_1.x = 20;
    shopKeeper_2.visible = false;
    shopKeeper_2.x = -25;
    shopKeeperAngry.visible = false;
    shopKeeperAngry.x = 10;

    //バックスクリーン
    this.sceneContainer.addChild(gameOverBackScreen);
    gameOverBackScreen.visible = false;

    //男の子
    const containerBoy: createjs.Container = new createjs.Container();
    containerBoy.scaleX = 0.8;
    containerBoy.scaleY = 0.8;
    //もともとなかったやつ↓
    containerBoy.x = 640;
    containerBoy.y = 240;
    this.sceneContainer.addChild(containerBoy);
    containerBoy.addChild(boyNormal);
    containerBoy.addChild(boyGameOver_1);
    containerBoy.addChild(boyGameOver_2);
    containerBoy.addChild(boyClear);
    containerBoy.addChild(boyNotEat);
    boyNormal.visible = true;
    boyNormal.x = 30;
    boyGameOver_1.visible = false;
    boyGameOver_1.x = -90;
    boyGameOver_1.y = -80;
    boyGameOver_2.visible = false;
    boyGameOver_2.x = 30;
    boyGameOver_2.y = -60;
    boyClear.visible = false;
    boyClear.y = -60;
    boyNotEat.visible = false;
    boyNotEat.x = 30;

    //マルバツ
    const containerMaruBatsu: createjs.Container = new createjs.Container();
    containerMaruBatsu.x = 160;
    //元々50↓
    containerMaruBatsu.y = 100;
    this.sceneContainer.addChild(containerMaruBatsu);
    containerMaruBatsu.addChild(maru);
    containerMaruBatsu.addChild(batsu);
    batsu.x = 25;
    batsu.y = 25;
    maru.visible = false;
    batsu.visible = false;

    //難易度アップを知らせる画像
    difficultyImage.y = -150;
    this.sceneContainer.addChild(difficultyImage);

    //集中線の画像
    shuchusen.scaleX = 0.5;
    shuchusen.scaleY = 0.384;
    shuchusen.visible = false;
    this.sceneContainer.addChild(shuchusen);

    //ドンの画像
    don.visible = false;
    don.x = 270;
    don.y = 150;
    this.sceneContainer.addChild(don);

    let randomRamen2: number;

    /*スタートカウントダウン後の最初の動作　画像の状態を切り替え、出すラーメンを決める*/
    const firstAction = () => {
      ImageSwitching.firstState(
        maru,
        shopKeeper_2,
        shopKeeper_1,
        boyNormal,
        boyClear,
        boyNotEat
      );
      //出すラーメンをランダムに決めている
      randomRamen2 = Functions.randomRamen();
      switch (randomRamen2) {
        case 0:
          ramenGekikara.visible = true;
          break;
        case 1:
          ramenMiso.visible = true;
          break;
        case 2:
          ramenTonkotsu.visible = true;
          break;
        case 3:
          ramenSyouyu.visible = true;
          break;
        case 4:
          ramenShio.visible = true;
          break;
      }
      shuchusen.visible = true;
      don.visible = true;
      //ドンのアニメーション
      //createjs.Tween.get(don).to({ y: 100, alpha: 0 }, 500).to({ y: 150 }, 1);
    };
    /*カウントダウンをスタートさせる*/
    const secondAction = () => {
      //クリア数に応じてカウントダウンの秒数を決める
      let decreaseCountDown = Functions.returnCountDown(successCount);
      //カウントダウンの開始
      countDownStart(decreaseCountDown);
    };

    //押した矢印キーと出されたラーメンによってクリアかゲームオーバーかを判定する関数
    const judgment = (randomRamen: number) => {
      //激辛ラーメンを食べたときの処理
      if (randomRamen === 0 && (keyCode === 37 || buttonCode === 37)) {
        Animations.vibrationAnimation(containerBoy);
        //評価を与え、画像状態を切り替え
        evaluation = Functions.evaluationGive(successCount, evaluation);
        ImageSwitching.gameOver(
          batsu,
          shopKeeper_2,
          shopKeeper_1,
          boyGameOver_1,
          boyNormal,
          gameOverBackScreen
        );
        ImageSwitching.deleteRamenShuchusen(
          ramenMiso,
          ramenGekikara,
          ramenTonkotsu,
          ramenSyouyu,
          ramenShio,
          shuchusen,
          don
        );
        sceneChage();
      }
      //激辛ラーメンを食べなかったときの処理
      else if (randomRamen === 0 && (keyCode === 39 || buttonCode === 39)) {
        //クリア数を加算
        successCount++;
        mc.SuccessCount.text = `${successCount}`;
        //クリア数を増やすアニメーション
        Animations.clearTextAnimation(addClearText);
        //激辛ラーメンを食べないと選択したときの画像状態に切り替え
        ImageSwitching.gekikaraRefusal(
          maru,
          shopKeeper_2,
          shopKeeper_1,
          boyNotEat
        );
        ImageSwitching.deleteRamenShuchusen(
          ramenMiso,
          ramenGekikara,
          ramenTonkotsu,
          ramenSyouyu,
          ramenShio,
          shuchusen,
          don
        );
        reset_animation();
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
        scoreText += count * 1000;
        mc.SuccessCount.text = `${successCount}`;
        mc.ScoreText.text = `${scoreText}`;
        //クリア数を増やすアニメーション
        Animations.clearTextAnimation(addClearText);
        //スコアを増やすアニメーション
        Animations.scoreTextAnimation(count * 1000, addScoreText);
        //クリアしたときの画像状態に切り替え
        ImageSwitching.clearGame(
          maru,
          shopKeeper_2,
          shopKeeper_1,
          boyClear,
          boyNormal
        );
        ImageSwitching.deleteRamenShuchusen(
          ramenMiso,
          ramenGekikara,
          ramenTonkotsu,
          ramenSyouyu,
          ramenShio,
          shuchusen,
          don
        );
        reset_animation();
      }
      //激辛ラーメン以外を食べなかった時の処理
      else if (
        (randomRamen === 1 ||
          randomRamen === 2 ||
          randomRamen === 3 ||
          randomRamen === 4) &&
        (keyCode === 39 || buttonCode === 39)
      ) {
        Animations.vibrationAnimation(containerBoy);
        //ゲーム評価を与え、画像状態切り替え
        evaluation = Functions.evaluationGive(successCount, evaluation);
        ImageSwitching.mistakeRamen(
          batsu,
          shopKeeper_2,
          shopKeeperAngry,
          boyGameOver_2,
          boyNormal,
          gameOverBackScreen
        );
        ImageSwitching.deleteRamenShuchusen(
          ramenMiso,
          ramenGekikara,
          ramenTonkotsu,
          ramenSyouyu,
          ramenShio,
          shuchusen,
          don
        );
        sceneChage();
      }
      //時間切れとなったときの処理　keyCodeとbuttonCodeの0は何も押していないか矢印キー以外を押したとみなす
      else if (hasTimeOut || keyCode === 0 || buttonCode === 0) {
        //ゲーム評価を与える処理
        evaluation = Functions.evaluationGive(successCount, evaluation);
      }
    };

    /*判定でクリアとみなしたら処理*/
    const reset_animation = () => {
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
        Animations.difficultyImageAnimation(difficultyImage);
      } else {
        waitTime = 600;
      }
      setTimeout(() => {
        //キー入力回数制限を解除
        isKeyInputRestriction = true;
        //PC版のキー入力回数制限を解除
        inputLimit = true;
        //何も押していない状態に戻す
        keyCode = 0;
        buttonCode = 0;
        //firstActionから再スタート
        seriesOfAction();
      }, waitTime);
    };

    //ゲームの一連の動作
    const seriesOfAction = () => {
      firstAction();
      secondAction();
    };

    const sceneChage = (): void => {
      //3秒後にリザルトシーンへ
      setTimeout(() => {
        this.gameManager.sceneChange(SceneName.Result);
      }, 3000);
    };

    Animations.firstAnimation(
      containerBoy,
      containerShopKeeper,
      mc.startCountDownText
    );

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
      gameOverBackScreen.scaleY = 1.6;
      //左ボタン
      mc.leftbutton.addEventListener("click", () => {
        //カウントダウン中にしか押せないようにする
        if (isKeyDownEnabled) {
          //一回しか押せないようにする
          if (isKeyInputRestriction) {
            buttonCode = 37;
            isKeyInputRestriction = false;
            isKeyDownEnabled = false;
            clearInterval(id);
            judgment(randomRamen2);
          }
        }
      });
      //右ボタン
      mc.rightbutton.addEventListener("click", () => {
        //カウントダウン中にしか押せないようにする
        if (isKeyDownEnabled) {
          //一回しか押せないようにする
          if (isKeyInputRestriction) {
            buttonCode = 39;
            isKeyInputRestriction = false;
            isKeyDownEnabled = false;
            clearInterval(id);
            judgment(randomRamen2);
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
          if (!isKeyDownEnabled) {
            event.preventDefault();
          }
          //一回しか押せないようにする
          else if (isKeyInputRestriction) {
            isKeyInputRestriction = false;
            isKeyDownEnabled = false;
            clearInterval(id);
            judgment(randomRamen2);
          }
        } else if (keyCode === 39) {
          //カウントダウン中のみ押せるようにする
          if (!isKeyDownEnabled) {
            event.preventDefault();
          }
          //一回しか押せないようにする
          else if (isKeyInputRestriction) {
            isKeyInputRestriction = false;
            isKeyDownEnabled = false;
            clearInterval(id);
            judgment(randomRamen2);
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
