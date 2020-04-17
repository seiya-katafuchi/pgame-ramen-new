
declare module lib {

	export class properties implements Object {
		static width: number;
		static height: number;
		static fps: number;
		static color: string;
		static manifest: Object[];
	}

	export class neko3 extends createjs.Bitmap {
	}

	export class BtnNext extends createjs.MovieClip {
	}

	export class BtnBack extends createjs.MovieClip {
	}
	
	export class BtnPlus extends createjs.MovieClip {
    }
  
    export class BtnMinus extends createjs.MovieClip {
	}
	
	/*追加*/
	//スタートボタン
	export class botan extends createjs.MovieClip {
	}
	//ヘルプボタン
	export class helpbutton extends createjs.MovieClip {
	}
	//ヘルプシート
	export class helpsheet extends createjs.MovieClip {
	}
	
	export class PageTop extends createjs.MovieClip {
		botan:botan;
		helpbutton:helpbutton;
		helpsheet:helpsheet;
	}
	
  export class PageGame extends createjs.MovieClip {
    btnNext: BtnNext;
    btnBack: BtnBack;
    btnPlus: BtnPlus;
    btnMinus: BtnMinus;
	textScore: createjs.Text;
	/*追加*/
	textScore2 : createjs.Text; 
	
  }
  
  export class PageResult extends createjs.MovieClip {
    btnNext: BtnNext;
    btnBack: BtnBack;
  }

}

