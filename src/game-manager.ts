import {Game} from './game';
import Stage = createjs.Stage;
import {SceneName} from './scene/scene-name';
import {Scene} from './scene/scene';

export class GameManager {

  game: Game;
  state: string;
  private stage: Stage;

  private mode: string | undefined = process.env.BUILD_MODE;

  constructor(game: Game, stage: Stage) {
    this.state = Status.STOP;
    if(this.mode === 'dev'){
      console.group('GameManager constructor()');
      console.log('game : ', game);
      console.log('stage : ', stage);
      console.groupEnd();
    }
    this.game = game;
    this.stage = stage;
  }

  sceneChange(newSceneName: SceneName): void {
    let scene: Scene | undefined = this.game.sceneList.find((v) => v.name === newSceneName);
    if (!scene) {
      throw new Error(`newScene (${newSceneName}) is undefined ...`);
    }
    this.stage.removeAllEventListeners();
    this.stage.removeAllChildren();
    this.stage.addChild(scene.makeSceneContainer());
  }

  getState(): string {
    return this.state;
  }

  setRunState(): void {
    this.state = Status.RUN
  }

  setStopState(): void {
    this.state = Status.STOP;
  }

}

class Status {

  static RUN: string = 'Run';
  static STOP: string = 'Stop';

}
