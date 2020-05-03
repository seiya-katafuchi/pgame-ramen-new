import {Scene} from '../scene';
import {SceneName} from '../scene-name';
import {GameManager} from '../../game-manager';
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
      animationDown(animationSpeed : number) : void;
      animationUp(animationSpeed : number) : void;
    }

    class TopScene implements TopSceneFormat{
      //ヘルプシートを取得
      private helpsheet : createjs.MovieClip = mc.helpsheet; 
      
      public constructor(){
      
      }
      public animationDown(animationSpeed : number) : void {
        createjs.Tween.get(this.helpsheet)
          .to({
            y : animationSpeed
          },1500,createjs.Ease.bounceOut);
      }

      public animationUp(animationSpeed : number) : void {
        createjs.Tween.get(this.helpsheet)
        .to({
          y : -animationSpeed
        },1500);
      }
    }
    //アニメーションのフラグ
    let animationFlag : boolean = true;
    //インスタンスの生成
    const topScene = new TopScene();
    

    // タッチ操作をサポートしているブラウザーならば
    if(createjs.Touch.isSupported() == true){
      // リスナーの登録
      mc.botan.on('click', () => {
        this.gameManager.sceneChange(SceneName.Game);
      });
      mc.helpbutton.on('click', () => {
        if(animationFlag){
          topScene.animationDown(480);
          animationFlag = false;
        }
        else {
          topScene.animationUp(480);
          animationFlag = true;
        }
      });
      // タッチ操作を有効にします。
      createjs.Touch.enable(this.gameManager.stage);
    }
    else {
      // リスナーの登録
      mc.botan.on('click', () => {
      this.gameManager.sceneChange(SceneName.Game);
      });
      mc.helpbutton.on('click', () => {
        if(animationFlag){
          topScene.animationDown(220);
         animationFlag = false;
        }
        else {
          topScene.animationUp(220);
          animationFlag = true;
        }
      });
    }
   


    /*interface TimeFormat {

    }
    class Time implements TimeFormat{
      public constructor(private _time : number){

      }
      public returnNumber() : void {
        console.log(this.sumNumber());
      }
      private sumNumber() : number {
        this._time += 1;
        return this._time;
      }
    }

    const time = new Time(10);
    time.returnNumber();



    interface QuizFormat{
      getQuizData : any;
    }

    class Quiz implements QuizFormat{
      private API_URL : string = "https://opentdb.com/api.php?amount=10";
      public constructor(){
        
      }
      public getQuizData() : void {
        fetch(this.API_URL)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data.results);
          })
      }
    }

    const quiz1 = new Quiz();
    quiz1.getQuizData();*/




    /*mc.btnBack.addEventListener("click",() => {
      console.log("wwww");
      this.gameManager.sceneChange(SceneName.Result);
    });*/

    /*function playomikuzi(age : number,name : string) : string {
      let kuji : string = "";
      if(age === 17){
        kuji = "大吉";
      }
      else {
        kuji = "凶";
      }
      return name + "さんの運勢は" + kuji + "です";
    }

    let age : number = 17;
    let name : string = "せいや";
    //ここは省略してもかける : string
    let unsei : string = playomikuzi(age,name);
    console.log(unsei);

    //戻り値(return)がないときにvoidを記述
    function hello(text : string) : void {
      console.log(text);
    }

    let text : string = "こんにちは";
    hello(text);

    class Hello {
      //メンバー変数
      public name : string;
      private _age : number;

      //getter/setter(プロパティ)
      get age() : number {
        return this._age;
      }
      set age(value : number){
        this._age = value;
      }

      //コンストラクタ
      constructor(name : string,age : number){
        this.name = name;
        this._age = age;
      }

      //メンバーメソッド(パブリック)
      public say() : string {
        return this.getHelloString();
      }

      //メンバーメソッド
      private getHelloString() : string {
        return `Hello, ${name}!`;
      }
    }

    let a = new Hello("seiya",22);
    console.log(a.say());

    interface IAnimal {
      name: string;
      makeSound(): string;
    }
    //implementsを使って実装　CatではIAnimalが持つメンバーを実装する必要がある
    class Cat implements IAnimal {
      public name: string;
      constructor(name: string) {
        this.name = name;
      }
      public makeSound(): string {
        return "にゃー";
      };
    }
    
    var myCat : IAnimal;
    myCat = new Cat("小鉄");
    
    var sound = myCat.makeSound(); // 「ニャー」
    console.log(sound);*/
/*
    const data : number[] = [5,8,9,4,6];
    
    const a = (array : number[],callback : any) => {
      let data2 : number[] = [];
      array.forEach((value : number,index : number) => {
          data2.push(callback(value,index));
      });
      return data2;
    };

    const data3 : number[] = a(data,(vaule : number,index : number) : number => {
        console.log(`index:${index}value:${vaule}`);
        return index * vaule;
    });

    console.log(data3);

    //連想配列の型
    let hoge : {[index : number] : string} = {
      1:"aaaaaaaa",
      2:"ssssssssss"
    };

    console.log(hoge);*/
  }

}
