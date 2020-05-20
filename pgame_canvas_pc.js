(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.GameBackScreen2 = function() {
	this.initialize(img.GameBackScreen2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,842,597);


(lib.HelpButton_PC = function() {
	this.initialize(img.HelpButton_PC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);


(lib.HelpButton_PC_Push = function() {
	this.initialize(img.HelpButton_PC_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,42);


(lib.helpsheet_SP = function() {
	this.initialize(img.helpsheet_SP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,843,596);


(lib.LineButton_PC = function() {
	this.initialize(img.LineButton_PC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);


(lib.LineButton_PC_Push = function() {
	this.initialize(img.LineButton_PC_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);


(lib.poster = function() {
	this.initialize(img.poster);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,479,378);


(lib.RestartButton_PC = function() {
	this.initialize(img.RestartButton_PC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);


(lib.RestartButton_PC_Push = function() {
	this.initialize(img.RestartButton_PC_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);


(lib.ResultScene = function() {
	this.initialize(img.ResultScene);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,844,596);


(lib.ResultSheet = function() {
	this.initialize(img.ResultSheet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,843,596);


(lib.shape = function() {
	this.initialize(img.shape);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,100);


(lib.StartButton_PC = function() {
	this.initialize(img.StartButton_PC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,46);


(lib.StartButton_PC_Push = function() {
	this.initialize(img.StartButton_PC_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,42);


(lib.TopScene = function() {
	this.initialize(img.TopScene);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,843,596);


(lib.TwitterButton_PC = function() {
	this.initialize(img.TwitterButton_PC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);


(lib.TwitterButton_PC_Push = function() {
	this.initialize(img.TwitterButton_PC_Push);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,43);// helper functions:

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
	this.instance = new lib.TwitterButton_PC();
	this.instance.parent = this;

	this.instance_1 = new lib.TwitterButton_PC_Push();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,46);


(lib.ResultSheet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACdE1QAygZAMgWQgfgcgogDIgWADQgpAKgvAfQguAfgfgDQgcgDgfgTQgvgZgQgZIgGgJIgfAGIgmAsQgsAZgcgcIgSgZQgZggAfAAQAPgDAvAQIATAAQBIgvBUgfQgPgGgNgKQgvglgoheQAAgIAPAAQATADAmALQAMgGAJgIQAWgWAHgjQAGgoAAhOQAAg2gDgfIgHgMQgMgWgWgKQgMgJAVAAQAmgGAWAAQAfADAVAfQAMAKAAAZIAAAPQAEAfgHAgIAWgDQANgHgKgMQA8AAAcATQAZAMgDAcQgNATgcAMQglAQggAAQgPAAgTgGQgMAsgVAcIAbgHQAlgGAsADQAsAHAfAkQAAANgJAMQgTAQgZAcQgNAMgMAKQAMAJAAATQgDAMgcADQg7AKiVBBQAGAHAJAGQAyATAjAAQBTgsA4gNQAggDAoAAQAsAAAyAZQAyAZAcAjQAGAJgGAJQgcAZg4ANQgWADgWAAQgpgJgJgKgAhGAlIgQANQAKAcASATQApgQAMgMQAfgZAWgZQgsAAhKASg");
	this.shape.setTransform(679.167,-259.975);

	this.evaluation = new cjs.Text("0", "80px 'HGSGyoshotai'", "#FFFFFF");
	this.evaluation.name = "evaluation";
	this.evaluation.textAlign = "center";
	this.evaluation.lineHeight = 82;
	this.evaluation.parent = this;
	this.evaluation.setTransform(514.5415,-177.3,0.9716,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjdELQgogZgDgpQADgiAPgsQAQgyAAglQAAgNgTgTIgWAAQgyAmgGAAQgcAGAAgxQAAgWATgGQB9h3AcgyIAMgWQgZgSgWgKQAsgTAfAAIApAQQApAQAAAWQAAAiidCNQgMAJgDAJQAsAYAJAcQAJAZAAA5QAmgsgDgTIgDgJQgEgKAdgMQAfgrAsglIgNgWIAZAMQAugSAJgWQg6gTgZAAIATgNQBpgrApgNQAigMAvADQAvAJADAWQAAATgDADQgZATgyAPQhSAWgZANQgSAJgjAfQAWATANAZIBLgMQAPgmgPgZQgWAAADgJIAZgHQBUgGgJA/IgGAPIAygGQBqgGAMBEQAAASglBVQgsBRhIAAQgZAAgSgcIgWgjIhOAEQgjAAgeAGQgJAJgWADQgggMgZgpQgVglgTgWIgDATQgZB9gmAuQgKALgIAAIgEgBgACvBoQAQAKAGAWQApgWAWhVQAAgPgQgKIgZADIgmANIghBOIgBAAQgDAKAEgKQAMABAPAFgAg3BMQATAQASAiQAYgGAZgJQghgNgMgvgAAyAqQAGAcgGAiIAWgGIAchCQgcAEgWAGgAg6gHQgjAbgMATIApAfIASgZIAggZIgNgrQgQADgPANg");
	this.shape_1.setTransform(213.275,-150.296);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB4FSIgGgiQgWiTgDg7QADgZAAgjQhFAAhQAcQgfgcApgPQBDgcBLgMIAAgpIAAgfIgWAGQglANgZAPQgPAKgJgGQgGgHgKgZIgGgfQANAAAVgJQAugsA8gyQADgGAAgKQgjgMglgfQgTgKADgGQBbgNBLgMQAfgDAWAiQAGAKgGAGQgiAZgcAJIgHBVIA/gEQAogDAQAmQgDAGgiAZQgQATg/AyQBSgDBRAWQAiACAAAZQAAAZgfAAQhFgHg1gJIgsAAIAABnQAAAZgPBIQgNA/gMAuQgDAFgCAAQgEAAgEgLgACqhpIAAAZQAKgJAJgQQAAgDgFAAQgEAAgKADgAAtiOIAHAWIAugQIAEhBQgvAlgKAWgAjeDxIgTgSQhRhSAAgZQAAgMAPADQAmAJAPAQQAZgZBbgcQAJgNAHAAQArAAAWAgQgWAfgWAcQAAAMAEAQQhBA5gyAAIgKgBgAjeCdQAJAMADAKQAmgcAJgZQgpAMgSATgAjiAjQgPgJAJgKQAfgRAgAAQAJAAATgEIAPAAQAKAAAMASQgGATgTAGQgZAGgfAAQgZAAgQgJgAi8gnIgDgDQgfgZgQgJQAAgHAMgGQAsgZATglIgJgEQheATgmAKQgZAAgMgKQgNgPgPggQASgcAHAGIASATQB9gGB3gmQATAAAQAWQADAHgHAMQhEA1gvAfQgKAEAWAAQAcAAANAJQAJAJAAANQgWAcgZAJQgSAHgZAGQAAgDAGgQgAjCkLQAZgQAGgJQgQgJgZgTQgPgNAAgGQAJgDATgDQAPgDATAAIAvAJQAcANAKAcQAJAWgQAMQgPAJgNAAQgTAEgfAAQglAAAAgQg");
	this.shape_2.setTransform(134.075,-147.723);

	this.ScoreText = new cjs.Text("0", "80px 'HGSGyoshotai'", "#FFFFFF");
	this.ScoreText.name = "ScoreText";
	this.ScoreText.textAlign = "center";
	this.ScoreText.lineHeight = 82;
	this.ScoreText.lineWidth = 417;
	this.ScoreText.parent = this;
	this.ScoreText.setTransform(517.5,-300.3);

	this.ClearCountText = new cjs.Text("0", "82px 'HGSGyoshotai'", "#FFFFFF");
	this.ClearCountText.name = "ClearCountText";
	this.ClearCountText.textAlign = "center";
	this.ClearCountText.lineHeight = 84;
	this.ClearCountText.parent = this;
	this.ClearCountText.setTransform(517.25,-409.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbDcQgMgGAJgGIAlAMQA+AEAAhCIAAg+QgDgggGgTQg1AsglAcQglAggWgHIgWhCIAMgrQAQg1ATgIQAWgNAfAAIAeAAQAZAAAQAGQAcgWAZgfQAWgZAog5IAAgPQg1ATgvASIgWAAQgZABgSgKQgYgJgKgTQBjgTBngMQBVgGAAA4QAAANhbBXQgiAfgZAfQATAiADBUQADAcAAAyQAAA5gGASQgHAQgSAWQgKAJgMAAQgyAAg+hegAhAgHQgKAMAAArIADAjQA/gmAugxQgTgMgMAAQgVgEgTABQgWAAgJAMgAjAExQgdgQgSgoQgHgKAKgKIAMgYIAAgsIAAgpIgcATIgsAZQgPAJgZAEQgQgBgJgSQgNgZAKgQQAPgTAWgSQAWgTBbh8QgjAMgWAKQgZAJgcAEQglAGAAg/IADgZQAGgNAZgFQAGADAEAAQgHAJAQAJQA1gSA/gaIAAgcIgEgSIgMgTIATAGQAGgrgGggQgDgWgTAWQgNgGAKgKQAAgJAMAAQAKgDASAAQAgAAAMAQQANAPAAAsQAAASgNApQAfAWgDANQgMAcggAQQgJA3gGA4QAigSA4hLQANgGgGAMQgQAygiAoQgjAsgSASIgEA8IAHA4QADAcAAAdQAAAlgKAKQgKAJgHAAIgEAAgAkCBWQAWgGAPgQIAAgjgAFSCYIhRgTQgWgGgHgTIAEgDQAcgJAJgHQgfgcgjgZQgJgMAQAAIAGAAQA1AAAvAcQAvAbAGAgQADApgaAAIgIAAg");
	this.shape_3.setTransform(677.8319,-368.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiNDRQAsgWAphIQAchLAAg6QgZgfgNgTQATgNAcAAQAbAHAjAZQA1gdA1g7IAPgZIhUAAQhQADgsAGIhkATQgpgGhkg1QAsAAAWADQA4gDAygGQBFgKAiAAQBdgDA8AAQAPgDAQgGQA4AJAyAyQATAWgpAMQgyAsgyAfQhFAmgfAAQgMB2gsAyQgoAyhdASIgGABQgMAAAIgNg");
	this.shape_4.setTransform(279.19,-257.1436);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUCtQg9gDg4AQQgjAAgfgZQgcgWgNgMQB6gTCVgDQATgsAGhBIAKhwIhSgDQhWADgsAJQgWAAg+goQgQgKgGgJIDXgGQAogEAyAHQANgHAMgJQBeAsAJAZQgDAPgJAQQgcCFgTB0QgNAWgWAAQglgNhCAAg");
	this.shape_5.setTransform(198.275,-259.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AB9CKQhLhOgfgTQhKA/hSAsQhNAlgmgGQgWgDgJgNQAfgGApgTQDTiOBOiWQhaASg3AKQgQgHgagSQghgZgUgKQgDgDgMgDQBdAAA2gDQBHgDAfgKQASgSAXAGQA1ATAVAcQAHAJgHAGQgWAWgVAcQg5BSguAuQAWAGAiAPQCWA/AmBLQgBATgGAMQgJANgdAAQgcAAhXhVg");
	this.shape_6.setTransform(117.8,-259.1235);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACEE0QgQgcgGgpQgGgrAAhCIADhRIgDg+QgZADgWAAQgfAAgZgGQglgJAAgKIAlgSQBIgTAlgGIADh3IADgjQAAgJgDgJQgcgNAAgGQAAgiAZgTQANgNAVANQA2AfAAApIgKA+IgGBkQAWAAAPgDQANgDATAAQAoAAAgAiQAMANgQAJQgSAKggAAQgZAAgigHIgWAHIAABAQADA8gDAfQAAAWgJBnQgKAogSAmQgKgDgJgTgAjND8QglgcgphIQAAgKAQgMIAGADIAmAfQBRhBA7ADQBCADgNAZIgPAWQgvBBgQANQgZATgWAAIgPADQgJAGgJAAQgJAAgIgGgAi9DAQAJAKAKAMQAigiANgfQgpAPgZAcgAi3BcQAWgSgPgHQgNgGgJgJQAcgKAWgJQAvgMAMASQAGAQgGAGIgTANIg+ASQgDADgDAAQgDAAgEgDgAikAAQgWgKgTgSIAEgEQAGgDATAHIA+gQIAZADQADAGAAAHQAAAPgMAKQgNAFgZAAgAiLhSQANgJgHgGQhaAZg5AGQgSgGgZgjQgHgPAEgGQASAGAcAGIA2gJQCDgjAMAAQAmANAAAWIgTAPQgfAZgcANQgTAGgTAJgAiejhQgJgQgWgMQAQgQAZgDQAJAAAQgDQAJAAAfASQAcAQAAAcQAAATgJAGQgQAGgcAAQgZAAgZgrg");
	this.shape_7.setTransform(211.8129,-369.8625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLEgQgZgTAAgTQAJgZAKgDQAUgJATgfQhNAPgWAmQAAAigMAJQhIgGg/h9QAAgDAKAAQA7AiAmAdIArgjQAvgoBzgZQAPgHAHADQAcAQAWATQASATgPAGIhVBkIATATQADAGAAAPQAAANgSADQg2gDgngcgAD0BOQhLglg1hBQhIhXgWgQQgYgTgcAEIi7CnQgmAjg+AfQggAQgGgQIgJgTQgKgTAHgPQAMAJANAGQA7gfA7g9QA1g/AvgsQgJgJAAgGQBOgpAchBQgZgpATgGQAZAAAIgDQAKgEAJAHQAmAZAPASQAGAHgJAPQgTAcgcAZQAfAKAQATQAiAZAyBBQAZAcAZANQAWAJAmAWQBkA3AGATQADAQgDAMQAAAKgWAJQgfAAhIgmgAhNA8QgogWgKgKIADgDQAvgWBUgOQA7gKAAArQAAAcgfAQQggAMgRAAQgZAAgmgSg");
	this.shape_8.setTransform(133.418,-370.9862);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhFFQQgWgTg5hHQgPgTAAgIQAEgLAPAPQApAIAiAAQAiAAAAgTIAAiHQAAgegEgXQgiAAhlAeQALAeAMAPIALAMQAWgMAPgPQAEAPgEAMQAAAhghAmIg8BAQgmADgihLQAeg0Aeg8IgpALQgpALgpAEQgmAAgPgLQgWgLgMgbQgDgHAegPQAegLApgWQATgEAHAEIgPASIAAAEQCpgdBlgPQAEgegEgMIglAMQgXAHgPAAQgWAAgbgeQg4gxgei7QAAgPAPALQAaAaAmAtQALAPATATIBpglIAAgXQgLAAgPAPQAHgeAIgLIgeAAQgPAAgXAHQAegpBhgPQBOgHAiAAQAXAAASALQATAHAxAqQAWASAAATQgWBpgtA8QgpA1gXAAQglgPgxgMIAAAmQBPAEB4ALIAwgIQBaAXAqAsQADALgDALQgIATgeAAQiHgiglgLQgxgPhLAAIgxAEIAABhQAAAqAEAaQAEAiAAA0QAAAtgIATQgHAigXADQgkAAgmghgAhnh9IAPgDQAtgiAEgeQgpAEgegIQgPgHgLgEQAHAxAaAhgABFiIQAagTAagwIAehaIgPgXIglgEQgpAAgmAEQAaAPAEAaQAtAMAAAeIgLAPQgaADgMATQgDAegPAaIAMgBQANAAAQAFgACfDYQgPgPALgPQAPgPAEgIIgXgTQgpghgTgMQgLgHgHgTQBwAIAmAPQAhAPAtA8QAEASAAAeQgEAXhHAAQgpAAgegag");
	this.shape_9.setTransform(476.3942,-463.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ak9FjQglgWgXgTQgLgLAAgXQAEgeAPglQALgXAIATQAPAxApAAIBlhAQBlhAAigpQAegWgHAWQgXA4hABAQhLBHhdBLQgIACgGAAQgHAAgGgCgAEXFcQhXgigwgPIgmAPQhHgag3hWQgbgxA7AAQA5gtBhgtQhHATgXgMQgPgLgDgWQgEgTALgLQAXgLASgDQAbgMAWgHQgEgXAAgSQhlgMgpgtIBtgSQAWgEATgIIAEglIADg8IAAgPQAAgLgDgEQgTgPgXgPQgWgLAAgIQAtgaAlAAQAbAAAaAiQAaAeAAAaQgEAWgDAiIgEAaQAagDAPgIQBHgHAeAtQAAAHgHAPQgaAPhAAXQgaAHgTALIgEAqIATADQAlAIATATQALAOgSAPQg5AhgeAMQgwAWgmALQhAAMg4A4QAIATALADQBLg/C0gbQAiAAAeAMQAWAHAIAPQAHAPgEAIQgWALgaAtQgbAtgLAPQAPAPAXATQALALgIAPQgHATgXAAgABfDcQAWATATAaQBegWAihEQgPgCgOAAQhKAAhCAvgAj9CKIAxg4QhLAeAAhEQAEgWAHgIIAigdIAHgPQgaAAgiAPQgSAIgIAAIgPgXQgWglAPgPIApgiQA4g1BEhdIAAgIIgXgTQgLgDAPgPQATgPApAAQAHAAAbALQAaALATAeQAHAIgHAHIgMAPQhSBHhAA8IAIAEQASAAAigWQAagTAPAHQAiATATAPQAAAPgpAmQg5A3gHAEQAAAHALgEIAmgRQA8gPAAAkQAAAIgmAlQgxAthOAeQgSAHgKAAQgHAAgDgDg");
	this.shape_10.setTransform(379.2696,-467.825);

	this.instance = new lib.ResultSheet();
	this.instance.parent = this;
	this.instance.setTransform(0,-597);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.ClearCountText},{t:this.ScoreText},{t:this.shape_2},{t:this.shape_1},{t:this.evaluation},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ResultSheet_1, new cjs.Rectangle(0,-597,843,596), null);


(lib.RestartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.RestartButton_PC();
	this.instance.parent = this;

	this.instance_1 = new lib.RestartButton_PC_Push();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,46);


(lib.PageGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Component
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqAsQAIhBAAgJQgBgNgDgEQgEgFgFAAQgBgDABgEQADgFAJAAQAGAAAIAJQAHAIgBATQAVglAbgEQAKACADADQAFAGgFAFQgEAFgPACQgVAFgNAYQgNAVgCAyQgEAQgHAAQgJgCAAgYg");
	this.shape.setTransform(88.425,31.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPBCQgEgGAAgOQgEAJgLAKQgIAFgMAAQgNAAgJgLQgNgRAAgXQAAglASgWQAXgcAZAAQAMAAAMAIQAIgKAIABQAGADgDAJIgJAaIgKBBQgDAKAFAEQAIACAPgUIAEACQgEAMgLAQQgJAKgKAAQgHAAgEgEgAgUgeQgRAVAAAfQAAAMAFAGQAFAGAJAAQAHAAAJgHQAIgJAFgNIAJg6QgFgHgIAAQgNAAgOASg");
	this.shape_1.setTransform(74.725,31.6207);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoA4QgPgTAAgbQAAgiATgYQATgWAcAAQAPAAAJAJQAKAJAAARQAAASgMAKQgRAPgwgBQgBASAGALQAFAJAQAAQAMAAAOgHQAOgHASgQQAFgGgCAIQgIAZgQAPQgQAOgVAAQgXAAgLgPgAgMgqQgNALgGAWQAigCAMgHQAKgGAAgHQAAgJgFgEQgFgGgKAAQgIAAgJAIg");
	this.shape_2.setTransform(60.9173,31.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBpQgJgJAAgGIgBgTQAAgQAUh9IgBgDIgIACQgBAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAKgTAKgOIAFgEQABgBAFABQAHAHAAAKIgDAaQgPBUgDAyQAAAKADAEQADACACAAQAMAAASglQABAAAAAAQABABAAAAQAAABAAAAQgBABAAABQgGAYgIARQgJASgPAAQgHAAgHgFg");
	this.shape_3.setTransform(50.0771,28.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBTQgTgaAAgmQAAgzAbgnQAWghAhAAQAKABALADQAKADAJAJQADAHAAALQAAANgBACQgBACgEABQgCAAgFgHQgRgUgQAAQgSgBgPAYQgUAeAAAqQAAAdAIAQQAKARAQABQAKgBAPgIQAUgNASgmQACAEgBAJQgFAggPAUQgOAVgbgBQgcABgQgWg");
	this.shape_4.setTransform(37.725,28.2);

	this.ScoreText = new cjs.Text("0", "84px 'HGSGyoshotai'", "#FFFFFF");
	this.ScoreText.name = "ScoreText";
	this.ScoreText.textAlign = "center";
	this.ScoreText.lineHeight = 86;
	this.ScoreText.parent = this;
	this.ScoreText.setTransform(361.7619,3.05,0.6104,0.6104);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoA4QgPgTAAgbQAAgiATgYQATgWAcAAQAPAAAJAJQAKAJAAARQAAASgMAKQgRAPgwgBQgBASAGALQAFAJAQAAQAMAAAOgHQAOgHASgQQAFgGgCAIQgIAZgQAPQgQAOgVAAQgXAAgLgPgAgMgqQgNALgGAWQAigCAMgHQAKgGAAgHQAAgJgFgEQgFgGgKAAQgIAAgJAIg");
	this.shape_5.setTransform(275.6173,31.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqAsQAIhBAAgJQgBgNgDgEQgEgFgFAAQgBgDABgEQADgFAJAAQAGAAAIAJQAHAIgBATQAVglAbgEQAKACADADQAFAGgFAFQgEAFgPACQgVAFgNAYQgNAVgCAyQgEAQgHAAQgJgCAAgYg");
	this.shape_6.setTransform(263.075,31.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiA6QgQgNAAgfQAAgfASgaQATgaAZAAQAPAAALAKQANAQAAAaQAAAlgSAYQgTAagSAAQgRAAgNgMgAgNgiQgOASAAAbQAAAgAUAAQAOAAAMgSQANgUAAgTQAAgKgFgJQgIgOgMAAQgJAAgLANg");
	this.shape_7.setTransform(250.325,31.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoA1QgNgSAAgaQAAgfATgXQATgYAaAAQAUAAAGAHQAHAHAAAYQAAAJgEAAQgDAAgFgIQgLgRgNAAQgNAAgJAMQgOAQAAAcQAAAiAbAAQAMAAANgHQAMgHAPgSQAFgFgDAIQgEASgPARQgRAVgYAAQgUAAgNgRg");
	this.shape_8.setTransform(237.5696,31.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6BjQgLgKAGgQQADgGgBgRQAHAQAQAGQALAEAPAAQALAAAOgGQANgHACgUQAAgGgFgNQgGgPgPgTIgTgbQgGgJAAgOQAAgRAPgPQANgPAVAAQAngBACAoIAAAIQgCAHgEgEQgRgRgFgCQgJgEgJAAQgLAAgGAGQgEAFAAAGQAAAIAVAeQAQAXAFAJQALARAAAWQAAAdgRARQgQAQgeAAQggAAgQgJg");
	this.shape_9.setTransform(222.6441,28.3473);

	this.SuccessCount = new cjs.Text("0", "84px 'HGSGyoshotai'", "#FFFFFF");
	this.SuccessCount.name = "SuccessCount";
	this.SuccessCount.textAlign = "center";
	this.SuccessCount.lineHeight = 86;
	this.SuccessCount.parent = this;
	this.SuccessCount.setTransform(144.1619,3.2,0.6104,0.6104);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.702)").s().p("AszINIAAwZIZnAAIAAQZg");
	this.shape_10.setTransform(223.7112,27.7615,2.7398,0.5287);

	this.startCountDownText = new cjs.Text("3", "96px 'HGPGyoshotai'", "#FF0000");
	this.startCountDownText.name = "startCountDownText";
	this.startCountDownText.textAlign = "center";
	this.startCountDownText.lineHeight = 98;
	this.startCountDownText.lineWidth = 100;
	this.startCountDownText.parent = this;
	this.startCountDownText.setTransform(313.2,159.2,1.6,1.6);
	this.startCountDownText.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.instance = new lib.poster();
	this.instance.parent = this;
	this.instance.setTransform(174,139,0.2194,0.2194);

	this.CountDown = new cjs.Text("0", "84px 'HGSGyoshotai'", "#FFFFFF");
	this.CountDown.name = "CountDown";
	this.CountDown.textAlign = "center";
	this.CountDown.lineHeight = 86;
	this.CountDown.lineWidth = 42;
	this.CountDown.parent = this;
	this.CountDown.setTransform(311.871,366.9,0.6487,0.6487);

	this.instance_1 = new lib.shape();
	this.instance_1.parent = this;
	this.instance_1.setTransform(257,338,1.0931,1.0931);

	this.instance_2 = new lib.GameBackScreen2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,-1,0.7648,0.8074);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00A99D").ss(1,1,1).p("ABFgqQgDAvgQAlQgUAwgdAAQgcAAgVgwQgUgvAAhFQAAgIAAgH");
	this.shape_11.setTransform(260.9875,312.9875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A99D").s().p("AitGcQgVgwAAhFIAAgPQgtgagngoQh0hzAAijQAAikB0hzQBzh0CjAAQCkAABzB0QB0BzAACkQAACjh0BzQhzB0ikAAQgcAAgbgEQgEAxgPAlQgVAwgdAAQgdAAgUgwg");
	this.shape_12.setTransform(273.55,276);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.instance_2},{t:this.instance_1},{t:this.CountDown},{t:this.instance},{t:this.startCountDownText},{t:this.shape_10},{t:this.SuccessCount},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.ScoreText},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// BackGround
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FFCC").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape_13.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

}).prototype = getMCSymbolPrototype(lib.PageGame, new cjs.Rectangle(-7,-7,660,498), null);


(lib.LineButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.LineButton_PC();
	this.instance.parent = this;

	this.instance_1 = new lib.LineButton_PC_Push();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,46);


(lib.HelpSheet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.helpsheet_SP();
	this.instance.parent = this;
	this.instance.setTransform(0,-597);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.HelpSheet, new cjs.Rectangle(0,-597,843,596), null);


(lib.HelpButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.HelpButton_PC();
	this.instance.parent = this;

	this.instance_1 = new lib.HelpButton_PC_Push();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,45);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.StartButton_PC();
	this.instance.parent = this;

	this.instance_1 = new lib.StartButton_PC_Push();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220,46);


(lib.PageTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Component
	this.helpsheet = new lib.HelpSheet();
	this.helpsheet.name = "helpsheet";
	this.helpsheet.parent = this;
	this.helpsheet.setTransform(320.3,-222.45,0.7601,0.7434,0,0,0,421.1,-299.9);

	this.helpbutton = new lib.HelpButton();
	this.helpbutton.name = "helpbutton";
	this.helpbutton.parent = this;
	this.helpbutton.setTransform(413.1,462.45,0.8219,0.8224,0,0,0,109.7,22.1);
	new cjs.ButtonHelper(this.helpbutton, 0, 1, 2);

	this.botan = new lib.button();
	this.botan.name = "botan";
	this.botan.parent = this;
	this.botan.setTransform(139,442,0.8219,0.8219);
	new cjs.ButtonHelper(this.botan, 0, 1, 2);

	this.instance = new lib.TopScene();
	this.instance.parent = this;
	this.instance.setTransform(-1,-1,0.7616,0.8104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.botan},{t:this.helpbutton},{t:this.helpsheet}]}).wait(1));

	// BackGround
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.PageTop, new cjs.Rectangle(-1,-443.3,642,925.3), null);


(lib.PageResult = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Component
	this.twitterButton = new lib.TwitterButton();
	this.twitterButton.name = "twitterButton";
	this.twitterButton.parent = this;
	this.twitterButton.setTransform(402.6,441.4,0.6249,0.6471);
	new cjs.ButtonHelper(this.twitterButton, 0, 1, 2);

	this.lineButton = new lib.LineButton();
	this.lineButton.name = "lineButton";
	this.lineButton.parent = this;
	this.lineButton.setTransform(258.65,440.85,0.5636,0.6569);
	new cjs.ButtonHelper(this.lineButton, 0, 1, 2);

	this.restartButton = new lib.RestartButton();
	this.restartButton.name = "restartButton";
	this.restartButton.parent = this;
	this.restartButton.setTransform(92.65,440.9,0.6564,0.6564);
	new cjs.ButtonHelper(this.restartButton, 0, 1, 2);

	this.resultSheet = new lib.ResultSheet_1();
	this.resultSheet.name = "resultSheet";
	this.resultSheet.parent = this;
	this.resultSheet.setTransform(320.3,-213.5,0.7647,0.7079,0,0,0,420.8,-298.7);

	this.instance = new lib.ResultScene();
	this.instance.parent = this;
	this.instance.setTransform(-1,-3,0.7629,0.8142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.resultSheet},{t:this.restartButton},{t:this.lineButton},{t:this.twitterButton}]}).wait(1));

	// BackGround
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FF66").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape.setTransform(320,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.PageResult, new cjs.Rectangle(-1.5,-424.7,644.7,907), null);


(lib.MovieClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.PageResult = new lib.PageResult();
	this.PageResult.name = "PageResult";
	this.PageResult.parent = this;
	this.PageResult.setTransform(1600,480,1,1,0,0,0,320,480);

	this.PageGame = new lib.PageGame();
	this.PageGame.name = "PageGame";
	this.PageGame.parent = this;
	this.PageGame.setTransform(960,480,1,1,0,0,0,320,480);

	this.PageTop = new lib.PageTop();
	this.PageTop.name = "PageTop";
	this.PageTop.parent = this;
	this.PageTop.setTransform(320,480,1,1,0,0,0,320,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PageTop},{t:this.PageGame},{t:this.PageResult}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MovieClip, new cjs.Rectangle(-1,-443.3,1924.2,925.6), null);


// stage content:
(lib.pgame_canvas_pc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.PageTop();
	this.instance.parent = this;
	this.instance.setTransform(1206.3,-108,1,1,0,0,0,320,480);

	this.instance_1 = new lib.PageResult();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1856.45,-94,1,1,0,0,0,320,480);

	this.instance_2 = new lib.PageGame();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2386.55,-122,1,1,0,0,0,320,480);

	this.instance_3 = new lib.MovieClip();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,480,1,1,0,0,0,960,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319,-791.3,2390.6,1273.6);
// library properties:
lib.properties = {
	id: '22A39DC83079432BB23403B040ECA6C4',
	width: 640,
	height: 480,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"jsgame/images_pc/GameBackScreen2.png?1589962894350", id:"GameBackScreen2"},
		{src:"jsgame/images_pc/HelpButton_PC.png?1589962894350", id:"HelpButton_PC"},
		{src:"jsgame/images_pc/HelpButton_PC_Push.png?1589962894350", id:"HelpButton_PC_Push"},
		{src:"jsgame/images_pc/helpsheet_SP.png?1589962894350", id:"helpsheet_SP"},
		{src:"jsgame/images_pc/LineButton_PC.png?1589962894350", id:"LineButton_PC"},
		{src:"jsgame/images_pc/LineButton_PC_Push.png?1589962894350", id:"LineButton_PC_Push"},
		{src:"jsgame/images_pc/poster.png?1589962894350", id:"poster"},
		{src:"jsgame/images_pc/RestartButton_PC.png?1589962894350", id:"RestartButton_PC"},
		{src:"jsgame/images_pc/RestartButton_PC_Push.png?1589962894350", id:"RestartButton_PC_Push"},
		{src:"jsgame/images_pc/ResultScene.png?1589962894350", id:"ResultScene"},
		{src:"jsgame/images_pc/ResultSheet.png?1589962894350", id:"ResultSheet"},
		{src:"jsgame/images_pc/shape.png?1589962894350", id:"shape"},
		{src:"jsgame/images_pc/StartButton_PC.png?1589962894350", id:"StartButton_PC"},
		{src:"jsgame/images_pc/StartButton_PC_Push.png?1589962894350", id:"StartButton_PC_Push"},
		{src:"jsgame/images_pc/TopScene.png?1589962894350", id:"TopScene"},
		{src:"jsgame/images_pc/TwitterButton_PC.png?1589962894350", id:"TwitterButton_PC"},
		{src:"jsgame/images_pc/TwitterButton_PC_Push.png?1589962894350", id:"TwitterButton_PC_Push"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['22A39DC83079432BB23403B040ECA6C4'] = {
	getStage: function() { return exportRoot.getStage(); },
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