export class ImageSwitching {
  //男の子
  /*public boyNormal: createjs.Bitmap = new createjs.Bitmap(
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
      public static batsu: createjs.Bitmap = new createjs.Bitmap(
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
      //集中線
      public shuchusen: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/shuchu-sen-_black.png"
      );
      //ドン
      public don: createjs.Bitmap = new createjs.Bitmap(
        "../../../jsgame/images_pc/don.png"
      );
  //タイムアウトしたときの処理
  public static timeOut(): void {
    //キー入力解除
    this.isKeyDownEnabled = false;
    //画像の切り替え
    this.batsu.visible =false;
    shopKeeper.shopKeeperAngry.visible = true;
    shopKeeper.shopKeeper_2.visible = false;
    boy.boyGameOver_2.visible = true;
    boy.boyNormal.visible = false;
    backScreen_GameOver.gameOverBackScreen.visible = true;
    shuchusen.shuchusen.visible = false;
    don.don.visible = false;
    gameScene.vibrationAnimation();
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

  public static a(): void {
    console.log("eeee");
  }*/
}
