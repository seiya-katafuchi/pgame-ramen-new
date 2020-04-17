import Stage = createjs.Stage;
import {GameManager} from './game-manager';
import {Scene} from './scene/scene';
import {SceneName} from './scene/scene-name';
import {SceneTop} from './scene/top/scene-top';
import {SceneGame} from './scene/game/scene-game';
import {SceneResult} from './scene/result/scene-result';

export class Game {

  /**
   * dev:  開発環境
   * prod: 本番環境
   */
  private build_mode: string | undefined = process.env.BUILD_MODE;

  /**
   * 0 : PC
   * 1 : SP
   */
  type: number;
  gameManager: GameManager;
  sceneList: Scene[];

  constructor(stage: Stage, type: number) {

    if(this.build_mode === 'dev'){
      console.group('Game constructor()');
      console.log('stage : ', stage);
    }

    this.type = type;

    this.gameManager = new GameManager(this, stage);

    /**
     * Scene の登録
     * (注) Scene を追加した際には追記すること
     */
    this.sceneList = [
      new SceneTop(this.gameManager),
      new SceneGame(this.gameManager),
      new SceneResult(this.gameManager),
    ];

    this.gameManager.sceneChange(SceneName.Top);
    this.gameManager.setRunState();

    if(this.build_mode === 'dev') {
      console.groupEnd();
    }
  }

  /**
   * ゲームの一時停止
   */
  gamePause(): void {
    if (window.hasOwnProperty('pgame_fw_paused')) {
      if(this.build_mode === 'dev') {
        console.log('gamePause ... (fw)');
      }
      // @ts-ignore
      window.pgame_fw_paused();
    } else {
      if(this.build_mode === 'dev') {
        console.log('gamePause ... (no fw)');
      }
    }
  }

  /**
   * ゲームの終了
   * @param score
   */
  gameEnd(score: number): void {
    if (window.hasOwnProperty('pgame_fw_ended')) {
      if(this.build_mode === 'dev') {
        console.log('gameEnd ... (fw)');
      }
      // @ts-ignore
      window.pgame_fw_ended(score);
    } else {
      if(this.build_mode === 'dev') {
        console.log('gameEnd ... (no fw)');
      }
    }
  }

  /**
   * ゲームのスタート
   */
  gameStart(): void {
    if (window.hasOwnProperty('pgame_fw_playcountup')) {
      if(this.build_mode === 'dev') {
        console.log('gameStart ... (fw)');
      }
      // @ts-ignore
      window.pgame_fw_playcountup();
    } else {
      if(this.build_mode === 'dev') {
        console.log('gameStart ... (no fw)');
      }
    }
    if(this.build_mode === 'dev') {
      console.log(this.gameManager.getState());
    }
  }

  /**
   * facebookでシェア
   * @param imageUrl
   * @param gameUrl
   * @param title
   * @param description
   */
  pgameFacebookShare(imageUrl: string, gameUrl: string, title: string, description: string) {
    if (window.hasOwnProperty('pgame_fw_facebook_share')) {
      if(this.build_mode === 'dev') {
        console.log('shareFaceBook ... (fw)');
      }
      (window as any)['pgame_fw_facebook_share'](imageUrl, gameUrl, title, description);
    } else {
      if(this.build_mode === 'dev') {
        console.log('shareFaceBook ... (no fw)');
      }
      window.open('https://www.facebook.com/sharer.php?scr=bm&u=' + gameUrl + '&t=' + title);
    }
  }

  /**
   * lineでシェア
   * @param gameUrl
   */
  pgameLineShare(gameUrl: string) {
    if (window.hasOwnProperty('pgame_fw_line_share')) {
      if(this.build_mode === 'dev') {
        console.log('shareLine ... (fw)');
      }
      (window as any)['pgame_fw_line_share'](gameUrl);
    } else {
      if(this.build_mode === 'dev') {
        console.log('shareLine ... (no fw)');
      }
    }
  }

  /**
   * 広告表示
   */
  pgameAdPopUp() {
    if (window.hasOwnProperty('pgame_fw_ad_popup')) {
      if(this.build_mode === 'dev') {
        console.log('adPopUp ... (fw)');
      }
      (window as any)['pgame_fw_ad_popup']();
    } else {
      console.log('adPopUp ... (no fw)');
      this.gameManager.setStopState();
      let counter = 0;
      const intervalId = setInterval(() => {
        counter++;
        if (counter > 9) {
          console.log(`show ad dialog  : ${'-'.repeat(counter)}${counter ? '>' : ''} x`);
          console.log('close ad dialog');
          window.clearInterval(intervalId);
          this.gameManager.setRunState();
          return;
        }
        console.log(`show ad dialog  : ${'-'.repeat(counter)}${counter ? '>' : ''}`);
      }, 400);
    }
  }

}
