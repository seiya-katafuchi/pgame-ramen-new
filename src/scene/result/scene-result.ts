import {Scene} from '../scene';
import {SceneName} from '../scene-name';
import {GameManager} from '../../game-manager';
/*追加*/
import {SceneGame} from "../game/scene-game";

export class SceneResult extends Scene {

  constructor(gameManager: GameManager) {
    super(gameManager, SceneName.Result);
  }

  main(): void {

    const mc: lib.PageResult = new lib.PageResult();
    this.sceneContainer.addChild(mc);
    /*追加 リザルトシート*/
    //const rs : lib.resultSheet = new lib.resultSheet();
    //this.sceneContainer.addChild(rs);

    /*追加*/
    const sceneGame = new SceneGame(this.gameManager);
    //ゲームシーンのクリア数を取得
    let clearCount : number =  sceneGame.clearCountForResult();
    //ゲームシーンのスコアを取得
    let score : number = sceneGame.scoreForResult();

    mc.resultSheet.ClearCountText.text = `${clearCount}`;
    mc.resultSheet.ScoreText.text = `${score}`;

    // リスナーの登録
    mc.btnBack.on('click', () => {
      this.gameManager.sceneChange(SceneName.Game);
    });
    mc.btnNext.on('click', () => {
      this.gameManager.sceneChange(SceneName.Top);
    });

    class ResultScene {
      //リザルトシートを取得
      private resultSheet : createjs.MovieClip = mc.resultSheet;

      public constructor() {

      }

      //アニメーションのメソッド
      public animationDown() : void {
        createjs.Tween.get(this.resultSheet)
          .to({
            y : 200
          },1500,createjs.Ease.bounceOut);
      }
    }

    //インスタンスの生成
    const resultScene = new ResultScene();

    //1秒後にリザルトシートを落とす
    setTimeout(() => {
      resultScene.animationDown();
    },1000);

    //ゲームシーンに遷移
    mc.restartButton.addEventListener("click",() => {
      this.gameManager.sceneChange(SceneName.Game);
      //クリア数とスコアをリセット
      sceneGame.clearCount_scoreReset();
    });
    //ラインボタン
    mc.lineButton.addEventListener("click",() => {
      console.log("ラインボタンが押されました");
    });
    //フェイスブックボタン
    mc.facebookButton.addEventListener("click",() => {
      console.log("フェイスブックボタンが押されました");
    });
  }

  

}
