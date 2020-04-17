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

    /*追加*/
    const sceneGame = new SceneGame(this.gameManager);
    sceneGame.returnOfNumber();

    // リスナーの登録
    mc.btnBack.on('click', () => {
      this.gameManager.sceneChange(SceneName.Game);
    });
    mc.btnNext.on('click', () => {
      this.gameManager.sceneChange(SceneName.Top);
    });
  }

  

}
