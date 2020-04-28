(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.neko3 = function() {
	this.initialize(img.neko3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,3000);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.BtnPlus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AnzCWIAAkrIPnAAIAAErg");
	this.shape.setTransform(50,15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgEAhIAAgcIgdAAIAAgJIAdAAIAAgcIAJAAIAAAcIAdAAIAAAJIgdAAIAAAcg");
	this.shape_1.setTransform(47.725,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AnQCWQgjAAAAgRIAAkJQAAgRAjAAIOhAAQAjAAAAARIAAEJQAAARgjAAg");
	this.shape_2.setTransform(50,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,30);


(lib.BtnNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AnzCWIAAkrIPnAAIAAErg");
	this.shape.setTransform(50,15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgKAmIAAg3IgTAAIAAgKIATAAIAAgZIAKAAIAAAZIAaAAIAAAKIgaAAIAAA0QAAAHAJgBQALAAAKgEIAAANQgOADgIAAQgSAAAAgPg");
	this.shape_1.setTransform(58.1,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AARAoIgRgeIgQAeIgOAAIAYgoIgWgnIANAAIAPAdIAPgdIAOAAIgWAnIAYAog");
	this.shape_2.setTransform(50.7,15.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgSAgQgLgLAAgVQAAgUAKgKQAJgJALAAQAKAAAIAHQALAJgBAXIgtAAQAAAUAHAFQAEAEAHAAQAGAAAEgEQAEgEABgIIANAAQgCAMgHAHQgIAIgLAAQgMAAgIgIgAAAgdQgFAAgFAGQgFAEgBALIAgAAQABgMgHgFQgEgEgFAAIgBAAg");
	this.shape_3.setTransform(43.25,15.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAOA5IgehUIAAAAIAABUIgNAAIAAhxIAQAAIAdBUIABAAIAAhUIAOAAIAABxg");
	this.shape_4.setTransform(35.7,13.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AnQCWQgjAAAAgRIAAkJQAAgRAjAAIOhAAQAjAAAAARIAAEJQAAARgjAAg");
	this.shape_5.setTransform(50,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,30);


(lib.BtnMinus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AnzCWIAAkrIPnAAIAAErg");
	this.shape.setTransform(50,15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AggAFIAAgJIBBAAIAAAJg");
	this.shape_1.setTransform(47.7,14.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AnQCWQgjAAAAgRIAAkJQAAgRAjAAIOhAAQAjAAAAARIAAEJQAAARgjAAg");
	this.shape_2.setTransform(50,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,30);


(lib.BtnBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("AnzCWIAAkrIPnAAIAAErg");
	this.shape.setTransform(50,15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAQA5IgUgrIgNAPIAAAcIgMAAIAAhxIAMAAIAABFIAcgjIAPAAIgXAbIAbA0g");
	this.shape_1.setTransform(61.425,13.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgUAfQgKgKAAgTQAAgVALgLQAKgJAKAAQAMAAAHAHQAIAHAAANIgNAAQgBgJgEgEQgDgEgGAAQgFAAgFAGQgHAHAAASQAAAQAGAGQAFAGAGAAQAGAAAEgFQAGgGAAgNIANAAQABARgKAJQgIAIgMAAQgLAAgKgJg");
	this.shape_2.setTransform(53.7013,15.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAQAoQgCgCAAgHQgIAJgMAAQgLAAgGgGQgHgGABgJQAAgJAGgHQAGgFAHgCQAUgGABgDQADgDAAgEQAAgDgDgDQgEgDgHAAQgFAAgEAEQgEAFAAAHIgOAAQABgMAHgHQAIgHALAAQAOAAAGAGQAGAGAAAIIAAAuQAAAHAFAGgAgCADQgGADgEAEQgDADAAAFQAAAGADADQADADAGAAQAKAAAHgNIAAgUQgHADgJADg");
	this.shape_3.setTransform(46.25,15.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgeA5IAAhxIAeAAQANAAAHAHQAJAJAAAMQAAALgHAHQgFAFgEABQAHADAEAEQAHAHAAAOQAAAOgHAIQgLALgOAAgAgRAuIAOAAQAJAAAHgHQAGgGAAgJQAAgLgHgGQgHgHgGAAIgQAAgAgRgKIARAAQAGAAAFgFQAFgFAAgIQAAgIgEgEQgFgFgFAAIgTAAg");
	this.shape_4.setTransform(38.825,13.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AnQCWQgjAAAAgRIAAkJQAAgRAjAAIOhAAQAjAAAAARIAAEJQAAARgjAAg");
	this.shape_5.setTransform(50,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,30);


(lib.PageTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Component
	this.btnBack = new lib.BtnBack();
	this.btnBack.name = "btnBack";
	this.btnBack.setTransform(170,700);
	new cjs.ButtonHelper(this.btnBack, 0, 1, 2, false, new lib.BtnBack(), 3);

	this.btnNext = new lib.BtnNext();
	this.btnNext.name = "btnNext";
	this.btnNext.setTransform(370,700);
	new cjs.ButtonHelper(this.btnNext, 0, 1, 2, false, new lib.BtnNext(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AioEaIAAozIBCAAIAABIQAthIBIAAQA3AAAoAnQA7A7AACAQAAB1g7A7QguAug0AAQhLAAgnhBIAAC0gAg/i9QgnAnAABfQAABbAtAuQAbAaAgAAQAhAAAagaQAkgkAAhoQAAhpgkgkQgagbgeAAQggAAgkAlg");
	this.shape.setTransform(362.15,256.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ah6CsQg1g0ABh2QgBh5A1g0QA0g1BIAAQBFAAA0A1QA0A0ABB5QgBB2g0A0Qg0A1hFAAQhIAAg0g1gAhCiHQglAkABBlQgBBiAlAkQAdAeAnAAQAjAAAegeQAkgkAAhiQAAhlgkgkQgegegjAAQgnAAgdAeg");
	this.shape_1.setTransform(319.85,251.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgoFAIAAkhIAAkfIiAAAIAAg/IFRAAIAAA/IiGAAIAAJAg");
	this.shape_2.setTransform(277.85,241.55);

	this.instance = new lib.neko3();
	this.instance.setTransform(220,380,0.0667,0.0667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btnNext},{t:this.btnBack}]}).wait(1));

	// BackGround
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("Egx/BLAMAAAiV/MBj/AAAMAAACV/g");
	this.shape_3.setTransform(320,480);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PageTop, new cjs.Rectangle(0,0,640,960), null);


(lib.PageResult = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Component
	this.btnBack = new lib.BtnBack();
	this.btnBack.name = "btnBack";
	this.btnBack.setTransform(170,700);
	new cjs.ButtonHelper(this.btnBack, 0, 1, 2, false, new lib.BtnBack(), 3);

	this.btnNext = new lib.BtnNext();
	this.btnNext.name = "btnNext";
	this.btnNext.setTransform(370,700);
	new cjs.ButtonHelper(this.btnNext, 0, 1, 2, false, new lib.BtnNext(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag/DTIAAk2IhpAAIAAg1IBpAAIAAiQIBBAAIAACQICTAAIAAA1IiTAAIAAEpQgBAlA1gBQA4AAA7gaIAABGQhSATgrAAQhrAAAAhWg");
	this.shape.setTransform(424.2,243.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AggFAIAAp/IBBAAIAAJ/g");
	this.shape_1.setTransform(383,241.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABdDhIAAhCQg0BChRAAQg3AAgegeQghghAAgxIAAlRIBBAAIAAFBQABAnAQARQAQAQAoAAQAsAAAhghQAlgkgBg4IAAkMIBCAAIAAHBg");
	this.shape_2.setTransform(340.5,251.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhyC5QgrgqAEhcIBBAAQAABIAUAUQAXAXAtAAQAuAAAXgXQAUgUAAgaQAAgUgUgUQgUgTg3gUQhSgdgagaQgdgdAAgrQAAgrAkgkQAkgkBKAAQBCAAAnAoQAoAngEA4IhBAAQgEgkgTgUQgUgUghAAQgpAAgRARQgTATAAAXQAAARAQAQQAXAXBKAaQA7AUAbAZQAdAeAAAxQAAAughAhQguAuhIAAQhNAAgogog");
	this.shape_3.setTransform(298.6618,251.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhoC2Qg/g+AAh2QABh5A4g4QAwgxBFAAQA4AAAtAoQA7AxgDCJIkCAAQAABsAnAdQAXAXAqAAQAkAAAXgXQAUgTADgyIBMAAQgKBJgoAnQgqArhCAAQhIAAgqgrgAAAioQggADgeAeQgaAagGA7IC3AAQADhCghgdQgagYgbAAIgGABg");
	this.shape_4.setTransform(257,251.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ABkFAIhvkoIhbAAIAAEoIhMAAIAAp/ICkAAQBRAAA1A1QAqArAABOQAABIgqAuQgeAggdAKIB2ExgAhmglIBfAAQAmABAegeQAagbAAg0QAAgxgegeQggggg3AAIhIAAg");
	this.shape_5.setTransform(215.825,241.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btnNext},{t:this.btnBack}]}).wait(1));

	// BackGround
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#99FF66").s().p("Egx/BLAMAAAiV/MBj/AAAMAAACV/g");
	this.shape_6.setTransform(320,480);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PageResult, new cjs.Rectangle(0,0,640,960), null);


(lib.PageGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Component
	this.textScore = new cjs.Text("0", "50px 'MS Gothic'", "#333333");
	this.textScore.name = "textScore";
	this.textScore.textAlign = "center";
	this.textScore.lineHeight = 52;
	this.textScore.parent = this;
	this.textScore.setTransform(325.6,430.05);

	this.btnPlus = new lib.BtnPlus();
	this.btnPlus.name = "btnPlus";
	this.btnPlus.setTransform(328,529.8);
	new cjs.ButtonHelper(this.btnPlus, 0, 1, 2, false, new lib.BtnPlus(), 3);

	this.btnMinus = new lib.BtnMinus();
	this.btnMinus.name = "btnMinus";
	this.btnMinus.setTransform(218,529.8);
	new cjs.ButtonHelper(this.btnMinus, 0, 1, 2, false, new lib.BtnMinus(), 3);

	this.btnBack = new lib.BtnBack();
	this.btnBack.name = "btnBack";
	this.btnBack.setTransform(170,700);
	new cjs.ButtonHelper(this.btnBack, 0, 1, 2, false, new lib.BtnBack(), 3);

	this.btnNext = new lib.BtnNext();
	this.btnNext.name = "btnNext";
	this.btnNext.setTransform(370,700);
	new cjs.ButtonHelper(this.btnNext, 0, 1, 2, false, new lib.BtnNext(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhoC2Qg/g+AAh2QABh5A4g4QAwgxBFAAQA4AAAtAoQA7AxgDCJIkCAAQAABsAnAdQAXAXAqAAQAkAAAXgXQAUgTADgyIBMAAQgKBJgoAnQgqArhCAAQhIAAgqgrgAAAioQggADgeAeQgaAagGA7IC3AAQADhCghgdQgagYgbAAIgGABg");
	this.shape.setTransform(383,251.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AB/DhIAAlRQgBgbgNgNQgJgJgRAAQgQAAgRAQQgWAXgBAxIAAEqIhBAAIAAlVQAAgagJgKQgKgJgNAAQgUAAgRAQQgWAXAAAxIAAEqIhCAAIAAnBIBCAAIAAA4QAhg4A0AAQA0AAAQA4QAhg4A0AAQAnAAAVAUQATAUAAAqIAAFvg");
	this.shape_1.setTransform(340.5,251.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABcDhQgNgNAAglQgyAyhHAAQg6AAglgkQghghABgxQgBg1AlgkQAhggAqgNQBugkALgNQAQgUAAgUQAAgTgUgRQgQgNgrAAQggAAgTAUQgbAagDArIhIAAQADhCArgqQAngoBEAAQBPAAAgAhQAiAhAAAxIAAECQAAAoAaAkgAgMASQgnANgYAXQgQAQAAAeQAAAhAQAQQARARAkAAQA6AAArhFIAAh1QgnAWg0AQg");
	this.shape_2.setTransform(299,251.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AB0FAIgKg7QgtA7g+AAQg4AAgngnQhLhMAAi+QAAjLBShSQAxgxA6AAQA+AAAkAkQA4A4AABsIhFAAQgDhVgegeQgXgWgdAAQgZAAgRAQQhIBIAAC3QAACgA1A1QAaAbAZAAQAhAAAagbQAngoAAhbIAAg/IhlAAIAAg9ICnAAIAAFbg");
	this.shape_3.setTransform(256.525,241.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btnNext},{t:this.btnBack},{t:this.btnMinus},{t:this.btnPlus},{t:this.textScore}]}).wait(1));

	// BackGround
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFCC").s().p("Egx/BLAMAAAiV/MBj/AAAMAAACV/g");
	this.shape_4.setTransform(320,480);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PageGame, new cjs.Rectangle(0,0,640,960), null);


(lib.MovieClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.PageResult = new lib.PageResult();
	this.PageResult.name = "PageResult";
	this.PageResult.setTransform(1600,480,1,1,0,0,0,320,480);

	this.PageGame = new lib.PageGame();
	this.PageGame.name = "PageGame";
	this.PageGame.setTransform(960,480,1,1,0,0,0,320,480);

	this.PageTop = new lib.PageTop();
	this.PageTop.name = "PageTop";
	this.PageTop.setTransform(320,480,1,1,0,0,0,320,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PageTop},{t:this.PageGame},{t:this.PageResult}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MovieClip, new cjs.Rectangle(0,0,1920,960), null);


// stage content:
(lib.pgame_canvas_sp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.PageTop();
	this.instance.setTransform(1206.3,-108,1,1,0,0,0,320,480);

	this.instance_1 = new lib.PageResult();
	this.instance_1.setTransform(1856.45,-94,1,1,0,0,0,320,480);

	this.instance_2 = new lib.PageGame();
	this.instance_2.setTransform(2386.55,-122,1,1,0,0,0,320,480);

	this.instance_3 = new lib.MovieClip();
	this.instance_3.setTransform(1600.45,480,1,1,0,0,0,960,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960.5,-122,1746.1,1082);
// library properties:
lib.properties = {
	id: '235237728A5628459F398B3B054DFB64',
	width: 640,
	height: 960,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"jsgame/images_sp/neko3.png?1588050204213", id:"neko3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['235237728A5628459F398B3B054DFB64'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;