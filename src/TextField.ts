export class TextField extends createjs.Container{
    private _textSprite = new createjs.Container();
    private _mc;
    private _origin;
    private _texts = [];
    private _adjustW;
    public text = this.createText;
    
    constructor(text, mc, origin, adjustW) {
        super();

        this._mc = mc;
        this._origin = origin;
        this.addChild(this._textSprite);
        this._adjustW = adjustW

        this.createText(text);

        this.regX = this.getBounds().width / 2;
    }

    private createText(textValue) {

        let str = textValue + '';

        //文字幅
        let NUM_WIDTH = (new this._mc()).getBounds().width + this._adjustW; // 文字調整用
        NUM_WIDTH = 40;
        
        //初期化
        this._texts.forEach((value)=> {
            this._textSprite.removeChild(value);
        });
        this._texts = [];
        Array.prototype.forEach.call(str, (value, index) =>{
            // if (value = '.') {
            //     value = 10;
            // }
            let _textMc = new this._mc();
            _textMc.gotoAndStop(value);
            _textMc.x = index * (NUM_WIDTH);
            this._texts.push(_textMc);
            this._textSprite.addChild(this._texts[index]);
        });

        if (this._origin == 2 || this._origin == 5 || this._origin == 8) {
            this._textSprite.x = -NUM_WIDTH * str.length / 2 + this._adjustW / 2;
        } else if (this._origin == 3 || this._origin == 6 || this._origin == 9) {
            this._textSprite.x = -NUM_WIDTH * str.length + this._adjustW / 2;
        }
        if (this._origin == 1 || this._origin == 2 || this._origin == 3) {
            this._textSprite.y = -this._textSprite.getBounds().height;
        } else if (this._origin == 4 || this._origin == 5 || this._origin == 6) {
            this._textSprite.y = -this._textSprite.getBounds().height / 2;
        }
    }

}