import {Scene} from '../scene';
import {SceneName} from '../scene-name';
import {GameManager} from '../../game-manager';

let count : number = 0;

let successCount : number = 0;

let scoreText : number = 0;

export class SceneGame extends Scene {

  private score: number = 100;

  private num : number = 50;

  constructor(gameManager: GameManager) {
    super(gameManager, SceneName.Game);
  }

  main(): void {

    const mc: lib.PageGame = new lib.PageGame();
    this.sceneContainer.addChild(mc);

    //mc.textScore.text = this.score.toString();

    //mc.textScore2.text = count.toString();

    // リスナーの登録
    mc.btnBack.on('click', () => {
      this.gameManager.sceneChange(SceneName.Top);
      this.score = 100;
    });
    mc.btnNext.on('click', () => {
      this.gameManager.sceneChange(SceneName.Result);
      this.gameManager.game.gameEnd(this.score);
      this.score = 100;
    });
    mc.btnPlus.on('click', () => {
      console.log('hoge');
      this.score++;
      count++;
      //ここはgame.tsのメソッドを使っている
      this.gameManager.game.pgameAdPopUp();
    });
    mc.btnMinus.on('click', () => {
      this.score--;
    });
    mc.btnMinus.on('click', () => {
      this.score--;
    });

    mc.CountDown.text = "1";
    
    interface GameSceneFormat {
      
    }
    
    let keyCode : number = 0;
    //ゲームシーンのクラス
    class GameSceneManager implements GameSceneFormat {
      public ramenMiso : createjs.Bitmap = new createjs.Bitmap("../../../jsgame/images_pc/RamenMiso.png");
      public ramenGekikara : createjs.Bitmap = new createjs.Bitmap("../../../jsgame/images_pc/RamenGekikara.png");
      public ramenTonkotsu : createjs.Bitmap = new createjs.Bitmap("../../../jsgame/images_pc/RamenTonkotsu.png");
      public ramenSyouyu : createjs.Bitmap = new createjs.Bitmap("../../../jsgame/images_pc/RamenSyouyu.png");
      public ramenShio : createjs.Bitmap = new createjs.Bitmap("../../../jsgame/images_pc/RamenShio.png");
      public maru : createjs.Bitmap = new createjs.Bitmap("../../../jsgame/images_pc/Maru.png");
      public batsu : createjs.Bitmap = new createjs.Bitmap("../../../jsgame/images_pc/Batsu.png");
      private _countDown : number;
      public keyDownChange : boolean = false;
      public timeOutFlag : boolean = false;
      //public successCount : number = 0;
      //public scoreText : number = 0;
      //小数切り捨て用のカウント
      public count : number = 0;
      //タイマーのための変数
      public id : any;
      //キー入力の制限
      public keyDownLimit : boolean = true;

      public constructor(countDown : number){
        this._countDown = countDown;
      }
      //カウントダウンの秒数を返すメソッド
      public returnTime() : number {
        return this._countDown;
      }
      //カウントダウンの秒数をセットするメソッド
      public setCountDown(countDown : number) : void{
        this._countDown = countDown;
      }
      //カウントダウンするメソッド
      public countDownStart(countDownTime : number) : void {
        //キー入力できるようにする
        this.keyDownChange = true;
        this.id = setInterval(() => {
          countDownTime -= 0.1;
          //小数第一位以下切り捨て
          this.count = Math.round(countDownTime * 10) / 10;
          mc.CountDown.text = `${this.count}`;
          if(countDownTime <= 0.1){
            this.timeOutFlag = true;
            this.timeOut();
            clearInterval(this.id);
          }
        },100);
      }
      //タイムアウトしたときのメソッド
      public timeOut() : void {
        //キー入力解除
        this.keyDownChange = false;
        maru_batsu.batsu.visible = true;
        maru_batsu.maru.visible = false;
        shopKeeper.shopKeeperAngry.visible = true;
        shopKeeper.shopKeeper_1.visible = false;
        shopKeeper.shopKeeper_2.visible = false;
        boy.boyGameOver_2.visible = true;
        boy.boyGameOver_1.visible = false;
        boy.boyNormal.visible = false;
        boy.boyClear.visible = false;
      }
      //最初の動作
      public firstAction() : number {
        maru_batsu.batsu.visible = false;
        maru_batsu.maru.visible = false;
        shopKeeper.shopKeeper_2.visible = true;
        shopKeeper.shopKeeper_1.visible = false;
        shopKeeper.shopKeeperAngry.visible = false;
        boy.boyNormal.visible = true;
        boy.boyGameOver_1.visible = false;
        boy.boyGameOver_2.visible = false;
        boy.boyClear.visible = false;
        return this.randomRamen();
      }
      //味噌ラーメンを食べたときのメソッド
      public clearGame() : void {
        maru_batsu.batsu.visible = false;
        maru_batsu.maru.visible = true;
        shopKeeper.shopKeeper_2.visible = false;
        shopKeeper.shopKeeper_1.visible = true;
        shopKeeper.shopKeeperAngry.visible = false;
        boy.boyClear.visible = true;
        boy.boyGameOver_1.visible = false;
        boy.boyGameOver_2.visible = false;
        boy.boyNormal.visible = false;
        ramen.ramenMiso.visible = false;
        ramen.ramenGekikara.visible = false;
        ramen.ramenTonkotsu.visible = false;
        ramen.ramenSyouyu.visible = false;
        ramen.ramenShio.visible = false;
      }
      //味噌ラーメンを拒否ったときのメソッド
      public mistakeRamen() : void {
        maru_batsu.batsu.visible = true;
        maru_batsu.maru.visible = false;
        shopKeeper.shopKeeper_2.visible = false;
        shopKeeper.shopKeeper_1.visible = false;
        shopKeeper.shopKeeperAngry.visible = true;
        boy.boyClear.visible = false;
        boy.boyGameOver_1.visible = false;
        boy.boyGameOver_2.visible = true;
        boy.boyNormal.visible = false;
        ramen.ramenMiso.visible = false;
        ramen.ramenGekikara.visible = false;
        ramen.ramenTonkotsu.visible = false;
        ramen.ramenSyouyu.visible = false;
        ramen.ramenShio.visible = false;
      }
      //激辛ラーメン食べたときのメソッド
      public gameOver() : void {
        maru_batsu.batsu.visible = true;
        maru_batsu.maru.visible = false;
        shopKeeper.shopKeeper_2.visible = false;
        shopKeeper.shopKeeper_1.visible = true;
        shopKeeper.shopKeeperAngry.visible = false;
        boy.boyClear.visible = false;
        boy.boyGameOver_1.visible = true;
        boy.boyGameOver_2.visible = false;
        boy.boyNormal.visible = false;
        ramen.ramenMiso.visible = false;
        ramen.ramenGekikara.visible = false;
        ramen.ramenTonkotsu.visible = false;
        ramen.ramenSyouyu.visible = false;
        ramen.ramenShio.visible = false;
      }
      //激辛ラーメンを拒否ったとき
      public gekikaraRefusal() : void {
        maru_batsu.batsu.visible = false;
        maru_batsu.maru.visible = true;
        shopKeeper.shopKeeper_2.visible = false;
        shopKeeper.shopKeeper_1.visible = true;
        shopKeeper.shopKeeperAngry.visible = false;
        boy.boyClear.visible = false;
        boy.boyGameOver_1.visible = false;
        boy.boyGameOver_2.visible = false;
        boy.boyNormal.visible = true;
        ramen.ramenMiso.visible = false;
        ramen.ramenGekikara.visible = false;
        ramen.ramenTonkotsu.visible = false;
        ramen.ramenSyouyu.visible = false;
        ramen.ramenShio.visible = false;
      }
      //ランダムにラーメンを表示するメソッド
      private randomRamen() : number {
        let randomNumber : number = Math.floor( Math.random() * (4 + 1 - 0) ) + 0;
        return randomNumber;
      }
    }
    //主人公のクラス
    class Boy extends GameSceneManager {
      public boyNormal : createjs.Bitmap = new createjs.Bitmap("../../../jsgame/images_pc/Boy1.png");
      public boyGameOver_1 : createjs.Bitmap =  new createjs.Bitmap("../../../jsgame/images_pc/Boy-GameOver.png");
      public boyGameOver_2 : createjs.Bitmap =  new createjs.Bitmap("../../../jsgame/images_pc/Boy-GameOver2.png");
      public boyClear : createjs.Bitmap =  new createjs.Bitmap("../../../jsgame/images_pc/Boy-Clear.png");
      public constructor(countDown : number){
        super(countDown);
      }
    }
    //店主のクラス
    class ShopKeeper extends GameSceneManager {
      public shopKeeper_1 : createjs.Bitmap =  new createjs.Bitmap("../../../jsgame/images_pc/ShopKeeper1.png");
      public shopKeeper_2 : createjs.Bitmap =  new createjs.Bitmap("../../../jsgame/images_pc/ShopKeeper2.png");
      public shopKeeperAngry : createjs.Bitmap =  new createjs.Bitmap("../../../jsgame/images_pc/ShopKeeper-Angry.png");
      public constructor(countDown : number){
        super(countDown);
      }
    }
    //カウントダウン
    const countDown = new GameSceneManager(1);

    //ラーメン
    const ramen = new GameSceneManager(1);
    const containerRamen : createjs.Container = new createjs.Container();
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

    //主人公
    const boy = new Boy(1);
    const containerBoy : createjs.Container = new createjs.Container();
    containerBoy.scaleX = 0.8;
    containerBoy.scaleY = 0.8;
    containerBoy.y = 240;
    this.sceneContainer.addChild(containerBoy);
    containerBoy.addChild(boy.boyNormal);
    containerBoy.addChild(boy.boyGameOver_1);
    containerBoy.addChild(boy.boyGameOver_2);
    containerBoy.addChild(boy.boyClear);
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

    //店主
    const shopKeeper = new ShopKeeper(1);
    const containerShopKeeper : createjs.Container = new createjs.Container();
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

    //マルバツ
    const maru_batsu = new GameSceneManager(1);
    const containerMaruBatsu : createjs.Container = new createjs.Container();
    containerMaruBatsu.x = 160;
    containerMaruBatsu.y = 50;
    this.sceneContainer.addChild(containerMaruBatsu);
    containerMaruBatsu.addChild(maru_batsu.maru);
    containerMaruBatsu.addChild(maru_batsu.batsu);
    maru_batsu.batsu.x = 25;
    maru_batsu.batsu.y = 25;
    maru_batsu.maru.visible = false;
    maru_batsu.batsu.visible = false;

    

    const func = () => {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          //出すラーメンをランダムに決めている
          let randomRamen : number = countDown.firstAction();
          if(randomRamen === 0){
            ramen.ramenGekikara.visible = true;
          }
          else if(randomRamen === 1){
            ramen.ramenMiso.visible = true;
          }
          else if(randomRamen === 2){
            ramen.ramenTonkotsu.visible = true;
          }
          else if(randomRamen === 3){
            ramen.ramenSyouyu.visible = true;
          }
          else if(randomRamen === 4){
            ramen.ramenShio.visible = true;
          }
          resolve(randomRamen);
        },100);
      });
    };
    const func2 = (randomRamen : any) => {
      return new Promise((resolve,reject) => {
        countDown.countDownStart(1);
        resolve(randomRamen);
      });
    };
    const func3 = (randomRamen : any) => {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          console.log("ラーメン" + randomRamen);
          console.log("押されたキー" + keyCode);
          if(randomRamen === 0 && keyCode === 37){
            console.log("ゲームオーバー");
            countDown.gameOver();
            reject("失敗");
          }
          else if(randomRamen === 0 && keyCode === 39){
            console.log("セーフ");
            resolve(1);
            countDown.gekikaraRefusal();
          }
          else if((randomRamen === 1 || randomRamen === 2 || randomRamen === 3 || randomRamen === 4) && keyCode === 37){
            console.log("クリア");
            successCount++;
            //スコアの計算　止めた秒数 * 1000
            scoreText += countDown.count * 1000;
            mc.SuccessCount.text = `${successCount}`;
            mc.ScoreText.text = `${scoreText}`;
            countDown.clearGame();
            resolve(1);
          }
          else if((randomRamen === 1 || randomRamen === 2 || randomRamen === 3 || randomRamen === 4) && keyCode === 39){
            console.log("アウト");
            countDown.mistakeRamen();
            reject("失敗");
          }
          else if(countDown.timeOutFlag && keyCode === 0){
            console.log("時間切れ");
            reject("失敗");
          }
        },1000);
      });
    };
    //待機時間そしてリセット
    const func4 = (randomRamen : any) => {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          countDown.keyDownLimit = true;
          keyCode = 0;
          resolve(1);
        },100);
      });
    };
    const callAsync = async () => {
      try {
        let num = await func();
        let num2 = await func2(num);
        let num3 = await func3(num2);
        let num4 = await func4(num3);
        console.log("num4:" + num4);
        if(num4 === 1){
          callAsync();
        }
      }
      catch(error) {
        console.log(error);
        setTimeout(() => {
          this.gameManager.sceneChange(SceneName.Result);
        },3000);
        
      }
    }
    setTimeout(() => {
      callAsync();
    },1000);
    
  
    //キーを離したとき
      window.addEventListener("keyup",(event) => {
        keyCode = event.keyCode;
        keyCode = keyCode === 37 || keyCode === 39 ? event.keyCode : 0;
        if(keyCode === 37){
          //カウントダウン中のみ押せるようにする
          if(!countDown.keyDownChange){
            event.preventDefault();
          }
          //一回しか押せないようにする
          else if(countDown.keyDownLimit){
            console.log(`押されたキー「←」`);
            countDown.keyDownLimit = false;
            clearInterval(countDown.id);
          }
        }
        else if(keyCode === 39){
          //カウントダウン中のみ押せるようにする
          if(!countDown.keyDownChange){
            event.preventDefault();
          }
          //一回しか押せないようにする
          else if(countDown.keyDownLimit){
            console.log("押されたキー「→」");
            countDown.keyDownLimit = false;
            clearInterval(countDown.id);
          }
        }
      });
  }

  //リザルトシーンにクリア数を渡すメソッド
  public clearCountForResult() : number {
    return successCount;
  }
  //リザルトシーンにスコアを渡すメソッド
  public scoreForResult() : number {
    return scoreText;
  }
  //クリア数とスコアをリセットするメソッド
  public clearCount_scoreReset() : void {
    successCount = 0;
    scoreText = 0;
  }

}
