import { Scene } from "../scene";
import { SceneName } from "../scene-name";
import { GameManager } from "../../game-manager";
//import {TextField} from "../../TextField";

export class SceneTop extends Scene {
  constructor(gameManager: GameManager) {
    super(gameManager, SceneName.Top);
  }

  main(): void {
    this.gameManager.game.gameStart();

    const mc: lib.PageTop = new lib.PageTop();
    this.sceneContainer.addChild(mc);

    interface TopSceneFormat {
      animationDown(animationSpeed: number): void;
      animationUp(animationSpeed: number): void;
    }

    class TopScene implements TopSceneFormat {
      //ヘルプシートを取得
      private helpsheet: createjs.MovieClip = mc.helpsheet;

      //アニメーション上下の切り替え
      public hasAnimation: boolean = true;

      public constructor() {}

      //ヘルプシートをダウンさせる
      public animationDown(animationSpeed: number): void {
        createjs.Tween.get(this.helpsheet).to(
          {
            y: animationSpeed,
          },
          1500,
          createjs.Ease.bounceOut
        );
      }

      //ヘルプシートをアップさせる
      public animationUp(animationSpeed: number): void {
        createjs.Tween.get(this.helpsheet).to(
          {
            y: -animationSpeed,
          },
          1500
        );
      }
    }

    const topScene = new TopScene();

    // タッチ操作をサポートしているブラウザーならば
    if (createjs.Touch.isSupported() == true) {
      // リスナーの登録
      mc.botan.on("click", () => {
        this.gameManager.sceneChange(SceneName.Game);
      });
      mc.helpbutton.on("click", () => {
        if (topScene.hasAnimation) {
          topScene.animationDown(480);
          topScene.hasAnimation = false;
        } else {
          topScene.animationUp(480);
          topScene.hasAnimation = true;
        }
      });
      // タッチ操作を有効にします。
      createjs.Touch.enable(this.gameManager.stage);
    } else {
      // リスナーの登録
      mc.botan.on("click", () => {
        this.gameManager.sceneChange(SceneName.Game);
      });
      mc.helpbutton.on("click", () => {
        if (topScene.hasAnimation) {
          topScene.animationDown(220);
          topScene.hasAnimation = false;
        } else {
          topScene.animationUp(220);
          topScene.hasAnimation = true;
        }
      });
    }
  }
}
