"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var scene_1 = require("../scene");
var scene_name_1 = require("../scene-name");
var SceneTop = /** @class */ (function (_super) {
    __extends(SceneTop, _super);
    function SceneTop(gameManager) {
        return _super.call(this, gameManager, scene_name_1.SceneName.Top) || this;
    }
    SceneTop.prototype.main = function () {
        var _this = this;
        this.gameManager.game.gameStart();
        var mc = new lib.PageTop();
        this.sceneContainer.addChild(mc);
        // リスナーの登録
        mc.btnBack.on('click', function () {
            _this.gameManager.sceneChange(scene_name_1.SceneName.Result);
        });
        mc.btnNext.on('click', function () {
            _this.gameManager.sceneChange(scene_name_1.SceneName.Game);
        });
        //キーボード制御
        window.addEventListener("keydown", function (event) {
            var keyCode = event.keyCode;
            console.log("\u62BC\u3055\u308C\u305F\u30AD\u30FC\u306E\u30B3\u30FC\u30C9\uFF1A" + keyCode);
        });
        var a = new SceneTop(this.gameManager);
        console.log(a);
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
    };
    return SceneTop;
}(scene_1.Scene));
exports.SceneTop = SceneTop;
