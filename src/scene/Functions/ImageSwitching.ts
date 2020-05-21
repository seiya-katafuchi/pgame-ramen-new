export class ImageSwitching {
  //ラーメンと集中線とドンを消す処理
  public static deleteRamenShuchusen(
    ramenMiso: createjs.Bitmap,
    ramenGekikara: createjs.Bitmap,
    ramenTonkotsu: createjs.Bitmap,
    ramenSyouyu: createjs.Bitmap,
    ramenShio: createjs.Bitmap,
    shuchusen: createjs.Bitmap,
    don: createjs.Bitmap
  ): void {
    ramenMiso.visible = false;
    ramenGekikara.visible = false;
    ramenTonkotsu.visible = false;
    ramenSyouyu.visible = false;
    ramenShio.visible = false;
    shuchusen.visible = false;
    don.visible = false;
    don.alpha = 1.0;
  }
  //激辛ラーメンを食べなかったときの画像の状態
  public static gekikaraRefusal(
    maru: createjs.Bitmap,
    shopKeeper_2: createjs.Bitmap,
    shopKeeper_1: createjs.Bitmap,
    boyNotEat: createjs.Bitmap
  ): void {
    maru.visible = true;
    shopKeeper_2.visible = false;
    shopKeeper_1.visible = true;
    boyNotEat.visible = true;
  }
  //激辛ラーメン食べたときの画像の状態
  public static gameOver(
    batsu: createjs.Bitmap,
    shopKeeper_2: createjs.Bitmap,
    shopKeeper_1: createjs.Bitmap,
    boyGameOver_1: createjs.Bitmap,
    boyNormal: createjs.Bitmap,
    gameOverBackScreen: createjs.Bitmap
  ): void {
    batsu.visible = true;
    shopKeeper_2.visible = false;
    shopKeeper_1.visible = true;
    boyGameOver_1.visible = true;
    boyNormal.visible = false;
    gameOverBackScreen.visible = true;
  }
  //ラーメンを食べなかったときの画像状態
  public static mistakeRamen(
    batsu: createjs.Bitmap,
    shopKeeper_2: createjs.Bitmap,
    shopKeeperAngry: createjs.Bitmap,
    boyGameOver_2: createjs.Bitmap,
    boyNormal: createjs.Bitmap,
    gameOverBackScreen: createjs.Bitmap
  ): void {
    batsu.visible = true;
    shopKeeper_2.visible = false;
    shopKeeperAngry.visible = true;
    boyGameOver_2.visible = true;
    boyNormal.visible = false;
    gameOverBackScreen.visible = true;
  }
  //ラーメンを食べたときの画像状態
  public static clearGame(
    maru: createjs.Bitmap,
    shopKeeper_2: createjs.Bitmap,
    shopKeeper_1: createjs.Bitmap,
    boyClear: createjs.Bitmap,
    boyNormal: createjs.Bitmap
  ): void {
    maru.visible = true;
    shopKeeper_2.visible = false;
    shopKeeper_1.visible = true;
    boyClear.visible = true;
    boyNormal.visible = false;
  }
  //最初の画像の状態
  public static firstState(
    maru: createjs.Bitmap,
    shopKeeper_2: createjs.Bitmap,
    shopKeeper_1: createjs.Bitmap,
    boyNormal: createjs.Bitmap,
    boyClear: createjs.Bitmap,
    boyNotEat: createjs.Bitmap
  ): void {
    maru.visible = false;
    shopKeeper_2.visible = true;
    shopKeeper_1.visible = false;
    boyNormal.visible = true;
    boyClear.visible = false;
    boyNotEat.visible = false;
  }
  //タイムアウトしたときの画像処理
  public static timeOutImageChange(
    batsu: createjs.Bitmap,
    shopKeeperAngry: createjs.Bitmap,
    shopKeeper_2: createjs.Bitmap,
    boyGameOver_2: createjs.Bitmap,
    boyNormal: createjs.Bitmap,
    gameOverBackScreen: createjs.Bitmap,
    shuchusen: createjs.Bitmap,
    don: createjs.Bitmap
  ): void {
    batsu.visible = true;
    shopKeeperAngry.visible = true;
    shopKeeper_2.visible = false;
    boyGameOver_2.visible = true;
    boyNormal.visible = false;
    gameOverBackScreen.visible = true;
    shuchusen.visible = false;
    don.visible = false;
  }
}
