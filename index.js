(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[3485,2327,160,160],[3485,2085,240,240],[810,3510,208,75],[810,3587,275,52],[1020,3510,195,52],[3485,2489,160,160],[3485,2651,160,160],[3485,2813,160,160],[3485,0,960,1280],[3485,1282,447,397],[3485,1681,353,402],[3485,2975,160,160],[0,0,3483,3508],[98,3672,94,94],[3485,3137,160,160],[3485,3299,160,160],[3485,3461,160,160],[0,3510,160,160],[1087,3564,96,96],[162,3510,160,160],[810,3641,96,96],[324,3510,160,160],[486,3510,160,160],[648,3510,160,160],[0,3672,96,96]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.бизнес = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2728 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.color11pngcopy = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.color2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.color3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Dima = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Koron = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.paal = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.premium = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Price1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.s_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.s_19 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.s_20 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.s_24 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.s_25 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.s_31 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.s_37 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.s_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.s_5 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.s_9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.standart = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.zv = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC7200").s().p("AhQBjIAAjEIAhAAIAABMIArAAQAoAAAXAQQAWAPAAAdQAAAYgTASQgTASgoAAgAgvBHIAjAAQAfAAANgIQAPgHAAgRQAAgNgLgKQgKgKghAAIgoAAg");
	this.shape.setTransform(749.6,33.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC7200").s().p("AgPBjIAAipIhAAAIAAgbICfAAIAAAbIhAAAIAACpg");
	this.shape_1.setTransform(730.35,33.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC7200").s().p("Ag8BMQgZgaAAgxQAAgfALgYQAKgYAWgMQAVgMAZAAQAgAAAUAQQAVAQAGAeIghAGQgFgVgLgJQgMgLgRAAQgYAAgQASQgQATAAAmQAAAoAQARQAPATAXgBQAUABANgMQANgMAEgZIAhADQgGAigWAUQgWATggAAQgoAAgYgbg");
	this.shape_2.setTransform(712.725,33.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC7200").s().p("AhCBMQgZgaAAgyQAAg2AegaQAagWAjAAQApAAAaAaQAZAbAAAvQAAAlgLAWQgLAWgWAMQgWAMgaAAQgoAAgagbgAgog3QgRASAAAlQAAAmARATQAQASAYAAQAZABARgUQAQgSAAgmQAAgkgQgTQgRgUgZAAQgYAAgQAUg");
	this.shape_3.setTransform(691.975,33.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC7200").s().p("ABHBjIAAieIg6CeIgdAAIg3imIAACmIghAAIAAjEIA0AAIA0CcIA4icIAxAAIAADEg");
	this.shape_4.setTransform(668.425,33.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC7200").s().p("AAvBjIAAiVIhbCVIgkAAIAAjEIAiAAIAACVIBbiVIAkAAIAADEg");
	this.shape_5.setTransform(644.7,33.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC7200").s().p("AhCBMQgZgaAAgyQAAg2AegaQAagWAjAAQApAAAaAaQAZAbAAAvQAAAlgLAWQgLAWgWAMQgWAMgaAAQgoAAgagbgAgog3QgRASAAAlQAAAmARATQAQASAYAAQAZABARgUQAQgSAAgmQAAgkgQgTQgRgUgZAAQgYAAgQAUg");
	this.shape_6.setTransform(623.425,33.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC7200").s().p("AgPBjIAAipIhAAAIAAgbICfAAIAAAbIhAAAIAACpg");
	this.shape_7.setTransform(604.7,33.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC7200").s().p("Ag8BMQgZgaAAgxQAAgfALgYQAKgYAWgMQAVgMAZAAQAgAAAUAQQAVAQAGAeIghAGQgFgVgLgJQgMgLgRAAQgYAAgQASQgQATAAAmQAAAoAQARQAPATAXgBQAUABANgMQANgMAEgZIAhADQgGAigWAUQgWATggAAQgoAAgYgbg");
	this.shape_8.setTransform(587.075,33.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC7200").s().p("AgkAvIAUhdIA1AAIgbBdg");
	this.shape_9.setTransform(571.05,43);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC7200").s().p("AA2BjIAAhOIgUAAQgRAAgIAGQgJAEgPAZIgeArIgpAAIAkg1QAQgZARgDQgdgEgNgPQgPgSAAgVQAAgZASgQQATgRAiABIBaAAIAADEgAgfg8QgJAJAAAMQAAARANAJQANAIAfAAIAlAAIAAhBIgwAAQgdAAgIAKg");
	this.shape_10.setTransform(555.4,33.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC7200").s().p("AAvBjIAAiVIhbCVIgkAAIAAjEIAiAAIAACVIBbiVIAkAAIAADEg");
	this.shape_11.setTransform(535.45,33.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC7200").s().p("AAuBjIAAhYIhbAAIAABYIgiAAIAAjEIAiAAIAABSIBbAAIAAhSIAiAAIAADEg");
	this.shape_12.setTransform(514.375,33.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC7200").s().p("AhIBXQgSgQAAgZQAAgOAHgMQAHgMAKgHQALgHANgDQAKgCAUgDQAngFAUgGIAAgJQAAgVgKgIQgMgMgZAAQgXAAgLAJQgMAIgFAVIghgFQAFgUAKgNQAKgNATgHQAUgHAYAAQAZAAAQAGQAQAGAHAJQAIAJADANQABAJAAAXIAAArQAAAvADAMQACAMAGAMIgjAAQgFgLgCgOQgSAQgRAHQgQAGgUAAQghAAgRgQgAgHAMQgVADgIAEQgJAEgEAHQgFAHAAAJQAAANAKAJQAKAJAUAAQASAAAPgJQAPgIAHgPQAGgLAAgWIAAgMQgTAHgjAFg");
	this.shape_13.setTransform(493.175,33.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC7200").s().p("AhQBjIAAjEIBNAAQAcAAANAEQAOAFALAMQAJANAAASQAAAOgGAKQgFALgNAHQAOADAKANQAJANAAASQgCAcgSANQgSAOgjAAgAgvBHIAsAAQAcAAALgHQAKgGABgRQAAgIgHgIQgFgJgLgCQgJgCgVAAIgpAAgAgvgPIAkAAQAUABAJgDQAHgCAHgGQAGgIAAgJQAAgQgLgGQgLgGgZAAIgmAAg");
	this.shape_14.setTransform(473.6,33.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC7200").s().p("AhCBMQgZgaAAgyQAAg2AegaQAagWAjAAQApAAAaAaQAZAbAAAvQAAAlgLAWQgLAWgWAMQgWAMgaAAQgoAAgagbgAgog3QgRASAAAlQAAAmARATQAQASAYAAQAZABARgUQAQgSAAgmQAAgkgQgTQgRgUgZAAQgYAAgQAUg");
	this.shape_15.setTransform(452.325,33.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC7200").s().p("ABNB+IAAg3IiZAAIAAA3IgcAAIAAhTIASAAQAjgvgBh5ICIAAIAACoIAVAAIAABTgAg3ArIBpAAIAAiNIhLAAQgDBggbAtg");
	this.shape_16.setTransform(430.2,35.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC7200").s().p("AhICGIgDgfQALADAIAAQALAAAHgDQAGgFAEgGQAEgFAHgUIADgIIhLjEIAkAAIApByQAIAVAFAXQAGgWAIgVIAqhzIAhAAIhLDHQgMAggFAMQgJARgMAIQgLAIgQAAQgKAAgMgFg");
	this.shape_17.setTransform(411.575,37.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC7200").s().p("AhUCLIAAkQIAeAAIAAAZQALgOANgIQAOgHASAAQAZgBAUANQATANAKAYQAKAYAAAcQAAAegLAXQgLAYgVANQgUANgXABQgQAAgNgIQgNgHgJgKIAABggAgmhcQgQAVAAAlQAAAmAPASQAQASAVAAQAWAAAPgSQAQgUAAgmQAAgmgPgSQgQgUgUABQgWAAgQATg");
	this.shape_18.setTransform(392.3,36.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC7200").s().p("AhCBMQgZgaAAgyQAAg2AegaQAagWAjAAQApAAAaAaQAZAbAAAvQAAAlgLAWQgLAWgWAMQgWAMgaAAQgoAAgagbgAgog3QgRASAAAlQAAAmARATQAQASAYAAQAZABARgUQAQgSAAgmQAAgkgQgTQgRgUgZAAQgYAAgQAUg");
	this.shape_19.setTransform(370.575,33.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC7200").s().p("Ag0B9QgTgPgKgaQgLgYAAg+QAAhOAbgbQAagbA2AAQAiAAAFgBQAEgBACgFIAdABQgCATgHAIQgGAIgLADQgLACgfAAQgoAAgPAIQgPAHgHATQgHARAAAcQAMgUARgJQARgJAUAAQAnAAAZAaQAaAbAAAsQAAAjgNAXQgNAWgRALQgSAMgeABQgigBgUgQgAgngKQgPATAAAjQAAAiAQATQARARAXABQAZAAAQgWQAPgUAAgkQAAgegOgSQgPgVgbAAQgaAAgPAWg");
	this.shape_20.setTransform(349.325,29.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC7200").s().p("AhCBMQgZgaAAgyQAAg2AegaQAagWAjAAQApAAAaAaQAZAbAAAvQAAAlgLAWQgLAWgWAMQgWAMgaAAQgoAAgagbgAgog3QgRASAAAlQAAAmARATQAQASAYAAQAZABARgUQAQgSAAgmQAAgkgQgTQgRgUgZAAQgYAAgQAUg");
	this.shape_21.setTransform(327.675,33.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC7200").s().p("AA2BjIAAhOIgUAAQgRAAgJAGQgIAEgQAZIgdArIgpAAIAjg1QASgZAPgDQgcgEgOgPQgOgSABgVQAAgZASgQQASgRAiABIBaAAIAADEgAgfg8QgJAJABAMQAAARAMAJQAMAIAgAAIAlAAIAAhBIgvAAQgdAAgJAKg");
	this.shape_22.setTransform(285,33.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC7200").s().p("AAwBjIAAiVIhcCVIgkAAIAAjEIAhAAIAACVIBciVIAkAAIAADEg");
	this.shape_23.setTransform(265.05,33.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC7200").s().p("AA/B+IAAg3IiYAAIAAjEIAhAAIAACoIBcAAIAAioIAhAAIAACoIAWAAIAABTg");
	this.shape_24.setTransform(244.3,35.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC7200").s().p("AhIBXQgSgQAAgZQAAgOAHgMQAHgMAKgHQALgHANgDQAKgCAUgDQAngFAUgGIAAgJQAAgVgKgIQgMgMgZAAQgXAAgLAJQgMAIgFAVIghgFQAFgUAKgNQAKgNATgHQAUgHAYAAQAZAAAQAGQAQAGAHAJQAIAJADANQABAJAAAXIAAArQAAAvADAMQACAMAGAMIgjAAQgFgLgCgOQgSAQgRAHQgQAGgUAAQghAAgRgQgAgHAMQgVADgIAEQgJAEgEAHQgFAHAAAJQAAANAKAJQAKAJAUAAQASAAAPgJQAPgIAHgPQAGgLAAgWIAAgMQgTAHgjAFg");
	this.shape_25.setTransform(221.975,33.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC7200").s().p("AAjBjIgjg+QgKgSgJgGQgHgFgMAAIAABbIghAAIAAjEIAhAAIAABUQAQAAAHgFQAGgHAMgdQAJgYAGgHQAGgIAJgCQAIgDARABIAHAAIAAAbIgJAAQgNAAgEAEQgFAEgHAUQgIATgGAIQgGAHgMAHQAUAEAUAiIAlA+g");
	this.shape_26.setTransform(203.75,33.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC7200").s().p("AAwBjIAAiVIhcCVIgkAAIAAjEIAhAAIAACVIBciVIAkAAIAADEg");
	this.shape_27.setTransform(183.4,33.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC7200").s().p("AgQCuIAAhdQgKALgMAFQgMAGgOAAQgfAAgXgbQgXgcAAgxQAAgrAVgdQAVgdAjAAQAPAAAMAGQAMAFAJAMIAAheIAhAAIAABeQAKgMANgFQAMgGAOAAQAjAAAVAdQAUAdAAAsQAAAugWAcQgWAdghAAQgKAAgLgEQgMgDgPgPIAABdgAAcg4QgLATAAAlQAAAtAMAPQAMAQATAAQAUAAAOgTQAPgTAAgnQAAglgNgTQgOgSgVAAQgWAAgLATgAheg4QgNATAAAjQAAApAOASQAOASAUAAQAWAAALgSQALgSAAglQAAgmgMgTQgLgUgXAAQgUAAgNATg");
	this.shape_28.setTransform(157.175,33.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC7200").s().p("AAvBjIAAiVIhbCVIgkAAIAAjEIAiAAIAACVIBbiVIAkAAIAADEg");
	this.shape_29.setTransform(130.9,33.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CC7200").s().p("AA/B+IAAg3IiZAAIAAjEIAiAAIAACoIBbAAIAAioIAiAAIAACoIAVAAIAABTg");
	this.shape_30.setTransform(110.15,35.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CC7200").s().p("AhABMQgagaAAgxQAAgwAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAJIiSAAQACAgAQARQARARAXAAQATAAANgJQANgKAHgVIAjAEQgIAegXARQgWARgiAAQgqAAgZgbgAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgTgZgBQgWABgQAPg");
	this.shape_31.setTransform(87.875,33.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC7200").s().p("AAtBjIAAipIhYAAIAACpIgiAAIAAjEICbAAIAADEg");
	this.shape_32.setTransform(67.075,33.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CC7200").s().p("Ag/B7QgcgSgOgiQgOgiAAgmQAAgqAQggQAQggAegQQAegQAjAAQApAAAcAUQAcAVALAlIgkAJQgJgegSgOQgSgNgcAAQgeAAgVAPQgVAPgJAZQgIAaAAAbQAAAiAKAaQAKAZAVANQAWANAYAAQAeAAAVgSQAVgRAHgiIAkAJQgLAsgdAXQgeAYgqAAQgrAAgcgSg");
	this.shape_33.setTransform(43.275,29.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFCC66").ss(4,1,1).p("Eg9AgDjMB6AAAAQBUAAA6A7QA6A7AABSIAAA3QAABTg6A6Qg6A7hUAAMh6AAAAQhTAAg6g7Qg7g6AAhTIAAg3QAAhSA7g7QA6g7BTAAg");
	this.shape_34.setTransform(387.2961,31.8,0.9436,1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#330000").s().p("Eg9AADjQhSABg7g7Qg6g6gBhUIAAg1QABhTA6g7QA7g7BSABMB6AAAAQBTgBA7A7QA7A7gBBTIAAA1QABBUg7A6Qg7A7hTgBg");
	this.shape_35.setTransform(387.2961,31.8,0.9436,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-2,0,778.6,56.6), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB6DcIAAmDIj0AAIAAGDIg+AAIAAm3IFxAAIAAG3g");
	mask.setTransform(32.475,35.325);

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(3,1,1).p("EgrUgSUMBWpAAAQHmAAFXFYQFXFYAAHkQAAHllXFYQlXFYnmAAMhWpAAAQnmAAlXlYQlYlYAAnlQAAnkFYlYQFXlYHmAAg");
	this.shape.setTransform(299.4966,28.1867,0.826,0.6063);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF9315","#FFFFFF","#FE560D"],[0,1,1],-394.5,0,394.6,0).s().p("EgrUASUQnlABlYlYQlXlYAAnlQAAnkFXlYQFYlXHlAAMBWpAAAQHlAAFYFXQFXFYAAHkQAAHllXFYQlYFYnlgBg");
	this.shape_1.setTransform(299.4966,28.1867,0.826,0.6063);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,602.7,72.1), null);


(lib.Symbol2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.standart();
	this.instance.setTransform(0,0,0.369,0.5187);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2_1, new cjs.Rectangle(0,0,59.1,83), null);


(lib.Crystal_pro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Crystal_pro
	this.instance = new lib.premium();
	this.instance.setTransform(225,17.95,0.2986,0.3732);

	this.instance_1 = new lib.Bitmap6();
	this.instance_1.setTransform(32,23.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(4,2,1).p("AzpoCMAnSAAAQCJAABhBhQBhBhAACJIAAFvQAACJhhBhQhhBhiJAAMgnSAAAQiJAAhghhQhhhhAAiJIAAlvQAAiJBhhhQBghhCJAAg");
	this.shape.setTransform(149.3454,53.475,0.9279,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("AzoIDQiKAAhghhQhhhhAAiJIAAlvQAAiJBhhhQBghhCKAAMAnRAAAQCJAABhBhQBhBhAACJIAAFvQAACJhhBhQhhBhiJAAg");
	this.shape_1.setTransform(149.3454,53.475,0.9279,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298.7,107);


(lib.Crystal_medium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Crystal_medium
	this.instance = new lib.бизнес();
	this.instance.setTransform(250.85,28.95,0.2759,0.3281);

	this.instance_1 = new lib.Bitmap5();
	this.instance_1.setTransform(10.85,26.95,0.9116,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(4,2,1).p("AzpoCMAnSAAAQCJAABhBhQBhBhAACJIAAFvQAACJhhBhQhhBhiJAAMgnSAAAQiJAAhghhQhhhhAAiJIAAlvQAAiJBhhhQBghhCJAAg");
	this.shape.setTransform(149.3454,53.475,0.9279,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("AzoIDQiKAAhghhQhhhhAAiJIAAlvQAAiJBhhhQBghhCKAAMAnRAAAQCJAABhBhQBhBhAACJIAAFvQAACJhhBhQhhBhiJAAg");
	this.shape_1.setTransform(149.3454,53.475,0.9279,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298.7,107);


(lib.Svet_Event_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(4,1,1).p("AwSAAMAglAAA");
	this.shape.setTransform(106.4,56.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgkBBIAAhbIghAAIAAgtIAhAAIAAgrIA9gSIAAA9IAtAAIAAAtIgtAAIAABQQAAAfAZAAQAJAAALgFIAAAtQgOAIgcAAQhAAAAAhEg");
	this.shape_1.setTransform(198.6,32.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AAjBnIAAhvQAAgughAAQgPAAgKAMQgLANAAATIAABxIg9AAIAAjIIA9AAIAAAgIABAAQAWgkApAAQBCgBABBTIAAB6g");
	this.shape_2.setTransform(178.9,34.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AhEBOQgbgbAAgwQAAgxAdgdQAdgdApAAQAsAAAYAaQAYAaAAAsIAAAZIiCAAQAEAsAyAAQAhAAAZgQIAAAtQgbAPgtAAQgvAAgbgbgAgVgyQgLAMgCATIBJAAQAAgrgjgBQgOAAgLANg");
	this.shape_3.setTransform(155.975,35.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgkBkIhHjHIBCAAIAjB6QAGAVAAAPIAAAAQACgOAGgUIAjh8IBBAAIhLDHg");
	this.shape_4.setTransform(134.175,35.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AhTCMIAAkXICgAAIAAA0IhhAAIAAA+IBbAAIAAAyIhbAAIAABAIBoAAIAAAzg");
	this.shape_5.setTransform(113.6,31.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgRBoIAAiyIhCAAIAAgdICnAAIAAAdIhDAAIAACyg");
	this.shape_6.setTransform(81.825,34.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AhEBRQgbgdAAgyQAAg0AbgcQAbgdAqAAQAqAAAaAcQAbAcAAAzIgBAJIiZAAQACAiARASQARATAZAAQAUAAANgLQAOgKAIgWIAkAEQgIAggXASQgYARgkAAQgsAAgbgbgAgmg+QgRAQgBAbIBzAAQgDgagLgNQgRgUgaAAQgYAAgQAQg");
	this.shape_7.setTransform(62.825,34.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AhUBoIAAjPIBRAAQAdAAAOAFQAPAFAKAOQALANAAASQAAAPgGALQgHALgMAIQAPAEAKANQAJANAAATQgCAdgTAOQgTAPglAAgAgxBLIAuAAQAdAAALgHQALgHABgRQAAgKgGgIQgHgJgKgCQgLgCgVAAIgrAAgAgxgPIAlAAQAWAAAIgDQAJgCAGgHQAHgHAAgKQAAgRgMgGQgLgHgbAAIgnAAg");
	this.shape_8.setTransform(42.175,34.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AhCCBQgegTgPgjQgOglAAgnQAAgtAQghQASghAfgSQAggRAlAAQArAAAdAVQAdAXALAnIglAJQgKgggSgOQgUgOgcAAQggAAgXAQQgVAQgJAbQgKAaABAdQAAAjAKAbQALAbAWAOQAXANAZAAQAfAAAXgSQAWgTAHgkIAnAKQgMAvgfAZQggAYgsAAQgtAAgdgTg");
	this.shape_9.setTransform(16.75,30.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Svet_Event_text, new cjs.Rectangle(0,0,212.7,58.1), null);


(lib.Foto_video_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("AybAAMAk3AAA");
	this.shape.setTransform(123.25,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_1.setTransform(234.975,33.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_2.setTransform(213.25,33.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_3.setTransform(190.575,36.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_4.setTransform(168.875,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AhSBlIAAjJIBPAAQAcAAAPAFQANAFAKANQALANAAARQAAAPgGALQgGAKgMAIQAOADAJAOQAKANAAARQgCAdgTAOQgTAOgjAAgAgwBJIAuAAQAbAAALgHQALgGAAgRQAAgKgFgIQgHgJgKgBQgKgDgWAAIgpAAgAgwgPIAlAAQAUAAAJgDQAIgBAHgIQAGgGAAgLQAAgQgMgFQgLgHgaAAIgmAAg");
	this.shape_5.setTransform(148.2,34);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_6.setTransform(115.675,34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_7.setTransform(83.175,33.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_8.setTransform(63.925,34);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_9.setTransform(44.925,33.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AgQCyIAAhfQgLALgMAGQgMAFgPAAQggAAgYgbQgXgcAAgzQAAgsAWgeQAVgeAkAAQAQAAAMAGQAMAGAKAMIAAhgIAhAAIAABgQALgMAMgGQAOgGAOAAQAkAAAVAeQAVAeAAAtQAAAvgXAdQgWAdgiAAQgLAAgLgDQgMgEgQgPIAABfgAAdg5QgMATAAAmQAAAuANAQQAMAQATAAQAVAAAPgUQAOgTAAgoQAAgmgNgTQgOgTgVAAQgXAAgLAUgAhhg5QgOATAAAkQAAApAPATQAOATAWAAQAWAAALgTQALgSAAgmQAAgngMgUQgLgUgXAAQgWAAgNAUg");
	this.shape_10.setTransform(18.1,34.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Foto_video_text, new cjs.Rectangle(0,0,248,111.8), null);


(lib.Dmitry_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AAxCLIAAiYIheCYIglAAIAAjIIAiAAIAACYIBeiYIAlAAIAADIgAgjhlQgOgNgDgZIAXAAQADAOAIAGQAIAHAMgBQAQAAAIgFQAHgHADgOIAXAAQgCAZgPANQgPAMgYAAQgXAAgPgMg");
	this.shape.setTransform(149.925,23.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAxBlIAAiYIheCYIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_1.setTransform(128.125,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AhXCOIAAkWIAfAAIAAAaQAMgQAOgHQAOgIASAAQAaAAAUANQAUAOAKAYQAKAYAAAdQAAAfgLAYQgLAZgWANQgVANgXAAQgRAAgNgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQARgUgBgnQAAgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_2.setTransform(106.9,30.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_3.setTransform(86.625,27.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AAxBlIAAiYIheCYIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_4.setTransform(66.775,27.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("ABJBlIAAiiIg8CiIgdAAIg5iqIAACqIghAAIAAjJIA1AAIA1CgIA6igIAyAAIAADJg");
	this.shape_5.setTransform(42.5,27.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("ABcCsIAAhBIi3AAIAABBIghAAIAAhiIAVAAQAigzAAiaIAAgoICpAAIAAD1IAZAAIAABigAghh8QAAAjgHA/QgGA9gTAnICAAAIAAjUIhgAAg");
	this.shape_6.setTransform(15.225,26.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF9900").ss(5,1,1).p("AsrAAIZXAA");
	this.shape_7.setTransform(81.175,47.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dmitry_text, new cjs.Rectangle(-2.5,0,167.4,49.7), null);


(lib.Dmitry_foto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Dima();
	this.instance.setTransform(0,0,1.1065,1.0409);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dmitry_foto, new cjs.Rectangle(0,0,1062.2,1332.4), null);


(lib.Relax = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Relax
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("Ag8BNQgZgbAAgxQAAgfALgYQAKgYAWgMQAVgMAZAAQAgAAAUARQAVAQAGAeIghAFQgFgVgLgKQgMgKgRAAQgYABgQARQgQASAAAnQAAAoAQASQAPARAXABQAUgBANgLQANgMAEgaIAhAFQgGAhgWAUQgWATggAAQgoAAgYgag");
	this.shape.setTransform(166.775,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAjBiIgjg8QgKgTgJgGQgHgFgMgBIAABbIghAAIAAjDIAhAAIAABVQAQAAAHgHQAGgFAMgeQAJgYAGgHQAGgHAJgDQAIgCARAAIAHAAIAAAbIgJAAQgNAAgEAEQgFAEgHAUQgIAUgGAHQgGAIgMAFQAUAFAUAjIAlA8g");
	this.shape_1.setTransform(149.3,46.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AhIBXQgSgQAAgYQAAgPAHgMQAHgMAKgHQALgGANgEQAKgCAUgDQAngFAUgGIAAgJQAAgUgKgJQgMgMgZAAQgXAAgLAJQgMAIgFAVIghgEQAFgWAKgMQAKgNATgHQAUgHAYAAQAZAAAQAGQAQAGAHAJQAIAJADAOQABAIAAAWIAAAsQAAAuADANQACAMAGALIgjAAQgFgKgCgOQgSAQgRAGQgQAHgUAAQghAAgRgQgAgHAMQgVADgIAEQgJADgEAIQgFAHAAAJQAAANAKAJQAKAJAUAAQASAAAPgJQAPgIAHgPQAGgLAAgWIAAgMQgTAHgjAFg");
	this.shape_2.setTransform(128.875,46.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AhfBiIAAgcIAOAAQALAAAFgCQAEgDABgEQACgFAAgZIAAiBICaAAIAADEIghAAIAAipIhYAAIAABiQAAAigCALQgCALgKAIQgKAIgTAAIgbgBg");
	this.shape_3.setTransform(106.35,46.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AhABNQgagcAAgvQAAgxAagcQAZgbAoAAQAoAAAZAbQAZAbAAAwIAAAIIiSAAQACAhAQARQARASAXAAQATAAANgKQANgKAHgVIAjAFQgIAegXAQQgWARgiAAQgqAAgZgagAgkg7QgQAPgBAaIBtAAQgDgZgKgMQgQgUgZAAQgWAAgQAQg");
	this.shape_4.setTransform(86.875,46.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AhnCIIAAkPIBnAAQAaAAAOACQAUAEAOAJQANAKAJAQQAIASAAATQAAAjgWAYQgWAYg6AAIhFAAIAABugAhDgGIBFAAQAjABAPgNQAPgNAAgYQAAgRgJgNQgJgMgOgDQgJgDgYAAIhFAAg");
	this.shape_5.setTransform(66.025,43.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFCC66").ss(3,1,1).p("AyUlbMAkpAAAQCQAABmBmQBmBmAACPQAACRhmBmQhmBmiQAAMgkpAAAQiQAAhmhmQhmhmAAiRQAAiPBmhmQBmhmCQAAg");
	this.shape_6.setTransform(114.2979,44.427,0.7416,1.2325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#330000").s().p("AyUFdQiQgBhmhlQhmhnAAiQQAAiQBmhlQBmhnCQAAMAkpAAAQCQAABmBnQBmBlAACQQAACQhmBnQhmBliQABg");
	this.shape_7.setTransform(114.2979,44.427,0.7416,1.2325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Relax, new cjs.Rectangle(0,0,228.6,88.9), null);


(lib.Price111 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Price111
	this.instance = new lib.Price1();
	this.instance.setTransform(0,0,0.2993,0.3051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Price111, new cjs.Rectangle(0,0,1042.5,1070.3), null);


(lib.nazad1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nazad
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("Ag9BJQgPgNAAgVQAAgMAGgKQAFgKAKgGQAJgGALgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgKAHgEASIgbgEQADgRAJgLQAIgLAQgGQARgGAUAAQAWAAANAFQANAFAGAIQAHAHACAMQABAHAAATIAAAkQABAnACALQABAKAFAKIgdAAQgFgJAAgMQgQAOgPAFQgNAGgQAAQgcAAgPgOgAgGAKQgRADgIADQgGADgFAGQgDAGAAAHQAAALAIAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgPAGgeAEg");
	this.shape.setTransform(747.4,33.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AgNBTIAAiNIg2AAIAAgYICGAAIAAAYIg1AAIAACNg");
	this.shape_1.setTransform(731.65,33.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("Ag2BAQgVgWgBgpQAAgpAXgXQAVgXAhAAQAiAAAUAXQAWAWgBApIAAAHIh6AAQABAbAOAPQAOAOAUAAQAPAAALgIQAMgIAFgSIAeAEQgHAZgSAOQgUAPgcAAQgjAAgWgXgAgegyQgNANgBAWIBbAAQgCgVgJgLQgNgQgWAAQgSAAgNANg");
	this.shape_2.setTransform(716.35,33.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAeBTIgegzQgIgQgHgEQgHgGgKABIAABMIgcAAIAAilIAcAAIAABIQAOAAAFgGQAGgEAJgaQAIgTAFgHQAGgGAGgCQAHgCAPAAIAGAAIAAAYIgIgBQgLAAgEADQgDAEgHARQgGAQgFAHQgGAFgKAGQARAEASAdIAfAzg");
	this.shape_3.setTransform(701.375,33.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQABAHAAATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgPAFQgNAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgHADgDAGQgEAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_4.setTransform(684.2,33.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AAlBTIAAiNIhJAAIAACNIgcAAIAAilICBAAIAAClg");
	this.shape_5.setTransform(666.725,33.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_6.setTransform(640.225,33.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AguBTIAAilIBdAAIAAAYIhBAAIAACNg");
	this.shape_7.setTransform(627.35,33.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_8.setTransform(611.475,33.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AgvBTIAAilIBfAAIAAAYIhDAAIAACNg");
	this.shape_9.setTransform(598.6,33.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("Ag8BxIgEgaQAKACAHAAQAJAAAGgDQAFgDAEgGQACgEAGgRIADgGIg/imIAeAAIAjBgIALAmQAFgTAHgSIAjhhIAcAAIg/CoQgKAbgEALQgIAOgKAGQgJAHgOAAQgIAAgKgEg");
	this.shape_10.setTransform(583.8,36.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AhHB1IAAjlIAZAAIAAAVQAKgMALgHQAMgFAPAAQAVAAARALQAQAKAIAUQAIAUAAAYQAAAagJASQgJAVgRALQgSALgTAAQgNAAgLgGQgLgGgIgJIAABRgAgghNQgOARAAAgQAAAfAOAQQAMAOATAAQARAAAOgPQANgQAAghQAAgfgNgQQgNgQgRAAQgSAAgOARg");
	this.shape_11.setTransform(567.55,36.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("ABCBqIAAgvIiDAAIAAAvIgWAAIAAhGIAOAAQAegngBhmIByAAIAACNIASAAIAABGgAguAkIBYAAIAAh2Ig/AAQgDBRgWAlg");
	this.shape_12.setTransform(548.45,35.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("Ag8BxIgDgaQAJACAHAAQAJAAAGgDQAGgDADgGQADgEAFgRIADgGIg/imIAfAAIAiBgIALAmQAFgTAGgSIAkhhIAcAAIg/CoQgKAbgEALQgIAOgKAGQgJAHgOAAQgIAAgKgEg");
	this.shape_13.setTransform(522.85,36.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AhHB1IAAjlIAZAAIAAAVQAKgMALgHQAMgFAPAAQAVAAARALQAPAKAJAUQAIAUAAAYQAAAagJASQgJAVgSALQgRALgTAAQgNAAgLgGQgLgGgIgJIAABRgAgfhNQgOARgBAgQABAfANAQQAMAOATAAQARAAAOgPQANgQAAghQABgfgNgQQgOgQgRAAQgSAAgNARg");
	this.shape_14.setTransform(506.6,36.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("Ag3BAQgWgWAAgqQAAgtAagWQAVgTAeAAQAiAAAWAXQAWAWAAAnQAAAfgKATQgJASgTAKQgSALgWAAQgiAAgVgXgAgigvQgOAQAAAfQAAAgAOAQQAOAPAUAAQAVAAAOgQQAOgPAAggQAAgfgOgQQgOgQgVAAQgUAAgOAQg");
	this.shape_15.setTransform(488.325,33.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("AgrBqQgRgOgIgVQgJgVAAg0QAAhBAWgXQAXgXAtAAQAdAAADgBQAEgBABgDIAZAAQgBARgGAGQgGAHgJACQgJACgaAAQgiAAgNAGQgMAHgGAPQgFAPgBAXQALgQAOgIQAOgIARAAQAhAAAVAXQAVAWAAAlQAAAegKASQgLATgPAKQgPAKgZAAQgdAAgQgNgAghgJQgMARAAAdQAAAdAOAPQAOAPATAAQAVAAANgRQANgSAAgdQAAgagMgQQgNgQgWAAQgWAAgNARg");
	this.shape_16.setTransform(470.375,30.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("ABBBTIAAilIAcAAIAAClgAhcBTIAAilIAdAAIAABBIAjAAQAiAAATAOQATAMAAAYQAAAUgQAQQgQAOghAAgAg/A8IAdAAQAbAAAKgHQAMgGAAgOQAAgLgJgIQgHgJgdAAIghAAg");
	this.shape_17.setTransform(449.575,33.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9900").s().p("AhDBTIAAilIBAAAQAYAAALAEQAMAEAIAKQAIALAAAPQAAAMgEAJQgGAIgJAHQAMACAHAMQAIAKAAAOQgCAYgPALQgPAMgeAAgAgnA8IAlAAQAXAAAJgGQAIgFABgOQAAgIgFgGQgFgIgIgBQgJgCgRAAIgiAAgAgngMIAeAAQARAAAGgCQAIgCAEgFQAGgGAAgIQAAgNgJgGQgJgEgWAAIgfAAg");
	this.shape_18.setTransform(430.1,33.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9900").s().p("AAeBTIgegzQgIgQgHgEQgHgGgKABIAABMIgcAAIAAilIAcAAIAABIQAOAAAFgGQAGgEAJgaQAIgTAFgHQAGgGAGgCQAHgCAPAAIAGAAIAAAYIgIgBQgLAAgEADQgDAEgHARQgGAQgFAHQgGAFgKAGQARAEASAdIAfAzg");
	this.shape_19.setTransform(406.475,33.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF9900").s().p("AAuBTIAAhBIgRAAQgPAAgHAEQgHAEgNAVIgZAkIgiAAIAegsQAOgVAOgDQgYgDgMgNQgMgOAAgTQAAgVAQgNQAPgOAdAAIBLAAIAAClgAgagzQgHAIAAALQAAAOALAHQAKAHAaAAIAgAAIAAg2IgoAAQgZgBgHAIg");
	this.shape_20.setTransform(379.925,33.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF9900").s().p("AAoBTIAAh9IhNB9IgeAAIAAilIAcAAIAAB9IBNh9IAeAAIAAClg");
	this.shape_21.setTransform(363.125,33.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF9900").s().p("AhDBTIAAilIBAAAQAYAAALAEQAMAEAIAKQAIALAAAPQAAAMgEAJQgGAIgJAHQAMACAHAMQAIAKAAAOQgBAYgQALQgPAMgeAAgAgnA8IAlAAQAXAAAJgGQAJgFAAgOQAAgIgFgGQgFgIgIgBQgJgCgRAAIgiAAgAgngMIAeAAQARAAAGgCQAHgCAGgFQAFgGAAgIQAAgNgKgGQgJgEgVAAIgfAAg");
	this.shape_22.setTransform(346.15,33.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF9900").s().p("AgNBTIAAiNIg1AAIAAgYICGAAIAAAYIg2AAIAACNg");
	this.shape_23.setTransform(329.9,33.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF9900").s().p("AgyBAQgVgWAAgqQAAgZAJgVQAJgUASgKQASgKAUAAQAbAAASAOQARANAFAaIgcAEQgEgRgJgIQgKgJgPAAQgUAAgNAQQgNAPAAAgQAAAhAMAPQANAPAUAAQAQAAAMgKQALgKADgVIAbAEQgEAcgTAQQgTARgbAAQghAAgUgXg");
	this.shape_24.setTransform(315.025,33.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9900").s().p("AgNBTIAAiNIg1AAIAAgYICGAAIAAAYIg2AAIAACNg");
	this.shape_25.setTransform(299.6,33.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF9900").s().p("Ag2BAQgWgWABgpQAAgpAVgXQAWgXAhAAQAhAAAWAXQAUAWABApIAAAHIh7AAQACAbAOAPQANAOAUAAQAPAAAMgIQAKgIAHgSIAdAEQgHAZgSAOQgTAPgdAAQgkAAgVgXgAgegyQgNANgCAWIBcAAQgCgVgJgLQgNgQgVAAQgTAAgNANg");
	this.shape_26.setTransform(284.3,33.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF9900").s().p("AhDBTIAAilIBBAAQAWAAAMAEQAMAEAIAKQAJALAAAPQAAAMgGAJQgEAIgKAHQALACAJAMQAHAKAAAOQgCAYgPALQgPAMgdAAgAgnA8IAlAAQAXAAAIgGQAKgFAAgOQAAgIgFgGQgFgIgJgBQgIgCgRAAIgiAAgAgngMIAeAAQARAAAHgCQAHgCAEgFQAGgGAAgIQAAgNgJgGQgKgEgVAAIgfAAg");
	this.shape_27.setTransform(267.8,33.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF9900").s().p("AAoBTIAAh9IhNB9IgeAAIAAilIAcAAIAAB9IBNh9IAeAAIAAClg");
	this.shape_28.setTransform(249.875,33.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF9900").s().p("AhHB1IAAjlIAZAAIAAAVQAKgMALgHQAMgFAPAAQAVAAARALQAPAKAJAUQAIAUAAAYQAAAagJASQgJAVgSALQgRALgTAAQgNAAgMgGQgKgGgIgJIAABRgAgfhNQgOARgBAgQABAfANAQQAMAOATAAQARAAAOgPQANgQAAghQABgfgNgQQgNgQgSAAQgSAAgNARg");
	this.shape_29.setTransform(232.45,36.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF9900").s().p("AAlBTIAAiNIhJAAIAACNIgcAAIAAilICBAAIAAClg");
	this.shape_30.setTransform(214.475,33.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9900").s().p("AAnBTIAAhKIhNAAIAABKIgcAAIAAilIAcAAIAABFIBNAAIAAhFIAcAAIAAClg");
	this.shape_31.setTransform(188.15,33.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF9900").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgTAAgKAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAGAIQAGAHADAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgPAFQgNAGgQAAQgcAAgOgOgAgGAKQgRADgIADQgGADgEAGQgEAGAAAHQgBALAJAIQAJAHAQAAQAPAAANgHQAMgHAHgMQAEgKAAgSIAAgKQgQAGgdAEg");
	this.shape_32.setTransform(170.3,33.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF9900").s().p("AhHB1IAAjlIAZAAIAAAVQAKgMALgHQAMgFAPAAQAVAAARALQAPAKAJAUQAIAUAAAYQAAAagJASQgJAVgRALQgSALgTAAQgNAAgLgGQgLgGgIgJIAABRgAgfhNQgPARAAAgQAAAfAOAQQAMAOATAAQARAAAOgPQANgQAAghQAAgfgMgQQgOgQgRAAQgSAAgNARg");
	this.shape_33.setTransform(153,36.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF9900").s().p("AAeBTIgegzQgIgQgHgEQgHgGgKABIAABMIgcAAIAAilIAcAAIAABIQAOAAAFgGQAGgEAJgaQAIgTAFgHQAGgGAGgCQAHgCAPAAIAGAAIAAAYIgIgBQgLAAgEADQgDAEgHARQgGAQgFAHQgGAFgKAGQARAEASAdIAfAzg");
	this.shape_34.setTransform(137.875,33.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF9900").s().p("AAABXQgeAAgSgRQgTgRgEgbIAbgEQAHApAkAAQATAAALgNQALgOADgbIg6AAIAAgWIA6AAQgDgWgMgOQgMgOgRAAQghAAgHAiIgbgEQAEgXARgPQARgPAcAAQAiAAAUAXQAUAXAAAoQABAogUAYQgRAXggAAIgEAAg");
	this.shape_35.setTransform(121.2024,33.5825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF9900").s().p("Ag8BJQgPgNgBgVQABgMAFgKQAGgKAIgGQAJgGAMgDIAZgEQAhgEAQgGIAAgHQAAgRgIgHQgKgKgVAAQgUAAgJAHQgJAHgFASIgbgEQADgRAJgLQAIgLARgGQAQgGAUAAQAWAAANAFQANAFAHAIQAFAHADAMQACAHgBATIAAAkQAAAnACALQACAKAFAKIgdAAQgFgJgBgMQgPAOgOAFQgOAGgRAAQgbAAgOgOgAgGAKQgRADgIADQgGADgEAGQgEAGgBAHQAAALAJAIQAIAHARAAQAQAAAMgHQANgHAFgMQAFgKAAgSIAAgKQgPAGgeAEg");
	this.shape_36.setTransform(95.5,33.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF9900").s().p("AAnBTIAAhKIhNAAIAABKIgcAAIAAilIAcAAIAABFIBNAAIAAhFIAcAAIAAClg");
	this.shape_37.setTransform(77.9,33.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFCC66").ss(4,1,1).p("EgwFgHmMBgLAAAQCuAAB6B7QB8B7AACuIAACFQAACuh8B7Qh6B7iuAAMhgLAAAQiuAAh7h7Qh7h7AAiuIAAiFQAAiuB7h7QB7h7CuAAg");
	this.shape_38.setTransform(416.2503,32.7992,1.0593,0.6331);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#330000").s().p("EgwFAHnQitAAh8h7Qh7h7AAiuIAAiFQAAiuB7h7QB8h7CtAAMBgLAAAQCuAAB7B7QB7B7AACuIAACFQAACuh7B7Qh7B7iuAAg");
	this.shape_39.setTransform(416.2503,32.7992,1.0593,0.6331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nazad1, new cjs.Rectangle(43.8,0,745,65.6), null);


(lib.Mute = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Mute
	this.instance = new lib.zv();
	this.instance.setTransform(10.9,10.95,0.8635,0.8635);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC66").ss(3,1,1).p("AH2AAQAADQiTCTQiTCTjQAAQjPAAiTiTQiTiTAAjQQAAjPCTiTQCTiTDPAAQDQAACTCTQCTCTAADPg");
	this.shape.setTransform(51.7,51.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("AliFjQiTiTAAjQQAAjPCTiTQCTiTDPAAQDQAACTCTQCTCTAADPQAADQiTCTQiTCTjQAAQjPAAiTiTg");
	this.shape_1.setTransform(51.7,51.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mute, new cjs.Rectangle(0,0,103.4,103.4), null);


(lib.Dinamika = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Dinamika
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AhIBJQgSgOAAgUQAAgMAHgKQAHgKAKgGQALgFANgDQAKgCAUgDQAngEAUgFIAAgHQAAgSgKgGQgMgKgZAAQgXAAgLAHQgMAHgFARIghgDQAFgRAKgLQAKgLATgGQAUgGAYAAQAZAAAQAFQAQAFAHAHQAIAIADALQABAIAAASIAAAkQAAAoADAKQACAKAGAJIgjAAQgFgIgCgMQgSAOgRAFQgQAFgUAAQghAAgRgNgAgHAKQgVADgIADQgJADgEAGQgFAGAAAHQAAALAKAIQAKAHAUAAQASABAPgIQAPgHAHgMQAGgJAAgTIAAgKQgTAGgjAEg");
	this.shape.setTransform(198.575,44.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAjBSIgjgzQgKgPgJgFQgHgFgMAAIAABMIghAAIAAijIAhAAIAABHQAQAAAHgFQAGgFAMgZQAJgUAGgGQAGgGAIgCQAJgCARAAIAHAAIAAAXIgJAAQgNAAgEADQgFADgHARQgIAQgGAGQgGAHgMAFQAUAEAUAcIAlAzg");
	this.shape_1.setTransform(180.35,44.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AAwBSIAAh8IhcB8IgkAAIAAijIAhAAIAAB8IBch8IAkAAIAACjg");
	this.shape_2.setTransform(160,44.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("ABHBSIAAiDIg6CDIgdAAIg3iKIAACKIghAAIAAijIA0AAIA0CCIA4iCIAxAAIAACjg");
	this.shape_3.setTransform(136.325,44.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AhIBJQgSgOAAgUQAAgMAHgKQAHgKAKgGQALgFANgDQAKgCAUgDQAngEAUgFIAAgHQAAgSgKgGQgMgKgZAAQgXAAgLAHQgMAHgFARIghgDQAFgRAKgLQAKgLATgGQAUgGAYAAQAZAAAQAFQAQAFAHAHQAIAIADALQABAIAAASIAAAkQAAAoADAKQACAKAGAJIgjAAQgFgIgCgMQgSAOgRAFQgQAFgUAAQghAAgRgNgAgHAKQgVADgIADQgJADgEAGQgFAGAAAHQAAALAKAIQAKAHAUAAQASABAPgIQAPgHAHgMQAGgJAAgTIAAgKQgTAGgjAEg");
	this.shape_4.setTransform(112.525,44.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AAuBSIAAhJIhbAAIAABJIgiAAIAAijIAiAAIAABEIBbAAIAAhEIAiAAIAACjg");
	this.shape_5.setTransform(91.625,44.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AAvBSIAAh8IhbB8IgkAAIAAijIAiAAIAAB8IBbh8IAkAAIAACjg");
	this.shape_6.setTransform(70.5,44.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("ABaCMIAAg1IizAAIAAA1IggAAIAAhQIAVAAQAhgpAAh9IAAghICkAAIAADHIAZAAIAABQgAgghlQAAAdgHAzQgFAxgTAgIB8AAIAAisIhdAAg");
	this.shape_7.setTransform(46.35,44.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFCC66").ss(3,1,1).p("AyUlbMAkpAAAQCQAABmBmQBmBmAACPQAACRhmBmQhmBmiQAAMgkpAAAQiQAAhmhmQhmhmAAiRQAAiPBmhmQBmhmCQAAg");
	this.shape_8.setTransform(121.0179,42.8429,0.7855,1.1857);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#330000").s().p("AyUFdQiQgBhmhlQhmhnAAiQQAAiQBmhlQBmhnCQAAMAkpAAAQCQAABmBnQBmBlAACQQAACQhmBnQhmBliQABg");
	this.shape_9.setTransform(121.0179,42.8429,0.7855,1.1857);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dinamika, new cjs.Rectangle(0,0,242,85.7), null);


(lib.Color111 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Color1
	this.instance = new lib.color11pngcopy();
	this.instance.setTransform(21.55,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Color111, new cjs.Rectangle(21.6,18.1,160,160), null);


(lib.Color3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Color3
	this.instance = new lib.color3();
	this.instance.setTransform(0,0,0.7457,0.725);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC66").ss(3,1,1).p("AHkAAQAADKiOCPQiNCPjJAAQjIAAiOiPQiNiPAAjKQAAjKCNiPQCOiPDIAAQDJAACNCPQCOCPAADKg");
	this.shape.setTransform(59.475,59.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,0,0,0)").s().p("AlWFZQiNiPAAjKQAAjKCNiPQCOiPDIAAQDJAACNCPQCOCPAADKQAADKiOCPQiNCQjJAAQjIAAiOiQg");
	this.shape_1.setTransform(59.475,59.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Color3, new cjs.Rectangle(0,0,119.3,116), null);


(lib.Color2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Color2
	this.instance = new lib.color2();
	this.instance.setTransform(0,0,0.763,0.7239);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC66").ss(3,1,1).p("AHqABQAADIiQCOQiPCNjLAAQjLAAiPiNQiPiOAAjIQAAjICPiOQCPiODLAAQDLAACPCOQCQCOAADIg");
	this.shape.setTransform(61,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,0,0,0)").s().p("AlaFXQiPiOAAjIQAAjICPiPQCPiNDLAAQDLAACPCNQCQCPAADIQAADIiQCOQiPCNjLAAQjLAAiPiNg");
	this.shape_1.setTransform(61,59.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Color2, new cjs.Rectangle(0,0,122.1,115.9), null);


(lib.Crystal_mini = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Crystal_mini
	this.aa = new lib.Symbol2_1();
	this.aa.name = "aa";
	this.aa.setTransform(253.75,54.5,1.0014,0.8385,0,0,0,29.6,41.6);
	var aaFilter_1 = new cjs.ColorFilter(0.85,0.85,0.85,1,0,0,0,0);
	this.aa.filters = [aaFilter_1, new cjs.ColorMatrixFilter(new cjs.ColorMatrix(31, 0, 0, -11))];
	this.aa.cache(-2,-2,63,87);

	this.instance = new lib.Bitmap4();
	this.instance.setTransform(30.5,24.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(4,2,1).p("AzpoCMAnSAAAQCJAABhBhQBhBhAACJIAAFvQAACJhhBhQhhBhiJAAMgnSAAAQiJAAhghhQhhhhAAiJIAAlvQAAiJBhhhQBghhCJAAg");
	this.shape.setTransform(149.3454,53.475,0.9279,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330000").s().p("AzoIDQiKAAhghhQhhhhAAiJIAAlvQAAiJBhhhQBghhCKAAMAnRAAAQCJAABhBhQBhBhAACJIAAFvQAACJhhBhQhhBhiJAAg");
	this.shape_1.setTransform(149.3454,53.475,0.9279,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.aa}]}).wait(20));
	this.timeline.addTween(cjs.Tween.get(aaFilter_1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298.7,107);


(lib.Color11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Color1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC66").ss(4,1,1).p("AKnAAQAAEQjHC/QjHDAkZAAQkZAAjGjAQjHi/AAkQQAAkPDHi/QDGjAEZAAQEZAADHDAQDHC/AAEPg");
	this.shape.setTransform(80.425,84.775);

	this.instance = new lib.Color111();
	this.instance.setTransform(82.45,82.4,1,1,0,0,0,104,100.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Color11, new cjs.Rectangle(0,0,160,160), null);


(lib.start_fon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Dmitry_foto:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Stop at This Frame */
		this.stop();
		
		// Включаем поддержку событий наведения мыши
		if (!stage.mouseMoveOutside) { 
		    stage.enableMouseOver(20); 
		}
		
		// Изначально скрываем мувиклип с фотографией
		this.Dmitry_foto.visible = false;
		
		// Запоминаем исходную координату Y для анимации
		if (this.Dmitry_text.originY === undefined) {
		    this.Dmitry_text.originY = this.Dmitry_text.y;
		}
		
		// --- РЕШЕНИЕ ПРОБЛЕМЫ С КЛИКОМ: ФИКСИРУЕМ ОБЛАСТЬ НАЖАТИЯ ---
		if (!this.Dmitry_text.hitArea) {
		    var hit = new createjs.Shape();
		    hit.graphics.beginFill("#000").drawRect(0, 0, 200, 50); 
		    hit.x = 0; 
		    hit.y = 0;
		    this.Dmitry_text.hitArea = hit;
		}
		
		
		// --- ПЛАВНАЯ И МЕДЛЕННАЯ ТРЯСКА ВВЕРХ-ВНИЗ ПРИ НАВЕДЕНИИ ---
		this.Dmitry_text.addEventListener("rollover", function() {
		    createjs.Tween.removeTweens(this);
		    var origY = this.originY;
		    
		    createjs.Tween.get(this)
		        .to({ y: origY - 12 }, 250, createjs.Ease.cubicOut)   // Мягкий взлет вверх
		        .to({ y: origY + 10 }, 300, createjs.Ease.cubicInOut) // Плавное движение вниз
		        .to({ y: origY - 6 }, 250, createjs.Ease.cubicInOut)  // Вверх
		        .to({ y: origY + 4 }, 200, createjs.Ease.cubicInOut)  // Вниз
		        .to({ y: origY }, 150, createjs.Ease.cubicIn);        // Мягкий возврат в центр
		}.bind(this.Dmitry_text));
		
		this.Dmitry_text.addEventListener("rollout", function() {
		    createjs.Tween.removeTweens(this);
		    createjs.Tween.get(this).to({ y: this.originY }, 350, createjs.Ease.quadOut);
		}.bind(this.Dmitry_text));
		
		
		// --- КЛИК ПО ТЕКСТУ (ПОКАЗ / СКРЫТИЕ ФОТО) ---
		this.Dmitry_text.addEventListener("click", function() {
		    this.Dmitry_foto.visible = !this.Dmitry_foto.visible;
		}.bind(this));
		
		
		// --- НОВЫЙ КОД: КЛИК ПО САМОМУ ФОТО ДЛЯ ЕГО СКРЫТИЯ ---
		this.Dmitry_foto.addEventListener("click", function() {
		    // Прячем фотографию обратно при нажатии на нее
		    this.Dmitry_foto.visible = false;
		}.bind(this));
		
		
		
		
		// Запоминаем исходную координату Y для анимации кнопки foto_video
		if (this.foto_video.originY === undefined) {
		    this.foto_video.originY = this.foto_video.y;
		}
		// --- ФИКСИРУЕМ ОБЛАСТЬ НАЖАТИЯ ДЛЯ foto_video ---
		if (!this.foto_video.hitArea) {
		    var hit_fv = new createjs.Shape();
		    // Рисуем невидимый прямоугольник (250 - ширина, 60 - высота, настройте под размер кнопки)
		    hit_fv.graphics.beginFill("#000").drawRect(0, 0, 250, 60); 
		    hit_fv.x = 0; 
		    hit_fv.y = 0;
		    this.foto_video.hitArea = hit_fv;
		}
		
		// --- ПЛАВНАЯ И МЕДЛЕННАЯ ТРЯСКА ВВЕРХ-ВНИЗ ПРИ НАВЕДЕНИИ ---
		this.foto_video.addEventListener("rollover", function() {
		    createjs.Tween.removeTweens(this);
		    var origY = this.originY;
		    
		    createjs.Tween.get(this)
		        .to({ y: origY - 12 }, 250, createjs.Ease.cubicOut)   // Мягкий взлет вверх
		        .to({ y: origY + 10 }, 300, createjs.Ease.cubicInOut) // Плавное движение вниз
		        .to({ y: origY - 6 }, 250, createjs.Ease.cubicInOut)  // Вверх
		        .to({ y: origY + 4 }, 200, createjs.Ease.cubicInOut)  // Вниз
		        .to({ y: origY }, 150, createjs.Ease.cubicIn);        // Возврат в центр
		}.bind(this.foto_video));
		
		this.foto_video.addEventListener("rollout", function() {
		    createjs.Tween.removeTweens(this);
		    createjs.Tween.get(this).to({ y: this.originY }, 350, createjs.Ease.quadOut);
		}.bind(this.foto_video));
		
		
		// --- МГНОВЕННЫЙ КЛИК ДЛЯ ПЕРЕХОДА НА САЙТ ---
		this.foto_video.addEventListener("click", function() {
		    // Вместо ссылки ниже укажите нужный вам сайт
		    window.open("https://google.com", "_self");
		}.bind(this));
		 
		
		
		
		
		// Запоминаем исходную координату Y для анимации кнопки foto_video
		if (this.Svet_Event.originY === undefined) {
		    this.Svet_Event.originY = this.Svet_Event.y;
		}
		// --- ФИКСИРУЕМ ОБЛАСТЬ НАЖАТИЯ ДЛЯ foto_video ---
		if (!this.Svet_Event.hitArea) {
		    var hit_fv = new createjs.Shape();
		    // Рисуем невидимый прямоугольник (250 - ширина, 60 - высота, настройте под размер кнопки)
		    hit_fv.graphics.beginFill("#000").drawRect(0, 0, 250, 60); 
		    hit_fv.x = 0; 
		    hit_fv.y = 0;
		    this.Svet_Event.hitArea = hit_fv;
		}
		// --- ПЛАВНАЯ И МЕДЛЕННАЯ ТРЯСКА ВВЕРХ-ВНИЗ ПРИ НАВЕДЕНИИ ---
		this.Svet_Event.addEventListener("rollover", function() {
		    createjs.Tween.removeTweens(this);
		    var origY = this.originY;
		    
		    createjs.Tween.get(this)
		        .to({ y: origY - 12 }, 250, createjs.Ease.cubicOut)   // Мягкий взлет вверх
		        .to({ y: origY + 10 }, 300, createjs.Ease.cubicInOut) // Плавное движение вниз
		        .to({ y: origY - 6 }, 250, createjs.Ease.cubicInOut)  // Вверх
		        .to({ y: origY + 4 }, 200, createjs.Ease.cubicInOut)  // Вниз
		        .to({ y: origY }, 150, createjs.Ease.cubicIn);        // Возврат в центр
		}.bind(this.Svet_Event));
		
		this.Svet_Event.addEventListener("rollout", function() {
		    createjs.Tween.removeTweens(this);
		    createjs.Tween.get(this).to({ y: this.originY }, 350, createjs.Ease.quadOut);
		}.bind(this.foto_video));
		// --- МГНОВЕННЫЙ КЛИК ДЛЯ ПЕРЕХОДА НА САЙТ ---
		this.Svet_Event.addEventListener("click", function() {
		    // Вместо ссылки ниже укажите нужный вам сайт
		    window.open("https://google.com", "_self");
		}.bind(this));
		
		
		
		
		
		
		
		
		// Включаем поддержку событий наведения мыши
		if (!stage.mouseMoveOutside) { 
		    stage.enableMouseOver(20); 
		}
		
		// Запоминаем исходные параметры фото-кнопки (чтобы анимация не съезжала)
		if (this.myButton1.originY === undefined) {
		    this.myButton1.originY = this.myButton1.y;
		    this.myButton1.originScaleX = this.myButton1.scaleX;
		    this.myButton1.originScaleY = this.myButton1.scaleY;
		}
		
		// --- СОЗДАЕМ ЖЕСТКУЮ ЗОНУ КЛИКА ДЛЯ ФОТО-КНОПКИ ---
		// Это спасет от мигания и тугого нажатия, пока фото прыгает
		if (!this.myButton1.hitArea) {
		    var hit_photo_btn = new createjs.Shape();
		    // 250 и 150 — это примерные ширина и высота вашего фото в пикселях. 
		    // Подстройте эти цифры под реальный размер вашей картинки!
		    hit_photo_btn.graphics.beginFill("#000").drawRect(0, 0, 250, 150); 
		    hit_photo_btn.x = 0; 
		    hit_photo_btn.y = 0;
		    this.myButton1.hitArea = hit_photo_btn;
		}
		
		// --- ПЛАВНЫЙ И АККУРАТНЫЙ ПРЫЖОК ФОТОГРАФИИ ПРИ НАВЕДЕНИИ ---
		this.myButton1.addEventListener("rollover", function() {
		    createjs.Tween.removeTweens(this);
		    
		    var origY = this.originY;
		    var origSX = this.originScaleX;
		    var origSY = this.originScaleY;
		
		    // Небольшой прыжок на 10 пикселей вверх без сильной деформации картинки
		    createjs.Tween.get(this)
		        .to({ y: origY - 10, scaleY: origSY * 1.02 }, 350, createjs.Ease.cubicOut)
		        .to({ y: origY, scaleY: origSY }, 300, createjs.Ease.cubicIn)
		        .to({ scaleY: origSY * 0.97, scaleX: origSX * 1.01 }, 120, createjs.Ease.quadOut) // Легкое приседание
		        .to({ scaleY: origSY, scaleX: origSX }, 150);                               // Возврат в норму
		}.bind(this.myButton1));
		
		this.myButton1.addEventListener("rollout", function() {
		    // При уходе курсора плавно возвращаем фото в исходную точку
		    createjs.Tween.removeTweens(this);
		    createjs.Tween.get(this).to({ 
		        y: this.originY, 
		        scaleX: this.originScaleX, 
		        scaleY: this.originScaleY 
		    }, 400, createjs.Ease.quadOut);
		}.bind(this.myButton1));
		
		
		// --- МГНОВЕННЫЙ ПЕРЕХОД НА ДРУГУЮ СТРАНИЦУ ПРИ КЛИКЕ ---
		this.myButton1.addEventListener("click", fl_ClickToGoToNextPage.bind(this));
		
		function fl_ClickToGoToNextPage() {
		    // Полностью останавливаем анимацию прыжка в момент клика
		    createjs.Tween.removeTweens(this.myButton1);
		    
		    // Сбрасываем координаты к идеальному оригиналу, чтобы на следующей странице ничего не поплыло
		    this.myButton1.y = this.myButton1.originY;
		    this.myButton1.scaleX = this.myButton1.originScaleX;
		    this.myButton1.scaleY = this.myButton1.originScaleY;
		    
		    // Переход на нужную страницу (кадр с индексом 1 — это вторая страница вашего контейнера parent)
		    this.parent.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Dmitry_foto
	this.Dmitry_foto = new lib.Dmitry_foto();
	this.Dmitry_foto.name = "Dmitry_foto";
	this.Dmitry_foto.setTransform(530.4,915.9,0.4839,0.5111,0,0,0,531.5,666.5);

	this.timeline.addTween(cjs.Tween.get(this.Dmitry_foto).wait(1));

	// Svet_Event
	this.Svet_Event = new lib.Svet_Event_text();
	this.Svet_Event.name = "Svet_Event";
	this.Svet_Event.setTransform(776.15,234.8,1,1,0,0,0,106.3,29.1);
	var Svet_EventFilter_1 = new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,0,0);
	this.Svet_Event.filters = [Svet_EventFilter_1];
	this.Svet_Event.cache(-2,-2,217,62);

	this.timeline.addTween(cjs.Tween.get(this.Svet_Event).wait(1));
	this.timeline.addTween(cjs.Tween.get(Svet_EventFilter_1).wait(1));

	// photo_video
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(4,1,1).p("AyfAAMAk/AAA");
	this.shape.setTransform(538.35,869.2);

	this.foto_video = new lib.Foto_video_text();
	this.foto_video.name = "foto_video";
	this.foto_video.setTransform(538.55,873.55,1,1,0,0,0,124,55.9);
	var foto_videoFilter_2 = new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,0,0);
	this.foto_video.filters = [foto_videoFilter_2];
	this.foto_video.cache(-2,-2,252,116);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.foto_video},{t:this.shape}]}).wait(1));
	this.timeline.addTween(cjs.Tween.get(foto_videoFilter_2).wait(1));

	// Dmitry
	this.Dmitry_text = new lib.Dmitry_text();
	this.Dmitry_text.name = "Dmitry_text";
	this.Dmitry_text.setTransform(770.2,165.9,1,1,0,0,0,81.2,24.9);
	var Dmitry_textFilter_3 = new cjs.ColorFilter(0.5,0.5,0.5,1,127.5,127.5,0,0);
	this.Dmitry_text.filters = [Dmitry_textFilter_3];
	this.Dmitry_text.cache(-4,-2,171,54);

	this.timeline.addTween(cjs.Tween.get(this.Dmitry_text).wait(1));
	this.timeline.addTween(cjs.Tween.get(Dmitry_textFilter_3).wait(1));

	// Crystal_mini
	this.myButton1 = new lib.Crystal_mini();
	this.myButton1.name = "myButton1";
	this.myButton1.setTransform(208.8,1672.55,1,1,0,0,0,149.3,53.5);

	this.timeline.addTween(cjs.Tween.get(this.myButton1).wait(1));
	this.myButton1.addEventListener("tick", AdobeAn.handleFilterCache);

	// Crystal_medium
	this.myButton2 = new lib.Crystal_medium();
	this.myButton2.name = "myButton2";
	this.myButton2.setTransform(522.45,1672.55,1,1,0,0,0,149.3,53.5);

	this.timeline.addTween(cjs.Tween.get(this.myButton2).wait(1));

	// Crystal_pro
	this.myButton3 = new lib.Crystal_pro();
	this.myButton3.name = "myButton3";
	this.myButton3.setTransform(836.3,1672.55,1,1,0,0,0,149.3,53.5);

	this.timeline.addTween(cjs.Tween.get(this.myButton3).wait(1));

	// zapas_knopka
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF9900").ss(4,2,1).p("AzpoCMAnSAAAQCJAABhBhQBhBhAACJIAAFvQAACJhhBhQhhBhiJAAMgnSAAAQiJAAhghhQhhhhAAiJIAAlvQAAiJBhhhQBghhCJAAg");
	this.shape_1.setTransform(211.7365,1673.6289,0.6163,0.391);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330000").s().p("AzoIDQiKAAhghhQhhhhAAiJIAAlvQAAiJBhhhQBghhCKAAMAnRAAAQCJAABhBhQBhBhAACJIAAFvQAACJhhBhQhhBhiJAAg");
	this.shape_2.setTransform(211.7365,1673.6289,0.6163,0.391);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// zapas_gradient
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6600FF").ss(0.1,2,1).p("AYTHCMgwlAAAIAAuDMAwlAAAg");
	this.shape_3.setTransform(210.5326,1673.8811,0.6551,0.4673);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E38308","#FFFFFF"],[0,1],155.5,0,-155.5,0).s().p("A4SHCIAAuDMAwlAAAIAAODg");
	this.shape_4.setTransform(210.5326,1673.8811,0.6551,0.4673);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Smile
	this.instance = new lib._2728();
	this.instance.setTransform(830,322,0.2617,0.2517);

	this.instance_1 = new lib.s_4();
	this.instance_1.setTransform(856,143,0.5808,0.6112);

	this.instance_2 = new lib.Koron();
	this.instance_2.setTransform(503,1272,0.1435,0.1565);

	this.instance_3 = new lib.s_1();
	this.instance_3.setTransform(160,772,0.5679,0.5745);

	this.instance_4 = new lib.s_1();
	this.instance_4.setTransform(193,718,0.5679,0.5745);

	this.instance_5 = new lib.paal();
	this.instance_5.setTransform(365,1106,0.1566,0.152);

	this.instance_6 = new lib.s_37();
	this.instance_6.setTransform(899,1110,0.2892,0.2975);

	this.instance_7 = new lib.s_5();
	this.instance_7.setTransform(232,1326,0.3669,0.3919);

	this.instance_8 = new lib.s_20();
	this.instance_8.setTransform(812,1488,0.4073,0.4319);

	this.instance_9 = new lib.s_1();
	this.instance_9.setTransform(52,664,0.5679,0.5745);

	this.instance_10 = new lib.s_25();
	this.instance_10.setTransform(839.8,973,0.5801,0.5646,0,0,180);

	this.instance_11 = new lib.s_19();
	this.instance_11.setTransform(877,1478,0.5405,0.5811);

	this.instance_12 = new lib.s_24();
	this.instance_12.setTransform(751,1500,0.3804,0.3586);

	this.instance_13 = new lib.s_9();
	this.instance_13.setTransform(503,489,0.372,0.4218);

	this.instance_14 = new lib.s_31();
	this.instance_14.setTransform(160,145,0.587,0.5652);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Text
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_5.setTransform(739.225,1529.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E6E6").s().p("AAlBlIglg+QgLgUgIgFQgIgHgMAAIAABeIgiAAIAAjJIAiAAIAABXQAQAAAIgGQAGgHAMgeQAKgYAGgIQAGgHAIgDQAJgCARAAIAIAAIAAAcIgKAAQgOAAgDAEQgFAEgHAVQgJATgGAJQgGAHgNAGQAVAFAWAkIAlA+g");
	this.shape_6.setTransform(720.55,1529.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_7.setTransform(699.675,1529.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_8.setTransform(678.025,1529.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_9.setTransform(655.325,1532.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6E6E6").s().p("AhNAsIAggHQAFAUANALQAOAKAQAAQARAAAMgKQALgJAAgQQAAgLgHgJQgHgJgIgCQgIgCgVAAIgIAAIAAgaQAVAAAIgCQAIgBAHgIQAHgHAAgMQAAgOgJgIQgKgIgOAAQgcAAgMAiIgggGQAPg5A5AAQAgAAATASQASASAAAYQAAAZgYAPQAPAHAIANQAIAMAAASQAAAbgUARQgUARgkAAQhEAAgLg+g");
	this.shape_10.setTransform(636.225,1529.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_11.setTransform(616.975,1529.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAfAAIAAAaQALgQAOgHQAPgIASAAQAaAAAUANQATAOAKAYQALAYAAAdQAAAfgMAYQgLAZgUANQgWANgXAAQgRAAgNgHQgOgHgIgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAWAAQAWAAARgTQAPgUAAgnQAAgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_12.setTransform(595.9,1533.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_13.setTransform(574.025,1529.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_14.setTransform(541.825,1529.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6E6E6").s().p("Ag5BlIAAjJIBzAAIAAAcIhRAAIAACtg");
	this.shape_15.setTransform(526.075,1529.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_16.setTransform(506.7,1529.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6E6E6").s().p("AiABlIAAjJIAiAAIAACsIBNAAIAAisIAiAAIAACsIBOAAIAAisIAjAAIAADJg");
	this.shape_17.setTransform(480.3,1529.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_18.setTransform(453.675,1529.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAFQAOAEAJAOQALANAAARQAAAPgGALQgGAKgMAIQAOADAJAOQAKANAAARQgCAdgTAOQgTAOgjAAgAgwBJIAuAAQAcAAAKgHQALgHABgRQgBgJgFgIQgHgJgKgBQgKgDgWAAIgpAAgAgwgPIAlAAQAVAAAIgDQAIgBAHgIQAGgGAAgLQAAgQgMgGQgKgGgbAAIgmAAg");
	this.shape_19.setTransform(433.6,1529.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAiAAIAABPIAsAAQAqAAAWARQAXAPAAAdQAAAZgTASQgTASgqAAgAgwBJIAkAAQAgAAAOgIQAOgIAAgRQAAgOgKgKQgLgKgiAAIgpAAg");
	this.shape_20.setTransform(402.5,1529.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_21.setTransform(382.775,1529.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_22.setTransform(364.675,1529.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_23.setTransform(343.425,1529.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_24.setTransform(321.875,1529.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAiAAIAABPIAsAAQAqAAAWARQAXAPAAAdQAAAZgTASQgTASgqAAgAgwBJIAkAAQAgAAAOgIQAOgIAAgRQAAgOgKgKQgLgKgiAAIgpAAg");
	this.shape_25.setTransform(301.6,1529.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E6E6E6").s().p("AhhBkIAAgdIAPAAQAKAAAFgCQAEgCACgFQACgEgBgbIAAiEICfAAIAADJIgiAAIAAitIhaAAIAABkQAAAjgCAMQgDALgKAIQgKAJgUAAIgbgCg");
	this.shape_26.setTransform(278.4,1529.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_27.setTransform(257.125,1529.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAAOgKQANgKAIgWIAjAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_28.setTransform(235.45,1529.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQALgQAOgHQANgIATAAQAaAAAUANQATAOALAYQAKAYAAAdQAAAfgLAYQgLAZgWANQgVANgXAAQgQAAgOgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQAQgUAAgnQAAgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_29.setTransform(214.35,1533.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAFQAOAEAJAOQALANAAARQAAAPgGALQgGAKgMAIQAOADAJAOQAKANAAARQgCAdgTAOQgTAOgjAAgAgwBJIAuAAQAcAAAKgHQALgHABgRQgBgJgFgIQgHgJgKgBQgKgDgWAAIgpAAgAgwgPIAlAAQAVAAAIgDQAIgBAHgIQAGgGAAgLQAAgQgMgGQgKgGgbAAIgmAAg");
	this.shape_30.setTransform(182.5,1529.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E6E6E6").s().p("AgXBRQgXgZgCgsIgqAAIAABZIgiAAIAAjJIAiAAIAABVIAqAAQAEgsAXgXQAVgXAkAAQAfAAASANQARAMAMAWQALAWAAAkQAAA0gXAbQgYAbgpAAQglAAgXgZgAAAg4QgOATAAAjQAAApAOATQANAUAYAAQAXAAAPgSQAPgSAAgoQAAgmgNgUQgNgTgaAAQgZAAgNATg");
	this.shape_31.setTransform(825.475,1473.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_32.setTransform(799.425,1473.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E6E6E6").s().p("Ag5BlIAAjJIBzAAIAAAcIhRAAIAACtg");
	this.shape_33.setTransform(782.725,1473.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_34.setTransform(763.325,1473.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5iqIAACqIghAAIAAjJIA1AAIA1CgIA6igIAyAAIAADJg");
	this.shape_35.setTransform(739.2,1473.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E6E6E6").s().p("AgXBRQgXgZgCgsIgqAAIAABZIgiAAIAAjJIAiAAIAABVIAqAAQAEgsAXgXQAVgXAkAAQAfAAASANQARAMAMAWQALAWAAAkQAAA0gXAbQgYAbgpAAQglAAgXgZgAAAg4QgOATAAAjQAAApAOATQANAUAYAAQAXAAAPgSQAPgSAAgoQAAgmgNgUQgNgTgaAAQgZAAgNATg");
	this.shape_36.setTransform(700.975,1473.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E6E6E6").s().p("AhKCKIgDghQAKAEAJAAQALAAAIgEQAGgEAEgHIALgZIADgJIhNjJIAlAAIArB1QAHAWAGAXQAGgWAIgXIAsh1IAiAAIhODNQgMAhgGAMQgJARgLAJQgMAHgQAAQgLAAgMgEg");
	this.shape_37.setTransform(676.25,1477.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAFAKAMQALANAAASQAAAPgGALQgGAKgMAIQAOADAJAOQAKANAAARQgCAdgSAOQgUAOgjAAgAgwBJIAuAAQAbAAALgHQALgGAAgSQAAgJgFgIQgHgJgKgBQgKgDgWAAIgpAAgAgwgPIAlAAQAUAAAJgDQAIgBAHgIQAGgGAAgLQAAgQgMgFQgLgHgaAAIgmAAg");
	this.shape_38.setTransform(657.4,1473.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_39.setTransform(635.575,1473.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_40.setTransform(616.325,1473.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgRgTgaAAQgWAAgQAPg");
	this.shape_41.setTransform(597.75,1473.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAFALAMQAKANAAASQAAAPgGALQgGAKgMAIQAOADAJAOQAKANAAARQgCAdgSAOQgUAOgjAAgAgwBJIAtAAQAdAAALgHQAKgGAAgSQABgJgHgIQgGgJgKgBQgKgDgWAAIgpAAgAgwgPIAkAAQAWAAAIgDQAIgBAGgIQAHgGAAgLQAAgQgLgFQgMgHgaAAIgmAAg");
	this.shape_42.setTransform(577.65,1473.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_43.setTransform(557.575,1473.525);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E6E6E6").s().p("AhKCKIgDghQALAEAIAAQALAAAHgEQAHgEAEgHIALgZIADgJIhNjJIAlAAIAqB1QAJAWAFAXQAGgWAIgXIArh1IAjAAIhODNQgMAhgGAMQgIARgMAJQgNAHgPAAQgKAAgNgEg");
	this.shape_44.setTransform(516.25,1477.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_45.setTransform(496.975,1473.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E6E6E6").s().p("AAABqQgkAAgXgVQgWgUgGghIAigFQAIAzArAAQAYAAAOgRQANgQAEghIhHAAIAAgbIBHAAQgEgbgOgRQgPgRgWAAQgnAAgJApIghgFQAEgdAVgRQAVgTAiAAQAqAAAYAdQAZAcAAAwQABAxgYAeQgVAbgnAAIgFAAg");
	this.shape_46.setTransform(478.577,1473.5348);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_47.setTransform(447.375,1473.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_48.setTransform(427.575,1473.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_49.setTransform(409.475,1473.525);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgQgTgaAAQgXAAgQAPg");
	this.shape_50.setTransform(388.2,1473.525);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_51.setTransform(366.675,1473.55);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgRgTgaAAQgWAAgQAPg");
	this.shape_52.setTransform(344.95,1473.525);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQAKgQAOgHQAOgIATAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgMAYQgKAZgVANQgWANgXAAQgRAAgNgHQgOgHgIgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAARgTQAQgUAAgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_53.setTransform(323.85,1477.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_54.setTransform(301.55,1473.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_55.setTransform(280.275,1473.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_56.setTransform(248.075,1473.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAiAAIAABPIAsAAQAqAAAXAQQAWAQAAAcQAAAagTASQgTASgqAAgAgwBJIAkAAQAgAAAOgIQAOgIAAgRQAAgNgLgLQgKgKgiAAIgpAAg");
	this.shape_57.setTransform(911.1,1417.65);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_58.setTransform(891.375,1417.65);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_59.setTransform(873.275,1417.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_60.setTransform(852.025,1417.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5iqIAACqIghAAIAAjJIA1AAIA1ChIA6ihIAyAAIAADJg");
	this.shape_61.setTransform(827.85,1417.65);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_62.setTransform(803.525,1417.65);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_63.setTransform(781.725,1417.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_64.setTransform(762.475,1417.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_65.setTransform(744.375,1417.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E6E6E6").s().p("AgXBRQgXgZgCgsIgqAAIAABZIgiAAIAAjJIAiAAIAABVIAqAAQAEgsAXgXQAVgXAkAAQAfAAASANQARAMAMAWQALAWAAAkQAAA0gXAbQgYAbgpAAQglAAgXgZgAAAg4QgOATAAAjQAAApAOATQANAUAYAAQAXAAAPgSQAPgSAAgoQAAgmgNgUQgNgTgaAAQgZAAgNATg");
	this.shape_66.setTransform(709.225,1417.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E6E6E6").s().p("AhKCKIgEghQALAEAJAAQALAAAIgEQAGgEAFgHIAKgZIADgJIhMjJIAkAAIArB1QAHAWAGAXQAGgWAIgXIAsh1IAhAAIhMDNQgNAhgFANQgKAQgMAJQgMAHgQAAQgKAAgMgEg");
	this.shape_67.setTransform(684.5,1421.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_68.setTransform(663.825,1417.65);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E6E6E6").s().p("AAwBlIAAhSQggAKgaAAQgXAAgSgLQgSgMgGgQQgGgRAAgUIAAg1IAiAAIAAAmQAAAZADALQADALALAIQAMAIAQgBQATABAfgKIAAhbIAiAAIAADJg");
	this.shape_69.setTransform(642.275,1417.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_70.setTransform(622.675,1417.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_71.setTransform(603.425,1417.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAiAAIAABPIAsAAQAqAAAWAQQAXAQAAAcQAAAagTASQgTASgqAAgAgwBJIAkAAQAgAAAOgIQAOgIAAgRQAAgNgKgLQgLgKgiAAIgpAAg");
	this.shape_72.setTransform(574.3,1417.65);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_73.setTransform(554.575,1417.65);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_74.setTransform(535.525,1417.625);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_75.setTransform(516.325,1417.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_76.setTransform(496.475,1417.65);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E6E6E6").s().p("AAwBlIAAhSQggAKgaAAQgXAAgSgLQgSgMgGgQQgGgRAAgUIAAg1IAiAAIAAAmQAAAZADALQADALALAIQAMAIAQgBQATABAfgKIAAhbIAiAAIAADJg");
	this.shape_77.setTransform(474.825,1417.65);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_78.setTransform(456.575,1417.625);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_79.setTransform(435.275,1417.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAfAAIAAAaQALgQAOgHQAOgIATAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgMAYQgLAZgUANQgWANgXAAQgRAAgNgHQgOgHgIgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAWAAQAWAAARgTQAQgUAAgnQgBgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_80.setTransform(414.2,1421.275);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_81.setTransform(381.2,1417.625);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_82.setTransform(359.675,1417.65);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg7CiIgfAAIg4iqIAACqIgiAAIAAjJIA2AAIA1ChIA6ihIAxAAIAADJg");
	this.shape_83.setTransform(335.5,1417.65);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_84.setTransform(302.475,1417.65);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_85.setTransform(283.9,1417.625);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E6E6E6").s().p("ABeBlIglg/QgLgTgIgFQgJgHgMABIAABdIghAAIAAhdQgMgBgJAHQgIAFgLATIglA/IglAAIAlg/QAVgjAXgFQgPgHgGgIQgHgJgMgeQgEgLgFgDQgFgCgJAAIgKAAIAAgcIAEAAQAUAAAIACQAIADAGAHQAHAIAKAZQAMAdAHAHQAHAGARAAIAAhXIAhAAIAABXQARAAAGgGQAHgHANgdQAMgeAKgHQAJgIAUAAIAMAAIAAAcIgJAAQgOAAgDAEQgEAEgIAVQgIAUgHAHQgGAIgOAGQAXAFAVAjIAlA/g");
	this.shape_86.setTransform(260.1,1417.65);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_87.setTransform(236.575,1417.625);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5iqIAACqIghAAIAAjJIA1AAIA1ChIA6ihIAxAAIAADJg");
	this.shape_88.setTransform(212.4,1417.65);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_89.setTransform(188.075,1417.625);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_90.setTransform(166.775,1417.65);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_91.setTransform(820.975,1361.725);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAEQAOAGAJAMQALANAAATQAAAOgGALQgGAKgMAIQAOADAKANQAJANAAASQgCAdgTAOQgTAOgjAAgAgwBJIAtAAQAdAAAKgHQALgHABgQQgBgKgGgIQgGgIgKgCQgKgDgVAAIgqAAgAgwgPIAkAAQAWAAAIgCQAIgDAGgHQAHgHAAgKQAAgQgMgFQgKgHgbAAIgmAAg");
	this.shape_92.setTransform(800.9,1361.75);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_93.setTransform(781.075,1361.75);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_94.setTransform(762.975,1361.725);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAIgWIAjAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_95.setTransform(741.7,1361.725);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E6E6E6").s().p("AAwBlIAAhSQggAKgaAAQgXAAgSgLQgSgMgGgQQgGgRAAgUIAAg1IAiAAIAAAmQAAAZADALQADALALAIQAMAIAQgBQATABAfgKIAAhbIAiAAIAADJg");
	this.shape_96.setTransform(720.175,1361.75);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQAKgQAPgHQANgIATAAQAaAAAUANQATAOALAYQAKAYAAAdQAAAfgLAYQgLAZgWANQgVANgXAAQgQAAgOgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQAQgUABgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_97.setTransform(701.15,1365.375);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_98.setTransform(678.875,1361.725);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAEQAOAGAKAMQALANAAATQAAAOgGALQgGAKgMAIQAOADAJANQAKANAAASQgCAdgSAOQgUAOgjAAgAgwBJIAuAAQAbAAALgHQALgHAAgQQAAgKgFgIQgHgIgKgCQgKgDgWAAIgpAAgAgwgPIAlAAQAUAAAJgCQAIgDAHgHQAGgHAAgKQAAgQgLgFQgMgHgaAAIgmAAg");
	this.shape_99.setTransform(658.75,1361.75);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_100.setTransform(638.925,1361.75);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_101.setTransform(608.375,1361.725);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E6E6E6").s().p("Ag5BlIAAjJIBzAAIAAAcIhRAAIAACtg");
	this.shape_102.setTransform(592.625,1361.75);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_103.setTransform(573.25,1361.725);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E6E6E6").s().p("AiBBlIAAjJIAiAAIAACsIBPAAIAAisIAhAAIAACsIBOAAIAAisIAiAAIAADJg");
	this.shape_104.setTransform(546.85,1361.75);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_105.setTransform(520.225,1361.725);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAEQAOAGALAMQAKANAAATQAAAOgGALQgGAKgMAIQAOADAKANQAJANAAASQgCAdgSAOQgUAOgjAAgAgwBJIAtAAQAcAAAMgHQAKgHAAgQQABgKgHgIQgGgIgKgCQgKgDgVAAIgqAAgAgwgPIAkAAQAWAAAIgCQAIgDAGgHQAHgHAAgKQAAgQgLgFQgMgHgaAAIgmAAg");
	this.shape_106.setTransform(500.15,1361.75);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_107.setTransform(469.625,1361.75);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_108.setTransform(450.625,1361.725);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E6E6E6").s().p("AiBBlIAAjJIAiAAIAACsIBPAAIAAisIAhAAIAACsIBOAAIAAisIAiAAIAADJg");
	this.shape_109.setTransform(424.2,1361.75);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_110.setTransform(397.775,1361.75);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_111.setTransform(376.075,1361.75);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAfAAIAAAaQAMgQAOgHQAOgIASAAQAaAAAUANQAUAOAKAYQAKAYAAAdQAAAfgLAYQgLAZgWANQgVANgXAAQgRAAgNgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQARgUgBgnQAAgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_112.setTransform(354.85,1365.375);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E6E6E6").s().p("AAkBlIgkg/QgKgSgJgHQgIgFgLAAIAABdIgjAAIAAjJIAjAAIAABXQAQAAAGgGQAHgGAMgeQAJgYAHgJQAGgHAJgDQAIgCASAAIAHAAIAAAcIgKAAQgOAAgDAEQgFAEgIAVQgHAUgHAHQgGAIgNAGQAWAFAUAjIAmA/g");
	this.shape_113.setTransform(336.4,1361.75);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E6E6E6").s().p("AhAB+QgdgTgOgjQgPgiAAgnQAAgsAQggQARghAfgRQAfgRAjAAQAqAAAdAWQAcAVAMAnIglAIQgJgegTgOQgSgOgcAAQgfAAgWAPQgWAQgIAaQgJAaAAAcQAAAiAKAbQALAaAVANQAWANAZABQAfgBAVgRQAWgSAIgjIAkAJQgLAugeAYQgfAXgrAAQgsAAgcgSg");
	this.shape_114.setTransform(312.575,1357.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E6E6E6").s().p("AgOCEQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGgAgMA6IgEjDIAgAAIgDDDg");
	this.shape_115.setTransform(814.05,1246.575);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E6E6E6").s().p("AhKCKIgEghQALAEAJAAQALAAAIgEQAGgEAFgGIAKgaIADgJIhMjJIAkAAIArB1QAHAWAGAYQAGgXAIgWIAsh2IAhAAIhMDMQgNAigFANQgKARgMAHQgLAIgRAAQgJAAgNgEg");
	this.shape_116.setTransform(798.9,1254.05);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQALgQAOgHQANgIATAAQAaAAAUANQATAOALAYQAKAYAAAdQAAAfgLAYQgLAZgWANQgVANgXAAQgQAAgOgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQAQgUAAgnQAAgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_117.setTransform(779.1,1253.575);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgZAAQgXAAgQAPg");
	this.shape_118.setTransform(756.8,1249.925);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E6E6E6").s().p("AgQCyIAAhfQgLALgMAGQgMAFgPAAQggAAgYgbQgXgcAAgzQAAgsAWgeQAVgeAkAAQAQAAAMAGQAMAGAKAMIAAhgIAhAAIAABgQALgMAMgGQAOgGAOAAQAkAAAVAeQAVAeAAAtQAAAvgXAdQgWAdgiAAQgLAAgLgDQgMgEgQgPIAABfgAAdg5QgMATAAAmQAAAuANAQQAMAQATAAQAVAAAPgUQAOgTAAgoQAAgmgNgTQgOgTgVAAQgXAAgLAUgAhhg5QgOATAAAkQAAApAPATQAOATAWAAQAWAAALgTQALgSAAgmQAAgngMgUQgLgUgXAAQgWAAgNAUg");
	this.shape_119.setTransform(730,1249.975);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_120.setTransform(704.775,1249.925);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_121.setTransform(683.525,1249.925);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5iqIAACqIghAAIAAjJIA1AAIA1ChIA6ihIAyAAIAADJg");
	this.shape_122.setTransform(659.35,1249.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_123.setTransform(637.025,1249.95);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_124.setTransform(617.975,1249.925);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E6E6E6").s().p("AgXBRQgXgZgCgsIgqAAIAABZIgiAAIAAjJIAiAAIAABVIAqAAQAEgsAXgXQAVgXAkAAQAfAAASANQARAMAMAWQALAWAAAkQAAA0gXAbQgYAbgpAAQglAAgXgZgAAAg4QgOATAAAjQAAApAOATQANAUAYAAQAXAAAPgSQAPgSAAgoQAAgmgNgUQgNgTgaAAQgZAAgNATg");
	this.shape_125.setTransform(582.425,1249.925);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_126.setTransform(556.375,1249.925);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAEQAOAFALANQAKANAAASQAAAPgGALQgGALgMAGQAOAFAJAMQAKANAAATQgCAcgSAOQgUAOgjAAgAgwBJIAtAAQAdAAALgHQAKgGAAgSQABgJgHgIQgGgIgKgDQgKgCgWAAIgpAAgAgwgPIAkAAQAWAAAIgCQAIgDAGgGQAHgIAAgJQAAgQgLgHQgMgGgaAAIgmAAg");
	this.shape_127.setTransform(536.25,1249.95);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_128.setTransform(516.175,1249.925);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_129.setTransform(484.2,1249.925);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_130.setTransform(464.975,1249.95);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#E6E6E6").s().p("AAxCMIAAiZIheCZIglAAIAAjKIAiAAIAACZIBeiZIAlAAIAADKgAgjhlQgOgOgDgXIAXAAQADANAIAGQAIAHAMgBQAQAAAIgFQAHgHADgNIAXAAQgCAXgPAOQgPAMgYAAQgXAAgPgMg");
	this.shape_131.setTransform(445.125,1246.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_132.setTransform(423.275,1249.925);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAEQAOAFAKANQAKANAAASQAAAPgGALQgGALgMAGQAOAFAKAMQAJANAAATQgCAcgTAOQgSAOgkAAgAgwBJIAtAAQAcAAAMgHQAKgGABgSQAAgJgHgIQgGgIgKgDQgKgCgVAAIgqAAgAgwgPIAkAAQAVAAAJgCQAIgDAGgGQAHgIAAgJQAAgQgLgHQgLgGgbAAIgmAAg");
	this.shape_133.setTransform(403.2,1249.95);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_134.setTransform(381.325,1249.925);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_135.setTransform(358.675,1252.825);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E6E6E6").s().p("AhNAsIAggHQAFAUANALQAOAKAQAAQARAAAMgKQALgJAAgQQAAgLgHgJQgHgJgIgCQgIgCgVAAIgIAAIAAgaQAVAAAIgCQAIgBAHgIQAHgHAAgMQAAgOgJgIQgKgIgOAAQgcAAgMAiIgggGQAPg5A5AAQAgAAATASQASASAAAYQAAAZgYAPQAPAHAIANQAIAMAAASQAAAbgUARQgUARgkAAQhEAAgLg+g");
	this.shape_136.setTransform(339.575,1249.925);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_137.setTransform(320.375,1249.925);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_138.setTransform(299.975,1249.925);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_139.setTransform(268.025,1249.95);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E6E6E6").s().p("AA3BlIAAhPIgUAAQgRAAgKAFQgIAFgQAZIgeAsIgrAAIAlg2QARgaARgCQgegFgOgQQgNgRAAgWQAAgaASgRQASgQAkAAIBdAAIAADJgAggg+QgJAJAAANQAAASAOAIQANAJAfAAIAmAAIAAhDIgwAAQgeAAgJAKg");
	this.shape_140.setTransform(913.55,1194.05);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#E6E6E6").s().p("AAxBlIAAiYIheCYIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_141.setTransform(893.075,1194.05);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_142.setTransform(871.425,1194.05);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_143.setTransform(849.675,1194.025);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_144.setTransform(830.475,1194.05);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAIgWIAjAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_145.setTransform(811.9,1194.025);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E6E6E6").s().p("AAwBlIAAhRQggAKgagBQgXAAgSgLQgSgMgGgQQgGgRAAgVIAAg0IAiAAIAAAmQAAAZADALQADALALAJQAMAGAQABQATgBAfgIIAAhcIAiAAIAADJg");
	this.shape_146.setTransform(790.375,1194.05);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_147.setTransform(770.775,1194.025);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_148.setTransform(750.375,1194.025);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgQgTgaAAQgXAAgQAPg");
	this.shape_149.setTransform(718.4,1194.025);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#E6E6E6").s().p("ABOBlIAAjJIAjAAIAADJgAhwBlIAAjJIAiAAIAABPIAsAAQApAAAXAQQAXAPAAAdQAAAagTASQgUASgoAAgAhOBJIAkAAQAhAAAMgIQAPgIAAgRQAAgNgLgLQgJgKgjAAIgpAAg");
	this.shape_150.setTransform(693.55,1194.05);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAEALANQAKANAAASQAAAPgGALQgGALgMAGQAOAFAKAMQAJANAAATQgCAcgSAOQgUAOgjAAgAgwBJIAtAAQAcAAAMgHQAKgGAAgSQABgJgHgIQgGgJgKgCQgKgCgVAAIgqAAgAgwgPIAkAAQAWAAAIgCQAIgDAGgGQAHgHAAgKQAAgQgLgHQgMgGgaAAIgmAAg");
	this.shape_151.setTransform(669.8,1194.05);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_152.setTransform(647.975,1194.025);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_153.setTransform(628.725,1194.05);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_154.setTransform(610.15,1194.025);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAFQANAEALANQAKANAAASQAAAPgGALQgGALgMAGQAOAFAKAMQAJANAAATQgCAcgSAOQgTAOgkAAgAgwBJIAtAAQAcAAAMgHQAKgGABgSQAAgJgHgIQgGgJgKgCQgKgCgVAAIgqAAgAgwgPIAkAAQAVAAAJgCQAIgDAGgGQAHgHAAgKQAAgQgLgHQgLgGgbAAIgmAAg");
	this.shape_155.setTransform(590.05,1194.05);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E6E6E6").s().p("ABACCIAAg6IicAAIAAjJIAiAAIAACtIBeAAIAAitIAiAAIAACtIAXAAIAABWg");
	this.shape_156.setTransform(568.725,1196.925);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAIgWIAjAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_157.setTransform(535.15,1194.025);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E6E6E6").s().p("ABOBlIAAjJIAjAAIAADJgAhwBlIAAjJIAiAAIAABPIAsAAQApAAAXAQQAXAPAAAdQAAAagTASQgTASgqAAgAhOBJIAkAAQAhAAANgIQANgIAAgRQAAgNgKgLQgJgKgjAAIgpAAg");
	this.shape_158.setTransform(510.3,1194.05);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_159.setTransform(485.575,1194.05);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_160.setTransform(464.025,1194.05);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_161.setTransform(442.3,1194.025);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E6E6E6").s().p("ABeBlIglg+QgLgTgIgHQgJgFgMAAIAABdIghAAIAAhdQgMAAgJAFQgIAGgLAUIglA+IglAAIAlg+QAVgkAXgFQgPgHgGgIQgHgIgMggQgEgKgFgCQgFgDgJAAIgKAAIAAgcIAEAAQAUAAAIACQAIACAHAJQAGAHAKAYQAMAeAHAGQAHAHARAAIAAhXIAhAAIAABXQARAAAGgGQAHgGANgfQAMgdAKgIQAJgHAUAAIAMAAIAAAcIgJAAQgOAAgDAEQgEAEgIAVQgIATgHAJQgGAHgOAGQAXAFAVAkIAlA+g");
	this.shape_162.setTransform(418.5,1194.05);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_163.setTransform(394.975,1194.025);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#E6E6E6").s().p("AhiBkIAAgdIAQAAQALAAAEgCQAEgCACgFQABgEAAgbIAAiEICeAAIAADJIgiAAIAAitIhaAAIAABkQAAAjgBAMQgDALgKAIQgLAJgTAAIgcgCg");
	this.shape_164.setTransform(371.3,1194.125);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_165.setTransform(349.075,1196.925);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgRgTgaAAQgWAAgQAPg");
	this.shape_166.setTransform(328.2,1194.025);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAfAAIAAAaQALgQAOgHQAOgIATAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgMAYQgLAZgUANQgWANgXAAQgRAAgNgHQgOgHgIgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAWAAQAWAAARgTQAQgUAAgnQgBgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_167.setTransform(307.1,1197.675);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_168.setTransform(285.225,1194.05);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#E6E6E6").s().p("AA3BlIAAhPIgTAAQgSAAgJAFQgJAFgQAZIgeAsIgrAAIAlg2QARgaARgCQgegFgOgQQgOgRAAgWQABgaASgRQASgQAjAAIBeAAIAADJgAggg+QgJAJAAANQAAASAOAIQAMAJAhAAIAlAAIAAhDIgwAAQgeAAgJAKg");
	this.shape_169.setTransform(252.4,1194.05);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#E6E6E6").s().p("AA4BlIAAhPIgVAAQgRAAgKAFQgIAFgQAZIgeAsIgqAAIAlg2QARgaAQgCQgdgFgOgQQgOgRgBgWQAAgaATgRQASgQAjAAIBdAAIAADJgAggg+QgJAJAAANQAAASANAIQANAJAgAAIAnAAIAAhDIgyAAQgdAAgJAKg");
	this.shape_170.setTransform(231.3,1194.05);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_171.setTransform(210.975,1194.05);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgRgTgaAAQgWAAgQAPg");
	this.shape_172.setTransform(189.25,1194.025);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgeAAIg4iqIAACqIgiAAIAAjJIA2AAIA1CgIA6igIAyAAIAADJg");
	this.shape_173.setTransform(165.1,1194.05);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E6E6E6").s().p("AgZAvIAWhdIAdAAIgdBdg");
	this.shape_174.setTransform(948.825,1148.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_175.setTransform(880.975,1138.125);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_176.setTransform(861.775,1138.15);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgZAAQgXAAgQAPg");
	this.shape_177.setTransform(843.2,1138.125);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAEAKAOQALANAAARQAAAPgGALQgGAKgMAHQAOAEAJANQAKANAAASQgCAdgTAOQgSAOgkAAgAgwBJIAuAAQAbAAALgHQALgGAAgSQAAgJgFgIQgHgJgKgCQgKgCgWAAIgpAAgAgwgPIAlAAQAUAAAJgCQAIgDAHgGQAGgIAAgJQAAgRgMgGQgLgGgaAAIgmAAg");
	this.shape_178.setTransform(823.1,1138.15);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_179.setTransform(803.025,1138.125);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg7CiIgeAAIg5ipIAACpIghAAIAAjJIA1AAIA1CgIA6igIAxAAIAADJg");
	this.shape_180.setTransform(768.6,1138.15);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_181.setTransform(744.275,1138.125);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_182.setTransform(725.025,1138.15);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_183.setTransform(706.45,1138.125);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAEALAOQAKANAAARQAAAPgGALQgGAKgMAHQAOAEAKANQAJANAAASQgCAdgSAOQgTAOgkAAgAgwBJIAtAAQAcAAAMgHQAKgGABgSQAAgJgHgIQgGgJgKgCQgKgCgVAAIgqAAgAgwgPIAkAAQAVAAAJgCQAIgDAGgGQAHgIAAgJQAAgRgLgGQgLgGgbAAIgmAAg");
	this.shape_184.setTransform(686.35,1138.15);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#E6E6E6").s().p("ABACCIAAg6IicAAIAAjJIAiAAIAACtIBeAAIAAitIAiAAIAACtIAXAAIAABWg");
	this.shape_185.setTransform(665.025,1141.025);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAIgWIAjAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_186.setTransform(631.45,1138.125);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_187.setTransform(612.225,1138.15);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E6E6E6").s().p("AAxCLIAAiYIheCYIglAAIAAjIIAiAAIAACYIBeiYIAlAAIAADIgAgjhmQgOgNgDgYIAXAAQADAOAIAGQAIAHAMgBQAQAAAIgGQAHgGADgOIAXAAQgCAYgPANQgPANgYAAQgXAAgPgNg");
	this.shape_188.setTransform(592.375,1134.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E6E6E6").s().p("AA3BlIAAhPIgUAAQgRAAgKAFQgIAFgQAZIgeAsIgrAAIAlg2QARgZARgDQgegFgOgQQgOgRABgWQAAgbASgQQATgQAjAAIBcAAIAADJgAggg+QgJAJAAANQAAASANAIQAOAJAfAAIAmAAIAAhDIgxAAQgdAAgJAKg");
	this.shape_189.setTransform(569.95,1138.15);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E6E6E6").s().p("AhiBkIAAgdIAPAAQAMAAAEgCQAFgCABgFQACgEAAgbIAAiEICdAAIAADJIghAAIAAitIhbAAIAABkQAAAjgCAMQgCALgKAIQgKAJgUAAIgcgCg");
	this.shape_190.setTransform(548,1138.225);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAEAKAOQALANAAARQAAAPgGALQgGAKgMAHQAOAEAJANQAKANAAASQgCAdgTAOQgSAOgkAAgAgwBJIAuAAQAbAAALgHQALgGAAgSQAAgJgFgIQgHgJgKgCQgKgCgWAAIgpAAgAgwgPIAlAAQAUAAAJgCQAIgDAHgGQAGgIAAgJQAAgRgMgGQgLgGgaAAIgmAAg");
	this.shape_191.setTransform(528.8,1138.15);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_192.setTransform(506.925,1138.125);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQAKgQAOgHQAOgIATAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgMAYQgKAZgVANQgWANgXAAQgRAAgNgHQgOgHgIgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAARgTQAQgUAAgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_193.setTransform(485.85,1141.775);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_194.setTransform(463.975,1138.15);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E6E6E6").s().p("AhKCKIgDggQALADAIAAQALAAAHgEQAHgEAEgGIALgaIADgIIhNjKIAlAAIAqB1QAJAWAFAYQAGgXAIgXIArh1IAjAAIhODMQgMAigGAMQgIARgMAIQgNAIgPAAQgKAAgNgEg");
	this.shape_195.setTransform(443.8,1142.25);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#E6E6E6").s().p("AgOBfQgGgGAAgJQAAgJAGgFQAGgHAIAAQAJAAAGAHQAGAFAAAJQAAAJgGAGQgGAHgJAAQgIgBgGgGgAgOhBQgGgGAAgJQAAgJAGgFQAGgHAIAAQAJAAAGAHQAGAFAAAJQAAAJgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_196.setTransform(419.025,1138.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5ipIAACpIghAAIAAjJIA1AAIA1CgIA6igIAxAAIAADJg");
	this.shape_197.setTransform(347.85,1138.15);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_198.setTransform(323.525,1138.125);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#E6E6E6").s().p("ABACCIAAg6IicAAIAAjJIAiAAIAACtIBeAAIAAitIAiAAIAACtIAXAAIAABWg");
	this.shape_199.setTransform(302.775,1141.025);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQALgQAOgHQANgIATAAQAaAAAUANQATAOALAYQAKAYAAAdQAAAfgLAYQgLAZgWANQgVANgXAAQgQAAgOgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQAQgUABgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_200.setTransform(280.5,1141.775);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_201.setTransform(258.225,1138.125);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAEAKAOQALANAAARQAAAPgGALQgGAKgMAHQAOAEAJANQAKANAAASQgCAdgTAOQgSAOgkAAgAgwBJIAuAAQAbAAALgHQALgGAAgSQAAgJgFgIQgHgJgKgCQgKgCgWAAIgpAAgAgwgPIAlAAQAUAAAJgCQAIgDAHgGQAGgIAAgJQAAgRgMgGQgLgGgaAAIgmAAg");
	this.shape_202.setTransform(238.1,1138.15);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_203.setTransform(218.275,1138.15);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#E6E6E6").s().p("AAxBlIAAiYIheCYIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_204.setTransform(187.725,1138.15);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_205.setTransform(155.225,1138.125);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_206.setTransform(133.675,1138.15);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#E6E6E6").s().p("AgZAvIAWhdIAdAAIgdBdg");
	this.shape_207.setTransform(984.025,1092.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5ipIAACpIghAAIAAjJIA1AAIA1CgIA6igIAyAAIAADJg");
	this.shape_208.setTransform(967.25,1082.25);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_209.setTransform(942.925,1082.225);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#E6E6E6").s().p("AAlBlIglg+QgLgUgHgGQgJgGgMAAIAABeIgiAAIAAjJIAiAAIAABXQARAAAHgGQAGgHALgeQALgYAGgHQAGgIAJgCQAHgDASAAIAHAAIAAAcIgJAAQgOAAgEAEQgEAEgHAVQgJAUgGAIQgGAHgNAGQAVAFAWAkIAlA+g");
	this.shape_210.setTransform(924.6,1082.25);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#E6E6E6").s().p("AAxBlIAAiYIheCYIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_211.setTransform(903.725,1082.25);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_212.setTransform(882.075,1082.25);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_213.setTransform(862.375,1082.25);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_214.setTransform(844.275,1082.225);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_215.setTransform(822.975,1082.225);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#E6E6E6").s().p("AAwBlIAAhRQggAJgaABQgXAAgSgMQgSgMgGgQQgGgRAAgVIAAg0IAiAAIAAAmQAAAZADALQADALALAJQAMAGAQABQATAAAfgKIAAhbIAiAAIAADJg");
	this.shape_216.setTransform(801.475,1082.25);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#E6E6E6").s().p("AhKCKIgDggQAKADAJAAQALAAAIgEQAGgEAEgGIALgaIADgIIhNjKIAlAAIArB1QAHAWAGAXQAGgWAIgXIAsh1IAiAAIhODMQgMAigFAMQgKARgLAIQgMAIgRAAQgJAAgNgEg");
	this.shape_217.setTransform(782.35,1086.35);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_218.setTransform(750.825,1082.225);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#E6E6E6").s().p("AAkBlIgkg+QgKgUgJgGQgIgGgMAAIAABeIgiAAIAAjJIAiAAIAABXQAQAAAIgGQAGgHAMgeQAJgYAHgHQAGgIAIgCQAJgDASAAIAHAAIAAAcIgKAAQgOAAgDAEQgFAEgIAVQgHAUgHAIQgGAHgNAGQAWAFAUAkIAmA+g");
	this.shape_219.setTransform(732.5,1082.25);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAjAAIAABPIArAAQApAAAXARQAXAPAAAdQAAAZgTASQgTASgqAAgAgvBJIAkAAQAfAAAOgIQAOgIAAgRQAAgOgLgKQgKgKgiAAIgoAAg");
	this.shape_220.setTransform(713.05,1082.25);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#E6E6E6").s().p("AhhBkIAAgdIAOAAQAMAAAEgCQAFgCABgFQABgEABgbIAAiEICdAAIAADJIghAAIAAitIhaAAIAABkQgBAjgCAMQgCALgKAIQgKAJgUAAIgbgCg");
	this.shape_221.setTransform(689.85,1082.325);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_222.setTransform(669.475,1082.225);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_223.setTransform(650.225,1082.25);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_224.setTransform(619.65,1082.225);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_225.setTransform(598.125,1082.25);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#E6E6E6").s().p("AA4BlIAAhPIgVAAQgRAAgKAFQgIAEgQAaIgeAsIgrAAIAmg2QARgZAQgEQgdgEgPgQQgOgRABgWQAAgbASgQQATgQAjAAIBcAAIAADJgAggg/QgJAKAAANQAAASANAJQAOAIAfAAIAnAAIAAhDIgyAAQgdAAgJAJg");
	this.shape_226.setTransform(565.1,1082.25);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#E6E6E6").s().p("Ag1CBQgUgRgLgZQgKgaAAg/QAAhQAbgcQAbgcA3AAQAjAAAFgBQAFgBABgEIAeAAQgCAVgHAIQgHAIgKACQgMACgfAAQgqAAgPAIQgQAJgGASQgHASgBAcQANgTARgKQASgJAUAAQAoAAAaAbQAaAbAAAuQAAAjgNAXQgNAXgSAMQgSAMgfAAQgjAAgUgQgAgpgLQgPAVAAAjQAAAjARATQARATAYAAQAaAAAQgWQAPgWAAgjQAAgggOgTQgPgUgcAAQgbAAgQAVg");
	this.shape_227.setTransform(545.325,1078.275);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAIgWIAjAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgQgTgaAAQgXAAgQAPg");
	this.shape_228.setTransform(523.55,1082.225);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_229.setTransform(503.625,1082.225);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAANgKQAOgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_230.setTransform(471.65,1082.225);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_231.setTransform(452.425,1082.25);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAANgKQAOgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_232.setTransform(433.85,1082.225);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E6E6E6").s().p("AhKCKIgEggQALADAJAAQAMAAAGgEQAHgEAFgGIAKgaIADgIIhMjKIAkAAIAqB1QAIAWAGAXQAGgWAIgXIArh1IAiAAIhMDMQgNAigFAMQgKARgMAIQgMAIgQAAQgKAAgMgEg");
	this.shape_233.setTransform(413.95,1086.35);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAFQAOAEAKAOQAKANAAARQAAAPgGALQgGAKgMAHQAOAEAKANQAJAOAAARQgCAdgTAOQgSAOgkAAgAgwBJIAtAAQAcAAAMgHQAKgHABgRQAAgJgHgIQgGgJgKgCQgKgCgVAAIgqAAgAgwgPIAkAAQAVAAAJgDQAIgBAGgIQAHgHAAgJQAAgRgLgGQgLgGgbAAIgmAAg");
	this.shape_234.setTransform(395.1,1082.25);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_235.setTransform(375.275,1082.25);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_236.setTransform(357.175,1082.225);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#E6E6E6").s().p("AhKCKIgDggQALADAIAAQALAAAHgEQAHgEAEgGIALgaIADgIIhNjKIAlAAIAqB1QAJAWAFAXQAGgWAIgXIArh1IAiAAIhNDMQgLAigHAMQgIARgMAIQgNAIgPAAQgLAAgMgEg");
	this.shape_237.setTransform(337.7,1086.35);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#E6E6E6").s().p("AAwBlIAAhRQggAJgaABQgXAAgSgMQgSgMgGgQQgGgRAAgVIAAg0IAiAAIAAAmQAAAZADALQADALALAJQAMAGAQABQATAAAfgKIAAhbIAiAAIAADJg");
	this.shape_238.setTransform(317.025,1082.25);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_239.setTransform(297.425,1082.225);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_240.setTransform(276.125,1082.25);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#E6E6E6").s().p("ABOBlIAAjJIAjAAIAADJgAhwBlIAAjJIAiAAIAABPIAsAAQApAAAXARQAXAPAAAdQAAAZgTASQgTASgqAAgAhOBJIAkAAQAhAAANgIQANgIAAgRQAAgOgKgKQgJgKgjAAIgpAAg");
	this.shape_241.setTransform(240.75,1082.25);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAEALAOQAKANAAARQAAAPgGALQgGAKgMAHQAOAEAKANQAJAOAAARQgCAdgSAOQgTAOgkAAgAgwBJIAtAAQAcAAAMgHQAKgHABgRQAAgJgHgIQgGgJgKgCQgKgCgVAAIgqAAgAgwgPIAkAAQAVAAAJgDQAIgBAGgIQAHgHAAgJQAAgRgLgGQgLgGgbAAIgmAAg");
	this.shape_242.setTransform(217,1082.25);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAjAAIAABPIArAAQApAAAYARQAWAPAAAdQAAAZgTASQgTASgqAAgAgvBJIAkAAQAfAAAOgIQAOgIAAgRQAAgOgLgKQgKgKgiAAIgoAAg");
	this.shape_243.setTransform(185.9,1082.25);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_244.setTransform(165.925,1082.225);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAIgWIAjAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgQgTgaAAQgXAAgQAPg");
	this.shape_245.setTransform(144.65,1082.225);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_246.setTransform(121.975,1085.125);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#E6E6E6").s().p("AhmA8IAjgJQAFAVARAVQARAUAcgBQAdAAASgOQARgQAAgVQAAgXgSgOQgTgNgdAAIgSAAIAAgfQAZAAANgDQANgDALgMQAKgNAAgPQAAgSgNgNQgPgOgYAAQgVAAgOAKQgPALgGASQgGARABAIIgkgIQANhYBUAAQApgBAYAXQAYAXAAAeQAAAoglAVQAVAGAPASQAPARAAAZQAAAlgcAYQgcAYguABQhPAAgYhVg");
	this.shape_247.setTransform(99.45,1078.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgZAAQgXAAgQAPg");
	this.shape_248.setTransform(725.3,1026.325);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E6E6E6").s().p("AAxBlIAAiYIheCYIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_249.setTransform(703.625,1026.35);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAEALAOQAKANAAARQAAAPgGALQgGAKgMAIQAOADAJAOQAKANAAARQgCAdgSAOQgUAOgjAAgAgwBJIAtAAQAdAAALgHQAKgHAAgRQABgJgHgIQgGgJgKgCQgKgCgVAAIgqAAgAgwgPIAkAAQAWAAAIgDQAIgBAGgIQAHgGAAgLQAAgQgLgFQgMgHgaAAIgmAAg");
	this.shape_250.setTransform(682.95,1026.35);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_251.setTransform(663.125,1026.35);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_252.setTransform(645.025,1026.325);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAANgKQAOgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_253.setTransform(623.75,1026.325);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#E6E6E6").s().p("AiBBlIAAjJIAiAAIAACsIBPAAIAAisIAhAAIAACsIBOAAIAAisIAiAAIAADJg");
	this.shape_254.setTransform(597.35,1026.35);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgRgTgaAAQgWAAgQAPg");
	this.shape_255.setTransform(570.75,1026.325);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_256.setTransform(551.525,1026.35);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#E6E6E6").s().p("AhKCKIgEggQALADAJAAQALAAAHgEQAHgEAEgHIALgZIADgIIhNjKIAlAAIAqB1QAJAWAFAXQAGgWAIgXIArh1IAjAAIhODMQgLAigHAMQgIARgNAJQgMAHgPAAQgLAAgMgEg");
	this.shape_257.setTransform(533,1030.45);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_258.setTransform(512.575,1026.35);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgQgTgaAAQgXAAgQAPg");
	this.shape_259.setTransform(480.35,1026.325);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_260.setTransform(458.675,1026.325);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_261.setTransform(437.125,1026.35);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_262.setTransform(417.425,1026.35);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_263.setTransform(399.325,1026.325);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_264.setTransform(378.05,1026.325);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5ipIAACpIghAAIAAjJIA1AAIA1CgIA6igIAyAAIAADJg");
	this.shape_265.setTransform(353.9,1026.35);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAEALAOQAKANAAARQAAAPgGALQgGAKgMAIQAOADAJAOQAKANAAARQgCAdgSAOQgUAOgjAAgAgwBJIAuAAQAbAAALgHQALgHAAgRQAAgJgFgIQgHgJgKgCQgKgCgWAAIgpAAgAgwgPIAlAAQAUAAAJgDQAIgBAHgIQAGgGAAgLQAAgQgMgFQgLgHgaAAIgmAAg");
	this.shape_266.setTransform(331.15,1026.35);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_267.setTransform(309.325,1026.325);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_268.setTransform(288.925,1026.325);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#E6E6E6").s().p("AgXBRQgXgZgCgsIgqAAIAABZIgiAAIAAjJIAiAAIAABVIAqAAQAEgsAXgXQAVgXAkAAQAfAAASANQARAMAMAWQALAWAAAkQAAA0gXAbQgYAbgpAAQglAAgXgZgAAAg4QgOATAAAjQAAApAOATQANAUAYAAQAXAAAPgSQAPgSAAgoQAAgmgNgUQgNgTgaAAQgZAAgNATg");
	this.shape_269.setTransform(920.225,970.425);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_270.setTransform(894.125,970.425);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#E6E6E6").s().p("Ag5BlIAAjJIBzAAIAAAcIhRAAIAACtg");
	this.shape_271.setTransform(878.425,970.45);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_272.setTransform(859.025,970.425);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#E6E6E6").s().p("AhiBkIAAgdIAPAAQAMAAAEgCQAEgCACgFQACgEAAgbIAAiEICdAAIAADJIgiAAIAAitIhaAAIAABkQAAAjgCAMQgCALgKAIQgLAJgTAAIgcgCg");
	this.shape_273.setTransform(835.9,970.525);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_274.setTransform(813.675,973.325);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgZAAQgXAAgQAPg");
	this.shape_275.setTransform(792.8,970.425);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQAKgQAOgHQAOgIATAAQAaAAAUANQATAOALAYQAKAYAAAdQAAAfgMAYQgLAZgUANQgWANgXAAQgQAAgOgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQAQgUABgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_276.setTransform(771.7,974.075);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_277.setTransform(749.825,970.45);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#E6E6E6").s().p("AA3BlIAAhPIgUAAQgRAAgKAFQgIAEgQAaIgeAsIgrAAIAlg3QARgYARgEQgegDgOgRQgNgRAAgWQAAgaASgRQATgQAjAAIBcAAIAADJgAggg/QgJAKAAANQAAASANAJQAOAIAfAAIAmAAIAAhDIgwAAQgeAAgJAJg");
	this.shape_278.setTransform(717,970.45);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#E6E6E6").s().p("AAxCLIAAiYIheCYIglAAIAAjIIAiAAIAACZIBeiZIAlAAIAADIgAgjhmQgOgMgDgZIAXAAQADANAIAHQAIAGAMABQAQAAAIgHQAHgGADgOIAXAAQgCAZgPAMQgPANgYAAQgXAAgPgNg");
	this.shape_279.setTransform(685.825,966.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_280.setTransform(664.025,970.425);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQAKgQAOgHQAOgIATAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgMAYQgLAZgUANQgWANgXAAQgQAAgOgHQgOgHgIgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAARgTQAQgUAAgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_281.setTransform(642.9,974.075);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_282.setTransform(620.625,970.425);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_283.setTransform(601.375,970.45);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_284.setTransform(582.375,970.425);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#E6E6E6").s().p("AAlBlIglg+QgLgUgHgFQgJgHgMAAIAABeIgiAAIAAjJIAiAAIAABXQARAAAHgGQAGgHALgeQALgYAGgIQAGgHAIgDQAJgCARAAIAHAAIAAAcIgJAAQgOAAgEAEQgEAEgHAVQgJATgGAIQgGAIgNAGQAVAFAWAkIAlA+g");
	this.shape_285.setTransform(564.05,970.45);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_286.setTransform(532.475,970.425);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_287.setTransform(511.175,970.45);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#E6E6E6").s().p("AgZAvIAWhdIAdAAIgdBdg");
	this.shape_288.setTransform(484.825,980.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#E6E6E6").s().p("AhKCKIgDggQAKADAJAAQALAAAIgEQAGgEAEgHIALgZIADgIIhNjKIAlAAIArB1QAHAWAGAXQAGgWAIgXIAsh1IAiAAIhODNQgLAhgHANQgIAQgMAJQgMAHgQAAQgLAAgMgEg");
	this.shape_289.setTransform(461.15,974.55);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#E6E6E6").s().p("AAlBlIglg+QgKgUgJgFQgIgHgMAAIAABeIgiAAIAAjJIAiAAIAABXQAQAAAIgGQAGgHAMgeQAKgYAGgIQAGgHAIgDQAJgCARAAIAIAAIAAAcIgKAAQgOAAgDAEQgEAEgIAVQgIATgHAIQgGAIgNAGQAWAFAVAkIAlA+g");
	this.shape_290.setTransform(443.7,970.45);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#E6E6E6").s().p("AhNAsIAggHQAFAUANALQAOAKAQAAQARAAAMgKQALgJAAgQQAAgLgHgJQgHgJgIgCQgIgCgVAAIgIAAIAAgaQAVAAAIgCQAIgBAHgIQAHgHAAgMQAAgOgJgIQgKgIgOAAQgcAAgMAiIgggGQAPg5A5AAQAgAAATASQASASAAAYQAAAZgYAPQAPAHAIANQAIAMAAASQAAAbgUARQgUARgkAAQhEAAgLg+g");
	this.shape_291.setTransform(424.575,970.425);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_292.setTransform(405.325,970.425);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#E6E6E6").s().p("AAlBlIglg+QgLgUgIgFQgIgHgMAAIAABeIgiAAIAAjJIAiAAIAABXQAQAAAIgGQAGgHAMgeQAKgYAGgIQAGgHAIgDQAJgCARAAIAHAAIAAAcIgJAAQgOAAgDAEQgFAEgHAVQgJATgGAIQgGAIgNAGQAVAFAWAkIAlA+g");
	this.shape_293.setTransform(386.65,970.45);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_294.setTransform(367.525,970.425);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#E6E6E6").s().p("AgXBRQgXgZgCgsIgqAAIAABZIgiAAIAAjJIAiAAIAABVIAqAAQAEgsAXgXQAVgXAkAAQAfAAASANQARAMAMAWQALAWAAAkQAAA0gXAbQgYAbgpAAQglAAgXgZgAAAg4QgOATAAAjQAAApAOATQANAUAYAAQAXAAAPgSQAPgSAAgoQAAgmgNgUQgNgTgaAAQgZAAgNATg");
	this.shape_295.setTransform(332.375,970.425);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#E6E6E6").s().p("AhKCKIgEggQALADAJAAQAMAAAGgEQAHgEAFgHIAKgZIADgIIhMjKIAkAAIAqB1QAJAWAFAXQAGgWAIgXIArh1IAiAAIhMDNQgMAhgHANQgIAQgNAJQgMAHgQAAQgKAAgMgEg");
	this.shape_296.setTransform(307.65,974.55);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_297.setTransform(286.975,970.45);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_298.setTransform(267.025,970.425);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_299.setTransform(245.75,970.425);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_300.setTransform(223.075,973.325);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#E6E6E6").s().p("AhKCKIgEggQALADAJAAQALAAAIgEQAGgEAFgHIAKgZIADgIIhMjKIAkAAIArB1QAHAWAGAXQAGgWAIgXIAsh1IAhAAIhMDNQgNAhgFANQgKAQgMAJQgLAHgRAAQgJAAgNgEg");
	this.shape_301.setTransform(204,974.55);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#E6E6E6").s().p("AAwBlIAAhSQggALgaAAQgXAAgSgMQgSgMgGgQQgGgRAAgUIAAg1IAiAAIAAAmQAAAZADALQADALALAIQAMAHAQAAQATAAAfgJIAAhbIAiAAIAADJg");
	this.shape_302.setTransform(183.325,970.45);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAFALANQAKANAAASQAAAOgGALQgGAKgMAIQAOADAJAOQAKANAAARQgCAdgSAOQgUAOgjAAgAgwBJIAtAAQAdAAALgHQAKgGAAgRQABgKgHgIQgGgJgKgBQgKgDgVAAIgqAAgAgwgPIAkAAQAWAAAIgDQAIgBAGgIQAHgGAAgLQAAgQgLgFQgMgHgaAAIgmAAg");
	this.shape_303.setTransform(153.3,970.45);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#E6E6E6").s().p("AAkBlIgkg/QgLgTgHgFQgJgHgLAAIAABeIgjAAIAAjJIAjAAIAABXQAQAAAGgGQAHgGALgeQAKgYAHgJQAGgHAJgDQAHgCATAAIAGAAIAAAcIgJAAQgNAAgFAEQgDAEgJAVQgHAUgHAHQgGAIgNAGQAVAFAVAjIAmA/g");
	this.shape_304.setTransform(1015.7,914.55);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_305.setTransform(994.825,914.55);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_306.setTransform(973.175,914.55);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_307.setTransform(950.475,917.425);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#E6E6E6").s().p("AhNAsIAggHQAFAUANALQAOAKAQAAQARAAAMgKQALgJAAgQQAAgLgHgJQgHgJgIgCQgIgCgVAAIgIAAIAAgaQAVAAAIgCQAIgBAHgIQAHgHAAgMQAAgOgJgIQgKgIgOAAQgcAAgMAiIgggGQAPg5A5AAQAgAAATASQASASAAAYQAAAZgYAPQAPAHAIANQAIAMAAASQAAAbgUARQgUARgkAAQhEAAgLg+g");
	this.shape_308.setTransform(931.375,914.525);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_309.setTransform(912.125,914.525);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQALgQAOgHQANgIATAAQAaAAAUANQATAOALAYQAKAYAAAdQAAAfgLAYQgLAZgVANQgWANgXAAQgQAAgOgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQAQgUABgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_310.setTransform(891.05,918.175);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_311.setTransform(869.175,914.55);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#E6E6E6").s().p("AiBBlIAAjJIAiAAIAACsIBPAAIAAisIAhAAIAACsIBOAAIAAisIAiAAIAADJg");
	this.shape_312.setTransform(832.25,914.55);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_313.setTransform(805.625,914.525);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAEQAOAGALAMQAKAOAAASQAAAOgGALQgGAKgMAIQAOAEAJANQAKANAAARQgCAdgSAOQgUAOgjAAgAgwBJIAtAAQAdAAALgHQAKgGAAgRQABgKgHgIQgGgIgKgCQgKgDgWAAIgpAAgAgwgPIAkAAQAWAAAIgDQAIgBAGgIQAHgGAAgLQAAgQgLgFQgMgHgaAAIgmAAg");
	this.shape_314.setTransform(785.55,914.55);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_315.setTransform(755.025,914.55);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#E6E6E6").s().p("AhKCKIgEghQALAEAJAAQAMAAAGgEQAHgEAFgHIAKgZIADgJIhMjJIAkAAIAqB1QAJAWAFAXQAGgWAIgWIArh2IAiAAIhMDNQgMAhgHANQgIAQgNAJQgMAHgQAAQgKAAgMgEg");
	this.shape_316.setTransform(736.5,918.65);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_317.setTransform(717.425,914.525);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_318.setTransform(696.15,914.525);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_319.setTransform(674.625,914.55);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_320.setTransform(652.9,914.525);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAfAAIAAAaQAMgQANgHQAPgIASAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgLAYQgMAZgVANQgVANgXAAQgQAAgOgHQgOgHgIgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAWAAQAWAAARgTQAPgUAAgnQAAgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_321.setTransform(631.8,918.175);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgQgTgaAAQgXAAgQAPg");
	this.shape_322.setTransform(609.5,914.525);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_323.setTransform(588.225,914.55);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#E6E6E6").s().p("AAxCMIAAiZIheCZIglAAIAAjKIAiAAIAACaIBeiaIAlAAIAADKgAgjhlQgOgNgDgYIAXAAQADAMAIAHQAIAGAMABQAQAAAIgHQAHgGADgNIAXAAQgCAYgPANQgPAMgYAAQgXAAgPgMg");
	this.shape_324.setTransform(556.025,910.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAANgKQAOgKAHgWIAkAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_325.setTransform(534.2,914.525);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#E6E6E6").s().p("AAwBlIAAhSQggAKgaAAQgXAAgSgLQgSgMgGgQQgGgRAAgUIAAg1IAiAAIAAAmQAAAZADALQADALALAIQAMAIAQgBQATABAfgKIAAhbIAiAAIAADJg");
	this.shape_326.setTransform(512.675,914.55);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#E6E6E6").s().p("AhKCKIgDghQAKAEAJAAQALAAAIgEQAGgEAEgHIALgZIADgJIhNjJIAlAAIArB1QAHAWAGAXQAGgWAIgWIAsh2IAiAAIhODNQgMAhgGANQgJAQgLAJQgMAHgQAAQgLAAgMgEg");
	this.shape_327.setTransform(493.55,918.65);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#E6E6E6").s().p("AhhBkIAAgdIAOAAQALAAAFgCQAEgCACgFQABgEABgbIAAiEICeAAIAADJIgiAAIAAitIhaAAIAABkQAAAjgDAMQgCALgKAIQgKAJgUAAIgbgCg");
	this.shape_328.setTransform(471.25,914.625);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#E6E6E6").s().p("AA1BlIgqg/IgLgRIg0BQIgqAAIBKhoIhEhhIArAAIAfAvIAOAXIAPgXIAhgvIAqAAIhHBfIBLBqg");
	this.shape_329.setTransform(440.5,914.55);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_330.setTransform(419.825,914.55);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#E6E6E6").s().p("AAlBlIglg/QgKgTgJgFQgIgHgMAAIAABeIgiAAIAAjJIAiAAIAABXQAQAAAIgGQAGgGAMgeQAKgYAGgJQAGgHAIgDQAJgCARAAIAIAAIAAAcIgKAAQgOAAgDAEQgEAEgIAVQgIAUgHAHQgGAIgNAGQAWAFAVAjIAlA/g");
	this.shape_331.setTransform(401.85,914.55);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_332.setTransform(382.725,914.525);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAIgWIAjAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_333.setTransform(361.45,914.525);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#E6E6E6").s().p("AAwBlIAAhSQggAKgaAAQgXAAgSgLQgSgMgGgQQgGgRAAgUIAAg1IAiAAIAAAmQAAAZADALQADALALAIQAMAIAQgBQATABAfgKIAAhbIAiAAIAADJg");
	this.shape_334.setTransform(339.925,914.55);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_335.setTransform(319.475,914.55);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#E6E6E6").s().p("Ag5BlIAAjJIBzAAIAAAcIhRAAIAACtg");
	this.shape_336.setTransform(302.775,914.55);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_337.setTransform(283.375,914.525);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg7CiIgfAAIg4iqIAACqIgiAAIAAjJIA2AAIA1ChIA6ihIAyAAIAADJg");
	this.shape_338.setTransform(259.25,914.55);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#E6E6E6").s().p("AA3BlIAAhPIgTAAQgSAAgJAFQgJAEgQAaIgeAsIgrAAIAlg3QARgZARgDQgegDgOgRQgOgRAAgWQABgbASgQQASgQAjAAIBeAAIAADJgAggg/QgJAKAAANQAAASAOAJQAMAIAhAAIAlAAIAAhDIgwAAQgeAAgJAJg");
	this.shape_339.setTransform(223.6,914.55);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_340.setTransform(203.125,914.55);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_341.setTransform(181.475,914.55);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_342.setTransform(159.75,914.525);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#E6E6E6").s().p("ABeBlIglg/QgLgTgJgFQgIgHgMAAIAABeIgiAAIAAheQgLAAgIAHQgJAFgLATIgkA/IgnAAIAmg/QAWgjAVgFQgOgHgHgIQgGgJgMgeQgEgLgFgDQgFgCgKAAIgKAAIAAgcIAFAAQAUAAAIACQAIADAHAHQAGAIAKAZQAMAdAIAHQAGAGAQAAIAAhXIAiAAIAABXQARAAAHgGQAGgGANgeQAMgeAJgHQAKgIAUAAIANAAIAAAcIgJAAQgOAAgEAEQgEAEgJAVQgHAUgGAHQgHAIgNAGQAVAFAWAjIAmA/g");
	this.shape_343.setTransform(135.95,914.55);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_344.setTransform(111.975,914.55);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAEQAOAGALAMQAKAOAAASQAAAOgGALQgGAKgMAIQAOAEAJANQAKANAAARQgCAdgSAOQgUAOgjAAgAgwBJIAuAAQAbAAALgHQALgGAAgRQAAgKgFgIQgHgIgKgCQgKgDgWAAIgpAAgAgwgPIAlAAQAUAAAJgDQAIgBAHgIQAGgGAAgLQAAgQgMgFQgLgHgaAAIgmAAg");
	this.shape_345.setTransform(91.3,914.55);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E6E6E6").s().p("ABcCsIAAhBIi3AAIAABBIghAAIAAhiIAVAAQAigzAAiZIAAgpICpAAIAAD1IAZAAIAABigAghh8QAAAkgHA9QgGA9gTAoICAAAIAAjUIhgAAg");
	this.shape_346.setTransform(66.525,913.95);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#001728").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_347.setTransform(637.375,858.625);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#001728").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_348.setTransform(615.65,858.625);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#001728").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_349.setTransform(592.975,861.525);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#001728").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_350.setTransform(571.275,858.65);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#001728").s().p("AhSBlIAAjJIBPAAQAcAAAPAEQAOAGAJAMQALANAAATQAAAOgGALQgGAKgMAIQAOAEAJANQAKAMAAASQgCAdgTAOQgTAOgjAAgAgwBJIAuAAQAbAAALgHQALgHABgQQgBgKgFgIQgHgIgKgCQgKgDgWAAIgpAAgAgwgPIAlAAQAUAAAJgDQAIgCAHgHQAGgHAAgKQAAgQgMgFQgLgHgaAAIgmAAg");
	this.shape_351.setTransform(550.6,858.65);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#001728").s().p("AgZAvIAWhdIAdAAIgdBdg");
	this.shape_352.setTransform(523.925,869.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#001728").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_353.setTransform(509.625,858.625);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#001728").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_354.setTransform(490.375,858.65);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#001728").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_355.setTransform(471.375,858.625);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#001728").s().p("AgQCyIAAhfQgKALgNAGQgNAFgOAAQgfAAgZgbQgXgcAAgzQAAgsAVgeQAWgeAkAAQAPAAANAGQAMAGAKAMIAAhgIAhAAIAABgQALgMAMgGQANgGAPAAQAkAAAVAeQAVAeAAAtQAAAvgWAdQgXAdgiAAQgLAAgLgDQgMgEgQgPIAABfgAAcg5QgLATAAAmQAAAuAMAQQANAQATAAQAVAAAPgUQAOgTAAgoQAAgmgNgTQgOgTgVAAQgXAAgMAUgAhhg5QgNATAAAkQAAApAOATQAPATAUAAQAXAAALgTQALgSAAgmQAAgngLgUQgMgUgXAAQgWAAgNAUg");
	this.shape_356.setTransform(444.55,858.675);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgQgTgaAAQgXAAgQAPg");
	this.shape_357.setTransform(882.3,802.725);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#E6E6E6").s().p("ABOBlIAAjJIAjAAIAADJgAhwBlIAAjJIAiAAIAABPIAsAAQApAAAXAQQAXAPAAAdQAAAagTASQgTASgpAAgAhOBJIAkAAQAhAAAMgIQAPgIAAgRQgBgOgJgJQgKgLgjAAIgpAAg");
	this.shape_358.setTransform(857.45,802.75);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_359.setTransform(832.725,802.75);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_360.setTransform(811.175,802.75);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgRgTgaAAQgWAAgQAPg");
	this.shape_361.setTransform(789.45,802.725);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAEQAOAGALAMQAKANAAATQAAAOgGALQgGALgMAGQAOAFAKAMQAJAOAAASQgCAcgSAOQgUAOgjAAgAgwBJIAtAAQAdAAALgHQAKgHAAgQQABgKgHgIQgGgIgKgCQgKgDgWAAIgpAAgAgwgPIAkAAQAWAAAIgCQAIgDAGgGQAHgIAAgKQAAgQgLgFQgMgHgaAAIgmAAg");
	this.shape_362.setTransform(769.35,802.75);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_363.setTransform(749.525,802.75);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_364.setTransform(731.425,802.725);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_365.setTransform(710.15,802.725);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#E6E6E6").s().p("AAwBlIAAhSQggAKgaAAQgXAAgSgLQgSgMgGgQQgGgRAAgUIAAg1IAiAAIAAAmQAAAZADALQADALALAIQAMAIAQgBQATABAfgJIAAhcIAiAAIAADJg");
	this.shape_366.setTransform(688.625,802.75);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_367.setTransform(668.975,802.725);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#E6E6E6").s().p("AAkBlIgkg/QgLgSgHgHQgJgFgLAAIAABdIgjAAIAAjJIAjAAIAABXQAQAAAGgGQAHgGALgeQAKgYAHgJQAGgHAJgDQAHgCATAAIAGAAIAAAcIgJAAQgNAAgFAEQgDAEgJAVQgIATgGAIQgGAIgNAGQAWAFAUAjIAmA/g");
	this.shape_368.setTransform(650.3,802.75);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAjAAIAABPIArAAQApAAAYAQQAWAPAAAdQAAAagTASQgTASgqAAgAgvBJIAkAAQAfAAAOgIQAOgIAAgRQAAgOgLgJQgKgLgiAAIgoAAg");
	this.shape_369.setTransform(620.15,802.75);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_370.setTransform(600.425,802.75);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#E6E6E6").s().p("AA4BlIAAhPIgVAAQgRAAgKAFQgIAFgQAZIgeAsIgrAAIAmg3QARgZAQgDQgegEgOgQQgOgRABgWQAAgbASgQQASgQAkAAIBcAAIAADJgAggg+QgJAJAAANQAAASANAIQAOAJAfAAIAnAAIAAhDIgyAAQgdAAgJAKg");
	this.shape_371.setTransform(579.95,802.75);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg7CiIgfAAIg4iqIAACqIgiAAIAAjJIA2AAIA1ChIA6ihIAxAAIAADJg");
	this.shape_372.setTransform(557,802.75);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_373.setTransform(532.625,802.725);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_374.setTransform(511.375,802.75);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_375.setTransform(479.125,802.725);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_376.setTransform(457.625,802.75);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAjAAIAABPIArAAQApAAAYAQQAWAPAAAdQAAAagTASQgTASgqAAgAgvBJIAkAAQAfAAAOgIQAOgIAAgRQAAgOgLgJQgKgLgiAAIgoAAg");
	this.shape_377.setTransform(426.65,802.75);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_378.setTransform(406.925,802.75);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_379.setTransform(388.35,802.725);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#E6E6E6").s().p("AhiBkIAAgdIAQAAQALAAAEgCQAFgCABgFQACgEAAgbIAAiEICdAAIAADJIgiAAIAAitIhaAAIAABkQAAAjgCAMQgCALgKAIQgLAJgTAAIgcgCg");
	this.shape_380.setTransform(365.2,802.825);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_381.setTransform(346.825,802.75);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_382.setTransform(327.775,802.725);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#E6E6E6").s().p("AAwBlIAAhSQggAKgaAAQgXAAgSgLQgSgMgGgQQgGgRAAgUIAAg1IAiAAIAAAmQAAAZADALQADALALAIQAMAIAQgBQATABAfgJIAAhcIAiAAIAADJg");
	this.shape_383.setTransform(306.275,802.75);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_384.setTransform(287.1,802.725);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_385.setTransform(265.825,802.75);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_386.setTransform(244.275,802.725);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#E6E6E6").s().p("AhNAsIAggHQAFAUANALQAOAKAQAAQARAAAMgKQALgJAAgQQAAgLgHgJQgHgJgIgCQgIgCgVAAIgIAAIAAgaQAVAAAIgCQAIgBAHgIQAHgHAAgMQAAgOgJgIQgKgIgOAAQgcAAgMAiIgggGQAPg5A5AAQAgAAATASQASASAAAYQAAAZgYAPQAPAHAIANQAIAMAAASQAAAbgUARQgUARgkAAQhEAAgLg+g");
	this.shape_387.setTransform(224.375,802.725);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_388.setTransform(850.675,746.825);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#E6E6E6").s().p("AhhBkIAAgdIAOAAQAMAAAEgCQAFgCABgFQABgEABgbIAAiEICdAAIAADJIghAAIAAitIhaAAIAABkQgBAjgCAMQgCALgKAIQgKAJgUAAIgbgCg");
	this.shape_389.setTransform(827.55,746.925);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_390.setTransform(806.275,746.825);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#E6E6E6").s().p("AhNAsIAggHQAFAUANALQAOAKAQAAQARAAAMgKQALgJAAgQQAAgLgHgJQgHgJgIgCQgIgCgVAAIgIAAIAAgaQAVAAAIgCQAIgBAHgIQAHgHAAgMQAAgOgJgIQgKgIgOAAQgcAAgMAiIgggGQAPg5A5AAQAgAAATASQASASAAAYQAAAZgYAPQAPAHAIANQAIAMAAASQAAAbgUARQgUARgkAAQhEAAgLg+g");
	this.shape_391.setTransform(786.375,746.825);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAiAAIAABPIAsAAQAqAAAWAQQAXAPAAAdQAAAagTASQgTASgqAAgAgwBJIAkAAQAgAAAOgIQAOgIAAgRQAAgOgKgJQgLgLgiAAIgpAAg");
	this.shape_392.setTransform(757.45,746.85);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#E6E6E6").s().p("AhhBkIAAgdIAPAAQAKAAAFgCQAEgCACgFQACgEgBgbIAAiEICfAAIAADJIgiAAIAAitIhaAAIAABkQAAAjgCAMQgDALgKAIQgKAJgUAAIgbgCg");
	this.shape_393.setTransform(734.25,746.925);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_394.setTransform(713.025,746.85);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_395.setTransform(693.225,746.85);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_396.setTransform(675.125,746.825);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_397.setTransform(643.175,746.85);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#E6E6E6").s().p("AhKCKIgDghQALAEAIAAQALAAAIgEQAGgEAEgGIALgaIADgJIhNjJIAlAAIAqB1QAJAWAFAYQAGgXAIgWIArh2IAjAAIhODMQgLAigHANQgJARgLAHQgMAIgQAAQgKAAgNgEg");
	this.shape_398.setTransform(612,750.95);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_399.setTransform(592.725,746.85);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_400.setTransform(573.725,746.825);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_401.setTransform(553.325,746.825);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_402.setTransform(532.025,746.825);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAfAAIAAAaQALgQAOgHQAOgIATAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgMAYQgLAZgUANQgWANgXAAQgRAAgNgHQgOgHgIgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAWAAQAWAAARgTQAQgUAAgnQgBgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_403.setTransform(510.95,750.475);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#E6E6E6").s().p("AAlBlIglg/QgLgSgHgHQgJgFgMAAIAABdIgiAAIAAjJIAiAAIAABXQARAAAHgGQAGgGAMgeQAKgYAGgJQAGgHAIgCQAJgDARAAIAHAAIAAAcIgJAAQgOAAgEAEQgEAEgHAVQgJATgGAJQgGAHgNAGQAVAFAWAjIAlA/g");
	this.shape_404.setTransform(492.5,746.85);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAiAAIAABPIAsAAQAqAAAWAQQAXAPAAAdQAAAagTASQgTASgqAAgAgwBJIAkAAQAgAAAOgIQAOgIAAgRQAAgOgKgJQgLgLgiAAIgpAAg");
	this.shape_405.setTransform(462.35,746.85);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_406.setTransform(442.625,746.85);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#E6E6E6").s().p("AhKCKIgEghQAMAEAIAAQAMAAAGgEQAHgEAEgGIALgaIADgJIhNjJIAlAAIAqB1QAJAWAFAYQAGgXAIgWIArh2IAjAAIhODMQgLAigHANQgIARgNAHQgMAIgPAAQgLAAgMgEg");
	this.shape_407.setTransform(424.1,750.95);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_408.setTransform(403.425,746.85);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#E6E6E6").s().p("AAkBlIgkg/QgKgSgJgHQgIgFgLAAIAABdIgjAAIAAjJIAjAAIAABXQAPAAAIgGQAGgGAMgeQAJgYAHgJQAGgHAIgCQAJgDASAAIAHAAIAAAcIgKAAQgOAAgDAEQgFAEgIAVQgHATgHAJQgGAHgNAGQAWAFAUAjIAmA/g");
	this.shape_409.setTransform(385.55,746.85);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQAKgQAOgHQAOgIATAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgMAYQgLAZgUANQgWANgXAAQgQAAgOgHQgOgHgIgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAARgTQAQgUAAgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_410.setTransform(365.25,750.475);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_411.setTransform(342.95,746.825);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#E6E6E6").s().p("AAwBlIAAhSQggALgagBQgXAAgSgLQgSgMgGgQQgGgRAAgVIAAg0IAiAAIAAAmQAAAZADALQADALALAIQAMAIAQAAQATgBAfgIIAAhcIAiAAIAADJg");
	this.shape_412.setTransform(321.425,746.85);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_413.setTransform(299.975,749.725);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_414.setTransform(279.125,746.825);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_415.setTransform(257.825,746.85);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_416.setTransform(996.225,690.925);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#E6E6E6").s().p("AAkBlIgkg/QgKgSgJgHQgIgFgLAAIAABdIgjAAIAAjJIAjAAIAABXQAQAAAGgGQAHgHALgeQAKgYAHgHQAGgIAJgCQAHgDATAAIAHAAIAAAcIgKAAQgOAAgDAEQgFAEgIAVQgHATgHAJQgGAHgNAGQAWAFAUAjIAmA/g");
	this.shape_417.setTransform(977.55,690.95);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#E6E6E6").s().p("AAxBlIAAiYIheCYIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_418.setTransform(956.675,690.95);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_419.setTransform(935.025,690.95);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_420.setTransform(912.325,693.825);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#E6E6E6").s().p("AhNAsIAggHQAFAUANALQAOAKAQAAQARAAAMgKQALgJAAgQQAAgLgHgJQgHgJgIgCQgIgCgVAAIgIAAIAAgaQAVAAAIgCQAIgBAHgIQAHgHAAgMQAAgOgJgIQgKgIgOAAQgcAAgMAiIgggGQAPg5A5AAQAgAAATASQASASAAAYQAAAZgYAPQAPAHAIANQAIAMAAASQAAAbgUARQgUARgkAAQhEAAgLg+g");
	this.shape_421.setTransform(893.225,690.925);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_422.setTransform(873.975,690.925);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQALgQAOgHQANgIATAAQAaAAAUANQATAOALAYQAKAYAAAdQAAAfgLAYQgLAZgWANQgVANgXAAQgRAAgNgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQAQgUAAgnQAAgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_423.setTransform(852.9,694.575);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_424.setTransform(831.025,690.95);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#E6E6E6").s().p("AA0BlIgpg/IgLgRIg0BQIgpAAIBJhoIhEhhIAqAAIAgAvIAOAXIAPgWIAigwIAoAAIhFBfIBLBqg");
	this.shape_425.setTransform(800,690.95);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_426.setTransform(779.275,690.925);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_427.setTransform(760.075,690.95);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_428.setTransform(740.375,690.95);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_429.setTransform(718.65,690.925);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg7CiIgfAAIg4iqIAACqIgiAAIAAjJIA2AAIA1CgIA6igIAxAAIAADJg");
	this.shape_430.setTransform(694.5,690.95);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_431.setTransform(670.175,690.925);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg7CiIgfAAIg4iqIAACqIgiAAIAAjJIA2AAIA1CgIA6igIAxAAIAADJg");
	this.shape_432.setTransform(646,690.95);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#E6E6E6").s().p("AA0BlIgpg/IgLgRIg0BQIgpAAIBJhoIhEhhIAqAAIAgAvIAOAXIAPgWIAigwIAoAAIhGBfIBMBqg");
	this.shape_433.setTransform(612.15,690.95);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#E6E6E6").s().p("ABPBlIAAjJIAiAAIAADJgAhwBlIAAjJIAiAAIAABPIArAAQAqAAAXAQQAXAPAAAdQAAAagTASQgUASgpAAgAhOBJIAkAAQAhAAANgIQAOgIgBgRQABgOgLgJQgJgLgjAAIgpAAg");
	this.shape_434.setTransform(588.3,690.95);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAEQAOAFAJANQALAOAAARQAAAPgGALQgGALgMAGQAOAFAJAMQAKANAAATQgCAcgTAOQgTAOgjAAgAgwBJIAuAAQAcAAAKgHQALgGABgSQgBgJgFgIQgHgJgKgCQgKgCgWAAIgpAAgAgwgPIAlAAQAUAAAJgCQAIgCAHgHQAGgHAAgKQAAgQgMgHQgLgGgaAAIgmAAg");
	this.shape_435.setTransform(564.55,690.95);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_436.setTransform(542.7,690.925);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#E6E6E6").s().p("AAwBlIAAhRQggAKgagBQgXAAgSgLQgSgMgGgQQgGgRAAgVIAAg0IAiAAIAAAmQAAAZADALQADALALAJQAMAGAQABQATgBAfgIIAAhcIAiAAIAADJg");
	this.shape_437.setTransform(521.175,690.95);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#E6E6E6").s().p("AgXBRQgXgZgCgsIgqAAIAABZIgiAAIAAjJIAiAAIAABVIAqAAQAEgsAXgXQAVgXAkAAQAfAAASANQARAMAMAWQALAWAAAkQAAA0gXAbQgYAbgpAAQglAAgXgZgAAAg4QgOATAAAjQAAApAOATQANAUAYAAQAXAAAPgSQAPgSAAgoQAAgmgNgUQgNgTgaAAQgZAAgNATg");
	this.shape_438.setTransform(498.375,690.925);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#E6E6E6").s().p("AhiBkIAAgdIAQAAQALAAAEgCQAEgCACgFQABgEAAgbIAAiEICeAAIAADJIgiAAIAAitIhaAAIAABkQAAAjgCAMQgCALgKAIQgLAJgTAAIgcgCg");
	this.shape_439.setTransform(470.85,691.025);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#E6E6E6").s().p("AAlBlIglg/QgLgSgHgHQgJgFgMAAIAABdIgiAAIAAjJIAiAAIAABXQARAAAHgGQAGgHALgeQALgYAGgHQAGgIAJgCQAHgDASAAIAHAAIAAAcIgJAAQgNAAgFAEQgEAEgHAVQgJATgGAJQgGAHgNAGQAVAFAWAjIAlA/g");
	this.shape_440.setTransform(453,690.95);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_441.setTransform(421.375,690.925);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_442.setTransform(399.875,690.95);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_443.setTransform(369.475,690.95);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_444.setTransform(349.775,690.95);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_445.setTransform(328.05,690.925);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#E6E6E6").s().p("ABACCIAAg6IicAAIAAjJIAiAAIAACtIBeAAIAAitIAiAAIAACtIAXAAIAABWg");
	this.shape_446.setTransform(307.325,693.825);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#E6E6E6").s().p("AAlBlIglg/QgLgSgHgHQgJgFgMAAIAABdIgiAAIAAjJIAiAAIAABXQARAAAGgGQAHgHALgeQALgYAGgHQAGgIAJgCQAHgDASAAIAHAAIAAAcIgJAAQgNAAgFAEQgEAEgHAVQgJATgGAJQgGAHgNAGQAVAFAWAjIAlA/g");
	this.shape_447.setTransform(288.3,690.95);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_448.setTransform(267.375,690.925);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAiAAIAABPIAsAAQAqAAAWAQQAXAPAAAdQAAAagTASQgTASgqAAgAgwBJIAkAAQAgAAAOgIQAOgIAAgRQAAgOgKgJQgLgLgiAAIgpAAg");
	this.shape_449.setTransform(236.45,690.95);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_450.setTransform(216.725,690.95);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_451.setTransform(197.675,690.925);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#E6E6E6").s().p("AhiBkIAAgdIAQAAQAKAAAFgCQAEgCACgFQACgEgBgbIAAiEICfAAIAADJIgjAAIAAitIhaAAIAABkQAAAjgBAMQgDALgKAIQgLAJgTAAIgcgCg");
	this.shape_452.setTransform(174.55,691.025);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgRgTgaAAQgWAAgQAPg");
	this.shape_453.setTransform(154.6,690.925);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_454.setTransform(131.925,693.825);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_455.setTransform(111.975,690.925);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#E6E6E6").s().p("AgOBfQgGgGAAgJQAAgIAGgGQAGgHAIAAQAJAAAGAHQAGAGAAAIQAAAJgGAGQgGAHgJAAQgIAAgGgHgAgOhBQgGgGAAgIQAAgKAGgFQAGgHAIAAQAJAAAGAHQAGAFAAAKQAAAIgGAGQgGAHgJAAQgIAAgGgHg");
	this.shape_456.setTransform(655.775,635.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg7CiIgeAAIg5ipIAACpIghAAIAAjJIA1AAIA1CgIA6igIAxAAIAADJg");
	this.shape_457.setTransform(638.1,635.05);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_458.setTransform(613.725,635.025);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAEALAOQAKANAAARQAAAPgGALQgGAKgMAHQAOAEAKANQAJANAAATQgCAcgSAOQgUAOgjAAgAgwBJIAtAAQAcAAAMgHQAKgGABgSQAAgJgHgIQgGgJgKgCQgKgCgVAAIgqAAgAgwgPIAkAAQAVAAAJgCQAIgDAGgGQAHgIAAgJQAAgRgLgGQgLgGgbAAIgmAAg");
	this.shape_459.setTransform(593.65,635.05);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_460.setTransform(563.125,635.05);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAANgKQAOgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_461.setTransform(544.55,635.025);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#E6E6E6").s().p("ABeBlIglg+QgLgUgIgGQgJgFgLgBIAABeIgiAAIAAheQgMABgJAFQgIAGgLAUIglA+IglAAIAlg+QAVgkAXgFQgQgHgFgIQgHgJgMgfQgEgKgFgCQgFgDgKAAIgJAAIAAgcIAEAAQAUAAAIACQAIACAGAJQAHAHAKAYQANAeAGAGQAHAHARAAIAAhXIAiAAIAABXQAQAAAGgGQAHgGANgfQAMgcAKgJQAJgHAUAAIAMAAIAAAcIgJAAQgOAAgDAEQgEAEgIAVQgIAUgHAIQgGAHgOAGQAXAFAVAkIAlA+g");
	this.shape_462.setTransform(520.75,635.05);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_463.setTransform(497.225,635.025);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5ipIAACpIghAAIAAjJIA1AAIA1CgIA6igIAyAAIAADJg");
	this.shape_464.setTransform(473.05,635.05);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_465.setTransform(448.725,635.025);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_466.setTransform(427.425,635.05);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_467.setTransform(1005.325,579.15);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgZAAQgXAAgQAPg");
	this.shape_468.setTransform(986.75,579.125);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAEAKAOQALANAAARQAAAPgGALQgGAKgMAIQAOADAJAOQAKANAAARQgCAdgTAOQgSAOgkAAgAgwBJIAuAAQAbAAALgHQALgHAAgRQAAgJgFgIQgHgJgKgCQgKgCgWAAIgpAAgAgwgPIAlAAQAUAAAJgDQAIgBAHgIQAGgHAAgJQAAgRgMgGQgLgGgaAAIgmAAg");
	this.shape_469.setTransform(966.65,579.15);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_470.setTransform(946.575,579.125);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#E6E6E6").s().p("AAxCLIAAiYIheCYIglAAIAAjIIAiAAIAACZIBeiZIAlAAIAADIgAgjhmQgOgNgDgYIAXAAQADANAIAHQAIAGAMAAQAQABAIgHQAHgGADgOIAXAAQgCAYgPANQgPANgYAAQgXAAgPgNg");
	this.shape_471.setTransform(914.625,575.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#E6E6E6").s().p("ABOBlIAAjJIAjAAIAADJgAhwBlIAAjJIAiAAIAABPIAsAAQApAAAXARQAXAPAAAdQAAAZgTASQgTASgqAAgAhOBJIAkAAQAhAAANgIQANgIAAgRQAAgOgKgKQgJgKgjAAIgpAAg");
	this.shape_472.setTransform(889.65,579.15);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_473.setTransform(864.925,579.15);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_474.setTransform(843.375,579.15);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_475.setTransform(821.65,579.125);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#E6E6E6").s().p("AhhBkIAAgdIAOAAQALAAAFgCQAEgCACgFQABgEABgbIAAiEICeAAIAADJIgiAAIAAitIhaAAIAABkQAAAjgCAMQgDALgKAIQgKAJgUAAIgbgCg");
	this.shape_476.setTransform(798.5,579.225);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAFQAOAEAJAOQALANAAARQAAAPgGALQgGAKgMAIQAOADAKAOQAJANAAARQgCAdgTAOQgTAOgjAAgAgwBJIAuAAQAcAAAKgHQALgHABgRQgBgJgFgIQgHgJgKgCQgKgCgVAAIgqAAgAgwgPIAkAAQAWAAAIgDQAIgBAGgIQAHgHAAgJQAAgRgMgGQgKgGgbAAIgmAAg");
	this.shape_477.setTransform(779.3,579.15);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_478.setTransform(757.425,579.125);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_479.setTransform(738.225,579.15);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_480.setTransform(720.125,579.125);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_481.setTransform(700.625,579.125);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_482.setTransform(679.325,579.125);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAfAAIAAAaQAMgQAOgHQAOgIASAAQAaAAAUANQAUAOAKAYQAKAYAAAdQAAAfgLAYQgLAZgWANQgVANgXAAQgRAAgNgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAWAAQAWAAAQgTQARgUgBgnQAAgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_483.setTransform(658.25,582.775);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_484.setTransform(625.275,579.125);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_485.setTransform(603.725,579.15);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAjAAIAABPIArAAQApAAAXARQAXAPAAAdQAAAZgTASQgTASgqAAgAgvBJIAkAAQAfAAAOgIQAOgIAAgRQAAgOgLgKQgKgKgiAAIgoAAg");
	this.shape_486.setTransform(583.45,579.15);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#E6E6E6").s().p("AhhBkIAAgdIAOAAQAMAAAEgCQAFgCABgFQABgEABgbIAAiEICdAAIAADJIghAAIAAitIhaAAIAABkQgBAjgCAMQgCALgKAIQgKAJgUAAIgbgCg");
	this.shape_487.setTransform(560.25,579.225);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_488.setTransform(538.975,579.125);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_489.setTransform(517.475,579.15);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_490.setTransform(495.775,579.125);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#E6E6E6").s().p("AAxBlIAAiYIheCYIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_491.setTransform(474.075,579.15);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_492.setTransform(454.025,579.125);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_493.setTransform(434.525,579.125);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgRgTgaAAQgWAAgQAPg");
	this.shape_494.setTransform(413.25,579.125);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#E6E6E6").s().p("AgQCyIAAhfQgLALgMAGQgMAFgPAAQgfAAgYgbQgYgcAAgzQAAgsAWgeQAVgeAkAAQAQAAAMAGQAMAGAKAMIAAhgIAhAAIAABgQALgMANgGQAMgGAPAAQAkAAAVAeQAVAeAAAtQAAAvgXAdQgWAdgiAAQgLAAgMgDQgLgEgQgPIAABfgAAdg5QgMATAAAmQAAAuANAQQAMAQATAAQAVAAAPgUQAPgTAAgoQAAgmgOgTQgOgTgVAAQgXAAgLAUgAhhg5QgOATAAAkQAAApAPATQAOATAWAAQAWAAALgTQALgSAAgmQAAgngMgUQgLgUgYAAQgUAAgOAUg");
	this.shape_495.setTransform(386.45,579.175);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_496.setTransform(359.475,579.125);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQAKgQAOgHQAOgIATAAQAaAAAUANQATAOALAYQAKAYAAAdQAAAfgMAYQgKAZgVANQgWANgXAAQgQAAgOgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQAQgUABgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_497.setTransform(338.35,582.775);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_498.setTransform(316.475,579.15);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#E6E6E6").s().p("AAxBlIAAiYIheCYIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_499.setTransform(284.275,579.15);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_500.setTransform(251.775,579.125);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_501.setTransform(230.225,579.15);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAjAAIAABPIArAAQApAAAYARQAWAPAAAdQAAAZgTASQgTASgqAAgAgvBJIAkAAQAfAAAOgIQAOgIAAgRQAAgOgLgKQgKgKgiAAIgoAAg");
	this.shape_502.setTransform(209.95,579.15);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#E6E6E6").s().p("AhhBkIAAgdIAOAAQAMAAAEgCQAFgCABgFQABgEABgbIAAiEICdAAIAADJIghAAIAAitIhaAAIAABkQgBAjgCAMQgCALgKAIQgKAJgUAAIgbgCg");
	this.shape_503.setTransform(186.75,579.225);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#E6E6E6").s().p("AAxBlIAAiYIheCYIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_504.setTransform(165.525,579.15);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAEAKAOQALANAAARQAAAPgGALQgGAKgMAIQAOADAJAOQAKANAAARQgCAdgSAOQgUAOgjAAgAgwBJIAuAAQAbAAALgHQALgHAAgRQAAgJgFgIQgHgJgKgCQgKgCgWAAIgpAAgAgwgPIAlAAQAUAAAJgDQAIgBAHgIQAGgHAAgJQAAgRgMgGQgLgGgaAAIgmAAg");
	this.shape_505.setTransform(144.85,579.15);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_506.setTransform(122.975,579.125);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAfAAIAAAaQALgQAOgHQAOgIATAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgMAYQgLAZgUANQgWANgXAAQgRAAgNgHQgOgHgIgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAWAAQAWAAARgTQAQgUAAgnQgBgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_507.setTransform(101.9,582.775);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#E6E6E6").s().p("ABJCLIAAj0IiRAAIAAD0IglAAIAAkWIDbAAIAAEWg");
	this.shape_508.setTransform(76.525,575.3);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#E6E6E6").s().p("AgOCEQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGgAgNA6IgDjDIAgAAIgEDDg");
	this.shape_509.setTransform(799.6,463.975);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg7CiIgfAAIg4ipIAACpIgiAAIAAjJIA2AAIA1CgIA6igIAxAAIAADJg");
	this.shape_510.setTransform(780.65,467.35);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#E6E6E6").s().p("ABPBlIAAjJIAiAAIAADJgAhwBlIAAjJIAiAAIAABPIAsAAQApAAAXARQAXAPAAAdQAAAZgTASQgTASgpAAgAhOBJIAkAAQAhAAAMgIQAOgIABgRQgBgNgJgLQgKgKgjAAIgpAAg");
	this.shape_511.setTransform(753.15,467.35);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgeAAIg4ipIAACpIgiAAIAAjJIA2AAIA1CgIA6igIAyAAIAADJg");
	this.shape_512.setTransform(725.8,467.35);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgZAAQgXAAgQAPg");
	this.shape_513.setTransform(701.45,467.325);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_514.setTransform(679.725,467.325);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAFQAOAFAKANQALANAAASQAAAOgGALQgGAKgMAIQAOADAJAOQAKANAAARQgCAdgSAOQgUAOgjAAgAgwBJIAuAAQAbAAALgHQALgGAAgRQAAgKgFgIQgHgJgKgBQgKgDgWAAIgpAAgAgwgPIAlAAQAUAAAJgDQAIgBAHgIQAGgGAAgLQAAgQgMgFQgLgHgaAAIgmAAg");
	this.shape_515.setTransform(659.65,467.35);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#E6E6E6").s().p("ABPBlIAAjJIAiAAIAADJgAhwBlIAAjJIAiAAIAABPIArAAQAqAAAXARQAXAPAAAdQAAAZgTASQgUASgpAAgAhOBJIAkAAQAhAAANgIQAOgIgBgRQABgNgLgLQgJgKgjAAIgpAAg");
	this.shape_516.setTransform(634.65,467.35);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#E6E6E6").s().p("Ag1CBQgUgRgLgZQgKgaAAg/QAAhQAbgcQAbgcA3AAQAjAAAFgBQAFgBABgEIAeAAQgCAVgHAIQgHAIgKACQgMACgfAAQgqAAgPAIQgQAJgGASQgHASgBAcQANgTARgKQASgJAUAAQAoAAAaAbQAaAbAAAuQAAAjgNAXQgNAXgSAMQgSAMgfAAQgjAAgUgQgAgpgLQgPAVAAAjQAAAjARATQARATAYAAQAaAAAQgWQAPgWAAgjQAAgggOgTQgPgUgcAAQgbAAgQAVg");
	this.shape_517.setTransform(609.625,463.375);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_518.setTransform(587.375,467.325);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#E6E6E6").s().p("AhNAsIAggHQAFAUANALQAOAKAQAAQARAAAMgKQALgJAAgQQAAgLgHgJQgHgJgIgCQgIgCgVAAIgIAAIAAgaQAVAAAIgCQAIgBAHgIQAHgHAAgMQAAgOgJgIQgKgIgOAAQgcAAgMAiIgggGQAPg5A5AAQAgAAATASQASASAAAYQAAAZgYAPQAPAHAIANQAIAMAAASQAAAbgUARQgUARgkAAQhEAAgLg+g");
	this.shape_519.setTransform(567.475,467.325);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAIgWIAjAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_520.setTransform(548.65,467.325);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_521.setTransform(527.125,467.35);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_522.setTransform(494.725,467.35);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5ipIAACpIghAAIAAjJIA1AAIA1CgIA6igIAyAAIAADJg");
	this.shape_523.setTransform(459.75,467.35);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#E6E6E6").s().p("ABPBlIAAjJIAiAAIAADJgAhwBlIAAjJIAiAAIAABPIArAAQAqAAAXARQAXAPAAAdQAAAZgTASQgUASgpAAgAhOBJIAkAAQAhAAANgIQAOgIgBgRQABgNgLgLQgJgKgjAAIgpAAg");
	this.shape_524.setTransform(432.25,467.35);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#E6E6E6").s().p("AAvBlIAAhZIheAAIAABZIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_525.setTransform(407.525,467.35);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_526.setTransform(387.825,467.35);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_527.setTransform(369.725,467.325);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_528.setTransform(348.475,467.325);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_529.setTransform(325.775,470.225);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_530.setTransform(304.025,467.325);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAfAAIAAAaQAMgQAOgHQAOgIASAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgLAYQgLAZgWANQgVANgXAAQgRAAgNgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAWAAQAWAAAQgTQARgUgBgnQAAgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_531.setTransform(282.95,470.975);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAIgWIAjAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_532.setTransform(895.15,411.425);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_533.setTransform(873.475,411.45);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_534.setTransform(853.675,411.45);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#E6E6E6").s().p("AA3BlIAAhPIgUAAQgRAAgKAFQgIAEgQAaIgeAsIgrAAIAlg3QARgZARgDQgegDgOgRQgOgRABgWQAAgbASgQQATgQAjAAIBcAAIAADJgAggg/QgJAKAAANQAAASANAJQAOAIAfAAIAmAAIAAhDIgxAAQgdAAgJAJg");
	this.shape_535.setTransform(833.2,411.45);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_536.setTransform(812.725,411.45);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQAKgQAOgHQAOgIATAAQAaAAAUANQATAOALAYQAKAYAAAdQAAAfgMAYQgKAZgVANQgWANgXAAQgQAAgOgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQAQgUABgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_537.setTransform(791.5,415.075);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_538.setTransform(769.625,411.45);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_539.setTransform(748.125,411.425);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAfAAIAAAaQAMgQAOgHQAOgIASAAQAaAAAUANQAUAOAKAYQAKAYAAAdQAAAfgLAYQgLAZgWANQgVANgXAAQgRAAgNgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAWAAQAWAAAQgTQARgUgBgnQAAgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_540.setTransform(727,415.075);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_541.setTransform(704.7,411.425);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg7CiIgfAAIg4iqIAACqIgiAAIAAjJIA2AAIA1ChIA6ihIAxAAIAADJg");
	this.shape_542.setTransform(680.55,411.45);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgQgTgaAAQgXAAgQAPg");
	this.shape_543.setTransform(645.5,411.425);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#E6E6E6").s().p("AiBBlIAAjJIAjAAIAACsIBNAAIAAisIAiAAIAACsIBOAAIAAisIAjAAIAADJg");
	this.shape_544.setTransform(619.1,411.45);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_545.setTransform(592.475,411.425);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAEQAOAFAKANQAKAOAAASQAAAOgGALQgGAKgMAIQAOAEAKANQAJANAAARQgCAdgTAOQgTAOgjAAgAgwBJIAtAAQAcAAAMgHQAKgGABgRQAAgKgHgIQgGgIgKgCQgKgDgVAAIgqAAgAgwgPIAkAAQAVAAAJgDQAIgBAGgIQAHgGAAgLQAAgQgLgFQgLgHgbAAIgmAAg");
	this.shape_546.setTransform(572.4,411.45);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAjAAIAABPIArAAQApAAAYARQAWAOAAAeQAAAZgTASQgTASgqAAgAgvBJIAkAAQAfAAAOgIQAOgIAAgRQAAgNgLgKQgKgLgiAAIgoAAg");
	this.shape_547.setTransform(541.3,411.45);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_548.setTransform(521.575,411.45);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_549.setTransform(502.525,411.425);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#E6E6E6").s().p("AhiBkIAAgdIAQAAQALAAAEgCQAEgCACgFQABgEAAgbIAAiEICeAAIAADJIgiAAIAAitIhaAAIAABkQAAAjgCAMQgCALgKAIQgLAJgTAAIgcgCg");
	this.shape_550.setTransform(479.4,411.525);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_551.setTransform(459.45,411.425);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_552.setTransform(436.775,414.325);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_553.setTransform(416.825,411.425);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#E6E6E6").s().p("AgzAMIAAgXIBnAAIAAAXg");
	this.shape_554.setTransform(388.15,410.675);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAiAAIAABPIAsAAQAqAAAWARQAXAOAAAeQAAAZgTASQgTASgqAAgAgwBJIAkAAQAgAAAOgIQAOgIAAgRQAAgNgKgKQgLgLgiAAIgpAAg");
	this.shape_555.setTransform(360,411.45);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#E6E6E6").s().p("AhhBkIAAgdIAOAAQALAAAFgCQAEgCACgFQABgEABgbIAAiEICeAAIAADJIgiAAIAAitIhaAAIAABkQAAAjgCAMQgDALgKAIQgKAJgUAAIgbgCg");
	this.shape_556.setTransform(336.8,411.525);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAANgKQAOgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_557.setTransform(316.85,411.425);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#E6E6E6").s().p("ABACCIAAg6IicAAIAAjJIAiAAIAACtIBeAAIAAitIAiAAIAACtIAXAAIAABWg");
	this.shape_558.setTransform(296.125,414.325);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_559.setTransform(262.525,411.425);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#E6E6E6").s().p("AiBBlIAAjJIAjAAIAACsIBNAAIAAisIAiAAIAACsIBOAAIAAisIAjAAIAADJg");
	this.shape_560.setTransform(236.15,411.45);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_561.setTransform(209.525,411.425);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#E6E6E6").s().p("ABJCMIAAiEIiQAAIAACEIglAAIAAkWIAlAAIAAByICQAAIAAhyIAlAAIAAEWg");
	this.shape_562.setTransform(184.7,407.6);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#E6E6E6").s().p("AgOCEQgGgGAAgJQAAgJAGgGQAGgGAIAAQAIAAAHAGQAGAGAAAJQAAAJgGAGQgHAGgIAAQgIAAgGgGgAgNA6IgDjDIAgAAIgDDDg");
	this.shape_563.setTransform(824.5,352.175);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgRgTgaAAQgWAAgQAPg");
	this.shape_564.setTransform(808,355.525);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_565.setTransform(786.325,355.55);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_566.setTransform(764.675,355.55);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_567.setTransform(742.95,355.525);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#E6E6E6").s().p("ABwCCIAAg6Ij8AAIAAjJIAiAAIAACtIBOAAIAAitIAiAAIAACtIBOAAIAAitIAiAAIAACtIAXAAIAABWg");
	this.shape_568.setTransform(717.325,358.425);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAIgWIAjAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgQgTgaAAQgXAAgQAPg");
	this.shape_569.setTransform(689.6,355.525);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAEQAOAGAJAMQALANAAATQAAAOgGALQgGAKgMAIQAOAEAKANQAJANAAASQgCAcgTAOQgTAOgjAAgAgwBJIAtAAQAdAAAKgHQALgHABgQQgBgKgGgIQgGgIgKgCQgKgDgVAAIgqAAgAgwgPIAkAAQAWAAAIgDQAIgBAHgIQAGgHAAgKQAAgQgMgFQgKgHgbAAIgmAAg");
	this.shape_570.setTransform(669.5,355.55);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_571.setTransform(649.425,355.525);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_572.setTransform(628.175,355.525);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_573.setTransform(595.75,355.525);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_574.setTransform(574.075,355.525);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAEQAOAGAKAMQAKANAAATQAAAOgGALQgGAKgMAIQAOAEAKANQAJANAAASQgCAcgTAOQgTAOgjAAgAgwBJIAtAAQAcAAAMgHQAKgHABgQQAAgKgHgIQgGgIgKgCQgKgDgVAAIgqAAgAgwgPIAkAAQAVAAAJgDQAIgBAGgIQAHgHAAgKQAAgQgLgFQgLgHgbAAIgmAAg");
	this.shape_575.setTransform(553.95,355.55);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_576.setTransform(532.125,355.55);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_577.setTransform(512.075,355.525);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_578.setTransform(490.775,355.525);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAfAAIAAAaQAMgQAOgHQAOgIASAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgLAYQgLAZgWANQgVANgXAAQgRAAgNgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAWAAQAWAAAQgTQARgUgBgnQAAgngPgTQgQgTgVAAQgWAAgRAUg");
	this.shape_579.setTransform(469.7,359.175);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#E6E6E6").s().p("AAkBlIgkg/QgKgSgJgGQgIgHgMABIAABdIgiAAIAAjJIAiAAIAABXQAQAAAIgGQAGgGAMgeQAJgYAHgJQAGgHAIgDQAJgCARAAIAIAAIAAAcIgKAAQgOAAgDAEQgFAEgIAVQgHAUgHAHQgGAIgNAGQAWAFAUAjIAmA/g");
	this.shape_580.setTransform(451.25,355.55);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#E6E6E6").s().p("AA4BlIAAhPIgUAAQgTAAgIAFQgJAEgQAaIgeAsIgqAAIAlg3QARgZAQgDQgdgEgOgQQgOgRgBgWQAAgbATgQQATgQAiAAIBeAAIAADJgAggg/QgJAKAAANQAAASANAIQANAJAhAAIAmAAIAAhDIgyAAQgdAAgJAJg");
	this.shape_581.setTransform(419.05,355.55);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#E6E6E6").s().p("AhKCKIgEghQALAEAJAAQAMAAAGgEQAHgEAFgHIAKgZIADgJIhMjJIAkAAIAqB1QAJAWAFAXQAGgWAIgWIArh2IAiAAIhMDNQgMAhgHANQgIAQgNAJQgMAHgPAAQgLAAgMgEg");
	this.shape_582.setTransform(400.35,359.65);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#E6E6E6").s().p("AhNAsIAggHQAFAUANALQAOAKAQAAQARAAAMgKQALgJAAgQQAAgLgHgJQgHgJgIgCQgIgCgVAAIgIAAIAAgaQAVAAAIgCQAIgBAHgIQAHgHAAgMQAAgOgJgIQgKgIgOAAQgcAAgMAiIgggGQAPg5A5AAQAgAAATASQASASAAAYQAAAZgYAPQAPAHAIANQAIAMAAASQAAAbgUARQgUARgkAAQhEAAgLg+g");
	this.shape_583.setTransform(381.725,355.525);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIAiAAIAABPIAsAAQApAAAXAQQAXAQAAAcQAAAagTASQgTASgqAAgAgwBJIAkAAQAgAAAOgIQAOgIAAgRQAAgNgKgKQgLgLgiAAIgpAAg");
	this.shape_584.setTransform(363.5,355.55);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#E6E6E6").s().p("AhhBkIAAgdIAOAAQALAAAFgCQAEgCACgFQABgEABgbIAAiEICeAAIAADJIgiAAIAAitIhaAAIAABkQAAAjgDAMQgCALgKAIQgKAJgUAAIgbgCg");
	this.shape_585.setTransform(340.3,355.625);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_586.setTransform(319.925,355.525);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_587.setTransform(298.625,355.55);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_588.setTransform(278.875,355.525);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_589.setTransform(257.625,355.55);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#E6E6E6").s().p("AgZAvIAWhdIAdAAIgdBdg");
	this.shape_590.setTransform(960.425,310.1);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_591.setTransform(946.075,299.625);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#E6E6E6").s().p("AAkBlIgkg/QgKgSgIgHQgJgFgLAAIAABdIgjAAIAAjJIAjAAIAABXQAQAAAGgGQAHgGALgeQAKgYAHgJQAGgHAJgDQAHgCATAAIAGAAIAAAcIgJAAQgNAAgFAEQgDAEgJAVQgIAUgGAHQgGAIgNAGQAVAFAVAjIAmA/g");
	this.shape_592.setTransform(927.4,299.65);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#E6E6E6").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_593.setTransform(906.525,299.65);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_594.setTransform(884.875,299.65);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_595.setTransform(862.175,302.525);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#E6E6E6").s().p("AhNAsIAggHQAFAUANALQAOAKAQAAQARAAAMgKQALgJAAgQQAAgLgHgJQgHgJgIgCQgIgCgVAAIgIAAIAAgaQAVAAAIgCQAIgBAHgIQAHgHAAgMQAAgOgJgIQgKgIgOAAQgcAAgMAiIgggGQAPg5A5AAQAgAAATASQASASAAAYQAAAZgYAPQAPAHAIANQAIAMAAASQAAAbgUARQgUARgkAAQhEAAgLg+g");
	this.shape_596.setTransform(843.075,299.625);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_597.setTransform(823.825,299.625);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQAKgQAOgHQAOgIATAAQAaAAAUANQATAOALAYQAKAYAAAdQAAAfgMAYQgKAZgVANQgWANgXAAQgQAAgOgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQAQgUABgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_598.setTransform(802.75,303.275);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#E6E6E6").s().p("AAtBlIAAitIhaAAIAACtIgiAAIAAjJICfAAIAADJg");
	this.shape_599.setTransform(780.875,299.65);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#E6E6E6").s().p("AhKCKIgEghQALAEAJAAQAMAAAGgEQAHgEAFgHIAKgZIADgJIhMjJIAkAAIAqB1QAJAWAFAYQAGgXAIgWIArh2IAiAAIhMDNQgMAhgHANQgIARgNAHQgMAIgQAAQgKAAgMgEg");
	this.shape_600.setTransform(750,303.75);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQAKgQAOgHQAOgIATAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgMAYQgLAZgUANQgWANgXAAQgRAAgNgHQgOgHgIgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAARgTQAQgUAAgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_601.setTransform(730.2,303.275);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_602.setTransform(707.9,299.625);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#E6E6E6").s().p("AgQCyIAAhfQgLALgMAGQgNAFgOAAQggAAgXgbQgYgcAAgzQAAgsAVgeQAWgeAkAAQAPAAANAGQAMAGAKAMIAAhgIAhAAIAABgQALgMANgGQANgGAOAAQAkAAAVAeQAVAeAAAtQAAAvgWAdQgXAdgiAAQgLAAgMgDQgLgEgQgPIAABfgAAcg5QgLATAAAmQAAAuANAQQAMAQATAAQAVAAAPgUQAPgTAAgoQAAgmgOgTQgOgTgVAAQgXAAgMAUgAhhg5QgNATAAAkQAAApAOATQAPATAUAAQAXAAALgTQALgSAAgmQAAgngMgUQgLgUgYAAQgUAAgOAUg");
	this.shape_603.setTransform(681.1,299.675);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_604.setTransform(655.875,299.625);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_605.setTransform(634.625,299.625);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg7CiIgfAAIg4iqIAACqIgiAAIAAjJIA2AAIA1ChIA6ihIAxAAIAADJg");
	this.shape_606.setTransform(610.45,299.65);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_607.setTransform(588.125,299.65);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_608.setTransform(569.075,299.625);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#E6E6E6").s().p("AgXBRQgXgZgCgsIgqAAIAABZIgiAAIAAjJIAiAAIAABVIAqAAQAEgsAXgXQAVgXAkAAQAfAAASANQARAMAMAWQALAWAAAkQAAA0gXAbQgYAbgpAAQglAAgXgZgAAAg4QgOATAAAjQAAApAOATQANAUAYAAQAXAAAPgSQAPgSAAgoQAAgmgNgUQgNgTgaAAQgZAAgNATg");
	this.shape_609.setTransform(533.525,299.625);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#E6E6E6").s().p("AhKCKIgEghQALAEAJAAQAMAAAGgEQAHgEAFgHIAKgZIADgJIhMjJIAkAAIAqB1QAJAWAFAYQAGgXAIgWIArh2IAiAAIhMDNQgMAhgHANQgIARgNAHQgMAIgQAAQgKAAgMgEg");
	this.shape_610.setTransform(508.8,303.75);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_611.setTransform(488.125,299.65);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#E6E6E6").s().p("Ag1CBQgUgRgLgZQgKgaAAg/QAAhQAbgcQAbgcA3AAQAjAAAFgBQAFgBABgEIAeAAQgCAVgHAIQgHAIgKACQgMACgfAAQgqAAgPAIQgQAJgGASQgHASgBAcQANgTARgKQASgJAUAAQAoAAAaAbQAaAbAAAuQAAAjgNAXQgNAXgSAMQgSAMgfAAQgjAAgUgQgAgpgLQgPAVAAAjQAAAjARATQARATAYAAQAaAAAQgWQAPgWAAgjQAAgggOgTQgPgUgcAAQgbAAgQAVg");
	this.shape_612.setTransform(466.275,295.675);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgZAAQgXAAgQAPg");
	this.shape_613.setTransform(444.5,299.625);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#E6E6E6").s().p("AiABlIAAjJIAhAAIAACsIBOAAIAAisIAiAAIAACsIBOAAIAAisIAiAAIAADJg");
	this.shape_614.setTransform(418.1,299.65);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#E6E6E6").s().p("AhiBkIAAgdIAPAAQAMAAAEgCQAFgCABgFQACgEAAgbIAAiEICdAAIAADJIghAAIAAitIhbAAIAABkQAAAjgCAMQgCALgKAIQgKAJgUAAIgcgCg");
	this.shape_615.setTransform(390.05,299.725);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_616.setTransform(369.675,299.625);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAEQAOAGAJAMQALANAAATQAAAOgGALQgGALgMAGQAOAEAKANQAJAOAAASQgCAcgTAOQgTAOgjAAgAgwBJIAtAAQAdAAAKgHQALgHABgQQgBgKgGgIQgGgIgKgCQgKgDgVAAIgqAAgAgwgPIAkAAQAWAAAIgCQAIgDAGgGQAHgIAAgKQAAgPgMgGQgKgHgbAAIgmAAg");
	this.shape_617.setTransform(349.55,299.65);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5iqIAACqIghAAIAAjJIA1AAIA1ChIA6ihIAxAAIAADJg");
	this.shape_618.setTransform(314.55,299.65);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_619.setTransform(290.2,299.625);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_620.setTransform(268.475,299.625);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_621.setTransform(245.825,302.525);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#E6E6E6").s().p("AhNAsIAggHQAFAUANALQAOAKAQAAQARAAAMgKQALgJAAgQQAAgLgHgJQgHgJgIgCQgIgCgVAAIgIAAIAAgaQAVAAAIgCQAIgBAHgIQAHgHAAgMQAAgOgJgIQgKgIgOAAQgcAAgMAiIgggGQAPg5A5AAQAgAAATASQASASAAAYQAAAZgYAPQAPAHAIANQAIAMAAASQAAAbgUARQgUARgkAAQhEAAgLg+g");
	this.shape_622.setTransform(226.725,299.625);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_623.setTransform(207.525,299.625);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_624.setTransform(187.125,299.625);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#E6E6E6").s().p("ABOBlIAAjJIAjAAIAADJgAhwBlIAAjJIAiAAIAABPIArAAQAqAAAXAQQAXAPAAAdQAAAagTASQgUASgpAAgAhOBJIAkAAQAhAAANgIQANgIAAgRQAAgNgKgKQgJgLgjAAIgpAAg");
	this.shape_625.setTransform(152,299.65);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5iqIAACqIghAAIAAjJIA1AAIA1ChIA6ihIAxAAIAADJg");
	this.shape_626.setTransform(124.65,299.65);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#001728").s().p("AgWBHIAAhyIgiAAIAAgbIAiAAIAAgvIAegKIAAA5IAxAAIAAAbIgxAAIAABtQAAATAGAJQAHAIAQAAQALAAAJgGIAAAaQgLAGgSAAQgzAAABg5g");
	this.shape_627.setTransform(858.6,241.425);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#001728").s().p("AAyBkIAAhuQgBg/gsAAQgXAAgPASQgPASAAAbIAABuIggAAIAAjCIAgAAIAAAgIAAAAQAWglApAAQAgAAARAVQARAVAAAnIAAB2g");
	this.shape_628.setTransform(841.3,243.875);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#001728").s().p("Ag8BLQgYgaAAgwQAAgtAZgcQAagdAlAAQAnAAAVAYQAVAaAAAsIAAAPIiJAAQABAhARARQAQASAdAAQAgAAAdgWIAAAdQgaATgrAAQgoAAgXgbgAggg7QgQAQgDAaIBoAAQgBgbgMgPQgNgQgXAAQgVAAgPAQg");
	this.shape_629.setTransform(820,244.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#001728").s().p("AgQBiIhKjCIAiAAIAyCMQAFAQABAMIAAAAQACgPAEgMIA0iNIAhAAIhODCg");
	this.shape_630.setTransform(800.325,244.1);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#001728").s().p("AhHCJIAAkRICJAAIAAAdIhpAAIAABbIBhAAIAAAcIhhAAIAABfIBvAAIAAAeg");
	this.shape_631.setTransform(782.025,240.2);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#001728").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_632.setTransform(751.575,243.75);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#001728").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgIAfgXARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_633.setTransform(733,243.725);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#001728").s().p("AhSBlIAAjJIBPAAQAcAAAOAEQAOAFALANQAKANAAATQAAAOgGALQgGALgMAGQAOAFAKAMQAJANAAATQgCAcgSAOQgTAOgkAAgAgwBJIAtAAQAcAAAMgHQAKgHABgQQAAgKgHgIQgGgIgKgDQgKgCgVAAIgqAAgAgwgPIAkAAQAVAAAJgCQAIgDAGgGQAHgIAAgJQAAgQgLgHQgLgGgbAAIgmAAg");
	this.shape_634.setTransform(712.9,243.75);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#001728").s().p("AhAB+QgdgTgOgjQgPgiAAgnQAAgsAQggQARghAfgQQAfgRAjgBQAqAAAdAWQAcAVAMAnIglAIQgJgegTgOQgSgOgcAAQgfAAgWAPQgWAQgIAaQgJAaAAAcQAAAiAKAbQALAaAVANQAWAOAZAAQAfAAAVgSQAWgSAIgjIAkAJQgLAugeAXQgfAYgrAAQgsAAgcgSg");
	this.shape_635.setTransform(688.125,239.9);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#E6E6E6").s().p("AAxCMIAAiZIheCZIglAAIAAjKIAiAAIAACZIBeiZIAlAAIAADKgAgjhlQgOgOgDgXIAXAAQADANAIAGQAIAHAMgBQAQAAAIgFQAHgHADgNIAXAAQgCAXgPAOQgPAMgYAAQgXAAgPgMg");
	this.shape_636.setTransform(652.225,239.9);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_637.setTransform(630.425,243.725);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_638.setTransform(607.725,246.625);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_639.setTransform(586.175,243.75);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_640.setTransform(564.425,243.725);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5iqIAACqIghAAIAAjJIA1AAIA1ChIA6ihIAyAAIAADJg");
	this.shape_641.setTransform(540.3,243.75);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_642.setTransform(515.975,243.725);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#E6E6E6").s().p("AAkBlIgkg/QgKgSgIgHQgJgFgLAAIAABdIgjAAIAAjJIAjAAIAABXQAQAAAGgGQAHgGALgeQAKgYAHgJQAGgHAJgCQAHgDATAAIAGAAIAAAcIgJAAQgNAAgFAEQgDAEgJAVQgIATgGAIQgGAIgNAGQAVAFAVAjIAmA/g");
	this.shape_643.setTransform(497.65,243.75);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#E6E6E6").s().p("AAxCMIAAiZIheCZIglAAIAAjKIAiAAIAACZIBeiZIAlAAIAADKgAgjhlQgOgOgDgXIAXAAQADANAIAGQAIAHAMgBQAQAAAIgFQAHgHADgNIAXAAQgCAXgPAOQgPAMgYAAQgXAAgPgMg");
	this.shape_644.setTransform(466.075,239.9);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAZAcQAaAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAAOgKQANgKAIgWIAjAFQgIAfgXARQgXARgjAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgQgTgaAAQgXAAgQAPg");
	this.shape_645.setTransform(444.25,243.725);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_646.setTransform(422.575,243.725);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg7CiIgfAAIg4iqIAACqIgiAAIAAjJIA2AAIA1ChIA6ihIAxAAIAADJg");
	this.shape_647.setTransform(398.4,243.75);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_648.setTransform(365.125,243.725);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgRgTgaAAQgWAAgQAPg");
	this.shape_649.setTransform(333.15,243.725);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_650.setTransform(313.925,243.75);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_651.setTransform(295.825,243.725);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAYAAQATAAAOgKQANgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgaAAQgWAAgQAPg");
	this.shape_652.setTransform(274.55,243.725);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5iqIAACqIghAAIAAjJIA1AAIA1ChIA6ihIAyAAIAADJg");
	this.shape_653.setTransform(250.4,243.75);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#E6E6E6").s().p("AhoCMIAAkWIBoAAQAggBASAJQAUAJALARQALARAAATQAAATgKAPQgKAQgTAKQAZAIAOARQANARAAAZQAAATgIARQgIARgMAJQgNAJgSAFQgSAFgbAAgAhDBrIBEAAQASgBAHgBQANgCAJgFQAIgGAFgKQAGgKAAgNQAAgQgIgLQgIgMgOgEQgPgGgZAAIhAAAgAhDgVIA8AAQAYgBAKgDQAOgEAIgJQAGgKABgPQAAgOgHgLQgHgKgMgDQgNgFgdAAIg3AAg");
	this.shape_654.setTransform(224.9,239.9);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#001728").s().p("AAxCMIAAiZIheCZIglAAIAAjKIAiAAIAACZIBeiZIAlAAIAADKgAgjhlQgOgNgDgYIAXAAQADANAIAGQAIAHAMAAQAQgBAIgGQAHgGADgNIAXAAQgCAYgPANQgPAMgYAAQgXAAgPgMg");
	this.shape_655.setTransform(838.925,168.1);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#001728").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_656.setTransform(817.125,171.95);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#001728").s().p("AhXCOIAAkWIAgAAIAAAaQAKgQAOgHQAOgIATAAQAaAAAUANQAUAOAJAYQALAYAAAdQAAAfgMAYQgLAZgUANQgWANgXAAQgQAAgOgHQgOgHgIgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAARgTQAQgUAAgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_657.setTransform(795.9,175.575);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#001728").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_658.setTransform(775.625,171.95);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#001728").s().p("AAxBlIAAiZIheCZIglAAIAAjJIAiAAIAACZIBeiZIAlAAIAADJg");
	this.shape_659.setTransform(755.775,171.95);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#001728").s().p("ABJBlIAAiiIg7CiIgfAAIg4iqIAACqIgiAAIAAjJIA2AAIA1ChIA6ihIAxAAIAADJg");
	this.shape_660.setTransform(731.5,171.95);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#001728").s().p("ABcCsIAAhBIi3AAIAABBIghAAIAAhiIAVAAQAigzAAiZIAAgpICpAAIAAD1IAZAAIAABigAghh8QAAAkgHA9QgGA+gTAnICAAAIAAjUIhgAAg");
	this.shape_661.setTransform(704.225,171.35);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_662.setTransform(672.075,171.95);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#E6E6E6").s().p("AhKCKIgEghQALAEAJAAQALAAAIgEQAGgEAFgHIAKgZIADgJIhMjJIAkAAIArB1QAHAWAGAXQAGgWAIgWIAsh2IAhAAIhMDNQgNAhgFANQgKAQgMAJQgLAHgRAAQgJAAgNgEg");
	this.shape_663.setTransform(653.55,176.05);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAOAEQAOAGALAMQAKANAAATQAAAOgGALQgGAKgMAIQAOAEAKANQAJANAAARQgCAdgSAOQgUAOgjAAgAgwBJIAtAAQAcAAAMgHQAKgHABgQQAAgKgHgIQgGgIgKgCQgKgDgVAAIgqAAgAgwgPIAkAAQAWAAAIgDQAIgBAGgIQAHgHAAgKQAAgQgLgFQgMgHgaAAIgmAAg");
	this.shape_664.setTransform(634.7,171.95);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#E6E6E6").s().p("AhEBPQgagcAAgzQAAg3AfgbQAbgXAkAAQAqAAAaAcQAbAbAAAwQAAAmgMAXQgMAWgWAMQgWANgbAAQgpAAgbgbgAgqg5QgRATAAAmQAAAnARATQARAUAZAAQAaAAAQgUQARgTAAgnQAAgmgRgTQgRgTgZAAQgZAAgRATg");
	this.shape_665.setTransform(612.875,171.925);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#E6E6E6").s().p("AhNAsIAggHQAFAUANALQAOAKAQAAQARAAAMgKQALgJAAgQQAAgLgHgJQgHgJgIgCQgIgCgVAAIgIAAIAAgaQAVAAAIgCQAIgBAHgIQAHgHAAgMQAAgOgJgIQgKgIgOAAQgcAAgMAiIgggGQAPg5A5AAQAgAAATASQASASAAAYQAAAZgYAPQAPAHAIANQAIAMAAASQAAAbgUARQgUARgkAAQhEAAgLg+g");
	this.shape_666.setTransform(593.375,171.925);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#E6E6E6").s().p("AA4BlIAAhPIgVAAQgRAAgKAFQgIAEgQAaIgeAsIgrAAIAmg3QARgZAQgDQgegDgOgRQgOgRABgWQAAgbASgQQASgQAkAAIBcAAIAADJgAggg/QgJAKAAANQAAASANAIQAOAJAfAAIAnAAIAAhDIgyAAQgdAAgJAJg");
	this.shape_667.setTransform(562.4,171.95);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#E6E6E6").s().p("AAvBlIAAhaIheAAIAABaIgiAAIAAjJIAiAAIAABUIBeAAIAAhUIAjAAIAADJg");
	this.shape_668.setTransform(542.075,171.95);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAbgdAoAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAHgWIAkAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgDgagKgNQgRgTgaAAQgWAAgQAPg");
	this.shape_669.setTransform(520.35,171.925);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#E6E6E6").s().p("ABJBlIAAiiIg8CiIgdAAIg5iqIAACqIghAAIAAjJIA1AAIA1ChIA6ihIAyAAIAADJg");
	this.shape_670.setTransform(496.2,171.95);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#E6E6E6").s().p("AgZAvIAWhdIAdAAIgdBdg");
	this.shape_671.setTransform(477.725,182.4);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#E6E6E6").s().p("AhCBPQgagcAAgxQAAgyAagcQAagdApAAQApAAAaAcQAZAcAAAxIAAAJIiWAAQACAhARASQARASAZAAQASAAANgKQAOgKAIgWIAjAFQgJAfgWARQgWARgkAAQgrAAgagbgAglg9QgQAQgCAbIBwAAQgCgagLgNQgRgTgZAAQgXAAgQAPg");
	this.shape_672.setTransform(463.4,171.925);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_673.setTransform(444.175,171.95);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#E6E6E6").s().p("AAxCMIAAiZIheCZIglAAIAAjKIAiAAIAACZIBeiZIAlAAIAADKgAgjhlQgOgNgDgYIAXAAQADANAIAGQAIAHAMAAQAQgBAIgGQAHgGADgNIAXAAQgCAYgPANQgPAMgYAAQgXAAgPgMg");
	this.shape_674.setTransform(424.325,168.1);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#E6E6E6").s().p("AhKCKIgEghQAMAEAIAAQAMAAAGgEQAHgEAEgHIALgZIADgJIhNjJIAlAAIAqB1QAJAWAFAXQAGgWAIgWIArh2IAjAAIhODNQgLAhgHANQgIAQgNAJQgMAHgPAAQgLAAgMgEg");
	this.shape_675.setTransform(403.85,176.05);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAEQAOAGAJAMQALANAAATQAAAOgGALQgGAKgMAIQAOAEAJANQAKANAAARQgCAdgTAOQgTAOgjAAgAgwBJIAuAAQAbAAALgHQALgHABgQQgBgKgFgIQgHgIgKgCQgKgDgWAAIgpAAgAgwgPIAlAAQAVAAAIgDQAIgBAHgIQAGgHAAgKQAAgQgMgFQgKgHgbAAIgmAAg");
	this.shape_676.setTransform(385,171.95);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#E6E6E6").s().p("AgQBlIAAitIhBAAIAAgcICjAAIAAAcIhBAAIAACtg");
	this.shape_677.setTransform(365.175,171.95);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#E6E6E6").s().p("Ag+BPQgZgbAAgzQAAggALgYQALgZAWgMQAWgNAZAAQAhAAAVARQAVARAGAeIghAGQgFgVgMgKQgMgKgSAAQgYAAgRASQgQATAAAnQAAApAQASQAPATAZAAQAUAAANgNQAOgMADgaIAiAFQgFAigXAUQgXAUghAAQgpAAgZgbg");
	this.shape_678.setTransform(347.075,171.925);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#E6E6E6").s().p("AhSBlIAAjJIBPAAQAcAAAPAEQAOAGAJAMQALANAAATQAAAOgGALQgGAKgMAIQAOAEAJANQAKANAAARQgCAdgTAOQgTAOgjAAgAgwBJIAuAAQAcAAAKgHQALgHABgQQgBgKgFgIQgHgIgKgCQgKgDgWAAIgpAAgAgwgPIAlAAQAVAAAIgDQAIgBAHgIQAGgHAAgKQAAgQgMgFQgLgHgaAAIgmAAg");
	this.shape_679.setTransform(327.4,171.95);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#E6E6E6").s().p("AhKBaQgSgRAAgZQAAgPAHgMQAGgMALgIQALgGAOgEQAKgDAUgCQApgFAUgHIAAgJQAAgVgKgJQgNgLgZAAQgYAAgMAIQgLAJgGAVIghgEQAEgWALgNQAKgNAUgHQAUgIAZAAQAaAAAQAHQAQAGAIAJQAHAJAEAOQABAJAAAXIAAAtQAAAvADANQACANAGALIgkAAQgFgKgCgPQgTAQgRAHQgRAHgUAAQghAAgSgQgAgHANQgWADgIAEQgJADgFAIQgFAHAAAJQAAAOALAJQAKAJAUAAQATAAAPgJQAQgIAHgPQAGgMAAgXIAAgMQgTAHgkAGg");
	this.shape_680.setTransform(305.525,171.925);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#E6E6E6").s().p("AhXCOIAAkWIAgAAIAAAaQALgQAOgHQANgIATAAQAaAAAUANQATAOALAYQAKAYAAAdQAAAfgLAYQgLAZgWANQgVANgXAAQgQAAgOgHQgOgHgJgLIAABigAgnheQgRAVAAAnQAAAmAQASQAQATAXAAQAVAAAQgTQAQgUABgnQAAgngQgTQgQgTgVAAQgWAAgRAUg");
	this.shape_681.setTransform(284.45,175.575);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#E6E6E6").s().p("ABQCCIAAg6IifAAIAAA6IgcAAIAAhWIASAAQAlgwgCh9ICMAAIAACtIAWAAIAABWgAg4AsIBsAAIAAiRIhNAAQgEBjgbAug");
	this.shape_682.setTransform(261.175,174.825);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#E6E6E6").s().p("AhlA8IAjgJQADAVASAVQASATAbABQAegBAQgPQASgPgBgVQABgXgTgNQgRgOgeAAIgSAAIAAgfQAZAAANgDQAOgDAKgMQAKgMAAgPQAAgTgOgOQgOgNgYAAQgVAAgOAKQgPALgGARQgFASgBAIIgjgIQANhYBUgBQApAAAYAYQAYAWAAAfQAAAnglAVQAVAGAPARQAPASAAAaQAAAkgdAYQgbAYgvAAQhOAAgXhUg");
	this.shape_683.setTransform(238.65,168.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// fon
	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#FFCC66").ss(11,1,1).p("EhUSiV/MColAAAMAAAEr/MiolAAAg");
	this.shape_684.setTransform(534.4,965.7992,1,0.9013);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#001728").s().p("EhUSCWAMAAAkr/MColAAAMAAAEr/g");
	this.shape_685.setTransform(534.4,965.7992,1,0.9013);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_685},{t:this.shape_684}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.start_fon, new cjs.Rectangle(-10.6,95,1090,1741.6), null);


(lib.page1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// ==========================================
		// 1. СИСТЕМНЫЕ НАСТРОЙКИ (ВЫПОЛНЯЮТСЯ ВСЕГДА ПРИ ВХОДЕ)
		// ==========================================
		
		this.stop();
		
		stage.transparent = true;
		createjs.Ticker.timingMode = createjs.Ticker.RAF;
		createjs.Ticker.removeEventListener("tick", stage);
		stage.update();
		
		createjs.Touch.enable(stage);
		
		["relax", "dinamika", "color1", "color2", "color3", "nazad", "pr1_button", "btn_mute"].forEach(function(btn) {
		    if (this[btn]) this[btn].cursor = "pointer";
		}, this);
		
		if (this.pr1_foto) this.pr1_foto.visible = false;
		
		
		// ==========================================
		// 2. ЛОГИКА СКЛЕЕННЫХ ВИДЕО С ЗАЩИТОЙ ОТ ЗАВИСАНИЯ НА 1 КАДРЕ
		// ==========================================
		if (!this.page1_initialized) {
		    this.page1_initialized = true;
		
		    // УКАЖИТЕ ТОЧНУЮ ДЛИТЕЛЬНОСТЬ ОДНОГО ЦВЕТА ДЛЯ КАЖДОГО РЕЖИМА (в секундах)
		    var SEGMENT_DURATIONS = {
		        "relax": 26.0,     // Длительность 1 цвета в Релаксе
		        "dinamika": 17.0   // Длительность 1 цвета в Динамике
		    };
		
		    var modeVideoSrcs = {
		        "relax": "videos/relax_all.mp4",
		        "dinamika": "videos/dinamika_all.mp4"
		    };
		
		    var currentMode = "relax";
		    var currentColorIndex = 0; // 0 = color1, 1 = color2, 2 = color3
		    var isFotoOpen = false;
		    var mainPlayerId = "video1";
		    var isSoundGlobalOn = true;
		    var isSeeking = false; // Флаг блокировки авто-сброса во время перемотки
		
		    function getCurrentSegmentDuration() {
		        return SEGMENT_DURATIONS[currentMode] || 10.0;
		    }
		
		    function syncVisibility() {
		        var overlayContainer = document.getElementById("dom_overlay_container");
		        var player = document.getElementById(mainPlayerId);
		
		        if (overlayContainer && player) {
		            if (isFotoOpen) {
		                player.pause();
		                overlayContainer.style.visibility = "hidden";
		                var audioRelax = document.getElementById("audio_relax");
		                var audioDinamika = document.getElementById("audio_dinamika");
		                if (audioRelax) audioRelax.pause();
		                if (audioDinamika) audioDinamika.pause();
		            } else {
		                overlayContainer.style.visibility = "visible";
		                overlayContainer.style.opacity = "1";
		                syncAudioPlayback(false);
		            }
		        }
		        stage.update();
		    }
		
		    function syncAudioSystem(targetMode, localTime, shouldPlay, isColorSwitch) {
		        var audioRelax = document.getElementById("audio_relax");
		        var audioDinamika = document.getElementById("audio_dinamika");
		
		        if (!audioRelax || !audioDinamika) return;
		
		        if (!isSoundGlobalOn || isFotoOpen || !shouldPlay) {
		            audioRelax.pause();
		            audioDinamika.pause();
		            return;
		        }
		
		        var activeAudio = (targetMode === "relax") ? audioRelax : audioDinamika;
		        var inactiveAudio = (targetMode === "relax") ? audioDinamika : audioRelax;
		
		        inactiveAudio.pause();
		        inactiveAudio.muted = true;
		
		        activeAudio.muted = false;
		        activeAudio.volume = 1.0;
		
		        if (!isColorSwitch && !isNaN(localTime) && Math.abs(activeAudio.currentTime - localTime) > 0.35) {
		            try { 
		                if (activeAudio.duration && localTime < activeAudio.duration) {
		                    activeAudio.currentTime = localTime; 
		                } else {
		                    activeAudio.currentTime = 0;
		                }
		            } catch(e) {}
		        }
		
		        var playPromise = activeAudio.play();
		        if (playPromise !== undefined) {
		            playPromise.catch(function() {});
		        }
		    }
		
		    function syncAudioPlayback(isColorSwitch) {
		        var player = document.getElementById(mainPlayerId);
		        if (!player) return;
		        var segDur = getCurrentSegmentDuration();
		        var localTime = player.currentTime % segDur;
		        syncAudioSystem(currentMode, localTime, !player.paused, isColorSwitch);
		    }
		
		    function initNativePlayer() {
		        var player = document.getElementById(mainPlayerId);
		        if (!player) return;
		
		        player.setAttribute("playsinline", "");
		        player.setAttribute("webkit-playsinline", "");
		        player.setAttribute("muted", "");
		        player.muted = true;
		        player.pause();
		        player.loop = true; // Оставляем нативный loop как страховку для 3-го отрезка
		        player.controls = false;
		        player.preload = "auto";
		
		        player.style.transform = "translate3d(0,0,0)";
		        player.style.webkitTransform = "translate3d(0,0,0)";
		
		        if (player.parentElement) player.parentElement.style.zIndex = "10";
		
		        // Зацикливание строго внутри текущего отрезка БЕЗ конфликта с перемоткой
		        player.addEventListener("timeupdate", function() {
		            if (isSeeking || player.paused) return;
		
		            var segDur = getCurrentSegmentDuration();
		            var segStart = currentColorIndex * segDur;
		            var segEnd = segStart + segDur - 0.12;
		
		            // Если дошли до конца текущего цвета — возвращаемся в начало ЭТОГО ЖЕ цвета
		            if (player.currentTime >= segEnd) {
		                isSeeking = true;
		                player.currentTime = segStart;
		            }
		        });
		
		        // Снимаем блокировку, как только браузер завершил перемотку
		        player.addEventListener("seeked", function() {
		            isSeeking = false;
		        });
		
		        if (!document.getElementById("audio_relax")) {
		            var aRelax = document.createElement("audio");
		            aRelax.id = "audio_relax";
		            aRelax.src = "videos/sound_relax.mp3";
		            aRelax.loop = true;
		            aRelax.preload = "auto";
		            document.body.appendChild(aRelax);
		        }
		        if (!document.getElementById("audio_dinamika")) {
		            var aDinamika = document.createElement("audio");
		            aDinamika.id = "audio_dinamika";
		            aDinamika.src = "videos/sound_dinamika.mp3";
		            aDinamika.loop = true;
		            aDinamika.preload = "auto";
		            document.body.appendChild(aDinamika);
		        }
		
		        player.src = modeVideoSrcs[currentMode];
		    }
		
		    setTimeout(initNativePlayer, 150);
		
		    // ПЕРЕКЛЮЧЕНИЕ РЕЖИМА ИЛИ СМЕЩЕНИЕ ЦВЕТА ПО ВРЕМЕНИ
		    function switchVideoSystem(clickedMode, forcePlay) {
		        var player = document.getElementById(mainPlayerId);
		        if (!player) return;
		
		        // Пауза при повторном клике на активную кнопку режима
		        if (currentMode === clickedMode && forcePlay) {
		            if (!player.paused) {
		                player.pause();
		                syncAudioSystem(currentMode, 0, false, false);
		            } else {
		                player.play().catch(function() {});
		                syncAudioPlayback(false);
		            }
		            return;
		        }
		
		        var isColorSwitch = (clickedMode === null);
		        var oldSegDur = getCurrentSegmentDuration();
		        var localTime = (player.currentTime || 0) % oldSegDur;
		        var shouldPlay = (!player.paused || forcePlay);
		
		        if (clickedMode !== null) {
		            currentMode = clickedMode;
		            localTime = 0; 
		        }
		
		        var newSegDur = getCurrentSegmentDuration();
		        var targetTime = (currentColorIndex * newSegDur) + localTime;
		
		        // Защита от выхода за пределы реальной длительности видеофайла
		        if (player.duration && targetTime >= player.duration - 0.1) {
		            targetTime = currentColorIndex * newSegDur;
		        }
		
		        if (shouldPlay) {
		            syncAudioSystem(currentMode, localTime, true, isColorSwitch);
		        }
		
		        // Если меняем только цвет внутри текущего режима
		        if (isColorSwitch) {
		            isSeeking = true;
		            try {
		                player.currentTime = targetTime;
		            } catch(e) {
		                isSeeking = false;
		            }
		            
		            var resumeAfterSeek = function() {
		                player.removeEventListener("seeked", resumeAfterSeek);
		                isSeeking = false;
		                if (shouldPlay) {
		                    player.play().catch(function() {});
		                }
		            };
		            player.addEventListener("seeked", resumeAfterSeek);
		            
		            // Страховка на случай, если событие seeked не сработает
		            if (shouldPlay) {
		                player.play().catch(function() {});
		            }
		            return;
		        }
		
		        // Если переключили режим (relax <-> dinamika)
		        isSeeking = true;
		        player.pause();
		        player.src = modeVideoSrcs[currentMode];
		        player.load();
		
		        player.onloadedmetadata = function() {
		            try {
		                player.currentTime = targetTime;
		            } catch(e) {}
		            isSeeking = false;
		            if (shouldPlay) {
		                player.play().catch(function() {});
		            }
		            player.onloadedmetadata = null;
		        };
		    }
		
		    // ОБРАБОТЧИКИ КНОПОК
		    if (this.relax) {
		        this.relax.addEventListener("click", function() { switchVideoSystem("relax", true); });
		    }
		
		    if (this.dinamika) {
		        this.dinamika.addEventListener("click", function() { switchVideoSystem("dinamika", true); });
		    }
		
		    ["color1", "color2", "color3"].forEach(function(btnName, index) {
		        if (this[btnName]) {
		            this[btnName].addEventListener("click", function() {
		                currentColorIndex = index;
		                switchVideoSystem(null, false);
		            });
		        }
		    }, this);
		
		    if (this.pr1_button) {
		        this.pr1_button.addEventListener("click", function() {
		            if (this.pr1_foto) {
		                this.pr1_foto.visible = !this.pr1_foto.visible;
		                isFotoOpen = this.pr1_foto.visible;
		                syncVisibility();
		            }
		        }.bind(this));
		    }
		
		    if (this.nazad) {
		        this.nazad.addEventListener("click", function() {
		            createjs.Ticker.addEventListener("tick", stage);
		var player = document.getElementById(mainPlayerId);
		if (player) player.pause();
		var audioRelax = document.getElementById("audio_relax");
		var audioDinamika = document.getElementById("audio_dinamika");
		if (audioRelax) { audioRelax.pause(); audioRelax.remove(); }
		if (audioDinamika) { audioDinamika.pause(); audioDinamika.remove(); }
		window.location.reload();
		}.bind(this));
		}
		if (this.btn_mute) {
		this.btn_mute.addEventListener("click", function() {
		isSoundGlobalOn = !isSoundGlobalOn;
		syncAudioPlayback(false);
		}.bind(this));
		}
		} else {
		setTimeout(function() {
		var player = document.getElementById("video1");
		var overlayContainer = document.getElementById("dom_overlay_container");
		if (player) {
		player.currentTime = currentColorIndex * getCurrentSegmentDuration();
		if (overlayContainer) {
		overlayContainer.style.visibility = "visible";
		overlayContainer.style.opacity = "1";
		}
		player.play().catch(function() {});
		syncAudioPlayback(false);
		}
		}, 100);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Price111
	this.pr1_foto = new lib.Price111();
	this.pr1_foto.name = "pr1_foto";
	this.pr1_foto.setTransform(540.2,901.1,1,1,0,0,0,521.2,535.1);

	this.timeline.addTween(cjs.Tween.get(this.pr1_foto).wait(1));

	// paket
	this.paket = new lib.Symbol1("synched",0);
	this.paket.name = "paket";
	this.paket.setTransform(546.75,159,1,1,0,0,0,301.3,36.1);

	this.timeline.addTween(cjs.Tween.get(this.paket).wait(1));

	// Price1
	this.pr1_button = new lib.Symbol2();
	this.pr1_button.name = "pr1_button";
	this.pr1_button.setTransform(543,212.35,1,1,0,0,0,387.3,28.2);

	this.timeline.addTween(cjs.Tween.get(this.pr1_button).wait(1));

	// Mute
	this.btn_mute = new lib.Mute();
	this.btn_mute.name = "btn_mute";
	this.btn_mute.setTransform(1000.7,1691.8,0.8237,0.7749,0,0,0,51.7,101.9);

	this.timeline.addTween(cjs.Tween.get(this.btn_mute).wait(1));

	// nazad1
	this.nazad = new lib.nazad1();
	this.nazad.name = "nazad";
	this.nazad.setTransform(701.2,1572.15,0.8527,0.8373,0,0,0,614.5,-170.4);

	this.timeline.addTween(cjs.Tween.get(this.nazad).wait(1));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBDQgIgHAAgJQAAgKAJgHQAIgGAMAAQANAAAIAGQAJAHAAAKQAAAKgJAGQgIAHgNAAQgMAAgJgHgAgVgiQgIgGAAgLQAAgKAJgGQAIgGAMAAQANAAAIAGQAJAHAAAJQAAALgJAHQgIAGgNAAQgMAAgJgHg");
	this.shape.setTransform(404.675,1374.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmBKIAAh+IhMAAIAAB+IgcAAIAAiTICFAAIAACTg");
	this.shape_1.setTransform(391.275,1374.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA9BKIAAh2IgyB2IgYAAIgxh8IAAB8IgcAAIAAiTIAtAAIAtB2IAxh2IApAAIAACTg");
	this.shape_2.setTransform(371.05,1374.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3A5QgXgTAAglQAAglAXgUQAWgVAiAAQAiAAAWAUQAVAVABAkIAAAHIh+AAQABAXAOAOQAOANAVgBQAQABALgIQALgHAHgQIAeADQgIAXgSANQgUAMgeAAQgkAAgVgUgAgfgsQgOALgBATIBeAAQgCgSgJgKQgNgOgXAAQgSAAgOAMg");
	this.shape_3.setTransform(350.5,1374.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBKIAAh+Ig3AAIAAgVICJAAIAAAVIg3AAIAAB+g");
	this.shape_4.setTransform(334.325,1374.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag3A5QgXgTABglQgBglAXgUQAWgVAiAAQAjAAAVAUQAWAVAAAkIAAAHIh+AAQABAXAPAOQAOANAUgBQAQABALgIQALgHAHgQIAeADQgIAXgTANQgSAMgeAAQgkAAgWgUgAgfgsQgNALgCATIBeAAQgCgSgJgKQgNgOgXAAQgSAAgOAMg");
	this.shape_5.setTransform(308.5,1374.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBKIAAh+Ig3AAIAAgVICJAAIAAAVIg3AAIAAB+g");
	this.shape_6.setTransform(292.325,1374.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AApBKIAAhvIhPBvIgfAAIAAiTIAdAAIAABwIBPhwIAfAAIAACTg");
	this.shape_7.setTransform(275.625,1374.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhJBoIAAjMIAbAAIAAATQAJgLAMgGQALgFAQAAQAVAAARAJQARAKAIASQAJASAAAVQAAAXgJARQgKASgSAKQgRAKgUAAQgOAAgLgGQgLgFgIgIIAABIgAghhFQgNAPAAAdQAAAcAMANQAOAOATAAQASAAAOgOQAOgOAAgdQgBgdgNgOQgNgOgSAAQgSAAgPAPg");
	this.shape_8.setTransform(257.7,1376.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3A5QgXgTAAglQAAglAXgUQAWgVAiAAQAiAAAWAUQAVAVABAkIAAAHIh+AAQABAXAOAOQAOANAVgBQAQABALgIQALgHAHgQIAeADQgIAXgSANQgUAMgeAAQgkAAgVgUgAgfgsQgOALgBATIBeAAQgCgSgJgKQgNgOgXAAQgSAAgOAMg");
	this.shape_9.setTransform(238.9,1374.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsBeQgRgMgJgSQgJgUAAguQAAg6AXgVQAXgUAuAAIAigBQAEgBABgCIAZAAQgBAPgGAFQgGAGgJACQgKABgbAAQgiAAgNAHQgNAFgGAOQgGANAAAVQAKgOAPgHQAPgIARAAQAiAAAVAVQAWAUAAAhQAAAagLARQgLAQgPAJQgPAJgaAAQgdAAgRgMgAgigIQgNAPAAAaQAAAaAPAOQAOANAUAAQAWAAANgQQANgPAAgaQAAgYgMgNQgNgQgXABQgXAAgNAPg");
	this.shape_10.setTransform(220.925,1371.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABCBKIAAiTIAdAAIAACTgAheBKIAAiTIAcAAIAAA6IAlAAQAjAAATAMQATALAAAVQAAATgQANQgQANgiAAgAhCA2IAfAAQAbAAALgGQAMgGAAgNQAAgJgJgIQgIgHgdAAIgjAAg");
	this.shape_11.setTransform(199.575,1374.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhYBmIAAjLIBYAAQAbAAAQAGQAQAGAJANQAKANAAAOQAAANgJAMQgIALgQAHQAVAGAMAMQALANAAASQAAAOgHANQgHAMgKAHQgLAGgPAEQgQADgWAAgAg5BOIA6AAIAVgBQALgCAHgDQAHgEAFgIQAFgHAAgKQAAgMgHgIQgHgIgMgEQgMgDgVAAIg3AAgAg5gPIAzAAQAUAAAJgDQAMgDAGgHQAGgHAAgLQAAgKgGgIQgFgIgLgCQgKgDgZAAIgvAAg");
	this.shape_12.setTransform(177.175,1371.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAQQgIgHAAgJQAAgJAJgHQAIgGAMAAQANAAAIAGQAJAHAAAJQAAAKgJAGQgIAHgNAAQgMAAgJgHg");
	this.shape_13.setTransform(152.425,1379.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAABmIAAiaIgKAGIgMAGIgNADIgOADIAAglQAUgFARgIQARgIAOgJIAfAAIAADLg");
	this.shape_14.setTransform(137.425,1371.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSBCQgHgHAAgJQAAgKAIgHQAHgFAKAAQALgBAIAHQAHAGAAAKQAAAJgIAHQgHAGgLABQgKgBgIgGgAgSghQgHgHAAgJQAAgKAIgGQAHgHAKABQALgBAIAHQAHAGAAAKQAAAKgIAGQgHAGgLABQgKAAgIgHg");
	this.shape_15.setTransform(926.325,1658.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2BAQgNgMAAgSQAAgLAFgIQAFgJAHgFQAJgFAJgDIAXgDQAdgEAPgFIAAgGQAAgPgIgGQgJgJgSAAQgSAAgIAHQgJAGgDAPIgZgDQAEgQAHgJQAHgKAPgFQAPgFARAAQAUAAAMAFQAMAEAFAHQAFAGADAKQABAGAAARIAAAgQAAAiACAJQABAJAFAIIgaAAQgEgHgCgLQgNAMgNAFQgMAFgPAAQgYAAgNgMgAgGAJQgPACgGADQgGACgEAGQgEAFAAAGQAAAKAIAHQAHAGAQAAQAMAAAMgGQALgGAFgLQAFgIAAgQIAAgJQgOAFgbAEg");
	this.shape_16.setTransform(914.45,1658.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAbBJIgbgtQgHgOgGgEQgHgFgIAAIAABEIgZAAIAAiQIAZAAIAAA/QAMgBAFgEQAEgFAJgWQAHgQAFgGQAEgFAGgDQAGgBAOAAIAFAAIAAAUIgHAAQgKAAgDACQgDADgGAPQgGAPgEAFQgFAFgJAFQAPADAQAaIAbAtg");
	this.shape_17.setTransform(900.725,1658.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag2BjIgCgYQAIADAGAAQAIAAAFgDQAFgDAEgFIAHgSIACgGIg4iQIAbAAIAfBUQAGAQAEAQQAEgPAGgQIAghVIAZAAIg5CTQgJAXgEAJQgGAMgJAGQgIAGgMAAQgIAAgJgDg");
	this.shape_18.setTransform(886.475,1661.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag7BJIAAiQIA5AAQAVgBAKAEQAKADAIAKQAHAJAAANQAAALgFAHQgEAIgIAFQAKADAHAJQAHAJgBANQAAAUgOALQgOAJgaABgAgiA1IAgAAQAVgBAIgFQAHgEABgMQAAgHgEgGQgFgGgHgBQgIgCgPAAIgeAAgAgigLIAaAAQAPAAAGgBQAGgBAFgFQAEgGABgHQgBgLgHgFQgJgEgTAAIgbAAg");
	this.shape_19.setTransform(872.65,1658.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag4AfIAYgEQADANAKAIQAKAIALAAQANAAAIgHQAJgHAAgLQAAgJgGgGQgFgGgGgCQgGgBgPAAIgFAAIAAgSIAUgCQAGgBAFgFQAFgGAAgIQAAgKgGgGQgHgGgLAAQgUAAgIAZIgYgEQALgpApAAQAYAAAOANQANANAAARQAAASgSAKQAMAFAFAJQAGAJAAANQAAATgPAMQgOANgaAAQgyAAgIgtg");
	this.shape_20.setTransform(858.075,1658.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2BjIgCgYQAIADAGAAQAIAAAFgDQAFgDAEgFIAHgSIACgGIg4iQIAbAAIAfBUQAGAQAEAQQAEgPAGgQIAghVIAZAAIg5CTQgJAXgEAJQgGAMgJAGQgIAGgMAAQgIAAgJgDg");
	this.shape_21.setTransform(836.825,1661.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAbBJIgbgtQgHgOgGgEQgHgFgIAAIAABEIgZAAIAAiQIAZAAIAAA/QAMgBAFgEQAEgFAJgWQAHgQAFgGQAEgFAGgDQAGgBAOAAIAFAAIAAAUIgHAAQgKAAgDACQgDADgGAPQgGAPgEAFQgFAFgJAFQAPADAQAaIAbAtg");
	this.shape_22.setTransform(824.075,1658.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAhBJIAAh8IhBAAIAAB8IgZAAIAAiQIBzAAIAACQg");
	this.shape_23.setTransform(809.075,1658.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgxA4QgTgTAAglQAAgnAXgUQATgQAaAAQAeAAAUAUQATATAAAjQAAAbgIAQQgJAQgQAJQgRAJgTAAQgeAAgTgUgAgegpQgNAOAAAbQAAAcANAOQAMANASAAQATAAAMgOQAMgNAAgcQAAgbgMgOQgNgOgSAAQgSAAgMAOg");
	this.shape_24.setTransform(793.375,1658.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAjBJIAAhAIhFAAIAABAIgZAAIAAiQIAZAAIAAA8IBFAAIAAg8IAZAAIAACQg");
	this.shape_25.setTransform(777.675,1658.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAbBJIgbgtQgHgOgGgEQgHgFgIAAIAABEIgZAAIAAiQIAZAAIAAA/QAMgBAFgEQAEgFAJgWQAHgQAFgGQAEgFAGgDQAGgBAOAAIAFAAIAAAUIgHAAQgKAAgDACQgDADgGAPQgGAPgEAFQgFAFgJAFQAPADAQAaIAbAtg");
	this.shape_26.setTransform(764.575,1658.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag7BJIAAiQIA5AAQAUgBALAEQAKADAHAKQAIAJAAANQAAALgEAHQgFAIgJAFQALADAHAJQAGAJAAANQgBAUgOALQgNAJgaABgAgjA1IAhAAQAVgBAHgFQAJgEAAgMQAAgHgEgGQgFgGgIgBQgHgCgPAAIgfAAgAgjgLIAbAAQAPAAAGgBQAGgBAFgFQAFgGgBgHQAAgLgHgFQgJgEgTAAIgcAAg");
	this.shape_27.setTransform(742.3,1658.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAjBJIAAhtIhEBtIgbAAIAAiQIAZAAIAABtIBFhtIAbAAIAACQg");
	this.shape_28.setTransform(726.35,1658.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAjBJIAAg7QgXAHgTAAQgRAAgNgIQgMgJgGgLQgEgMAAgOIAAgmIAZAAIAAAbQAAASADAIQABAIAIAGQAJAEAMABQANAAAXgHIAAhBIAZAAIAACQg");
	this.shape_29.setTransform(710.55,1658.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQA6QgRgSgCggIgfAAIAABAIgZAAIAAiQIAZAAIAAA9IAfAAQADgfARgQQAPgRAaAAQAXAAANAJQANAJAIAPQAJAQAAAaQAAAlgSATQgRAUgeAAQgbAAgQgSgAAAgoQgKAOAAAZQAAAdAKANQAKAOARAAQARAAALgMQALgNAAgdQAAgbgJgOQgKgOgTAAQgSAAgKAOg");
	this.shape_30.setTransform(693.9,1658.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhHBIIAAgVIALAAQAHABAEgCQADgCABgDQABgDAAgTIAAhfIB0AAIAACQIgZAAIAAh7IhCAAIAABGQAAAagBAIQgCAIgHAGQgIAGgOAAIgUgBg");
	this.shape_31.setTransform(673.8,1658.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAbBJIgbgtQgHgOgGgEQgHgFgIAAIAABEIgZAAIAAiQIAZAAIAAA/QAMgBAFgEQAEgFAJgWQAHgQAFgGQAEgFAGgDQAGgBAOAAIAFAAIAAAUIgHAAQgKAAgDACQgDADgGAPQgGAPgEAFQgFAFgJAFQAPADAQAaIAbAtg");
	this.shape_32.setTransform(660.725,1658.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgMBJIAAh8IgvAAIAAgUIB3AAIAAAUIgwAAIAAB8g");
	this.shape_33.setTransform(646.95,1658.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgxA4QgTgTAAglQAAgnAXgUQATgQAaAAQAeAAAUAUQATATAAAjQAAAbgIAQQgJAQgQAJQgRAJgTAAQgeAAgTgUgAgegpQgNAOAAAbQAAAcANAOQAMANASAAQATAAAMgOQAMgNAAgcQAAgbgMgOQgNgOgSAAQgSAAgMAOg");
	this.shape_34.setTransform(633.075,1658.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgaAiIAOhDIAnAAIgUBDg");
	this.shape_35.setTransform(620.775,1665.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAkBJIAAhtIhFBtIgaAAIAAiQIAZAAIAABtIBDhtIAbAAIAACQg");
	this.shape_36.setTransform(609.5,1658.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAbBJIgbgtQgHgOgGgEQgHgFgIAAIAABEIgZAAIAAiQIAZAAIAAA/QAMgBAFgEQAEgFAJgWQAHgQAFgGQAEgFAGgDQAGgBAOAAIAFAAIAAAUIgHAAQgKAAgDACQgDADgGAPQgGAPgEAFQgFAFgJAFQAPADAQAaIAbAtg");
	this.shape_37.setTransform(596.375,1658.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgwA4QgTgUAAgjQAAgjATgVQAUgUAdAAQAdAAAUAUQASAUAAAjIAAAGIhtAAQABAYANANQAMAMARAAQAOAAAKgHQAJgHAHgPIAZADQgGAWgRAMQgQANgaAAQgfAAgTgUgAgbgrQgMALgBATIBSAAQgCgSgIgJQgMgPgTAAQgQAAgMAMg");
	this.shape_38.setTransform(581.1,1658.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag/BmIAAjIIAWAAIAAATQAIgLALgFQAKgGANAAQAUAAAOAKQAPAJAGASQAIARAAAVQAAAWgIARQgJASgOAJQgRAKgQAAQgMAAgKgGQgKgFgGgIIAABHgAgchDQgNAPAAAcQAAAbAMANQALANARAAQAQAAALgNQAMgOAAgcQAAgcgLgOQgMgOgPAAQgQAAgMAPg");
	this.shape_39.setTransform(565.7,1660.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgMBJIAAh8IgvAAIAAgUIB3AAIAAAUIgwAAIAAB8g");
	this.shape_40.setTransform(550.9,1658.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgwA4QgTgUAAgjQAAgjATgVQATgUAeAAQAdAAATAUQATAUAAAjIAAAGIhtAAQABAYANANQAMAMASAAQANAAAKgHQAKgHAFgPIAaADQgGAWgQAMQgRANgZAAQggAAgTgUgAgagrQgMALgCATIBRAAQgBgSgIgJQgMgPgTAAQgQAAgLAMg");
	this.shape_41.setTransform(528.5,1658.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AA5BJIAAiQIAaAAIAACQgAhSBJIAAiQIAZAAIAAA4IAgAAQAeAAARAMQARALAAAUQgBASgOANQgOANgdABgAg5A1IAaAAQAYgBAKgFQAKgGgBgNQAAgJgHgHQgHgIgZAAIgeAAg");
	this.shape_42.setTransform(510.4,1658.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AA1BJIAAh0IgsB0IgVAAIgph6IAAB6IgYAAIAAiQIAmAAIAnBzIAqhzIAkAAIAACQg");
	this.shape_43.setTransform(490.4,1658.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAkBJIAAhtIhEBtIgbAAIAAiQIAZAAIAABtIBDhtIAbAAIAACQg");
	this.shape_44.setTransform(472.6,1658.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgmBcQgPgMgIgSQgIgSAAguQAAg5AUgTQAUgVAoABQAaAAADgBQAEgBABgDIAWAAQgCAPgFAFQgFAGgIACQgIABgXAAQgeABgLAFQgMAGgFANQgFANAAAUQAJgOANgGQANgIAOABQAeAAATATQATAUAAAgQAAAagKAQQgKAQgNAJQgNAJgXAAQgZAAgOgMgAgdgHQgMAOAAAZQAAAZANANQAMAOASAAQASAAAMgQQALgPAAgZQAAgXgKgNQgLgPgUAAQgUAAgLAQg");
	this.shape_45.setTransform(456.575,1655.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQA6QgRgSgCggIgfAAIAABAIgYAAIAAiQIAYAAIAAA9IAfAAQADgfARgQQAPgRAbAAQAWAAANAJQANAJAIAPQAJAQAAAaQAAAlgSATQgRAUgeAAQgbAAgQgSgAAAgoQgKAOAAAZQAAAdAKANQAJAOASAAQARAAALgMQALgNAAgdQAAgbgKgOQgJgOgTAAQgTAAgJAOg");
	this.shape_46.setTransform(438.05,1658.125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhHBIIAAgVIALAAQAIABADgCQAEgCAAgDQABgDAAgTIAAhfIB0AAIAACQIgZAAIAAh7IhCAAIAABGQABAagCAIQgCAIgIAGQgHAGgOAAIgUgBg");
	this.shape_47.setTransform(417.95,1658.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAkBJIAAhtIhFBtIgbAAIAAiQIAZAAIAABtIBFhtIAbAAIAACQg");
	this.shape_48.setTransform(394.6,1658.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgxA4QgTgTAAglQAAgnAXgUQATgQAaAAQAeAAAUAUQATATAAAjQAAAbgIAQQgJAQgQAJQgRAJgTAAQgeAAgTgUgAgegpQgNAOAAAbQAAAcANAOQAMANASAAQATAAAMgOQAMgNAAgcQAAgbgMgOQgNgOgSAAQgSAAgMAOg");
	this.shape_49.setTransform(378.675,1658.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ag7BJIAAiQIA5AAQAUgBALAEQAKADAIAKQAHAJAAANQAAALgEAHQgFAIgJAFQALADAHAJQAGAJAAANQgBAUgOALQgNAJgaABgAgjA1IAhAAQAVgBAHgFQAJgEAAgMQAAgHgEgGQgFgGgIgBQgHgCgPAAIgfAAgAgjgLIAbAAQAPAAAGgBQAGgBAFgFQAFgGAAgHQgBgLgHgFQgJgEgTAAIgcAAg");
	this.shape_50.setTransform(363.95,1658.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgtA4QgSgTgBglQABgWAHgSQAIgRARgJQAQgJASAAQAYAAAPAMQAPAMAFAWIgYAEQgEgPgJgHQgJgIgMAAQgSAAgMAOQgMANAAAcQAAAdAMANQALANASAAQAOAAAKgJQAKgIACgTIAaADQgFAZgRAOQgQAPgYAAQgeAAgSgUg");
	this.shape_51.setTransform(349.3,1658.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag8BJIAAiQIAaAAIAAA4IAfAAQAeAAARAMQAQALABAUQAAASgPANQgNANgfABgAgiA1IAaAAQAXgBAKgFQAKgGAAgNQAAgJgIgHQgHgIgZAAIgdAAg");
	this.shape_52.setTransform(327,1658.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgMBJIAAh8IgvAAIAAgUIB3AAIAAAUIgwAAIAAB8g");
	this.shape_53.setTransform(312.6,1658.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("Ag2BAQgNgMAAgSQAAgLAFgIQAEgJAJgFQAHgFALgDIAWgDQAdgEAOgFIAAgGQABgPgIgGQgJgJgSAAQgSAAgIAHQgJAGgDAPIgZgDQADgQAIgJQAIgKAOgFQAPgFASAAQASAAAMAFQAMAEAGAHQAGAGACAKQABAGAAARIAAAgQAAAiABAJQACAJAFAIIgaAAQgEgHgCgLQgOAMgMAFQgMAFgPAAQgYAAgNgMgAgFAJQgQACgGADQgHACgDAGQgEAFABAGQAAAKAHAHQAIAGAOAAQAOAAALgGQALgGAGgLQADgIAAgQIAAgJQgNAFgaAEg");
	this.shape_54.setTransform(298.7,1658.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AheBJIAAiQIAZAAIAAB7IA6AAIAAh7IAXAAIAAB7IA6AAIAAh7IAYAAIAACQg");
	this.shape_55.setTransform(279.4,1658.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Ag2BjIgCgYQAIADAGAAQAIAAAFgDQAFgDAEgFIAHgSIACgGIg4iQIAbAAIAfBUQAGAQAEAQQAEgPAGgQIAghVIAZAAIg5CTQgJAXgEAJQgGAMgJAGQgIAGgMAAQgIAAgJgDg");
	this.shape_56.setTransform(260.975,1661.05);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhHBIIAAgVIALAAQAIABADgCQAEgCAAgDQABgDAAgTIAAhfIB0AAIAACQIgZAAIAAh7IhCAAIAABGQABAagCAIQgCAIgIAGQgHAGgOAAIgUgBg");
	this.shape_57.setTransform(244.7,1658.15);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgtA4QgSgTAAglQgBgWAJgSQAHgRARgJQAQgJASAAQAYAAAQAMQAPAMAEAWIgZAEQgDgPgIgHQgKgIgMAAQgSAAgMAOQgLANAAAcQAAAdALANQALANARAAQAPAAAKgJQAKgIACgTIAZADQgEAZgQAOQgRAPgYAAQgdAAgTgUg");
	this.shape_58.setTransform(230.45,1658.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgwA4QgTgUAAgjQAAgjATgVQATgUAeAAQAdAAATAUQATAUAAAjIAAAGIhtAAQABAYAMANQANAMASAAQANAAAKgHQAKgHAFgPIAaADQgGAWgQAMQgRANgZAAQggAAgTgUgAgagrQgMALgCATIBRAAQgBgSgIgJQgMgPgTAAQgQAAgLAMg");
	this.shape_59.setTransform(207.1,1658.125);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgLBJIAAh8IgwAAIAAgUIB3AAIAAAUIgwAAIAAB8g");
	this.shape_60.setTransform(193.1,1658.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgwA4QgTgUAAgjQAAgjATgVQAUgUAdAAQAdAAAUAUQASAUAAAjIAAAGIhtAAQABAYAMANQANAMASAAQANAAAKgHQAJgHAGgPIAaADQgGAWgRAMQgQANgZAAQggAAgTgUgAgbgrQgMALgBATIBRAAQgBgSgIgJQgMgPgTAAQgQAAgMAMg");
	this.shape_61.setTransform(179.45,1658.125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ABFBJIgbgtQgJgOgGgEQgGgFgIAAIAABEIgZAAIAAhEQgIAAgHAFQgFAEgJAOIgaAtIgcAAIAbgtQAQgaAQgDQgLgFgFgGQgEgGgJgWQgDgIgEgCQgDgBgHAAIgIAAIAAgUIAEAAQAOAAAHABQAFACAFAGQAFAFAHARQAJAWAFAEQAFAGAMAAIAAg/IAZAAIAAA/QALgBAFgEQAGgFAIgWQAKgUAHgGQAGgFAPAAIAJAAIAAAUIgHAAQgJAAgEACQgDADgFAPQgGAPgEAFQgFAFgLAFQARADAQAaIAbAtg");
	this.shape_62.setTransform(162.15,1658.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgxA4QgTgTAAglQAAgnAXgUQATgQAaAAQAeAAAUAUQATATAAAjQAAAbgIAQQgJAQgQAJQgRAJgTAAQgeAAgTgUgAgegpQgNAOAAAbQAAAcANAOQAMANASAAQATAAAMgOQAMgNAAgcQAAgbgMgOQgNgOgSAAQgSAAgMAOg");
	this.shape_63.setTransform(144.975,1658.125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AA2BJIAAh0IgtB0IgVAAIgph6IAAB6IgZAAIAAiQIAoAAIAmBzIArhzIAkAAIAACQg");
	this.shape_64.setTransform(127.3,1658.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AA5BJIAAiQIAZAAIAACQgAhRBJIAAiQIAZAAIAAA4IAfAAQAeAAARAMQAQALAAAUQABASgOANQgPANgdABgAg4A1IAZAAQAYgBAJgFQAKgGAAgNQABgJgIgHQgHgIgZAAIgdAAg");
	this.shape_65.setTransform(99.4,1658.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AhMBkIAAjHIBMAAQAXAAAOAHQAOAGAIAMQAIAMAAAOQAAANgHAMQgHAKgOAHQASAGAKAMQAKAMAAASQAAAOgGAMQgHAMgIAHQgJAHgOADQgNADgUAAgAgxBNIAxAAIATgBQAKgCAFgEQAHgEAEgHQAEgHAAgKQAAgLgGgIQgGgJgKgDQgLgDgSgBIgvAAgAgxgPIAsAAQARAAAIgCQAKgDAFgHQAFgHABgLQAAgKgGgHQgFgIgIgDQgKgCgVAAIgoAAg");
	this.shape_66.setTransform(80,1655.35);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgSAQQgHgHAAgJQAAgJAIgHQAHgFAKAAQALgBAIAHQAHAGAAAJQAAAJgIAHQgHAGgLABQgKgBgIgGg");
	this.shape_67.setTransform(58.525,1663.45);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Ag/BbIAAglQAVAOAaAAQAQAAAJgHQAJgHAAgNQABgNgMgHQgKgHgVAAIgSAAIAAggIAQAAQAmAAABgZQAAgYgeAAQgTAAgTAMIAAgjQAVgKAcAAQAeAAARANQAQAOABAVQAAAngoAJIAAABQAVADAMALQAMANAAASQAAAbgUAQQgUAQgjAAQgfAAgUgKg");
	this.shape_68.setTransform(46.25,1655.575);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgUBEQgIgGAAgKQAAgKAIgHQAJgHALAAQAOAAAHAHQAIAHAAAKQAAAKgIAHQgIAGgNAAQgMAAgIgHgAgUgiQgIgHAAgKQAAgKAIgHQAJgGALAAQAOAAAHAGQAIAHAAAKQAAAKgIAHQgIAGgNAAQgMAAgIgGg");
	this.shape_69.setTransform(289.4,1553.375);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AApBLIAAhxIhOBxIggAAIAAiVIAdAAIAABxIBOhxIAgAAIAACVg");
	this.shape_70.setTransform(275.9,1553);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AA9BLIAAh4IgyB4IgZAAIgvh+IAAB+IgcAAIAAiVIAtAAIAsB3IAwh3IAqAAIAACVg");
	this.shape_71.setTransform(255.55,1553);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAuBLIAAg6IgQAAQgPAAgIADQgHAEgNATIgZAgIgkAAIAfgoQAOgTAOgCQgYgDgMgMQgMgMAAgSQAAgTAQgMQAPgMAdAAIBOAAIAACVgAgaguQgIAHAAAKQAAANALAHQALAFAbABIAfAAIAAgyIgoAAQgZAAgHAHg");
	this.shape_72.setTransform(234.675,1553);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AApBLIAAhxIhPBxIgeAAIAAiVIAcAAIAABxIBPhxIAfAAIAACVg");
	this.shape_73.setTransform(217.6,1553);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAnBLIAAhDIhOAAIAABDIgdAAIAAiVIAdAAIAAA/IBOAAIAAg/IAdAAIAACVg");
	this.shape_74.setTransform(199.55,1553);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("Ag+BDQgPgNAAgTQAAgLAGgJQAFgJAKgFQAJgFALgDIAagEQAhgDARgFIAAgHQAAgQgIgGQgLgJgVAAQgUAAgKAHQgJAGgFAQIgcgEQAEgQAJgJQAIgKARgGQAQgFAVAAQAWAAANAFQAOAEAGAHQAHAHACAKQACAHAAARIAAAhQAAAkABAJQACAKAGAIIgeAAQgFgIgBgKQgQAMgPAFQgNAFgRAAQgcAAgPgMgAgGAJQgSACgHADQgHADgEAGQgEAFAAAHQAAAKAIAHQAJAHARAAQAPAAANgHQANgGAGgMQAFgIAAgRIAAgJQgQAFgeAEg");
	this.shape_75.setTransform(181.375,1553.025);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgNBLIAAiAIg3AAIAAgVICJAAIAAAVIg3AAIAACAg");
	this.shape_76.setTransform(165.325,1553);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Ag3A6QgWgUAAglQAAglAWgVQAWgVAiAAQAiAAAVAVQAWAUAAAlIAAAGIh9AAQABAZAPANQAOAOAUAAQAQAAALgIQALgHAGgQIAeADQgHAXgTANQgTANgdAAQgkAAgWgVgAgfgtQgNAMgCATIBeAAQgCgTgJgJQgOgPgWAAQgSAAgOAMg");
	this.shape_77.setTransform(149.775,1553.025);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAoBLIAAg8QgaAHgWAAQgUAAgOgJQgPgIgFgMQgFgMgBgQIAAgnIAdAAIAAAcQAAATADAIQACAJAJAFQAKAGAOgBQAPAAAagGIAAhEIAdAAIAACVg");
	this.shape_78.setTransform(131.8,1553);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("Ag4A6QgWgUAAgmQAAgpAagUQAVgRAfAAQAjAAAWAUQAWAVAAAkQAAAcgJARQgKAQgTAJQgTAKgWAAQgjAAgVgVgAgjgqQgOAOAAAcQAAAdAOAOQAOAPAVAAQAVAAAOgPQAOgOABgdQgBgcgOgOQgOgPgVAAQgVAAgOAPg");
	this.shape_79.setTransform(115.45,1553.025);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgzA6QgWgUAAgmQAAgXAKgSQAJgTASgJQATgJAUAAQAcAAARANQASAMAFAXIgcAEQgEgQgKgHQgKgIgOAAQgVAAgOAOQgNAOAAAdQAAAeANAOQANAOAUAAQARAAALgKQALgJADgTIAdADQgFAagTAPQgTAPgcAAQghAAgVgVg");
	this.shape_80.setTransform(98.425,1553.025);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AApBLIAAhxIhPBxIgeAAIAAiVIAcAAIAABxIBPhxIAeAAIAACVg");
	this.shape_81.setTransform(353.5,1518.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AA9BLIAAh4IgyB4IgYAAIgwh+IAAB+IgcAAIAAiVIAtAAIAsB3IAxh3IAoAAIAACVg");
	this.shape_82.setTransform(333.15,1518.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("ABCBLIAAiVIAdAAIAACVgAhdBLIAAiVIAcAAIAAA6IAlAAQAiAAATANQAUALgBAWQABASgRAOQgPAOgjgBgAhBA2IAeAAQAbAAALgFQAMgHAAgMQAAgKgJgHQgHgIgeAAIgiAAg");
	this.shape_83.setTransform(310.2,1518.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AhEBLIAAiVIBBAAQAYAAAMADQAMAEAJAKQAHAJAAANQABAMgFAHQgFAJgLAFQANADAHAJQAIAKAAAOQgBAVgQAKQgPAKgeAAgAgoA2IAmAAQAXAAAJgEQAKgGAAgMQAAgHgGgHQgEgFgJgCQgIgCgSAAIgjAAgAgogLIAfAAQARAAAHgBQAHgCAFgFQAFgGAAgHQAAgMgJgEQgJgFgWAAIggAAg");
	this.shape_84.setTransform(290.35,1518.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Ag4A6QgWgUAAgmQAAgpAagUQAWgRAeAAQAjAAAWAUQAWAVAAAkQAAAcgJARQgLAQgSAJQgTAKgWAAQgiAAgWgVgAgigqQgPAOAAAcQAAAdAPAOQAOAPAUAAQAWAAAOgPQANgOAAgdQAAgcgNgOQgPgPgVAAQgUAAgOAPg");
	this.shape_85.setTransform(272.1,1518.925);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgNBLIAAiAIg3AAIAAgVICJAAIAAAVIg3AAIAACAg");
	this.shape_86.setTransform(256.025,1518.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ag3A6QgWgUAAglQAAglAWgVQAWgVAiAAQAiAAAVAVQAWAUAAAlIAAAGIh9AAQABAZAPANQAOAOAUAAQAQAAALgIQALgHAGgQIAeADQgHAXgTANQgTANgdAAQgkAAgWgVgAgfgtQgNAMgCATIBeAAQgCgTgJgJQgOgPgWAAQgSAAgOAMg");
	this.shape_87.setTransform(240.475,1518.925);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhFBLIAAiVIBDAAQAXAAAMADQALAEAKAKQAIAJAAANQgBAMgEAHQgGAJgJAFQALADAJAJQAHAKABAOQgCAVgQAKQgPAKgeAAgAgnA2IAlAAQAYAAAIgEQAKgGAAgMQAAgHgFgHQgFgFgJgCQgJgCgRAAIgiAAgAgngLIAeAAQARAAAHgBQAHgCAFgFQAGgGAAgHQAAgMgKgEQgKgFgVAAIgfAAg");
	this.shape_88.setTransform(223.7,1518.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AA2BhIAAgrIiCAAIAAiWIAcAAIAACBIBPAAIAAiBIAcAAIAACBIATAAIAABAg");
	this.shape_89.setTransform(205.9,1521.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Ag9BnIgDgYQAJACAHAAQAKAAAFgCQAGgEADgEQAEgFAFgOIADgHIhBiWIAgAAIAjBXQAHARAEASQAFgRAHgRIAkhYIAcAAIhACYQgKAZgFAKQgIANgJAFQgKAGgOAAQgIAAgKgDg");
	this.shape_90.setTransform(178.95,1521.95);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("ABCBhIAAgrIiDAAIAAArIgYAAIAAhAIAPAAQAfgjgCheIB1AAIAACBIASAAIAABAgAguAhIBaAAIAAhrIhBAAQgEBJgVAig");
	this.shape_91.setTransform(160.7,1521.025);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("ABOBLIgeguQgJgPgHgEQgIgEgKAAIAABFIgbAAIAAhFQgKAAgHAEQgHAEgKAPIgeAuIggAAIAgguQARgaATgEQgNgFgFgGQgFgGgKgYQgEgIgEgCQgDgCgJAAIgIABIAAgVIADAAQARAAAHABQAHACAFAGQAFAGAJASQALAWAFAFQAGAFAOAAIAAhBIAbAAIAABBQAOAAAGgFQAFgEALgXQAKgWAIgGQAIgFARAAIAKAAIAAAVIgIgBQgLAAgDADQgEAEgGAQQgHAOgFAGQgFAFgMAFQATAEARAaIAgAug");
	this.shape_92.setTransform(140.85,1518.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("Ag3A6QgWgUAAglQAAglAWgVQAWgVAiAAQAiAAAVAVQAWAUAAAlIAAAGIh9AAQABAZAPANQAOAOAUAAQAQAAALgIQALgHAGgQIAeADQgHAXgTANQgTANgdAAQgkAAgWgVgAgfgtQgNAMgCATIBeAAQgCgTgJgJQgOgPgWAAQgSAAgOAMg");
	this.shape_93.setTransform(121.175,1518.925);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AA9BLIAAh4IgyB4IgZAAIguh+IAAB+IgcAAIAAiVIAsAAIAsB3IAwh3IAqAAIAACVg");
	this.shape_94.setTransform(101,1518.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AhEBLIAAiWIAcAAIAAA7IAlAAQAiAAATANQATALAAAWQAAASgPAOQgRANgjAAgAgoA3IAeAAQAbAAALgHQAMgFAAgNQAAgKgJgIQgIgHgdAAIgiAAg");
	this.shape_95.setTransform(372.775,1484.85);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgzA6QgWgUAAgmQAAgXAKgSQAJgTASgJQATgJAUAAQAcAAARANQASAMAFAXIgcAEQgEgQgKgHQgKgIgOAAQgVAAgOAOQgNAOAAAdQAAAeANAOQANAOAUAAQARAAALgKQALgJADgTIAdADQgFAagTAPQgTAPgcAAQghAAgVgVg");
	this.shape_96.setTransform(356.075,1484.875);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("Ag3A6QgWgUAAglQAAglAWgVQAWgVAiAAQAiAAAVAVQAWAUAAAlIAAAGIh9AAQABAZAPANQAOAOAUAAQAQAAALgIQALgHAGgQIAeADQgHAXgTANQgTANgdAAQgkAAgWgVgAgfgtQgNAMgCATIBeAAQgCgTgJgJQgOgPgWAAQgSAAgOAMg");
	this.shape_97.setTransform(338.325,1484.875);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgNBLIAAiAIg3AAIAAgWICJAAIAAAWIg3AAIAACAg");
	this.shape_98.setTransform(322.275,1484.85);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AApBoIAAhyIhOByIggAAIAAiWIAdAAIAAByIBOhyIAgAAIAACWgAgdhLQgMgKgDgSIAUAAQACAKAHAEQAHAGAJAAQAOAAAGgGQAGgEADgKIAUAAQgDASgMAKQgMAJgVAAQgTAAgMgJg");
	this.shape_99.setTransform(305.7,1482);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("Ag+BDQgPgNAAgTQAAgLAGgJQAFgJAKgFQAJgFALgDIAagEQAhgDARgFIAAgHQAAgQgIgGQgLgJgVAAQgUAAgKAHQgJAGgFAQIgcgEQAEgQAJgJQAIgKARgGQAQgFAVAAQAWAAANAFQAOAEAGAHQAHAHACAKQACAHAAARIAAAhQAAAkABAJQACAKAGAIIgeAAQgFgIgBgKQgQAMgPAFQgNAFgRAAQgcAAgPgMgAgGAJQgSACgHADQgHADgEAGQgEAFAAAHQAAAKAIAHQAJAHARAAQAPAAANgHQANgGAGgMQAFgIAAgRIAAgJQgQAFgeAEg");
	this.shape_100.setTransform(287.425,1484.875);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAoBLIAAg9QgbAIgWAAQgSAAgPgJQgPgIgGgMQgEgNAAgPIAAgoIAcAAIAAAdQAAASACAJQADAJAKAFQAJAGAOAAQAPgBAagGIAAhFIAcAAIAACWg");
	this.shape_101.setTransform(269.45,1484.85);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgTA8QgTgTgDggIgiAAIAABCIgdAAIAAiWIAdAAIAAA/IAiAAQAEggAUgRQARgRAeAAQAaAAAPAJQAPAJAJARQAJAQAAAbQABAmgVAUQgTAVgiAAQgfAAgTgTgAAAgqQgMAPAAAaQAAAeAMAOQALAPATAAQAUAAANgOQAMgNAAgeQAAgcgKgPQgMgOgVAAQgVAAgLAOg");
	this.shape_102.setTransform(250.4,1484.875);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AhRBLIAAgWIAMAAQAJAAAEgBQAEgBABgEQABgEAAgUIAAhiICEAAIAACWIgcAAIAAiBIhLAAIAABLQAAAZgCAJQgCAJgJAFQgIAHgQAAIgXgBg");
	this.shape_103.setTransform(227.425,1484.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAeBLIgeguQgJgPgHgDQgHgFgJAAIAABFIgdAAIAAiWIAdAAIAABCQANAAAGgFQAFgFAKgWQAIgSAGgFQAFgHAHgBQAHgCAPgBIAFAAIAAAWIgHAAQgMAAgDACQgDAEgHAPQgHAPgFAFQgFAHgLAEQASADARAbIAgAug");
	this.shape_104.setTransform(212.425,1484.85);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("Ag3A6QgWgUAAglQAAglAWgVQAWgVAiAAQAiAAAVAVQAWAUAAAlIAAAGIh9AAQABAZAPANQAOAOAUAAQAQAAALgIQALgHAGgQIAeADQgHAXgTANQgTANgdAAQgkAAgWgVgAgfgtQgNAMgCATIBeAAQgCgTgJgJQgOgPgWAAQgSAAgOAMg");
	this.shape_105.setTransform(194.975,1484.875);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AhIBqIAAjQIAaAAIAAAUQAJgLAMgHQALgFAQAAQAVAAARAKQARAJAIATQAIASAAAVQAAAYgJARQgJATgSAKQgSAKgTgBQgOAAgLgFQgLgFgIgJIAABKgAgghGQgOAPAAAdQAAAdANANQANAOATABQASAAAOgPQANgPAAgdQAAgdgNgOQgNgOgSAAQgSAAgOAPg");
	this.shape_106.setTransform(177.325,1487.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("Ag3A6QgWgUAAglQAAglAWgVQAWgVAiAAQAiAAAVAVQAWAUAAAlIAAAGIh9AAQABAZAPANQAOAOAUAAQAQAAALgIQALgHAGgQIAeADQgHAXgTANQgTANgdAAQgkAAgWgVgAgfgtQgNAMgCATIBeAAQgCgTgJgJQgOgPgWAAQgSAAgOAMg");
	this.shape_107.setTransform(158.675,1484.875);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AA9BoIAAi3Ih5AAIAAC3IgfAAIAAjPIC3AAIAADPg");
	this.shape_108.setTransform(138.025,1482);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgUAQQgJgGAAgKQAAgJAJgHQAIgGANAAQAMgBAJAIQAHAGABAJQgBAKgHAHQgJAGgNAAQgMABgIgIg");
	this.shape_109.setTransform(112.95,1490.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AhLBnIAAgPQAAgPAGgNQAGgNAJgJQAJgKAKgIIAUgOIARgLIANgLQAFgGACgGQADgFAAgIQAAgMgIgHQgJgGgQgBQgdAAgbAVIAAgoQAegRAkAAQARAAAOAFQAOAEAJAHQAKAHAFALQAFALAAAOQAAAOgFAKQgFALgIAJQgIAIgKAHIgWAPIgPAJIgLAKQgGAEgDAFQgDAFAAADIBgAAIAAAlg");
	this.shape_110.setTransform(98.725,1482.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Color1
	this.color1 = new lib.Color11();
	this.color1.name = "color1";
	this.color1.setTransform(536.95,1590.2,1,1,0,0,0,80,160);

	this.timeline.addTween(cjs.Tween.get(this.color1).wait(1));

	// Color2
	this.color2 = new lib.Color2();
	this.color2.name = "color2";
	this.color2.setTransform(704.75,1546.75,1.3923,1.3307,0,0,0,39.1,83.2);

	this.timeline.addTween(cjs.Tween.get(this.color2).wait(1));

	// Color3
	this.color3 = new lib.Color3();
	this.color3.name = "color3";
	this.color3.setTransform(903.4,1582.05,1.4292,1.3578,0,0,0,38.7,110);

	this.timeline.addTween(cjs.Tween.get(this.color3).wait(1));

	// Relax
	this.relax = new lib.Relax();
	this.relax.name = "relax";
	this.relax.setTransform(639.35,1374.45,1.1746,1.0261,0,0,0,156.8,44.5);

	this.timeline.addTween(cjs.Tween.get(this.relax).wait(1));

	// dinamika
	this.dinamika = new lib.Dinamika();
	this.dinamika.name = "dinamika";
	this.dinamika.setTransform(871.9,1392.35,1.056,1.0639,0,0,0,121.2,59.8);

	this.timeline.addTween(cjs.Tween.get(this.dinamika).wait(1));

	// Video1
	this.video1 = new lib.an_Video({'id': 'video1', 'src':'videos/video1.mp4', 'autoplay':false, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.video1.name = "video1";
	this.video1.setTransform(539.6,784.6,2.6473,3.5445,0,0,0,200.4,150.2);

	this.timeline.addTween(cjs.Tween.get(this.video1).wait(1));

	// page1
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FF9900").ss(2,1,1).p("EhSZiEeMCkzAAAMAAAEI9MikzAAAg");
	this.shape_111.setTransform(540.575,966.325);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#001320").s().p("EhSZCEfMAAAkI9MCkzAAAMAAAEI9g");
	this.shape_112.setTransform(540.575,966.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_112},{t:this.shape_111}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.page1, new cjs.Rectangle(7.8,117.4,1061.6000000000001,1697.8999999999999), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {page2:2,page1:1,start_fon:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		stage.transparent = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// page2
	this.page2 = new lib.page1();
	this.page2.name = "page2";
	this.page2.setTransform(545.65,966.8,1.0347,1.0351,0,0,0,540.5,966.3);
	this.page2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.page2).wait(2).to({_off:false},0).wait(1));

	// page1
	this.page1 = new lib.page1();
	this.page1.name = "page1";
	this.page1.setTransform(545.65,966.8,1.0347,1.0351,0,0,0,540.5,966.3);
	this.page1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.page1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// start_fon
	this.start_fon = new lib.start_fon();
	this.start_fon.name = "start_fon";
	this.start_fon.setTransform(551.1,966.8,1,1,0,0,0,540.5,966.3);

	this.timeline.addTween(cjs.Tween.get(this.start_fon).to({_off:true},1).wait(2));
	this.start_fon.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(540.5,1014.3,552.4000000000001,831.3);
// library properties:
lib.properties = {
	id: 'F3E39131A32EBC4FA342DDF442C1D8E5',
	width: 1092,
	height: 1933,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1795281630889", id:"index_atlas_1"},
		{src:"components/lib/jquery-3.4.1.min.js?1795281631037", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1795281631037", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1795281631037", id:"an.Video"}
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
an.compositions['F3E39131A32EBC4FA342DDF442C1D8E5'] = {
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;