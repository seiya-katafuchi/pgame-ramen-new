export class Animations {
  //シートをダウンさせる
  public static animationDown(
    coordinate: number,
    sheet: createjs.MovieClip
  ): void {
    createjs.Tween.get(sheet).to(
      {
        y: coordinate,
      },
      1500,
      createjs.Ease.bounceOut
    );
  }

  //シートをアップさせる
  public static animationUp(
    coordinate: number,
    sheet: createjs.MovieClip
  ): void {
    createjs.Tween.get(sheet).to(
      {
        y: -coordinate,
      },
      1500
    );
  }
  //テキストのアニメーション
  public static clearTextAnimation(addClearText: createjs.Text): void {
    addClearText.alpha = 1.0;
    createjs.Tween.get(addClearText)
      .to({ y: 50, alpha: 0 }, 600)
      .to({ y: 70 }, 1);
  }
  public static scoreTextAnimation(
    score: number,
    addScoreText: createjs.Text
  ): void {
    addScoreText.alpha = 1.0;
    addScoreText.text = `+${score}`;
    createjs.Tween.get(addScoreText)
      .to({ y: 50, alpha: 0 }, 600)
      .to({ y: 70 }, 1);
  }
  //ゲームオーバー時のアニメーション
  public static vibrationAnimation(containerBoy: createjs.Container): void {
    const xValue: number = 30;
    const time: number = 50;
    createjs.Tween.get(containerBoy, { loop: true })
      .to({ x: -xValue }, time)
      .to({ x: xValue }, time);
  }
  //難易度アップを知らせるアニメーション
  public static difficultyImageAnimation(
    difficultyImage: createjs.Bitmap
  ): void {
    createjs.Tween.get(difficultyImage)
      .to({ y: 0 }, 1000)
      .wait(2000)
      .to({ y: -150 }, 1000);
  }
  //最初に行うアニメーション
  public static firstAnimation(
    containerBoy: createjs.Container,
    containerShopKeeper: createjs.Container,
    startCountDownText: createjs.Text
  ): void {
    createjs.Tween.get(containerBoy).to({ x: 0 }, 500);
    createjs.Tween.get(containerShopKeeper).to({ x: 400 }, 500);
    createjs.Tween.get(startCountDownText)
      .to({ alpha: 0.1 }, 999)
      .to({ alpha: 1 }, 1)
      .to({ alpha: 0.1 }, 999)
      .to({ alpha: 1 }, 1)
      .to({ alpha: 0.1 }, 999)
      .to({ alpha: 1 }, 1)
      .to({ alpha: 0.1 }, 999);
  }
}
