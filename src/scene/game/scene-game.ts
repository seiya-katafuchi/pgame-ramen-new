import {Scene} from '../scene';
import {SceneName} from '../scene-name';
import {GameManager} from '../../game-manager';

let count : number = 0;

export class SceneGame extends Scene {

  private score: number = 100;

  private num : number = 50;

  constructor(gameManager: GameManager) {
    super(gameManager, SceneName.Game);
  }

  main(): void {

    const mc: lib.PageGame = new lib.PageGame();
    this.sceneContainer.addChild(mc);

    mc.textScore.text = this.score.toString();

    mc.textScore2.text = count.toString();

    // リスナーの登録
    mc.btnBack.on('click', () => {
      this.gameManager.sceneChange(SceneName.Top);
      this.score = 100;
      mc.textScore.text = this.score.toString();
    });
    mc.btnNext.on('click', () => {
      this.gameManager.sceneChange(SceneName.Result);
      this.gameManager.game.gameEnd(this.score);
      this.score = 100;
      mc.textScore.text = this.score.toString();
    });
    mc.btnPlus.on('click', () => {
      console.log('hoge');
      this.score++;
      count++;
      mc.textScore.text = this.score.toString();
      mc.textScore2.text = count.toString();
      //ここはgame.tsのメソッドを使っている
      this.gameManager.game.pgameAdPopUp();
    });
    mc.btnMinus.on('click', () => {
      this.score--;
      mc.textScore.text = this.score.toString();
    });
    mc.btnMinus.on('click', () => {
      this.score--;
      mc.textScore.text = this.score.toString();
    });
    
  }

  public returnOfNumber() : void {
    console.log(count);
  }

}
