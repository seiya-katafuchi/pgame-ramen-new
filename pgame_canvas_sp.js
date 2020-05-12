(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.GameBackScreen_SP = function() {
	this.initialize(img.GameBackScreen_SP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,642,828);


(lib.HelpButton_SP = function() {
	this.initialize(img.HelpButton_SP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,167);


(lib.HelpButton_SP_Push = function() {
	this.initialize(img.HelpButton_SP_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,159);


(lib.helpsheet_SP = function() {
	this.initialize(img.helpsheet_SP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,843,596);


(lib.LeftButton = function() {
	this.initialize(img.LeftButton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,152);


(lib.LeftButtonPush = function() {
	this.initialize(img.LeftButtonPush);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,152);


(lib.LineButton_SP = function() {
	this.initialize(img.LineButton_SP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,166);


(lib.LineButton_SP_Push = function() {
	this.initialize(img.LineButton_SP_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,159);


(lib.owan = function() {
	this.initialize(img.owan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,80);


(lib.RestartButton_SP = function() {
	this.initialize(img.RestartButton_SP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,166);


(lib.RestartButton_SP_Push = function() {
	this.initialize(img.RestartButton_SP_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,159);


(lib.ResultScene = function() {
	this.initialize(img.ResultScene);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,844,596);


(lib.ResultSheet = function() {
	this.initialize(img.ResultSheet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,843,596);


(lib.RightButton = function() {
	this.initialize(img.RightButton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,151);


(lib.RightButtonPush = function() {
	this.initialize(img.RightButtonPush);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,151);


(lib.shape = function() {
	this.initialize(img.shape);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,100);


(lib.StartButton_SP = function() {
	this.initialize(img.StartButton_SP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,166);


(lib.StartButton_SP_Push = function() {
	this.initialize(img.StartButton_SP_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,159);


(lib.TopScene = function() {
	this.initialize(img.TopScene);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,843,596);


(lib.TwitterButton_SP = function() {
	this.initialize(img.TwitterButton_SP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,166);


(lib.TwitterButton_SP_Push = function() {
	this.initialize(img.TwitterButton_SP_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,159);// helper functions:

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


(lib.TwitterButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.TwitterButton_SP();

	this.instance_1 = new lib.TwitterButton_SP_Push();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,166);


(lib.ResultSheet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACdE1QAygZAMgWQgfgcgogDIgWADQgpAKgvAfQguAfgfgDQgcgDgfgTQgvgZgQgZIgGgJIgfAGIgmAsQgsAZgcgcIgSgZQgZggAfAAQAPgDAvAQIATAAQBIgvBUgfQgPgGgNgKQgvglgoheQAAgIAPAAQATADAmALQAMgGAJgIQAWgWAHgjQAGgoAAhOQAAg2gDgfIgHgMQgMgWgWgKQgMgJAVAAQAmgGAWAAQAfADAVAfQAMAKAAAZIAAAPQAEAfgHAgIAWgDQANgHgKgMQA8AAAcATQAZAMgDAcQgNATgcAMQglAQggAAQgPAAgTgGQgMAsgVAcIAbgHQAlgGAsADQAsAHAfAkQAAANgJAMQgTAQgZAcQgNAMgMAKQAMAJAAATQgDAMgcADQg7AKiVBBQAGAHAJAGQAyATAjAAQBTgsA4gNQAggDAoAAQAsAAAyAZQAyAZAcAjQAGAJgGAJQgcAZg4ANQgWADgWAAQgpgJgJgKgAhGAlIgQANQAKAcASATQApgQAMgMQAfgZAWgZQgsAAhKASg");
	this.shape.setTransform(679.167,-442.025);

	this.evaluation = new cjs.Text("a", "80px 'HGSGyoshotai'", "#FFFFFF");
	this.evaluation.name = "evaluation";
	this.evaluation.textAlign = "center";
	this.evaluation.lineHeight = 82;
	this.evaluation.parent = this;
	this.evaluation.setTransform(517,-359.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjdELQgogZgDgpQADgiAPgsQAQgyAAglQAAgNgTgTIgWAAQgyAmgGAAQgcAGAAgxQAAgWATgGQB9h3AcgyIAMgWQgZgSgWgKQAsgTAfAAIApAQQApAQAAAWQAAAiidCNQgMAJgDAJQAsAYAJAcQAJAZAAA5QAmgsgDgTIgDgJQgEgKAdgMQAfgrAsglIgNgWIAZAMQAugSAJgWQg6gTgZAAIATgNQBpgrApgNQAigMAvADQAvAJADAWQAAATgDADQgZATgyAPQhSAWgZANQgSAJgjAfQAWATANAZIBLgMQAPgmgPgZQgWAAADgJIAZgHQBUgGgJA/IgGAPIAygGQBqgGAMBEQAAASglBVQgsBRhIAAQgZAAgSgcIgWgjIhOAEQgjAAgeAGQgJAJgWADQgggMgZgpQgVglgTgWIgDATQgZB9gmAuQgKALgIAAIgEgBgACvBoQAQAKAGAWQApgWAWhVQAAgPgQgKIgZADIgmANIghBOIgBAAQgDAKAEgKQAMABAPAFgAg3BMQATAQASAiQAYgGAZgJQghgNgMgvgAAyAqQAGAcgGAiIAWgGIAchCQgcAEgWAGgAg6gHQgjAbgMATIApAfIASgZIAggZIgNgrQgQADgPANg");
	this.shape_1.setTransform(213.275,-332.346);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB4FSIgGgiQgWiTgDg7QADgZAAgjQhFAAhQAcQgfgcApgPQBDgcBLgMIAAgpIAAgfIgWAGQglANgZAPQgPAKgJgGQgGgHgKgZIgGgfQANAAAVgJQAugsA8gyQADgGAAgKQgjgMglgfQgTgKADgGQBbgNBLgMQAfgDAWAiQAGAKgGAGQgiAZgcAJIgHBVIA/gEQAogDAQAmQgDAGgiAZQgQATg/AyQBSgDBRAWQAiACAAAZQAAAZgfAAQhFgHg1gJIgsAAIAABnQAAAZgPBIQgNA/gMAuQgDAFgCAAQgEAAgEgLgACqhpIAAAZQAKgJAJgQQAAgDgFAAQgEAAgKADgAAtiOIAHAWIAugQIAEhBQgvAlgKAWgAjeDxIgTgSQhRhSAAgZQAAgMAPADQAmAJAPAQQAZgZBbgcQAJgNAHAAQArAAAWAgQgWAfgWAcQAAAMAEAQQhBA5gyAAIgKgBgAjeCdQAJAMADAKQAmgcAJgZQgpAMgSATgAjiAjQgPgJAJgKQAfgRAgAAQAJAAATgEIAPAAQAKAAAMASQgGATgTAGQgZAGgfAAQgZAAgQgJgAi8gnIgDgDQgfgZgQgJQAAgHAMgGQAsgZATglIgJgEQheATgmAKQgZAAgMgKQgNgPgPggQASgcAHAGIASATQB9gGB3gmQATAAAQAWQADAHgHAMQhEA1gvAfQgKAEAWAAQAcAAANAJQAJAJAAANQgWAcgZAJQgSAHgZAGQAAgDAGgQgAjCkLQAZgQAGgJQgQgJgZgTQgPgNAAgGQAJgDATgDQAPgDATAAIAvAJQAcANAKAcQAJAWgQAMQgPAJgNAAQgTAEgfAAQglAAAAgQg");
	this.shape_2.setTransform(134.075,-329.773);

	this.ScoreText = new cjs.Text("0", "80px 'HGSGyoshotai'", "#FFFFFF");
	this.ScoreText.name = "ScoreText";
	this.ScoreText.textAlign = "center";
	this.ScoreText.lineHeight = 82;
	this.ScoreText.lineWidth = 417;
	this.ScoreText.parent = this;
	this.ScoreText.setTransform(517.5,-482.35);

	this.ClearCountText = new cjs.Text("0", "80px 'HGSGyoshotai'", "#FFFFFF");
	this.ClearCountText.name = "ClearCountText";
	this.ClearCountText.textAlign = "center";
	this.ClearCountText.lineHeight = 82;
	this.ClearCountText.parent = this;
	this.ClearCountText.setTransform(517.25,-591.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbDdQgMgHAJgGIAlANQA+ACAAhBIAAg+QgDgggGgTQg1AsglAcQglAggWgHIgWhBIAMgsQAQg0ATgJQAWgNAfAAIAeAAQAZAAAQAGQAcgWAZgfQAWgZAog5IAAgPQg1ATgvATIgWAAQgZAAgSgKQgYgJgKgTQBjgSBngNQBVgHAAA5QAAANhbBXQgiAfgZAgQATAgADBVQADAcAAAyQAAA4gGATQgHAQgSAVQgKAKgMAAQgyAAg+hdgAhAgHQgKALAAAtIADAiQA/gmAugwQgTgNgMAAQgVgDgTAAQgWAAgJAMgAjAEwQgdgPgSgoQgHgKAKgJIAMgZIAAgsIAAgoIgcASIgsAZQgPAKgZADQgQAAgJgTQgNgZAKgQQAPgTAWgTQAWgSBbh8QgjAMgWAKQgZAJgcAEQglAFAAg+IADgZQAGgNAZgFQAGACAEAAQgHAKAQAJQA1gTA/gZIAAgcIgEgTIgMgSIATAGQAGgsgGgfQgDgWgTAWQgNgGAKgJQAAgKAMAAQAKgDASAAQAgAAAMAPQANAQAAAsQAAATgNAoQAfAWgDAMQgMAdggAQQgJA4gGA3QAigSA4hLQANgGgGANQgQAxgiAoQgjAsgSATIgEA7IAHA4QADAdAAAcQAAAlgKAJQgKAKgHAAIgEgBgAkCBWQAWgGAPgQIAAgjgAFSCXIhRgSQgWgHgHgSIAEgDQAcgKAJgGQgfgcgjgZQgJgMAQAAIAGAAQA1AAAvAcQAvAcAGAfQADApgaAAIgIgBg");
	this.shape_3.setTransform(677.8319,-550.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiNDRQAsgWAphIQAchLAAg6QgZgfgNgTQATgNAcAAQAbAHAjAZQA1gdA1g7IAPgZIhUAAQhQADgsAGIhkATQgpgGhkg1QAsAAAWADQA4gDAygGQBFgKAiAAQBdgDA8AAQAPgDAQgGQA4AJAyAyQATAWgpAMQgyAsgyAfQhFAmgfAAQgMB2gsAyQgoAyhdASIgGABQgMAAAIgNg");
	this.shape_4.setTransform(279.19,-439.1936);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUCtQg9gDg4AQQgjAAgfgZQgcgWgNgMQB6gTCVgDQATgsAGhBIAKhwIhSgDQhWADgsAJQgWAAg+goQgQgKgGgJIDXgGQAogEAyAHQANgHAMgJQBeAsAJAZQgDAPgJAQQgcCFgTB0QgNAWgWAAQglgNhCAAg");
	this.shape_5.setTransform(198.275,-441.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AB9CKQhLhOgfgTQhKA/hSAsQhNAlgmgGQgWgDgJgNQAfgGApgTQDTiOBOiWQhaASg3AKQgQgHgagSQghgZgUgKQgDgDgMgDQBdAAA2gDQBHgDAfgKQASgSAXAGQA1ATAVAcQAHAJgHAGQgWAWgVAcQg5BSguAuQAWAGAiAPQCWA/AmBLQgBATgGAMQgJANgdAAQgcAAhXhVg");
	this.shape_6.setTransform(117.8,-441.1735);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACEE0QgQgcgGgpQgGgrAAhCIADhRIgDg+QgZADgWAAQgfAAgZgGQglgJAAgKIAlgSQBIgTAlgGIADh3IADgjQAAgJgDgJQgcgNAAgGQAAgiAZgTQANgNAVANQA2AfAAApIgKA+IgGBkQAWAAAPgDQANgDATAAQAoAAAgAiQAMANgQAJQgSAKggAAQgZAAgigHIgWAHIAABAQADA8gDAfQAAAWgJBnQgKAogSAmQgKgDgJgTgAjND8QglgcgphIQAAgKAQgMIAGADIAmAfQBRhBA7ADQBCADgNAZIgPAWQgvBBgQANQgZATgWAAIgPADQgJAGgJAAQgJAAgIgGgAi9DAQAJAKAKAMQAigiANgfQgpAPgZAcgAi3BcQAWgSgPgHQgNgGgJgJQAcgKAWgJQAvgMAMASQAGAQgGAGIgTANIg+ASQgDADgDAAQgDAAgEgDgAikAAQgWgKgTgSIAEgEQAGgDATAHIA+gQIAZADQADAGAAAHQAAAPgMAKQgNAFgZAAgAiLhSQANgJgHgGQhaAZg5AGQgSgGgZgjQgHgPAEgGQASAGAcAGIA2gJQCDgjAMAAQAmANAAAWIgTAPQgfAZgcANQgTAGgTAJgAiejhQgJgQgWgMQAQgQAZgDQAJAAAQgDQAJAAAfASQAcAQAAAcQAAATgJAGQgQAGgcAAQgZAAgZgrg");
	this.shape_7.setTransform(211.8129,-551.9125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLEgQgZgTAAgTQAJgZAKgDQAUgJATgfQhNAPgWAmQAAAigMAJQhIgGg/h9QAAgDAKAAQA7AiAmAdIArgjQAvgoBzgZQAPgHAHADQAcAQAWATQASATgPAGIhVBkIATATQADAGAAAPQAAANgSADQg2gDgngcgAD0BOQhLglg1hBQhIhXgWgQQgYgTgcAEIi7CnQgmAjg+AfQggAQgGgQIgJgTQgKgTAHgPQAMAJANAGQA7gfA7g9QA1g/AvgsQgJgJAAgGQBOgpAchBQgZgpATgGQAZAAAIgDQAKgEAJAHQAmAZAPASQAGAHgJAPQgTAcgcAZQAfAKAQATQAiAZAyBBQAZAcAZANQAWAJAmAWQBkA3AGATQADAQgDAMQAAAKgWAJQgfAAhIgmgAhNA8QgogWgKgKIADgDQAvgWBUgOQA7gKAAArQAAAcgfAQQggAMgRAAQgZAAgmgSg");
	this.shape_8.setTransform(133.418,-553.0362);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhFFQQgWgTg5hHQgPgTAAgIQAEgLAPAPQApAIAiAAQAiAAAAgTIAAiHQAAgegEgXQgiAAhlAeQALAeAMAPIALAMQAWgMAPgPQAEAPgEAMQAAAhghAmIg8BAQgmADgihLQAeg0Aeg8IgpALQgpALgpAEQgmAAgPgLQgWgLgMgbQgDgHAegPQAegLApgWQATgEAHAEIgPASIAAAEQCpgdBlgPQAEgegEgMIglAMQgXAHgPAAQgWAAgbgeQg4gxgei7QAAgPAPALQAaAaAmAtQALAPATATIBpglIAAgXQgLAAgPAPQAHgeAIgLIgeAAQgPAAgXAHQAegpBhgPQBOgHAiAAQAXAAASALQATAHAxAqQAWASAAATQgWBpgtA8QgpA1gXAAQglgPgxgMIAAAmQBPAEB4ALIAwgIQBaAXAqAsQADALgDALQgIATgeAAQiHgiglgLQgxgPhLAAIgxAEIAABhQAAAqAEAaQAEAiAAA0QAAAtgIATQgHAigXADQgkAAgmghgAhnh9IAPgDQAtgiAEgeQgpAEgegIQgPgHgLgEQAHAxAaAhgABFiIQAagTAagwIAehaIgPgXIglgEQgpAAgmAEQAaAPAEAaQAtAMAAAeIgLAPQgaADgMATQgDAegPAaIAMgBQANAAAQAFgACfDYQgPgPALgPQAPgPAEgIIgXgTQgpghgTgMQgLgHgHgTQBwAIAmAPQAhAPAtA8QAEASAAAeQgEAXhHAAQgpAAgegag");
	this.shape_9.setTransform(476.3942,-645.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ak9FjQglgWgXgTQgLgLAAgXQAEgeAPglQALgXAIATQAPAxApAAIBlhAQBlhAAigpQAegWgHAWQgXA4hABAQhLBHhdBLQgIACgGAAQgHAAgGgCgAEXFcQhXgigwgPIgmAPQhHgag3hWQgbgxA7AAQA5gtBhgtQhHATgXgMQgPgLgDgWQgEgTALgLQAXgLASgDQAbgMAWgHQgEgXAAgSQhlgMgpgtIBtgSQAWgEATgIIAEglIADg8IAAgPQAAgLgDgEQgTgPgXgPQgWgLAAgIQAtgaAlAAQAbAAAaAiQAaAeAAAaQgEAWgDAiIgEAaQAagDAPgIQBHgHAeAtQAAAHgHAPQgaAPhAAXQgaAHgTALIgEAqIATADQAlAIATATQALAOgSAPQg5AhgeAMQgwAWgmALQhAAMg4A4QAIATALADQBLg/C0gbQAiAAAeAMQAWAHAIAPQAHAPgEAIQgWALgaAtQgbAtgLAPQAPAPAXATQALALgIAPQgHATgXAAgABfDcQAWATATAaQBegWAihEQgPgCgOAAQhKAAhCAvgAj9CKQAegiATgWQhLAeAAhEQAEgWAHgIIAigdIAHgPQgaAAgiAPQgSAIgIAAIgPgXQgWglAPgPIApgiQA4g1BEhdIAAgIIgXgTQgLgDAPgPQATgPApAAQAHAAAbALQAaALATAeQAHAIgHAHIgMAPQhSBHhAA8IAIAEQASAAAigWQAagTAPAHQAiATATAPQAAAPgpAmQg5A3gHAEQAAAHALgEIAmgRQA8gPAAAkQAAAIgmAlQgxAthOAeQgSAHgKAAQgHAAgDgDg");
	this.shape_10.setTransform(379.2696,-649.875);

	this.instance = new lib.ResultSheet();
	this.instance.setTransform(0,-779);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.506)").s().p("EhB2BKqIAA8KMCDtAAAIAAcKgEhB2gufIAA8KMCDtAAAIAAcKg");
	this.shape_11.setTransform(421.5,-481.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.ClearCountText},{t:this.ScoreText},{t:this.shape_2},{t:this.shape_1},{t:this.evaluation},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ResultSheet_1, new cjs.Rectangle(0,-959.2,843,955.6), null);


(lib.RestartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.RestartButton_SP();

	this.instance_1 = new lib.RestartButton_SP_Push();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,166);


(lib.RightButton_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.RightButton();

	this.instance_1 = new lib.RightButtonPush();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197,154);


(lib.LeftButton_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.LeftButton();

	this.instance_1 = new lib.LeftButtonPush();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195,155);


(lib.LineButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.LineButton_SP();

	this.instance_1 = new lib.LineButton_SP_Push();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,166);


(lib.HelpSheet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.helpsheet_SP();
	this.instance.setTransform(0,-779,1,1.0017);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.506)").s().p("EhB2BKtIAA8IMCDtAAAIAAcIgEhB2guiIAA8KMCDtAAAIAAcKg");
	this.shape.setTransform(421.5,-480.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HelpSheet, new cjs.Rectangle(0,-958.3,843,956.1999999999999), null);


(lib.HelpButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.HelpButton_SP();

	this.instance_1 = new lib.HelpButton_SP_Push();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,167);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.StartButton_SP();

	this.instance_1 = new lib.StartButton_SP_Push();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167,166);


(lib.BrackScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhGlAxLMAAAhiVMCNMAAAMAAABiVg");
	this.shape.setTransform(449.4,309.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BrackScreen, new cjs.Rectangle(-2.4,-4.8,903.6999999999999,629.4), null);


(lib.PageTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Component
	this.helpsheet = new lib.HelpSheet();
	this.helpsheet.name = "helpsheet";
	this.helpsheet.setTransform(321.1,-221.45,0.7601,0.7434,0,0,0,421.1,-299.9);

	this.instance = new lib.TopScene();
	this.instance.setTransform(-1,247,0.7604,0.8087);

	this.helpbutton = new lib.HelpButton();
	this.helpbutton.name = "helpbutton";
	this.helpbutton.setTransform(488.6,770.5,0.9375,0.8981,0,0,0,109.7,22.2);
	new cjs.ButtonHelper(this.helpbutton, 0, 1, 2);

	this.botan = new lib.button();
	this.botan.name = "botan";
	this.botan.setTransform(203.65,770.6,0.8981,0.9037,0,0,0,109.8,22.2);
	new cjs.ButtonHelper(this.botan, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#796A55").s().p("EgyEATiMAAAgnDMBkJAAAMAAAAnDg");
	this.shape.setTransform(319.5,853.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AE74A7").s().p("EAgTAK4QkVgFjIhYQjUheAAiEQAAiFDUhdQDVheEtAAQEtAADVBeQDVBdAACFQAACEjVBeQjHBYkWAFgEgo5AG2QjVheAAiEQAAiFDVhcQDVheEtAAQEtAADUBeQDVBcAACFQAACEjVBeQjUBdktAAQktAAjVhdgAq9iWQjUhdAAiFQAAiEDUheQDVhdEtAAQEsAADVBdQDVBeAACEQAACFjVBdQjVBeksAAQktAAjVheg");
	this.shape_1.setTransform(323.125,178.5625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA9829").s().p("EAiCATiQEVgGDHhXQDVheAAiEQAAiFjVhdQjUhekuAAQksAAjWBeQjUBdAACFQAACEDUBeQDIBXEVAGMhS7AAAMAAAgnDMBkJAAAMAAAAnDgEgoVAIbQjVBeAACEQAACFDVBeQDVBdEtAAQEtAADVhdQDVhegBiFQABiEjVheQjVhdktAAQktAAjVBdgAqYgwQjVBcAACFQAACEDVBeQDUBeEuAAQErAADVheQDVheAAiEQAAiFjVhcQjVhdkrAAQkuAAjUBdg");
	this.shape_2.setTransform(319.5,123.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.botan},{t:this.helpbutton},{t:this.instance},{t:this.helpsheet}]}).wait(1));

	// BackGround
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape_3.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PageTop, new cjs.Rectangle(-1,-710.9,642.8,1689.4), null);


(lib.PageResult = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Component
	this.resultSheet = new lib.ResultSheet_1();
	this.resultSheet.name = "resultSheet";
	this.resultSheet.setTransform(320.3,-240.9,0.7647,0.8128,0,0,0,420.8,-298.6);

	this.instance = new lib.ResultScene();
	this.instance.setTransform(-1,216,0.7629,0.8142);

	this.twitterButton = new lib.TwitterButton();
	this.twitterButton.name = "twitterButton";
	this.twitterButton.setTransform(448.3,739.15,0.9375,0.9036,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.twitterButton, 0, 1, 2);

	this.lineButton = new lib.LineButton();
	this.lineButton.name = "lineButton";
	this.lineButton.setTransform(243.6,739.3,0.9374,0.9035,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.lineButton, 0, 1, 2);

	this.restartButton = new lib.RestartButton();
	this.restartButton.name = "restartButton";
	this.restartButton.setTransform(41.25,739.05,0.8927,0.9035);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#796A55").s().p("EgyEAVJMAAAgqRMBkJAAAMAAAAqRg");
	this.shape.setTransform(321.5,835);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#124D75").s().p("EgyJAUAIAAjbMBkJAAAIAADbgEgx/AOFMAAAgiEMBkJAAAMAAAAiEg");
	this.shape_1.setTransform(320,128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.restartButton},{t:this.lineButton},{t:this.twitterButton},{t:this.instance},{t:this.resultSheet}]}).wait(1));

	// BackGround
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99FF66").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape_2.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PageResult, new cjs.Rectangle(-1.5,-777.8,644.7,1748.1), null);


(lib.PageGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Component
	this.startCountDownText = new cjs.Text("3", "96px 'HGPGyoshotai'", "#FF0000");
	this.startCountDownText.name = "startCountDownText";
	this.startCountDownText.textAlign = "center";
	this.startCountDownText.lineHeight = 98;
	this.startCountDownText.lineWidth = 100;
	this.startCountDownText.parent = this;
	this.startCountDownText.setTransform(323.15,337.2,1.6,1.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiBBUQgqgoAAhNQACgWAAgQIAEgoIAWAoQAMAoAEAZQASA6AcAVQAYgOASgnQAKgYASgVQgWAvgCAxQAAALgCAUQAAAOgGAMIgQAEQgkgLgiglgABwgLIgSgQQAYAAAEgMQgMg8g4ggQAIgCAWAGQBOASAKBYIgCAQQgCARgMAFQgOgDgegZg");
	this.shape.setTransform(572.875,758);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhDUIgYgEQgpgUgSggQgUgiACgOQAEgMAMgIQAWgOAagGQALgEAKAAQAChGASgQQAQgSAqAAQAQAAAEgCQAIgCAAgKQAOAGAUAQQAQAOgEAOQgCAJgQAEQgMAAgKgCQgSgEgQgRQgMgQgSAGQgKACgEAfQgCAPAAAkQAIAAAKACQAcAGAWAMQAaASgIAMIg8AKIAAgCIASgOQgGgGgmAAQAAAOACAQQACAQAAASQAAAYgCAOQAAANgMAAIgGgBgAgEBkQgYACgKAKQAiAiAVAGQAAgYgCgegAipAgIACgGIAkgoQAWgYAagkQgUgIgcgUIASgEQAIAAAOAGQAMAEANgEQAWgcAIgYQAQgcgEgOQgCgGgIgEQAGgIAKAAQAMACAPAOQAEAOgGASQAIASAYAMQAMAGAAAKQAAAOg7AcIgaAIQhXBugcASQgUgGAAgWgAgKh0QAIgCALgKIgGgWQgJAWgEAMg");
	this.shape_1.setTransform(520.965,755.465);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACVCEQgSgKg0gmQgugggjgeQgegZgSgGQgKgGgMAIQglAVgSAMQgUAIgSAAQgUAAgEgMQgGgOAGgLQAGgKASgCQgCAOAMAAIAmgSQASgKAVgCQAogGAvAkQA0AjBcAyQAcAOAKAOQACAGAAAKQgCAGgMAEQgSAAgMgGgAA5hbQAAgEAMAAIAOAAQAWAAAKAEQAKACAKAQQAGAKgEAGIgQAGIgDAAQghAAgcgogACThpQgMgEgMgIQgMgIAAgGQASgGAOAAQAQAAAKAEQAIACAEAEQAKAMgCAIQgGAGgMAAQgMAAgMgEg");
	this.shape_2.setTransform(471.525,755.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtDAQgOgiAAgwQAAgyAIgMQAEgOACgYIgCgLQgUAFgMAIQgEACgKgIIAAgCIgGgLIAIgSQBAgUBLgUQAYAEAKAKQAMAMgIAEQgKAxgMAuIgEAMQAIAAAYgMQAkgSAKASQACAIgiAyIAQAKQAeASAIAGQAGAEACAOQACAMgIAEQgGACgGAAQgugYgWgUIgaAaQgOAKgWAWQgVAWgIAAQgYAAgMgggAAKBWQgLAGgYAIQgCAEAAAIQAAAgAUAcQApgQAWgWQgKgGgSgIQgWgKAUgUQAKgIAQgIQgmACgEAKgABABoQAMAGAIAAIAGgGQAGgGgEgEQgaAGgCAEgAgTA4IAAAGQAKgMACgMQgGgGgCAAgAAAA8QAUgGAGgEIgEgQQgCgEgEAAQgOAYgCAGgAgHgPQgEAMAfACQAIAHgCAMIAGACIAGg1QgcAGgRAMgACwACQgkgTgQgYQguhCgQgSQgSgUgcgIQgfAagmAkQgoAkhYA/QgWAMgMAAQgKAAgGgIIgIgRQgGgMAMgKQAIAGAOAEQCYhwAshEQgGgMAAgEQAKgIAjgCQAMAAAOAGQAMAGAAAMQgEAGgMAMIAsAgQAMAIAYAeQASAgAcAUQAwAeAMAMQAKAKAAARQgCAMgOAAQgQAAgigUgAgbhRQgKgGAAgIQAQgKAUgKQA7gEgCAoQAAAKgaAAIgIAAQgaAAgXgMg");
	this.shape_3.setTransform(418.475,756.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7CdQgIgKgOgOIgEgUQAGgOAKgEQASgMAWACQAQAAAMACQAPACASAKIAOAIQAygiACgYQAAgQgQgQQgQgQgMgBQgWADgaAKQhdAigYASQgaAWgCgqQACgOASgIQAwgjA0g6QAvg4AEgOIgCgEIgQAGQgjASgQACQgQAAgYgaIgKgKQgGgGAKgCQAOAIAWAEQAWgEAzgQQAMgEAMAEQAQAIAMAOQAGAch9B5QAagJAVgEQAOgCAYAAQAYAAASAIQASAHAaAcQAKAMAAAQQACAqhMAuQg8AaghACIgEAAQgVAAgHgQgAgjBzQgKACAIAIQAGAIAMAEQASgGAJgIQgJgKgWgCQgIAAgEAEg");
	this.shape_4.setTransform(202.6776,756.735);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACVCEQgSgKg0gmQgugggjgeQgegZgSgGQgKgGgMAIQglAVgSAMQgUAIgSAAQgUAAgEgMQgGgOAGgLQAGgKASgCQgCAOAMAAIAmgSQASgKAVgCQAogGAvAkQA0AjBcAyQAcAOAKAOQACAGAAAKQgCAGgMAEQgSAAgMgGgAA5hbQAAgEAMAAIAOAAQAWAAAKAEQAKACAKAQQAGAKgEAGIgQAGIgDAAQghAAgcgogACThpQgMgEgMgIQgMgIAAgGQASgGAOAAQAQAAAKAEQAIACAEAEQAKAMgCAIQgGAGgMAAQgMAAgMgEg");
	this.shape_5.setTransform(152.925,755.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDAQgOgiAAgwQAAgyAIgMQAEgOACgYIgCgLQgUAFgMAIQgEACgKgIIAAgCIgGgLIAIgSQBAgUBLgUQAYAEAKAKQAMAMgIAEQgKAxgMAuIgEAMQAIAAAYgMQAkgSAKASQACAIgiAyIAQAKQAeASAIAGQAGAEACAOQACAMgIAEQgGACgGAAQgugYgWgUIgaAaQgOAKgWAWQgVAWgIAAQgYAAgMgggAAKBWQgLAGgYAIQgCAEAAAIQAAAgAUAcQApgQAWgWQgKgGgSgIQgWgKAUgUQAKgIAQgIQgmACgEAKgABABoQAMAGAIAAIAGgGQAGgGgEgEQgaAGgCAEgAgTA4IAAAGQAKgMACgMQgGgGgCAAgAAAA8QAUgGAGgEIgEgQQgCgEgEAAQgOAYgCAGgAgHgPQgEAMAfACQAIAHgCAMIAGACIAGg1QgcAGgRAMgACwACQgkgTgQgYQguhCgQgSQgSgUgcgIQgfAagmAkQgoAkhYA/QgWAMgMAAQgKAAgGgIIgIgRQgGgMAMgKQAIAGAOAEQCYhwAshEQgGgMAAgEQAKgIAjgCQAMAAAOAGQAMAGAAAMQgEAGgMAMIAsAgQAMAIAYAeQASAgAcAUQAwAeAMAMQAKAKAAARQgCAMgOAAQgQAAgigUgAgbhRQgKgGAAgIQAQgKAUgKQA7gEgCAoQAAAKgaAAIgIAAQgaAAgXgMg");
	this.shape_6.setTransform(99.925,756.825);

	this.rightbutton = new lib.RightButton_1();
	this.rightbutton.name = "rightbutton";
	this.rightbutton.setTransform(390.05,794.05,1.0756,1.1216,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.rightbutton, 0, 1, 2);

	this.leftbutton = new lib.LeftButton_1();
	this.leftbutton.name = "leftbutton";
	this.leftbutton.setTransform(42.85,794.05,1.0868,1.1141);
	new cjs.ButtonHelper(this.leftbutton, 0, 1, 2);

	this.instance = new lib.BrackScreen();
	this.instance.setTransform(319.45,851.45,0.7093,0.4194,0,0,0,449.5,309.8);

	this.ScoreText = new cjs.Text("0", "84px 'HGSGyoshotai'");
	this.ScoreText.name = "ScoreText";
	this.ScoreText.textAlign = "center";
	this.ScoreText.lineHeight = 86;
	this.ScoreText.parent = this;
	this.ScoreText.setTransform(123.7579,132.45,0.7751,0.7751);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhDBkQAVgKATgjQAOgkAAgbIgSgYQAJgGANAAQANADAQAMQAagOAZgcIAIgMIgpAAQgmABgVADIgwAJQgTgDgwgZQAVAAAKABQAbgBAYgDQAhgFARAAIBIgBIAPgFQAbAFAYAYQAJAKgTAGQgYAVgYAPQghASgPAAQgGA4gVAYQgTAYgtAJIgCABQgGAAAEgHg");
	this.shape_7.setTransform(163.8671,112.3125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAKBTQgdgBgbAHQgRAAgPgMIgTgQQA6gJBHgCQAJgVADgeIAFg2IgngCQgpACgVAEQgLAAgegTQgHgFgDgEIBngDQATgCAYADIAMgHQAtAVAEAMQgBAHgFAIQgNA/gJA4QgGAKgLAAQgSgGgfAAg");
	this.shape_8.setTransform(125.025,111.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA8BCQgkglgPgJQgjAegnAVQgmASgSgDQgKgCgFgGQAPgDAUgJQBlhEAmhIIhGAOQgHgDgMgJQgRgMgJgFQgCgBgGgCQAtAAAagBQAigCAOgEQAJgJALADQAZAJALANQADAFgDADQgLAKgKAOQgbAngWAVQAKADARAIQBHAeATAkQAAAJgEAGQgEAGgOAAQgNAAgqgpg");
	this.shape_9.setTransform(86.4,111.3625);

	this.instance_1 = new lib.owan();
	this.instance_1.setTransform(15,22,0.8519,0.8519);

	this.SuccessCount = new cjs.Text("0", "84px 'HGSGyoshotai'");
	this.SuccessCount.name = "SuccessCount";
	this.SuccessCount.textAlign = "center";
	this.SuccessCount.lineHeight = 86;
	this.SuccessCount.parent = this;
	this.SuccessCount.setTransform(192.3579,24.15,0.7751,0.7751);

	this.CountDown = new cjs.Text("0", "84px 'HGSGyoshotai'", "#FFFFFF");
	this.CountDown.name = "CountDown";
	this.CountDown.textAlign = "center";
	this.CountDown.lineHeight = 86;
	this.CountDown.lineWidth = 42;
	this.CountDown.parent = this;
	this.CountDown.setTransform(324.871,555.9,0.6487,0.6487);

	this.instance_2 = new lib.shape();
	this.instance_2.setTransform(270,527,1.0931,1.0931);

	this.instance_3 = new lib.GameBackScreen_SP();
	this.instance_3.setTransform(-2,0,1.0048,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00A99D").ss(1,1,1).p("ABFgrQgDAwgQAkQgVAxgcAAQgdAAgUgxQgUgvAAhEQAAgIAAgH");
	this.shape_10.setTransform(262,312.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A99D").s().p("AitGcQgVgxAAhEIAAgPQgtgagogoQhzhzAAijQAAikBzhzQB0h0CjAAQCkAABzB0QB0BzAACkQAACjh0BzQhzB0ikAAQgcAAgbgEQgEAxgPAlQgVAwgdAAQgdAAgUgwg");
	this.shape_11.setTransform(274.55,275.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.instance_3},{t:this.instance_2},{t:this.CountDown},{t:this.SuccessCount},{t:this.instance_1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.ScoreText},{t:this.instance},{t:this.leftbutton},{t:this.rightbutton},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.startCountDownText}]}).wait(1));

	// BackGround
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FFCC").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape_12.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PageGame, new cjs.Rectangle(-2,0,645.1,983.5), null);


// stage content:
(lib.pgame_canvas_sp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.PageGame();
	this.instance.setTransform(-369.6,245.2,1,1,0,0,0,322.5,240.5);

	this.instance_1 = new lib.PageResult();
	this.instance_1.setTransform(977.4,15.4,1,1,0,0,0,320.8,-2.5);

	this.instance_2 = new lib.PageTop();
	this.instance_2.setTransform(320.9,28.3,1,1,0,0,0,320.9,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.1,-280,1673.9,1268.2);
// library properties:
lib.properties = {
	id: '235237728A5628459F398B3B054DFB64',
	width: 640,
	height: 960,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"jsgame/images_sp/GameBackScreen_SP.png?1589254141089", id:"GameBackScreen_SP"},
		{src:"jsgame/images_sp/HelpButton_SP.png?1589254141089", id:"HelpButton_SP"},
		{src:"jsgame/images_sp/HelpButton_SP_Push.png?1589254141089", id:"HelpButton_SP_Push"},
		{src:"jsgame/images_sp/helpsheet_SP.png?1589254141089", id:"helpsheet_SP"},
		{src:"jsgame/images_sp/LeftButton.png?1589254141089", id:"LeftButton"},
		{src:"jsgame/images_sp/LeftButtonPush.png?1589254141089", id:"LeftButtonPush"},
		{src:"jsgame/images_sp/LineButton_SP.png?1589254141089", id:"LineButton_SP"},
		{src:"jsgame/images_sp/LineButton_SP_Push.png?1589254141089", id:"LineButton_SP_Push"},
		{src:"jsgame/images_sp/owan.png?1589254141089", id:"owan"},
		{src:"jsgame/images_sp/RestartButton_SP.png?1589254141089", id:"RestartButton_SP"},
		{src:"jsgame/images_sp/RestartButton_SP_Push.png?1589254141089", id:"RestartButton_SP_Push"},
		{src:"jsgame/images_sp/ResultScene.png?1589254141089", id:"ResultScene"},
		{src:"jsgame/images_sp/ResultSheet.png?1589254141089", id:"ResultSheet"},
		{src:"jsgame/images_sp/RightButton.png?1589254141089", id:"RightButton"},
		{src:"jsgame/images_sp/RightButtonPush.png?1589254141089", id:"RightButtonPush"},
		{src:"jsgame/images_sp/shape.png?1589254141089", id:"shape"},
		{src:"jsgame/images_sp/StartButton_SP.png?1589254141089", id:"StartButton_SP"},
		{src:"jsgame/images_sp/StartButton_SP_Push.png?1589254141089", id:"StartButton_SP_Push"},
		{src:"jsgame/images_sp/TopScene.png?1589254141089", id:"TopScene"},
		{src:"jsgame/images_sp/TwitterButton_SP.png?1589254141089", id:"TwitterButton_SP"},
		{src:"jsgame/images_sp/TwitterButton_SP_Push.png?1589254141089", id:"TwitterButton_SP_Push"}
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