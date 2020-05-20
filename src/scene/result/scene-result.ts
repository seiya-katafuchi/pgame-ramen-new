import { Scene } from "../scene";
import { SceneName } from "../scene-name";
import { GameManager } from "../../game-manager";
/*追加*/
import { SceneGame } from "../game/scene-game";

export class SceneResult extends Scene {
  constructor(gameManager: GameManager) {
    super(gameManager, SceneName.Result);
  }

  main(): void {
    const mc: lib.PageResult = new lib.PageResult();
    this.sceneContainer.addChild(mc);
    //ゲームシーンのメソッドを使用できるように
    const sceneGame: SceneGame = new SceneGame(this.gameManager);
    //クリア数
    let clearCount: number = 0;
    //スコア
    let score: number = 0;
    //評価
    let evaluation: string = "";
    //ゲームシーンのクリア数、スコア、評価を取得
    sceneGame.giveResultData(
      (successCount: number, sc: number, eva: string) => {
        clearCount = successCount;
        score = sc;
        evaluation = eva;
      }
    );

    mc.resultSheet.ClearCountText.text = `${clearCount}`;
    mc.resultSheet.ScoreText.text = `${score}`;
    mc.resultSheet.evaluation.text = evaluation;

    interface ResultSceneFormat {
      animationDown(coordinate: number): void;
    }

    class ResultScene implements ResultSceneFormat {
      //リザルトシートを取得
      private resultSheet: createjs.MovieClip = mc.resultSheet;

      public constructor() {}

      //アニメーションのメソッド
      public animationDown(coordinate: number): void {
        setTimeout(() => {
          createjs.Tween.get(this.resultSheet).to(
            {
              y: coordinate,
            },
            1500,
            createjs.Ease.bounceOut
          );
        }, 1000);
      }
    }

    const resultScene = new ResultScene();

    // タッチ操作をサポートしているブラウザーならば
    if (createjs.Touch.isSupported() == true) {
      resultScene.animationDown(400);
      // タッチ操作を有効にします。
      createjs.Touch.enable(this.gameManager.stage);
    } else {
      resultScene.animationDown(200);
    }

    //ゲームシーンに遷移
    mc.restartButton.addEventListener("click", () => {
      this.gameManager.sceneChange(SceneName.Game);
      //クリア数とスコアと評価をリセット
      sceneGame.reset();
    });
    let strScore = `デンジャラスラーメンで${clearCount}杯をクリア！${score}点を獲得！評価「${evaluation}」を獲得！`;
    //URLは仮で入れています↓
    let gameUrl = "https://www.p-game.jp/game199/";
    //ラインボタン
    mc.lineButton.addEventListener("click", () => {
      const URL =
        "https://social-plugins.line.me/lineit/share?url=" +
        escape(gameUrl) +
        "&text=" +
        strScore +
        "&hashtags=プチゲーム,無料ゲーム,【ジャンル】,【ゲーム名】" +
        " & related=pgame_jp";
      window.open(URL, "sample", "width=600,height=400");
    });
    //ツイッターボタン
    mc.twitterButton.addEventListener("click", () => {
      let strTwitter = strScore;
      let urlTwitter = gameUrl;
      if (strTwitter != "") {
        if (strTwitter.length > 140) {
          console.log("テキストが140字を超えています");
        } else {
          // 投稿画面を開く
          urlTwitter =
            "http://twitter.com/share?url=" +
            escape(gameUrl) +
            "&text=" +
            strTwitter +
            "&hashtags=プチゲーム,無料ゲーム,【ジャンル】,【ゲーム名】" +
            " & related=pgame_jp";
          window.open(urlTwitter, "_blank", "width=600,height=400");
        }
      }
    });
  }
}
