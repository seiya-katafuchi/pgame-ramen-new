import {SceneName} from './scene-name';
import {GameManager} from '../game-manager';

export class Scene {

  name: SceneName;
  sceneContainer: createjs.Container;
  gameManager: GameManager;

  constructor(gameManager: GameManager, name: SceneName) {
    this.sceneContainer = new createjs.Container();
    this.gameManager = gameManager;
    this.name = name;
  }

  makeSceneContainer(): createjs.Container {
    this.sceneContainer = new createjs.Container();
    this.main();
    return this.sceneContainer;
  }

  main(): void {
  }

}
