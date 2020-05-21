import { Scene } from "../scene";

let id: any;

export class Functions extends Scene {
  //クリア数に応じてカウントダウンの秒数を返す処理(難易度アップ)
  public static returnCountDown(successCount: number): number {
    let countTime: number;
    if (successCount <= 20) {
      countTime = 1;
    } else if (successCount > 20 && successCount <= 50) {
      countTime = 0.9;
    } else if (successCount > 50 && successCount <= 100) {
      countTime = 0.8;
    } else if (successCount <= 200) {
      countTime = 0.7;
    } else {
      countTime = 0.6;
    }
    return countTime;
  }
  //評価を決める処理
  public static evaluationGive(
    successCount: number,
    evaluation: string
  ): string {
    if (successCount === 0) {
      evaluation = "E";
    } else if (successCount <= 20) {
      evaluation = "D";
    } else if (successCount <= 50) {
      evaluation = "C";
    } else if (successCount <= 80) {
      evaluation = "B";
    } else if (successCount <= 100) {
      evaluation = "A";
    } else if (successCount <= 200) {
      evaluation = "S";
    } else {
      evaluation = "SS";
    }
    return evaluation;
  }
  //ランダムにラーメンを表示するための処理
  public static randomRamen(): number {
    const max: number = 4;
    const min: number = 0;
    let randomNumber: number =
      Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNumber;
  }
}
