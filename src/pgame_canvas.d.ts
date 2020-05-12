declare module lib {
  export class properties implements Object {
    static width: number;
    static height: number;
    static fps: number;
    static color: string;
    static manifest: Object[];
  }

  /*追加*/
  //スタートボタン
  export class botan extends createjs.MovieClip {}
  //ヘルプボタン
  export class helpbutton extends createjs.MovieClip {}
  //ヘルプシート
  export class helpsheet extends createjs.MovieClip {}
  //リスタートボタン
  export class restartButton extends createjs.MovieClip {}
  //ラインボタン
  export class lineButton extends createjs.MovieClip {}
  //ツイッターボタン
  export class twitterButton extends createjs.MovieClip {}
  //スマホ版左ボタン
  export class leftbutton extends createjs.MovieClip {}
  //スマホ版右ボタン
  export class rightbutton extends createjs.MovieClip {}
  //難易度アップシート
  export class nannidoup extends createjs.MovieClip {}
  //リザルトシート
  export class resultSheet extends createjs.MovieClip {
    //ゲームシーン→リザルトシート→テキストで取得できる
    ClearCountText: createjs.Text;
    ScoreText: createjs.Text;
    evaluation: createjs.Text;
  }

  export class PageTop extends createjs.MovieClip {
    botan: botan;
    helpbutton: helpbutton;
    helpsheet: helpsheet;
  }

  export class PageGame extends createjs.MovieClip {
    textScore: createjs.Text;
    /*追加*/
    CountDown: createjs.Text;
    SuccessCount: createjs.Text;
    ScoreText: createjs.Text;
    leftbutton: leftbutton;
    rightbutton: rightbutton;
    nannidoup: nannidoup;
    startCountDownText: createjs.Text;
  }

  export class PageResult extends createjs.MovieClip {
    /*追加*/
    resultSheet: resultSheet;
    restartButton: restartButton;
    lineButton: lineButton;
    twitterButton: twitterButton;
  }
}
