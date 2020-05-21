import { Scene } from "../scene";
import { SceneName } from "../scene-name";
import { GameManager } from "../../game-manager";
import { Animations } from "../Functions/Animations";
//import {TextField} from "../../TextField";

export class SceneTop extends Scene {
  constructor(gameManager: GameManager) {
    super(gameManager, SceneName.Top);
  }

  main(): void {
    this.gameManager.game.gameStart();

    const mc: lib.PageTop = new lib.PageTop();
    this.sceneContainer.addChild(mc);
    //ヘルプシートを取得
    const helpsheet: createjs.MovieClip = mc.helpsheet;
    //pc版sp版それぞれのアニメーション移動量
    const animationMoveForSP: number = 480;
    const animationMoveForPC: number = 220;
    //上下アニメーション切り替え用
    let hasAnimation: boolean = true;

    // タッチ操作をサポートしているブラウザーならば
    if (createjs.Touch.isSupported() == true) {
      // リスナーの登録
      mc.botan.on("click", () => {
        this.gameManager.sceneChange(SceneName.Game);
      });
      mc.helpbutton.on("click", () => {
        if (hasAnimation) {
          Animations.animationDown(animationMoveForSP, helpsheet);
          hasAnimation = false;
        } else {
          Animations.animationUp(animationMoveForSP, helpsheet);
          hasAnimation = true;
        }
      });
      // タッチ操作を有効にします。
      createjs.Touch.enable(this.gameManager.stage);
    } else {
      //スタートボタン
      mc.botan.on("click", () => {
        this.gameManager.sceneChange(SceneName.Game);
      });
      //ヘルプボタン
      mc.helpbutton.on("click", () => {
        if (hasAnimation) {
          Animations.animationDown(animationMoveForPC, helpsheet);
          hasAnimation = false;
        } else {
          Animations.animationUp(animationMoveForPC, helpsheet);
          hasAnimation = true;
        }
      });
    }
  }
}
