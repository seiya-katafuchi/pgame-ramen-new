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
    //ゲームシーンの称号を取得
    let syougou : string = sceneGame.syougouForResult();

    mc.resultSheet.ClearCountText.text = `${clearCount}`;
    mc.resultSheet.ScoreText.text = `${score}`;
    mc.resultSheet.syougou.text = syougou;

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
    let strScore = `ラーメンゲームで${clearCount}杯を完食！${score}点を獲得！称号「${syougou}」を獲得！`;
    let gameUrl = "https://www.p-game.jp/game199/";
    //ラインボタン
    mc.lineButton.addEventListener("click",() => {
      const URL = "https://social-plugins.line.me/lineit/share?url=" + escape(gameUrl) + "&text=" + strScore + "&hashtags=プチゲーム,無料ゲーム,【ジャンル】,【ゲーム名】" + " & related=pgame_jp";
      window.open( URL, "sample", "width=600,height=400" );
    });
    //ツイッターボタン
    mc.twitterButton.addEventListener("click",() => {
      let strTwitter = strScore;
      let urlTwitter = gameUrl;
      if( strTwitter != "" ){
        if( strTwitter.length > 140 ){
          console.log( "テキストが140字を超えています" );
        }
        else{
          // 投稿画面を開く
          urlTwitter = "http://twitter.com/share?url=" + escape(gameUrl) + "&text=" + strTwitter + "&hashtags=プチゲーム,無料ゲーム,【ジャンル】,【ゲーム名】" + " & related=pgame_jp";
          window.open( urlTwitter, "_blank", "width=600,height=400" );
        }
      }
    });
  }

  

}
