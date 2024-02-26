(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"visus_atlas_1", frames: [[1026,0,832,674],[1026,676,630,398],[0,0,1024,1024],[1860,0,64,38]]}
];

//----------------------

async function fastApi() {
	let response = await fetch("http://localhost:8000/r", {
		method: 'GET',
		header: {
			'Access-Control-Allow-Origin': '*'
		  }
	}).catch( () => {
		document.getElementById("testDiv").innerHTML = -404;
		return 0;
	}).then(() => {
		let text = response.text();
		School = text.split(' ');
		console.log('лицо: ' + School[0]);
		document.getElementById("testDiv").innerHTML = School[0];	
	});
	
} 


setInterval( async () => fastApi(),1000);


//----------------------

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



(lib.Растровоеизображение8копия = function() {
	this.initialize(ss["visus_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.card_type_img3 = function() {
	this.initialize(ss["visus_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Child1 = function() {
	this.initialize(ss["visus_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.hand = function() {
	this.initialize(ss["visus_atlas_1"]);
	this.gotoAndStop(3);
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


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;


(lib.red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBPIAdhPIAlAAIAABxg");
	this.shape.setTransform(39.175,-1.1);


	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AgdA1QgOgHgIgOQgHgOAAgSQAAgQAHgOQAIgOAOgHQANgIAQAAQAaAAAQARQARARAAAZQAAAagRARQgRARgZAAQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_1.setTransform(24.275,-1.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAAqIApAAIAAgqIAfAAIAABxg");
	this.shape_2.setTransform(10.85,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgQAYAAQAWAAAMAKQAMAIAGATIgeAFQgCgJgFgEQgGgFgIAAQgLAAgGAIQgHAIAAASQAAATAHAJQAHAIAKAAQAJAAAGgFQAFgFACgMIAeAGQgFAUgNAKQgNALgWAAQgYAAgPgQg");
	this.shape_3.setTransform(-1.75,-1.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgrAyQgJgJgBgPQAAgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgEgDgLAAQgJAAgEADQgFADgCAIIgbgFQAEgRALgIQALgIAXAAQATAAAKAFQAKAFAEAHQAEAIAAATIgBAjQAAAPACAHQABAHAEAIIgdAAIgDgJIgCgDQgHAHgJAEQgIAEgJAAQgTAAgKgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAFAIAAQAGAAAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_4.setTransform(-14.15,-1.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("Ag2BQIAAicIAcAAIAAAQQAFgIAJgGQAJgFALAAQAUAAAOAQQANAPAAAcQAAAcgNAQQgOAPgUAAQgIAAgIgDQgIgEgJgJIAAA5gAgRgvQgIAJAAARQABATAHAIQAIAJAKAAQAKAAAHgIQAHgIAAgTQAAgSgHgIQgHgJgLAAQgKAAgHAIg");
	this.shape_5.setTransform(-26.7,0.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AAUBPIgTgpIgBgDIgDgHQgHgMgDgDQgEgDgIAAIAABFIggAAIAAicIAgAAIAABDQALgBADgFQAEgEAHgUQAJgaAKgGQALgGAWAAIAEAAIAAAXIgEAAQgKAAgFACQgEADgDAFIgIAUQgDAIgDAGQgEAFgJAFQALACAHAJQAHAJAJARIAVArg");
	this.shape_6.setTransform(-39.75,-3.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B92429").ss(0.8).p("AFWBdIqrAAQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_7.setTransform(-0.0113,-2.5062,1.3793,2.4128,0,180,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F0ACAA","#EFA09E","#ED807E","#EB4C49","#EA0000","#E90000"],[0,0.118,0.333,0.62,0.965,1],0,9.4,0,-9.3).s().p("AlVBdQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_8.setTransform(-0.0113,-2.5062,1.3793,2.4128,0,180,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002277").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAApIApAAIAAgpIAfAAIAABxg");
	this.shape_9.setTransform(9.85,-2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgQAYAAQAWAAAMAKQAMAIAGATIgfAFQgBgJgFgEQgGgFgIAAQgLAAgGAIQgHAIAAASQAAATAHAJQAHAIAKAAQAJAAAGgFQAFgFACgMIAeAGQgFAUgNAKQgNALgWAAQgYAAgPgQg");
	this.shape_10.setTransform(-2.75,-2.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgrAyQgJgJgBgPQABgKAEgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgEgDgLAAQgJAAgEADQgEADgDAIIgbgFQAEgRALgIQALgIAXAAQATAAAKAFQAKAFAEAHQAEAIAAATIgBAjQAAAPACAHQACAHADAIIgdAAIgEgJIgBgDQgHAHgJAEQgIAEgKAAQgRAAgLgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAFAHAAQAHAAAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_11.setTransform(-15.15,-2.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("Ag2BQIAAicIAcAAIAAAQQAFgIAJgGQAJgFALAAQAUAAAOAQQAOAPAAAcQAAAcgOAQQgOAPgUAAQgJAAgHgDQgIgEgIgJIAAA5gAgRgvQgIAJABARQAAATAHAIQAIAJAKAAQAKAAAHgIQAHgIAAgTQAAgSgHgIQgHgJgLAAQgKAAgHAIg");
	this.shape_12.setTransform(-27.7,-0.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AAUBPIgSgpIgCgDIgDgHQgHgMgDgDQgEgDgIAAIAABFIggAAIAAicIAgAAIAABDQALgBADgFQAEgEAHgUQAJgaALgGQAKgGAVAAIAFAAIAAAXIgFAAQgJAAgEACQgFADgDAFIgIAUQgDAIgEAGQgDAFgJAFQALACAHAJQAHAJAJARIAVArg");
	this.shape_13.setTransform(-40.75,-4.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{skewX:180,y:-2.5062}},{t:this.shape_7,p:{skewX:180,y:-2.5062}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:24.275,y:-1.125}},{t:this.shape,p:{x:39.175,y:-1.1}}]}).to({state:[{t:this.shape_8,p:{skewX:0,y:-2.4938}},{t:this.shape_7,p:{skewX:0,y:-2.4938}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_1,p:{x:23.275,y:-2.125}},{t:this.shape,p:{x:38.175,y:-2.1}}]},1).to({state:[{t:this.shape_8,p:{skewX:180,y:-2.5062}},{t:this.shape_7,p:{skewX:180,y:-2.5062}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:24.275,y:-1.125}},{t:this.shape,p:{x:39.175,y:-1.1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-26,122,47);


(lib.an_RadioSet = function(options) {
	this.initialize();
	this._element = new $.an.RadioSet(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,64);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.odd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape.setTransform(53.2758,1.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJACAHAIQAGAIAAAMQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgDQAEgEAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_1.setTransform(37.925,1.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AAVA5IAAgwIgqAAIAAAwIgeAAIAAhxIAeAAIAAApIAqAAIAAgpIAfAAIAABxg");
	this.shape_2.setTransform(21.8,1.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAHQgGAHgIADQAMACAGAHQAFAJAAAJQAAAOgJAIQgKAIgTAAgAgYAlIAYAAQAMAAAGgCQAGgEAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANAAAGgDQAGgEAAgIQAAgGgFgEQgGgDgOAAIgUAAg");
	this.shape_3.setTransform(8.775,1.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgdA0QgOgHgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_4.setTransform(-5.025,1.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("Ag3BQIAAidIAcAAIAAARQAGgIAKgGQAJgFAKAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgJAAgHgDQgIgEgJgKIAAA6gAgSguQgGAIgBAQQAAAUAIAIQAIAJAJAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgHgJgLAAQgKAAgIAJg");
	this.shape_5.setTransform(-18.2,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_6.setTransform(-37.5742,1.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AAfBPIAAhFIg9AAIAABFIggAAIAAidIAgAAIAAA+IA9AAIAAg+IAgAAIAACdg");
	this.shape_7.setTransform(-51.6,-0.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D1566").ss(0.8).p("AFWBdIqrAAQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_8.setTransform(0.0038,-0.0062,1.6092,2.4128,0,180,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,9.4,0,-9.3).s().p("AlVBdQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_9.setTransform(0.0038,-0.0062,1.6092,2.4128,0,180,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_10.setTransform(52.2758,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARAAAJADQAJACAHAIQAGAJAAALQAAAQgLAJQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgIQAAgIgFgDQgGgDgRAAIgUAAg");
	this.shape_11.setTransform(36.925,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AAVA5IAAgwIgqAAIAAAwIgeAAIAAhxIAeAAIAAAqIAqAAIAAgqIAfAAIAABxg");
	this.shape_12.setTransform(20.8,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAIAAAOQAAAKgFAHQgGAIgIACQAMABAGAJQAFAHAAAKQAAANgJAJQgKAIgTAAgAgYAmIAYAAQAMAAAGgEQAGgCAAgJQAAgIgHgDQgHgEgSAAIgQAAgAgYgJIAUAAQANAAAGgEQAGgDAAgHQAAgIgFgCQgGgEgOAAIgUAAg");
	this.shape_13.setTransform(7.775,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgOAHgPQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAZgRARQgRARgZAAQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_14.setTransform(-6.025,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("Ag3BQIAAicIAcAAIAAAQQAGgJAKgFQAIgFALAAQAUAAAOAPQANAQAAAcQAAAcgNAQQgOAPgUAAQgJAAgHgEQgIgEgJgIIAAA5gAgSgvQgGAJgBARQAAATAIAIQAHAJAKAAQALAAAHgJQAHgHAAgTQAAgSgHgJQgIgJgKAAQgKAAgIAJg");
	this.shape_15.setTransform(-19.2,2.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_16.setTransform(-38.5742,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{skewX:180,y:-0.0062}},{t:this.shape_8,p:{skewX:180,y:-0.0062}},{t:this.shape_7,p:{x:-51.6,y:-0.225}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9,p:{skewX:0,y:0.0062}},{t:this.shape_8,p:{skewX:0,y:0.0062}},{t:this.shape_7,p:{x:-52.6,y:-1.275}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9,p:{skewX:180,y:-0.0062}},{t:this.shape_8,p:{skewX:180,y:-0.0062}},{t:this.shape_7,p:{x:-51.6,y:-0.225}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.5,142,47);


(lib.notequal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape.setTransform(34.8758,1.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJACAHAIQAGAIAAAMQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgDQAEgEAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_1.setTransform(19.525,1.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAApIAqAAIAAgpIAeAAIAABxg");
	this.shape_2.setTransform(3.4,1.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AgwAbIAbgEQAHARAOAAQAJAAAFgFQAFgFAAgFQAAgHgFgEQgFgEgJAAIgEAAIAAgTIAKgBQAEAAADgFQADgDAAgGQAAgFgEgFQgEgEgIAAQgFAAgEACQgFADgEAKIgagFQAEgQANgHQANgIAPABQAVgBALAKQALAJAAAOQAAAJgFAHQgFAFgKAFQANADAGAGQAGAIAAAKQAAAOgMAJQgNAKgXAAQgoAAgJghg");
	this.shape_3.setTransform(-9.025,1.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgKgBQgJAAgEADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQACAHAEAIIgeAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgNADgEACQgFAEgBAHQABAGAFAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_4.setTransform(-20.3,1.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("Ag7BPIAAidIAzAAQAcAAAJADQANADAJAMQAJAMAAATQAAAOgFAKQgFAJgIAGQgIAFgJACQgLACgVAAIgUAAIAAA8gAgbgGIARAAQASAAAGgDQAGgCAEgGQAEgFAAgHQAAgIgFgGQgFgGgIgBQgGgBgQAAIgPAAg");
	this.shape_5.setTransform(-33.475,-0.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D1566").ss(0.8).p("AFWBdIqrAAQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_6.setTransform(0.0038,-0.0062,1.6092,2.4128,0,180,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,9.4,0,-9.3).s().p("AlVBdQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_7.setTransform(0.0038,-0.0062,1.6092,2.4128,0,180,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_8.setTransform(33.8758,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARAAAJADQAJACAHAIQAGAJAAALQAAAQgLAJQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgIQAAgIgFgDQgGgDgRAAIgUAAg");
	this.shape_9.setTransform(18.525,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAAqIAqAAIAAgqIAeAAIAABxg");
	this.shape_10.setTransform(2.4,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgwAcIAbgGQAHARAOABQAJgBAFgEQAFgEAAgHQAAgGgFgEQgFgEgJAAIgEAAIAAgTIAKgBQAEgBADgDQADgFAAgEQAAgGgEgEQgEgFgIAAQgFAAgEACQgFADgEAKIgagGQAEgOANgIQANgHAPAAQAVAAALAJQALAJAAAPQAAAIgFAGQgFAGgKAFQANACAGAIQAGAGAAALQAAAOgMAJQgNAJgXAAQgoAAgJgfg");
	this.shape_11.setTransform(-10.025,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AgrAyQgKgJABgPQAAgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgFgEgLAAQgHABgFADQgFADgCAHIgcgEQAFgRALgHQAMgJAWABQATAAAKAEQAKAFAEAIQAEAGAAAVIgBAiQABAPABAGQABAIAFAIIgfAAIgDgJIgBgEQgHAIgJAEQgHADgLAAQgRAAgLgJgAAAAHQgNACgDADQgHAFAAAFQAAAHAGAEQAEAGAHAAQAIgBAHgFQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_12.setTransform(-21.3,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{skewX:180,y:-0.0062}},{t:this.shape_6,p:{skewX:180,y:-0.0062}},{t:this.shape_5,p:{x:-33.475,y:-0.225}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7,p:{skewX:0,y:0.0062}},{t:this.shape_6,p:{skewX:0,y:0.0062}},{t:this.shape_5,p:{x:-34.475,y:-1.275}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7,p:{skewX:180,y:-0.0062}},{t:this.shape_6,p:{skewX:180,y:-0.0062}},{t:this.shape_5,p:{x:-33.475,y:-0.225}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.5,142,47);


(lib.norm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AgdA1QgOgIgIgNQgHgOAAgSQAAgPAHgPQAIgOAOgHQANgIAQAAQAaAAAQARQARARAAAZQAAAZgRASQgRAQgZAAQgPAAgOgGgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape.setTransform(54.075,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAIAAAPQAAAJgFAIQgGAGgIADQAMABAGAJQAFAHAAAKQAAAOgJAHQgKAJgTAAgAgYAlIAYAAQAMABAGgDQAGgEAAgIQAAgIgHgDQgHgEgSABIgQAAgAgYgIIAUAAQANAAAGgFQAGgDAAgIQAAgGgFgEQgGgCgOAAIgUAAg");
	this.shape_1.setTransform(40.925,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AgdA1QgOgIgIgNQgHgOAAgSQAAgPAHgPQAIgOAOgHQANgIAQAAQAaAAAQARQARARAAAZQAAAZgRASQgRAQgZAAQgPAAgOgGgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_2.setTransform(27.125,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AAQA6IgQghQgDgLgDgCQgEgDgHAAIAAAxIgeAAIAAhyIAeAAIAAAvQAIgBADgDQADgFAEgMQAFgRAHgFQAHgEALAAIAMAAIAAAUQgMAAgDACQgDADgEALQgFAQgKAEQAOADAKAVIABACIARAgg");
	this.shape_3.setTransform(15.575,2.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgqAyQgKgKAAgOQgBgKAFgHQAEgIAJgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgFgEgLABQgHAAgFACQgEAEgDAHIgcgEQAFgRAMgIQAKgHAXgBQATABAKAEQAKAFAEAHQAEAIAAATIAAAiQgBAQACAGQACAIAEAIIgfAAIgCgJIgBgDQgIAHgJAEQgHADgKAAQgSABgKgKgAAAAHQgNACgDADQgHAFAAAFQAAAHAGAFQAEAEAIAAQAGAAAIgFQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_4.setTransform(3.25,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAApIArAAIAAgpIAeAAIAABxg");
	this.shape_5.setTransform(-9.55,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABGIAthGIAdAAIAABxg");
	this.shape_6.setTransform(-22.95,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg3IANAAQAIgIAFgSQAFgSABgsIBbAAIAABYIAMAAIAAA3gAgZARIAzAAIAAhAIgkAAQgBAvgOARg");
	this.shape_7.setTransform(-36.975,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("Ag2A8QgWgVABgmQgBgXAIgQQAFgMAJgKQAKgKALgEQAPgGASAAQAjAAAUAVQAWAWAAAlQAAAmgWAWQgUAVgjAAQgiAAgUgVgAgegoQgMAOgBAaQABAbAMAOQAMANASAAQATAAANgNQALgOABgbQgBgbgLgNQgMgNgUAAQgTAAgLANg");
	this.shape_8.setTransform(-52.15,-0.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D1566").ss(0.8).p("AFWBdIqrAAQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_9.setTransform(0.0038,-0.0062,1.6092,2.4128,0,180,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,9.4,0,-9.3).s().p("AlVBdQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_10.setTransform(0.0038,-0.0062,1.6092,2.4128,0,180,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgOAHgPQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZAAQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_11.setTransform(53.375,1.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAHQgGAIgIACQAMACAGAHQAFAIAAAKQAAANgJAJQgKAIgTAAgAgYAmIAYAAQAMgBAGgDQAGgCAAgJQAAgIgHgDQgHgEgSAAIgQAAgAgYgJIAUAAQANAAAGgDQAGgEAAgHQAAgIgFgCQgGgEgOAAIgUAAg");
	this.shape_12.setTransform(40.225,1.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgOAHgPQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZAAQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_13.setTransform(26.425,1.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AAQA5IgQggQgDgLgDgDQgEgCgHAAIAAAwIgeAAIAAhwIAeAAIAAAuQAIgBADgEQADgDAEgNQAFgRAHgFQAHgEALgBIAMABIAAAUQgMAAgDACQgDADgEAMQgFAQgKADQAOADAKAVIABACIARAfg");
	this.shape_14.setTransform(14.875,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("AgrAyQgKgJABgPQAAgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgFgEgLAAQgHAAgFAEQgFADgCAIIgcgFQAFgRALgHQAMgJAWABQATgBAKAFQAKAFAEAIQAEAGAAAVIgBAiQABAOABAIQABAHAFAIIgfAAIgDgJIgBgEQgHAIgJAEQgHADgLAAQgRAAgLgJgAAAAHQgNADgDACQgHAFAAAGQAAAGAGAEQAEAFAHABQAIAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_15.setTransform(2.55,1.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#002277").s().p("AAVA5IAAgwIgqAAIAAAwIgeAAIAAhxIAeAAIAAAqIAqAAIAAgqIAfAAIAABxg");
	this.shape_16.setTransform(-10.25,1.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#002277").s().p("AAXA5IAAhIIguBIIgcAAIAAhxIAcAAIAABHIAuhHIAeAAIAABxg");
	this.shape_17.setTransform(-23.65,1.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgRQAFgSABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_18.setTransform(-37.675,2.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#002277").s().p("Ag3A8QgUgVAAgmQAAgXAHgQQAFgMAJgKQAKgKALgEQAPgGASAAQAjAAAUAVQAWAWAAAlQAAAmgWAWQgUAVgjAAQgiAAgVgVgAgegoQgNAOAAAaQAAAbANAOQAMANASAAQATAAANgNQAMgOgBgbQABgbgMgNQgNgNgTAAQgTAAgLANg");
	this.shape_19.setTransform(-52.85,-0.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#002277").s().p("AgdA0QgOgHgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_20.setTransform(54.075,1.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAHQgGAHgIADQAMACAGAHQAFAJAAAJQAAAOgJAIQgKAIgTAAgAgYAlIAYAAQAMAAAGgCQAGgEAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANAAAGgDQAGgEAAgIQAAgGgFgEQgGgDgOAAIgUAAg");
	this.shape_21.setTransform(40.925,1.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#002277").s().p("AgdA0QgOgHgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_22.setTransform(27.125,1.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#002277").s().p("AAQA6IgQgiQgDgJgDgDQgEgDgHAAIAAAxIgeAAIAAhyIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgGALAAIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAgg");
	this.shape_23.setTransform(15.575,1.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQACAHAEAIIgfAAIgCgJIgBgEQgIAIgJAEQgHADgKABQgSAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAIAAQAGABAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_24.setTransform(3.25,1.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#002277").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABHIAthHIAdAAIAABxg");
	this.shape_25.setTransform(-22.95,1.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_26.setTransform(-36.975,3.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10,p:{skewX:180,y:-0.0062}},{t:this.shape_9,p:{skewX:180,y:-0.0062}},{t:this.shape_8,p:{y:-0.075}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{y:2.1}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10,p:{skewX:0,y:0.0062}},{t:this.shape_9,p:{skewX:0,y:0.0062}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_10,p:{skewX:180,y:-0.0062}},{t:this.shape_9,p:{skewX:180,y:-0.0062}},{t:this.shape_8,p:{y:-0.225}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_5,p:{y:1.95}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.5,142,47);


(lib.moreTests = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AAgBDIAAg4IgDAAQgMAAgFADQgGAEgGAJIgBADIgYAlIgpAAIAZgmQALgRAJgDQgPgBgJgJQgKgLAAgQQAAgNAHgKQAGgJAKgDQAKgEAUAAIBFAAIAACGgAgMgoQgGAFAAAJQAAAJAGAEQAHAFAOAAIAXAAIAAgjIgaAAQgNAAgFADg");
	this.shape.setTransform(737.825,18.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_1.setTransform(723.15,18.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_2.setTransform(707.325,18.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_3.setTransform(692.275,18.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AAzBVIAAgjIhlAAIAAAjIgdAAIAAhAIAPAAQAJgLAGgUQAGgWABg0IBrAAIAABpIAPAAIAABAgAgdAVIA7AAIAAhMIgpAAQgDA3gPAVg");
	this.shape_4.setTransform(676.4,20.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_5.setTransform(661.325,18.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("Ag5AhIAggGQAJAUAQgBQAKABAHgGQAGgFAAgHQAAgIgHgEQgGgFgKAAIgFAAIAAgWIANgBQAEgBAEgFQADgFAAgFQAAgHgEgGQgFgFgKAAQgFAAgGADQgFADgFAMIgfgHQAFgRAPgKQAPgJASAAQAZAAANAMQAOALAAARQAAALgHAGQgFAHgNAGQAPAEAIAHQAHAJAAAMQAAAQgPALQgOAMgcAAQgvAAgLgmg");
	this.shape_6.setTransform(647.25,18.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRghQgIAIAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_7.setTransform(626.6277,18.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("AA6BDIAAiGIAjAAIAACGgAhcBDIAAiGIAjAAIAAA5IAkAAQAVAAALADQAKADAJAIQAHALAAAOQAAATgOAJQgNAKgaAAgAg5AtIAiAAQANAAAGgEQAEgEABgJQAAgKgHgEQgIgEgTAAIgYAAg");
	this.shape_8.setTransform(608.5,18.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_9.setTransform(589.475,18.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AhABDIAAiGIAkAAIAAA5IAjAAQAUAAAMADQALADAHAJQAIAKAAAOQAAATgNAJQgNAKgcAAgAgcAtIAgAAQAQAAAEgFQAEgGAAgGQAAgKgIgEQgHgEgSAAIgXAAg");
	this.shape_10.setTransform(574.05,18.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AhIBCIAAgaIAGAAIAJABQAHAAACgFQACgFAAgWIAAhNIB3AAIAACGIgkAAIAAhpIgwAAIAAA8QAAAXgFAJQgGAKgGADQgHADgOAAQgJAAgOgDg");
	this.shape_11.setTransform(556.65,18.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRghQgIAIAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_12.setTransform(541.7777,18.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AgRBDIAAhoIgrAAIAAgeIB5AAIAAAeIgrAAIAABog");
	this.shape_13.setTransform(528.25,18.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990000").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_14.setTransform(513.9,18.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990000").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_15.setTransform(498.075,18.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990000").s().p("AhHBCIAAgaIAFAAIAJABQAIAAABgFQACgFAAgWIAAhNIB3AAIAACGIgkAAIAAhpIgwAAIAAA8QAAAXgFAJQgGAKgGADQgHADgOAAQgIAAgOgDg");
	this.shape_16.setTransform(481.25,18.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgJgQAAgXQAAgRAJgRQAJgRAQgJQAQgJATAAQAfABATATQAUAVAAAdQAAAfgUATQgUAVgeAAQgSAAgQgJgAgXgeQgJALAAATQAAAUAJALQAKALANgBQAOABAKgLQAJgLAAgUQAAgTgJgLQgKgKgOgBQgNABgKAKg");
	this.shape_17.setTransform(465.8,18.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990000").s().p("AAYBDIAAhoIgvAAIAABoIgkAAIAAiGIB3AAIAACGg");
	this.shape_18.setTransform(449.825,18.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgJgQAAgXQAAgRAJgRQAJgRAQgJQAQgJATAAQAfABATATQATAVABAdQgBAfgTATQgUAVgeAAQgRAAgRgJgAgXgeQgJALAAATQAAAUAJALQAKALANgBQAOABAKgLQAJgLAAgUQAAgTgJgLQgKgKgOgBQgNABgKAKg");
	this.shape_19.setTransform(434.2,18.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990000").s().p("AAzBVIAAgjIhlAAIAAAjIgdAAIAAhAIAOAAQAKgLAGgUQAGgWABg0IBsAAIAABpIAOAAIAABAgAgeAVIA9AAIAAhMIgrAAQgCA3gQAVg");
	this.shape_20.setTransform(417.6,20.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990000").s().p("AhABDIAAiGIAkAAIAAA5IAjAAQAUAAAMADQALADAHAJQAIAKAAAOQAAATgNAJQgNAKgcAAgAgcAtIAgAAQAQAAAEgFQAEgGAAgGQAAgKgIgEQgHgEgSAAIgXAAg");
	this.shape_21.setTransform(394.95,18.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990000").s().p("AgQBDIAAhoIgsAAIAAgeIB5AAIAAAeIgrAAIAABog");
	this.shape_22.setTransform(380.1,18.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990000").s().p("AAbBDIAAhUIg2BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_23.setTransform(365.75,18.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990000").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_24.setTransform(349.925,18.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#990000").s().p("AhHBCIAAgaIAFAAIAJABQAIAAABgFQACgFAAgWIAAhNIB3AAIAACGIgkAAIAAhpIgwAAIAAA8QAAAXgFAJQgGAKgGADQgHADgOAAQgIAAgOgDg");
	this.shape_25.setTransform(333.1,18.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgJgQAAgXQAAgRAJgRQAJgRAQgJQAQgJATAAQAfABATATQATAVABAdQgBAfgTATQgUAVgeAAQgRAAgRgJgAgXgeQgJALAAATQAAAUAJALQAKALANgBQAOABAKgLQAJgLAAgUQAAgTgJgLQgKgKgOgBQgNABgKAKg");
	this.shape_26.setTransform(317.65,18.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#990000").s().p("AAYBDIAAhoIgvAAIAABoIgkAAIAAiGIB3AAIAACGg");
	this.shape_27.setTransform(301.675,18.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#990000").s().p("AA6BDIAAiGIAjAAIAACGgAhcBDIAAiGIAjAAIAAA5IAkAAQAVAAALADQAKADAJAIQAHALAAAOQAAATgOAJQgNAKgaAAgAg5AtIAiAAQAMAAAHgEQAEgEAAgJQABgKgHgEQgIgEgTAAIgYAAg");
	this.shape_28.setTransform(282.95,18.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#990000").s().p("AhABDIAAiGIBNAAQAYABAMAIQAMAJAAASQAAALgHAIQgGAJgKADQAOACAHAJQAGAKAAALQAAAQgLAJQgMAKgWAAgAgcAtIAcAAQAOgBAHgDQAHgDAAgKQAAgKgIgEQgIgDgWgBIgSAAgAgcgKIAXAAQAPgBAIgEQAHgEAAgIQAAgJgHgEQgHgDgQAAIgXAAg");
	this.shape_29.setTransform(264.175,18.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRghQgIAIAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_30.setTransform(241.2277,18.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#990000").s().p("AgQBDIAAhoIgsAAIAAgeIB5AAIAAAeIgrAAIAABog");
	this.shape_31.setTransform(227.7,18.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRghQgIAIAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_32.setTransform(214.0277,18.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#990000").s().p("AA2BEIgRgnQgEgLgEgDQgEgEgHgBIAAA6IgjAAIAAg6QgHABgCACQgDADgHANIgRAnIgmAAIATglQAOgcAQgDQgMgFgGgSQgFgOgEgDQgEgDgOAAIAAgXIAPgBQAMAAAIAFQAIAFAIAVQAGAQADAFQADAEAHAAIAAg3IAjAAIAAA3QAHAAADgEQAEgFAFgQQAHgUAJgGQAIgFANAAIAOABIAAAXQgOAAgEADQgEADgFAOQgGASgMAFQAQADAOAcIATAlg");
	this.shape_33.setTransform(197.675,18.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgIgQAAgXQAAgRAIgRQAJgRAQgJQAQgJATAAQAeABAUATQATAVAAAdQAAAfgTATQgUAVgeAAQgSAAgQgJgAgXgeQgJALAAATQAAAUAJALQAKALANgBQAOABAJgLQAKgLAAgUQAAgTgKgLQgJgKgOgBQgNABgKAKg");
	this.shape_34.setTransform(180.55,18.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#990000").s().p("AAwBDIAAhXIghBXIgeAAIgfhXIAABXIgfAAIAAiGIAtAAIAgBeIAiheIAsAAIAACGg");
	this.shape_35.setTransform(163.025,18.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#990000").s().p("AhABDIAAiGIAkAAIAAA5IAjAAQAUAAAMADQALADAHAJQAIAKAAAOQAAATgNAJQgNAKgcAAgAgcAtIAgAAQAQAAAEgFQAEgGAAgGQAAgKgIgEQgHgEgSAAIgXAAg");
	this.shape_36.setTransform(138.55,18.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#990000").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_37.setTransform(122.525,21.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRghQgIAIAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_38.setTransform(106.8777,18.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990000").s().p("AAYBDIAAhoIgvAAIAABoIgkAAIAAiGIB3AAIAACGg");
	this.shape_39.setTransform(91.775,18.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRghQgIAIAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_40.setTransform(76.7277,18.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#990000").s().p("AgSBdIAAiZIg3AAIAAggICTAAIAAAgIg3AAIAACZg");
	this.shape_41.setTransform(61.65,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,33.1);


(lib.messageOK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgOAHgPQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAZgRARQgRARgZAAQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape.setTransform(546.825,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AgmA5IAAhxIBNAAIAAAZIguAAIAABYg");
	this.shape_1.setTransform(536.2,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_2.setTransform(524.6758,16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AA7BIIAAgeIiNAAIAAhxIAcAAIAABYIAjAAIAAhYIAbAAIAABYIAjAAIAAhYIAcAAIAABYIAMAAIAAA3g");
	this.shape_3.setTransform(509.9,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgMAtQgNgPgBgRIgYAAIAAAsIgfAAIAAhxIAfAAIAAAuIAYAAQACgWAOgNQANgNAYAAQAYAAAPAPQAQAPAAAdQAAARgGANQgGANgMAHQgMAJgSgBQgbAAgNgOgAAJgbQgHAIABARQgBAWAHAIQAGAIANAAQALAAAGgJQAFgJAAgRQAAgVgFgIQgHgHgLAAQgNAAgFAIg");
	this.shape_4.setTransform(491.05,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_5.setTransform(475.075,18.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg3IANAAQAIgJAFgRQAFgSABgsIBbAAIAABYIAMAAIAAA3gAgZARIAzAAIAAg/IgkAAQgBAugOARg");
	this.shape_6.setTransform(461.775,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_7.setTransform(448.8758,16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAyQAAATgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_8.setTransform(435.225,16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAZAAQAUgBAMAKQANAJAFASIgdAFQgCgJgGgEQgEgFgJAAQgKAAgHAIQgHAHAAATQAAATAHAIQAHAJALAAQAIAAAFgFQAGgFACgMIAeAGQgFAUgNAKQgNAKgWAAQgYAAgPgPg");
	this.shape_9.setTransform(422.9,16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_10.setTransform(404.275,18.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_11.setTransform(385.9258,16.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AAXA5IAAhIIguBIIgcAAIAAhxIAcAAIAABGIAuhGIAdAAIAABxg");
	this.shape_12.setTransform(373.15,16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AAVA5IAAgwIgqAAIAAAwIgeAAIAAhxIAeAAIAAAqIAqAAIAAgqIAfAAIAABxg");
	this.shape_13.setTransform(359.75,16.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_14.setTransform(346.8758,16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("Ag3BQIAAicIAdAAIAAAQQAFgJAJgFQAJgFALAAQAUAAAOAPQAOAQAAAcQAAAcgOAQQgOAPgUAAQgIAAgIgEQgIgEgIgIIAAA5gAgRgvQgIAJABARQAAATAHAIQAIAJAKAAQAKAAAHgJQAHgHAAgTQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_15.setTransform(334.45,18.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#002277").s().p("AgwAcIAbgGQAHARAOABQAJgBAFgEQAFgEAAgHQAAgGgFgEQgFgEgJAAIgEAAIAAgTIAKgBQAEgBADgDQADgFAAgEQAAgGgEgEQgEgFgIAAQgFAAgEACQgFADgEAKIgagGQAEgOANgIQANgHAPAAQAVAAALAJQALAJAAAPQAAAIgFAGQgFAGgKAFQANACAGAIQAGAGAAALQAAANgMAKQgNAJgXAAQgoAAgJgfg");
	this.shape_16.setTransform(321.625,16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAeAAQARAAAKADQAJACAHAIQAGAJAAALQAAAQgLAJQgLAIgYAAgAgYAmIAcAAQANAAADgFQAEgDAAgHQAAgIgHgDQgGgDgPAAIgUAAg");
	this.shape_17.setTransform(304,16.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#002277").s().p("AgOA5IAAhYIgkAAIAAgZIBlAAIAAAZIgkAAIAABYg");
	this.shape_18.setTransform(291.5,16.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#002277").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABGIAthGIAdAAIAABxg");
	this.shape_19.setTransform(279.35,16.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#002277").s().p("Ag3BQIAAicIAcAAIAAAQQAGgJAKgFQAJgFAKAAQAUAAAOAPQANAQAAAcQAAAcgNAQQgOAPgUAAQgJAAgHgEQgIgEgJgIIAAA5gAgSgvQgGAJgBARQAAATAIAIQAIAJAJAAQALAAAHgJQAHgHAAgTQAAgSgHgJQgHgJgLAAQgKAAgIAJg");
	this.shape_20.setTransform(266.2,18.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_21.setTransform(252.9258,16.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAHAAAOQAAAKgFAHQgGAIgIACQAMABAGAJQAFAHAAAKQAAANgJAJQgKAIgTAAgAgYAmIAYAAQAMAAAGgEQAGgCAAgJQAAgIgHgDQgHgEgSAAIgQAAgAgYgJIAUAAQANAAAGgEQAGgDAAgHQAAgIgFgCQgGgEgOAAIgUAAg");
	this.shape_22.setTransform(240.525,16.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgOAHgPQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAZgRARQgRARgZAAQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_23.setTransform(226.725,16.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#002277").s().p("Ag3BQIAAicIAcAAIAAAQQAGgJAKgFQAJgFAKAAQAUAAAOAPQANAQAAAcQAAAcgNAQQgOAPgUAAQgJAAgHgEQgIgEgJgIIAAA5gAgSgvQgGAJgBARQAAATAIAIQAIAJAJAAQALAAAHgJQAHgHAAgTQAAgSgHgJQgHgJgLAAQgKAAgIAJg");
	this.shape_24.setTransform(213.55,18.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#002277").s().p("AAUA5IAAhYIgnAAIAABYIgfAAIAAhxIBlAAIAABxg");
	this.shape_25.setTransform(199.725,16.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgOAHgPQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAZgRARQgRARgZAAQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_26.setTransform(180.425,16.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#002277").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAAqIApAAIAAgqIAfAAIAABxg");
	this.shape_27.setTransform(167,16.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#002277").s().p("AAuA5IgPggQgEgJgDgEQgDgDgGAAIAAAwIgdAAIAAgwQgGAAgCACQgDACgGAMIgOAgIggAAIAQgfQAMgXANgDQgJgEgFgPQgFgMgDgDQgDgCgMAAIAAgUIAMAAQAKgBAIAFQAHAFAFARQAFAOAEADQADAEAFAAIAAguIAdAAIAAAuQAGAAADgEIAHgRQAGgRAHgFQAIgFAKABIANAAIAAAUQgMAAgEACQgEADgDAMQgGAPgJAEQANADAMAXIAQAfg");
	this.shape_28.setTransform(152.55,16.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgOAHgPQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAZgRARQgRARgZAAQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_29.setTransform(138.075,16.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#002277").s().p("AAuBPIAAh7IgeB7IgeAAIggh7IAAB7IgdAAIAAidIAwAAIAbBrIAchrIAwAAIAACdg");
	this.shape_30.setTransform(122.1,14.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.messageOK, new cjs.Rectangle(0,0,666.5,28.6), null);


(lib.MessageBAD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape.setTransform(420.925,30.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AgFAoIAVgoIgVgnIASAAIAcAnIgcAogAgoAoIAXgoIgXgnIATAAIAbAnIgbAog");
	this.shape_1.setTransform(413.425,27.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_2.setTransform(403.425,27.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AgnAXIAWgEQAGANALAAQAHAAAFgDQAEgEAAgFQAAgFgFgDQgEgEgHAAIgDAAIAAgPIAIAAQADgBADgDQACgEAAgEQAAgEgDgEQgDgEgHAAQgEAAgDACQgEACgDAIIgVgEQADgMAKgHQALgGAMAAQARAAAJAIQAJAIAAALQAAAIgEAFQgEAEgIAEQAKACAFAGQAFAGAAAIQAAALgKAIQgKAIgTAAQghAAgHgag");
	this.shape_3.setTransform(393.675,27.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_4.setTransform(384.475,27.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgDAAgPIAAg1IBSAAIAABcIgZAAIAAhIIggAAIAAApQAAAPgEAHQgEAGgEADQgFABgJAAIgQgBg");
	this.shape_5.setTransform(373.225,27.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AgeAvIAAhdIA+AAIAAAUIgmAAIAABJg");
	this.shape_6.setTransform(364.85,27.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AAWAvIAAgnIgCAAQgIAAgEACQgEACgEAHIgBACIgQAaIgdAAIASgbQAIgMAGgCQgLAAgGgHQgHgHAAgLQAAgJAFgHQAEgGAHgCQAHgDAOAAIAwAAIAABdgAgIgbQgEADAAAGQAAAHAEADQAFACAJAAIAQAAIAAgYIgSAAQgIAAgEADg");
	this.shape_7.setTransform(349.625,27.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAlg6IAZAAIAABdg");
	this.shape_8.setTransform(339.55,27.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002277").s().p("AgfAvIAAhdIA+AAIAAAUIglAAIAABJg");
	this.shape_9.setTransform(330.85,27.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("AgtBBIAAh/IAXAAIAAANQAFgGAIgFQAHgFAJAAQAQAAALAOQAMAMAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgHIAAAugAgOgmQgGAHAAAOQAAAPAGAHQAGAHAIAAQAJABAGgIQAFgGAAgPQAAgPgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_10.setTransform(321.275,29);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgnBAIgCgTIALABQAJAAADgFQAFgFABgIIgjhdIAbAAIAVBCIAWhCIAZAAIghBZIgGAQQgDAJgDAEIgGAHQgDADgGABQgGACgGAAIgPgCg");
	this.shape_11.setTransform(310.4,29.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AgtBBIAAh/IAXAAIAAANQAFgGAIgFQAHgFAJAAQAQAAALAOQAMAMAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgHIAAAugAgOgmQgGAHAAAOQAAAPAGAHQAGAHAIAAQAJABAGgIQAFgGAAgPQAAgPgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_12.setTransform(300.275,29);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAkg6IAZAAIAABdg");
	this.shape_13.setTransform(289.05,27.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AASAvIgSgdIgTAdIgdAAIAigvIggguIAeAAIAQAaIARgaIAdAAIggAtIAjAwg");
	this.shape_14.setTransform(278.475,27.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_15.setTransform(268.025,27.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#002277").s().p("AgtBBIAAh/IAXAAIAAANQAFgGAIgFQAHgFAJAAQAQAAALAOQAMAMAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgHIAAAugAgOgmQgGAHAAAOQAAAPAGAHQAGAHAIAAQAJABAGgIQAFgGAAgPQAAgPgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_16.setTransform(257.275,29);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#002277").s().p("AAMAvIgLgbQgDgIgDgCQgDgDgGAAIAAAoIgYAAIAAhcIAYAAIAAAmQAGgBAEgDQACgDADgLQAEgNAGgEQAGgEAIAAIALABIAAAQQgKAAgDACQgDACgDAJQgEANgJADQANACAHARIABACIAOAag");
	this.shape_17.setTransform(247.6,27.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#002277").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAlg6IAZAAIAABdg");
	this.shape_18.setTransform(237.05,27.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#002277").s().p("AAmBBIAAhlIgZBlIgYAAIgahlIAABlIgYAAIAAiBIAnAAIAWBXIAXhXIAnAAIAACBg");
	this.shape_19.setTransform(223.975,25.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#002277").s().p("AAVAoIgagoIAagnIAUAAIgXAnIAXAogAgMAoIgcgoIAcgnIASAAIgVAnIAVAog");
	this.shape_20.setTransform(211.425,27.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#002277").s().p("AARBBIgQgiIgBgCIgCgGQgGgKgCgCQgEgDgGAAIAAA5IgaAAIAAiAIAaAAIAAA3QAIgBAEgEQADgDAFgRQAIgVAIgFQAIgFASAAIAEAAIAAATIgDAAQgIAAgFACQgDACgCAEIgHARIgGALQgCAEgHAEQAIACAHAHQAFAIAGANIASAkg");
	this.shape_21.setTransform(196.6,25.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#002277").s().p("AgMBBIAAhqIgmAAIAAgXIBlAAIAAAXIgmAAIAABqg");
	this.shape_22.setTransform(185.025,25.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#002277").s().p("AAaBBIAAg5IgzAAIAAA5IgaAAIAAiBIAaAAIAAA0IAzAAIAAg0IAaAAIAACBg");
	this.shape_23.setTransform(172.95,25.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#002277").s().p("AAmBBIAAhlIgZBlIgYAAIgahlIAABlIgYAAIAAiBIAnAAIAWBXIAXhXIAnAAIAACBg");
	this.shape_24.setTransform(158.975,25.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#002277").s().p("AAVAoIgagoIAagnIAUAAIgXAnIAXAogAgMAoIgcgoIAcgnIASAAIgVAnIAVAog");
	this.shape_25.setTransform(146.425,27.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#002277").s().p("AAjBPIAAgcIhaAAIAAiBIAZAAIAABrIAyAAIAAhrIAaAAIAABrIAKAAIAAAyg");
	this.shape_26.setTransform(130.35,26.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#002277").s().p("AAbBBIAAhUIgzBUIgaAAIAAiBIAYAAIAABWIAzhWIAaAAIAACBg");
	this.shape_27.setTransform(116.875,25.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#002277").s().p("AAmBBIAAhlIgZBlIgYAAIgahlIAABlIgYAAIAAiBIAnAAIAWBXIAXhXIAnAAIAACBg");
	this.shape_28.setTransform(102.875,25.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#002277").s().p("AAaBBIAAg5IgyAAIAAA5IgbAAIAAiBIAbAAIAAA0IAyAAIAAg0IAZAAIAACBg");
	this.shape_29.setTransform(88.85,25.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#002277").s().p("AAVAoIgagoIAagnIAUAAIgXAnIAXAogAgMAoIgcgoIAcgnIASAAIgVAnIAVAog");
	this.shape_30.setTransform(77.325,27.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#002277").s().p("AgmBAIAAgTIAKAAQAJAAAEgDQAEgEADgLIgvhbIAdAAIAdBCIAahCIAbAAIgrBhQgIAQgGAIQgHAIgMAAQgMAAgGgBg");
	this.shape_31.setTransform(61.8,25.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#002277").s().p("AAkBBIgLgeIgzAAIgKAeIgcAAIAyiBIAbAAIA0CBgAgSAOIAjAAIgRgvg");
	this.shape_32.setTransform(49.675,25.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#002277").s().p("AgqBBIAAiBIBVAAIAAAXIg7AAIAABqg");
	this.shape_33.setTransform(38.8,25.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#002277").s().p("AgMBBIAAgPQgfgCgMgOQgNgOAAgUQAAgXANgNQANgNAegBIAAgOIAZAAIAAAOQAeAAANAOQANAOAAAWQAAAUgNAOQgNAOgeACIAAAPgAANAcQAKAAAHgEQAHgDAEgGQACgFAAgLQAAgcgeAAgAgkgVQgHAHAAAOQAAAcAfAAIAAg5QgQAAgIAIg");
	this.shape_34.setTransform(25.35,25.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#002277").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_35.setTransform(407.575,1.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#002277").s().p("AgmBAIgDgTIALABQAIAAAEgFQAEgFADgIIgkhdIAbAAIAVBCIAWhCIAZAAIghBZIgGAQQgDAJgDAEIgFAHIgKAEQgFACgIAAIgNgCg");
	this.shape_36.setTransform(391.65,3.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#002277").s().p("AANAvIgNgbQgDgIgCgDQgDgCgFAAIAAAoIgZAAIAAhdIAZAAIAAAnQAGgBADgDQACgDACgLQAFgNAGgEQAGgEAIAAIAKAAIAAARQgJAAgDABQgDACgDAKQgFANgHADQAMACAHARIABACIAOAag");
	this.shape_37.setTransform(382.85,1.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#002277").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAkg6IAZAAIAABdg");
	this.shape_38.setTransform(372.3,1.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#002277").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_39.setTransform(362.375,1.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#002277").s().p("AgfAkQgMgNAAgXQAAgWAMgNQANgNATAAQASAAAJAIQALAHAEAPIgYAEQgCgHgEgEQgFgDgHAAQgIAAgFAGQgGAGABAPQgBAQAGAHQAFAHAJAAQAHAAAEgEQAFgEACgKIAYAEQgDARgMAIQgKAJgSAAQgTAAgNgNg");
	this.shape_40.setTransform(353.1,1.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#002277").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_41.setTransform(342.475,1.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#002277").s().p("AARAvIAAgnIgiAAIAAAnIgYAAIAAhdIAYAAIAAAjIAiAAIAAgjIAZAAIAABdg");
	this.shape_42.setTransform(331.55,1.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#002277").s().p("AgfAvIAAhdIA+AAIAAAUIglAAIAABJg");
	this.shape_43.setTransform(322.95,1.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#002277").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFQABgDAAgJIAAgFIgOAEg");
	this.shape_44.setTransform(313.625,1.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#002277").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAlg6IAYAAIAABdg");
	this.shape_45.setTransform(303.15,1.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#002277").s().p("AAjA7IAAgZIhFAAIAAAZIgUAAIAAgsIAKAAQAGgIAEgOQAEgOABglIBKAAIAABJIAKAAIAAAsgAgUAPIApAAIAAg0IgdAAQgBAlgLAPg");
	this.shape_46.setTransform(291.625,2.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#002277").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_47.setTransform(276.175,1.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#002277").s().p("AARAvIAAgnIgiAAIAAAnIgYAAIAAhdIAYAAIAAAjIAiAAIAAgjIAaAAIAABdg");
	this.shape_48.setTransform(265.75,1.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#002277").s().p("AAWAvIAAgnIgCAAQgIAAgEACQgEACgEAHIgBACIgQAaIgdAAIASgbQAIgMAGgCQgLAAgGgHQgHgHAAgLQAAgJAFgHQAEgGAHgCQAHgDAOAAIAwAAIAABdgAgIgbQgEADAAAGQAAAHAEADQAFACAJAAIAQAAIAAgYIgSAAQgIAAgEADg");
	this.shape_49.setTransform(249.425,1.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#002277").s().p("AgfAkQgMgNAAgXQAAgWAMgNQAMgNAUAAQASAAAKAIQAKAHAEAPIgYAEQgCgHgEgEQgFgDgGAAQgJAAgFAGQgGAGABAPQgBAQAGAHQAGAHAIAAQAHAAAEgEQAFgEACgKIAYAEQgDARgLAIQgLAJgSAAQgUAAgMgNg");
	this.shape_50.setTransform(239.95,1.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#002277").s().p("AgsAvIAAhdIAZAAIAAAnIAYAAQAOAAAIACQAHACAGAGQAFAHAAAKQAAANgJAHQgKAHgSAAgAgTAfIAVAAQAMAAADgDQACgEAAgFQAAgHgEgCQgGgDgMAAIgQAAg");
	this.shape_51.setTransform(229.65,1.625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#002277").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_52.setTransform(219.425,1.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#002277").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_53.setTransform(210.025,1.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#002277").s().p("AgfAkQgMgNAAgXQAAgWAMgNQAMgNAUAAQARAAALAIQAJAHAFAPIgZAEQgBgHgEgEQgFgDgGAAQgIAAgGAGQgGAGAAAPQAAAQAGAHQAFAHAJAAQAHAAAFgEQAEgEACgKIAYAEQgEARgKAIQgLAJgSAAQgUAAgMgNg");
	this.shape_54.setTransform(200.15,1.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#002277").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAmg6IAYAAIAABdg");
	this.shape_55.setTransform(189.55,1.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#002277").s().p("AARAvIAAhJIghAAIAABJIgZAAIAAhdIBSAAIAABdg");
	this.shape_56.setTransform(178.5,1.625);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#002277").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_57.setTransform(168.175,1.625);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#002277").s().p("AgnAXIAWgEQAGANALAAQAHAAAFgDQAEgEAAgFQAAgFgFgDQgEgEgHAAIgDAAIAAgPIAIAAQADgBADgDQACgEAAgEQAAgEgDgEQgDgEgHAAQgEAAgDACQgEACgDAIIgVgEQADgMAKgHQALgGAMAAQARAAAJAIQAJAIAAALQAAAIgEAFQgEAEgIAEQAKACAFAGQAFAGAAAIQAAALgKAIQgKAIgTAAQghAAgHgag");
	this.shape_58.setTransform(158.425,1.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#002277").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAfAAIAWBAIAXhAIAfAAIAABdg");
	this.shape_59.setTransform(142.65,1.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#002277").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_60.setTransform(130.826,1.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#002277").s().p("AgnBAIgCgTIAKABQAJAAAFgFQADgFACgIIgjhdIAaAAIAWBCIAVhCIAaAAIghBZIgFAQQgEAJgDAEIgGAHIgJAEQgGACgGAAIgPgCg");
	this.shape_61.setTransform(120.8,3.525);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#002277").s().p("AAjA7IAAgZIhFAAIAAAZIgUAAIAAgsIAKAAQAGgIAEgOQAEgOABglIBKAAIAABJIAKAAIAAAsgAgUAPIApAAIAAg0IgdAAQgBAlgLAPg");
	this.shape_62.setTransform(109.925,2.85);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#002277").s().p("AARAvIAAgnIgiAAIAAAnIgZAAIAAhdIAZAAIAAAjIAiAAIAAgjIAaAAIAABdg");
	this.shape_63.setTransform(99.05,1.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#002277").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_64.setTransform(88.526,1.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#002277").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAeAAIAXBAIAXhAIAfAAIAABdg");
	this.shape_65.setTransform(77.05,1.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#002277").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_66.setTransform(64.825,1.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#002277").s().p("AAMAvIgMgbQgCgIgDgDQgDgCgGAAIAAAoIgYAAIAAhdIAYAAIAAAnQAHgBACgDQADgDACgLQAFgNAGgEQAFgEAKAAIAKAAIAAARQgLAAgCABQgDACgDAKQgFANgHADQALACAJARIABACIANAag");
	this.shape_67.setTransform(55.4,1.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#002277").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_68.setTransform(45.226,1.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#002277").s().p("AgwBAIAAh/IAqAAQAWAAAHACQAMACAHAKQAHAKABAPQgBAMgEAIQgEAHgHAFQgHAFgGABQgKACgQAAIgRAAIAAAwgAgWgFIAOAAQAOAAAGgCQAEgCAEgFQADgDAAgHQAAgGgFgFQgEgFgGgBIgSgBIgMAAg");
	this.shape_69.setTransform(34.55,-0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MessageBAD, new cjs.Rectangle(-16.9,-12,474.9,50.7), null);


(lib.green = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBPIAdhPIAlAAIAABxg");
	this.shape.setTransform(39.625,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AgdA1QgOgHgIgOQgHgOAAgSQAAgQAHgOQAIgOAOgHQANgIAQAAQAaAAAQARQARARAAAZQAAAagRARQgRARgZAAQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_1.setTransform(24.725,-1.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAAqIApAAIAAgqIAfAAIAABxg");
	this.shape_2.setTransform(11.3,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXAAQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAFQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAHg");
	this.shape_3.setTransform(-1.5742,-1.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("Ag8A4IAAgXIAFABIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_4.setTransform(-15.225,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXAAQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAFQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAHg");
	this.shape_5.setTransform(-27.8242,-1.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AgmBJQgOgIgIgWIAegKQAEAOAIAFQAHADALABQAOgBAHgGQAHgHAAgHQAAgLgIgFQgIgGgOAAIgIAAIAAgXIAEAAQAOAAAHgGQAIgHAAgLQAAgIgGgHQgHgFgKAAQgUgBgGAVIgfgIQAKgmAvAAQAbAAAOAMQAOAMAAAQQAAAMgGAJQgHAJgNAHQAQAEAIAKQAIAKAAAPQAAAUgPANQgQANgeAAQgYAAgOgJg");
	this.shape_6.setTransform(-41.125,-3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1D6835").ss(0.8).p("AFWBdIqrAAQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_7.setTransform(-0.0113,-2.5062,1.3793,2.4128,0,180,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#87EE75","#84E868","#7DD946","#79D132"],[0,0.278,0.78,1],0,9.4,0,-9.3).s().p("AlVBdQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_8.setTransform(-0.0113,-2.5062,1.3793,2.4128,0,180,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002277").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAApIApAAIAAgpIAfAAIAABxg");
	this.shape_9.setTransform(10.3,-2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_10.setTransform(-16.225,-2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgmBKQgOgJgIgXIAegJQAEAOAIAEQAHAFALAAQAOgBAHgGQAHgHAAgHQAAgLgIgFQgIgGgOAAIgIAAIAAgXIAEAAQAOAAAHgGQAIgHAAgLQAAgIgGgHQgHgFgKAAQgUgBgGAVIgfgIQAKgmAvAAQAbAAAOAMQAOAMAAAQQAAAMgGAJQgHAJgNAHQAQAFAIAJQAIAKAAAPQAAAUgPANQgQANgeAAQgYgBgOgHg");
	this.shape_11.setTransform(-42.125,-4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{skewX:180,y:-2.5062}},{t:this.shape_7,p:{skewX:180,y:-2.5062}},{t:this.shape_6},{t:this.shape_5,p:{x:-27.8242,y:-1.125}},{t:this.shape_4},{t:this.shape_3,p:{x:-1.5742,y:-1.125}},{t:this.shape_2},{t:this.shape_1,p:{x:24.725,y:-1.125}},{t:this.shape,p:{x:39.625,y:-1.1}}]}).to({state:[{t:this.shape_8,p:{skewX:0,y:-2.4938}},{t:this.shape_7,p:{skewX:0,y:-2.4938}},{t:this.shape_11},{t:this.shape_5,p:{x:-28.8242,y:-2.125}},{t:this.shape_10},{t:this.shape_3,p:{x:-2.5742,y:-2.125}},{t:this.shape_9},{t:this.shape_1,p:{x:23.725,y:-2.125}},{t:this.shape,p:{x:38.625,y:-2.1}}]},1).to({state:[{t:this.shape_8,p:{skewX:180,y:-2.5062}},{t:this.shape_7,p:{skewX:180,y:-2.5062}},{t:this.shape_6},{t:this.shape_5,p:{x:-27.8242,y:-1.125}},{t:this.shape_4},{t:this.shape_3,p:{x:-1.5742,y:-1.125}},{t:this.shape_2},{t:this.shape_1,p:{x:24.725,y:-1.125}},{t:this.shape,p:{x:39.625,y:-1.1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-26,122,47);


(lib.even = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape.setTransform(36.7258,1.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJACAHAIQAGAIAAAMQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgDQAEgEAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_1.setTransform(21.375,1.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AAVA5IAAgwIgqAAIAAAwIgeAAIAAhxIAeAAIAAApIAqAAIAAgpIAfAAIAABxg");
	this.shape_2.setTransform(5.25,1.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAHQgGAHgIADQAMACAGAHQAFAJAAAJQAAAOgJAIQgKAIgTAAgAgYAlIAYAAQAMAAAGgCQAGgEAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANAAAGgDQAGgEAAgIQAAgGgFgEQgGgDgOAAIgUAAg");
	this.shape_3.setTransform(-7.775,1.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgdA0QgOgHgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_4.setTransform(-21.575,1.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("Ag7BPIAAidIAzAAQAcAAAJADQANADAJAMQAJAMAAATQAAAOgFAKQgFAJgIAGQgIAFgJACQgLACgVAAIgUAAIAAA8gAgbgGIARAAQASAAAGgDQAGgCAEgGQAEgFAAgHQAAgIgFgGQgFgGgIgBQgGgBgQAAIgPAAg");
	this.shape_5.setTransform(-35.375,-0.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D1566").ss(0.8).p("AFWBdIqrAAQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_6.setTransform(0.0038,-0.0062,1.6092,2.4128,0,180,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,9.4,0,-9.3).s().p("AlVBdQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_7.setTransform(0.0038,-0.0062,1.6092,2.4128,0,180,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AgpAoQgLgQAAgXQAAgcAPgQQAOgQAXAAQAZABAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdgBgOgTgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_8.setTransform(35.7258,0.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJACAHAIQAGAJAAALQAAAQgLAIQgLAJgWAAgAgwAmIAcAAQALAAAFgDQAEgEAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_9.setTransform(20.375,0.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAIQgGAGgIADQAMACAGAHQAFAJAAAJQAAAOgJAHQgKAJgTAAgAgYAlIAYAAQAMAAAGgCQAGgEAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANABAGgEQAGgEAAgIQAAgHgFgDQgGgCgOAAIgUAAg");
	this.shape_10.setTransform(-8.775,0.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgdA1QgOgIgIgNQgHgOAAgSQAAgPAHgPQAIgOAOgHQANgIAQAAQAaABAQAQQARARAAAZQAAAagRARQgRARgZAAQgPgBgOgGgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_11.setTransform(-22.575,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{skewX:180,y:-0.0062}},{t:this.shape_6,p:{skewX:180,y:-0.0062}},{t:this.shape_5,p:{x:-35.375,y:-0.225}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:5.25,y:1.95}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7,p:{skewX:0,y:0.0062}},{t:this.shape_6,p:{skewX:0,y:0.0062}},{t:this.shape_5,p:{x:-36.375,y:-1.225}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_2,p:{x:4.25,y:0.95}},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7,p:{skewX:180,y:-0.0062}},{t:this.shape_6,p:{skewX:180,y:-0.0062}},{t:this.shape_5,p:{x:-35.375,y:-0.225}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:5.25,y:1.95}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.5,142,47);


(lib.equal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AgdA0QgOgHgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape.setTransform(54.075,1.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAHQgGAHgIADQAMACAGAHQAFAJAAAJQAAAOgJAIQgKAIgTAAgAgYAlIAYAAQAMAAAGgCQAGgEAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANAAAGgDQAGgEAAgIQAAgGgFgEQgGgDgOAAIgUAAg");
	this.shape_1.setTransform(40.925,1.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AgdA0QgOgHgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_2.setTransform(27.125,1.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AAQA6IgQgiQgDgJgDgDQgEgDgHAAIAAAxIgeAAIAAhyIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgGALAAIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAgg");
	this.shape_3.setTransform(15.575,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQACAHAEAIIgfAAIgCgJIgBgEQgIAIgJAEQgHADgKABQgSAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAIAAQAGABAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_4.setTransform(3.25,1.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAApIArAAIAAgpIAeAAIAABxg");
	this.shape_5.setTransform(-9.55,1.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABHIAthHIAdAAIAABxg");
	this.shape_6.setTransform(-22.95,1.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_7.setTransform(-36.975,3.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("Ag2A8QgWgVABgmQgBgXAIgQQAFgMAJgKQAKgKALgEQAPgGASAAQAjAAAUAVQAWAWAAAlQAAAmgWAWQgUAVgjAAQgiAAgUgVgAgegoQgMAOgBAaQABAbAMAOQAMANASAAQATAAANgNQALgOABgbQgBgbgLgNQgMgNgUAAQgTAAgLANg");
	this.shape_8.setTransform(-52.15,-0.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D1566").ss(0.8).p("AFWBdIqrAAQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_9.setTransform(0.0038,-0.0062,1.6092,2.4128,0,180,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,9.4,0,-9.3).s().p("AlVBdQgmAAgcgbQgbgcAAgmQAAgmAbgbQAcgbAmAAIKrAAQAnAAAbAbQAbAbAAAmQAAAmgbAcQgbAbgnAAg");
	this.shape_10.setTransform(0.0038,-0.0062,1.6092,2.4128,0,180,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgOAHgPQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAZgRARQgRARgZAAQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_11.setTransform(53.075,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAIAAAOQAAAKgFAHQgGAIgIACQAMABAGAJQAFAHAAAKQAAANgJAJQgKAIgTAAgAgYAmIAYAAQAMAAAGgEQAGgCAAgJQAAgIgHgDQgHgEgSAAIgQAAgAgYgJIAUAAQANAAAGgEQAGgDAAgHQAAgIgFgCQgGgEgOAAIgUAAg");
	this.shape_12.setTransform(39.925,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgOAHgPQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAZgRARQgRARgZAAQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_13.setTransform(26.125,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AAQA5IgQggQgDgLgDgDQgEgCgHAAIAAAwIgeAAIAAhwIAeAAIAAAuQAIgBADgEQADgDAEgNQAFgRAHgFQAHgEALAAIAMAAIAAAUQgMAAgDACQgDADgEAMQgFAQgKADQAOADAKAVIABACIARAfg");
	this.shape_14.setTransform(14.575,0.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgEgMAAQgHABgFADQgEADgDAHIgbgEQAEgRAMgHQAKgJAXABQATAAAKAEQAKAFAEAIQAEAGAAAVIAAAiQAAAPABAGQABAIAEAIIgeAAIgCgJIgBgEQgIAIgJAEQgHADgKAAQgTAAgJgJgAAAAHQgNACgDADQgHAFABAFQAAAHAEAEQAFAGAIAAQAGgBAIgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_15.setTransform(2.25,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#002277").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAAqIAqAAIAAgqIAeAAIAABxg");
	this.shape_16.setTransform(-10.55,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#002277").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABGIAthGIAdAAIAABxg");
	this.shape_17.setTransform(-23.95,0.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg3IANAAQAIgJAFgRQAFgSABgsIBbAAIAABYIAMAAIAAA3gAgZARIAzAAIAAg/IgkAAQgBAugOARg");
	this.shape_18.setTransform(-37.975,2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#002277").s().p("Ag2A8QgWgVAAgmQAAgXAIgQQAFgMAKgKQAJgKALgEQAOgGATAAQAiAAAVAVQAWAWgBAlQABAmgWAWQgUAVgjAAQgiAAgUgVgAgfgoQgLAOgBAaQABAbALAOQANANASAAQATAAAMgNQAMgOABgbQgBgbgMgNQgLgNgUAAQgTAAgMANg");
	this.shape_19.setTransform(-53.15,-1.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10,p:{skewX:180,y:-0.0062}},{t:this.shape_9,p:{skewX:180,y:-0.0062}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10,p:{skewX:0,y:0.0062}},{t:this.shape_9,p:{skewX:0,y:0.0062}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_10,p:{skewX:180,y:-0.0062}},{t:this.shape_9,p:{skewX:180,y:-0.0062}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.5,142,47);


(lib.an_DatePicker = function(options) {
	this.initialize();
	this._element = new $.an.DatePicker(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.circlesvg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AlQEeQhnh6AAigQAAi2CBiAQCBiBC1AAQC2AACBCBQCBCAAAC1QAACdhjB5QhhB4iWAgIAAi9QBIgdAthAQAuhDAAhQQAAhqhLhMQhLhLhrAAQhqAAhLBLQhLBMAABqQAABUAxBEQAxBCBNAaIAAC8Qiagdhlh5g");
	this.shape.setTransform(-0.1136,-0.2071,5.2277,5.2258);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230,-228,459.8,455.7);


(lib.ButtonTestRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A/NACMA+bgu5MAAABdvg");
	this.shape.setTransform(199.825,300);

	this.instance = new lib.hand();
	this.instance.setTransform(176.9,291,0.8422,0.8421,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,399.7,600);


(lib.BtnTestUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg+fgXbMB8/AAAMg+gAu3g");
	this.shape.setTransform(400,150);

	this.instance = new lib.hand();
	this.instance.setTransform(402,113,0.8422,0.8421,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,300);


(lib.BtnTestLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgfPgu3MA+fAu2Mg+fAu5g");
	this.shape.setTransform(200,300);

	this.instance = new lib.hand();
	this.instance.setTransform(213,290,0.8422,0.8421);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,600);


(lib.BtnTestDown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg+ZAXbMA+Xgu1MA+bAu1g");
	this.shape.setTransform(399.35,149.875);

	this.instance = new lib.hand();
	this.instance.setTransform(392,173.9,0.8422,0.8421,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg+ZAXbMA+Xgu1MA+cAu1g");
	this.shape_1.setTransform(400.65,149.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,299.8);


(lib.bilboeyeball = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhWBxQg3gXgNgxQgNgvAkgvQAkgvBAgSQBAgRA2AXQA3AXANAwQANAwgkAvQgkAvhBARQgbAIgZAAQgiAAgfgNg");
	this.shape.setTransform(0.15,0.95,1.2638,1.2863,0,105.8087,108.827,-0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-18.6,32,40.1);


(lib.amslergrid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AB9AAQAAA0glAkQglAlgzAAQgyAAglglQglgkAAg0QAAgyAlglQAlglAyAAQAzAAAlAlQAlAlAAAyg");
	this.shape.setTransform(242.4802,242.4902,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhXBYQglglAAgzQAAgyAlglQAkglAzAAQAzAAAlAlQAlAlAAAyQAAAzglAlQglAlgzAAQgzAAgkglg");
	this.shape_1.setTransform(242.4802,242.4902,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("EAxOgtnMAAABbPEAqMgtnMAAABbPEAjKgtnMAAABbPEAcIgtnMAAABbPEAVGgtnMAAABbPEAOEgtnMAAABbPEAHCgtnMAAABbPEAAAgtnMAAABbPEgHBgtnMAAABbPEgODgtnMAAABbPEgVFgtnMAAABbPEgcHgtnMAAABbPEgjJgtnMAAABbPEgqLgtnMAAABbPEgxNgtnMAAABbP");
	this.shape_2.setTransform(243.0224,242.5444,0.7698,0.8306,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("EAxOgtnMAAABbPEAqMgtnMAAABbPEAjKgtnMAAABbPEAcIgtnMAAABbPEAVGgtnMAAABbPEAOEgtnMAAABbPEAHCgtnMAAABbPEAAAgtnMAAABbPEgHBgtnMAAABbPEgODgtnMAAABbPEgVFgtnMAAABbPEgcHgtnMAAABbPEgjJgtnMAAABbPEgqLgtnMAAABbPEgxNgtnMAAABbP");
	this.shape_3.setTransform(242.4944,242.4776,0.7698,0.8306);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.amslergrid, new cjs.Rectangle(-1.5,-1.5,488.5,488.1), null);


(lib.Ш = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjMCsIAAlXIBFAAIAAEdIBkAAIAAkdIBEAAIAAEdIBmAAIAAkdIBGAAIAAFXg");
	this.shape.setTransform(26.175,28.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ш, new cjs.Rectangle(0,0,52.4,57.6), null);


(lib.СимволCard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.card_type_img3();
	this.instance.setTransform(0,0,0.3968,0.3969);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.СимволCard, new cjs.Rectangle(0,0,250,158), null);


(lib.Символ13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("Ag+BbIAAiyIAgAAIAAATQAGgKALgGQAKgGAMAAQAXAAAPARQAQASAAAgQAAAfgQASQgQASgWAAQgKAAgJgEQgIgEgKgLIAABCgAgUg1QgIAJAAATQAAAXAIAJQAJAKALAAQAMAAAIgJQAIgJAAgWQAAgUgIgKQgIgKgMAAQgMAAgIAKg");
	this.shape.setTransform(83.325,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgQBBIAAhlIgqAAIAAgcIB1AAIAAAcIgqAAIAABlg");
	this.shape_1.setTransform(69.175,25.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgvAuQgNgSAAgbQAAgfARgTQARgSAaAAQAcAAAQATQARATgBAnIhVAAQABAPAIAJQAIAIAKAAQAIAAAGgEQAFgFADgKIAiAGQgGATgOAKQgPAKgVAAQghAAgQgWgAgRggQgHAIAAAOIAyAAQAAgPgHgIQgIgIgKAAQgLAAgHAJg");
	this.shape_2.setTransform(56.0028,25.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AAuBBIAAhVIggBVIgcAAIgfhVIAABVIgdAAIAAiBIArAAIAfBZIAghZIArAAIAACBg");
	this.shape_3.setTransform(40.025,25.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AAFBaIAAiBQgSASgZAIIAAgfQANgEAQgMQAOgNAGgQIAcAAIAACzg");
	this.shape_4.setTransform(15.725,22.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AoHjvIQPAAIAAHfIwPAAg");
	this.shape_5.setTransform(52,24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AoHDwIAAnfIQPAAIAAHfg");
	this.shape_6.setTransform(52,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(-1,-1,106,50), null);


(lib.Символ9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Растровоеизображение8копия();
	this.instance.setTransform(0,0,0.2637,0.2337);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,219.4,157.5), null);


(lib.Символ8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AAbA5IAAgwIgDAAQgKABgEACQgEACgGAJIgBACIgUAgIgjAAIAVghQAKgPAHgBQgNgBgHgIQgIgJAAgOQAAgKAFgJQAGgHAIgDQAIgDARAAIA7AAIAABxgAgKghQgFADAAAIQAAAIAFAEQAGACALABIAUAAIAAgdIgVAAQgMgBgEAEg");
	this.shape.setTransform(181.15,26.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgQAZAAQAUABAMAIQANAKAFARIgdAGQgCgJgGgFQgEgEgJAAQgKAAgHAIQgHAIAAASQAAATAHAJQAHAIALAAQAIAAAFgFQAGgFACgMIAeAFQgFAUgNALQgNALgWAAQgYgBgPgPg");
	this.shape_1.setTransform(169.55,26.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAwIAdAAQASgBAKADQAKACAFAIQAHAJAAALQAAARgLAHQgLAJgXAAgAgYAmIAbAAQANAAAEgEQAEgFAAgFQAAgJgGgDQgHgDgPAAIgUAAg");
	this.shape_2.setTransform(156.9,26.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AgOA5IAAhZIglAAIAAgYIBnAAIAAAYIglAAIAABZg");
	this.shape_3.setTransform(144.4,26.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgrAyQgJgKgBgOQABgKAEgHQAFgIAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgLAAQgJAAgEACQgEAEgDAHIgbgEQAEgRALgIQALgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIgBAiQAAAPACAIQACAHADAIIgdAAIgEgJIgBgDQgHAHgJAEQgIAEgKAAQgRAAgLgKgAAAAHQgMACgFADQgFAEAAAGQAAAHAEAFQAFAEAHAAQAHABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_4.setTransform(132.9,26.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgQAZAAQAUABANAIQAMAKAGARIgfAGQgBgJgGgFQgEgEgJAAQgKAAgHAIQgHAIAAASQAAATAHAJQAHAIAKAAQAJAAAGgFQAFgFACgMIAeAFQgFAUgNALQgNALgWAAQgYgBgPgPg");
	this.shape_5.setTransform(120.8,26.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AAXA5IAAhIIguBIIgcAAIAAhxIAcAAIAABHIAuhHIAeAAIAABxg");
	this.shape_6.setTransform(107.75,26.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AAUA5IAAhZIgnAAIAABZIgfAAIAAhxIBlAAIAABxg");
	this.shape_7.setTransform(94.225,26.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AgrAyQgJgKgBgOQABgKAEgHQAFgIAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgLAAQgJAAgEACQgEAEgDAHIgbgEQAEgRALgIQALgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIgBAiQAAAPACAIQACAHADAIIgdAAIgEgJIgBgDQgHAHgJAEQgIAEgKAAQgRAAgLgKgAAAAHQgMACgFADQgFAEAAAGQAAAHAEAFQAFAEAHAAQAHABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_8.setTransform(81.6,26.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002277").s().p("AgmBJQgOgIgIgXIAegJQAEAOAIAEQAHAEALAAQAOAAAHgGQAHgHAAgIQAAgKgIgGQgIgFgOAAIgIAAIAAgXIAEAAQAOAAAHgHQAIgGAAgLQAAgJgGgGQgHgGgKAAQgUAAgGAUIgfgHQAKgmAvAAQAbAAAOAMQAOAMAAAQQAAAMgGAJQgHAJgNAHQAQAEAIAKQAIAKAAAOQAAAVgPANQgQAMgeAAQgYAAgOgIg");
	this.shape_9.setTransform(68.175,24.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");
	this.shape_10.setTransform(125,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhIQhPhKAAhnQAAhmBPhKQBPhKBuAAIesAAQBuAABOBKQBPBKAABmQAABnhPBKQhOBIhuAAg");
	this.shape_11.setTransform(125,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,252,52);


(lib.Символ7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgMBAIAAgYIAZAAIAAAYgAgGAfIgHhAIAAgeIAaAAIAAAeIgGBAg");
	this.shape.setTransform(719.2,124.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgLBAIAAgYIAXAAIAAAYgAgGAfIgHhAIAAgeIAaAAIAAAeIgGBAg");
	this.shape_1.setTransform(713.2,124.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgLBAIAAgYIAYAAIAAAYgAgGAfIgGhAIAAgeIAaAAIAAAeIgHBAg");
	this.shape_2.setTransform(707.2,124.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AAnAvIAAhdIAZAAIAABdgAg/AvIAAhdIAZAAIAAAnIAYAAQAOAAAIACQAHACAFAGQAGAHAAAKQAAANgJAHQgKAHgRAAgAgmAfIAWAAQAJAAAEgDQADgDAAgGQAAgHgEgCQgFgDgOAAIgPAAg");
	this.shape_3.setTransform(696.65,126.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAfAAIAWBAIAYhAIAeAAIAABdg");
	this.shape_4.setTransform(682.35,126.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAfAAIAWBAIAXhAIAfAAIAABdg");
	this.shape_5.setTransform(669.05,126.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_6.setTransform(657.325,126.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AgtBCIAAiBIAXAAIAAAPQAFgIAIgEQAHgEAJgBQAQAAALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAwgAgOgmQgGAHAAANQAAAQAGAHQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_7.setTransform(647.075,128.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("AgeAvIAAhdIA+AAIAAAUIgmAAIAABJg");
	this.shape_8.setTransform(638.15,126.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_9.setTransform(628.325,126.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AgtBCIAAiBIAXAAIAAAPQAFgIAIgEQAHgEAJgBQAQAAALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAwgAgOgmQgGAHAAANQAAAQAGAHQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_10.setTransform(617.575,128.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AARAvIAAhJIghAAIAABJIgYAAIAAhdIBSAAIAABdg");
	this.shape_11.setTransform(606.3,126.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("AAnAvIAAhdIAaAAIAABdgAg/AvIAAhdIAYAAIAAAnIAZAAQAOAAAIACQAHACAFAGQAFAHABAKQgBANgIAHQgKAHgSAAgAgnAfIAXAAQAJAAAEgDQADgDABgGQgBgHgEgCQgFgDgOAAIgQAAg");
	this.shape_12.setTransform(588.35,126.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_13.setTransform(576.225,126.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_14.setTransform(566.325,126.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990000").s().p("AgaA8QgLgHgFgMQgFgNAAgcQAAghANgPQAMgPAeAAIAMAAQAFABACgEIARAAQgBAMgFAFQgFAGgUAAIgFAAIgDAAQgKAAgIADQgHACgFAIQgFAHAAARQAGgLAIgFQAJgFALAAQASAAANAPQANAMAAAUQAAATgOAOQgNAOgVAAQgOAAgMgHgAgPAAQgHAGAAANQAAANAHAHQAGAIAJAAQAJAAAHgIQAGgHAAgNQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_15.setTransform(555.275,124.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_16.setTransform(544.725,126.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990000").s().p("AgtBCIAAiBIAXAAIAAAPQAFgIAIgEQAHgEAJgBQAQAAALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAwgAgOgmQgGAHAAANQAAAQAGAHQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_17.setTransform(534.475,128.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990000").s().p("AgsAvIAAhdIAZAAIAAAnIAYAAQAOAAAIACQAHACAGAGQAFAHAAAKQAAANgJAHQgKAHgSAAgAgTAfIAVAAQAMAAADgDQACgEAAgFQAAgHgEgCQgGgDgMAAIgQAAg");
	this.shape_18.setTransform(518.55,126.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_19.setTransform(508.325,126.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990000").s().p("AgfAkQgMgNAAgXQAAgWAMgNQANgNATAAQARAAALAIQAJAHAFAPIgYAEQgCgHgEgEQgFgDgGAAQgJAAgFAGQgGAGAAAPQAAAQAGAHQAGAHAIAAQAHAAAEgEQAFgEACgKIAYAEQgDARgLAIQgLAJgSAAQgTAAgNgNg");
	this.shape_20.setTransform(499.05,126.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_21.setTransform(488.425,126.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990000").s().p("AASAvIAAgnIgjAAIAAAnIgZAAIAAhdIAZAAIAAAjIAjAAIAAgjIAZAAIAABdg");
	this.shape_22.setTransform(477.5,126.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990000").s().p("AgsAvIAAhdIAZAAIAAAnIAYAAQAOAAAIACQAHACAGAGQAFAHAAAKQAAANgJAHQgKAHgSAAgAgTAfIAWAAQAKAAADgDQADgEAAgFQAAgHgEgCQgGgDgMAAIgQAAg");
	this.shape_23.setTransform(466.9,126.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990000").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgDAAgQIAAg1IBSAAIAABdIgZAAIAAhJIggAAIAAApQAAARgEAGQgEAGgEADQgFACgJAAIgQgCg");
	this.shape_24.setTransform(454.825,126.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#990000").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAmg6IAYAAIAABdg");
	this.shape_25.setTransform(444.15,126.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990000").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_26.setTransform(433.425,126.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_27.setTransform(422.625,126.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#990000").s().p("AgtBCIAAiBIAXAAIAAAPQAFgIAIgEQAHgEAJgBQAQAAALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAwgAgOgmQgGAHAAANQAAAQAGAHQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_28.setTransform(412.375,128.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#990000").s().p("AAQAvIAAhJIggAAIAABJIgYAAIAAhdIBSAAIAABdg");
	this.shape_29.setTransform(401.1,126.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_30.setTransform(386.375,126.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#990000").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAlg6IAYAAIAABdg");
	this.shape_31.setTransform(376.5,126.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#990000").s().p("AgfAkQgMgNAAgXQAAgWAMgNQAMgNAUAAQASAAAJAIQAKAHAFAPIgZAEQgBgHgEgEQgEgDgIAAQgHAAgGAGQgFAGgBAPQABAQAFAHQAGAHAIAAQAHAAAFgEQAEgEACgKIAYAEQgEARgKAIQgLAJgSAAQgUAAgMgNg");
	this.shape_32.setTransform(366.1,126.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#990000").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAmg6IAYAAIAABdg");
	this.shape_33.setTransform(355.5,126.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#990000").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_34.setTransform(344.775,126.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_35.setTransform(333.975,126.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#990000").s().p("AgnAXIAWgEQAGANALAAQAHAAAFgDQAEgEAAgFQAAgFgFgDQgEgEgHAAIgDAAIAAgPIAIAAQADgBADgDQACgEAAgEQAAgEgDgEQgDgEgHAAQgEAAgDACQgEACgDAIIgVgEQADgMAKgHQALgGAMAAQARAAAJAIQAJAIAAALQAAAIgEAFQgEAEgIAEQAKACAFAGQAFAGAAAIQAAALgKAIQgKAIgTAAQghAAgHgag");
	this.shape_36.setTransform(324.225,126.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#990000").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAkg6IAZAAIAABdg");
	this.shape_37.setTransform(309.55,126.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#990000").s().p("AAMAvIgMgbQgCgIgDgDQgDgCgGAAIAAAoIgYAAIAAhdIAYAAIAAAnQAHgBACgDQADgDACgKQAFgOAGgEQAFgEAKAAIAKAAIAAARQgLAAgCABQgDACgDAKQgEANgJADQAMACAJASIABABIANAag");
	this.shape_38.setTransform(300.1,126.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990000").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_39.setTransform(289.825,126.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_40.setTransform(278.525,126.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#990000").s().p("AgtBCIAAiBIAXAAIAAAPQAFgIAIgEQAHgEAJgBQAQAAALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAwgAgOgmQgGAHAAANQAAAQAGAHQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_41.setTransform(267.775,128.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#990000").s().p("AgaA8QgLgHgFgMQgFgNAAgcQAAghANgPQAMgPAeAAIAMAAQAFABACgEIARAAQgBAMgFAFQgFAGgUAAIgFAAIgDAAQgKAAgIADQgHACgFAIQgFAHAAARQAGgLAIgFQAJgFALAAQASAAANAPQANAMAAAUQAAATgOAOQgNAOgVAAQgOAAgMgHgAgPAAQgHAGAAANQAAANAHAHQAGAIAJAAQAJAAAHgIQAGgHAAgNQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_42.setTransform(256.475,124.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#990000").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAlg6IAYAAIAABdg");
	this.shape_43.setTransform(245.45,126.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#990000").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgDAAgQIAAg1IBSAAIAABdIgZAAIAAhJIggAAIAAApQAAARgEAGQgEAGgEADQgFACgJAAIgQgCg");
	this.shape_44.setTransform(233.675,126.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_45.setTransform(223.475,126.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#990000").s().p("AANAvIgNgbQgDgIgCgDQgDgCgFAAIAAAoIgZAAIAAhdIAZAAIAAAnQAGgBADgDQACgDACgKQAFgOAGgEQAGgEAIAAIAKAAIAAARQgJAAgDABQgDACgDAKQgFANgHADQAMACAHASIABABIAOAag");
	this.shape_46.setTransform(214.55,126.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#990000").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAmg6IAYAAIAABdg");
	this.shape_47.setTransform(199,126.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_48.setTransform(189.075,126.375);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#990000").s().p("AgfAkQgMgNAAgXQAAgWAMgNQAMgNAUAAQASAAAJAIQAKAHAFAPIgZAEQgBgHgEgEQgEgDgIAAQgHAAgGAGQgFAGgBAPQABAQAFAHQAGAHAIAAQAHAAAFgEQAEgEACgKIAYAEQgEARgKAIQgLAJgSAAQgUAAgMgNg");
	this.shape_49.setTransform(179.8,126.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_50.setTransform(169.175,126.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#990000").s().p("AASAvIAAgnIgjAAIAAAnIgZAAIAAhdIAZAAIAAAjIAjAAIAAgjIAZAAIAABdg");
	this.shape_51.setTransform(158.25,126.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#990000").s().p("AgsAvIAAhdIAZAAIAAAnIAYAAQAOAAAIACQAIACAFAGQAFAHAAAKQAAANgJAHQgJAHgTAAgAgTAfIAVAAQAMAAADgDQACgEAAgFQAAgHgEgCQgGgDgMAAIgQAAg");
	this.shape_52.setTransform(147.65,126.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#990000").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgDAAgQIAAg1IBSAAIAABdIgZAAIAAhJIggAAIAAApQAAARgEAGQgEAGgEADQgFACgJAAIgQgCg");
	this.shape_53.setTransform(135.575,126.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#990000").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAlg6IAZAAIAABdg");
	this.shape_54.setTransform(124.9,126.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#990000").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_55.setTransform(114.175,126.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_56.setTransform(103.375,126.375);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#990000").s().p("AgtBCIAAiBIAXAAIAAAPQAFgIAIgEQAHgEAJgBQAQAAALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAwgAgOgmQgGAHAAANQAAAQAGAHQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_57.setTransform(93.125,128.05);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#990000").s().p("AARAvIAAhJIghAAIAABJIgZAAIAAhdIBTAAIAABdg");
	this.shape_58.setTransform(81.85,126.375);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_59.setTransform(67.125,126.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#990000").s().p("AgsAxQgRgRgBgfQABgTAFgNQAEgKAIgIQAIgIAJgEQAMgEAPAAQAcAAARARQARASABAfQgBAfgRARQgQARgdAAQgcAAgQgRgAgZggQgKALAAAVQAAAWAKALQAKAMAPAAQAQgBAKgKQAKgMAAgWQAAgWgKgLQgKgLgQABQgPAAgKALg");
	this.shape_60.setTransform(55.75,124.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#990000").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_61.setTransform(702.525,85.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#990000").s().p("AAnAvIAAhdIAZAAIAABdgAg/AvIAAhdIAYAAIAAAnIAZAAQAOAAAIACQAHACAFAGQAFAHABAKQgBANgIAHQgKAHgRAAgAgnAfIAXAAQAJAAAEgDQADgDABgGQgBgHgEgCQgFgDgOAAIgQAAg");
	this.shape_62.setTransform(692.4,82.175);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_63.setTransform(680.275,82.175);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#990000").s().p("AgtBBIAAiAIAXAAIAAAPQAFgIAIgEQAHgEAJAAQAQgBALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_64.setTransform(670.625,83.85);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_65.setTransform(659.875,82.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#990000").s().p("AANAvIgNgbQgDgIgCgDQgDgCgFAAIAAAoIgZAAIAAhdIAZAAIAAAnQAFgBAEgDQACgDACgLQAFgNAGgEQAFgEAJAAIAKAAIAAARQgJAAgDABQgDACgDAKQgFANgHADQALACAIARIABACIAOAag");
	this.shape_66.setTransform(650.95,82.15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#990000").s().p("AATBBIAAg7IgmA7IgXAAIAAhcIAXAAIAAA6IAmg6IAYAAIAABcgAgSguQgHgHgBgMIAMAAQABAHADADQAFADAGAAQAHAAAEgDQADgDABgHIAMAAQgBAMgHAHQgIAHgLAAQgLAAgIgHg");
	this.shape_67.setTransform(635.4,80.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_68.setTransform(624.776,82.175);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#990000").s().p("Ag+AvIAAhdIAXAAIAABJIAcAAIAAhJIAXAAIAABJIAcAAIAAhJIAWAAIAABdg");
	this.shape_69.setTransform(612.35,82.175);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_70.setTransform(599.875,82.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#990000").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_71.setTransform(589.675,82.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#990000").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAfAAIAWBAIAXhAIAfAAIAABdg");
	this.shape_72.setTransform(572.3,82.175);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_73.setTransform(560.075,82.175);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#990000").s().p("AgtBBIAAiAIAXAAIAAAPQAFgIAIgEQAHgEAJAAQAQgBALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_74.setTransform(549.325,83.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_75.setTransform(538.476,82.175);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#990000").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAeAAIAXBAIAYhAIAeAAIAABdg");
	this.shape_76.setTransform(527,82.175);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#990000").s().p("AgnAXIAWgEQAGANALAAQAHAAAFgDQAEgEAAgFQAAgFgFgDQgEgEgHAAIgDAAIAAgPIAIAAQADgBADgDQACgEAAgEQAAgEgDgEQgDgEgHAAQgEAAgDACQgEACgDAIIgVgEQADgMAKgHQALgGAMAAQARAAAJAIQAJAIAAALQAAAIgEAFQgEAEgIAEQAKACAFAGQAFAGAAAIQAAALgKAIQgKAIgTAAQghAAgHgag");
	this.shape_77.setTransform(515.525,82.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_78.setTransform(506.325,82.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#990000").s().p("AgtBBIAAiAIAXAAIAAAPQAFgIAIgEQAHgEAJAAQAQgBALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_79.setTransform(496.075,83.85);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#990000").s().p("AgfAkQgMgNAAgXQAAgWAMgNQANgNATAAQASAAAJAIQALAHAEAPIgYAEQgCgHgEgEQgFgDgGAAQgJAAgFAGQgGAGABAPQgBAQAGAHQAFAHAJAAQAHAAAEgEQAFgEACgKIAYAEQgDARgMAIQgKAJgSAAQgTAAgNgNg");
	this.shape_80.setTransform(480.45,82.175);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#990000").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgEAAgPIAAg1IBSAAIAABdIgZAAIAAhJIggAAIAAApQAAARgEAGQgEAGgEACQgFADgJAAIgQgCg");
	this.shape_81.setTransform(464.075,82.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_82.setTransform(453.875,82.175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#990000").s().p("AAQAvIAAhJIggAAIAABJIgZAAIAAhdIBSAAIAABdg");
	this.shape_83.setTransform(443.35,82.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#990000").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_84.setTransform(432.825,82.175);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_85.setTransform(421.525,82.175);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#990000").s().p("AgfAkQgMgNAAgXQAAgWAMgNQANgNATAAQASAAAKAIQAKAHAEAPIgYAEQgCgHgEgEQgFgDgHAAQgIAAgFAGQgGAGABAPQgBAQAGAHQAFAHAJAAQAHAAAEgEQAFgEACgKIAYAEQgDARgMAIQgKAJgSAAQgTAAgNgNg");
	this.shape_86.setTransform(411.15,82.175);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#990000").s().p("AASAvIAAgnIgjAAIAAAnIgZAAIAAhdIAZAAIAAAjIAjAAIAAgjIAZAAIAABdg");
	this.shape_87.setTransform(395.6,82.175);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_88.setTransform(384.675,82.175);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#990000").s().p("AAoAvIAAhdIAYAAIAABdgAhAAvIAAhdIAaAAIAAAnIAYAAQAOAAAHACQAIACAGAGQAEAHAAAKQABANgKAHQgJAHgSAAgAgmAfIAWAAQAJAAAEgDQAEgDgBgGQABgHgFgCQgFgDgNAAIgQAAg");
	this.shape_89.setTransform(366.55,82.175);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#990000").s().p("AgaA8QgLgHgFgMQgFgNAAgcQAAghANgOQAMgPAegBIAMAAQAFABACgEIARAAQgBAMgFAFQgFAGgUAAIgFAAIgDAAQgKAAgIADQgHACgFAIQgFAHAAAQQAGgKAIgFQAJgFALAAQASAAANAPQANANAAASQAAAUgOAOQgNAOgVAAQgOAAgMgHgAgPAAQgHAGAAANQAAANAHAHQAGAIAJgBQAJABAHgIQAGgHAAgNQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_90.setTransform(353.275,80.35);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_91.setTransform(342.225,82.175);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_92.setTransform(332.325,82.175);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#990000").s().p("AARAvIAAgmQgPAEgHAAQgLAAgJgEQgJgFgDgHQgEgIAAgMIAAgXIAZAAIAAAXQABAHABAEQABAEAFADQAEACAGAAQAGAAAJgDIAAgoIAZAAIAABdg");
	this.shape_93.setTransform(322.6,82.175);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#990000").s().p("AgMARQAHgDADgEQACgEABgHIgLAAIAAgYIAXAAIAAARQAAAKgCAGQgBAGgGAFQgEAFgIADg");
	this.shape_94.setTransform(309.825,87.05);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_95.setTransform(302.376,82.175);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#990000").s().p("AARAvIAAgnIgiAAIAAAnIgYAAIAAhdIAYAAIAAAjIAiAAIAAgjIAZAAIAABdg");
	this.shape_96.setTransform(292.05,82.175);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_97.setTransform(281.625,82.175);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#990000").s().p("AgtBBIAAiAIAXAAIAAAPQAFgIAIgEQAHgEAJAAQAQgBALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_98.setTransform(271.375,83.85);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#990000").s().p("AANAvIgNgbQgDgIgCgDQgDgCgFAAIAAAoIgZAAIAAhdIAZAAIAAAnQAFgBAEgDQACgDACgLQAFgNAGgEQAFgEAJAAIAKAAIAAARQgJAAgDABQgDACgDAKQgFANgHADQALACAIARIABACIAOAag");
	this.shape_99.setTransform(261.7,82.15);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#990000").s().p("AgrATIAZgEQADAPAOAAQAHAAAFgGQAGgGABgLIgZAAIAAgOIAZAAQgBgLgFgFQgEgGgIAAQgFAAgFADQgFADgCAGIgYgFQAJgaAgAAQAVAAAMANQAKAOABAVQAAAXgMANQgMANgUAAQgiAAgJgeg");
	this.shape_100.setTransform(251.5,82.175);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFQABgDAAgJIAAgFIgOAEg");
	this.shape_101.setTransform(236.675,82.175);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#990000").s().p("AARAvIAAgnIgiAAIAAAnIgYAAIAAhdIAYAAIAAAjIAiAAIAAgjIAZAAIAABdg");
	this.shape_102.setTransform(226.25,82.175);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#990000").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAlg6IAYAAIAABdg");
	this.shape_103.setTransform(210.35,82.175);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#990000").s().p("AAMAvIgLgbQgEgIgCgDQgDgCgGAAIAAAoIgYAAIAAhdIAYAAIAAAnQAHgBACgDQADgDADgLQAEgNAGgEQAGgEAJAAIAKAAIAAARQgLAAgCABQgDACgDAKQgEANgJADQANACAHARIACACIANAag");
	this.shape_104.setTransform(200.9,82.15);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#990000").s().p("AARAvIAAgnIgiAAIAAAnIgZAAIAAhdIAZAAIAAAjIAiAAIAAgjIAaAAIAABdg");
	this.shape_105.setTransform(190.4,82.175);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#990000").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAkg6IAZAAIAABdg");
	this.shape_106.setTransform(179.5,82.175);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_107.setTransform(169.575,82.175);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#990000").s().p("AgtBBIAAiAIAXAAIAAAPQAFgIAIgEQAHgEAJAAQAQgBALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_108.setTransform(159.925,83.85);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_109.setTransform(149.175,82.175);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#990000").s().p("AAMAvIgLgbQgDgIgDgDQgDgCgGAAIAAAoIgYAAIAAhdIAYAAIAAAnQAHgBACgDQADgDADgLQAEgNAGgEQAFgEAKAAIAKAAIAAARQgLAAgCABQgDACgDAKQgEANgJADQAMACAJARIABACIANAag");
	this.shape_110.setTransform(140.25,82.15);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#990000").s().p("AgtBBIAAiAIAXAAIAAAPQAFgIAIgEQAHgEAJAAQAQgBALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_111.setTransform(124.925,83.85);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_112.setTransform(114.076,82.175);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#990000").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAfAAIAWBAIAXhAIAfAAIAABdg");
	this.shape_113.setTransform(102.6,82.175);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#990000").s().p("AgnAXIAWgEQAGANALAAQAHAAAFgDQAEgEAAgFQAAgFgFgDQgEgEgHAAIgDAAIAAgPIAIAAQADgBADgDQACgEAAgEQAAgEgDgEQgDgEgHAAQgEAAgDACQgEACgDAIIgVgEQADgMAKgHQALgGAMAAQARAAAJAIQAJAIAAALQAAAIgEAFQgEAEgIAEQAKACAFAGQAFAGAAAIQAAALgKAIQgKAIgTAAQghAAgHgag");
	this.shape_114.setTransform(91.125,82.175);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_115.setTransform(81.925,82.175);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#990000").s().p("AgtBBIAAiAIAXAAIAAAPQAFgIAIgEQAHgEAJAAQAQgBALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAIAIAAQAJgBAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_116.setTransform(71.675,83.85);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_117.setTransform(751.776,60.075);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_118.setTransform(742.475,60.075);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#990000").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAmg6IAYAAIAABdg");
	this.shape_119.setTransform(732.6,60.075);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#990000").s().p("AASAvIAAgnIgjAAIAAAnIgZAAIAAhdIAZAAIAAAjIAjAAIAAgjIAZAAIAABdg");
	this.shape_120.setTransform(721.65,60.075);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_121.setTransform(711.126,60.075);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#990000").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAfAAIAWBAIAYhAIAeAAIAABdg");
	this.shape_122.setTransform(699.65,60.075);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#990000").s().p("AgnAXIAWgEQAGANALAAQAHAAAFgDQAEgEAAgFQAAgFgFgDQgEgEgHAAIgDAAIAAgPIAIAAQADgBADgDQACgEAAgEQAAgEgDgEQgDgEgHAAQgEAAgDACQgEACgDAIIgVgEQADgMAKgHQALgGAMAAQARAAAJAIQAJAIAAALQAAAIgEAFQgEAEgIAEQAKACAFAGQAFAGAAAIQAAALgKAIQgKAIgTAAQghAAgHgag");
	this.shape_123.setTransform(688.175,60.075);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#990000").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAlg6IAZAAIAABdg");
	this.shape_124.setTransform(678.5,60.075);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_125.setTransform(662.876,60.075);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#990000").s().p("AgtBCIAAiAIAXAAIAAANQAFgGAIgFQAHgFAJAAQAQAAALAOQAMAMAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgHIAAAvgAgOgmQgGAHAAAOQAAAPAGAHQAGAHAIABQAJAAAGgIQAFgFAAgQQAAgPgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_126.setTransform(652.725,61.75);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#990000").s().p("AgmBAIgDgTIALABQAIAAAEgFQAEgFADgIIgkhdIAbAAIAVBCIAWhCIAZAAIghBZIgGAQQgDAJgDAEIgFAHQgFADgFABQgFACgIAAIgNgCg");
	this.shape_127.setTransform(641.85,61.975);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_128.setTransform(632.575,60.075);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_129.setTransform(623.175,60.075);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#990000").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAlg6IAZAAIAABdg");
	this.shape_130.setTransform(612.7,60.075);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#990000").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_131.setTransform(601.975,60.075);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_132.setTransform(591.175,60.075);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#990000").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgDAAgPIAAg1IBSAAIAABcIgZAAIAAhIIggAAIAAAoQAAARgEAGQgEAHgEACQgFABgJAAIgQgBg");
	this.shape_133.setTransform(579.925,60.15);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#990000").s().p("AAMAvIgLgbQgEgIgCgCQgDgDgGAAIAAAoIgYAAIAAhcIAYAAIAAAmQAHgBACgDQADgDADgKQAEgOAGgEQAGgEAJAAIAKABIAAAQQgLAAgCACQgDACgDAJQgEANgJADQANADAHARIACABIANAag");
	this.shape_134.setTransform(570.8,60.05);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFQABgDAAgJIAAgFIgOAEg");
	this.shape_135.setTransform(555.725,60.075);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#990000").s().p("AARAvIAAgnIgiAAIAAAnIgYAAIAAhdIAYAAIAAAjIAiAAIAAgjIAZAAIAABdg");
	this.shape_136.setTransform(545.3,60.075);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_137.setTransform(529.375,60.075);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#990000").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_138.setTransform(518.675,60.075);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_139.setTransform(507.875,60.075);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#990000").s().p("AgtBCIAAiAIAXAAIAAANQAFgGAIgFQAHgFAJAAQAQAAALAOQAMAMAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgHIAAAvgAgOgmQgGAHAAAOQAAAPAGAHQAGAHAIABQAJAAAGgIQAFgFAAgQQAAgPgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_140.setTransform(497.625,61.75);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#990000").s().p("AAQAvIAAhJIggAAIAABJIgYAAIAAhdIBRAAIAABdg");
	this.shape_141.setTransform(486.35,60.075);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#990000").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_142.setTransform(475.825,60.075);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#990000").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAmg6IAYAAIAABdg");
	this.shape_143.setTransform(459.55,60.075);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_144.setTransform(443.525,60.075);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#990000").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_145.setTransform(432.825,60.075);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_146.setTransform(421.926,60.075);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#990000").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgDAAgPIAAg1IBSAAIAABcIgZAAIAAhIIggAAIAAAoQAAARgEAGQgEAHgEACQgFABgJAAIgQgBg");
	this.shape_147.setTransform(410.775,60.15);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#990000").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_148.setTransform(400.375,60.075);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#990000").s().p("AANAvIgMgbQgDgIgDgCQgDgDgFAAIAAAoIgZAAIAAhcIAZAAIAAAmQAFgBAEgDQACgDADgKQAEgOAGgEQAGgEAIAAIAKABIAAAQQgJAAgDACQgDACgDAJQgEANgIADQAMADAHARIABABIAOAag");
	this.shape_149.setTransform(385.65,60.05);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_150.setTransform(375.075,60.075);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#990000").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgDAAgPIAAg1IBSAAIAABcIgZAAIAAhIIggAAIAAAoQAAARgEAGQgEAHgEACQgFABgJAAIgQgBg");
	this.shape_151.setTransform(363.325,60.15);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_152.setTransform(353.026,60.075);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#990000").s().p("AgtBCIAAiAIAXAAIAAANQAFgGAIgFQAHgFAJAAQAQAAALAOQAMAMAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgHIAAAvgAgOgmQgGAHAAAOQAAAPAGAHQAGAHAIABQAJAAAGgIQAFgFAAgQQAAgPgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_153.setTransform(342.875,61.75);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_154.setTransform(332.725,60.075);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#990000").s().p("AgfAkQgMgNAAgXQAAgWAMgNQAMgNAUAAQARAAALAIQAJAHAFAPIgZAEQgBgHgEgEQgFgDgGAAQgIAAgGAGQgGAGAAAPQAAAQAGAHQAFAHAJAAQAHAAAFgEQAEgEACgKIAYAEQgEARgKAIQgLAJgSAAQgUAAgMgNg");
	this.shape_155.setTransform(323.45,60.075);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#990000").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAkg6IAZAAIAABdg");
	this.shape_156.setTransform(307.85,60.075);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#990000").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgDAAgPIAAg1IBSAAIAABcIgZAAIAAhIIggAAIAAAoQAAARgEAGQgEAHgEACQgFABgJAAIgQgBg");
	this.shape_157.setTransform(296.075,60.15);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#990000").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAmg6IAYAAIAABdg");
	this.shape_158.setTransform(285.4,60.075);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#990000").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAlg6IAYAAIAABdg");
	this.shape_159.setTransform(269.4,60.075);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#990000").s().p("AAMAvIgLgbQgDgIgDgCQgDgDgGAAIAAAoIgYAAIAAhcIAYAAIAAAmQAHgBACgDQADgDADgKQAEgOAGgEQAFgEAKAAIAKABIAAAQQgLAAgCACQgDACgDAJQgEANgJADQAMADAJARIABABIANAag");
	this.shape_160.setTransform(259.95,60.05);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#990000").s().p("Ag9AvIAAhdIAWAAIAABJIAdAAIAAhJIAVAAIAABJIAdAAIAAhJIAXAAIAABdg");
	this.shape_161.setTransform(247.35,60.075);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#990000").s().p("AAnAvIAAhdIAZAAIAABdgAg/AvIAAhdIAZAAIAAAnIAYAAQAOAAAIACQAHACAFAGQAGAHAAAKQAAANgJAHQgKAHgRAAgAgmAfIAWAAQAJAAAEgDQADgDAAgGQAAgHgEgCQgFgDgOAAIgPAAg");
	this.shape_162.setTransform(232.25,60.075);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#990000").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAfAAIAWBAIAYhAIAeAAIAABdg");
	this.shape_163.setTransform(217.95,60.075);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_164.setTransform(201.225,60.075);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#990000").s().p("AANAvIgNgbQgDgIgCgCQgDgDgFAAIAAAoIgZAAIAAhcIAZAAIAAAmQAFgBAEgDQACgDACgKQAFgOAGgEQAFgEAJAAIAKABIAAAQQgKAAgCACQgDACgDAJQgFANgHADQAMADAIARIAAABIAOAag");
	this.shape_165.setTransform(192.3,60.05);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#990000").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAkg6IAZAAIAABdg");
	this.shape_166.setTransform(181.75,60.075);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#990000").s().p("AgfAkQgMgNAAgXQAAgWAMgNQAMgNAUAAQARAAALAIQAJAHAFAPIgZAEQgBgHgEgEQgFgDgGAAQgIAAgGAGQgGAGAAAPQAAAQAGAHQAFAHAJAAQAHAAAFgEQAEgEACgKIAYAEQgEARgKAIQgLAJgSAAQgUAAgMgNg");
	this.shape_167.setTransform(171.35,60.075);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_168.setTransform(161.126,60.075);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#990000").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgDAAgPIAAg1IBSAAIAABcIgZAAIAAhIIggAAIAAAoQAAARgEAGQgEAHgEACQgFABgJAAIgQgBg");
	this.shape_169.setTransform(149.975,60.15);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_170.setTransform(139.275,60.075);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#990000").s().p("AANAvIgNgbQgDgIgCgCQgDgDgFAAIAAAoIgZAAIAAhcIAZAAIAAAmQAFgBAEgDQACgDACgKQAFgOAGgEQAFgEAJAAIAKABIAAAQQgJAAgDACQgDACgDAJQgFANgHADQALADAJARIAAABIAOAag");
	this.shape_171.setTransform(129.85,60.05);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#990000").s().p("AgJAlQgMgMgBgOIgTAAIAAAkIgZAAIAAhdIAZAAIAAAmIATAAQACgSANgLQAKgLATAAQAUAAANANQAMANAAAXQAAAOgEAKQgFALgKAGQgKAHgPAAQgXAAgJgMgAAHgWQgEAHgBAOQAAASAGAGQAFAHAJAAQAKAAAFgIQAFgHgBgOQAAgRgEgGQgGgGgJAAQgLAAgEAGg");
	this.shape_172.setTransform(112.35,60.075);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#990000").s().p("AgsAvIAAhdIAYAAIAAAnIAZAAQAOAAAIACQAHACAGAGQAFAHAAAKQAAANgJAHQgKAHgSAAgAgUAfIAXAAQAKAAADgDQADgEAAgFQAAgHgEgCQgGgDgMAAIgRAAg");
	this.shape_173.setTransform(99.25,60.075);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#990000").s().p("AAwA7IAAgZIhzAAIAAhcIAXAAIAABIIAcAAIAAhIIAWAAIAABIIAdAAIAAhIIAXAAIAABIIAKAAIAAAtg");
	this.shape_174.setTransform(86.225,61.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_175.setTransform(72.725,60.075);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#990000").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAfAAIAWBAIAYhAIAeAAIAABdg");
	this.shape_176.setTransform(60.65,60.075);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_177.setTransform(48.425,60.075);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#990000").s().p("AARAvIAAhJIghAAIAABJIgZAAIAAhdIBTAAIAABdg");
	this.shape_178.setTransform(37.4,60.075);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#990000").s().p("AgnAxQgQgSAAgeQAAgfAQgRQARgSAaAAQAYgBAOAOQAJAIAFAQIgaAHQgCgLgIgFQgHgGgKgBQgOAAgIALQgJALAAAWQAAAYAIAKQAJAKANAAQALAAAHgGQAIgGADgPIAZAIQgGAVgNALQgOAJgVABQgYAAgRgSg");
	this.shape_179.setTransform(20.525,58.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#990000").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_180.setTransform(704.475,41.425);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_181.setTransform(696.975,37.975);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#990000").s().p("AgtBBIAAiAIAXAAIAAAPQAFgIAIgEQAHgFAJABQAQgBALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAIAIgBQAJAAAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_182.setTransform(686.725,39.65);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_183.setTransform(675.475,37.975);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_184.setTransform(665.575,37.975);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#990000").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAkg6IAZAAIAABdg");
	this.shape_185.setTransform(655.7,37.975);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#990000").s().p("AARAvIAAgnIgiAAIAAAnIgYAAIAAhdIAYAAIAAAjIAiAAIAAgjIAZAAIAABdg");
	this.shape_186.setTransform(644.75,37.975);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_187.setTransform(633.825,37.975);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#990000").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAeAAIAXBAIAXhAIAfAAIAABdg");
	this.shape_188.setTransform(621.75,37.975);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#990000").s().p("AgnBAIgCgTIAKABQAJAAAFgFQADgFACgIIgjhdIAaAAIAWBCIAVhCIAaAAIghBZIgFAQQgEAJgDAEIgGAHQgEADgFABQgGACgGAAQgIAAgHgCg");
	this.shape_189.setTransform(604.9,39.875);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#990000").s().p("AARAvIAAgnIgiAAIAAAnIgZAAIAAhdIAZAAIAAAjIAiAAIAAgjIAaAAIAABdg");
	this.shape_190.setTransform(594.6,37.975);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_191.setTransform(584.175,37.975);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#990000").s().p("AgtBBIAAiAIAXAAIAAAPQAFgIAIgEQAHgFAJABQAQgBALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAIAIgBQAJAAAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_192.setTransform(573.925,39.65);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#990000").s().p("AAMAvIgMgbQgCgIgDgDQgDgCgGAAIAAAoIgYAAIAAhdIAYAAIAAAnQAHgBACgDQADgDACgLQAFgNAGgEQAFgEAKAAIAKAAIAAARQgLAAgCABQgDACgDAKQgEANgJADQAMADAJAQIABACIANAag");
	this.shape_193.setTransform(564.25,37.95);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#990000").s().p("AgqATIAYgEQADAPANAAQAIAAAGgGQAEgGACgLIgZAAIAAgOIAZAAQgBgLgFgFQgEgGgIAAQgFAAgFADQgFADgBAGIgZgFQAKgaAeAAQAWAAALANQALAOAAAVQAAAXgLANQgLANgWAAQghAAgIgeg");
	this.shape_194.setTransform(554.05,37.975);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#990000").s().p("AAMAvIgLgbQgDgIgDgDQgDgCgGAAIAAAoIgYAAIAAhdIAYAAIAAAnQAHgBACgDQADgDADgLQAEgNAGgEQAFgEAKAAIAKAAIAAARQgLAAgCABQgDACgDAKQgEANgJADQAMADAJAQIABACIANAag");
	this.shape_195.setTransform(540.3,37.95);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#990000").s().p("AghAyQgKgMAAgTQAAgXANgNQAMgNASAAQAUAAAMAOQAMANAAAcIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAGQgKAIgPgBQgYABgLgRgAgMgFQgFAFAAAKIAkAAQAAgKgFgGQgGgFgHAAQgHAAgGAGgAAJgsIAAgWIAVAAIAAAWgAgcgsIAAgWIAVAAIAAAWg");
	this.shape_196.setTransform(525.126,36.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_197.setTransform(515.126,37.975);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_198.setTransform(500.126,37.975);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_199.setTransform(490.825,37.975);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#990000").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAlg6IAZAAIAABdg");
	this.shape_200.setTransform(480.95,37.975);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#990000").s().p("AAlAvIgLgbQgDgHgDgDQgDgDgFAAIAAAoIgXAAIAAgoQgFAAgCACQgCACgFAJIgMAbIgaAAIANgaQAKgTALgCQgIgDgFgNQgDgJgCgCQgDgCgKAAIAAgRIALAAQAHAAAGADQAGAFAFANQAEAMADADQACADAFAAIAAgnIAXAAIAAAnQAFAAACgDIAHgPQAEgNAGgFQAGgDAJAAIAKAAIAAARQgKAAgDACQgCACgEAJQgEANgIADQALACAKATIANAag");
	this.shape_201.setTransform(469.05,37.95);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_202.setTransform(457.175,37.975);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#990000").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgEAAgOIAAg2IBSAAIAABdIgZAAIAAhJIggAAIAAAqQAAAPgEAHQgEAGgEACQgFACgJABIgQgCg");
	this.shape_203.setTransform(445.425,38.05);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#990000").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAkg6IAZAAIAABdg");
	this.shape_204.setTransform(434.75,37.975);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#990000").s().p("AgtBBIAAiAIAXAAIAAAPQAFgIAIgEQAHgFAJABQAQgBALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAIAIgBQAJAAAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_205.setTransform(423.975,39.65);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#990000").s().p("AARAvIAAhJIghAAIAABJIgZAAIAAhdIBTAAIAABdg");
	this.shape_206.setTransform(412.7,37.975);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#990000").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAmg6IAYAAIAABdg");
	this.shape_207.setTransform(396.9,37.975);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#990000").s().p("AgnBAIgCgTIAKABQAJAAAFgFQAEgFABgIIgjhdIAaAAIAWBCIAVhCIAaAAIghBZIgFAQQgEAJgDAEIgGAHQgEADgFABQgGACgGAAQgIAAgHgCg");
	this.shape_208.setTransform(381.25,39.875);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_209.setTransform(371.975,37.975);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#990000").s().p("AgtBBIAAiAIAXAAIAAAPQAFgIAIgEQAHgFAJABQAQgBALANQAMANAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgIIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAIAIgBQAJAAAGgGQAFgHAAgPQAAgOgGgIQgFgHgJAAQgIAAgGAHg");
	this.shape_210.setTransform(362.325,39.65);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_211.setTransform(351.575,37.975);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#990000").s().p("AAMAvIgLgbQgEgIgCgDQgDgCgGAAIAAAoIgYAAIAAhdIAYAAIAAAnQAHgBACgDQADgDADgLQAEgNAGgEQAGgEAJAAIAKAAIAAARQgLAAgCABQgDACgDAKQgEANgJADQANADAHAQIACACIANAag");
	this.shape_212.setTransform(342.65,37.95);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#990000").s().p("AgKAlQgLgMAAgOIgUAAIAAAkIgZAAIAAhdIAZAAIAAAmIAUAAQABgSAMgLQALgLAUAAQATAAAMANQANANAAAXQAAAOgFAKQgEALgKAGQgKAHgPAAQgWAAgLgMgAAHgWQgFAHABAOQAAASAEAGQAFAHALAAQAJAAAFgIQAEgHABgOQAAgRgGgGQgEgGgKAAQgLAAgEAGg");
	this.shape_213.setTransform(325.15,37.975);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_214.setTransform(311.725,37.975);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#990000").s().p("AANAvIgNgbQgDgIgCgDQgDgCgFAAIAAAoIgZAAIAAhdIAZAAIAAAnQAGgBADgDQACgDACgLQAFgNAGgEQAGgEAIAAIAKAAIAAARQgJAAgDABQgDACgDAKQgFANgHADQAMADAHAQIABACIAOAag");
	this.shape_215.setTransform(302.3,37.95);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#990000").s().p("AgfAkQgMgNAAgXQAAgWAMgNQANgNATAAQASAAAJAIQALAHAEAPIgYAEQgCgHgEgEQgFgDgHAAQgIAAgFAGQgGAGABAPQgBAQAGAHQAFAHAJAAQAHAAAEgEQAFgEACgKIAYAEQgDARgMAIQgKAJgSAAQgTAAgNgNg");
	this.shape_216.setTransform(292.35,37.975);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#990000").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_217.setTransform(282.025,37.975);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_218.setTransform(270.725,37.975);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#990000").s().p("AAMAvIgLgbQgDgIgDgDQgDgCgGAAIAAAoIgYAAIAAhdIAYAAIAAAnQAHgBACgDQADgDADgLQAEgNAGgEQAFgEAKAAIAKAAIAAARQgLAAgCABQgDACgDAKQgEANgJADQAMADAJAQIABACIANAag");
	this.shape_219.setTransform(261.3,37.95);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#990000").s().p("AARAvIAAgnIgiAAIAAAnIgZAAIAAhdIAZAAIAAAjIAiAAIAAgjIAaAAIAABdg");
	this.shape_220.setTransform(250.8,37.975);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#990000").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_221.setTransform(240.375,37.975);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#990000").s().p("AgaA8QgLgHgFgMQgFgNAAgcQAAghANgOQAMgPAegBIAMAAQAFAAACgDIARAAQgBAMgFAFQgFAGgUAAIgFAAIgDAAQgKAAgIADQgHACgFAIQgFAHAAAQQAGgKAIgFQAJgFALAAQASAAANAPQANANAAASQAAAUgOAOQgNAOgVAAQgOAAgMgHgAgPAAQgHAGAAANQAAANAHAHQAGAIAJgBQAJABAHgIQAGgIAAgMQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_222.setTransform(229.825,36.15);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#990000").s().p("AgKAlQgLgMAAgOIgUAAIAAAkIgZAAIAAhdIAZAAIAAAmIAUAAQACgSALgLQALgLAUAAQATAAAMANQANANAAAXQAAAOgFAKQgEALgKAGQgJAHgQAAQgWAAgLgMgAAHgWQgFAHABAOQAAASAEAGQAGAHAKAAQAJAAAFgIQAEgHAAgOQABgRgGgGQgEgGgKAAQgKAAgFAGg");
	this.shape_223.setTransform(211.85,37.975);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#990000").s().p("AgnBAIgCgTIALABQAJAAADgFQAFgFACgIIgkhdIAaAAIAWBCIAWhCIAZAAIghBZIgGAQQgDAJgDAEIgGAHQgDADgGABQgGACgGAAQgHAAgIgCg");
	this.shape_224.setTransform(198.8,39.875);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#990000").s().p("AgaA8QgLgHgFgMQgFgNAAgcQAAghANgOQAMgPAegBIAMAAQAFAAACgDIARAAQgBAMgFAFQgFAGgUAAIgFAAIgDAAQgKAAgIADQgHACgFAIQgFAHAAAQQAGgKAIgFQAJgFALAAQASAAANAPQANANAAASQAAAUgOAOQgNAOgVAAQgOAAgMgHgAgPAAQgHAGAAANQAAANAHAHQAGAIAJgBQAJABAHgIQAGgIAAgMQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_225.setTransform(188.375,36.15);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#990000").s().p("AgKAlQgLgMAAgOIgUAAIAAAkIgZAAIAAhdIAZAAIAAAmIAUAAQACgSALgLQALgLAUAAQATAAAMANQANANAAAXQAAAOgFAKQgEALgKAGQgJAHgQAAQgWAAgLgMgAAHgWQgFAHABAOQAAASAEAGQAGAHAKAAQAJAAAFgIQAEgHABgOQAAgRgGgGQgEgGgKAAQgKAAgFAGg");
	this.shape_226.setTransform(175.4,37.975);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#990000").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgEAAgOIAAg2IBSAAIAABdIgZAAIAAhJIggAAIAAAqQAAAPgEAHQgEAGgEACQgFACgJABIgQgCg");
	this.shape_227.setTransform(161.225,38.05);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#990000").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_228.setTransform(145.926,37.975);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#990000").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_229.setTransform(136.625,37.975);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#990000").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAlg6IAYAAIAABdg");
	this.shape_230.setTransform(126.75,37.975);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#990000").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAfAAIAWBAIAXhAIAfAAIAABdg");
	this.shape_231.setTransform(114.65,37.975);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#990000").s().p("AgsAvIAAhdIAZAAIAAAnIAYAAQAOAAAIACQAHACAGAGQAFAHAAAKQAAANgJAHQgKAHgSAAgAgTAfIAVAAQAMAAADgDQACgEAAgFQAAgHgEgCQgGgDgMAAIgQAAg");
	this.shape_232.setTransform(102.75,37.975);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#990000").s().p("AgnAXIAWgEQAGANALAAQAHAAAFgDQAEgEAAgFQAAgFgFgDQgEgEgHAAIgDAAIAAgPIAIAAQADgBADgDQACgEAAgEQAAgEgDgEQgDgEgHAAQgEAAgDACQgEACgDAIIgVgEQADgMAKgHQALgGAMAAQARAAAJAIQAJAIAAALQAAAIgEAFQgEAEgIAEQAKACAFAGQAFAGAAAIQAAALgKAIQgKAIgTAAQghAAgHgag");
	this.shape_233.setTransform(92.175,37.975);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#990000").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_234.setTransform(82.475,37.975);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#990000").s().p("Ag1BBIAAiAIAzAAQAPAAAIABQAHABAGAEQAGAFAEAGQAEAGAAAJQAAAJgFAHQgFAJgIADQAMADAGAIQAGAIAAALQAAAJgEAJQgEAHgHAFQgHAFgKACQgHABgYAAgAgbArIAYAAQANAAAEgBQAGgBADgEQAEgEAAgHQAAgGgDgEQgCgEgGgCQgFgBgRAAIgVAAgAgbgMIARAAIASgBQAHgBAEgDQAEgEAAgGQgBgGgDgEQgDgDgGgBIgWgBIgPAAg");
	this.shape_235.setTransform(70.65,36.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#993300").s().p("AgMAvIAAgZIAYAAIAAAZgAgMgVIAAgZIAYAAIAAAZg");
	this.shape_236.setTransform(534.8,15.425);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#993300").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_237.setTransform(526.825,15.425);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#993300").s().p("AgtBCIAAiBIAXAAIAAAOQAFgGAIgFQAHgEAJgBQAQABALANQAMAMAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgHIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAHAIABQAJAAAGgIQAFgFAAgQQAAgPgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_238.setTransform(516.575,17.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#993300").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_239.setTransform(505.325,15.425);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#993300").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_240.setTransform(495.425,15.425);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#993300").s().p("AATAvIAAg7IgmA7IgXAAIAAhdIAXAAIAAA6IAmg6IAYAAIAABdg");
	this.shape_241.setTransform(485.55,15.425);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#993300").s().p("AASAvIAAgnIgjAAIAAAnIgZAAIAAhdIAZAAIAAAjIAjAAIAAgjIAZAAIAABdg");
	this.shape_242.setTransform(474.6,15.425);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#993300").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_243.setTransform(463.675,15.425);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#993300").s().p("AAhAvIAAg9IgXA9IgUAAIgWg9IAAA9IgVAAIAAhdIAfAAIAWBAIAYhAIAeAAIAABdg");
	this.shape_244.setTransform(451.6,15.425);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#993300").s().p("AgmBAIgDgTIALABQAIAAAEgFQAFgFACgIIgkhdIAbAAIAVBCIAWhCIAZAAIghBZIgGAQQgDAJgDAEIgFAHQgEADgGABQgFACgIAAIgNgCg");
	this.shape_245.setTransform(434.75,17.325);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#993300").s().p("AANAvIgNgbQgDgIgCgCQgDgDgFAAIAAAoIgZAAIAAhdIAZAAIAAAnQAFgBAEgDQACgDACgKQAFgOAGgEQAFgEAJAAIAKAAIAAARQgKAAgCABQgDADgDAJQgFANgHADQALADAIARIABABIAOAag");
	this.shape_246.setTransform(425.95,15.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#993300").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_247.setTransform(415.675,15.425);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#993300").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_248.setTransform(404.375,15.425);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#993300").s().p("AgtBCIAAiBIAXAAIAAAOQAFgGAIgFQAHgEAJgBQAQABALANQAMAMAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgHIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAHAIABQAJAAAGgIQAFgFAAgQQAAgPgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_249.setTransform(393.625,17.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#993300").s().p("AgaA8QgLgHgFgNQgFgMAAgcQAAghANgPQAMgOAeAAIAMAAQAFAAACgEIARAAQgBAMgFAFQgFAGgUAAIgFAAIgDAAQgKAAgIACQgHADgFAHQgFAIAAARQAGgLAIgFQAJgFALAAQASAAANAOQANANAAAUQAAATgOAOQgNAOgVAAQgOAAgMgHgAgPAAQgHAHAAAMQAAANAHAHQAGAIAJAAQAJAAAHgIQAGgHAAgNQAAgMgGgHQgHgIgJABQgJgBgGAIg");
	this.shape_250.setTransform(382.325,13.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#993300").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAkg6IAZAAIAABdg");
	this.shape_251.setTransform(371.3,15.425);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#993300").s().p("AgxAuIAAgSIAEAAIAGAAQAFAAABgDQABgDAAgQIAAg1IBSAAIAABdIgZAAIAAhIIggAAIAAAoQAAARgEAGQgEAHgEACQgFABgJABIgQgCg");
	this.shape_252.setTransform(359.525,15.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#993300").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_253.setTransform(349.325,15.425);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#993300").s().p("AAMAvIgLgbQgEgIgCgCQgDgDgGAAIAAAoIgYAAIAAhdIAYAAIAAAnQAHgBACgDQADgDADgKQAEgOAGgEQAGgEAJAAIAKAAIAAARQgLAAgCABQgDADgDAJQgEANgJADQANADAHARIACABIANAag");
	this.shape_254.setTransform(340.4,15.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#993300").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_255.setTransform(325.226,15.425);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#993300").s().p("AgMAvIAAhJIgdAAIAAgUIBTAAIAAAUIgeAAIAABJg");
	this.shape_256.setTransform(315.925,15.425);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#993300").s().p("AATAvIAAg7IglA7IgYAAIAAhdIAYAAIAAA6IAkg6IAZAAIAABdg");
	this.shape_257.setTransform(306.05,15.425);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#993300").s().p("AAjA7IAAgZIhFAAIAAAZIgUAAIAAgtIAKAAQAGgGAEgOQAEgPABglIBKAAIAABIIAKAAIAAAtgAgUAOIApAAIAAg0IgdAAQgBAmgLAOg");
	this.shape_258.setTransform(294.525,16.65);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#993300").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_259.setTransform(283.976,15.425);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#993300").s().p("AgsAvIAAhdIA1AAQARAAAIAGQAIAHAAAMQAAAIgEAFQgFAGgHACQAKABAFAHQAEAGAAAIQAAALgIAHQgIAHgPAAgAgTAfIATAAQAKAAAFgDQAFgCAAgHQAAgHgGgCQgGgDgPAAIgMAAgAgTgHIAQAAQAKAAAFgDQAGgDAAgGQAAgGgFgCQgFgDgLAAIgQAAg");
	this.shape_260.setTransform(273.875,15.425);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#993300").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_261.setTransform(262.575,15.425);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#993300").s().p("AgtBCIAAiBIAXAAIAAAOQAFgGAIgFQAHgEAJgBQAQABALANQAMAMAAAXQAAAWgMANQgLANgRAAQgGAAgHgDQgGgDgHgHIAAAvgAgOgmQgGAHAAANQAAARAGAGQAGAHAIABQAJAAAGgIQAFgFAAgQQAAgPgGgHQgFgHgJAAQgIAAgGAHg");
	this.shape_262.setTransform(251.825,17.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#993300").s().p("AAZBAIAAhqIgxAAIAABqIgaAAIAAiAIBlAAIAACAg");
	this.shape_263.setTransform(239.575,13.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,771,136.9), null);


(lib.Символ5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("Ag5BdIgDgcQAJACAGAAQANAAAGgIQAGgHADgLIgziHIAlAAIAgBfIAfhfIAlAAIgvCBIgJAYIgJASQgEAGgFAEQgFAEgIACQgIACgKAAQgLAAgKgCg");
	this.shape.setTransform(412.525,52.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AASBEIgSgnQgEgMgEgDQgEgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBAEgEQADgFAFgPQAGgUAIgFQAJgGANAAIAOABIAAAXQgOAAgEADQgEADgEAOQgHASgLAFQAQADAMAZIACADIATAlg");
	this.shape_1.setTransform(399.775,49.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AAYBDIAAhoIgvAAIAABoIgkAAIAAiGIB3AAIAACGg");
	this.shape_2.setTransform(384.425,49.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AgiA+QgRgIgJgRQgJgPABgXQgBgRAJgRQAJgRAQgJQAQgJATABQAfAAATATQAUAVgBAdQABAfgUATQgUAVgeAAQgSAAgQgJgAgWgeQgKALAAATQAAAUAKALQAJALANgBQAOABAKgLQAJgLAAgUQAAgTgJgLQgKgKgOgBQgNABgJAKg");
	this.shape_3.setTransform(368.8,49.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_4.setTransform(352.975,49.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AASBEIgSgnQgEgMgEgDQgEgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBAEgEQADgFAFgPQAGgUAIgFQAJgGANAAIAOABIAAAXQgOAAgEADQgEADgEAOQgHASgLAFQAQADAMAZIACADIATAlg");
	this.shape_5.setTransform(339.475,49.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbAAQAdAAARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(317.5777,49.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AgQBDIAAhoIgsAAIAAgeIB5AAIAAAeIgrAAIAABog");
	this.shape_7.setTransform(304.05,49.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AAbBDIAAhUIg2BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_8.setTransform(289.7,49.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002277").s().p("AAwBDIAAhXIghBXIgeAAIgfhXIAABXIgfAAIAAiGIAtAAIAgBeIAiheIAsAAIAACGg");
	this.shape_9.setTransform(272.175,49.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("AA2BEIgRgnQgEgLgEgDQgEgEgHgBIAAA6IgjAAIAAg6QgHABgCACQgDADgHANIgRAnIgmAAIATglQAOgcAQgDQgMgFgGgSQgFgOgEgDQgEgDgOAAIAAgXIAPgBQAMAAAIAFQAIAFAIAVQAGAQADAFQADAEAHAAIAAg3IAjAAIAAA3QAHAAADgEQAEgFAFgQQAHgUAJgGQAIgFANAAIAOABIAAAXQgOAAgEADQgEADgFAOQgGASgMAFQAQADAOAcIATAlg");
	this.shape_10.setTransform(253.225,49.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgKgFgEQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWgBAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_11.setTransform(236.825,49.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_12.setTransform(221.725,49.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AAwBDIAAhXIghBXIgeAAIgfhXIAABXIgfAAIAAiGIAtAAIAgBeIAiheIAsAAIAACGg");
	this.shape_13.setTransform(554.325,18.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AAgBDIAAg4IgDAAQgMAAgFADQgGAEgGAJIgBADIgYAlIgpAAIAZgmQALgRAJgDQgPgBgJgJQgKgLAAgQQAAgNAHgKQAGgJAKgDQAKgEAUAAIBFAAIAACGgAgMgoQgGAFAAAJQAAAJAGAEQAHAFAOAAIAXAAIAAgjIgaAAQgNAAgFADg");
	this.shape_14.setTransform(536.125,18.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("AAbBDIAAhUIg2BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_15.setTransform(521.45,18.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#002277").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_16.setTransform(505.625,18.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_17.setTransform(490.575,18.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#002277").s().p("AAzBVIAAgjIhlAAIAAAjIgdAAIAAhAIAPAAQAJgLAGgUQAGgWABg0IBrAAIAABpIAPAAIAABAgAgdAVIA7AAIAAhMIgpAAQgDA3gPAVg");
	this.shape_18.setTransform(474.7,20.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_19.setTransform(459.625,18.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#002277").s().p("Ag5AhIAggGQAJAUAQgBQALABAGgGQAGgFAAgHQAAgIgGgEQgHgFgKAAIgFAAIAAgWIANgBQADgBAFgFQADgFAAgFQAAgHgEgGQgFgFgKAAQgFAAgGADQgFADgFAMIgfgHQAFgRAPgKQAPgJASAAQAYAAAOAMQAOALAAARQAAALgHAGQgFAHgNAGQAQAEAHAHQAHAJAAAMQAAAQgOALQgPAMgcAAQgvAAgLgmg");
	this.shape_20.setTransform(445.55,18.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#002277").s().p("AgiA+QgRgIgJgQQgIgQAAgXQAAgRAIgRQAJgRAQgJQAQgJATAAQAeABAUATQATAVAAAdQAAAfgTATQgUAVgeAAQgRAAgRgJgAgWgeQgKALAAATQAAAUAKALQAJALANgBQAOABAJgLQAKgLAAgUQAAgTgKgLQgJgKgOgBQgNABgJAKg");
	this.shape_21.setTransform(424.35,18.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#002277").s().p("AAYBDIAAhoIgvAAIAABoIgkAAIAAiGIB3AAIAACGg");
	this.shape_22.setTransform(408.375,18.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_23.setTransform(386.275,18.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#002277").s().p("AgtA0QgRgTAAghQAAggARgTQARgSAdgBQAaAAAOALQAOALAHAWIgjAGQgCgKgGgGQgHgFgKgBQgMAAgIAKQgIAJAAAWQAAAXAIAJQAIAKAMAAQALABAGgGQAHgGADgOIAjAGQgGAYgPAMQgQANgaAAQgcgBgSgSg");
	this.shape_24.setTransform(372,18.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#002277").s().p("AgiA+QgRgIgJgQQgJgQABgXQgBgRAJgRQAJgRAQgJQAQgJATAAQAfABATATQAUAVAAAdQAAAfgUATQgUAVgeAAQgSAAgQgJgAgWgeQgKALAAATQAAAUAKALQAJALANgBQAOABAKgLQAJgLAAgUQAAgTgJgLQgKgKgOgBQgNABgJAKg");
	this.shape_25.setTransform(356.65,18.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#002277").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_26.setTransform(341.075,21.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#002277").s().p("AAYBDIAAhoIgvAAIAABoIgkAAIAAiGIB3AAIAACGg");
	this.shape_27.setTransform(324.775,18.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#002277").s().p("AgiA+QgRgIgJgQQgIgQAAgXQAAgRAIgRQAJgRAQgJQAQgJATAAQAeABAUATQATAVAAAdQAAAfgTATQgUAVgeAAQgRAAgRgJgAgWgeQgKALAAATQAAAUAKALQAJALANgBQAOABAJgLQAKgLAAgUQAAgTgKgLQgJgKgOgBQgNABgJAKg");
	this.shape_28.setTransform(309.15,18.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#002277").s().p("AAgBDIAAg4IgDAAQgMAAgFADQgGAEgGAJIgBADIgYAlIgpAAIAZgmQALgRAJgDQgPgBgJgJQgKgLAAgQQAAgNAHgKQAGgJAKgDQAKgEAUAAIBFAAIAACGgAgMgoQgGAFAAAJQAAAJAGAEQAHAFAOAAIAXAAIAAgjIgaAAQgNAAgFADg");
	this.shape_29.setTransform(285.475,18.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#002277").s().p("AAbBDIAAhUIg2BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_30.setTransform(270.8,18.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#002277").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_31.setTransform(254.975,18.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgFAAgNIAAgHIgUAFg");
	this.shape_32.setTransform(239.925,18.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#002277").s().p("AAYBDIAAg2QgVAHgKgBQgQABgNgIQgNgHgFgKQgFgLAAgSIAAghIAkAAIAAAhQAAALACAGQACAFAHAEQAGADAJAAQAJABAMgFIAAg6IAkAAIAACGg");
	this.shape_33.setTransform(224.975,18.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#002277").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_34.setTransform(209.725,18.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#002277").s().p("AgiA+QgRgIgJgQQgIgQAAgXQAAgRAIgRQAJgRAQgJQAQgJATAAQAeABAUATQATAVAAAdQAAAfgTATQgUAVgeAAQgRAAgRgJgAgWgeQgKALAAATQAAAUAKALQAJALANgBQAOABAJgLQAKgLAAgUQAAgTgKgLQgJgKgOgBQgNABgJAKg");
	this.shape_35.setTransform(193.95,18.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#002277").s().p("AASBEIgSgnQgEgMgEgDQgEgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBAEgEQADgFAFgPQAGgUAIgFQAJgGANAAIAOABIAAAXQgOAAgEADQgEADgEAOQgHASgLAFQAQADAMAZIACADIATAlg");
	this.shape_36.setTransform(180.325,18.725);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#002277").s().p("AgiA+QgRgIgJgQQgJgQABgXQgBgRAJgRQAJgRAQgJQAQgJATAAQAeABAUATQAUAVgBAdQABAfgUATQgUAVgeAAQgRAAgRgJgAgWgeQgKALAAATQAAAUAKALQAJALANgBQAOABAJgLQAKgLAAgUQAAgTgKgLQgJgKgOgBQgNABgJAKg");
	this.shape_37.setTransform(165.05,18.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#002277").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRghQgIAIAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_38.setTransform(142.5277,18.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#002277").s().p("AhIBCIAAgaIAGAAIAJABQAHAAACgFQACgFAAgWIAAhNIB3AAIAACGIgkAAIAAhpIgwAAIAAA8QAAAXgFAJQgGAKgGADQgGADgPAAQgJAAgOgDg");
	this.shape_39.setTransform(126.45,18.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#002277").s().p("AgtA0QgRgTAAghQAAggARgTQASgSAcgBQAaAAAOALQAOALAHAWIgjAGQgCgKgGgGQgHgFgKgBQgMAAgIAKQgIAJAAAWQAAAXAIAJQAIAKAMAAQALABAGgGQAHgGACgOIAkAGQgGAYgPAMQgQANgaAAQgcgBgSgSg");
	this.shape_40.setTransform(111.9,18.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#002277").s().p("AgiA+QgRgIgJgQQgJgQABgXQgBgRAJgRQAJgRAQgJQAQgJATAAQAfABATATQAUAVAAAdQAAAfgUATQgUAVgeAAQgSAAgQgJgAgWgeQgKALAAATQAAAUAKALQAJALANgBQAOABAKgLQAJgLAAgUQAAgTgJgLQgKgKgOgBQgNABgJAKg");
	this.shape_41.setTransform(96.55,18.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#002277").s().p("AAlBdIAAiaIhJAAIAACaIglAAIAAi5ICTAAIAAC5g");
	this.shape_42.setTransform(79.2,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,633.7,64.1), null);


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3190D8").s().p("AnlGTQkDinAAjsQAAjrEDinQEDinFuAAICAAGIHdJJIgTgBQgegngqgnQifiNj4gmQj3gljABaQjABagYCjQgYCkCfCOQCfCOD3AlIB9AKIh2AFQluAAkDing");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-57,149,114);


(lib.КнопкаvisBtnнебесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AAFBPIAAhxQgQAPgXAIIAAgcQAMgDAOgLQANgKAFgPIAZAAIAACdg");
	this.shape.setTransform(63.05,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AgRBPIg9hkIAABkIgeAAIAAidIAfAAIA+BnIAAhnIAdAAIAACdgAAcBIIAAgYIBNAAIAAAYgAAkAZQgMgNAAgRQAAgVAMgLQAMgMATAAQASAAAMANQAMAMAAATQAAALgFAKQgEAJgJAGQgJAHgPAAQgUAAgLgNgAA5gWQgEAGAAANQAAAKAEAFQADAFAHAAQAHAAADgHQADgGAAgMQAAgKgDgFQgDgGgGAAQgHAAgEAHg");
	this.shape_1.setTransform(39.925,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_2.setTransform(14.9258,1.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABHIAthHIAdAAIAABxg");
	this.shape_3.setTransform(2.15,1.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAApIArAAIAAgpIAeAAIAABxg");
	this.shape_4.setTransform(-11.25,1.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AgrAyQgKgJABgPQAAgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQABAHAFAIIgfAAIgDgJIgBgEQgHAIgJAEQgHADgLABQgRAAgLgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_5.setTransform(-24,1.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_6.setTransform(-37.425,3.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQABAHAFAIIgfAAIgDgJIAAgEQgIAIgJAEQgHADgLABQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_7.setTransform(-50.2,1.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AgmBJQgOgIgIgXIAegJQAEAOAIAEQAHAEALAAQAOAAAHgGQAHgHAAgIQAAgKgIgGQgIgFgOAAIgIAAIAAgXIAEAAQAOAAAHgHQAIgGAAgLQAAgJgGgGQgHgGgKAAQgUAAgGAUIgfgHQAKgmAvAAQAbAAAOAMQAOAMAAAQQAAAMgGAJQgHAJgNAHQAQAEAIAKQAIAKAAAOQAAAVgPANQgQAMgeAAQgYAAgOgIg");
	this.shape_8.setTransform(-63.625,-0.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AAEBPIAAhxQgPAPgXAIIAAgcQAMgDAOgLQANgLAFgOIAZAAIAACdg");
	this.shape_11.setTransform(62.05,-1.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AgpAoQgLgQAAgXQAAgcAPgQQAOgQAXAAQAZABAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdgBgOgTgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_12.setTransform(13.9258,0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABHIAthHIAdAAIAABxg");
	this.shape_13.setTransform(1.15,0.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQABAHAFAIIgfAAIgDgJIAAgDQgIAHgJAEQgHAEgLAAQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_14.setTransform(-25,0.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhBIgkAAQgBAvgOASg");
	this.shape_15.setTransform(-38.425,2.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQACAHAEAIIgfAAIgCgJIgBgDQgIAHgJAEQgHAEgKAAQgSAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAIAAQAGABAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_16.setTransform(-51.2,0.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:-63.625,y:-0.225}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-11.25,y:1.95}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:39.925,y:-0.225}},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_8,p:{x:-64.625,y:-1.225}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_4,p:{x:-12.25,y:0.95}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_1,p:{x:38.925,y:-1.225}},{t:this.shape_11}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:-63.625,y:-0.225}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-11.25,y:1.95}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:39.925,y:-0.225}},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.КнопкаSaveBtn2небесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAeAAQARAAAKADQAJADAHAHQAGAIAAAMQAAAQgLAJQgLAIgYAAgAgYAmIAcAAQANAAADgFQAEgDAAgHQAAgIgHgDQgGgDgPAAIgUAAg");
	this.shape.setTransform(52.8,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AgOA5IAAhZIgkAAIAAgYIBmAAIAAAYIglAAIAABZg");
	this.shape_1.setTransform(40.3,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABGIAthGIAdAAIAABxg");
	this.shape_2.setTransform(28.15,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAAqIArAAIAAgqIAeAAIAABxg");
	this.shape_3.setTransform(14.75,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgFgDgLAAQgHAAgFADQgEADgDAIIgcgFQAFgRAMgIQAKgIAXAAQATAAAKAFQAKAFAEAHQAEAIAAATIAAAjQgBAPACAHQABAHAFAIIgfAAIgDgJIAAgDQgIAHgJAEQgHAEgLAAQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAFAIAAQAHAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_4.setTransform(2,1.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("Ag3BQIAAicIAcAAIAAAQQAGgIAKgGQAJgFAKAAQAUAAAOAQQANAPAAAcQAAAcgNAQQgOAPgUAAQgJAAgHgDQgIgEgJgJIAAA5gAgSgvQgGAJgBARQAAATAIAIQAIAJAJAAQALAAAHgIQAHgIAAgTQAAgSgHgIQgHgJgLAAQgKAAgIAIg");
	this.shape_5.setTransform(-10.55,3.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AAWA5IgWgkIgXAkIgkAAIAqg6Igog3IAlAAIAUAfIAVgfIAjAAIgnA2IAqA7g");
	this.shape_6.setTransform(-23.75,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AgdA1QgOgHgIgOQgHgOAAgSQAAgQAHgOQAIgOAOgHQANgIAQAAQAaAAAQARQARARAAAZQAAAagRARQgRARgZAAQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_7.setTransform(-36.525,1.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AgwA9QgTgWAAgmQAAgmATgVQAVgXAgAAQAdAAASASQALAKAFATIgfAHQgDgMgJgHQgJgHgMAAQgRAAgLANQgLAMAAAcQAAAdALANQALAMAQAAQANABAIgJQAKgHAEgSIAeAKQgGAZgRANQgQAMgaAAQgeAAgVgUg");
	this.shape_8.setTransform(-51.3,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAeAAQARAAAKADQAKACAFAIQAHAJAAALQAAAQgLAJQgLAIgYAAgAgYAmIAbAAQAOAAADgFQAEgDAAgHQAAgIgHgDQgGgDgPAAIgUAAg");
	this.shape_11.setTransform(51.8,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AgOA5IAAhZIglAAIAAgYIBnAAIAAAYIglAAIAABZg");
	this.shape_12.setTransform(39.3,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAAqIAqAAIAAgqIAeAAIAABxg");
	this.shape_13.setTransform(13.75,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgHQAEgIAJgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgFgDgLAAQgHAAgFADQgEADgDAIIgcgFQAFgRAMgIQAKgIAXAAQATAAAKAFQAKAFAEAHQAEAIAAATIAAAjQgBAPACAHQACAHAEAIIgfAAIgCgJIgBgDQgIAHgJAEQgHAEgKAAQgSAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAFAIAAQAGAAAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_14.setTransform(1,0.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("Ag3BQIAAicIAcAAIAAAQQAGgIAKgGQAIgFALAAQAUAAAOAQQANAPAAAcQAAAcgNAQQgOAPgUAAQgJAAgHgDQgIgEgJgJIAAA5gAgSgvQgGAJgBARQAAATAIAIQAHAJAKAAQALAAAHgIQAHgIAAgTQAAgSgHgIQgIgJgKAAQgKAAgIAIg");
	this.shape_15.setTransform(-11.55,2.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#002277").s().p("AAWA5IgWgjIgXAjIgjAAIAog6Igng3IAlAAIAUAfIAVgfIAjAAIgnA2IAqA7g");
	this.shape_16.setTransform(-24.75,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#002277").s().p("AgwA9QgTgWAAgmQAAgmATgWQAVgVAggBQAdAAASASQALAKAFATIggAHQgCgMgJgHQgJgHgMAAQgRAAgLAMQgLANAAAcQAAAdALANQALAMAQAAQAMABAJgJQAKgHAEgSIAeAKQgHAZgQANQgQAMgaAAQgeAAgVgUg");
	this.shape_17.setTransform(-52.3,-1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-36.525,y:1.875}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:28.15,y:1.9}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_7,p:{x:-37.525,y:0.875}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_2,p:{x:27.15,y:0.9}},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-36.525,y:1.875}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:28.15,y:1.9}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.КнопкаnextUserBtnнебесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AAXBQIAAhJIguBJIgcAAIAAhxIAcAAIAABHIAuhHIAeAAIAABxgAgVg4QgJgJgCgOIAPAAQABAHAEAEQAFAEAIAAQAJAAAEgEQAFgEABgHIAPAAQgCAOgJAJQgIAIgPAAQgOAAgIgIg");
	this.shape.setTransform(59.6,-0.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AAXA5IAAhIIguBIIgcAAIAAhxIAcAAIAABHIAuhHIAeAAIAABxg");
	this.shape_1.setTransform(46.1,1.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AA7BIIAAgeIiNAAIAAhxIAcAAIAABZIAiAAIAAhZIAbAAIAABZIAjAAIAAhZIAcAAIAABZIANAAIAAA2g");
	this.shape_2.setTransform(30.6,3.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AgMAtQgOgPgBgRIgYAAIAAAsIgeAAIAAhxIAeAAIAAAuIAYAAQACgWAPgNQANgNAYAAQAYAAAPAPQAQAQAAAcQAAARgGANQgGANgLAIQgMAHgUABQgbAAgMgPgAAIgbQgFAIgBASQABAVAFAIQAHAIAMAAQAMAAAGgJQAGgJAAgSQgBgUgGgIQgGgHgMAAQgMAAgGAIg");
	this.shape_3.setTransform(11.75,1.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_4.setTransform(-4.225,4.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_5.setTransform(-17.525,3.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_6.setTransform(-30.4242,1.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_7.setTransform(-44.075,2.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AgvA8QgVgVAAgmQAAgmAVgWQAUgVAgAAQAdAAASARQALAKAFATIggAHQgCgMgJgHQgJgHgNAAQgQAAgLAMQgLANAAAcQAAAdALANQALAMAQAAQAMAAAKgIQAJgIAEgRIAfAKQgIAZgQANQgRAMgZAAQgeAAgUgVg");
	this.shape_8.setTransform(-58.45,-0.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AAXBQIAAhJIguBJIgcAAIAAhxIAcAAIAABHIAuhHIAdAAIAABxgAgVg4QgJgJgCgOIAPAAQABAHAEAEQAFAEAIAAQAJAAAEgEQAFgEABgHIAOAAQgBAOgJAJQgIAIgPAAQgOAAgIgIg");
	this.shape_11.setTransform(58.6,-1.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AAXA5IAAhIIguBIIgcAAIAAhxIAcAAIAABHIAuhHIAdAAIAABxg");
	this.shape_12.setTransform(45.1,0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AgMAtQgNgPgBgRIgZAAIAAAsIgeAAIAAhxIAeAAIAAAuIAZAAQABgWAPgNQANgOAYAAQAYABAPAPQAQAPAAAdQAAARgGANQgGANgMAIQgLAHgTABQgcAAgMgPgAAJgbQgHAIAAASQAAAVAHAIQAGAIANAAQALAAAGgJQAGgJAAgSQgBgUgFgHQgHgIgLAAQgNAAgFAIg");
	this.shape_13.setTransform(10.75,0.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhBIgkAAQgBAvgOASg");
	this.shape_14.setTransform(-18.525,2.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("AgpAoQgLgQAAgXQAAgcAPgQQAOgQAXAAQAZABAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdgBgOgTgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_15.setTransform(-31.4242,0.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHABQAGgBACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhZIgoAAIAAAyQAAAUgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_16.setTransform(-45.075,1.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#002277").s().p("AgvA8QgVgVAAgmQAAgmAVgWQAUgVAgAAQAdAAASARQALAKAFATIggAHQgCgMgJgHQgJgHgNAAQgQAAgLAMQgLANAAAcQAAAdALANQAKAMARAAQANAAAJgIQAJgIAEgRIAfAKQgHAZgRANQgQAMgaAAQgeAAgUgVg");
	this.shape_17.setTransform(-59.45,-1.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-4.225,y:4.275}},{t:this.shape_3},{t:this.shape_2,p:{x:30.6,y:3.45}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_4,p:{x:-5.225,y:3.275}},{t:this.shape_13},{t:this.shape_2,p:{x:29.6,y:2.45}},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-4.225,y:4.275}},{t:this.shape_3},{t:this.shape_2,p:{x:30.6,y:3.45}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.КнопкаduoBtnнебесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("Ag0BPQABgQAKgOQAIgOAZgYQATgSAFgHQAHgJAAgJQgBgKgFgGQgGgFgJAAQgIAAgGAFQgFAGgCANIgdgDQACgZAPgLQAOgKAUAAQAXAAAOAMQANANAAATQAAALgEAJQgEAJgIAKQgGAHgOANIgRARIgGAJIA7AAIAAAcg");
	this.shape.setTransform(63.7,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AgRBPIg9hkIAABkIgeAAIAAidIAfAAIA+BnIAAhnIAdAAIAACdgAAcBIIAAgYIBNAAIAAAYgAAkAZQgMgNAAgRQAAgVAMgLQAMgMATAAQASAAAMANQAMAMAAATQAAALgFAKQgEAJgJAGQgJAHgPAAQgUAAgLgNgAA5gWQgEAGAAANQAAAKAEAFQADAFAHAAQAHAAADgHQADgGAAgMQAAgKgDgFQgDgGgGAAQgHAAgEAHg");
	this.shape_1.setTransform(39.925,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_2.setTransform(14.9258,1.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABHIAthHIAdAAIAABxg");
	this.shape_3.setTransform(2.15,1.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAApIArAAIAAgpIAeAAIAABxg");
	this.shape_4.setTransform(-11.25,1.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AgrAyQgKgJABgPQAAgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQABAHAFAIIgfAAIgDgJIgBgEQgHAIgJAEQgHADgLABQgRAAgLgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_5.setTransform(-24,1.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_6.setTransform(-37.425,3.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQABAHAFAIIgfAAIgDgJIAAgEQgIAIgJAEQgHADgLABQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_7.setTransform(-50.2,1.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AgmBJQgOgIgIgXIAegJQAEAOAIAEQAHAEALAAQAOAAAHgGQAHgHAAgIQAAgKgIgGQgIgFgOAAIgIAAIAAgXIAEAAQAOAAAHgHQAIgGAAgLQAAgJgGgGQgHgGgKAAQgUAAgGAUIgfgHQAKgmAvAAQAbAAAOAMQAOAMAAAQQAAAMgGAJQgHAJgNAHQAQAEAIAKQAIAKAAAOQAAAVgPANQgQAMgeAAQgYAAgOgIg");
	this.shape_8.setTransform(-63.625,-0.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("Ag0BPQACgQAIgOQAJgPAZgXQAUgSAEgHQAGgJABgJQAAgKgGgGQgFgFgKAAQgIAAgGAFQgFAHgCAMIgdgDQACgYAPgMQANgKAVAAQAXAAAOAMQANANAAATQAAAKgEAKQgEAJgIAKQgGAHgOANIgRARIgGAJIA7AAIAAAcg");
	this.shape_11.setTransform(62.7,-1.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AgpAoQgLgQAAgXQAAgcAPgQQAOgQAXAAQAZABAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdgBgOgTgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_12.setTransform(13.9258,0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABHIAthHIAdAAIAABxg");
	this.shape_13.setTransform(1.15,0.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQABAHAFAIIgfAAIgDgJIAAgDQgIAHgJAEQgHAEgLAAQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_14.setTransform(-25,0.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhBIgkAAQgBAvgOASg");
	this.shape_15.setTransform(-38.425,2.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQACAHAEAIIgfAAIgCgJIgBgDQgIAHgJAEQgHAEgKAAQgSAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAIAAQAGABAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_16.setTransform(-51.2,0.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:-63.625,y:-0.225}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-11.25,y:1.95}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:39.925,y:-0.225}},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_8,p:{x:-64.625,y:-1.225}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_4,p:{x:-12.25,y:0.95}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_1,p:{x:38.925,y:-1.225}},{t:this.shape_11}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:-63.625,y:-0.225}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-11.25,y:1.95}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:39.925,y:-0.225}},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.КнопкаDontknowBtnнебесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAAqIArAAIAAgqIAeAAIAABxg");
	this.shape.setTransform(48.95,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXAAQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAFQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAHg");
	this.shape_1.setTransform(36.0758,1.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("Ag3BQIAAicIAcAAIAAAQQAGgIAKgGQAJgFAKAAQAUAAAOAQQANAPAAAcQAAAcgNAQQgOAPgUAAQgJAAgHgDQgIgEgJgJIAAA5gAgSgvQgGAJgBARQAAATAIAIQAIAJAJAAQALAAAHgIQAHgIAAgTQAAgSgHgIQgHgJgLAAQgKAAgIAIg");
	this.shape_2.setTransform(23.65,3.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXAAQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAFQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAHg");
	this.shape_3.setTransform(10.3758,1.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAHAAAQQAAAJgFAHQgGAIgIABQAMADAGAIQAFAHAAAKQAAANgJAJQgKAIgTAAgAgYAmIAYAAQAMAAAGgEQAGgCAAgJQAAgIgHgDQgHgDgSAAIgQAAgAgYgJIAUAAQANAAAGgEQAGgDAAgHQAAgIgFgCQgGgEgOAAIgUAAg");
	this.shape_4.setTransform(-2.025,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_5.setTransform(-15.375,4.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXAAQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAFQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAHg");
	this.shape_6.setTransform(-33.7242,1.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AAfBPIAAhFIg9AAIAABFIggAAIAAidIAgAAIAAA+IA9AAIAAg+IAgAAIAACdg");
	this.shape_7.setTransform(-47.75,-0.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAAqIAqAAIAAgqIAeAAIAABxg");
	this.shape_10.setTransform(47.95,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("Ag2BQIAAicIAbAAIAAAQQAGgIAKgGQAIgFALAAQAUAAAOAQQANAPAAAcQAAAcgNAQQgOAPgUAAQgJAAgHgDQgIgEgJgJIAAA5gAgSgvQgGAJgBARQAAATAIAIQAHAJAKAAQALAAAHgIQAHgIAAgTQAAgSgHgIQgIgJgKAAQgKAAgIAIg");
	this.shape_11.setTransform(22.65,2.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAHAAAPQAAAKgFAHQgGAIgIABQAMADAGAIQAFAHAAAKQAAANgJAJQgKAIgTAAgAgYAmIAYAAQAMAAAGgEQAGgCAAgJQAAgIgHgDQgHgEgSAAIgQAAgAgYgJIAUAAQANAAAGgEQAGgDAAgHQAAgIgFgCQgGgEgOAAIgUAAg");
	this.shape_12.setTransform(-3.025,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUIgHAQIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_13.setTransform(-16.375,3.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-47.75,y:-0.275}},{t:this.shape_6,p:{x:-33.7242,y:1.875}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:10.3758,y:1.875}},{t:this.shape_2},{t:this.shape_1,p:{x:36.0758,y:1.875}},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_7,p:{x:-48.75,y:-1.275}},{t:this.shape_6,p:{x:-34.7242,y:0.875}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_3,p:{x:9.3758,y:0.875}},{t:this.shape_11},{t:this.shape_1,p:{x:35.0758,y:0.875}},{t:this.shape_10}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-47.75,y:-0.275}},{t:this.shape_6,p:{x:-33.7242,y:1.875}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:10.3758,y:1.875}},{t:this.shape_2},{t:this.shape_1,p:{x:36.0758,y:1.875}},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.КнопкаBtnVisusODнебесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape.setTransform(36.7758,1.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AhMA5IAAhxIAcAAIAABZIAjAAIAAhZIAbAAIAABZIAjAAIAAhZIAcAAIAABxg");
	this.shape_1.setTransform(21.575,1.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAdAAQASABAKACQAKACAFAIQAHAIAAAMQAAARgLAIQgMAIgWAAgAgYAmIAbAAQANAAAEgEQAEgEAAgGQAAgJgGgDQgHgDgPAAIgUAAg");
	this.shape_2.setTransform(6.05,1.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_3.setTransform(-8.725,2.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgKgBQgJAAgEADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQACAHAEAIIgeAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgNADgEACQgFAEgBAHQABAGAFAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_4.setTransform(-21.2,1.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AAxBgIAAgiIhiAAIAAAiIgaAAIAAg9IANAAQAKgUADgaQADgbAAgpIAAgQIBsAAIAACCIAOAAIAAA9gAgdAjIA7AAIAAhoIgtAAQgBBHgNAhg");
	this.shape_5.setTransform(-35.45,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AgpAoQgLgQAAgXQAAgcAPgQQAOgQAXAAQAZABAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdgBgOgTgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_8.setTransform(35.7758,0.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAdAAQASABAKACQAJACAGAIQAHAJAAALQAAAQgLAIQgMAJgWAAgAgYAmIAcAAQANAAADgEQAEgFAAgFQAAgJgGgDQgHgDgPAAIgUAAg");
	this.shape_9.setTransform(5.05,0.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHABQAGgBACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhZIgoAAIAAAyQAAAUgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_10.setTransform(-9.725,1.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgrAyQgKgJABgPQAAgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWgBQATAAAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQABAHAFAIIgfAAIgDgJIgBgDQgHAHgJAEQgHAEgLAAQgRAAgLgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_11.setTransform(-22.2,0.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AAxBgIAAgiIhiAAIAAAiIgaAAIAAg9IANAAQAKgUADgaQADgbAAgpIAAgQIBsAAIAACCIAOAAIAAA9gAgdAjIA8AAIAAhoIguAAQAABHgOAhg");
	this.shape_12.setTransform(-36.45,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:21.575,y:1.95}},{t:this.shape}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_1,p:{x:20.575,y:0.95}},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:21.575,y:1.95}},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.КнопкаBtnRegнебесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape.setTransform(73.375,4.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgOA5IAAhYIgkAAIAAgZIBlAAIAAAZIgkAAIAABYg");
	this.shape_1.setTransform(62,1.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgdA0QgOgHgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_2.setTransform(49.925,1.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AggBJQgOgJgFgPQgGgPAAgiQAAgpAPgSQAPgSAkAAIAQAAQAGAAACgEIAVAAQgBAOgGAHQgHAHgYAAIgGAAIgEAAQgNAAgJADQgJADgGAJQgGAJAAAVQAHgNALgGQAKgGAOAAQAWAAAQARQAPARAAAWQAAAYgQASQgQARgaAAQgSAAgOgJgAgTAAQgIAIAAAPQAAAQAIAJQAIAJALAAQALAAAIgKQAIgJAAgPQAAgPgIgIQgIgKgLAAQgLAAgIAKg");
	this.shape_3.setTransform(36.375,-0.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgLgBQgJAAgEADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQACAHADAIIgdAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgMADgFACQgFAEgBAHQABAGAFAFQAEAEAHAAQAIABAHgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_4.setTransform(23.45,1.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("Ag3BQIAAidIAdAAIAAARQAFgIAJgGQAKgFAKAAQAUAAAOAQQAOAPAAAcQAAAbgOARQgOAPgUAAQgIAAgIgDQgIgEgIgKIAAA6gAgRguQgIAIABAQQAAAUAHAIQAIAJAKAAQAKAAAHgIQAHgHAAgUQAAgSgHgIQgHgJgLAAQgKAAgHAJg");
	this.shape_5.setTransform(10.9,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("Ag2A5IAAhxIAeAAIAAAvIAeAAQARABAKACQAKACAFAIQAHAIAAAMQAAARgLAIQgMAIgXAAgAgYAmIAbAAQANAAAEgEQAEgEAAgGQAAgJgGgDQgHgDgPAAIgUAAg");
	this.shape_6.setTransform(-8.6,1.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgOA5IAAhYIglAAIAAgZIBnAAIAAAZIglAAIAABYg");
	this.shape_7.setTransform(-21.1,1.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgrAyQgJgJgBgPQAAgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgLgBQgJAAgEADQgFAEgCAIIgbgFQAEgRALgIQALgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQAAAPACAIQABAHAEAIIgdAAIgDgJIgCgEQgHAIgJAEQgIADgJABQgTAAgKgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAIAAQAGABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_8.setTransform(-32.6,1.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AAVA5IAAguQgSAFgIAAQgOAAgLgGQgLgFgEgJQgFgKAAgPIAAgbIAfAAIAAAbQAAAKACAEQABAFAGADQAFADAHAAQAJAAAKgEIAAgwIAeAAIAABxg");
	this.shape_9.setTransform(-45.225,1.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgMgBQgHAAgFADQgEAEgDAIIgbgFQAEgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQAAAPABAIQABAHAEAIIgeAAIgCgJIgBgEQgIAIgJAEQgHADgKABQgTAAgJgKgAAAAHQgNADgDACQgHAEABAHQAAAGAEAFQAFAEAIAAQAGABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_10.setTransform(-57.6,1.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AAfBPIAAhFIg9AAIAABFIggAAIAAidIAgAAIAAA+IA9AAIAAg+IAgAAIAACdg");
	this.shape_11.setTransform(-71.75,-0.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgOA5IAAhZIgkAAIAAgYIBmAAIAAAYIglAAIAABZg");
	this.shape_14.setTransform(61,0.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgdA1QgOgIgIgNQgHgOAAgSQAAgPAHgPQAIgOAOgHQANgIAQAAQAaABAQAQQARARAAAZQAAAagRARQgRARgZAAQgPgBgOgGgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_15.setTransform(48.925,0.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgrAyQgKgJABgPQAAgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgKgBQgJAAgEADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWgBQATAAAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQACAHAEAIIgeAAIgEgJIgBgDQgHAHgJAEQgIAEgKAAQgRAAgLgKgAAAAHQgNADgEACQgFAEgBAHQABAGAFAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_16.setTransform(22.45,0.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("Ag3BQIAAidIAcAAIAAARQAGgJAJgFQAKgFAKAAQAUAAAOAQQAOAPAAAcQAAAbgOAQQgOAQgUAAQgIAAgIgDQgIgFgIgJIAAA6gAgSguQgGAIAAAQQgBAUAIAIQAIAJAKAAQAKAAAHgIQAHgIAAgTQAAgSgHgIQgIgJgKAAQgKAAgIAJg");
	this.shape_17.setTransform(9.9,3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("Ag2A5IAAhxIAeAAIAAAvIAdAAQASABAKACQAKACAFAIQAHAJAAALQAAAQgLAIQgLAJgXAAgAgYAmIAbAAQANAAAEgEQAEgFAAgFQAAgJgGgDQgHgDgPAAIgUAAg");
	this.shape_18.setTransform(-9.6,0.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgOA5IAAhZIglAAIAAgYIBnAAIAAAYIglAAIAABZg");
	this.shape_19.setTransform(-22.1,0.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgrAyQgJgJgBgPQABgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgLgBQgJAAgEADQgEAEgDAIIgbgFQAEgRALgIQALgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIgBAiQAAAPACAIQACAHADAIIgdAAIgEgJIgBgDQgHAHgJAEQgIAEgKAAQgRAAgLgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAHAAQAHABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_20.setTransform(-33.6,0.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AAVA5IAAguQgSAFgIAAQgOAAgLgGQgLgFgEgJQgFgKAAgPIAAgbIAfAAIAAAbQAAAJACAFQABAEAGAEQAFADAHAAQAJAAAKgEIAAgwIAeAAIAABxg");
	this.shape_21.setTransform(-46.225,0.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgqAyQgLgJAAgPQAAgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgMgBQgIAAgEADQgEAEgDAIIgbgFQAEgRAMgIQAKgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIAAAiQAAAPABAIQABAHAEAIIgeAAIgCgJIgBgDQgIAHgJAEQgIAEgJAAQgTAAgJgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAIAAQAGABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_22.setTransform(-58.6,0.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-71.75,y:-0.225}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:36.375,y:-0.275}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:73.375,y:4.275}}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_11,p:{x:-72.75,y:-1.225}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_3,p:{x:35.375,y:-1.275}},{t:this.shape_15},{t:this.shape_14},{t:this.shape,p:{x:72.375,y:3.275}}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-71.75,y:-0.225}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:36.375,y:-0.275}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:73.375,y:4.275}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.КнопкаBtnNext1небесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXAAQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAFQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAHg");
	this.shape.setTransform(36.7758,1.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AhMA5IAAhxIAcAAIAABYIAjAAIAAhYIAbAAIAABYIAjAAIAAhYIAcAAIAABxg");
	this.shape_1.setTransform(21.575,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAdAAQASAAAKADQAKADAFAHQAHAIAAAMQAAAQgLAJQgMAIgWAAgAgYAmIAbAAQANAAAEgFQAEgDAAgHQAAgIgGgDQgHgDgPAAIgUAAg");
	this.shape_2.setTransform(6.05,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("Ag8A4IAAgXIAFABIAHABQAGgBACgEQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhZIgoAAIAAAzQAAATgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_3.setTransform(-8.725,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgrAyQgKgJAAgPQABgKAEgHQAEgIAJgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgFgDgKAAQgJAAgEADQgFADgCAIIgcgFQAFgRALgIQAMgIAWAAQATAAAKAFQAKAFAEAHQAEAIAAATIgBAjQABAPABAHQACAHAEAIIgeAAIgEgJIgBgDQgHAHgJAEQgIAEgKAAQgRAAgLgKgAAAAHQgNADgEACQgFAEgBAHQABAGAFAFQAEAFAHAAQAIAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_4.setTransform(-21.2,1.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AAxBgIAAgjIhiAAIAAAjIgaAAIAAg9IANAAQAKgUADgaQADgaAAgpIAAgRIBsAAIAACCIAOAAIAAA9gAgdAjIA7AAIAAhnIgtAAQgBBGgNAhg");
	this.shape_5.setTransform(-35.45,1.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAdAAQASAAAKADQAJACAGAIQAHAJAAALQAAAQgLAJQgMAIgWAAgAgYAmIAcAAQANAAADgFQAEgDAAgHQAAgIgGgDQgHgDgPAAIgUAAg");
	this.shape_8.setTransform(5.05,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002277").s().p("Ag8A4IAAgXIAFABIAHAAQAGAAACgEQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAyQAAATgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_9.setTransform(-9.725,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("AgrAyQgKgJABgPQAAgKAEgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgFgDgLAAQgHAAgFADQgFADgCAIIgcgFQAFgRALgIQAMgIAWAAQATAAAKAFQAKAFAEAHQAEAIAAATIgBAjQABAPABAHQABAHAFAIIgfAAIgDgJIgBgDQgHAHgJAEQgHAEgLAAQgRAAgLgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAFAHAAQAIAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_10.setTransform(-22.2,0.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AAxBgIAAgjIhiAAIAAAjIgaAAIAAg9IANAAQAKgUADgaQADgaAAgpIAAgRIBsAAIAACCIAOAAIAAA9gAgdAjIA8AAIAAhnIguAAQAABGgOAhg");
	this.shape_11.setTransform(-36.45,0.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:21.575,y:1.9}},{t:this.shape,p:{x:36.7758,y:1.875}}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_1,p:{x:20.575,y:0.9}},{t:this.shape,p:{x:35.7758,y:0.875}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:21.575,y:1.9}},{t:this.shape,p:{x:36.7758,y:1.875}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.КнопкаBtnGoOnнебесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AAbA5IAAgvIgDAAQgJAAgFACQgEADgGAIIgBACIgUAgIgjAAIAWghQAJgOAIgDQgOAAgHgIQgIgJAAgNQAAgMAFgHQAFgJAJgCQAJgDAQAAIA7AAIAABxgAgLghQgEADAAAIQAAAIAGADQAFAEAMAAIATAAIAAgeIgWAAQgLABgFADg");
	this.shape.setTransform(61.85,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AAYA5IAAhIIgvBIIgdAAIAAhxIAdAAIAABGIAuhGIAeAAIAABxg");
	this.shape_1.setTransform(49.45,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AAhBIIAAgeIhaAAIAAhxIAfAAIAABYIAqAAIAAhYIAeAAIAABYIAMAAIAAA3g");
	this.shape_2.setTransform(36.425,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AgrAyQgJgJgBgPQABgKAEgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgEgDgLAAQgJAAgEADQgEADgDAIIgbgFQAEgRALgIQALgIAXAAQATAAAKAFQAKAFAEAHQAEAIAAATIgBAjQAAAPACAHQACAHADAIIgdAAIgEgJIgBgDQgHAHgJAEQgIAEgKAAQgRAAgLgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAFAHAAQAHAAAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_3.setTransform(23.1,1.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("Ag2BQIAAicIAcAAIAAAQQAFgIAJgGQAJgFALAAQAUAAAOAQQAOAPAAAcQAAAcgOAQQgOAPgUAAQgJAAgHgDQgIgEgIgJIAAA5gAgRgvQgIAJABARQAAATAHAIQAIAJAKAAQAKAAAHgIQAHgIAAgTQAAgSgHgIQgHgJgLAAQgKAAgHAIg");
	this.shape_4.setTransform(10.55,3.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AgOA5IAAhZIglAAIAAgYIBnAAIAAAYIglAAIAABZg");
	this.shape_5.setTransform(-1.85,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgQAYAAQAWAAAMAKQAMAIAGATIgfAFQgBgJgFgEQgGgFgIAAQgLAAgGAIQgHAIAAASQAAATAHAJQAHAIAKAAQAJAAAGgFQAFgFACgMIAeAGQgFAUgNAKQgNALgWAAQgYAAgPgQg");
	this.shape_6.setTransform(-13.2,1.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AAXA5IAAhIIguBIIgdAAIAAhxIAdAAIAABGIAuhGIAeAAIAABxg");
	this.shape_7.setTransform(-26.25,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AglA5IAAhxIBLAAIAAAYIgtAAIAABZg");
	this.shape_8.setTransform(-36.85,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXAAQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAFQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAHg");
	this.shape_9.setTransform(-48.3742,1.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("Ag7BPIAAidIAzAAQAcAAAJACQANAEAJAMQAJAMAAATQAAAOgFAKQgFAJgIAGQgIAFgJACQgLACgVAAIgUAAIAAA8gAgbgGIARAAQASAAAGgDQAGgCAEgGQAEgFAAgHQAAgJgFgFQgFgGgIgBQgGgBgQAAIgPAAg");
	this.shape_10.setTransform(-61.425,-0.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AAbA5IAAgvIgDAAQgJAAgFACQgEADgGAIIgBACIgUAgIgjAAIAWghQAJgPAIgCQgOAAgHgIQgIgJAAgNQAAgMAFgHQAFgIAJgEQAJgCAQAAIA7AAIAABxgAgLghQgEADAAAIQAAAHAFAEQAGAEALAAIAUAAIAAgeIgWAAQgKAAgGAEg");
	this.shape_13.setTransform(60.85,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AAXA5IAAhIIguBIIgcAAIAAhxIAcAAIAABGIAuhGIAeAAIAABxg");
	this.shape_14.setTransform(48.45,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("AgrAyQgKgJAAgPQABgKAEgHQAEgIAJgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgEgDgLAAQgJAAgEADQgFADgCAIIgcgFQAFgRALgIQAMgIAWAAQATAAAKAFQAKAFAEAHQAEAIAAATIgBAjQABAPABAHQACAHADAIIgdAAIgEgJIgBgDQgHAHgJAEQgIAEgKAAQgRAAgLgKgAAAAHQgMADgFACQgFAEgBAHQABAGAEAFQAFAFAHAAQAIAAAHgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_15.setTransform(22.1,0.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#002277").s().p("Ag3BQIAAicIAdAAIAAAQQAFgIAJgGQAKgFAKAAQAUAAAOAQQAOAPAAAcQAAAcgOAQQgOAPgUAAQgIAAgIgDQgIgEgIgJIAAA5gAgRgvQgIAJABARQAAATAHAIQAIAJAKAAQAKAAAHgIQAHgIAAgTQAAgSgHgIQgHgJgLAAQgKAAgHAIg");
	this.shape_16.setTransform(9.55,2.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgQAZAAQAUAAANAKQAMAIAGATIgfAFQgBgJgGgEQgEgFgJAAQgKAAgHAIQgHAIAAASQAAATAHAJQAHAIAKAAQAJAAAGgFQAFgFACgMIAeAGQgFAUgNAKQgNALgWAAQgYAAgPgQg");
	this.shape_17.setTransform(-14.2,0.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#002277").s().p("AAXA5IAAhIIguBIIgcAAIAAhxIAcAAIAABGIAuhGIAeAAIAABxg");
	this.shape_18.setTransform(-27.25,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-61.425,y:-0.275}},{t:this.shape_9,p:{x:-48.3742,y:1.875}},{t:this.shape_8,p:{x:-36.85,y:1.9}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:-1.85,y:1.9}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:36.425,y:3.4}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_10,p:{x:-62.425,y:-1.275}},{t:this.shape_9,p:{x:-49.3742,y:0.875}},{t:this.shape_8,p:{x:-37.85,y:0.9}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_5,p:{x:-2.85,y:0.9}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_2,p:{x:35.425,y:2.4}},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-61.425,y:-0.275}},{t:this.shape_9,p:{x:-48.3742,y:1.875}},{t:this.shape_8,p:{x:-36.85,y:1.9}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:-1.85,y:1.9}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:36.425,y:3.4}},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.КнопкаBtn2Instructionнебесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape.setTransform(36.7758,1.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AhMA5IAAhxIAcAAIAABZIAjAAIAAhZIAbAAIAABZIAjAAIAAhZIAcAAIAABxg");
	this.shape_1.setTransform(21.575,1.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAdAAQASABAKACQAKACAFAIQAHAIAAAMQAAARgLAIQgMAIgWAAgAgYAmIAbAAQANAAAEgEQAEgEAAgGQAAgJgGgDQgHgDgPAAIgUAAg");
	this.shape_2.setTransform(6.05,1.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_3.setTransform(-8.725,2.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgKgBQgJAAgEADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQACAHAEAIIgeAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgNADgEACQgFAEgBAHQABAGAFAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_4.setTransform(-21.2,1.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AAxBgIAAgiIhiAAIAAAiIgaAAIAAg9IANAAQAKgUADgaQADgbAAgpIAAgQIBsAAIAACCIAOAAIAAA9gAgdAjIA7AAIAAhoIgtAAQgBBHgNAhg");
	this.shape_5.setTransform(-35.45,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AgpAoQgLgQAAgXQAAgcAPgQQAOgQAXAAQAZABAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdgBgOgTgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_8.setTransform(35.7758,0.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAdAAQASABAKACQAJACAGAIQAHAJAAALQAAAQgLAIQgMAJgWAAgAgYAmIAcAAQANAAADgEQAEgFAAgFQAAgJgGgDQgHgDgPAAIgUAAg");
	this.shape_9.setTransform(5.05,0.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHABQAGgBACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhZIgoAAIAAAyQAAAUgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_10.setTransform(-9.725,1.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgrAyQgKgJABgPQAAgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWgBQATAAAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQABAHAFAIIgfAAIgDgJIgBgDQgHAHgJAEQgHAEgLAAQgRAAgLgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_11.setTransform(-22.2,0.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AAxBgIAAgiIhiAAIAAAiIgaAAIAAg9IANAAQAKgUADgaQADgbAAgpIAAgQIBsAAIAACCIAOAAIAAA9gAgdAjIA8AAIAAhoIguAAQAABHgOAhg");
	this.shape_12.setTransform(-36.45,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:21.575,y:1.95}},{t:this.shape}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_1,p:{x:20.575,y:0.95}},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:21.575,y:1.95}},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.КнопкаBegin_Btnнебесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBOIAdhOIAlAAIAABxg");
	this.shape.setTransform(46.175,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXAAQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAFQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAHg");
	this.shape_1.setTransform(31.7258,1.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AgrAyQgJgJgBgPQAAgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgEgDgLAAQgJAAgEADQgFADgCAIIgbgFQAEgRALgIQALgIAXAAQATAAAKAFQAKAFAEAHQAEAIAAATIgBAjQAAAPACAHQABAHAEAIIgdAAIgDgJIgCgDQgHAHgJAEQgIAEgJAAQgTAAgKgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAFAIAAQAGAAAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_2.setTransform(19.6,1.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAAqIApAAIAAgqIAfAAIAABxg");
	this.shape_3.setTransform(6.8,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABGIAthGIAdAAIAABxg");
	this.shape_4.setTransform(-6.6,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AAVA5IAAgtQgSAEgIAAQgOAAgLgGQgLgGgEgIQgFgJAAgQIAAgbIAfAAIAAAbQAAAJACAFQABAFAGADQAFADAHAAQAJAAAKgDIAAgxIAeAAIAABxg");
	this.shape_5.setTransform(-19.825,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgFgDgLAAQgHAAgFADQgEADgDAIIgcgFQAFgRAMgIQAKgIAXAAQATAAAKAFQAKAFAEAHQAEAIAAATIAAAjQgBAPACAHQABAHAFAIIgfAAIgDgJIAAgDQgIAHgJAEQgHAEgLAAQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAFAHAAQAIAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_6.setTransform(-32.2,1.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AAfBPIAAhFIg9AAIAABFIggAAIAAidIAgAAIAAA+IA9AAIAAg+IAgAAIAACdg");
	this.shape_7.setTransform(-46.35,-0.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002277").s().p("AgrAyQgJgJgBgPQABgKAEgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgEgDgLAAQgJAAgEADQgEADgDAIIgbgFQAEgRALgIQALgIAXAAQATAAAKAFQAKAFAEAHQAEAIAAATIgBAjQAAAPACAHQACAHADAIIgdAAIgEgJIgBgDQgHAHgJAEQgIAEgKAAQgRAAgLgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAFAHAAQAHAAAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_10.setTransform(18.6,0.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AAYA5IAAhIIgvBIIgdAAIAAhxIAdAAIAABGIAuhGIAeAAIAABxg");
	this.shape_11.setTransform(-7.6,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgHQAEgIAJgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgFgDgLAAQgHAAgFADQgEADgDAIIgcgFQAFgRAMgIQAKgIAXAAQATAAAKAFQAKAFAEAHQAEAIAAATIAAAjQgBAPACAHQACAHAEAIIgfAAIgCgJIgBgDQgIAHgJAEQgHAEgKAAQgSAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAFAIAAQAGAAAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_12.setTransform(-33.2,0.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-46.35,y:-0.275}},{t:this.shape_6},{t:this.shape_5,p:{x:-19.825,y:1.9}},{t:this.shape_4},{t:this.shape_3,p:{x:6.8,y:1.9}},{t:this.shape_2},{t:this.shape_1,p:{x:31.7258,y:1.875}},{t:this.shape,p:{x:46.175,y:1.9}}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_7,p:{x:-47.35,y:-1.275}},{t:this.shape_12},{t:this.shape_5,p:{x:-20.825,y:0.9}},{t:this.shape_11},{t:this.shape_3,p:{x:5.8,y:0.9}},{t:this.shape_10},{t:this.shape_1,p:{x:30.7258,y:0.875}},{t:this.shape,p:{x:45.175,y:0.9}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-46.35,y:-0.275}},{t:this.shape_6},{t:this.shape_5,p:{x:-19.825,y:1.9}},{t:this.shape_4},{t:this.shape_3,p:{x:6.8,y:1.9}},{t:this.shape_2},{t:this.shape_1,p:{x:31.7258,y:1.875}},{t:this.shape,p:{x:46.175,y:1.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.КнопкаastBtnнебесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AAIBPIAAgfIhAAAIAAgbIBEhjIAZAAIAABjIAUAAIAAAbIgUAAIAAAfgAgbAVIAjAAIAAg1g");
	this.shape.setTransform(63.925,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AgRBPIg9hkIAABkIgeAAIAAidIAfAAIA+BnIAAhnIAdAAIAACdgAAcBIIAAgYIBNAAIAAAYgAAkAZQgMgNAAgRQAAgVAMgLQAMgMATAAQASAAAMANQAMAMAAATQAAALgFAKQgEAJgJAGQgJAHgPAAQgUAAgLgNgAA5gWQgEAGAAANQAAAKAEAFQADAFAHAAQAHAAADgHQADgGAAgMQAAgKgDgFQgDgGgGAAQgHAAgEAHg");
	this.shape_1.setTransform(39.925,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_2.setTransform(14.9258,1.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABHIAthHIAdAAIAABxg");
	this.shape_3.setTransform(2.15,1.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAApIArAAIAAgpIAeAAIAABxg");
	this.shape_4.setTransform(-11.25,1.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AgrAyQgKgJABgPQAAgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQABAHAFAIIgfAAIgDgJIgBgEQgHAIgJAEQgHADgLABQgRAAgLgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_5.setTransform(-24,1.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_6.setTransform(-37.425,3.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQABAHAFAIIgfAAIgDgJIAAgEQgIAIgJAEQgHADgLABQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_7.setTransform(-50.2,1.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AgmBJQgOgIgIgXIAegJQAEAOAIAEQAHAEALAAQAOAAAHgGQAHgHAAgIQAAgKgIgGQgIgFgOAAIgIAAIAAgXIAEAAQAOAAAHgHQAIgGAAgLQAAgJgGgGQgHgGgKAAQgUAAgGAUIgfgHQAKgmAvAAQAbAAAOAMQAOAMAAAQQAAAMgGAJQgHAJgNAHQAQAEAIAKQAIAKAAAOQAAAVgPANQgQAMgeAAQgYAAgOgIg");
	this.shape_8.setTransform(-63.625,-0.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgpAoQgLgQAAgXQAAgcAPgQQAOgQAXAAQAZABAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdgBgOgTgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_11.setTransform(13.9258,0.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABHIAthHIAdAAIAABxg");
	this.shape_12.setTransform(1.15,0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQABAHAFAIIgfAAIgDgJIAAgDQgIAHgJAEQgHAEgLAAQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_13.setTransform(-25,0.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhBIgkAAQgBAvgOASg");
	this.shape_14.setTransform(-38.425,2.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQACAHAEAIIgfAAIgCgJIgBgDQgIAHgJAEQgHAEgKAAQgSAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAIAAQAGABAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_15.setTransform(-51.2,0.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:-63.625,y:-0.225}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-11.25,y:1.95}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:39.925,y:-0.225}},{t:this.shape,p:{x:63.925,y:-0.25}}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_8,p:{x:-64.625,y:-1.225}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_4,p:{x:-12.25,y:0.95}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_1,p:{x:38.925,y:-1.225}},{t:this.shape,p:{x:62.925,y:-1.25}}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:-63.625,y:-0.225}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-11.25,y:1.95}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:39.925,y:-0.225}},{t:this.shape,p:{x:63.925,y:-0.25}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.КнопкаamsBtnнебесная = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002277").s().p("AgjBEQgOgMgCgUIAdgEQABAMAGAFQAGAGAJAAQAIAAAHgHQAGgHAAgMQAAgLgGgHQgGgHgJAAQgFAAgIADIAEgYQALAAAGgFQAHgGAAgJQAAgIgFgFQgFgFgHAAQgHAAgGAGQgFAFgBAKIgcgEQADgPAGgIQAFgJALgEQAKgFANAAQAWAAANAOQALALAAAPQAAAVgXAMQAOADAIAJQAIAKAAAOQAAAVgPAPQgPAOgWAAQgVAAgOgMg");
	this.shape.setTransform(63.925,-0.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002277").s().p("AgRBPIg9hkIAABkIgeAAIAAidIAfAAIA+BnIAAhnIAdAAIAACdgAAcBIIAAgYIBNAAIAAAYgAAkAZQgMgNAAgRQAAgVAMgLQAMgMATAAQASAAAMANQAMAMAAATQAAALgFAKQgEAJgJAGQgJAHgPAAQgUAAgLgNgAA5gWQgEAGAAANQAAAKAEAFQADAFAHAAQAHAAADgHQADgGAAgMQAAgKgDgFQgDgGgGAAQgHAAgEAHg");
	this.shape_1.setTransform(39.925,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_2.setTransform(14.9258,1.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002277").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABHIAthHIAdAAIAABxg");
	this.shape_3.setTransform(2.15,1.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002277").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAApIArAAIAAgpIAeAAIAABxg");
	this.shape_4.setTransform(-11.25,1.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002277").s().p("AgrAyQgKgJABgPQAAgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQABAHAFAIIgfAAIgDgJIgBgEQgHAIgJAEQgHADgLABQgRAAgLgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_5.setTransform(-24,1.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_6.setTransform(-37.425,3.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQABAHAFAIIgfAAIgDgJIAAgEQgIAIgJAEQgHADgLABQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_7.setTransform(-50.2,1.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002277").s().p("AgmBJQgOgIgIgXIAegJQAEAOAIAEQAHAEALAAQAOAAAHgGQAHgHAAgIQAAgKgIgGQgIgFgOAAIgIAAIAAgXIAEAAQAOAAAHgHQAIgGAAgLQAAgJgGgGQgHgGgKAAQgUAAgGAUIgfgHQAKgmAvAAQAbAAAOAMQAOAMAAAQQAAAMgGAJQgHAJgNAHQAQAEAIAKQAIAKAAAOQAAAVgPANQgQAMgeAAQgYAAgOgIg");
	this.shape_8.setTransform(-63.625,-0.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D1566").ss(0.8).p("APXj5I+sAAQhuAAhPBKQhPBJAABnQAABnBPBKQBPBIBuAAIesAAQBvAABNhIQBPhKAAhnQAAhnhPhJQhNhKhvAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,-24.9,0,25.1).s().p("AvVD6QhuAAhPhJQhPhJAAhnQAAhnBPhJQBPhKBuAAIesAAQBuAABOBKQBPBJAABnQAABnhPBJQhOBJhuAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#002277").s().p("AgpAoQgLgQAAgXQAAgcAPgQQAOgQAXAAQAZABAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdgBgOgTgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_11.setTransform(13.9258,0.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#002277").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABHIAthHIAdAAIAABxg");
	this.shape_12.setTransform(1.15,0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQABAHAFAIIgfAAIgDgJIAAgDQgIAHgJAEQgHAEgLAAQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_13.setTransform(-25,0.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhBIgkAAQgBAvgOASg");
	this.shape_14.setTransform(-38.425,2.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQACAHAEAIIgfAAIgCgJIgBgDQgIAHgJAEQgHAEgKAAQgSAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAIAAQAGABAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_15.setTransform(-51.2,0.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1D1566").ss(0.8).p("APXD6I+sAAQhuAAhPhKQhPhJAAhnQAAhnBPhKQBPhIBuAAIesAAQBvAABNBIQBPBKAABnQAABnhPBJQhNBKhvAAg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#88C1FF","#7EB5F7","#6396DB","#5D8FD5"],[0,0.318,0.89,1],0,25,0,-25).s().p("AvVD6QhuAAhPhKQhPhJAAhnQAAhnBPhJQBPhJBuAAIesAAQBuAABOBJQBPBJAABnQAABnhPBJQhOBKhuAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:-63.625,y:-0.225}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-11.25,y:1.95}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:39.925,y:-0.225}},{t:this.shape,p:{x:63.925,y:-0.125}}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_8,p:{x:-64.625,y:-1.225}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_4,p:{x:-12.25,y:0.95}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_1,p:{x:38.925,y:-1.225}},{t:this.shape,p:{x:62.925,y:-1.125}}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:-63.625,y:-0.225}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-11.25,y:1.95}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:39.925,y:-0.225}},{t:this.shape,p:{x:63.925,y:-0.125}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-26,252,52);


(lib.an_Checkbox = function(options) {
	this.initialize();
	this._element = new $.an.Checkbox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ3("synched",0);
	this.instance.setTransform(106.3,57,1,1,180);

	this.instance_1 = new lib.Символ3("synched",0);
	this.instance_1.setTransform(74.55,57);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3190D8").s().p("AiwCxQhJhKAAhnQAAhnBJhJQBJhJBnAAIAQABQBdAEBEBEQBJBJAABnQAABnhJBKQhEBDhdAFIgQABQhnAAhJhJgAhbhVQgnAkAAA0QAAA0AnAkQAnAlA2AAQA4AAAnglQAngkgBg0QABg0gngkQgngkg4gBQg2ABgnAkg");
	this.shape.setTransform(91.5998,57.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,180.9,114), null);


(lib.bilboeyebuild = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bilboeyeball("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98C9EB").s().p("AgQD4QhGgBgthJQguhJAHhmQAHhmA3hIQA3hIBGAAQBGABAtBIQAtBKgGBlQgHBng3BIQg3BIhFAAIgBAAg");
	this.shape.setTransform(1,1.45,1,1,0,0,0,1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-23.1,34.3,49.6);


(lib.Символ12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgNBLIAAgdIAbAAIAAAdgAgHAkIgHhLIAAgjIAdAAIAAAjIgHBLg");
	this.shape.setTransform(738.45,68.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgcAyQgNgGgHgNQgHgNAAgTQAAgOAHgOQAHgMANgIQANgHAPAAQAYAAAQAQQAQAQAAAYQAAAYgQARQgQAQgYAAQgOAAgOgHgAgSgYQgIAJAAAPQAAAQAIAJQAIAIAKAAQALAAAIgIQAHgJAAgQQAAgPgHgJQgIgJgLABQgKgBgIAJg");
	this.shape_1.setTransform(728.625,70.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AApBFIAAgdIhRAAIAAAdIgYAAIAAg0IAMAAQAHgJAGgQQAEgRABgrIBXAAIAABVIALAAIAAA0gAgYARIAxAAIAAg9IgjAAQgBAsgNARg");
	this.shape_2.setTransform(715.2,71.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AgpAwQgJgKAAgNQAAgJAFgIQAEgHAIgDQAHgEAQgDQATgDAIgEIAAgDQAAgHgFgEQgEgEgKAAQgHAAgFAEQgEACgDAIIgagFQAFgQAKgHQALgIAVAAQATAAAJAFQAJAEAEAIQAEAGAAATIgBAgQABAPABAHIAFAOIgcAAIgDgIIgBgEQgIAIgIADQgHAEgKAAQgQAAgLgJgAAAAGQgMADgEADQgFAEAAAGQAAAGAEAEQAFAFAHgBQAGAAAHgEQAGgFACgFIABgOIAAgGIgRAEg");
	this.shape_3.setTransform(702.95,70.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AAVA2IAAgtIgpAAIAAAtIgdAAIAAhsIAdAAIAAApIApAAIAAgpIAdAAIAABsg");
	this.shape_4.setTransform(690.75,70.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AgnAnQgLgQAAgWQAAgaAOgPQAOgQAWAAQAXAAAOAQQAOAQAAAgIhIAAQABANAGAHQAHAIAJgBQAHAAAEgDQAFgEACgIIAdAFQgFAQgMAIQgMAIgSAAQgcAAgNgSgAgOgbQgGAHAAALIAqAAQAAgMgGgGQgHgHgIAAQgJAAgGAHg");
	this.shape_5.setTransform(672.6009,70.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AAVA2IAAgtIgpAAIAAAtIgcAAIAAhsIAcAAIAAApIApAAIAAgpIAdAAIAABsg");
	this.shape_6.setTransform(660.5,70.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AgtBLIgDgWIAMABQAKAAAFgGQAFgGACgJIgphtIAfAAIAZBNIAZhNIAeAAIgmBpIgHATQgEAJgEAFQgDAFgEADQgEADgHACQgGACgIgBQgJABgHgCg");
	this.shape_7.setTransform(642.35,72.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("Ag0A2IAAhsIA+AAQAUAAAJAHQAKAIAAAOQAAAJgFAHQgGAGgIADQAMACAFAHQAGAIAAAJQAAANgKAHQgJAIgSAAgAgXAkIAXAAQALAAAGgDQAFgDAAgHQAAgJgGgCQgGgEgSAAIgPAAgAgXgIIATAAQAMAAAGgDQAGgEAAgHQAAgHgFgDQgGgDgNAAIgTAAg");
	this.shape_8.setTransform(631.025,70.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AAuA2IAAhsIAdAAIAABsgAhKA2IAAhsIAcAAIAAAuIAdAAQARAAAIADQAJABAHAIQAGAIAAALQAAAPgLAIQgLAIgUAAgAguAkIAbAAQALAAAFgDQADgEAAgGQAAgJgFgCQgGgEgQAAIgTAAg");
	this.shape_9.setTransform(615.3,70.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("Ag0BMIAAiVIAbAAIAAAQQAFgIAJgFQAJgGAKAAQASAAAOAPQANAPAAAbQAAAagOAPQgNAQgSgBQgIAAgIgDQgHgDgJgKIAAA3gAgRgsQgGAHgBARQAAASAIAIQAHAJAKAAQAKgBAGgHQAHgHgBgTQABgRgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_10.setTransform(600.15,72.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AguAaIAagEQAHAPAOAAQAHAAAFgEQAFgEAAgFQAAgHgFgDQgFgEgIAAIgEAAIAAgSIAKgBQADgBADgDQADgEAAgFQAAgFgEgEQgDgFgIAAQgFAAgEACQgFADgDAJIgZgFQAEgPAMgGQANgIAOAAQATAAALAJQALAJAAAOQAAAJgEAFQgGAGgKAEQANACAGAHQAGAHAAAKQAAAMgMAKQgMAJgWAAQgmAAgJgfg");
	this.shape_11.setTransform(587.9,70.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("AgpAwQgJgKAAgNQAAgJAFgIQAEgHAIgDQAHgEAQgDQATgDAIgEIAAgDQAAgHgFgEQgDgEgLAAQgHAAgFAEQgEACgDAIIgagFQAEgQALgHQALgIAVAAQATAAAJAFQAJAEAEAIQAEAGAAATIAAAgQgBAPACAHIAFAOIgdAAIgCgIIgBgEQgIAIgIADQgIAEgJAAQgQAAgLgJgAAAAGQgMADgEADQgFAEAAAGQAAAGAEAEQAFAFAHgBQAGAAAIgEQAFgFACgFIABgOIAAgGIgRAEg");
	this.shape_12.setTransform(576.85,70.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("Ag0BMIAAiVIAaAAIAAAQQAGgIAJgFQAIgGAKAAQATAAAOAPQANAPAAAbQAAAagNAPQgOAQgTgBQgIAAgHgDQgIgDgIgKIAAA3gAgRgsQgHAHAAARQABASAGAIQAIAJAJAAQAKgBAHgHQAGgHABgTQgBgRgGgIQgHgJgKAAQgKAAgHAJg");
	this.shape_13.setTransform(564.9,72.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990000").s().p("AAOA3IgNggQgEgJgDgDQgDgDgHAAIAAAvIgcAAIAAhsIAcAAIAAAsQAIAAADgEQACgEAEgMQAFgQAHgEQAGgFALAAIALABIAAATQgLAAgDACQgDACgEALQgFAPgKAEQAOADAKAUIABACIAQAeg");
	this.shape_14.setTransform(547.75,70.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990000").s().p("AAWA2IAAhEIgsBEIgbAAIAAhsIAbAAIAABEIAshEIAcAAIAABsg");
	this.shape_15.setTransform(529.5,70.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990000").s().p("AAOA3IgNggQgEgJgDgDQgDgDgHAAIAAAvIgcAAIAAhsIAcAAIAAAsQAIAAADgEQACgEAEgMQAFgQAHgEQAGgFALAAIALABIAAATQgLAAgDACQgDACgEALQgFAPgKAEQAOADAKAUIABACIAQAeg");
	this.shape_16.setTransform(518.5,70.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990000").s().p("AhIA2IAAhsIAaAAIAABVIAiAAIAAhVIAaAAIAABVIAgAAIAAhVIAbAAIAABsg");
	this.shape_17.setTransform(503.8,70.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990000").s().p("AAuA2IAAhsIAdAAIAABsgAhKA2IAAhsIAdAAIAAAuIAcAAQARAAAIADQAJABAHAIQAGAIAAALQAAAPgLAIQgLAIgUAAgAgtAkIAaAAQALAAAFgDQADgEAAgGQAAgJgFgCQgGgEgQAAIgSAAg");
	this.shape_18.setTransform(486.15,70.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990000").s().p("AAmA2IAAhGIgaBGIgYAAIgZhGIAABGIgZAAIAAhsIAkAAIAaBMIAbhMIAkAAIAABsg");
	this.shape_19.setTransform(469.425,70.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990000").s().p("Ag0A2IAAhsIAdAAIAAAuIAcAAQARAAAJADQAJACAGAHQAHAIAAALQAAAPgLAIQgLAIgWAAgAgXAkIAaAAQANAAADgEQAEgEAAgFQAAgJgGgCQgGgEgPAAIgTAAg");
	this.shape_20.setTransform(449.625,70.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990000").s().p("Ag6A1IAAgVIAFAAIAIABQAFAAACgEQABgEAAgSIAAg+IBfAAIAABsIgdAAIAAhUIglAAIAAAwQgBASgEAIQgEAIgGACQgFADgMAAIgSgDg");
	this.shape_21.setTransform(435.55,70.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990000").s().p("AgnAnQgLgQAAgWQAAgaAOgPQAOgQAWAAQAXAAAOAQQAOAQAAAgIhIAAQABANAGAHQAHAIAJgBQAHAAAEgDQAFgEACgIIAdAFQgFAQgMAIQgMAIgSAAQgcAAgNgSgAgOgbQgGAHAAALIAqAAQAAgMgGgGQgHgHgIAAQgJAAgGAHg");
	this.shape_22.setTransform(423.5009,70.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990000").s().p("AgNA2IAAhUIgjAAIAAgYIBhAAIAAAYIgiAAIAABUg");
	this.shape_23.setTransform(412.575,70.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990000").s().p("AgpAwQgJgKAAgNQAAgJAFgIQAEgHAIgDQAHgEAPgDQAUgDAIgEIAAgDQgBgHgEgEQgDgEgLAAQgIAAgEAEQgEACgDAIIgagFQAEgQALgHQALgIAVAAQATAAAJAFQAKAEADAIQAEAGAAATIAAAgQAAAPABAHIAFAOIgdAAIgCgIIgBgEQgIAIgIADQgIAEgJAAQgRAAgKgJgAAAAGQgMADgDADQgGAEAAAGQAAAGAFAEQAEAFAHgBQAGAAAIgEQAFgFABgFQACgEAAgKIAAgGIgRAEg");
	this.shape_24.setTransform(401.6,70.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#990000").s().p("AguAaIAbgEQAFAPAPAAQAIAAAEgEQAFgEAAgFQAAgHgFgDQgFgEgIAAIgEAAIAAgSIAKgBQADgBADgDQADgEAAgFQAAgFgEgEQgDgFgIAAQgEAAgFACQgEADgEAJIgZgFQAEgPAMgGQAMgIAPAAQAUAAAKAJQALAJAAAOQAAAJgFAFQgEAGgLAEQANACAGAHQAGAHAAAKQAAAMgMAKQgMAJgWAAQgmAAgJgfg");
	this.shape_25.setTransform(390.55,70.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990000").s().p("AgoAwQgKgKAAgNQAAgJAFgIQAEgHAIgDQAHgEAQgDQATgDAHgEIAAgDQAAgHgDgEQgFgEgKAAQgIAAgEAEQgEACgDAIIgagFQAFgQAKgHQALgIAVAAQASAAAKAFQAJAEAEAIQAEAGAAATIgBAgQABAPABAHIAFAOIgcAAIgDgIIgBgEQgHAIgJADQgIAEgJAAQgRAAgJgJgAAAAGQgMADgEADQgFAEAAAGQAAAGAEAEQAFAFAHgBQAHAAAGgEQAGgFACgFIAAgOIAAgGIgQAEg");
	this.shape_26.setTransform(379.5,70.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#990000").s().p("AAOA3IgNggQgEgJgDgDQgDgDgHAAIAAAvIgcAAIAAhsIAcAAIAAAsQAIAAADgEQACgEAEgMQAFgQAHgEQAGgFALAAIALABIAAATQgLAAgDACQgEACgDALQgFAPgKAEQAOADAKAUIABACIAQAeg");
	this.shape_27.setTransform(369.1,70.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#990000").s().p("AguBLIgCgWIAMABQAKAAAFgGQAFgGADgJIgqhtIAfAAIAYBNIAahNIAeAAIgnBpIgGATQgEAJgDAFQgEAFgDADQgFADgGACQgHACgIgBQgIABgJgCg");
	this.shape_28.setTransform(357.2,72.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#990000").s().p("Ag0A2IAAhsIAdAAIAAAuIAcAAQARAAAJADQAJACAGAHQAHAIAAALQAAAPgLAIQgLAIgWAAgAgXAkIAaAAQANAAADgEQAEgEAAgFQAAgJgGgCQgGgEgPAAIgTAAg");
	this.shape_29.setTransform(339.525,70.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#990000").s().p("AgNA2IAAhUIgjAAIAAgYIBhAAIAAAYIgiAAIAABUg");
	this.shape_30.setTransform(327.525,70.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#990000").s().p("AAXA2IAAhEIgsBEIgcAAIAAhsIAcAAIAABEIArhEIAcAAIAABsg");
	this.shape_31.setTransform(315.95,70.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#990000").s().p("AApBFIAAgdIhRAAIAAAdIgXAAIAAg0IALAAQAHgJAGgQQAEgRABgrIBXAAIAABVIALAAIAAA0gAgYARIAxAAIAAg9IgjAAQgBAsgNARg");
	this.shape_32.setTransform(302.55,71.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#990000").s().p("AgcAyQgNgGgHgNQgHgNAAgTQAAgOAHgOQAHgMANgIQANgHAPAAQAYAAAQAQQAQAQAAAYQAAAYgQARQgQAQgYAAQgOAAgOgHgAgSgYQgIAJAAAPQAAAQAIAJQAIAIAKAAQALAAAIgIQAHgJAAgQQAAgPgHgJQgIgJgLABQgKgBgIAJg");
	this.shape_33.setTransform(290.075,70.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#990000").s().p("Ag0A2IAAhsIA+AAQAUAAAJAHQAKAIAAAOQAAAJgFAHQgGAGgIADQAMACAFAHQAGAIAAAJQAAANgKAHQgJAIgSAAgAgXAkIAXAAQALAAAGgDQAFgDAAgHQAAgJgGgCQgGgEgSAAIgPAAgAgXgIIATAAQAMAAAGgDQAGgEAAgHQAAgHgFgDQgGgDgNAAIgTAAg");
	this.shape_34.setTransform(277.825,70.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#990000").s().p("AApBFIAAgdIhRAAIAAAdIgYAAIAAg0IAMAAQAIgJAFgQQAEgRABgrIBXAAIAABVIAMAAIAAA0gAgXARIAvAAIAAg9IgiAAQgBAsgMARg");
	this.shape_35.setTransform(264.05,71.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#990000").s().p("AgcAyQgNgGgHgNQgHgNAAgTQAAgOAHgOQAHgMANgIQANgHAPAAQAYAAAQAQQAQAQAAAYQAAAYgQARQgQAQgYAAQgOAAgOgHgAgSgYQgIAJAAAPQAAAQAIAJQAIAIAKAAQALAAAIgIQAHgJAAgQQAAgPgHgJQgIgJgLABQgKgBgIAJg");
	this.shape_36.setTransform(251.575,70.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#990000").s().p("AAeBLIAAh8Ig6AAIAAB8IgfAAIAAiVIB3AAIAACVg");
	this.shape_37.setTransform(237.525,68.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#002277").s().p("AgOAPIAAgdIAcAAIAAAdg");
	this.shape_38.setTransform(527.25,49);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#002277").s().p("Ag0A3IAAhtIAdAAIAAAuIAcAAQARAAAJADQAJACAGAHQAHAIAAALQAAAPgLAJQgLAHgWABgAgXAkIAaAAQANAAADgEQAEgEAAgFQAAgJgGgCQgGgDgPgBIgTAAg");
	this.shape_39.setTransform(518.225,45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#002277").s().p("AgNA3IAAhVIgjAAIAAgYIBhAAIAAAYIgiAAIAABVg");
	this.shape_40.setTransform(506.225,45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#002277").s().p("AgoAwQgKgJAAgOQAAgJAEgIQAFgHAIgDQAIgDAPgEQATgEAHgCIAAgEQAAgHgDgEQgFgEgKAAQgIAAgEADQgEADgDAIIgagFQAFgPAKgJQALgHAVAAQASAAAKAFQAKAFADAHQAEAHAAASIgBAhQABAOABAHIAFAPIgcAAIgDgJIgBgEQgIAIgIADQgIAEgJAAQgRAAgJgJgAAAAGQgMADgEADQgFAEAAAGQAAAGAEAEQAFAFAHAAQAHgBAGgFQAGgDABgGIABgOIAAgGIgQAEg");
	this.shape_41.setTransform(495.25,45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#002277").s().p("AAOA3IgNggQgEgJgDgDQgDgDgHAAIAAAvIgcAAIAAhsIAcAAIAAAsQAIAAACgEQADgEAEgMQAFgQAGgEQAHgFALAAIALABIAAATQgLAAgDACQgEACgDALQgFAPgKAEQAOADAKAUIAAACIARAeg");
	this.shape_42.setTransform(484.85,44.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#002277").s().p("AAWA3IAAhFIgsBFIgbAAIAAhtIAbAAIAABEIAshEIAcAAIAABtg");
	this.shape_43.setTransform(472.45,45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#002277").s().p("Ag6A2IAAgWIAGAAIAHABQAFAAABgEQACgEAAgSIAAg+IBfAAIAABtIgdAAIAAhVIglAAIAAAwQAAASgFAIQgEAHgGADQgEACgNABIgSgCg");
	this.shape_44.setTransform(458.75,45.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#002277").s().p("AAOA3IgNggQgEgJgDgDQgDgDgHAAIAAAvIgcAAIAAhsIAcAAIAAAsQAIAAADgEQACgEAEgMQAFgQAHgEQAGgFALAAIALABIAAATQgLAAgDACQgDACgEALQgFAPgKAEQAOADAKAUIABACIAQAeg");
	this.shape_45.setTransform(447.85,44.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#002277").s().p("AgcAyQgNgHgHgNQgHgNAAgRQAAgPAHgOQAHgNANgHQANgHAPAAQAYAAAQAQQAQAQAAAYQAAAZgQAQQgQAQgYAAQgOAAgOgHgAgSgYQgIAJAAAPQAAAQAIAJQAIAJAKgBQALABAIgJQAHgJAAgQQAAgPgHgJQgIgIgLgBQgKABgIAIg");
	this.shape_46.setTransform(700.525,19.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#002277").s().p("AAVA3IAAguIgpAAIAAAuIgdAAIAAhsIAdAAIAAAnIApAAIAAgnIAcAAIAABsg");
	this.shape_47.setTransform(687.7,19.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#002277").s().p("AArA3IgNggQgDgIgEgDQgDgDgFgBIAAAvIgcAAIAAgvQgGABgCACQgCACgGAKIgOAgIgeAAIAPgeQAMgXAMgCQgKgEgEgPQgEgLgDgCQgEgCgLAAIAAgTIAMgBQAJAAAIAEQAGAFAGAQQAFANADAEQACADAGAAIAAgsIAcAAIAAAsQAFAAADgDQADgEAEgNQAGgQAGgFQAHgEALAAIALABIAAATQgLAAgDACQgEACgDALQgGAPgJAEQAMACAMAXIAQAeg");
	this.shape_48.setTransform(673.9,19.525);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#002277").s().p("AgcAyQgNgHgHgNQgHgNAAgRQAAgPAHgOQAHgNANgHQANgHAPAAQAYAAAQAQQAQAQAAAYQAAAZgQAQQgQAQgYAAQgOAAgOgHgAgSgYQgIAJAAAPQAAAQAIAJQAIAJAKgBQALABAIgJQAHgJAAgQQAAgPgHgJQgIgIgLgBQgKABgIAIg");
	this.shape_49.setTransform(660.375,19.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#002277").s().p("AAmA3IAAhHIgaBHIgYAAIgZhHIAABHIgZAAIAAhsIAkAAIAaBKIAbhKIAkAAIAABsg");
	this.shape_50.setTransform(646.525,19.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#002277").s().p("AgPATQAJgCAEgGQADgFAAgHIgNAAIAAgdIAcAAIAAAVQAAALgCAHQgDAIgFAFQgGAGgJADg");
	this.shape_51.setTransform(623.85,25.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#002277").s().p("Ag0A3IAAhsIA+AAQAUAAAJAGQAKAIAAAOQAAAJgFAHQgGAHgIACQAMABAFAJQAGAHAAAJQAAAMgKAJQgJAHgSABgAgXAkIAXAAQALAAAGgDQAFgDAAgIQAAgHgGgEQgGgCgSAAIgPAAgAgXgIIATAAQAMAAAGgEQAGgDAAgHQAAgHgFgDQgGgDgNAAIgTAAg");
	this.shape_52.setTransform(615.025,19.55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#002277").s().p("AAvA3IAAhsIAcAAIAABsgAhKA3IAAhsIAcAAIAAAtIAdAAQARAAAIACQAKADAFAGQAHAJAAALQAAAPgLAJQgLAHgUABgAguAkIAbAAQALAAAFgDQADgDAAgIQAAgHgFgEQgGgCgQAAIgTAAg");
	this.shape_53.setTransform(599.3,19.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#002277").s().p("Ag0BNIAAiWIAaAAIAAAQQAGgIAJgFQAJgFAKAAQASgBAOAQQANAPAAAaQAAAagOAQQgNAPgSAAQgJAAgHgEQgHgEgJgIIAAA3gAgRgtQgHAJAAAQQABASAGAIQAIAIAJAAQALABAGgJQAHgGAAgTQAAgRgHgJQgHgHgKgBQgKABgHAHg");
	this.shape_54.setTransform(584.15,21.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#002277").s().p("AguAbIAbgGQAFAQAPABQAIAAAEgFQAFgEAAgGQAAgGgFgEQgFgDgIAAIgEAAIAAgSIAKgBQADgBADgEQADgDAAgFQAAgGgEgEQgDgEgIAAQgEAAgFADQgEACgEAJIgZgFQAEgOAMgIQAMgHAPAAQATAAALAJQALAJAAAOQAAAJgFAFQgEAFgLAFQANACAGAIQAGAGAAAKQAAAMgMAKQgMAJgWAAQgmAAgJgeg");
	this.shape_55.setTransform(571.9,19.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#002277").s().p("AgoAwQgKgKAAgNQAAgKAFgGQAEgIAIgDQAHgDAQgDQATgFAHgCIAAgDQAAgJgDgDQgFgEgKAAQgIAAgEADQgEADgDAIIgagFQAFgPAKgJQALgHAVAAQASAAAKAFQAJAFAEAGQAEAHAAATIgBAhQABAOABAHIAFAPIgcAAIgDgJIgBgEQgHAIgJAEQgIADgJAAQgRAAgJgJgAAAAGQgMADgEACQgFAEAAAHQAAAGAEAEQAFAEAHABQAHAAAGgGQAGgEACgFIAAgOIAAgGIgQAEg");
	this.shape_56.setTransform(560.85,19.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#002277").s().p("Ag0BNIAAiWIAaAAIAAAQQAGgIAJgFQAIgFAKAAQAUgBANAQQANAPAAAaQAAAagNAQQgNAPgUAAQgIAAgHgEQgIgEgHgIIAAA3gAgRgtQgHAJABAQQAAASAGAIQAIAIAJAAQAKABAHgJQAGgGAAgTQAAgRgGgJQgHgHgKgBQgKABgHAHg");
	this.shape_57.setTransform(548.9,21.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#002277").s().p("AgoAwQgKgKAAgNQAAgKAEgGQAFgIAIgDQAIgDAOgDQAUgFAHgCIAAgDQAAgJgDgDQgFgEgKAAQgHAAgFADQgEADgDAIIgagFQAEgPALgJQALgHAVAAQASAAAKAFQAKAFADAGQAEAHAAATIgBAhQAAAOACAHIAFAPIgcAAIgDgJIgBgEQgIAIgIAEQgHADgKAAQgQAAgKgJgAAAAGQgMADgDACQgGAEAAAHQAAAGAEAEQAFAEAHABQAHAAAGgGQAGgEABgFIABgOIAAgGIgQAEg");
	this.shape_58.setTransform(530.45,19.55);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#002277").s().p("AAUA3IAAguIgnAAIAAAuIgeAAIAAhsIAeAAIAAAnIAnAAIAAgnIAdAAIAABsg");
	this.shape_59.setTransform(518.25,19.55);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#002277").s().p("AgNA3IAAhVIgjAAIAAgXIBhAAIAAAXIgiAAIAABVg");
	this.shape_60.setTransform(500.875,19.55);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#002277").s().p("AgnAmQgLgOAAgXQAAgaAOgQQAOgPAWAAQAXAAAOAQQAOAQAAAhIhIAAQABAMAGAIQAHAGAJABQAHAAAEgFQAFgDACgIIAdAEQgFARgMAIQgMAIgSAAQgcAAgNgTgAgOgbQgGAHAAAMIAqAAQAAgNgGgGQgHgHgIAAQgJAAgGAHg");
	this.shape_61.setTransform(490.1009,19.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#002277").s().p("AgoAwQgKgKAAgNQAAgKAFgGQAEgIAIgDQAHgDAQgDQATgFAHgCIAAgDQAAgJgDgDQgFgEgKAAQgIAAgEADQgEADgDAIIgagFQAFgPAKgJQALgHAVAAQASAAAKAFQAJAFAEAGQAEAHAAATIgBAhQABAOABAHIAFAPIgcAAIgDgJIgBgEQgHAIgJAEQgIADgJAAQgRAAgJgJgAAAAGQgMADgEACQgFAEAAAHQAAAGAEAEQAFAEAHABQAHAAAGgGQAGgEACgFIAAgOIAAgGIgQAEg");
	this.shape_62.setTransform(478.5,19.55);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#002277").s().p("Ag0A3IAAhsIA+AAQAUAAAJAGQAKAIAAAOQAAAJgFAHQgGAHgIACQAMABAFAJQAGAHAAAJQAAAMgKAJQgJAHgSABgAgXAkIAXAAQALAAAGgDQAFgDAAgIQAAgHgGgEQgGgCgSAAIgPAAgAgXgIIATAAQAMAAAGgEQAGgDAAgHQAAgHgFgDQgGgDgNAAIgTAAg");
	this.shape_63.setTransform(466.875,19.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#002277").s().p("AAuA3IAAhsIAdAAIAABsgAhKA3IAAhsIAcAAIAAAtIAdAAQARAAAIACQAJADAHAGQAGAJAAALQAAAPgLAJQgLAHgUABgAguAkIAbAAQALAAAFgDQADgDAAgIQAAgHgFgEQgGgCgQAAIgTAAg");
	this.shape_64.setTransform(451.15,19.55);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#002277").s().p("AguAbIAagGQAHAQAOABQAHAAAFgFQAFgEAAgGQAAgGgFgEQgFgDgIAAIgEAAIAAgSIAKgBQADgBADgEQADgDAAgFQAAgGgDgEQgEgEgIAAQgFAAgEADQgFACgDAJIgYgFQADgOAMgIQANgHAOAAQATAAALAJQALAJAAAOQAAAJgEAFQgGAFgKAFQANACAGAIQAGAGAAAKQAAAMgMAKQgMAJgWAAQgmAAgJgeg");
	this.shape_65.setTransform(436.6,19.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#002277").s().p("AgpAwQgJgKAAgNQAAgKAFgGQAEgIAIgDQAHgDAQgDQATgFAIgCIAAgDQAAgJgFgDQgDgEgLAAQgIAAgEADQgEADgDAIIgagFQAEgPALgJQALgHAVAAQATAAAJAFQAKAFADAGQAEAHAAATIAAAhQgBAOACAHIAFAPIgdAAIgCgJIgBgEQgIAIgIAEQgIADgJAAQgRAAgKgJgAAAAGQgMADgEACQgFAEAAAHQAAAGAFAEQAEAEAHABQAGAAAIgGQAFgEACgFIABgOIAAgGIgRAEg");
	this.shape_66.setTransform(425.55,19.55);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#002277").s().p("AAPA3IgPggQgDgJgDgDQgEgDgGAAIAAAvIgdAAIAAhsIAdAAIAAAsQAHAAAEgEQADgEACgMQAGgQAHgEQAGgFALAAIALABIABATQgMAAgEACQgDACgDALQgFAPgJAEQANADAJAUIACACIAPAeg");
	this.shape_67.setTransform(415.15,19.525);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#002277").s().p("AgtBLIgDgWIAMAAQAKAAAFgFQAFgGACgJIgphsIAeAAIAZBMIAahMIAeAAIgmBnIgIATQgDAKgEAFQgDAFgDADQgFADgHACQgGACgIAAQgJAAgHgCg");
	this.shape_68.setTransform(403.25,21.75);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#002277").s().p("AAgBFIAAgdIhWAAIAAhsIAdAAIAABVIAoAAIAAhVIAdAAIAABVIALAAIAAA0g");
	this.shape_69.setTransform(385.65,20.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#002277").s().p("AgnAmQgLgOAAgXQAAgaAOgQQAOgPAWAAQAXAAAOAQQAOAQAAAhIhIAAQABAMAGAIQAHAGAJABQAHAAAEgFQAFgDACgIIAdAEQgFARgMAIQgMAIgSAAQgcAAgNgTgAgOgbQgGAHAAAMIAqAAQAAgNgGgGQgHgHgIAAQgJAAgGAHg");
	this.shape_70.setTransform(372.8009,19.55);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#002277").s().p("Ag6A2IAAgWIAGAAIAGABQAGAAABgEQACgEAAgRIAAg+IBfAAIAABsIgcAAIAAhVIgmAAIAAAwQAAATgFAHQgEAIgGACQgEACgNAAIgSgBg");
	this.shape_71.setTransform(360.1,19.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#002277").s().p("AgpAwQgJgKAAgNQAAgKAFgGQAEgIAIgDQAHgDAQgDQATgFAIgCIAAgDQgBgJgEgDQgDgEgLAAQgIAAgEADQgEADgDAIIgagFQAEgPALgJQALgHAVAAQATAAAJAFQAKAFADAGQAEAHAAATIAAAhQgBAOACAHIAFAPIgdAAIgCgJIgBgEQgIAIgIAEQgIADgJAAQgRAAgKgJgAAAAGQgMADgDACQgGAEAAAHQAAAGAFAEQAEAEAHABQAGAAAIgGQAFgEACgFIABgOIAAgGIgRAEg");
	this.shape_72.setTransform(348.15,19.55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#002277").s().p("AAUA3IAAhVIgmAAIAABVIgdAAIAAhsIBfAAIAABsg");
	this.shape_73.setTransform(335.825,19.55);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#002277").s().p("AgpAwQgJgKAAgNQAAgKAFgGQAEgIAIgDQAHgDAPgDQAUgFAIgCIAAgDQgBgJgEgDQgDgEgLAAQgIAAgEADQgEADgDAIIgagFQAEgPALgJQALgHAVAAQATAAAJAFQAKAFADAGQAEAHAAATIAAAhQAAAOABAHIAFAPIgdAAIgCgJIgBgEQgIAIgIAEQgIADgJAAQgRAAgKgJgAAAAGQgMADgDACQgGAEAAAHQAAAGAFAEQAEAEAHABQAGAAAIgGQAFgEABgFQACgEAAgKIAAgGIgRAEg");
	this.shape_74.setTransform(317.9,19.55);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#002277").s().p("AApBFIAAgdIhRAAIAAAdIgYAAIAAg0IAMAAQAIgJAEgQQAFgRABgrIBXAAIAABVIAMAAIAAA0gAgXARIAvAAIAAg9IgiAAQgBAsgMARg");
	this.shape_75.setTransform(305.1,20.975);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#002277").s().p("AgkA3IAAhsIBJAAIAAAXIgsAAIAABVg");
	this.shape_76.setTransform(295.825,19.55);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#002277").s().p("AgcAyQgNgHgHgNQgHgNAAgRQAAgPAHgOQAHgNANgHQANgHAPAAQAYAAAQAQQAQAQAAAYQAAAZgQAQQgQAQgYAAQgOAAgOgHgAgSgYQgIAJAAAPQAAAQAIAJQAIAJAKgBQALABAIgJQAHgJAAgQQAAgPgHgJQgIgIgLgBQgKABgIAIg");
	this.shape_77.setTransform(284.375,19.55);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#002277").s().p("AATBMIgSgnIgBgDIgDgHQgGgLgEgDQgDgDgIAAIAABCIgeAAIAAiWIAeAAIAABAQAKgBAEgEQADgEAHgTQAJgZAKgGQAJgFAVAAIAFgBIAAAXIgFAAQgJAAgEACQgFACgCAFQgDAFgFAOIgGANQgEAGgIAEQAKACAHAJQAHAJAIAQIAUApg");
	this.shape_78.setTransform(272.225,17.425);

	this.instance = new lib.circlesvg("synched",0);
	this.instance.setTransform(65.35,39.75,0.0869,0.0868,-90,0,0,-4,5.2);

	this.instance_1 = new lib.hand();
	this.instance_1.setTransform(215.6,29.45,0.842,0.842,0,0,180);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#002277").ss(3,1,1).p("Eg7WgGtMB2tAAAIAANbMh2tAAAg");
	this.shape_79.setTransform(380.011,43,1.0002,1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(74,74,74,0)").s().p("Eg7WAGuIAAtbMB2tAAAIAANbg");
	this.shape_80.setTransform(380.011,43,1.0002,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.instance_1},{t:this.instance},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(-1.5,-1.5,763,89), null);


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Анимация2();
	this.instance.setTransform(25,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:87.95,mode:"synched",startPosition:0},6).to({y:30},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.logo();
	this.instance.setTransform(85.05,53.65,0.94,0.9399,0,0,0,90.5,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170,107.1);


// stage content:
(lib.Comp_vision202382suggest = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Title:1,Monitor:2,Attention:3,Registration:4,Lenses:5,Instruction:6,Trening:7,"OD-Prepare":8,"OD-TestVisus":9,"OS-Prepare":10,"OS-TestVisus":11,ChooseTest:12,ColorCloseLeft:13,ColorTest_OD:14,ColorCloseRight:15,ColorTest_OS:16,AmslerCloseLeft:17,Amsler_OD:18,AmslerCloseRight:19,Amsler_OS:20,AstCloseLeft:21,Astigmatism_OD:22,AstCloseRight:23,Astigmatism_OS:24,Results:25};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		//_this.gotoAndPlay('Registration');
	}
	this.frame_1 = function() {
		this.stop();
		var _this = this;
		
		this.BtnReg.alpha = 0;
		var tested = 0;
		
			widthW = window_width();
			fontsz = (widthW * 0.022)+fontsz;
		
		if (!this.BtnReg_on) {
			_this.BtnReg.on("click", function () {
				console.log("BtnReg clicked");
				_this.gotoAndPlay('Monitor');
			});
			this.BtnReg_on = true;
		}
		
		async function getData() {
		_this.Omsg.text = "Добро пожаловать\n"; //+" (ID = "+school_id+").";
		_this.BtnReg.alpha = 1;
		};
		
		getData();
	}
	this.frame_2 = function() {
		this.stop();
		var _this = this;
		var arrow = this.Arrow;
		var fct;
		
		fct = 1000 / $('#canvas')[0].attributes.width.value; //  * window.screen.width / 1920
		arrow.scaleX = fct;
		arrow.scaleY = fct;
		
		function handleMouseWheel(event) {
			var delta = event.wheelDelta > 0 ? 1 : -1;
			var scaleFactor = 0.0025;
		
			var newScale = arrow.scaleX + delta * scaleFactor;
			arrow.scaleX = newScale;
			arrow.scaleY = newScale;
		
			if (newScale < 0.1) {
				newScale = 0.1;
			}
		
			$("#arrowlength").val(arrow._getBounds().width);
		
			//   event.preventDefault();
		}
		
		document.addEventListener('wheel', handleMouseWheel);
		
		document.addEventListener('keydown', handleKeyDown);
		
		function handleKeyDown(event) {
			if (event.keyCode === 37) {
				var newScale = arrow.scaleX - 0.0025;
				arrow.scaleX = newScale;
				arrow.scaleY = newScale;
			} else if (event.keyCode === 39) {
				var newScale = arrow.scaleX + 0.0025;
				arrow.scaleX = newScale;
				arrow.scaleY = newScale;
			}
			$("#arrowlength").val(arrow._getBounds().width);
		}
		
		$("#dom_overlay_container").on("attached", function (t, e) {
			e && "arrowlength" == e.id && ($("#arrowlength").css(inputStyle), $("#arrowlength"), $("#arrowlength").focus(), $(function () {
				$("#arrowlength").keypress(function (t) {
					if (!String.fromCharCode(t.which).match(/[0-9]/)) return !1
				}),
				$("#arrowlength").focusout(function () {
					arrow_length = parseFloat(this.value)
				}), $('#arrowlength').val(arrow._getBounds().width)
			})),
			e && "AllTests1" == e.id && ($("label[for='AllTests1']").css(checkboxStyle).css("font-size", "2em"), $('label[for="AllTests1"]').html("Все тесты"), $("#AllTests1").prop("checked", !0).css({
				width: "25px",
				height: "25px"
			}).focus())
		});
		
		if (!this.Begin_Btn_on) {
			_this.Begin_Btn.on("click", function () {
				console.log("Begin_Btn clicked")
				arrow_length = parseFloat($("#arrowlength").val());
				if ($('#arrowlength').val() === "") {
					alert("Калибровка неверная");
					$('#arrowlength').focus();
					return;
				}
				AllTestsChoose = $("#AllTests1").prop('checked'); //AllTests.selected;
				length_meter = 1.0;
				fact0 = (600 / 180) * (67 / arrow_length) * (length_meter / 5.0);
				circle_width = 460;
				fact2 = 189.0 / 460.0;
				factor = arrow_length / 2814;
				if (isNaN(factor)) {
					return;
				}
				_this.gotoAndStop('Attention');
			});
		}
	}
	this.frame_3 = function() {
		this.stop();
		var _this = this;
		
		if (!this.BtnGoOn_on) {
			_this.BtnGoOn.on("click", function () {
				console.log("BtnGoOn clicked");
				_this.gotoAndPlay("Instruction");
			});
			this.BtnGoOn_on = true;
		}
	}
	this.frame_4 = function() {
		this.stop();
		var cadr_this = this,
			activeParam = "",
			already1 = !1,
			already2 = !1,
			options1 = {
				fields: [{
					id: "lastname",
					tag: "last_name",
					empty_msg: "Неизвестная фамилия"
				}, {
					id: "firstname",
					tag: "first_name",
					empty_msg: "Неизвестное имя"
				}, {
					id: "middlename",
					tag: "patronym",
					empty_msg: "Неизвестное отчество"
				}],
				suggest_on_focus: !1,
				//ahunter_url: "https://dvs.mntk-nsk.ru/person.php/"
				ahunter_url: "https://ahunter.ru/"
			};
		
		var options = { id : 'homeaddress' };
		
		$.datepicker.regional.ru = {
			closeText: "Закрыть",
			prevText: "Предыдущий",
			nextText: "Следующий",
			currentText: "Сегодня",
			monthNames: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
			monthNamesShort: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
			dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
			dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
			dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			weekHeader: "Не",
			dateFormat: "dd MM yy",
			firstDay: 1,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		},
		$.datepicker.setDefaults($.datepicker.regional.ru), $("#dom_overlay_container").on("attached", function (t, e) {
			already1 || (AhunterSuggest.Person.Discrete(options1), already1 = !0),
			e && "movieClip_4" == e.id && ($("#movieClip_4").datepicker({
				altFormat: "yy-mm-dd",
				altField: "#altDateFormat",
				beforeShow: function (t, e) {
					$(t).attr("readonly", "readonly").css(inputStyle)
				},
				yearRange: "c-80:c+1",
				changeMonth: !0,
				changeYear: !0,
				onSelect: function (t, e) {
					console.log(t)
				}
			}), $("#movieClip_4").css(inputStyle), $("#movieClip_4").on("click", function () {
				$(this).datepicker("show")
			})), $("#ui-datepicker-div").css("font-size", "2vw"),
			e && "lastname" == e.id && ($("#lastname").css(inputStyle).attr("maxlength", 39), $(function () {
				$("#lastname").keypress(function (t) {
					var e;
					if (activeParam = "output=json&active=last_name&", !String.fromCharCode(t.which).match(/[А-Яа-я- ]/)) return !1
				}).on("input", function () {
					for (var t = this.value.split(/([ -])/), e = "", a = 0; a < t.length; a++) a % 2 == 0 ? e += t[a].charAt(0).toUpperCase() + t[a].slice(1) : e += t[a];
					this.value = e,
					this.value = this.value.trim(),
					_this = this,
					$("div.u-AhunterSuggestions").ready(function () {
						0 === $("div.u-AhunterSuggestions").ready().text().length && _this.value.length > 2 && already1 && !already2 && (already2 = !0, ahunter_url_global = "https://ahunter.ru/site/suggest/person")
					})
				}).focusout(function () {
					this.value = this.value.trim()
				})
			})),
			e && "firstname" == e.id && ($("#firstname").css(inputStyle).attr("maxlength", 39), $(function () {
				$("#firstname").keypress(function (t) {
					var e;
					if (activeParam = "output=json&active=first_name&", !String.fromCharCode(t.which).match(/[А-Яа-я- ]/)) return !1
				}).on("input", function () {
					for (var t = this.value.split(/([ -])/), e = "", a = 0; a < t.length; a++) a % 2 == 0 ? e += t[a].charAt(0).toUpperCase() + t[a].slice(1) : e += t[a];
					this.value = e,
					this.value = this.value.trim(),
					_this = this,
					$("div.u-AhunterSuggestions").ready(function () {
						0 === $("div.u-AhunterSuggestions").ready().text().length && _this.value.length > 2 && already1 && !already2 && (already2 = !0, ahunter_url_global = "https://ahunter.ru/site/suggest/person")
					})
				}).focusout(function () {
					this.value = this.value.trim()
				})
			})),
			e && "middlename" == e.id && ($("#middlename").css(inputStyle).attr("maxlength", 39), $(function () {
				$("#middlename").keypress(function (t) {
					var e;
					if (activeParam = "output=json&active=patronym&", !String.fromCharCode(t.which).match(/[А-Яа-я- ]/)) return !1
				}).on("input", function () {
					for (var t = this.value.split(/([ -])/), e = "", a = 0; a < t.length; a++) a % 2 == 0 ? e += t[a].charAt(0).toUpperCase() + t[a].slice(1) : e += t[a];
					this.value = e,
					this.value = this.value.trim(),
					_this = this,
					$("div.u-AhunterSuggestions").ready(function () {
						0 === $("div.u-AhunterSuggestions").ready().text().length && _this.value.length > 2 && already1 && !already2 && (already2 = !0, ahunter_url_global = "https://ahunter.ru/site/suggest/person")
					})
				}).focusout(function () {
					this.value = this.value.trim();
					getUserInfo();
				})
			})),
			e && "klass" == e.id && ($("#klass").css(inputStyle).attr("maxlength", 9), $(function () {
				$("#klass").keypress(function (t) {
					if (!String.fromCharCode(t.which).match(/[А-Яа-я0-9]/)) return !1
				}),
				$("#klass").focusout(function () {
					this.value = this.value.toLocaleUpperCase()
				})
			})),
			e && "homeaddress" == e.id && ($("#homeaddress").css(inputStyle).attr("maxlength", 150), AhunterSuggest.Address.Solid(options), $(function () {
				$("#homeaddress").keypress(function (t) {
					if (!String.fromCharCode(t.which).match(/[А-Яа-я0-9- .,/()]/)) return !1
				})
			})),
			e && "homephone" == e.id && ($("#homephone").css(inputStyle), $(function () {
				$("#homephone").keypress(function (t) {
					if (!String.fromCharCode(t.which).match(/[()0-9 +-]/)) return !1
				})
			})),
			e && "FIOmsg" == e.id && ($("#FIOmsg").css(messageStyle).attr("readonly", "readonly"))
		}), this.SaveBtn2_on || (cadr_this.SaveBtn2.on("click", function () {
			if (console.log("SaveBtn2 clicked"), $("#FIOmsg").val(""), klass_name = $("#klass").val(), last_name = $("#lastname").val(), first_name = $("#firstname").val(), middle_name = $("#middlename").val(), home_address = $("#homeaddress").val(), home_phone = $("#homephone").val(), birthdate = $("#altDateFormat").val(), "" == last_name || "" == first_name || "" == middle_name || "" == klass_name || "" == birthdate) {
				$("#FIOmsg").val("Вы заполнили не все поля формы!");
				return
			}
			$("#FIOmsg").val(""),
			fetch("https://dvs.mntk-nsk.ru/test_save_user.php", {
				mode:'no-cors',
				method: "post",
				headers: {
					"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
				},
				body: "firstname=" + first_name + "&middlename=" + middle_name + "&lastname=" + last_name + "&birthdate=" + birthdate + "&homeaddress=" + home_address + "&homephone=" + home_phone
			})
			user_id = 1111;
			
			user_id > 0 && cadr_this.gotoAndPlay("Lenses")
		}), this.SaveBtn2_on = !0);
		
		// Функция для отправки запроса и обработки ответа
		function getUserInfo() {
			var lastname = $("#lastname").val();
			var firstname = $("#firstname").val();
			var middlename = $("#middlename").val();
		
			// Отправка HTTP запроса к скрипту get_user_info.php
			$.ajax({
				//url: "https://dvs.mntk-nsk.ru/get_user_info.php",
				url: "get_user_info.php",
				//mode: 'no-cors',
				type: "POST",
				data: {
					lastname: lastname,
					firstname: firstname,
					middlename: middlename,
					school_id: school_id
				},
				success: function (response) {
					var data = response.split('&');
					var birthdate = data[0];
					var address_and_clinic = data[1];
					var phonenumber = data[2];
		
					// Установка значений в соответствующие элементы DOM
					birthdate = convertToDatepickerFormat(birthdate)
					$("#movieClip_4").datepicker("setDate", birthdate)
					$("#homeaddress").val(address_and_clinic);
					$("#homephone").val(phonenumber);
				},
				error: function () {
					console.log(lastname,firstname,middlename,"Ошибка при выполнении запроса");
				}
			});
		}
		
		function convertToDatepickerFormat(b) {
			var parts = b.split("-");
			var d = parts[0];
			var m = parts[1];
			var y = parts[2];
		
			// Преобразование в формат, поддерживаемый элементом Datepicker
			return $.datepicker.formatDate("dd MM yy", new Date(y, m - 1, d));
		}
	}
	this.frame_5 = function() {
		this.stop();
		var _this = this;
		
		this.Btn2Instruction.alpha = 0;
		
		if (!this.Btn2Instruction_on) {
			this.Btn2Instruction.on("click", function () {
				console.log("BtnReg clicked");
				_this.gotoAndPlay('Instruction');
			});
			this.Btn2Instruction_on = true;
		}
		
		
		$("#dom_overlay_container").on("attached", function (evt, param) {
			// Check the id of the instance 
			if (param && param.id == 'radiosetLorS') {
				$("#radiosetLorS").css(radiosetStyle);
				$("#radiosetLorS label").css(radiosetLabelStyle);
			}
		});
		
		if (!this.radiosetLorS_change_cbk) {
			function radiosetLorS_change(evt) {
				// Начало пользовательского кода
				_this.Btn2Instruction.alpha = 1;
				if (evt.target.id == $('fieldset input')[0].id) {
					console.log('Да');
					lensesORspect = 1;
				} else if (evt.target.id == $('fieldset input')[1].id) {
					console.log('Нет');
					lensesORspect = 0;
				}
			}
			$("#dom_overlay_container").on("change", "#radiosetLorS", radiosetLorS_change.bind(this));
			this.radiosetLorS_change_cbk = true;
		}
	}
	this.frame_6 = function() {
		this.stop();
		var _this = this;
		
		if (!this.BtnNext1_on) {
			_this.BtnNext1.on("click", function () {
				console.log("BtnNext1 clicked");
				_this.gotoAndPlay('Trening');
			});
			this.BtnNext1_on = true;
		}
	}
	this.frame_7 = function() {
		this.stop();
		var _this = this;
		var orient = random();
		
		this.CircleTestTrening.scaleX = factor; // * 100;
		this.CircleTestTrening.scaleY = factor; // * 100;
		this.CircleTestTrening.rotation = orient;
		level = 0;
		count = 6;
		eye = 'OD'; // Right eye
		var prev_orient = this.CircleTestTrening.rotation;
		
		function watchKeyPressed(key) {
			count--;
			if (key == 0) {
				key = 360;
			}
			if (prev_orient == key) {
				console.log("Совпало!!! Кольцо: " + _this.CircleTestTrening.rotation + " Указатель: " + key);
			} else {
				console.log("Ошибка!!! Кольцо: " + _this.CircleTestTrening.rotation + " Указатель: " + key);
			}
			do {
				orient = random();
			} while (prev_orient == orient);
			_this.CircleTestTrening.rotation = orient;
			prev_orient = orient;
			if (count <= 0) {
				_this.gotoAndPlay('OD-Prepare');
			}
			return;
		}
		
		if (!this.DontknowBtn_on) {
			_this.DontknowBtn.on("click", function () {
				console.log("DontknowBtn clicked");
				watchKeyPressed(1);
			});
			this.DontknowBtn_on = true;
		}
		
		if (!this.BtnRight_on) {
			_this.BtnRight.on("click", function () {
				console.log("BtnRight clicked");
				watchKeyPressed(-90);
			});
			this.BtnRight_on = true;
		}
		
		if (!this.BtnDown_on) {
			_this.BtnDown.on("click", function () {
				console.log("BtnDown clicked");
				watchKeyPressed(0);
			});
			this.BtnDown_on = true;
		}
		
		if (!this.BtnLeft_on) {
			_this.BtnLeft.on("click", function () {
				console.log("BtnLeft clicked");
				watchKeyPressed(90);
			});
			this.BtnLeft_on = true;
		}
		
		if (!this.BtnUp_on) {
			_this.BtnUp.on("click", function () {
				console.log("BtnUp clicked");
				watchKeyPressed(180);
			});
			this.BtnUp_on = true;
		}
	}
	this.frame_8 = function() {
		this.stop();
		var _this = this;
		
		if (!this.BtnVisusOD_on) {
			_this.BtnVisusOD.on("click", function () {
				console.log("BtnVisusOD clicked");
				_this.gotoAndPlay('OD-TestVisus');
			});
			this.BtnVisusOD_on = true;
		}
	}
	this.frame_9 = function() {
		this.stop();
		var _this = this;
		var orient = random();
		
		this.CircleTestOD.scaleX = factor;
		this.CircleTestOD.scaleY = factor;
		this.CircleTestOD.rotation = orient;
		
		testedVisusOD = 0.0;
		level = 0;
		count = mincount[level];
		eye = 'OD'; // Right eye
		var prev_orient = this.CircleTestOD.rotation;
		var testedVisusOD = 0;
		
		function watchKeyPressedOD(key) {
			count--;
			if (key == 0) {
				key = 360;
			}
			if (prev_orient == key) {
				console.log("Совпало!!! Кольцо: " + _this.CircleTestOD.rotation + " Указатель: " + key);
				OK_OD[level]++;
			} else {
				console.log("Ошибка!!! Кольцо: " + _this.CircleTestOD.rotation + " Указатель: " + key);
			}
			do {
				orient = random();
			} while (prev_orient == orient);
			_this.CircleTestOD.rotation = orient;
			prev_orient = orient;
			if (count <= 0) {
				testedVisusOD = level;
				if ((mincount[level] - OK_OD[level]) > dopusk[level]) {
					level = 10; // Quit test
					testedVisusOD -= 1;
				}
				level++;
				if (level >= 10) {
					for (i = 0; i < 10; i++) {
						if (mincount[i] - OK_OD[i] <= dopusk[i]) {
							//					console.log(visus[i]+' '+mincount[i]+' '+OK_OD[i]+' OK_OD');
						} else {
							//					console.log(visus[i]+' '+mincount[i]+' '+OK_OD[i]+' BAD');
						}
					}
					if (testedVisusOD >= 0) {
						testedVisusOD = visus[testedVisusOD];
					} else {
						testedVisusOD = 0.0;
					}
					console.log('VisusOD = ' + testedVisusOD);
					tested_visusOD = testedVisusOD;
					_this.gotoAndStop('OS-Prepare'); //nextFrame();
				}
				count = mincount[level];
				var f = factor * dim_STD[level];
				_this.CircleTestOD.scaleX = f * 1.00;
				_this.CircleTestOD.scaleY = f * 1.00;
			}
			return;
		}
		
		if (!this.DontknowBtnOD_on) {
			_this.DontknowBtnOD.on("click", function () {
				console.log("DontknowBtnOD clicked");
				watchKeyPressedOD(1);
			});
			this.DontknowBtnOD_on = true;
		}
		
		if (!this.BtnRightOD_on) {
			_this.BtnRightOD.on("click", function () {
				console.log("BtnRightOD clicked");
				watchKeyPressedOD(-90);
			});
			this.BtnRightOD_on = true;
		}
		
		if (!this.BtnDownOD_on) {
			_this.BtnDownOD.on("click", function () {
				console.log("BtnRightOD clicked");
				watchKeyPressedOD(0);
			});
			this.BtnDownOD_on = true;
		}
		
		if (!this.BtnLeftOD_on) {
			_this.BtnLeftOD.on("click", function () {
				console.log("BtnRightOD clicked");
				watchKeyPressedOD(90);
			});
			this.BtnLeftOD_on = true;
		}
		
		if (!this.BtnUpOD_on) {
			_this.BtnUpOD.on("click", function () {
				console.log("BtnRightOD clicked");
				watchKeyPressedOD(180);
			});
			this.BtnUpOD_on = true;
		}
	}
	this.frame_10 = function() {
		this.stop();
		var _this = this;
		
		if (!this.BtnVisusOS_on) {
		_this.BtnVisusOS.on("click", function () {
			console.log("BtnVisusOS clicked");
			_this.gotoAndPlay('OS-TestVisus');
		});
			this.BtnVisusOS_on = true;
		}
	}
	this.frame_11 = function() {
		this.stop();
		var _this = this;
		var orient = random();
		
		this.CircleTestOS.scaleX = factor; // * 100;
		this.CircleTestOS.scaleY = factor; // * 100;
		this.CircleTestOS.rotation = orient;
		
		tested_visusOS = 0.0;
		level = 0;
		count = mincount[level];
		eye = 'OS'; // Left eye
		var prev_orient = this.CircleTestOS.rotation;
		var testedVisusOS = 0;
		
		function watchKeyPressedOS(key) {
			count--;
			if (key == 0) {
				key = 360;
			}
			if (prev_orient == key) {
				console.log("Совпало!!! Кольцо: " + _this.CircleTestOS.rotation + " Указатель: " + key);
				OK_OS[level]++;
			} else {
				console.log("Ошибка!!! Кольцо: " + _this.CircleTestOS.rotation + " Указатель: " + key);
			}
			do {
				orient = random();
			} while (prev_orient == orient);
			_this.CircleTestOS.rotation = orient;
			prev_orient = orient;
			if (count <= 0) {
				testedVisusOS = level;
				if ((mincount[level] - OK_OS[level]) > dopusk[level]) {
					level = 10; // Quit test
					testedVisusOS -= 1;
				}
				level++;
				if (level >= 10) {
					for (i = 0; i < 10; i++) {
						if (mincount[i] - OK_OS[i] <= dopusk[i]) {
							//					console.log(visus[i]+' '+mincount[i]+' '+OK_OS[i]+' OK_OS');
						} else {
							//					console.log(visus[i]+' '+mincount[i]+' '+OK_OS[i]+' BAD');
						}
					}
					if (testedVisusOS >= 0) {
						testedVisusOS = visus[testedVisusOS];
					} else {
						testedVisusOS = 0.0;
					}
					console.log('VisusOS = ' + testedVisusOS);
					tested_visusOS = testedVisusOS;
					_this.gotoAndStop('ChooseTest'); //nextFrame();
				}
				count = mincount[level];
				var f = factor * dim_STD[level];
				_this.CircleTestOS.scaleX = f * 1.00;
				_this.CircleTestOS.scaleY = f * 1.00;
			}
			return;
		}
		
		if (!this.DontknowBtnOS_on) {
			_this.DontknowBtnOS.on("click", function () {
				console.log("DontknowBtnOS clicked");
				watchKeyPressedOS(1);
			});
			this.DontknowBtnOS_on = true;
		}
		
		if (!this.BtnRightOS_on) {
			_this.BtnRightOS.on("click", function () {
				console.log("BtnRightOS clicked");
				watchKeyPressedOS(-90);
			});
			this.BtnRightOS_on = true;
		}
		
		if (!this.BtnDownOS_on) {
			_this.BtnDownOS.on("click", function () {
				console.log("BtnRightOS clicked");
				watchKeyPressedOS(0);
			});
			this.BtnDownOS_on = true;
		}
		
		if (!this.BtnLeftOS_on) {
			_this.BtnLeftOS.on("click", function () {
				console.log("BtnRightOS clicked");
				watchKeyPressedOS(90);
			});
			this.BtnLeftOS_on = true;
		}
		
		if (!this.BtnUpOS_on) {
			_this.BtnUpOS.on("click", function () {
				console.log("BtnRightOS clicked");
				watchKeyPressedOS(180);
			});
			this.BtnUpOS_on = true;
		}
	}
	this.frame_12 = function() {
		this.stop();
		var _this = this;
		console.log('Choose test');
		validate_msg = 'Choose test';
		var alltested = true;
		
		if (tested_visusOD == -1 || tested_visusOS == -1) {
			this.visBtn.alpha = 1;
			this.visBtn.visible = true;
			alltested = false;
		} else {
			this.visBtn.alpha = 0.3;
		}
		if (tested_colorOD == 0 || tested_colorOS == 0) {
			this.duoBtn.alpha = 1;
			this.duoBtn.visible = true;
			alltested = false;
		} else {
			this.duoBtn.alpha = 0.3;
		}
		if (tested_amslerOD == 0 || tested_amslerOS == 0) {
			this.amsBtn.alpha = 1;
			this.amsBtn.visible = true;
			alltested = false;
		} else {
			this.amsBtn.alpha = 0.3;
		}
		if (tested_astOD == 0 || tested_astOS == 0) {
			this.astBtn.alpha = 1;
			this.astBtn.visible = true;
			alltested = false;
		} else {
			this.astBtn.alpha = 0.3;
		}
		
		if (alltested == true) {
			this.moreTests.alpha = 0;
			EnableSaveResButton();
		} else {
			this.moreTests.visible = true;
			this.SaveResBtnAll.visible = false;
			this.AfterText.visible = false;
			this.SaveArrow.visible = false;
		}
		if (AllTestsChoose == false) {
			EnableSaveResButton();
		}
		function EnableSaveResButton() {
			_this.SaveResBtnAll.visible = true;
			_this.AfterText.visible = true;
			_this.SaveArrow.visible = true;
		}
		
		if (!this.visBtn_on) {
			_this.visBtn.on("click", function () {
				console.log("visBtn clicked");
				if (_this.visBtn.alpha == 1) {
					_this.gotoAndPlay('OD-Prepare');
				}
			});
			this.visBtn_on = true;
		}
		
		if (!this.duoBtn_on) {
			_this.duoBtn.on("click", function () {
				console.log("duoBtn clicked");
				if (_this.duoBtn.alpha == 1) {
					_this.gotoAndPlay('ColorCloseLeft');
				}
			});
			this.duoBtn_on = true;
		}
		
		if (!this.amsBtn_on) {
			_this.amsBtn.on("click", function () {
				console.log("amsBtn clicked");
				if (_this.amsBtn.alpha == 1) {
					_this.gotoAndPlay('AmslerCloseLeft');
				}
			});
			this.amsBtn_on = true;
		}
		
		if (!this.astBtn_on) {
			_this.astBtn.on("click", function () {
				console.log("astBtn clicked");
				if (_this.astBtn.alpha == 1) {
					_this.gotoAndPlay('AstCloseLeft');
				}
			});
			this.astBtn_on = true;
		}
		
		if (!this.listenerSaveResBtnAll_on) {
			var listenerSaveResBtnAll = this.SaveResBtnAll.on("click", function () {
				console.log("SaveResBtn2 clicked");
				_this.gotoAndPlay('Results');
			});
			this.listenerSaveResBtnAll_on = true;
		}
	}
	this.frame_13 = function() {
		this.stop();
		var _this = this;
		
		if (!this.BtnColorGo_on) {
			_this.BtnColorGo.on("click", function () {
				console.log("BtnColorOD clicked");
				_this.gotoAndPlay('ColorTest_OD');
			});
			this.BtnColorGo_on = true;
		}
	}
	this.frame_14 = function() {
		this.stop();
		var _this = this;
		
		tested_colorOD = 0;
		
		if (!this.BtnColorODGreen_on) {
			_this.BtnColorODGreen.on("click", function () {
				console.log("OD Green selected");
				tested_colorOD = 1; //Green
				_this.gotoAndPlay('ColorCloseRight');
			});
			this.BtnColorODGreen_on = true;
		}
		
		if (!this.BtnColorODRed_on) {
			_this.BtnColorODRed.on("click", function () {
				console.log("OD Red selected");
				tested_colorOD = 2; //Red
				_this.gotoAndPlay('ColorCloseRight');
			});
			this.BtnColorODRed_on = true;
		}
		
		if (!this.BtnColorODEq_on) {
			_this.BtnColorODEq.on("click", function () {
				console.log("OD Equally selected");
				tested_colorOD = 3; //Equally
				_this.gotoAndPlay('ColorCloseRight');
			});
			this.BtnColorODEq_on = true;
		}
	}
	this.frame_15 = function() {
		this.stop();
		var _this = this;
		
		if (!this.BtnColorOS_on) {
			_this.BtnColorOS.on("click", function () {
				console.log("BtnColorOS clicked");
				_this.gotoAndPlay('ColorTest_OS');
			});
			this.BtnColorOS_on = true;
		}
	}
	this.frame_16 = function() {
		this.stop();
		var _this = this;
		
		tested_colorOS = 0;
		
		if (!this.BtnColorOSGreen_on) {
			_this.BtnColorOSGreen.on("click", function () {
				console.log("OS Green selected");
				tested_colorOS = 1; //Green
				_this.gotoAndPlay('ChooseTest');
			});
			this.BtnColorOSGreen_on = true;
		}
		
		if (!this.BtnColorOSRed_on) {
			_this.BtnColorOSRed.on("click", function () {
				console.log("OS Red selected");
				tested_colorOS = 2; //Red
				_this.gotoAndPlay('ChooseTest');
			});
			this.BtnColorOSRed_on = true;
		}
		
		if (!this.BtnColorOSEq_on) {
			_this.BtnColorOSEq.on("click", function () {
				console.log("OS Equally selected");
				tested_colorOS = 3; //Equally
				_this.gotoAndPlay('ChooseTest');
			});
			this.BtnColorOSEq_on = true;
		}
	}
	this.frame_17 = function() {
		this.stop();
		var _this = this;
		
		if (!this.BtnAmslerOD_on) {
			_this.BtnAmslerOD.on("click", function () {
				console.log("BtnAmslerOD clicked");
				_this.gotoAndPlay('Amsler_OD');
			});
			this.BtnAmslerOD_on = true;
		}
	}
	this.frame_18 = function() {
		this.stop();
		var _this = this;
		
		tested_amslerOD = 0;
		
		if (!this.BtnAmslerODEq_on) {
			_this.BtnAmslerODEq.on("click", function () {
				console.log("OD Equally selected");
				tested_amslerOD = 1; //OD Equally
				_this.gotoAndPlay('AmslerCloseRight');
			});
			this.BtnAmslerODEq_on = true;
		}
		
		if (!this.BtnAmslerODNotEq_on) {
			_this.BtnAmslerODNotEq.on("click", function () {
				console.log("OD Not Equally selected");
				tested_amslerOD = 2; //OD Not Equally
				_this.gotoAndPlay('AmslerCloseRight');
			});
			this.BtnAmslerODNotEq_on = true;
		}
	}
	this.frame_19 = function() {
		this.stop();
		var _this = this;
		
		if (!this.BtnAmslerOS_on) {
			_this.BtnAmslerOS.on("click", function () {
				console.log("BtnAmslerOS clicked");
				_this.gotoAndPlay('Amsler_OS');
			});
			this.BtnAmslerOS_on = true;
		}
	}
	this.frame_20 = function() {
		this.stop();
		var _this = this;
		
		tested_amslerOS = 0;
		
		if (!this.BtnAmslerOSEq_on) {
			_this.BtnAmslerOSEq.on("click", function () {
				console.log("OS Equally selected");
				tested_amslerOS = 1; //OD Equally
				_this.gotoAndPlay('ChooseTest');
			});
			this.BtnAmslerOSEq_on = true;
		}
		
		if (!this.BtnAmslerOSNotEq_on) {
			_this.BtnAmslerOSNotEq.on("click", function () {
				console.log("OS Not Equally selected");
				tested_amslerOS = 2; //OD Not Equally
				_this.gotoAndPlay('ChooseTest');
			});
			this.BtnAmslerOSNotEq_on = true;
		}
	}
	this.frame_21 = function() {
		this.stop();
		var _this = this;
		
		if (!this.BtnAstOD_on) {
			_this.BtnAstOD.on("click", function () {
				console.log("BtnAstOD clicked");
				_this.gotoAndPlay('Astigmatism_OD');
			});
			this.BtnAstOD_on = true;
		}
	}
	this.frame_22 = function() {
		this.stop();
		var _this = this;
		
		tested_astOD = 0;
		
		if (!this.BtnAstODEq_on) {
			_this.BtnAstODEq.on("click", function () {
				console.log("OD Ast Equally selected");
				tested_astOD = 1; //OD Equally
				_this.gotoAndPlay('AstCloseRight');
			});
			this.BtnAstODEq_on = true;
		}
		
		if (!this.BtnAstODNotEq_on) {
			_this.BtnAstODNotEq.on("click", function () {
				console.log("OD Ast Not Equally selected");
				tested_astOD = 2; //OD Not Equally
				_this.gotoAndPlay('AstCloseRight');
			});
			this.BtnAstODNotEq_on = true;
		}
	}
	this.frame_23 = function() {
		this.stop();
		var _this = this;
		
		if (!this.BtnAstOS_on) {
			_this.BtnAstOS.on("click", function () {
				console.log("BtnAstOS clicked");
				_this.gotoAndPlay('Astigmatism_OS');
			});
			this.BtnAstOS_on = true;
		}
	}
	this.frame_24 = function() {
		this.stop();
		var _this = this;
		
		tested_astOS = 0;
		
		if (!this.BtnAstOSNotEq_on) {
			_this.BtnAstOSEq.on("click", function () {
				console.log("OS Ast Equally selected");
				tested_astOS = 1; //OS Equally
				_this.gotoAndPlay('ChooseTest');
			});
			this.BtnAstOSEq_on = true;
		}
		
		if (!this.BtnAstOSNotEq_on) {
			_this.BtnAstOSNotEq.on("click", function () {
				console.log("OS Ast Not Equally selected");
				tested_astOS = 2; //OS Not Equally
				_this.gotoAndPlay('ChooseTest');
			});
			this.BtnAstOSNotEq_on = true;
		}
	}
	this.frame_25 = function() {
		this.stop();
		var _this = this;
		var InList = false;
		this.BtnInList.alpha = 0;
		this.MessageBAD.alpha = 0;
		tested = 1;
		
		if (lensesORspect == 1 || tested_visusOD < 0.900000 || tested_visusOS < 0.900000 ) {InList = true;}
		
		if (tested_visusOD == -1 || tested_visusOS == -1) {
			tested = 0;
			console.log('Вы не проверили свое зрение');
			this.gotoAndStop('ChooseTest');
		} else {
			tested = 1;
			this.Vis_OD.text = tested_visusOD;
			this.Vis_OS.text = tested_visusOS;
		}
		if (tested_colorOD == 0 || tested_colorOS == 0) {
		
		} else {
			if (tested_colorOD == 1) { this.Color_OD.text = "Возможна близозорукость"; 
				} else if (tested_colorOD == 2) { this.Color_OD.text = "Возможна дальнозоркость";
				} else if (tested_colorOD == 3) { this.Color_OD.text = "Норма"; 
				} else this.Color_OD.text = "";
			if (tested_colorOS == 1) { this.Color_OS.text = "Возможна близозорукость"; 
				} else if (tested_colorOS == 2) { this.Color_OS.text = "Возможна дальнозоркость"; 
				} else if (tested_colorOS == 3) { this.Color_OS.text = "Норма"; 
				} else this.Color_OS.text = "-";
		}
		if (tested_amslerOD == 0 || tested_amslerOS == 0) {
		
		} else {
			if (tested_amslerOD == 1) { this.Amsler_OD.text = "Норма"; 
				} else if (tested_amslerOD == 2) { this.Amsler_OD.text = "Обратитесь к врачу"; InList = true;
				} else this.Amsler_OD.text = "-"; 
			if (tested_amslerOS == 1) { this.Amsler_OS.text = "Норма"; 
				} else if (tested_amslerOS == 2) { this.Amsler_OS.text = "Обратитесь к врачу"; InList = true;
				} else this.Amsler_OS.text = "-"; 
		}
		if (tested_astOD == 0 || tested_astOS == 0) {
		
		} else {
			if (tested_astOD == 1) { this.Astig_OD.text = "Нет астигматизма"; 
				} else if (tested_astOD == 2) { this.Astig_OD.text = "Возможнен астигматизм"; 
				} else this.Astig_OD.text = "-"; 
			if (tested_astOS == 1) { this.Astig_OS.text = "Нет астигматизма"; 
				} else if (tested_astOS == 2) { this.Astig_OS.text = "Возможнен астигматизм"; 
				} else this.Astig_OS.text = "-"; 
		}
		
		
		var fioText = last_name + " " + first_name + " " + middle_name + '\n' + klass_name + " класс" + '\n';
		
		this.nextUserBtn.alpha = 0;
		//this.Submit_txt.alpha = 1;
		if (InList) { this.BtnInList.alpha = 1; this.MessageBAD.alpha = 1; } 
		
				if (tested == 0) {
					_this.FIO.text = 'Вам надо пройти тест';
					return;
				}
				var message = 'user_id=' + user_id +
					'&school_id=' + school_id +
					'&klass=' + klass_name +
					'&arrowlength=' + 305 +
					'&visusOD=' + tested_visusOD +
					'&visusOS=' + tested_visusOS +
					'&colortestOD=' + tested_colorOD +
					'&colortestOS=' + tested_colorOS +
					'&astOD=' + tested_astOD +
					'&astOS=' + tested_astOS +
					'&amslerOD=' + tested_amslerOD +
					'&amslerOS=' + tested_amslerOS +
					'&lenses=' + lensesORspect;
		
				fetch("test_submit.php", {
					method: 'POST',
					headers: {
						"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
					},
					body: message
				}).then(function (data) {
					var answer = data;
					if (answer != '0') {
						_this.FIO.text = fioText + 'Данные теста успешно сохранены';
						tested = 0;
						_this.nextUserBtn.alpha = 1;
					} else {
						_this.FIO.text = fioText + 'Данные не могут быть сохранены. Попробуйте еще раз';
					}
					console.log('Ответ сервера: ', data);
						}).
				catch (function (error) {
					console.log('Проблема с интернетом ', error);
		//			alert('Проблема с интернетом ' + error);
					alert('Проблема с интернетом - попробуйте позднее');
					_this.gotoAndPlay('Title');
				});
		
				_this.FIO.text = 'Данные обрабатываются, подождите';
		
		if (!this.nextUserBtn_on) {
			_this.nextUserBtn.on("click", function () {
				console.log("nextUserBtn_on clicked");
				if (_this.nextUserBtn.alpha == 1) {
					if (tested != 0) return;
					tested_visusOD = -1;
					tested_visusOS = -1;
					tested_colorOD = 0;
					tested_colorOS = 0;
					tested_amslerOD = 0;
					tested_amslerOS = 0;
					tested_astOD = 0;
					tested_astOS = 0;
					last_name = '';
					first_name = '';
					middle_name = '';
					klass_name = '';
					home_address = '';
					home_phone = '';
					user_id = -1;
					birthdate = '';
					lensesORspect = '';
					level = 0;
					count = 0;
					eye = '';
					validate_msg = '';
					_this.gotoAndPlay('Attention'); // Action here
				}
			});
			this.nextUserBtn_on = true;
		}
		
		if (!this.BtnInList_on) {
			_this.BtnInList.on("click", function () {
				console.log("BtnInList clicked");
				window.open("https://mntk-nsk.ru/pacientam/zapis-na-diagnostiku", "_blank");
			});
			this.BtnInList_on = true;
		}
	}
	this.frame_26 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1));

	// Actions
	this.Arrow = new lib.СимволCard();
	this.Arrow.name = "Arrow";
	this.Arrow.setTransform(400,233.5,1,1,0,0,0,125,79);

	this.instance = new lib.Символ13();
	this.instance.setTransform(227.75,96.05,1,1,0,0,0,52,24);

	this.BtnGoOn = new lib.КнопкаBtnGoOnнебесная();
	this.BtnGoOn.name = "BtnGoOn";
	this.BtnGoOn.setTransform(400,545);
	new cjs.ButtonHelper(this.BtnGoOn, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AAXBQIAAhJIguBJIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxgAgVg4QgJgJgCgOIAPAAQABAHAEAEQAFAEAIAAQAJAAAEgEQAFgEABgHIAPAAQgCAOgIAJQgKAIgOAAQgOAAgIgIg");
	this.shape.setTransform(626.25,326.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AAXA5IAAhIIguBIIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxg");
	this.shape_1.setTransform(612.75,329.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAApIApAAIAAgpIAfAAIAABxg");
	this.shape_2.setTransform(599.35,329.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AgrAyQgJgJgBgPQAAgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgLgBQgJAAgEADQgFAEgCAIIgbgFQAEgRALgIQALgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQAAAPACAIQABAHAEAIIgdAAIgDgJIgCgEQgHAIgJAEQgIADgJABQgTAAgKgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAIAAQAGABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_3.setTransform(586.6,329.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_4.setTransform(573.175,330.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990000").s().p("AgrAyQgJgJgBgPQABgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgLgBQgJAAgEADQgEAEgDAIIgbgFQAEgRALgIQALgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQAAAPACAIQACAHADAIIgdAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAHAAQAHABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_5.setTransform(560.4,329.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AgwAbIAbgEQAHARAOAAQAJAAAFgFQAFgFAAgFQAAgHgFgEQgFgEgJAAIgEAAIAAgTIAKgBQAEAAADgFQADgDAAgGQAAgFgEgFQgEgEgIAAQgFAAgEACQgFADgEAKIgagFQAEgQANgHQANgIAPABQAVgBALAKQALAJAAAOQAAAJgFAHQgFAFgKAFQANADAGAGQAGAIAAAKQAAAOgMAJQgNAKgXAAQgoAAgJghg");
	this.shape_6.setTransform(548.475,329.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990000").s().p("AAXA5IgXgjIgXAjIgjAAIAog6Igng3IAlAAIAUAfIAVgfIAjAAIgnA2IArA7g");
	this.shape_7.setTransform(717.1,302.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990000").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJACAHAIQAGAIAAAMQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_8.setTransform(701.675,302.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990000").s().p("AAVA5IAAgwIgqAAIAAAwIgeAAIAAhxIAeAAIAAApIAqAAIAAgpIAfAAIAABxg");
	this.shape_9.setTransform(685.55,302.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990000").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAZAAQAUAAANAJQAMAIAGATIgfAFQgBgJgGgEQgEgFgJAAQgKAAgHAIQgHAHAAATQAAATAHAIQAHAJALAAQAIAAAGgFQAFgFACgLIAeAEQgFAVgNAKQgNALgWAAQgYAAgPgQg");
	this.shape_10.setTransform(672.95,302.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990000").s().p("AgdA0QgOgHgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_11.setTransform(659.975,302.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990000").s().p("Ag2BQIAAidIAbAAIAAARQAGgIAKgGQAIgFALAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgJAAgHgDQgIgEgJgKIAAA6gAgSguQgGAIgBAQQAAAUAIAIQAHAJAKAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgIgJgKAAQgKAAgIAJg");
	this.shape_12.setTransform(646.8,304.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AAUA5IAAhYIgnAAIAABYIgfAAIAAhxIBlAAIAABxg");
	this.shape_13.setTransform(632.975,302.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990000").s().p("AgdA0QgOgHgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_14.setTransform(619.775,302.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990000").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBPIAdhPIAlAAIAABxg");
	this.shape_15.setTransform(598.875,302.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990000").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_16.setTransform(584.4258,302.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990000").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABHIAthHIAdAAIAABxg");
	this.shape_17.setTransform(571.65,302.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990000").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAApIAqAAIAAgpIAeAAIAABxg");
	this.shape_18.setTransform(558.25,302.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990000").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_19.setTransform(545.3758,302.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990000").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAApIArAAIAAgpIAeAAIAABxg");
	this.shape_20.setTransform(532.7,302.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990000").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_21.setTransform(518.425,302.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990000").s().p("AgdA0QgOgHgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_22.setTransform(505.375,302.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990000").s().p("AAUA5IAAhYIgnAAIAABYIgfAAIAAhxIBlAAIAABxg");
	this.shape_23.setTransform(491.825,302.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990000").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJACAHAIQAGAIAAAMQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_24.setTransform(475.975,302.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#990000").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAHQgGAHgIADQAMACAGAHQAFAJAAAJQAAAOgJAIQgKAIgTAAgAgYAlIAYAAQAMAAAGgDQAGgDAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANAAAGgDQAGgEAAgIQAAgGgFgEQgGgDgOAAIgUAAg");
	this.shape_25.setTransform(460.125,302.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#990000").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_26.setTransform(745.125,277.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#990000").s().p("AgpAoQgLgQAAgXQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAFQgGASgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_27.setTransform(732.2258,276);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#990000").s().p("Ag3BQIAAidIAcAAIAAARQAGgJAKgFQAJgFAKAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgJAAgHgDQgIgEgJgKIAAA6gAgSguQgGAIgBAQQAAAUAIAIQAHAJAKAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgHgJgLAAQgKAAgIAJg");
	this.shape_28.setTransform(719.8,278.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#990000").s().p("AgpAoQgLgQAAgXQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAFQgGASgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_29.setTransform(706.5258,276);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#990000").s().p("AAUA5IAAhYIgnAAIAABYIgfAAIAAhxIBlAAIAABxg");
	this.shape_30.setTransform(693.725,276);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#990000").s().p("AAWA5IgWgjIgYAjIgjAAIAqg6Igog3IAlAAIAUAfIAUgfIAkAAIgnA2IArA7g");
	this.shape_31.setTransform(674.95,276);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#990000").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABHIAthHIAdAAIAABxg");
	this.shape_32.setTransform(662.1,276);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#990000").s().p("Ag2A5IAAhxIAeAAIAAAvIAdAAQASABAKACQAKACAFAIQAHAIAAAMQAAARgLAIQgMAIgWAAgAgYAmIAbAAQANAAAEgEQAEgEAAgGQAAgJgGgDQgHgDgPAAIgUAAg");
	this.shape_33.setTransform(642.9,276);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#990000").s().p("AgOA5IAAhYIglAAIAAgZIBnAAIAAAZIglAAIAABYg");
	this.shape_34.setTransform(630.4,276);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#990000").s().p("AAbA5IAAgwIgCAAQgLABgEACQgFADgFAIIgBACIgUAgIgjAAIAWghQAJgPAIgBQgNgBgIgIQgIgJAAgOQAAgKAFgJQAGgHAIgDQAIgDASAAIA6AAIAABxgAgKghQgFADAAAIQAAAIAGAEQAFACAMAAIATAAIAAgdIgVAAQgLABgFADg");
	this.shape_35.setTransform(617.8,276);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#990000").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAApIAqAAIAAgpIAeAAIAABxg");
	this.shape_36.setTransform(605.5,276);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#990000").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYAAQAVAAAMAJQANAIAFATIgdAFQgCgJgFgEQgFgFgJAAQgLAAgGAIQgHAHAAATQAAATAHAIQAHAJALAAQAIAAAFgFQAGgFACgLIAeAEQgFAVgNAKQgNALgWAAQgYAAgPgQg");
	this.shape_37.setTransform(592.9,276);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#990000").s().p("AgdA1QgOgIgIgNQgHgOAAgSQAAgQAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_38.setTransform(573.825,276);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990000").s().p("AgmA5IAAhxIBNAAIAAAZIguAAIAABYg");
	this.shape_39.setTransform(563.2,276);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#990000").s().p("AgpAoQgLgQAAgXQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAFQgGASgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_40.setTransform(551.6758,276);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#990000").s().p("AgpAoQgLgQAAgXQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAFQgGASgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_41.setTransform(533.3258,276);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#990000").s().p("AgOA5IAAhYIglAAIAAgZIBnAAIAAAZIglAAIAABYg");
	this.shape_42.setTransform(521.95,276);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#990000").s().p("AAYA5IAAhIIgvBIIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxg");
	this.shape_43.setTransform(509.8,276);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#990000").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYAAQAWAAAMAJQAMAIAGATIgfAFQgBgJgFgEQgGgFgIAAQgLAAgGAIQgHAHAAATQAAATAHAIQAHAJAKAAQAJAAAGgFQAFgFACgLIAeAEQgFAVgNAKQgNALgWAAQgYAAgPgQg");
	this.shape_44.setTransform(497.1,276);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#990000").s().p("AgdA1QgOgIgIgNQgHgOAAgSQAAgQAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_45.setTransform(484.125,276);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#990000").s().p("Ag3BQIAAidIAcAAIAAARQAGgJAKgFQAJgFAKAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgJAAgHgDQgIgEgJgKIAAA6gAgSguQgGAIgBAQQAAAUAIAIQAIAJAJAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgHgJgLAAQgKAAgIAJg");
	this.shape_46.setTransform(470.95,278.05);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#990000").s().p("AAUA5IAAhYIgnAAIAABYIgfAAIAAhxIBlAAIAABxg");
	this.shape_47.setTransform(457.125,276);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#990000").s().p("AgdA1QgOgIgIgNQgHgOAAgSQAAgQAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_48.setTransform(443.925,276);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#990000").s().p("AAUA5IAAhYIgnAAIAABYIgfAAIAAhxIBlAAIAABxg");
	this.shape_49.setTransform(430.375,276);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#990000").s().p("AgPAUQAJgDAEgFQADgFAAgJIgOAAIAAgdIAdAAIAAAVQAAAMgCAHQgCAIgGAGQgGAGgJAEg");
	this.shape_50.setTransform(692.575,255.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#990000").s().p("AAWA5IgWgjIgXAjIgjAAIAog6Igng3IAlAAIAUAfIAVgfIAjAAIgnA2IAqA7g");
	this.shape_51.setTransform(683.55,249.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#990000").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgKgBQgJAAgEADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQACAHAEAIIgeAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgNADgEACQgFAEgBAHQABAGAFAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_52.setTransform(671.35,249.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#990000").s().p("AgwAbIAbgEQAHARAOAAQAJAAAFgFQAFgFAAgFQAAgHgFgEQgFgEgJAAIgEAAIAAgTIAKgBQAEAAADgFQADgDAAgGQAAgFgEgFQgEgEgIAAQgFAAgEACQgFADgEAKIgagFQAEgQANgHQANgIAPABQAVgBALAKQALAJAAAOQAAAJgFAHQgFAFgKAFQANADAGAGQAGAIAAAKQAAAOgMAJQgNAKgXAAQgoAAgJghg");
	this.shape_53.setTransform(659.425,249.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#990000").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAApIApAAIAAgpIAfAAIAABxg");
	this.shape_54.setTransform(647.6,249.45);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#990000").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABHIAthHIAeAAIAABxg");
	this.shape_55.setTransform(634.2,249.45);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#990000").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_56.setTransform(619.825,249.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#990000").s().p("AAXA5IgXgjIgXAjIgjAAIAog6Igng3IAlAAIAUAfIAVgfIAjAAIgnA2IAqA7g");
	this.shape_57.setTransform(601.2,249.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#990000").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJACAHAIQAGAIAAAMQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_58.setTransform(585.775,249.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#990000").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAApIApAAIAAgpIAfAAIAABxg");
	this.shape_59.setTransform(569.65,249.45);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#990000").s().p("AgOA5IAAhYIgkAAIAAgZIBlAAIAAAZIgkAAIAABYg");
	this.shape_60.setTransform(557.65,249.45);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#990000").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgGALAAIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_61.setTransform(547.475,249.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#990000").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQACAHAEAIIgfAAIgCgJIgBgEQgIAIgJAEQgHADgKABQgSAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAIAAQAGABAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_62.setTransform(535.15,249.45);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#990000").s().p("AgOA5IAAhYIglAAIAAgZIBnAAIAAAZIglAAIAABYg");
	this.shape_63.setTransform(523.65,249.45);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#990000").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAApIApAAIAAgpIAfAAIAABxg");
	this.shape_64.setTransform(511.6,249.45);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#990000").s().p("AgdA0QgOgHgIgNQgHgOAAgSQAAgQAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_65.setTransform(498.275,249.45);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#990000").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgGALAAIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_66.setTransform(486.725,249.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#990000").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABHIAthHIAdAAIAABxg");
	this.shape_67.setTransform(716.4,222.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#990000").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_68.setTransform(702.025,223);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#990000").s().p("AAYA5IAAhIIgvBIIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxg");
	this.shape_69.setTransform(688.9,222.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#990000").s().p("AAWA5IgWgjIgYAjIgjAAIAqg6Igog3IAlAAIAUAfIAUgfIAkAAIgnA2IAqA7g");
	this.shape_70.setTransform(669.9,222.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#990000").s().p("AgrAyQgJgJgBgPQAAgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgLgBQgJAAgEADQgFAEgCAIIgbgFQAEgRALgIQALgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQAAAPACAIQABAHAEAIIgdAAIgDgJIgCgEQgHAIgJAEQgIADgJABQgTAAgKgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAIAAQAGABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_71.setTransform(657.7,222.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#990000").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgGALAAIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_72.setTransform(646.775,222.85);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#990000").s().p("AAVA5IAAguQgSAFgIAAQgOAAgLgGQgLgFgEgJQgFgKAAgPIAAgbIAfAAIAAAbQAAAKACAEQABAFAGADQAFADAHAAQAJAAAKgEIAAgwIAeAAIAABxg");
	this.shape_73.setTransform(634.075,222.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#990000").s().p("AgdA0QgOgHgIgNQgHgOAAgSQAAgQAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_74.setTransform(621.125,222.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#990000").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAHQgGAHgIADQAMACAGAHQAFAJAAAJQAAAOgJAIQgKAIgTAAgAgYAlIAYAAQAMAAAGgDQAGgDAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANAAAGgDQAGgEAAgIQAAgGgFgEQgGgDgOAAIgUAAg");
	this.shape_75.setTransform(601.875,222.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#990000").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgGALAAIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_76.setTransform(583.875,222.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#990000").s().p("AAXA5IAAhIIguBIIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxg");
	this.shape_77.setTransform(570.9,222.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#990000").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAApIApAAIAAgpIAfAAIAABxg");
	this.shape_78.setTransform(557.5,222.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#990000").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAFQgGASgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_79.setTransform(544.6258,222.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#990000").s().p("AAVA5IAAguQgSAFgIAAQgOAAgLgGQgLgFgEgJQgFgKAAgPIAAgbIAfAAIAAAbQAAAKACAEQABAFAGADQAFADAHAAQAJAAAKgEIAAgwIAeAAIAABxg");
	this.shape_80.setTransform(532.125,222.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#990000").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_81.setTransform(519.625,225.225);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#990000").s().p("AAYA5IAAhIIguBIIgdAAIAAhxIAdAAIAABHIAthHIAdAAIAABxg");
	this.shape_82.setTransform(500.75,222.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#990000").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_83.setTransform(486.375,223);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#990000").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAZAAQAUAAANAJQAMAIAGATIgfAFQgBgJgGgEQgEgFgJAAQgKAAgHAIQgHAHAAATQAAATAHAIQAHAJAKAAQAJAAAGgFQAFgFACgLIAeAEQgFAVgNAKQgNALgWAAQgYAAgPgQg");
	this.shape_84.setTransform(474.05,222.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#990000").s().p("Ag7BPIAAidIB0AAIAAAbIhUAAIAAAjIBOAAIAAAZIhOAAIAAArIBXAAIAAAbg");
	this.shape_85.setTransform(460.7,220.725);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#990000").s().p("AgqAyQgLgJAAgPQAAgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgMgBQgIAAgEADQgFAEgCAIIgbgFQAEgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQAAAPABAIQABAHAEAIIgdAAIgDgJIgBgEQgIAIgJAEQgIADgJABQgTAAgJgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAIAAQAGABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_86.setTransform(690.65,169.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#990000").s().p("Ag2BQIAAidIAcAAIAAARQAFgIAKgGQAIgFALAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgIAAgIgDQgIgEgJgKIAAA6gAgRguQgIAIAAAQQABAUAHAIQAHAJAKAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgHgJgLAAQgKAAgHAJg");
	this.shape_87.setTransform(678.1,171.85);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#990000").s().p("AgdA1QgOgIgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_88.setTransform(664.375,169.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#990000").s().p("AgOA5IAAhYIglAAIAAgZIBmAAIAAAZIgkAAIAABYg");
	this.shape_89.setTransform(652.25,169.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#990000").s().p("AAXA5IAAhIIguBIIgcAAIAAhxIAcAAIAABHIAuhHIAeAAIAABxg");
	this.shape_90.setTransform(640.1,169.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#990000").s().p("AAVA5IAAgwIgqAAIAAAwIgeAAIAAhxIAeAAIAAApIAqAAIAAgpIAfAAIAABxg");
	this.shape_91.setTransform(626.7,169.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#990000").s().p("AgdA1QgOgIgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_92.setTransform(613.375,169.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#990000").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBPIAdhPIAlAAIAABxg");
	this.shape_93.setTransform(598.575,169.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#990000").s().p("AgqAyQgLgJAAgPQAAgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgMgBQgIAAgEADQgFAEgCAIIgbgFQAEgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQAAAPABAIQABAHAEAIIgdAAIgDgJIgBgEQgIAIgJAEQgIADgJABQgTAAgJgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAIAAQAGABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_94.setTransform(578.15,169.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#990000").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAApIAqAAIAAgpIAeAAIAABxg");
	this.shape_95.setTransform(565.35,169.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#990000").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgMgBQgHAAgFADQgEAEgDAIIgbgFQAEgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQAAAPABAIQABAHAEAIIgeAAIgCgJIgBgEQgIAIgJAEQgHADgKABQgTAAgJgKgAAAAHQgNADgDACQgHAEABAHQAAAGAEAFQAFAEAIAAQAGABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_96.setTransform(552.6,169.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#990000").s().p("Ag2BQIAAidIAbAAIAAARQAGgIAKgGQAJgFAKAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgIAAgIgDQgIgEgJgKIAAA6gAgRguQgIAIAAAQQAAAUAIAIQAHAJAKAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgIgJgKAAQgKAAgHAJg");
	this.shape_97.setTransform(540.05,171.85);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#990000").s().p("AAQA6IgQgiQgDgJgDgDQgEgDgHAAIAAAxIgeAAIAAhyIAeAAIAAAvQAIgBADgDQADgEAEgNQAFgRAHgEQAHgGALAAIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAgg");
	this.shape_98.setTransform(528.225,169.75);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#990000").s().p("Ag0AYIAegGQADASARAAQAKAAAGgHQAGgGABgPIgeAAIAAgRIAfAAQgBgNgGgGQgFgHgKAAQgHAAgGADQgGADgBAIIgegGQALggAmABQAbAAANAPQAOARAAAaQAAAcgOAQQgOAQgaAAQgogBgLgjg");
	this.shape_99.setTransform(515.775,169.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#990000").s().p("AgOA5IAAhYIgkAAIAAgZIBlAAIAAAZIgkAAIAABYg");
	this.shape_100.setTransform(498.4,169.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#990000").s().p("AgdA1QgOgIgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_101.setTransform(486.325,169.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#990000").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgLgBQgJAAgEADQgFAEgCAIIgcgFQAFgRALgIQAMgHAWAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQABAPABAIQACAHADAIIgdAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgNADgEACQgFAEgBAHQABAGAEAFQAFAEAHAAQAHABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_102.setTransform(722.75,143.25);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#990000").s().p("Ag3BQIAAidIAdAAIAAARQAFgIAJgGQAKgFAKAAQAUAAAOAQQAOAPAAAcQAAAbgOARQgOAPgUAAQgIAAgIgDQgIgEgIgKIAAA6gAgRguQgIAIABAQQAAAUAHAIQAIAJAKAAQAKAAAHgIQAHgHAAgUQAAgSgHgIQgHgJgLAAQgKAAgHAJg");
	this.shape_103.setTransform(710.2,145.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#990000").s().p("AgOA5IAAhYIglAAIAAgZIBnAAIAAAZIglAAIAABYg");
	this.shape_104.setTransform(697.8,143.25);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#990000").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_105.setTransform(686.1758,143.25);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#990000").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBPIAdhPIAlAAIAABxg");
	this.shape_106.setTransform(672.125,143.25);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#990000").s().p("AgdA1QgOgIgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_107.setTransform(651.125,143.25);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#990000").s().p("AglA5IAAhxIBLAAIAAAZIgtAAIAABYg");
	this.shape_108.setTransform(640.5,143.25);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#990000").s().p("AgdA1QgOgIgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_109.setTransform(628.525,143.25);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#990000").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAApIApAAIAAgpIAfAAIAABxg");
	this.shape_110.setTransform(615.1,143.25);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#990000").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_111.setTransform(601.175,144.75);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#990000").s().p("AgdA1QgOgIgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_112.setTransform(587.825,143.25);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#990000").s().p("AAXA5IAAhIIguBIIgcAAIAAhxIAcAAIAABHIAuhHIAeAAIAABxg");
	this.shape_113.setTransform(568.2,143.25);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#990000").s().p("AAXA5IAAhIIguBIIgcAAIAAhxIAcAAIAABHIAuhHIAeAAIAABxg");
	this.shape_114.setTransform(554.7,143.25);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#990000").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAApIApAAIAAgpIAfAAIAABxg");
	this.shape_115.setTransform(541.3,143.25);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#990000").s().p("AAbA5IAAgwIgCAAQgLABgEACQgFADgFAIIgBACIgUAgIgjAAIAVghQAKgPAHgBQgMgBgIgIQgIgJAAgOQAAgKAFgJQAGgHAIgDQAIgDASAAIA6AAIAABxgAgKghQgFADAAAIQAAAIAGAEQAFACAMAAIATAAIAAgdIgVAAQgMABgEADg");
	this.shape_116.setTransform(527.45,143.25);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#990000").s().p("AgdA1QgOgIgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgHgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_117.setTransform(515.125,143.25);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#990000").s().p("AgOA5IAAhYIgkAAIAAgZIBlAAIAAAZIgkAAIAABYg");
	this.shape_118.setTransform(503,143.25);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#990000").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYAAQAVAAAMAJQANAIAFATIgdAFQgCgJgGgEQgEgFgJAAQgLAAgGAIQgHAHAAATQAAATAHAIQAHAJALAAQAIAAAFgFQAGgFACgLIAeAEQgFAVgNAKQgNALgWAAQgYAAgPgQg");
	this.shape_119.setTransform(491.65,143.25);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#990000").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYAAQAWAAAMAJQAMAIAFATIgdAFQgCgJgFgEQgGgFgIAAQgLAAgGAIQgHAHAAATQAAATAHAIQAHAJAKAAQAJAAAFgFQAGgFACgLIAeAEQgFAVgNAKQgNALgWAAQgYAAgPgQg");
	this.shape_120.setTransform(479.4,143.25);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#990000").s().p("AgqAyQgLgJAAgPQAAgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgMgBQgIAAgEADQgEAEgDAIIgbgFQAEgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQAAAPABAIQABAHAEAIIgdAAIgDgJIgBgEQgIAIgJAEQgIADgJABQgTAAgJgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAIAAQAGABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_121.setTransform(467,143.25);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#990000").s().p("Ag2BQIAAidIAcAAIAAARQAFgIAKgGQAIgFALAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgIAAgIgDQgIgEgJgKIAAA6gAgRguQgIAIAAAQQABAUAHAIQAHAJALAAQAKAAAHgIQAHgHAAgUQAAgSgHgIQgHgJgLAAQgKAAgHAJg");
	this.shape_122.setTransform(454.45,145.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#990000").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQABAHAFAIIgfAAIgDgJIAAgEQgIAIgJAEQgHADgKABQgSAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_123.setTransform(704,116.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#990000").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAApIArAAIAAgpIAeAAIAABxg");
	this.shape_124.setTransform(691.2,116.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#990000").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAIQgGAGgIADQAMACAGAHQAFAJAAAJQAAAOgJAIQgKAIgTAAgAgYAlIAYAAQAMAAAGgCQAGgEAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANAAAGgDQAGgEAAgIQAAgGgFgEQgGgDgOAAIgUAAg");
	this.shape_125.setTransform(672.075,116.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#990000").s().p("AgdA0QgOgHgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_126.setTransform(658.275,116.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#990000").s().p("AAQA6IgQgiQgDgJgDgDQgEgDgHAAIAAAxIgeAAIAAhyIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgGALAAIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAgg");
	this.shape_127.setTransform(646.725,116.65);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#990000").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABHIAthHIAeAAIAABxg");
	this.shape_128.setTransform(633.75,116.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#990000").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAApIAqAAIAAgpIAeAAIAABxg");
	this.shape_129.setTransform(620.35,116.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#990000").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAFQgGASgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_130.setTransform(607.4758,116.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#990000").s().p("AAVA5IAAguQgSAFgIAAQgOAAgLgGQgLgFgEgJQgFgKAAgPIAAgbIAfAAIAAAbQAAAKACAEQABAFAGADQAFADAHAAQAJAAAKgEIAAgwIAeAAIAABxg");
	this.shape_131.setTransform(594.975,116.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#990000").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_132.setTransform(582.475,119.025);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#990000").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAFQgGASgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_133.setTransform(564.1258,116.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#990000").s().p("AgOA5IAAhYIglAAIAAgZIBnAAIAAAZIglAAIAABYg");
	this.shape_134.setTransform(552.75,116.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#990000").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABHIAthHIAdAAIAABxg");
	this.shape_135.setTransform(540.6,116.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#990000").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_136.setTransform(526.575,118.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#990000").s().p("AgqAyQgLgJAAgPQAAgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgLgBQgJAAgEADQgFAEgCAIIgbgFQAEgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQAAAPABAIQABAHAEAIIgeAAIgCgJIgBgEQgIAIgJAEQgIADgJABQgTAAgJgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAIAAQAGABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_137.setTransform(513.8,116.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#990000").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYAAQAWAAAMAJQAMAIAGATIgfAFQgBgJgFgEQgGgFgIAAQgLAAgGAIQgHAHAAATQAAATAHAIQAHAJAKAAQAJAAAGgFQAFgFACgLIAeAEQgFAVgNAKQgNALgWAAQgYAAgPgQg");
	this.shape_138.setTransform(501.7,116.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#990000").s().p("AgdA0QgOgHgIgNQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_139.setTransform(488.725,116.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#990000").s().p("AAfBPIAAiCIg9AAIAACCIgfAAIAAidIB8AAIAACdg");
	this.shape_140.setTransform(474.05,114.525);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#002277").s().p("Ag1AzQgOgUAAgeQAAgjATgVQATgUAdAAQAfAAATAVQATAWgBArIhfAAQAAARAJAJQAJAKAMAAQAJAAAGgFQAGgFADgLIAnAHQgIAVgQALQgQALgXAAQglAAgTgZgAgTglQgIAKAAAQIA5AAQgBgRgIgJQgIgIgMAAQgMgBgIAJg");
	this.shape_141.setTransform(666.5275,476.25);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#002277").s().p("AArBcIAAgnIh0AAIAAiQIAnAAIAABxIA2AAIAAhxIAnAAIAABxIAOAAIAABGg");
	this.shape_142.setTransform(650.85,478.175);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#002277").s().p("AAeBIIAAhbIg7BbIglAAIAAiQIAlAAIAABaIA6haIAmAAIAACQg");
	this.shape_143.setTransform(633.05,476.25);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#002277").s().p("AAcBIIAAg9Ig2AAIAAA9IgnAAIAAiQIAnAAIAAA1IA2AAIAAg1IAmAAIAACQg");
	this.shape_144.setTransform(616,476.25);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#002277").s().p("Ag2A/QgNgLAAgTQAAgMAGgKQAFgJALgFQALgFAUgEQAagFAKgEIAAgEQAAgLgGgFQgFgEgOAAQgKgBgGAEQgGAFgDAJIgjgGQAGgUAOgLQAOgKAdAAQAYAAANAGQAMAGAGAJQAFAKAAAZIgBAsQAAATACAJQACAJAFAKIgmAAIgEgLIgBgFQgKAKgLAFQgKAFgNAAQgWAAgNgNgAAAAIQgQAEgFAEQgIAEAAAJQAAAIAGAGQAGAGAJAAQAKAAAJgHQAHgGACgHQACgFAAgOIAAgHIgWAFg");
	this.shape_145.setTransform(599.825,476.25);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#002277").s().p("AhGBmIAAjHIAkAAIAAAVQAHgLAMgHQAMgHANAAQAaAAARAUQASAUAAAjQAAAkgSAUQgSAUgZAAQgLAAgKgFQgKgFgKgLIAABJgAgWg7QgKAKAAAWQAAAYAKALQAKAMANAAQANAAAJgLQAJgKAAgYQAAgXgJgLQgKgLgNAAQgNAAgJALg");
	this.shape_146.setTransform(583.925,478.825);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#002277").s().p("AgSBIIAAhwIgvAAIAAggICDAAIAAAgIgvAAIAABwg");
	this.shape_147.setTransform(568.125,476.25);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#002277").s().p("AgxA3QgSgUgBgjQABgjASgUQAUgUAfAAQAaAAARALQAPAMAGAXIglAHQgCgLgHgGQgGgGgLAAQgOAAgJAKQgIAKAAAYQAAAYAJALQAIAKAOAAQALABAHgHQAHgGADgPIAlAHQgFAagRAMQgRAOgbAAQgfAAgUgVg");
	this.shape_148.setTransform(553.7,476.25);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#002277").s().p("AAeBmIAAhdIg7BdIglAAIAAiQIAlAAIAABaIA6haIAmAAIAACQgAgchIQgLgLgCgSIATAAQABAJAGAGQAGAEAKAAQALAAAHgEQAFgGABgJIATAAQgCASgLALQgLALgTgBQgRABgMgLg");
	this.shape_149.setTransform(529.3,473.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#002277").s().p("AglBDQgSgKgJgQQgKgSAAgYQAAgTAKgSQAJgSASgJQAQgKAVAAQAhAAAVAVQAVAWAAAgQAAAhgVAVQgVAWghAAQgTAAgSgJgAgYggQgLALAAAVQAAAVALAMQAKALAOAAQAPAAAKgLQALgMgBgVQABgUgLgMQgKgMgPAAQgOAAgKAMg");
	this.shape_150.setTransform(512.25,476.25);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#002277").s().p("AA3BcIAAgnIhtAAIAAAnIgfAAIAAhGIAQAAQAJgLAHgWQAGgYABg4IB1AAIAABxIAPAAIAABGgAggAWIBBAAIAAhRIguAAQgCA7gRAWg");
	this.shape_151.setTransform(494.425,478.175);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#002277").s().p("AA6BJIgSgqQgFgLgEgFQgEgEgIAAIAAA+IgmAAIAAg+QgHAAgDADQgCADgIAOIgSAqIgqAAIAVgoQAPgeARgEQgNgFgGgTQgFgPgEgDQgFgDgOAAIAAgZIAPgBQANAAAJAFQAJAGAIAWQAGARADAGQAFAEAGAAIAAg7IAmAAIAAA7QAIAAADgEQAEgGAGgRQAIgVAJgHQAIgFAOAAIAQABIAAAZQgQAAgEADQgEADgFAPQgHATgMAFQAQAEAQAeIAUAog");
	this.shape_152.setTransform(476,476.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#002277").s().p("Ag2A/QgNgLAAgTQAAgMAGgKQAFgJALgFQALgFAUgEQAagFAKgEIAAgEQAAgLgGgFQgFgEgOAAQgKgBgGAEQgGAFgDAJIgjgGQAGgUAOgLQAOgKAdAAQAYAAANAGQAMAGAGAJQAFAKAAAZIgBAsQAAATACAJQACAJAFAKIgmAAIgEgLIgBgFQgKAKgLAFQgKAFgNAAQgWAAgNgNgAAAAIQgQAEgFAEQgIAEAAAJQAAAIAGAGQAGAGAJAAQAKAAAJgHQAHgGACgHQACgFAAgOIAAgHIgWAFg");
	this.shape_153.setTransform(458.325,476.25);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#002277").s().p("AATBJIgSgqQgFgMgFgEQgEgEgJAAIAAA+IgmAAIAAiQIAmAAIAAA7QAKgBAEgEQAEgGAFgQQAHgVAJgGQAIgGAOAAIAQABIAAAZQgQAAgDADQgFADgEAPQgIAUgMAEQASAEANAbIABADIAWAog");
	this.shape_154.setTransform(444.45,476.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#002277").s().p("Ag2A/QgNgLAAgTQAAgMAGgKQAFgJALgFQALgFAUgEQAagFAKgEIAAgEQAAgLgGgFQgFgEgOAAQgKgBgGAEQgGAFgDAJIgjgGQAGgUAOgLQAOgKAdAAQAYAAANAGQAMAGAGAJQAFAKAAAZIgBAsQAAATACAJQACAJAFAKIgmAAIgEgLIgBgFQgKAKgLAFQgKAFgNAAQgWAAgNgNgAAAAIQgQAEgFAEQgIAEAAAJQAAAIAGAGQAGAGAJAAQAKAAAJgHQAHgGACgHQACgFAAgOIAAgHIgWAFg");
	this.shape_155.setTransform(420.975,476.25);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#002277").s().p("AAbBIIAAg9Ig2AAIAAA9IgmAAIAAiQIAmAAIAAA1IA2AAIAAg1IAnAAIAACQg");
	this.shape_156.setTransform(404.7,476.25);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#002277").s().p("AAeBIIAAhbIg7BbIglAAIAAiQIAlAAIAABaIA6haIAmAAIAACQg");
	this.shape_157.setTransform(379.85,476.25);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#002277").s().p("AAeBIIAAhbIg7BbIglAAIAAiQIAlAAIAABaIA6haIAmAAIAACQg");
	this.shape_158.setTransform(362.65,476.25);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#002277").s().p("AAqBcIAAgnIhzAAIAAiQIAnAAIAABxIA2AAIAAhxIAmAAIAABxIAQAAIAABGg");
	this.shape_159.setTransform(346.05,478.175);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#002277").s().p("AATBJIgTgqQgEgMgFgEQgEgEgIAAIAAA+IgnAAIAAiQIAnAAIAAA7QAJgBAEgEQAEgGAEgQQAIgVAJgGQAJgGANAAIAQABIAAAZQgPAAgEADQgFADgFAPQgHAUgMAEQASAEANAbIABADIAWAog");
	this.shape_160.setTransform(330.8,476.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#002277").s().p("Ag9BjIgDgdQAIACAIAAQAOAAAGgJQAGgIAEgLIg3iRIAoAAIAiBmIAihmIAnAAIgyCKIgJAaQgGAMgFAHQgEAHgFAEQgGAEgIACQgJADgLAAQgLAAgLgDg");
	this.shape_161.setTransform(314.95,479.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#002277").s().p("AhGBmIAAjHIAkAAIAAAVQAHgLAMgHQAMgHANAAQAaAAARAUQASAUAAAjQAAAkgSAUQgSAUgZAAQgLAAgKgFQgKgFgKgLIAABJgAgWg7QgKAKAAAWQAAAYAKALQAKAMANAAQANAAAJgLQAJgKAAgYQAAgXgJgLQgKgLgNAAQgNAAgJALg");
	this.shape_162.setTransform(299.225,478.825);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#002277").s().p("AgSBIIAAhwIgvAAIAAggICDAAIAAAgIgvAAIAABwg");
	this.shape_163.setTransform(283.425,476.25);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#002277").s().p("AgwA3QgUgUABgjQgBgjAUgUQATgUAfAAQAaAAAQALQAQAMAHAXIgmAHQgCgLgHgGQgHgGgKAAQgOAAgJAKQgIAKAAAYQAAAYAJALQAIAKAOAAQALABAHgHQAHgGADgPIAmAHQgGAagRAMQgQAOgcAAQggAAgSgVg");
	this.shape_164.setTransform(269,476.25);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#002277").s().p("AAcBIIAAg9Ig2AAIAAA9IgnAAIAAiQIAnAAIAAA1IA2AAIAAg1IAmAAIAACQg");
	this.shape_165.setTransform(252.55,476.25);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#002277").s().p("AAeBIIAAhbIg7BbIglAAIAAiQIAlAAIAABaIA6haIAmAAIAACQg");
	this.shape_166.setTransform(235.5,476.25);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#002277").s().p("AhFBIIAAiQIAmAAIAAA9IAmAAQAXgBAMAEQAMADAIAKQAIALAAAPQAAAUgPALQgOAKgdAAgAgfAwIAjAAQARAAAFgFQAFgGgBgIQAAgKgIgEQgIgEgUAAIgZAAg");
	this.shape_167.setTransform(211,476.25);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#002277").s().p("AgSBIIAAhwIgvAAIAAggICDAAIAAAgIgvAAIAABwg");
	this.shape_168.setTransform(195.075,476.25);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#002277").s().p("Ag2A/QgNgLAAgTQAAgMAGgKQAFgJALgFQALgFAUgEQAagFAKgEIAAgEQAAgLgGgFQgFgEgOAAQgKgBgGAEQgGAFgDAJIgjgGQAGgUAOgLQAOgKAdAAQAYAAANAGQAMAGAGAJQAFAKAAAZIgBAsQAAATACAJQACAJAFAKIgmAAIgEgLIgBgFQgKAKgLAFQgKAFgNAAQgWAAgNgNgAAAAIQgQAEgFAEQgIAEAAAJQAAAIAGAGQAGAGAJAAQAKAAAJgHQAHgGACgHQACgFAAgOIAAgHIgWAFg");
	this.shape_169.setTransform(180.475,476.25);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#002277").s().p("AgSBIIAAhwIgvAAIAAggICDAAIAAAgIgvAAIAABwg");
	this.shape_170.setTransform(165.825,476.25);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#002277").s().p("AAeBIIAAhbIg7BbIglAAIAAiQIAlAAIAABaIA6haIAmAAIAACQg");
	this.shape_171.setTransform(150.35,476.25);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#002277").s().p("AAaBIIAAg5QgWAFgLAAQgSABgOgIQgOgHgFgMQgGgLABgUIAAgjIAmAAIAAAjQABAMABAGQADAFAGAFQAIAEAJAAQAKAAANgFIAAg+IAmAAIAACQg");
	this.shape_172.setTransform(133.5,476.25);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#002277").s().p("AgkBDQgTgKgKgQQgJgSAAgYQAAgTAJgSQAKgSARgJQASgKAUAAQAhAAAVAVQAVAWAAAgQAAAhgVAVQgVAWggAAQgUAAgRgJgAgYggQgKALAAAVQAAAVAKAMQAKALAOAAQAPAAALgLQAJgMABgVQgBgUgJgMQgLgMgPAAQgOAAgKAMg");
	this.shape_173.setTransform(756.2,442.95);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#002277").s().p("AAbBIIAAg9Ig2AAIAAA9IgmAAIAAiQIAmAAIAAA2IA2AAIAAg2IAnAAIAACQg");
	this.shape_174.setTransform(739.15,442.95);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#002277").s().p("AhFBIIAAiQIAnAAIAAA9IAlAAQAWgBAMAEQANADAIAKQAIALAAAPQAAAUgOALQgPAKgcAAgAgeAwIAiAAQARAAAFgFQAEgGABgIQgBgKgHgEQgJgEgTAAIgZAAg");
	this.shape_175.setTransform(722.6,442.95);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#002277").s().p("AhNBHIAAgcIAHAAIAJABQAIAAABgFQACgGAAgXIAAhTICAAAIAACQIgmAAIAAhxIg0AAIAABAQAAAZgFAKQgGAKgHAEQgHADgQAAQgJAAgPgDg");
	this.shape_176.setTransform(703.825,443.075);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#002277").s().p("Ag1AzQgOgUAAgeQAAgjATgVQATgUAdAAQAfAAATAVQATAWgBArIhfAAQAAARAJAJQAJAKAMAAQAJAAAGgFQAGgFADgLIAnAHQgIAVgQALQgQALgXAAQglAAgTgZgAgTglQgIAKAAAQIA5AAQgBgRgIgJQgIgIgMgBQgMAAgIAJg");
	this.shape_177.setTransform(687.8275,442.95);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#002277").s().p("AgSBIIAAhwIgvAAIAAggICDAAIAAAgIgvAAIAABwg");
	this.shape_178.setTransform(673.325,442.95);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#002277").s().p("Ag2A/QgNgLAAgTQAAgMAGgKQAFgJALgFQALgFAUgEQAagFAKgEIAAgEQAAgLgGgFQgFgEgOgBQgKAAgGAEQgGAFgDAKIgjgHQAGgUAOgLQAOgKAdAAQAYAAANAGQAMAGAGAJQAFAKAAAZIgBAsQAAATACAJQACAJAFAKIgmAAIgEgLIgBgFQgKAKgLAFQgKAFgNAAQgWAAgNgNgAAAAIQgQAEgFAEQgIAEAAAJQAAAIAGAGQAGAGAJAAQAKAAAJgHQAHgGACgHQACgFAAgOIAAgHIgWAFg");
	this.shape_179.setTransform(658.725,442.95);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#002277").s().p("AAzBIIAAheIgjBeIggAAIgiheIAABeIghAAIAAiQIAwAAIAjBkIAkhkIAwAAIAACQg");
	this.shape_180.setTransform(640.675,442.95);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#002277").s().p("AAeBIIAAhbIg7BbIglAAIAAiQIAlAAIAABaIA6haIAmAAIAACQg");
	this.shape_181.setTransform(621.6,442.95);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#002277").s().p("AAcBIIAAg9Ig2AAIAAA9IgnAAIAAiQIAnAAIAAA2IA2AAIAAg2IAmAAIAACQg");
	this.shape_182.setTransform(604.55,442.95);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#002277").s().p("AhFBIIAAiQIBTAAQAaAAANAJQAMAKAAATQAAANgHAJQgHAIgKADQAPADAHAKQAHALAAALQAAARgMALQgMAKgZAAgAgfAwIAfAAQAPAAAIgEQAHgEAAgLQAAgKgIgEQgJgEgYAAIgUAAgAgfgLIAZAAQARgBAIgEQAIgFAAgJQAAgJgHgEQgIgEgSAAIgZAAg");
	this.shape_183.setTransform(587.975,442.95);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#002277").s().p("AA+BIIAAiQIAmAAIAACQgAhjBIIAAiQIAmAAIAAA9IAnAAQAWgBALAEQAMADAJAKQAIAKAAAQQAAAUgPALQgOAKgcAAgAg9AwIAkAAQAOAAAGgEQAFgFAAgKQAAgKgHgEQgIgEgVAAIgZAAg");
	this.shape_184.setTransform(559.275,442.95);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#002277").s().p("AAcBIIAAg9Ig2AAIAAA9IgnAAIAAiQIAnAAIAAA2IA2AAIAAg2IAmAAIAACQg");
	this.shape_185.setTransform(538.75,442.95);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#002277").s().p("AA6BJIgSgqQgFgLgEgFQgFgEgHAAIAAA+IglAAIAAg+QgIAAgDADQgDADgHAOIgTAqIgoAAIAUgoQAQgeARgEQgOgFgGgTQgFgPgEgDQgEgDgQAAIAAgZIAQgBQANAAAJAFQAJAGAIAWQAGARADAGQAFAEAHAAIAAg7IAlAAIAAA7QAHAAAEgEQAEgGAGgRQAHgVAJgHQAJgFAOAAIAPABIAAAZQgPAAgEADQgFADgEAPQgHATgMAFQAQAEAQAeIAVAog");
	this.shape_186.setTransform(520.4,442.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#002277").s().p("AhNBHIAAgcIAHAAIAJABQAIAAABgFQACgGAAgXIAAhTICAAAIAACQIgmAAIAAhxIg0AAIAABAQAAAZgFAKQgGAKgHAEQgHADgQAAQgJAAgPgDg");
	this.shape_187.setTransform(500.775,443.075);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#002277").s().p("AglBDQgSgKgKgQQgJgSAAgYQAAgTAJgSQAKgSARgJQARgKAVAAQAhAAAVAVQAVAWAAAgQAAAhgVAVQgWAWgfAAQgTAAgTgJgAgYggQgLALABAVQgBAVALAMQAKALAOAAQAPAAAKgLQAKgMAAgVQAAgUgKgMQgKgMgPAAQgOAAgKAMg");
	this.shape_188.setTransform(484.2,442.95);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#002277").s().p("AA3BcIAAgnIhtAAIAAAnIgfAAIAAhGIAQAAQAJgLAHgWQAGgYABg4IB1AAIAABxIAPAAIAABGgAggAWIBBAAIAAhRIguAAQgCA7gRAWg");
	this.shape_189.setTransform(466.375,444.875);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#002277").s().p("AAeBIIAAhbIg7BbIglAAIAAiQIAlAAIAABaIA6haIAmAAIAACQg");
	this.shape_190.setTransform(441.45,442.95);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#002277").s().p("AAbBIIAAg9Ig2AAIAAA9IgmAAIAAiQIAmAAIAAA2IA2AAIAAg2IAnAAIAACQg");
	this.shape_191.setTransform(424.4,442.95);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#002277").s().p("AglBDQgSgKgKgQQgJgSAAgYQAAgTAJgSQAKgSARgJQARgKAVAAQAhAAAVAVQAVAWAAAgQAAAhgVAVQgVAWghAAQgTAAgSgJgAgYggQgLALAAAVQAAAVALAMQAKALAOAAQAPAAAKgLQALgMgBgVQABgUgLgMQgKgMgPAAQgOAAgKAMg");
	this.shape_192.setTransform(407.5,442.95);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#002277").s().p("AglBDQgSgKgJgQQgKgSAAgYQAAgTAKgSQAJgSASgJQAQgKAVAAQAhAAAVAVQAVAWAAAgQAAAhgVAVQgVAWghAAQgTAAgSgJgAgYggQgLALAAAVQAAAVALAMQAKALAOAAQAPAAAKgLQALgMgBgVQABgUgLgMQgKgMgPAAQgOAAgKAMg");
	this.shape_193.setTransform(382.65,442.95);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#002277").s().p("AgSBIIAAhwIgvAAIAAggICDAAIAAAgIgvAAIAABwg");
	this.shape_194.setTransform(367.225,442.95);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#002277").s().p("AAaBIIAAg5QgXAFgKAAQgSABgOgIQgOgHgFgMQgGgLABgUIAAgjIAnAAIAAAjQAAAMABAGQADAFAGAFQAIAEAJAAQAKAAANgFIAAg+IAnAAIAACQg");
	this.shape_195.setTransform(352.1,442.95);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#002277").s().p("AgUAaQAMgEAFgGQAEgIAAgKIgSAAIAAgnIAmAAIAAAcQAAAQgDAJQgDAKgIAHQgHAIgMAFg");
	this.shape_196.setTransform(332.175,450.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#002277").s().p("AAzBIIAAheIgjBeIggAAIgiheIAABeIghAAIAAiQIAwAAIAjBkIAkhkIAwAAIAACQg");
	this.shape_197.setTransform(318.275,442.95);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#002277").s().p("Ag2A/QgNgLAAgTQAAgMAGgKQAFgJALgFQALgFAUgEQAagFAKgEIAAgEQAAgLgGgFQgFgEgOgBQgKAAgGAEQgGAFgDAKIgjgHQAGgUAOgLQAOgKAdAAQAYAAANAGQAMAGAGAJQAFAKAAAZIgBAsQAAATACAJQACAJAFAKIgmAAIgEgLIgBgFQgKAKgLAFQgKAFgNAAQgWAAgNgNgAAAAIQgQAEgFAEQgIAEAAAJQAAAIAGAGQAGAGAJAAQAKAAAJgHQAHgGACgHQACgFAAgOIAAgHIgWAFg");
	this.shape_198.setTransform(300.075,442.95);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#002277").s().p("AAUBJIgTgqQgGgMgEgEQgEgEgJAAIAAA+IgmAAIAAiQIAmAAIAAA7QAKgBAEgEQAEgGAFgQQAHgVAIgGQAKgGAOAAIAPABIAAAZQgPAAgFADQgEADgFAPQgGAUgNAEQASAFANAaIACADIAVAog");
	this.shape_199.setTransform(286.2,442.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#002277").s().p("AAeBIIAAhbIg7BbIglAAIAAiQIAlAAIAABaIA6haIAmAAIAACQg");
	this.shape_200.setTransform(269.65,442.95);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#002277").s().p("AAbBIIAAg9Ig2AAIAAA9IgmAAIAAiQIAmAAIAAA2IA2AAIAAg2IAnAAIAACQg");
	this.shape_201.setTransform(252.6,442.95);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#002277").s().p("Ag1AzQgOgUAAgeQAAgjATgVQATgUAdAAQAfAAATAVQATAWgBArIhfAAQAAARAJAJQAJAKAMAAQAJAAAGgFQAGgFADgLIAnAHQgIAVgQALQgQALgXAAQglAAgTgZgAgTglQgIAKAAAQIA5AAQgBgRgIgJQgIgIgMgBQgMAAgIAJg");
	this.shape_202.setTransform(236.2775,442.95);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#002277").s().p("AAaBIIAAg5QgWAFgLAAQgSABgOgIQgOgHgFgMQgGgLABgUIAAgjIAnAAIAAAjQgBAMACAGQADAFAGAFQAIAEAJAAQAKAAANgFIAAg+IAnAAIAACQg");
	this.shape_203.setTransform(220.35,442.95);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#002277").s().p("Ag9BkIgDgeQAJACAHAAQAOAAAGgIQAGgJAEgLIg3iRIAoAAIAiBmIAihmIAnAAIgyCKIgJAaQgGAMgEAHQgFAHgFAEQgGAEgIADQgJACgLAAQgLAAgLgCg");
	this.shape_204.setTransform(204.45,445.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#002277").s().p("Ag1AzQgOgUAAgeQAAgjATgVQATgUAdAAQAfAAATAVQATAWgBArIhfAAQAAARAJAJQAJAKAMAAQAJAAAGgFQAGgFADgLIAnAHQgIAVgQALQgQALgXAAQglAAgTgZgAgTglQgIAKAAAQIA5AAQgBgRgIgJQgIgIgMgBQgMAAgIAJg");
	this.shape_205.setTransform(181.1275,442.95);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#002277").s().p("AgSBIIAAhwIgvAAIAAggICDAAIAAAgIgvAAIAABwg");
	this.shape_206.setTransform(166.625,442.95);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#002277").s().p("AAeBIIAAhbIg7BbIglAAIAAiQIAlAAIAABaIA6haIAmAAIAACQg");
	this.shape_207.setTransform(151.15,442.95);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#002277").s().p("AAcBIIAAg9Ig3AAIAAA9IgmAAIAAiQIAmAAIAAA2IA3AAIAAg2IAmAAIAACQg");
	this.shape_208.setTransform(134.1,442.95);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#002277").s().p("AAzBIIAAheIgjBeIggAAIgiheIAABeIghAAIAAiQIAwAAIAjBkIAkhkIAwAAIAACQg");
	this.shape_209.setTransform(115.425,442.95);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#002277").s().p("AgkBDQgTgKgKgQQgJgSAAgYQAAgTAJgSQAKgSARgJQASgKAUAAQAhAAAVAVQAVAWAAAgQAAAhgVAVQgVAWggAAQgUAAgRgJgAgYggQgKALAAAVQAAAVAKAMQAKALAOAAQAPAAALgLQAJgMABgVQgBgUgJgMQgLgMgPAAQgOAAgKAMg");
	this.shape_210.setTransform(96.5,442.95);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#002277").s().p("AAaBIIAAhwIgzAAIAABwIgnAAIAAiQICBAAIAACQg");
	this.shape_211.setTransform(79.3,442.95);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#002277").s().p("Ag2A/QgNgLAAgTQAAgMAGgKQAFgJALgFQALgFAUgEQAagFAKgEIAAgEQAAgLgGgFQgFgEgOgBQgKAAgGAEQgGAFgDAKIgjgHQAGgUAOgLQAOgKAdAAQAYAAANAGQAMAGAGAJQAFAKAAAZIgBAsQAAATACAJQACAJAFAKIgmAAIgEgLIgBgFQgKAKgLAFQgKAFgNAAQgWAAgNgNgAAAAIQgQAEgFAEQgIAEAAAJQAAAIAGAGQAGAGAJAAQAKAAAJgHQAHgGACgHQACgFAAgOIAAgHIgWAFg");
	this.shape_212.setTransform(63.275,442.95);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#002277").s().p("AAoBkIAAhXIhPAAIAABXIgoAAIAAjHIAoAAIAABPIBPAAIAAhPIAoAAIAADHg");
	this.shape_213.setTransform(45.3,440.175);

	this.instance_1 = new lib.Child1();
	this.instance_1.setTransform(44,51,0.3613,0.3418);

	this.DontknowBtn = new lib.КнопкаDontknowBtnнебесная();
	this.DontknowBtn.name = "DontknowBtn";
	this.DontknowBtn.setTransform(660,545);
	new cjs.ButtonHelper(this.DontknowBtn, 0, 1, 2);

	this.BtnVisusOD = new lib.КнопкаBtnVisusODнебесная();
	this.BtnVisusOD.name = "BtnVisusOD";
	this.BtnVisusOD.setTransform(400,545);
	new cjs.ButtonHelper(this.BtnVisusOD, 0, 1, 2);

	this.DontknowBtnOD = new lib.КнопкаDontknowBtnнебесная();
	this.DontknowBtnOD.name = "DontknowBtnOD";
	this.DontknowBtnOD.setTransform(660,545);
	new cjs.ButtonHelper(this.DontknowBtnOD, 0, 1, 2);

	this.BtnVisusOS = new lib.КнопкаBtnVisusODнебесная();
	this.BtnVisusOS.name = "BtnVisusOS";
	this.BtnVisusOS.setTransform(400,545);
	new cjs.ButtonHelper(this.BtnVisusOS, 0, 1, 2);

	this.DontknowBtnOS = new lib.КнопкаDontknowBtnнебесная();
	this.DontknowBtnOS.name = "DontknowBtnOS";
	this.DontknowBtnOS.setTransform(660,545);
	new cjs.ButtonHelper(this.DontknowBtnOS, 0, 1, 2);

	this.Astig_OS = new cjs.Text("", "bold 18px 'Arial'", "#002277");
	this.Astig_OS.name = "Astig_OS";
	this.Astig_OS.textAlign = "center";
	this.Astig_OS.lineHeight = 22;
	this.Astig_OS.lineWidth = 214;
	this.Astig_OS.parent = this;
	this.Astig_OS.setTransform(652.7,360.25);

	this.BtnInList = new lib.Символ8();
	this.BtnInList.name = "BtnInList";
	this.BtnInList.setTransform(631,448.2,1,1,0,0,0,125,25);
	new cjs.ButtonHelper(this.BtnInList, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Arrow}]},2).to({state:[{t:this.instance_1},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.BtnGoOn},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.DontknowBtn}]},3).to({state:[{t:this.BtnVisusOD}]},1).to({state:[{t:this.DontknowBtnOD}]},1).to({state:[{t:this.BtnVisusOS}]},1).to({state:[{t:this.DontknowBtnOS}]},1).to({state:[]},1).to({state:[{t:this.BtnInList},{t:this.Astig_OS}]},13).to({state:[]},1).wait(1));

	// content
	this.BtnReg = new lib.КнопкаBtnRegнебесная();
	this.BtnReg.name = "BtnReg";
	this.BtnReg.setTransform(400,545);
	new cjs.ButtonHelper(this.BtnReg, 0, 1, 2);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(142,207.6,1,1,0,0,0,85,53.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#002277").s().p("AgRBdIAAgWQgtgCgSgTQgTgVABgeQgBggAUgUQASgTAsgCIAAgSIAkAAIAAASQAsACASAUQATAVAAAeQAAAegTAVQgSATgsACIAAAWgAATAoQAOAAALgFQAKgFAEgIQAFgIAAgQQAAgogsAAgAgzgfQgLAKAAAVQgBAoAuAAIAAhSQgYAAgKALg");
	this.shape_214.setTransform(551,255.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#002277").s().p("AhGBdIAAi5IA8AAQAhAAALACQAQAFAKAOQALAOAAAWQAAARgGAMQgGAKgKAIQgJAGgKACQgOADgYAAIgZAAIAABGgAghgIIAVAAQAVAAAIgCQAHgDAEgHQAFgGAAgJQAAgJgGgHQgGgGgKgCQgGgCgUAAIgSAAg");
	this.shape_215.setTransform(531.575,255.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#002277").s().p("AgyA7QgMgLAAgRQAAgMAFgIQAFgJAKgFQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWAAAMAFQAMAGAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUABgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_216.setTransform(508.175,257.95);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#002277").s().p("AhABDIAAiGIBNAAQAYAAAMAJQAMAJAAASQAAALgHAIQgGAJgKACQAOADAHAKQAGAJAAALQAAAQgLAJQgMALgWgBgAgcAtIAcAAQAOAAAHgEQAHgEAAgJQAAgKgIgEQgIgEgWABIgSAAgAgcgLIAXAAQAPAAAIgDQAHgEAAgKQAAgIgHgEQgHgEgQABIgXAAg");
	this.shape_217.setTransform(493.325,257.95);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#002277").s().p("AgyA7QgMgLAAgRQAAgMAFgIQAFgJAKgFQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWAAAMAFQAMAGAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUABgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_218.setTransform(477.725,257.95);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#002277").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_219.setTransform(462.875,260.375);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#002277").s().p("AAzBVIAAgjIhlAAIAAAjIgdAAIAAhAIAOAAQAKgLAGgUQAGgWABg0IBsAAIAABpIAOAAIAABAgAgeAVIA9AAIAAhMIgrAAQgCA3gQAVg");
	this.shape_220.setTransform(445.95,259.725);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#002277").s().p("Ag5AhIAggGQAJAUAQAAQAKAAAHgGQAGgFAAgHQAAgIgHgFQgGgEgKAAIgFAAIAAgWIANgBQAEgCAEgEQADgFAAgGQAAgGgEgGQgFgFgKAAQgFAAgGADQgGADgEALIgfgGQAFgSAPgIQAPgKASABQAZAAANALQANALABARQAAAKgHAHQgFAHgNAGQAPADAIAJQAHAIAAAMQAAAQgOALQgPAMgcgBQgvABgLgmg");
	this.shape_221.setTransform(431.25,257.95);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#002277").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_222.setTransform(417.325,257.95);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#002277").s().p("AAbBDIAAhUIg2BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_223.setTransform(401.45,257.95);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#002277").s().p("AA3BdIAAiSIglCSIgjAAIgliSIAACSIgjAAIAAi5IA4AAIAhB+IAih+IA4AAIAAC5g");
	this.shape_224.setTransform(382.625,255.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#002277").s().p("AgIA6IAfg6Igfg5IAbAAIAoA5IgoA6gAg6A6IAhg6Ighg5IAcAAIAnA5IgnA6g");
	this.shape_225.setTransform(674.3,226.95);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgIQAFgJAKgFQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWAAAMAFQAMAGAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUABgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_226.setTransform(659.875,226.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#002277").s().p("AhABDIAAiGIBNAAQAYAAAMAJQAMAJAAASQAAALgHAIQgGAJgKACQAOADAHAKQAGAJAAALQAAAQgLAJQgMALgWgBgAgcAtIAcAAQAOAAAHgEQAHgEAAgJQAAgKgIgEQgIgEgWABIgSAAgAgcgLIAXAAQAPAAAIgDQAHgEAAgKQAAgIgHgEQgHgEgQABIgXAAg");
	this.shape_227.setTransform(645.025,226.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#002277").s().p("AgiA+QgRgIgJgQQgJgQAAgXQAAgRAJgRQAJgRAQgIQAQgKATABQAfAAATATQAUAUAAAeQAAAfgUATQgUAVgegBQgSABgQgJgAgXgeQgJALAAATQAAAUAJALQAKAKANAAQAOAAAKgKQAJgLAAgUQAAgTgJgLQgKgLgOABQgNgBgKALg");
	this.shape_228.setTransform(628.7,226.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#002277").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_229.setTransform(613.125,229.325);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#002277").s().p("AgiA+QgRgIgJgQQgIgQAAgXQAAgRAIgRQAJgRAQgIQAQgKATABQAeAAAUATQATAUAAAeQAAAfgTATQgUAVgegBQgRABgRgJgAgXgeQgJALAAATQAAAUAJALQAKAKANAAQAOAAAJgKQAKgLAAgUQAAgTgKgLQgJgLgOABQgNgBgKALg");
	this.shape_230.setTransform(596.9,226.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#002277").s().p("AAzBVIAAgjIhlAAIAAAjIgdAAIAAhAIAPAAQAJgLAGgUQAGgWABg0IBsAAIAABpIAOAAIAABAgAgdAVIA8AAIAAhMIgqAAQgDA3gPAVg");
	this.shape_231.setTransform(580.3,228.675);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#002277").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbABQAdAAARATQASAUgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAGQgHAUgPAKQgOAKgXAAQgiABgRgXgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_232.setTransform(565.0777,226.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#002277").s().p("AgRBdIAAgWQgtgCgSgTQgTgVABgeQgBggAUgUQASgTAsgCIAAgSIAkAAIAAASQAsACASAUQASAVABAeQgBAegSAVQgSATgsACIAAAWgAATAoQAOAAAKgFQAMgFADgIQAFgIAAgQQAAgogsAAgAgzgfQgLAKAAAVQgBAoAuAAIAAhSQgYAAgKALg");
	this.shape_233.setTransform(546.85,224.35);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#002277").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape_234.setTransform(532.2,231.875);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#002277").s().p("AAkBdIAAhRIhIAAIAABRIgmAAIAAi5IAmAAIAABJIBIAAIAAhJIAnAAIAAC5g");
	this.shape_235.setTransform(519.1,224.35);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#002277").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape_236.setTransform(506.2,231.875);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#002277").s().p("Ag4BHQgYgZAAgsQAAguAYgZQAYgaAmAAQAiAAAVAUQANAMAGAWIglAJQgDgOgKgJQgLgIgPAAQgTAAgOAPQgMAPAAAhQAAAiAMAPQANAPATAAQAPAAALgJQALgKAEgUIAlALQgJAfgTAPQgUAOgdAAQgkAAgYgZg");
	this.shape_237.setTransform(493.1,224.325);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgIQAFgJAKgFQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWAAAMAFQAMAGAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUABgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_238.setTransform(469.375,226.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#002277").s().p("AASBEIgSgnQgEgMgEgDQgEgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBAEgEQADgFAFgPQAGgUAIgFQAJgGANAAIAOABIAAAXQgOAAgEADQgEADgEAOQgHASgLAFQAQADAMAZIACADIATAlg");
	this.shape_239.setTransform(456.475,226.875);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#002277").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_240.setTransform(441.1,226.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#002277").s().p("AAwBDIAAhXIghBXIgeAAIgfhXIAABXIgfAAIAAiGIAtAAIAgBeIAiheIAsAAIAACGg");
	this.shape_241.setTransform(423.575,226.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#002277").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbABQAdAAARATQASAUgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAGQgHAUgPAKQgOAKgXAAQgiABgRgXgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_242.setTransform(406.5277,226.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#002277").s().p("AAzBVIAAgjIhlAAIAAAjIgdAAIAAhAIAOAAQAKgLAGgUQAGgWABg0IBsAAIAABpIAOAAIAABAgAgeAVIA8AAIAAhMIgqAAQgCA3gQAVg");
	this.shape_243.setTransform(390.8,228.675);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgIQAFgJAKgFQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWAAAMAFQAMAGAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUABgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_244.setTransform(375.725,226.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#002277").s().p("AASBEIgSgnQgEgMgEgDQgEgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBAEgEQADgFAFgPQAGgUAIgFQAJgGANAAIAOABIAAAXQgOAAgEADQgEADgEAOQgHASgLAFQAQADAMAZIACADIATAlg");
	this.shape_245.setTransform(362.825,226.875);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgIQAFgJAKgFQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWAAAMAFQAMAGAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUABgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_246.setTransform(348.275,226.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#002277").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_247.setTransform(325.8,226.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#002277").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_248.setTransform(309.975,226.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#002277").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbABQAdAAARATQASAUgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAGQgHAUgPAKQgOAKgXAAQgiABgRgXgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_249.setTransform(294.7777,226.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#002277").s().p("AAwBDIAAhXIghBXIgeAAIgfhXIAABXIgfAAIAAiGIAtAAIAgBeIAiheIAsAAIAACGg");
	this.shape_250.setTransform(278.125,226.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#002277").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_251.setTransform(260.4,226.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#002277").s().p("AgJA6IAhg6Ighg5IAcAAIAoA5IgoA6gAg6A6IAhg6Ighg5IAcAAIAnA5IgnA6g");
	this.shape_252.setTransform(612.95,195.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgIQAFgJAKgFQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWAAAMAFQAMAGAFAJQAEAJAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUABgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_253.setTransform(598.525,195.85);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#002277").s().p("Ag5AhIAhgGQAHAUARAAQAKAAAHgGQAGgFAAgHQAAgIgHgFQgGgEgKAAIgFAAIAAgWIAMgBQAFgCADgEQAEgFAAgGQAAgGgFgGQgEgFgKAAQgFAAgGADQgGADgEALIgegGQAEgSAPgIQAPgKASABQAYAAAOALQANALAAARQAAAKgFAHQgGAHgMAGQAPADAHAJQAHAIAAAMQAAAQgPALQgOAMgcgBQgvABgLgmg");
	this.shape_254.setTransform(584.45,195.85);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgIQAFgJAKgFQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWAAAMAFQAMAGAFAJQAEAJAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUABgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_255.setTransform(571.175,195.85);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#002277").s().p("AhHBCIAAgaIAFAAIAJABQAIAAABgFQACgFAAgWIAAhNIB3AAIAACGIgkAAIAAhpIgwAAIAAA8QAAAXgFAJQgGAKgGADQgHADgOAAQgIAAgOgDg");
	this.shape_256.setTransform(554.95,195.975);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#002277").s().p("AgtBDIAAiGIBaAAIAAAdIg2AAIAABpg");
	this.shape_257.setTransform(542.85,195.85);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#002277").s().p("AAgBDIAAg3IgDAAQgMAAgFACQgGADgGAKIgBADIgYAlIgpAAIAZgmQALgRAJgDQgPgBgJgJQgKgLAAgQQAAgNAHgJQAGgKAKgDQAKgDAUgBIBFAAIAACGgAgMgoQgGAEAAAKQAAAJAGAEQAHAEAOABIAXAAIAAgjIgaAAQgNAAgFADg");
	this.shape_258.setTransform(520.875,195.85);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#002277").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_259.setTransform(506.2,195.85);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#002277").s().p("AgtBDIAAiGIBbAAIAAAdIg3AAIAABpg");
	this.shape_260.setTransform(493.65,195.85);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#002277").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_261.setTransform(479.775,198.275);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#002277").s().p("Ag5BdIgDgcQAJACAGAAQANAAAGgIQAGgHADgLIgziHIAlAAIAgBfIAfhfIAlAAIgvCBIgJAYIgJASQgEAGgFAEQgFAEgIACQgIACgKAAQgLAAgKgCg");
	this.shape_262.setTransform(464.125,198.575);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#002277").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_263.setTransform(449.425,198.275);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#002277").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_264.setTransform(433.1,195.85);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#002277").s().p("AAbBDIgbgqIgbAqIgqAAIAwhEIguhCIArAAIAYAmIAYgmIAqAAIgtBAIAxBGg");
	this.shape_265.setTransform(417.825,195.85);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#002277").s().p("AgiA+QgRgIgJgQQgIgQAAgXQAAgRAIgRQAJgRAQgIQAQgKATABQAeAAAUAUQATATAAAeQAAAfgTATQgUAVgegBQgRABgRgJgAgWgeQgKALAAATQAAAUAKALQAJAKANAAQAOAAAJgKQAKgLAAgUQAAgTgKgLQgJgLgOAAQgNAAgJALg");
	this.shape_266.setTransform(402.75,195.85);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#002277").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_267.setTransform(387.175,198.275);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#002277").s().p("AASBEIgSgnQgEgMgEgDQgEgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBAEgEQADgFAFgPQAGgUAIgFQAJgGANAAIAOABIAAAXQgOAAgEADQgEADgEAOQgHASgLAFQAQADAMAZIACADIATAlg");
	this.shape_268.setTransform(373.225,195.825);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#002277").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_269.setTransform(357.85,195.85);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#002277").s().p("AA3BdIAAiSIglCSIgjAAIgliSIAACSIgjAAIAAi5IA4AAIAhB+IAih+IA4AAIAAC5g");
	this.shape_270.setTransform(339.025,193.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#002277").s().p("AAfA6Igng6IAng5IAcAAIghA5IAhA6gAgSA6Igog6IAog5IAcAAIggA5IAgA6g");
	this.shape_271.setTransform(320.85,195.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#002277").s().p("AAYBeIgWgwIgCgEIgEgJQgHgOgEgDQgGgEgJAAIAABSIglAAIAAi5IAlAAIAABPQAMgBAFgGQAFgFAIgYQALgeAMgHQAMgHAaAAIAGgBIAAAcIgGAAQgLAAgGADQgFADgEAGQgDAFgGATQgDAJgEAHQgFAGgKAGQANACAIALQAIALAKAUIAZAzg");
	this.shape_272.setTransform(592.65,162.175);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#002277").s().p("AgSBdIAAiaIg3AAIAAgfICTAAIAAAfIg3AAIAACag");
	this.shape_273.setTransform(575.9,162.25);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#002277").s().p("AAkBdIAAhRIhIAAIAABRIglAAIAAi5IAlAAIAABJIBIAAIAAhJIAmAAIAAC5g");
	this.shape_274.setTransform(558.5,162.25);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#002277").s().p("AA3BdIAAiSIglCSIgjAAIgliSIAACSIgjAAIAAi5IA4AAIAhB+IAih+IA4AAIAAC5g");
	this.shape_275.setTransform(538.325,162.25);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#002277").s().p("AAfA6Igng6IAng5IAcAAIghA5IAhA6gAgRA6Igpg6IApg5IAaAAIggA5IAgA6g");
	this.shape_276.setTransform(520.15,164.85);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#002277").s().p("AAzBxIAAgoIiEAAIAAi5IAmAAIAACaIBIAAIAAiaIAlAAIAACaIAQAAIAABHg");
	this.shape_277.setTransform(496.975,164.275);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#002277").s().p("AAnBdIAAh5IhKB5IgmAAIAAi5IAjAAIAAB7IBKh7IAmAAIAAC5g");
	this.shape_278.setTransform(477.5,162.25);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#002277").s().p("AA3BdIAAiSIglCSIgjAAIgliSIAACSIgjAAIAAi5IA4AAIAhB+IAih+IA4AAIAAC5g");
	this.shape_279.setTransform(457.325,162.25);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#002277").s().p("AAlBdIAAhRIhJAAIAABRIgmAAIAAi5IAmAAIAABJIBJAAIAAhJIAmAAIAAC5g");
	this.shape_280.setTransform(437.05,162.25);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#002277").s().p("AAfA6Igng6IAng5IAcAAIghA5IAhA6gAgSA6Igog6IAog5IAbAAIggA5IAgA6g");
	this.shape_281.setTransform(420.35,164.85);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#002277").s().p("Ag3BcIAAgcIAOAAQANAAAGgEQAFgFAGgQIhFiEIAqAAIArBfIAlhfIAnAAIg/CMQgKAXgKAMQgKAMgRAAQgRAAgJgCg");
	this.shape_282.setTransform(397.975,162.375);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#002277").s().p("AA1BdIgRgqIhJAAIgPAqIgoAAIBIi5IAnAAIBKC5gAgZATIAxAAIgYhDg");
	this.shape_283.setTransform(380.425,162.25);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#002277").s().p("Ag+BdIAAi5IB9AAIAAAfIhYAAIAACag");
	this.shape_284.setTransform(364.75,162.25);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#002277").s().p("AgRBdIAAgWQgtgCgSgTQgTgVABgeQgBggAUgUQASgTAsgBIAAgTIAkAAIAAATQAsABASAUQASAVABAeQgBAegSAVQgSATgsACIAAAWgAATAoQAOAAAKgFQAMgFADgIQAFgIAAgQQAAgogsAAgAgzgfQgLAKAAAVQgBAoAuAAIAAhSQgYAAgKALg");
	this.shape_285.setTransform(345.25,162.25);

	this.place = new lib.bilboeyebuild();
	this.place.name = "place";
	this.place.setTransform(402.15,200.55,21.7051,5.0382,0,1.0435,0.9477,0.1,0.1);

	this.Omsg = new cjs.Text("", "bold 26px 'Arial'", "#005597");
	this.Omsg.name = "Omsg";
	this.Omsg.textAlign = "center";
	this.Omsg.lineHeight = 31;
	this.Omsg.lineWidth = 500;
	this.Omsg.parent = this;
	this.Omsg.setTransform(388.85,383.95);

	this.SuggestiveText = new lib.Символ7();
	this.SuggestiveText.name = "SuggestiveText";
	this.SuggestiveText.setTransform(399.45,431.8,1,1,0,0,0,385.4,68.4);

	this.arrowlength = new lib.an_TextInput({'id': 'arrowlength', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.arrowlength.name = "arrowlength";
	this.arrowlength.setTransform(859.5,297.6,1,1.3636,0,0,0,50.1,11.1);

	this.Begin_Btn = new lib.КнопкаBegin_Btnнебесная();
	this.Begin_Btn.name = "Begin_Btn";
	this.Begin_Btn.setTransform(400,545);
	new cjs.ButtonHelper(this.Begin_Btn, 0, 1, 2);

	this.AllTests1 = new lib.an_Checkbox({'id': 'AllTests1', 'label':'Все тесты', 'value':'on', 'disabled':false, 'visible':true, 'class':'ui-checkbox'});

	this.AllTests1.name = "AllTests1";
	this.AllTests1.setTransform(643.1,543.65,1.4599,2.2726,0,0,0,50.1,11.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#990000").s().p("AgTBLIAJgVIAGgRIADgSIABgSQAAgSgEgQQgEgSgLgXIAPAAQALARAGASQAHATAAAUQAAAPgFATQgGAVgNAUg");
	this.shape_286.setTransform(700.3,310.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#990000").s().p("AgbAgQgLgLAAgVQAAgUALgLQALgLARAAQAPgBAJAHQAJAGAEAOIgWAEQgBgGgDgEQgEgDgHAAQgHAAgFAFQgFAHAAAMQAAAOAFAHQAFAFAIAAQAGABAEgEQAEgEACgIIAVAEQgDAOgKAIQgJAIgQgBQgRAAgLgLg");
	this.shape_287.setTransform(689.025,310.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#990000").s().p("AgbAgQgLgLAAgVQAAgUALgLQALgLARAAQAPgBAJAHQAJAGAEAOIgWAEQgBgGgDgEQgEgDgHAAQgHAAgFAFQgFAHAAAMQAAAOAFAHQAFAFAIAAQAGABAEgEQAEgEACgIIAVAEQgDAOgKAIQgJAIgQgBQgRAAgLgLg");
	this.shape_288.setTransform(680.125,310.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#990000").s().p("AgeAlQgIgIAAgKQAAgHADgGQAEgFAGgCQAGgDALgCQAPgDAGgDIAAgCQAAgGgEgDQgCgCgIAAQgGAAgDACQgEACgCAGIgUgEQAEgMAIgGQAIgFAQAAQAOgBAIAEQAGADAEAGQACAFAAAOIAAAZIABARQABAFADAFIgWAAIgBgGIgBgDQgGAGgHACQgFADgHAAQgNAAgHgGgAAAAFQgJACgCACQgFADAAAEQAAAFAEADQADAEAGAAQAFAAAFgEQADgDACgFQABgCAAgIIAAgEIgNADg");
	this.shape_289.setTransform(671.1,310.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#990000").s().p("AgrApIAAgQIADAAIAGAAQAEAAABgDQABgDAAgNIAAgvIBJAAIAABSIgXAAIAAhAIgcAAIAAAkQAAAOgEAGQgDAGgEABQgEACgJAAIgNgBg");
	this.shape_290.setTransform(661.15,310.575);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#990000").s().p("AALAqIgLgYQgCgHgCgDQgDgCgFAAIAAAkIgWAAIAAhSIAWAAIAAAiQAGgBACgDQACgCACgKQAFgMAFgDQAFgEAIAAIAIABIABAOQgJAAgDACQgCACgDAIQgEAMgHACQALACAHAPIABACIAMAXg");
	this.shape_291.setTransform(652.825,310.475);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#990000").s().p("AgYA0QgJgIgCgOIAVgCQABAGADAEQAEACAFAAQAGABAFgHQAEgGACgUQgJAKgLAAQgOAAgJgKQgKgKAAgQQAAgSAKgLQALgLAQAAQAQAAALAOQALANAAAfQAAAfgLAOQgMANgSAAQgNAAgIgGgAgMgiQgEAEAAAMQAAAKAFAFQAEAFAHgBQAFABAEgFQAFgEAAgKQAAgKgFgHQgFgFgFgBQgHABgEAFg");
	this.shape_292.setTransform(639.275,309);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#990000").s().p("AgYA0QgJgIgCgOIAVgCQABAGADAEQAEACAFAAQAGABAFgHQAEgGACgUQgJAKgLAAQgOAAgJgKQgKgKAAgQQAAgSAKgLQALgLAQAAQAQAAALAOQALANAAAfQAAAfgLAOQgMANgSAAQgNAAgIgGgAgMgiQgEAEAAAMQAAAKAFAFQAEAFAHgBQAFABAEgFQAFgEAAgKQAAgKgFgHQgFgFgFgBQgHABgEAFg");
	this.shape_293.setTransform(630.375,309);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#990000").s().p("AgnApIAAhRIAWAAIAAAiIAVAAQANAAAHACQAHACAEAFQAFAGAAAIQAAAMgIAGQgJAHgQgBgAgRAcIAUAAQAJgBACgDQADgDAAgEQABgGgFgCQgFgCgLgBIgOAAg");
	this.shape_294.setTransform(616.95,310.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#990000").s().p("AgKApIAAg/IgaAAIAAgSIBJAAIAAASIgaAAIAAA/g");
	this.shape_295.setTransform(607.8,310.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#990000").s().p("AgeAlQgIgIAAgKQAAgHADgGQAEgFAGgCQAGgDALgCQAPgDAGgDIAAgCQAAgGgEgDQgCgCgIAAQgGAAgDACQgDACgDAGIgUgEQAEgMAIgGQAIgFAQAAQAOgBAHAEQAHADAEAGQADAFAAAOIgBAZIABARQABAFADAFIgVAAIgCgGIgBgDQgGAGgHACQgFADgHAAQgNAAgHgGgAAAAFQgJACgCACQgFADAAAEQAAAFAEADQADAEAGAAQAEAAAGgEQADgDACgFQABgCAAgIIAAgEIgNADg");
	this.shape_296.setTransform(599.45,310.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#990000").s().p("AgnApIAAhRIAvAAQAPAAAHAFQAHAFAAALQAAAHgEAGQgEAFgGABQAJABAEAGQAEAGAAAHQAAAJgHAGQgHAHgOgBgAgRAcIARAAQAJAAAEgDQAEgCAAgGQAAgGgFgDQgEgCgOAAIgLAAgAgRgGIAOAAQAJAAAFgDQAFgCAAgFQAAgGgFgCQgEgDgKAAIgOAAg");
	this.shape_297.setTransform(590.525,310.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#990000").s().p("AAjApIAAhRIAWAAIAABRgAg4ApIAAhRIAWAAIAAAiIAWAAQAMAAAHACQAHACAEAFQAFAGAAAIQAAAMgIAGQgJAHgPgBgAgiAcIAUAAQAIAAAEgDQACgDAAgFQAAgGgDgCQgFgCgMgBIgOAAg");
	this.shape_298.setTransform(578.575,310.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#990000").s().p("AgjAUIAUgEQAFANAKAAQAGAAAEgEQAEgDAAgEQAAgFgEgCQgEgEgGAAIgDAAIAAgNIAHAAIAFgEQADgDAAgDQAAgFgDgDQgDgEgGAAQgDAAgEADQgDABgDAIIgTgFQADgLAKgFQAJgGALABQAPAAAIAGQAIAIAAAKQAAAGgEAFQgDAEgIADQAJACAFAFQAFAFAAAIQAAAJgJAIQgKAGgRAAQgcAAgHgXg");
	this.shape_299.setTransform(567.525,310.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#990000").s().p("AgfAlQgHgIAAgKQAAgHAEgGQADgFAGgCQAGgDAMgCQAOgDAGgDIAAgCQAAgGgDgDQgDgCgIAAQgGAAgEACQgDACgBAGIgUgEQADgMAIgGQAIgFAQAAQAOgBAHAEQAIADACAGQADAFABAOIgBAZIABARQABAFADAFIgVAAIgDgGIgBgDQgFAGgHACQgFADgHAAQgNAAgIgGgAAAAFQgIACgEACQgEADAAAEQAAAFADADQAEAEAFAAQAGAAAEgEQAEgDACgFQABgCAAgIIAAgEIgNADg");
	this.shape_300.setTransform(559.1,310.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#990000").s().p("AALAqIgLgYQgCgHgCgDQgDgCgFAAIAAAkIgWAAIAAhSIAWAAIAAAiQAGgBACgDQACgCACgKQAFgMAFgDQAFgEAIAAIAIABIABAOQgJAAgDACQgCACgDAIQgEAMgHACQALACAHAPIABACIAMAXg");
	this.shape_301.setTransform(551.175,310.475);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#990000").s().p("AgiA5IgCgRIAJABQAIAAADgFQAEgEACgHIgghSIAYAAIATA6IATg6IAXAAIgeBPIgFAOIgFALIgFAGQgEADgFABIgLABIgMgBg");
	this.shape_302.setTransform(542.125,312.175);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#990000").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgKAKgFQAKgGALABQATAAAMAMQAMAMAAASQAAATgMAMQgNAMgSAAQgKABgLgGgAgNgSQgGAGAAAMQAAANAGAGQAFAHAIgBQAJABAFgHQAGgGAAgNQAAgMgGgGQgFgHgJABQgIgBgFAHg");
	this.shape_303.setTransform(528.475,310.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#990000").s().p("AAfA1IAAgXIg9AAIAAAXIgSAAIAAgpIAJAAQAFgFAEgNQAEgOAAgfIBCAAIAAA/IAJAAIAAApgAgSAMIAlAAIAAgtIgaAAQgBAhgKAMg");
	this.shape_304.setTransform(518.275,311.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#990000").s().p("AgfAlQgHgIAAgKQAAgHAEgGQADgFAGgCQAGgDAMgCQAOgDAGgDIAAgCQAAgGgDgDQgEgCgHAAQgGAAgEACQgCACgCAGIgVgEQAEgMAIgGQAIgFAQAAQAOgBAIAEQAGADADAGQADAFAAAOIAAAZIABARQABAFADAFIgWAAIgCgGIgBgDQgFAGgGACQgGADgHAAQgNAAgIgGgAAAAFQgIACgEACQgEADAAAEQAAAFAEADQADAEAFAAQAFAAAFgEQAFgDABgFQABgCAAgIIAAgEIgNADg");
	this.shape_305.setTransform(508.95,310.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#990000").s().p("AAQApIAAgjIgfAAIAAAjIgWAAIAAhRIAWAAIAAAeIAfAAIAAgeIAWAAIAABRg");
	this.shape_306.setTransform(499.675,310.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#990000").s().p("AARA6IAAg1IghA1IgVAAIAAhSIAVAAIAAAzIAhgzIAVAAIAABSgAgPgpQgHgGgBgKIALAAQAAAFAEADQADADAGAAQAGAAADgDQAEgDAAgFIALAAQgBAKgGAGQgHAGgKAAQgKAAgGgGg");
	this.shape_307.setTransform(485.475,308.825);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#990000").s().p("AgdAdQgJgLAAgRQAAgUALgLQALgMAQAAQASAAALAMQAKAMAAAYIg2AAQAAAKAFAGQAFAFAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNgBQgVAAgKgOgAgKgVQgFAGAAAJIAgAAQAAgKgFgFQgFgEgGAAQgGAAgFAEg");
	this.shape_308.setTransform(476.0261,310.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#990000").s().p("AgsApIAAgQIAEAAIAFAAQAFAAABgDQABgDAAgNIAAgvIBIAAIAABSIgVAAIAAhAIgeAAIAAAkQAAAOgDAGQgDAGgEABQgEACgIAAIgPgBg");
	this.shape_309.setTransform(466.35,310.575);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#990000").s().p("AgdAdQgJgLAAgRQAAgUALgLQALgMAQAAQASAAALAMQAKAMAAAYIg2AAQAAAKAFAGQAFAFAHAAQAFAAADgDQAEgDACgGIAWAEQgFAMgJAGQgJAHgNgBQgVAAgKgOgAgKgVQgFAGAAAJIAgAAQAAgKgFgFQgFgEgGAAQgGAAgFAEg");
	this.shape_310.setTransform(457.1761,310.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#990000").s().p("AgKApIAAg/IgaAAIAAgSIBKAAIAAASIgbAAIAAA/g");
	this.shape_311.setTransform(448.85,310.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#990000").s().p("AARApIAAg0IghA0IgVAAIAAhRIAVAAIAAAzIAhgzIAVAAIAABRg");
	this.shape_312.setTransform(440.025,310.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#990000").s().p("AAPApIAAghQgNAEgGAAQgKAAgIgFQgIgEgDgGQgDgGAAgMIAAgTIAWAAIAAATQAAAHACADQABAEAEACQAEACAFAAQAGABAHgDIAAgjIAWAAIAABRg");
	this.shape_313.setTransform(430.375,310.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#990000").s().p("AgiA5IgCgRIAJABQAIAAADgFQAEgEACgHIgghSIAYAAIATA6IATg6IAXAAIgeBPIgFAOIgFALIgFAGQgEADgFABIgLABIgMgBg");
	this.shape_314.setTransform(421.275,312.175);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#990000").s().p("AAUApIAAgiIgCAAQgIAAgCACQgEACgEAFIAAADIgPAWIgaAAIAQgYQAHgKAFgCQgIAAgGgGQgGgGAAgKQAAgIAEgFQADgGAHgDQAGgBANAAIAqAAIAABRgAgHgYQgEACABAHQAAAFADADQAEACAJAAIAOAAIAAgWIgQAAQgIAAgDADg");
	this.shape_315.setTransform(407.2,310.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#990000").s().p("AgsApIAAgQIAEAAIAFAAQAFAAABgDQABgDAAgNIAAgvIBIAAIAABSIgVAAIAAhAIgeAAIAAAkQAAAOgDAGQgDAGgEABQgEACgIAAIgPgBg");
	this.shape_316.setTransform(397.6,310.575);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#990000").s().p("AAfA1IAAgXIg9AAIAAAXIgSAAIAAgpIAJAAQAFgFAEgNQAEgOAAgfIBCAAIAAA/IAJAAIAAApgAgSAMIAlAAIAAgtIgaAAQgBAhgKAMg");
	this.shape_317.setTransform(387.675,311.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#990000").s().p("AAFBLQgLgSgHgTQgGgUAAgSQAAgWAIgTQAHgSAJgPIAPAAQgLAXgEASQgEAQAAASQAAAMADANQACAOAEAMIAKAXg");
	this.shape_318.setTransform(375.825,310.5);

	this.SaveBtn2 = new lib.КнопкаSaveBtn2небесная();
	this.SaveBtn2.name = "SaveBtn2";
	this.SaveBtn2.setTransform(400,545);
	new cjs.ButtonHelper(this.SaveBtn2, 0, 1, 2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#990000").s().p("AgkAeIATgUIAEgFIgSgEIgOgDIAHgWQARAHANAHQgDgUAAgOIAWAAQAAAKgDAYIALgEIAUgJIAHAXIghAFIAQARIAHAJIgTAMIgRgcIgRAdg");
	this.shape_319.setTransform(272,309.95);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#990000").s().p("AgkAeIATgUIAEgFIgSgEIgOgDIAHgXQARAIANAHQgDgUAAgOIAWAAQAAAKgDAYIALgEIAUgJIAHAXIghAFIAQARIAHAJIgTAMIgRgbIgRAcg");
	this.shape_320.setTransform(272,268.45);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#990000").s().p("AgkAeIATgUIAEgFIgSgEIgOgDIAHgWQARAHANAHQgDgUAAgOIAWAAQAAAKgDAYIALgEIAUgJIAHAXIghAFIAQARIAHAJIgTAMIgRgcIgRAdg");
	this.shape_321.setTransform(272,228.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#990000").s().p("AgkAeIATgUIAEgFIgSgEIgOgDIAHgWQARAGANAJQgDgVAAgNIAWAAQAAAJgDAZIALgFIAUgJIAHAXIghAFIAQARIAHAIIgTAOIgRgdIgRAeg");
	this.shape_322.setTransform(272,185.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#990000").s().p("AgkAeIATgUIAEgFIgSgEIgOgDIAHgWQARAHANAHQgDgUAAgOIAWAAQAAAKgDAYIALgEIAUgJIAHAXIghAFIAQARIAHAJIgTAMIgRgcIgRAdg");
	this.shape_323.setTransform(272,145.25);

	this.lastname = new lib.an_TextInput({'id': 'lastname', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.lastname.name = "lastname";
	this.lastname.setTransform(513.3,145.5,4.4999,1.3636,0,0,0,50,11.1);

	this.firstname = new lib.an_TextInput({'id': 'firstname', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.firstname.name = "firstname";
	this.firstname.setTransform(513.3,185.45,4.4999,1.3636,0,0,0,50,11.1);

	this.middlename = new lib.an_TextInput({'id': 'middlename', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.middlename.name = "middlename";
	this.middlename.setTransform(513.3,226.6,4.4999,1.3636,0,0,0,50,11.1);

	this.movieClip_4 = new lib.an_DatePicker({'id': 'movieClip_4', 'label':'', 'visible':true, 'class':'jqueryui-datepicker'});

	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.setTransform(438.3,266.6,2.9999,1.3636,0,0,0,50,11.1);

	this.klass = new lib.an_TextInput({'id': 'klass', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.klass.name = "klass";
	this.klass.setTransform(313.4,309,0.5,1.3636,0,0,0,50.3,11.1);

	this.homeaddress = new lib.an_TextInput({'id': 'homeaddress', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.homeaddress.name = "homeaddress";
	this.homeaddress.setTransform(513.25,352.25,4.4999,1.3636,0,0,0,50,11.1);

	this.homephone = new lib.an_TextInput({'id': 'homephone', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.homephone.name = "homephone";
	this.homephone.setTransform(401,393.75,2.25,1.3636,0,0,0,50.1,11.1);

	this.FIOmsg = new lib.an_TextInput({'id': 'FIOmsg', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.FIOmsg.name = "FIOmsg";
	this.FIOmsg.setTransform(400,461.65,6.4999,2.7272,0,0,0,50,11.1);

	this.altDateFormat = new lib.an_TextInput({'id': 'altDateFormat', 'value':'', 'disabled':false, 'visible':false, 'class':'ui-textinput'});

	this.altDateFormat.name = "altDateFormat";
	this.altDateFormat.setTransform(545.15,266.6,0.5999,1.3636,0,0,0,50.3,11.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAAqIArAAIAAgqIAeAAIAABxg");
	this.shape_324.setTransform(254.6,392.75);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgOAHgPQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZAAQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_325.setTransform(241.275,392.75);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgOBlIAAg6QgGAIgIAFQgHADgJAAQgSAAgMgRQgMgQAAgaQAAgZAOgRQANgQAQAAQAJAAAHADQAHAFAGAIIAAg6IAdAAIAAA7QAGgJAHgEQAIgFAKABQASgBAMATQALARAAAXQAAAagNAQQgNARgSAAQgIAAgHgDQgHgFgGgIIAAA6gAAVgYQgGAKAAAQQAAAPAGAKQAGAKAJgBQAIABAGgLQAGgLAAgPQAAgOgFgKQgGgMgJAAQgKAAgFAMgAgxgaQgGALAAAPQAAARAGAJQAGAKAIAAQAJAAAGgKQAGgJAAgRQAAgTgGgIQgHgJgHAAQgIABgHAJg");
	this.shape_326.setTransform(225.175,392.75);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGARgNAJQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_327.setTransform(209.3258,392.75);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_328.setTransform(195.975,392.85);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGARgNAJQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_329.setTransform(183.3758,392.75);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgPBPIAAiCIgvAAIAAgbIB9AAIAAAbIgvAAIAACCg");
	this.shape_330.setTransform(171.725,390.575);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgQAYAAQAWAAALAJQANAKAFARIgdAGQgCgJgFgFQgFgEgJAAQgLAAgGAIQgHAIAAASQAAATAHAJQAHAIAKAAQAJAAAFgFQAGgFACgMIAeAGQgFATgNALQgNAKgWAAQgYAAgPgPg");
	this.shape_331.setTransform(255.3,352.55);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgpAoQgLgPAAgYQAAgcAPgPQAOgQAXgBQAYAAAPARQAPARgBAiIhKAAQAAANAHAHQAHAIAJAAQAHAAAFgEQAFgDADgJIAeAFQgGAQgNAJQgMAJgTgBQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_332.setTransform(243.0758,352.55);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("Ag3BQIAAicIAcAAIAAAQQAGgIAKgGQAJgFAKAAQAUAAAOAPQANAQAAAcQAAAcgNAPQgOAQgUAAQgJAAgHgEQgIgDgJgJIAAA5gAgSgvQgGAJgBARQAAATAIAIQAIAJAJAAQALAAAHgJQAHgGAAgUQAAgSgHgJQgHgIgLgBQgKABgIAIg");
	this.shape_333.setTransform(230.65,354.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg3IANAAQAIgIAFgSQAFgSABgsIBbAAIAABYIAMAAIAAA3gAgZARIAzAAIAAhAIgkAAQgBAvgOARg");
	this.shape_334.setTransform(216.325,354.05);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgrAyQgJgKgBgOQABgKAEgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgEgLABQgJAAgEACQgEAEgDAHIgbgEQAEgRALgIQALgIAXAAQATABAKAEQAKAFAEAHQAEAHAAAUIgBAjQAAAPACAGQACAIADAIIgdAAIgEgJIgBgDQgHAHgJAEQgIAEgKgBQgRAAgLgJgAAAAHQgMACgFADQgFAFAAAFQAAAHAEAEQAFAGAHgBQAHAAAIgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_335.setTransform(203.55,352.55);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AAYBQIAAhJIgvBJIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxgAgVg4QgJgJgCgOIAPAAQABAIAFADQAEAEAIAAQAJAAAFgEQAEgDABgIIAPAAQgCAOgIAJQgKAIgOAAQgNAAgJgIg");
	this.shape_336.setTransform(184.55,350.225);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AAYA5IAAhIIgvBIIgdAAIAAhxIAdAAIAABGIAuhGIAeAAIAABxg");
	this.shape_337.setTransform(171.05,352.55);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAApIAqAAIAAgpIAeAAIAABxg");
	this.shape_338.setTransform(157.65,352.55);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AhMA5IAAhxIAcAAIAABYIAjAAIAAhYIAbAAIAABYIAjAAIAAhYIAcAAIAABxg");
	this.shape_339.setTransform(141.825,352.55);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgqAyQgKgKAAgOQgBgKAFgHQAEgIAJgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgFgEgLABQgHAAgFACQgEAEgDAHIgcgEQAFgRAMgIQALgIAWAAQATABAKAEQAKAFAEAHQAEAHAAAUIAAAjQgBAPACAGQACAIAEAIIgfAAIgCgJIgBgDQgIAHgJAEQgIAEgJgBQgSAAgKgJgAAAAHQgNACgDADQgHAFAAAFQAAAHAGAEQAEAGAIgBQAGAAAIgFQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_340.setTransform(126.55,352.55);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBOIAdhOIAlAAIAABxg");
	this.shape_341.setTransform(112.675,352.55);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgdA1QgOgIgIgNQgHgOAAgSQAAgQAHgOQAIgOAOgHQANgHAQgBQAaAAAQARQARARAAAZQAAAagRAQQgRASgZgBQgPAAgOgGgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_342.setTransform(98.075,352.55);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AAyBgIAAgiIhiAAIAAAiIgbAAIAAg9IANAAQAKgUADgaQADgaAAgpIAAgRIBsAAIAACCIAOAAIAAA9gAgcAjIA7AAIAAhoIgvAAQAABHgMAhg");
	this.shape_343.setTransform(82.95,352.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgQAYAAQAWABALAIQANAKAFARIgdAGQgCgJgFgFQgFgEgJAAQgLAAgGAIQgHAIAAASQAAATAHAJQAHAIAKAAQAJAAAFgFQAGgFACgMIAeAFQgFAUgNALQgNALgWAAQgYgBgPgPg");
	this.shape_344.setTransform(255.3,311.35);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgQAYAAQAWABAMAIQAMAKAGARIgeAGQgCgJgFgFQgGgEgIAAQgLAAgGAIQgHAIAAASQAAATAHAJQAHAIAKAAQAJAAAGgFQAFgFACgMIAeAFQgFAUgNALQgNALgWAAQgYgBgPgPg");
	this.shape_345.setTransform(243.05,311.35);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgrAyQgJgKgBgOQAAgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgEgEgLABQgJAAgEACQgEAEgDAHIgbgEQAEgRALgIQALgHAXgBQATAAAKAFQAKAFAEAHQAEAIAAATIgBAiQAAAPACAIQABAHAEAIIgdAAIgDgJIgCgDQgHAHgJAEQgIAEgJAAQgTAAgKgKgAAAAHQgMACgFADQgFAEAAAGQAAAHAEAFQAFAEAIAAQAGABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_346.setTransform(230.65,311.35);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("Ag8A4IAAgWIAFAAIAHABQAGAAACgFQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhZIgoAAIAAAyQAAAUgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_347.setTransform(216.875,311.45);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AAVBPIgTgoIgCgEIgDgHQgHgMgDgDQgEgDgIAAIAABFIggAAIAAicIAgAAIAABDQALgBADgFQAEgEAHgUQAJgaALgGQAKgGAVAAIAFAAIAAAXIgFAAQgJAAgEADQgFACgDAFIgIAUQgDAIgEAGQgDAFgJAFQALACAHAJQAHAJAJARIAVArg");
	this.shape_348.setTransform(204.5,309.125);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AAbA5IAAgwIgCAAQgKABgFACQgEADgGAIIgBACIgUAgIgjAAIAWghQAJgPAIgCQgNAAgIgIQgIgJAAgOQAAgKAFgJQAGgHAIgDQAIgDASAAIA6AAIAABxgAgKghQgFADAAAIQAAAIAGAEQAFACAMAAIATAAIAAgdIgWAAQgKABgFADg");
	this.shape_349.setTransform(254.1,270.15);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AAYA5IAAhIIgvBIIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxg");
	this.shape_350.setTransform(241.7,270.15);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAApIAqAAIAAgpIAeAAIAABxg");
	this.shape_351.setTransform(228.3,270.15);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAFQgGASgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_352.setTransform(215.4258,270.15);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_353.setTransform(202.125,271.65);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AAuA6IgOgiQgFgIgDgDQgDgDgGgBIAAAxIgdAAIAAgxQgGABgCACQgDACgFAKIgPAiIggAAIAQggQAMgYANgCQgJgEgFgQQgFgLgDgCQgDgDgMAAIAAgUIAMgBQAKABAIAEQAHAFAGARQAEAOAEADQADAEAFAAIAAgvIAdAAIAAAvQAGAAADgEIAIgRQAFgRAHgFQAIgEAKgBIANABIAAAUQgMAAgEADQgEACgDALQgGAQgJAEQANACAMAYIAQAgg");
	this.shape_354.setTransform(187.65,270.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgdA0QgOgHgIgNQgHgOAAgSQAAgQAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_355.setTransform(173.475,270.15);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("Ag3BQIAAidIAdAAIAAARQAFgIAJgGQAKgFAKAAQAUAAAOAQQAOAPAAAcQgBAbgOARQgNAPgUAAQgIAAgIgDQgIgEgIgKIAAA6gAgRguQgIAIABAQQAAAUAHAIQAIAJAKAAQAKAAAHgIQAHgHAAgUQAAgSgHgIQgHgJgLAAQgKAAgHAJg");
	this.shape_356.setTransform(160.3,272.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFADQgEAEgDAIIgcgFQAFgRAMgIQAKgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIAAAiQgBAPACAIQABAHAFAIIgfAAIgDgJIAAgEQgIAIgJAEQgIADgKABQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHAAQAIABAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_357.setTransform(141.05,270.15);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgOA5IAAhYIglAAIAAgZIBnAAIAAAZIglAAIAABYg");
	this.shape_358.setTransform(129.55,270.15);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgrAyQgJgJgBgPQABgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgLgBQgJAAgEADQgEAEgDAIIgbgFQAEgRALgIQALgHAXAAQATgBAKAFQAKAFAEAHQAEAIAAATIgBAiQAAAPACAIQACAHADAIIgdAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAHAAQAHABAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_359.setTransform(118.05,270.15);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AAxBgIAAgiIhiAAIAAAiIgaAAIAAg9IANAAQAKgUADgaQADgbAAgpIAAgQIBsAAIAACCIAOAAIAAA9gAgcAjIA6AAIAAhoIgtAAQAABHgNAhg");
	this.shape_360.setTransform(103.8,269.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgdA1QgOgIgIgNQgHgOAAgSQAAgPAHgPQAIgOAOgHQANgIAQAAQAaAAAQARQARARAAAZQAAAZgRASQgRAQgZAAQgPAAgOgGgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_361.setTransform(254.575,228.9);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAIAAAPQAAAJgFAIQgGAGgIADQAMABAGAJQAFAHAAAKQAAAOgJAHQgKAJgTAAgAgYAlIAYAAQAMAAAGgCQAGgEAAgIQAAgIgHgDQgHgEgSABIgQAAgAgYgIIAUAAQANgBAGgDQAGgEAAgIQAAgGgFgEQgGgCgOAAIgUAAg");
	this.shape_362.setTransform(241.725,228.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgOA5IAAhZIglAAIAAgYIBmAAIAAAYIgkAAIAABZg");
	this.shape_363.setTransform(229.25,228.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgQAZAAQAVABALAIQANAKAFARIgeAGQgBgJgGgFQgEgEgJAAQgLAAgGAIQgHAIAAASQAAATAHAJQAHAIALAAQAIAAAFgFQAGgFACgMIAeAGQgFATgNALQgNALgWgBQgYAAgPgPg");
	this.shape_364.setTransform(217.9,228.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgpAoQgLgPAAgYQAAgcAPgPQAOgQAXgBQAYAAAPARQAPARgBAiIhKAAQAAANAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGAQgNAJQgMAJgTgBQgdAAgOgTgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJABQgJgBgGAIg");
	this.shape_365.setTransform(205.6758,228.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AAUA5IAAguQgRAFgIAAQgOAAgLgGQgLgGgEgIQgFgKAAgPIAAgbIAfAAIAAAbQAAAJACAFQABAEAGAEQAFADAHAAQAJAAAJgDIAAgxIAfAAIAABxg");
	this.shape_366.setTransform(193.175,228.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgOA5IAAhZIglAAIAAgYIBmAAIAAAYIgkAAIAABZg");
	this.shape_367.setTransform(181.55,228.9);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("Ag3A8QgUgVAAgmQAAgXAHgQQAFgMAJgKQAKgKALgEQAPgGASAAQAjAAAUAVQAWAWAAAlQAAAmgWAWQgUAVgjAAQgiAAgVgVgAgegoQgNAOAAAaQAAAbANAOQAMANASAAQATAAANgNQAMgOgBgbQABgbgMgNQgNgNgTAAQgTAAgLANg");
	this.shape_368.setTransform(167.65,226.725);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AAbA5IAAgvIgCAAQgLAAgEACQgFADgFAIIgBACIgUAgIgjAAIAVghQAKgOAIgDQgNAAgIgIQgIgJAAgNQAAgMAFgHQAGgJAIgCQAIgDASAAIA6AAIAABxgAgKghQgFADAAAIQAAAIAGADQAFAEAMAAIATAAIAAgeIgVAAQgLAAgFAEg");
	this.shape_369.setTransform(254.2,187.75);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBOIAdhOIAlAAIAABxg");
	this.shape_370.setTransform(240.525,187.75);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AAhBPIAAhmIg/BmIgfAAIAAidIAdAAIAABoIA/hoIAgAAIAACdg");
	this.shape_371.setTransform(224.4,185.575);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AAbA5IAAgwIgDAAQgKAAgEADQgEADgGAIIgBACIgUAgIgjAAIAVghQAKgPAHgCQgNAAgHgIQgIgJAAgNQAAgLAFgJQAGgHAIgDQAIgDASAAIA6AAIAABxgAgLghQgEADAAAIQAAAIAFADQAGADALAAIAUAAIAAgdIgVAAQgMABgFADg");
	this.shape_372.setTransform(254.05,146.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABHIAthHIAdAAIAABxg");
	this.shape_373.setTransform(241.65,146.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_374.setTransform(227.275,146.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AAYA5IAAhIIgvBIIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxg");
	this.shape_375.setTransform(214.15,146.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBPIAdhPIAlAAIAABxg");
	this.shape_376.setTransform(199.375,146.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgFgDgLgBQgHAAgFAEQgEADgDAIIgcgFQAFgRAMgHQAKgIAXAAQATgBAKAFQAKAFAEAIQAEAGAAAVIAAAhQgBAQACAHQACAHAEAIIgfAAIgCgJIgBgEQgIAIgJAEQgIADgJABQgSAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAEQAEAFAIABQAGAAAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_377.setTransform(185.05,146.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgOBPIAAgTQgmgBgQgRQgPgRAAgZQAAgcAQgQQAQgRAlgBIAAgQIAeAAIAAAQQAlABAQARQAPASAAAaQAAAZgPARQgQARglABIAAATgAAQAiQAMAAAJgEQAJgFAEgHQAEgHAAgMQAAgjgmAAgAgrgaQgJAIAAASQAAAiAmAAIAAhGQgVAAgIAKg");
	this.shape_378.setTransform(169.475,144.325);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#AA0000").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAwIAfAAQARAAAJACQAJADAHAHQAGAIAAAMQAAAQgLAJQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgIQAAgIgFgDQgGgDgRAAIgUAAg");
	this.shape_379.setTransform(747.025,92.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#AA0000").s().p("AAVA5IAAgwIgqAAIAAAwIgeAAIAAhxIAeAAIAAAqIAqAAIAAgqIAfAAIAABxg");
	this.shape_380.setTransform(730.9,92.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#AA0000").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAYAAAPARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_381.setTransform(718.0258,92.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#AA0000").s().p("AAVA5IAAgwIgqAAIAAAwIgeAAIAAhxIAeAAIAAAqIAqAAIAAgqIAfAAIAABxg");
	this.shape_382.setTransform(705.35,92.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#AA0000").s().p("Ag8A4IAAgWIAFAAIAHABQAGgBACgEQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhZIgoAAIAAAzQAAATgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_383.setTransform(691.075,92.9);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#AA0000").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgHAQgBQAaAAAQARQARARAAAZQAAAZgRARQgRASgZgBQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_384.setTransform(678.025,92.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#AA0000").s().p("AAUA5IAAhZIgnAAIAABZIgfAAIAAhxIBlAAIAABxg");
	this.shape_385.setTransform(664.475,92.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#AA0000").s().p("AgrAyQgJgKgBgOQAAgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgDgLAAQgJAAgEADQgFADgCAHIgbgEQAEgRALgHQALgJAXAAQATABAKAEQAKAFAEAIQAEAGAAAVIgBAiQAAAPACAGQABAIAEAIIgdAAIgDgJIgCgDQgHAHgJAEQgIAEgJgBQgTAAgKgJgAAAAHQgMACgFADQgFAFAAAFQAAAHAEAEQAFAGAIAAQAGgBAIgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_386.setTransform(651.85,92.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#AA0000").s().p("AgwAcIAbgGQAHARAOABQAJgBAFgEQAFgEAAgHQAAgGgFgEQgFgEgJAAIgEAAIAAgSIAKgCQAEgBADgDQADgEAAgFQAAgGgEgEQgEgFgIAAQgFAAgEADQgFACgEAKIgagGQAEgOANgIQANgHAPgBQAVABALAJQALAJAAAPQAAAIgFAGQgFAGgKAFQANACAGAIQAGAGAAALQAAANgMAKQgNAJgXAAQgoAAgJgfg");
	this.shape_387.setTransform(639.925,92.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#AA0000").s().p("Ag2A5IAAhxIAeAAIAAAwIAeAAQARAAAKACQAKADAFAHQAHAIAAAMQAAAQgLAJQgMAIgWAAgAgYAmIAbAAQANAAAEgFQAEgDAAgHQAAgIgGgDQgHgDgPAAIgUAAg");
	this.shape_388.setTransform(622.3,92.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#AA0000").s().p("AgOA5IAAhZIglAAIAAgYIBnAAIAAAYIglAAIAABZg");
	this.shape_389.setTransform(609.8,92.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#AA0000").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAwIAfAAQARAAAJACQAJADAHAHQAGAIAAAMQAAAQgLAJQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgIQAAgIgFgDQgGgDgRAAIgUAAg");
	this.shape_390.setTransform(595.075,92.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#AA0000").s().p("AggBJQgOgJgFgPQgGgPAAgiQAAgpAPgSQAPgSAkAAIAQAAQAGAAACgEIAVAAQgBAOgGAHQgHAHgYAAIgGAAIgEAAQgNAAgJADQgJADgGAJQgGAJAAAVQAHgNALgGQAKgGAOAAQAWAAAQARQAPARAAAXQAAAXgQASQgQARgaAAQgSAAgOgJgAgTAAQgIAIAAAPQAAAQAIAJQAIAJALAAQALAAAIgKQAIgJAAgPQAAgPgIgIQgIgKgLAAQgLAAgIAKg");
	this.shape_391.setTransform(578.825,90.575);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#AA0000").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAwIAfAAQARAAAJACQAJADAHAHQAGAIAAAMQAAAQgLAJQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgIQAAgIgFgDQgGgDgRAAIgUAAg");
	this.shape_392.setTransform(556.575,92.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#AA0000").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAAqIArAAIAAgqIAeAAIAABxg");
	this.shape_393.setTransform(540.45,92.8);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#AA0000").s().p("AAtA5IgOggQgEgJgCgEQgEgCgGgBIAAAwIgdAAIAAgwQgGABgCABQgCACgHAMIgNAgIghAAIAQgfQAMgXAOgDQgKgEgGgPQgEgMgDgDQgDgCgMAAIAAgUIAMAAQAKgBAHAFQAHAFAGARQAGANACAFQAEADAFAAIAAguIAdAAIAAAuQAGAAADgDIAHgSQAGgRAIgFQAGgFAMABIALAAIAAAUQgMAAgDACQgEADgDAMQgFAPgLAEQAOADAMAXIAQAfg");
	this.shape_394.setTransform(526,92.75);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#AA0000").s().p("Ag8A4IAAgWIAFAAIAHABQAGgBACgEQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhZIgoAAIAAAzQAAATgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_395.setTransform(510.575,92.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#AA0000").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgHAQgBQAaAAAQARQARARAAAZQAAAZgRARQgRASgZgBQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_396.setTransform(497.525,92.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#AA0000").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg3IANAAQAIgIAFgSQAFgSABgsIBbAAIAABYIAMAAIAAA3gAgZARIAzAAIAAhAIgkAAQgBAvgOARg");
	this.shape_397.setTransform(483.475,94.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#AA0000").s().p("AgPAUQAJgDAEgFQADgGAAgIIgOAAIAAgeIAdAAIAAAWQAAAMgCAIQgCAHgGAGQgGAGgJADg");
	this.shape_398.setTransform(467.475,98.75);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#AA0000").s().p("AgaBnIANgdIAGgYQADgNACgMQACgMgBgNQABgYgGgXQgGgXgPggIAVAAQAQAXAIAaQAJAZAAAbQAAAWgGAZQgJAdgRAcg");
	this.shape_399.setTransform(460.7,92.825);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#AA0000").s().p("AgfAZIAQgRIAFgEIgQgDIgMgCIAGgUQAOAGALAHQgCgSAAgKIASAAQAAAHgDAVIAKgEIARgHIAGATIgcAEIANAPIAGAHIgQALIgOgZIgPAag");
	this.shape_400.setTransform(446.8,86.25);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#AA0000").s().p("AAGBnQgPgZgJgbQgIgaAAgZQAAgeAKgcQAKgYANgUIAUAAQgOAggGAXQgFAXAAAYQAAASADASQADATAGARIANAfg");
	this.shape_401.setTransform(433.025,92.825);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#AA0000").s().p("AAYBQIAAhJIgvBJIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxgAgVg4QgJgJgCgOIAPAAQABAIAFADQAEAEAIAAQAJAAAFgEQAEgDABgIIAPAAQgCAOgIAJQgKAIgOAAQgNAAgJgIg");
	this.shape_402.setTransform(416.3,90.475);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#AA0000").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgHAQgBQAaAAAQARQARARAAAZQAAAZgRARQgRASgZgBQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_403.setTransform(402.875,92.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#AA0000").s().p("AAQA5IgQggQgDgKgDgEQgEgCgHAAIAAAwIgeAAIAAhwIAeAAIAAAuQAIgBADgEQADgEAEgMQAFgRAHgFQAHgEALAAIAMAAIAAAUQgMAAgDACQgDADgEAMQgFAPgKAEQAOADAKAVIABACIARAfg");
	this.shape_404.setTransform(391.325,92.75);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#AA0000").s().p("AAUA5IAAgtQgRAEgIAAQgOAAgLgFQgLgHgEgIQgFgKAAgPIAAgbIAfAAIAAAbQAAAJACAFQABAFAGADQAFADAHAAQAJAAAJgDIAAgxIAfAAIAABxg");
	this.shape_405.setTransform(378.625,92.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#AA0000").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgHAQgBQAaAAAQARQARARAAAZQAAAZgRARQgRASgZgBQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_406.setTransform(365.675,92.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#AA0000").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg3IANAAQAIgIAFgSQAFgSABgsIBbAAIAABYIAMAAIAAA3gAgZARIAzAAIAAhAIgkAAQgBAvgOARg");
	this.shape_407.setTransform(351.625,94.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#AA0000").s().p("AgwAcIAbgGQAHARAOABQAJgBAFgEQAFgEAAgHQAAgGgFgEQgFgEgJAAIgEAAIAAgSIAKgCQAEgBADgDQADgEAAgFQAAgGgEgEQgEgFgIAAQgFAAgEADQgFACgEAKIgagGQAEgOANgIQANgHAPgBQAVABALAJQALAJAAAPQAAAIgFAGQgFAGgKAFQANACAGAIQAGAGAAALQAAANgMAKQgNAJgXAAQgoAAgJgfg");
	this.shape_408.setTransform(339.175,92.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#AA0000").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAYAAAPARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_409.setTransform(327.7758,92.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#AA0000").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAHAAAQQAAAJgFAHQgGAIgIACQAMABAGAJQAFAHAAAKQAAANgJAJQgKAIgTAAgAgYAmIAYAAQAMAAAGgEQAGgCAAgJQAAgIgHgDQgHgDgSAAIgQAAgAgYgIIAUAAQANAAAGgEQAGgEAAgHQAAgIgFgCQgGgDgOgBIgUAAg");
	this.shape_410.setTransform(315.375,92.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#AA0000").s().p("AgwAcIAbgGQAHARAOABQAJgBAFgEQAFgEAAgHQAAgGgFgEQgFgEgJAAIgEAAIAAgSIAKgCQAEgBADgDQADgEAAgFQAAgGgEgEQgEgFgIAAQgFAAgEADQgFACgEAKIgagGQAEgOANgIQANgHAPgBQAVABALAJQALAJAAAPQAAAIgFAGQgFAGgKAFQANACAGAIQAGAGAAALQAAANgMAKQgNAJgXAAQgoAAgJgfg");
	this.shape_411.setTransform(302.475,92.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#AA0000").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAYAAAPARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_412.setTransform(284.9758,92.8);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#AA0000").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAwIAfAAQARAAAJACQAJADAHAHQAGAIAAAMQAAAQgLAJQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgIQAAgIgFgDQgGgDgRAAIgUAAg");
	this.shape_413.setTransform(269.625,92.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#AA0000").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAAqIAqAAIAAgqIAeAAIAABxg");
	this.shape_414.setTransform(253.5,92.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#AA0000").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAAqIAqAAIAAgqIAeAAIAABxg");
	this.shape_415.setTransform(240.2,92.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#AA0000").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAYAAAPARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_416.setTransform(227.3258,92.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#AA0000").s().p("AAUA5IAAgtQgRAEgIAAQgOAAgLgFQgLgHgEgIQgFgKAAgPIAAgbIAfAAIAAAbQAAAJACAFQABAFAGADQAFADAHAAQAJAAAJgDIAAgxIAfAAIAABxg");
	this.shape_417.setTransform(214.825,92.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#AA0000").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAYAAAPARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_418.setTransform(202.3258,92.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#AA0000").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBOIAdhOIAlAAIAABxg");
	this.shape_419.setTransform(188.275,92.8);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#AA0000").s().p("AgOA5IAAhZIgkAAIAAgYIBlAAIAAAYIgkAAIAABZg");
	this.shape_420.setTransform(174.7,92.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#AA0000").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgHAQgBQAaAAAQARQARARAAAZQAAAZgRARQgRASgZgBQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_421.setTransform(162.625,92.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#AA0000").s().p("AgPAUQAJgDAEgFQADgGAAgIIgOAAIAAgeIAdAAIAAAWQAAAMgCAIQgCAHgGAGQgGAGgJADg");
	this.shape_422.setTransform(146.525,98.75);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#AA0000").s().p("AAbA5IAAgvIgDAAQgJAAgFACQgEADgGAIIgBACIgUAgIgjAAIAWghQAJgOAIgDQgOAAgHgIQgIgJAAgNQAAgMAFgHQAFgJAJgCQAJgDAQAAIA7AAIAABxgAgLghQgEADAAAIQAAAIAFADQAGAEALAAIAUAAIAAgeIgWAAQgKAAgGAEg");
	this.shape_423.setTransform(136.45,92.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#AA0000").s().p("Ag8A4IAAgWIAFAAIAHABQAGgBACgEQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhZIgoAAIAAAzQAAATgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_424.setTransform(123.175,92.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#AA0000").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgHAQgBQAaAAAQARQARARAAAZQAAAZgRARQgRASgZgBQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_425.setTransform(110.125,92.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#AA0000").s().p("AAUA5IAAhZIgnAAIAABZIgfAAIAAhxIBlAAIAABxg");
	this.shape_426.setTransform(96.575,92.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#AA0000").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAYAAAPARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_427.setTransform(77.7258,92.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#AA0000").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYgBQAWAAAMAKQAMAJAGARIgeAGQgCgJgFgFQgGgEgIAAQgLAAgGAIQgHAIAAASQAAATAHAJQAHAIAKAAQAJAAAGgFQAFgFACgMIAeAGQgFATgNALQgNAKgWAAQgYAAgPgPg");
	this.shape_428.setTransform(65.75,92.8);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#AA0000").s().p("AhBBPIAAidIA/AAQARAAAKACQAJABAHAFQAIAFAEAJQAGAIgBAKQABALgHAJQgFAJgLAFQAOAEAIAJQAIAKAAAOQAAALgFAKQgFAKgIAGQgKAGgMACQgIABgeAAgAghA0IAdAAQARAAAEgBQAHgBAFgFQAEgFAAgIQAAgHgDgFQgDgFgHgDQgGgCgVAAIgaAAgAghgPIAUAAIAXgBQAIgBAFgEQAEgFABgIQgBgHgEgEQgEgFgHgBQgGgBgVAAIgSAAg");
	this.shape_429.setTransform(51.75,90.625);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#002277").s().p("AAYA5IAAhIIgvBIIgdAAIAAhxIAdAAIAABGIAuhGIAeAAIAABxg");
	this.shape_430.setTransform(608.9,66.25);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#002277").s().p("AAYA5IAAhIIgvBIIgdAAIAAhxIAdAAIAABGIAuhGIAeAAIAABxg");
	this.shape_431.setTransform(595.4,66.25);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#002277").s().p("AAhBIIAAgeIhaAAIAAhxIAfAAIAABYIAqAAIAAhYIAeAAIAABYIAMAAIAAA3g");
	this.shape_432.setTransform(582.375,67.75);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#002277").s().p("AgrAyQgJgKgBgOQAAgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgDgLAAQgJAAgEADQgFADgCAHIgbgEQAEgRALgHQALgJAXAAQATABAKAEQAKAFAEAIQAEAGAAAVIgBAiQAAAPACAGQABAIAEAIIgdAAIgDgJIgCgDQgHAHgJAEQgIAEgJgBQgTAAgKgJgAAAAHQgMACgFADQgFAFAAAFQAAAHAEAEQAFAGAIAAQAGgBAIgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_433.setTransform(569.05,66.25);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#002277").s().p("Ag2BQIAAicIAcAAIAAAQQAFgJAJgFQAJgFALAAQAUAAAOAPQANAQAAAcQAAAcgOAQQgNAPgUAAQgIAAgIgEQgIgDgIgJIAAA5gAgRgvQgIAJABARQAAATAHAIQAIAJAKAAQAKAAAHgJQAHgGAAgUQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_434.setTransform(556.5,68.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#002277").s().p("AgOA5IAAhZIglAAIAAgYIBnAAIAAAYIglAAIAABZg");
	this.shape_435.setTransform(544.1,66.25);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYgBQAWAAAMAKQAMAJAGASIgfAFQgBgJgFgFQgGgEgIAAQgLAAgGAIQgHAIAAASQAAATAHAJQAHAIAKAAQAJAAAGgFQAFgFACgMIAeAGQgFATgNALQgNAKgWAAQgYAAgPgPg");
	this.shape_436.setTransform(532.75,66.25);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#002277").s().p("AAYA5IAAhIIgvBIIgdAAIAAhxIAdAAIAABGIAuhGIAeAAIAABxg");
	this.shape_437.setTransform(519.7,66.25);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#002277").s().p("AglA5IAAhxIBLAAIAAAYIgtAAIAABZg");
	this.shape_438.setTransform(509.1,66.25);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#002277").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAYAAAPARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_439.setTransform(497.5758,66.25);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#002277").s().p("Ag2BQIAAicIAbAAIAAAQQAGgJAKgFQAJgFAKAAQAUAAAOAPQANAQAAAcQABAcgOAQQgOAPgUAAQgIAAgIgEQgIgDgJgJIAAA5gAgSgvQgHAJAAARQAAATAIAIQAHAJAKAAQALAAAHgJQAHgGAAgUQAAgSgHgJQgIgJgKAAQgKAAgIAJg");
	this.shape_440.setTransform(485.15,68.3);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#002277").s().p("AAbA5IAAgvIgCAAQgLAAgEACQgFADgFAIIgBACIgUAgIgjAAIAVghQAKgOAIgDQgNAAgIgIQgIgJAAgNQAAgMAFgHQAGgJAIgCQAIgDASAAIA6AAIAABxgAgKghQgFADAAAIQAAAIAGADQAFAEAMAAIATAAIAAgeIgVAAQgLAAgFAEg");
	this.shape_441.setTransform(464.8,66.25);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHABQAGgBACgEQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAyQAAATgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_442.setTransform(451.525,66.35);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg3IANAAQAIgIAFgSQAFgSABgsIBbAAIAABYIAMAAIAAA3gAgZARIAzAAIAAhAIgkAAQgBAvgOARg");
	this.shape_443.setTransform(437.875,67.75);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#002277").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAYAAAPARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_444.setTransform(418.8758,66.25);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAwIAfAAQARAAAJACQAJADAHAHQAGAIAAAMQAAAQgLAIQgLAJgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgIQAAgIgFgDQgGgDgRAAIgUAAg");
	this.shape_445.setTransform(403.525,66.25);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#002277").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAAqIApAAIAAgqIAfAAIAABxg");
	this.shape_446.setTransform(387.4,66.25);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#002277").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAAqIAqAAIAAgqIAeAAIAABxg");
	this.shape_447.setTransform(374.1,66.25);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#002277").s().p("AgqAyQgKgKAAgOQgBgKAFgHQAEgIAJgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgDgMAAQgHAAgFADQgEADgDAHIgbgEQAEgRAMgHQAKgJAXAAQATABAKAEQAKAFAEAIQAEAGAAAVIAAAiQAAAPABAGQABAIAEAIIgeAAIgCgJIgBgDQgIAHgJAEQgIAEgJgBQgTAAgJgJgAAAAHQgNACgDADQgHAFABAFQAAAHAEAEQAFAGAIAAQAGgBAIgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_448.setTransform(361.35,66.25);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg3IANAAQAIgIAFgSQAFgSABgsIBbAAIAABYIAMAAIAAA3gAgZARIAzAAIAAhAIgkAAQgBAvgOARg");
	this.shape_449.setTransform(347.925,67.75);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#002277").s().p("AAYA5IAAhIIguBIIgdAAIAAhxIAdAAIAABGIAthGIAdAAIAABxg");
	this.shape_450.setTransform(328.4,66.25);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgHAQgBQAaAAAQARQARARAAAZQAAAZgRARQgRASgZgBQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_451.setTransform(314.975,66.25);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAHAAAQQAAAJgFAHQgGAIgIACQAMABAGAJQAFAHAAAKQAAANgJAIQgKAJgTAAgAgYAmIAYAAQAMAAAGgEQAGgCAAgJQAAgIgHgDQgHgDgSAAIgQAAgAgYgIIAUAAQANAAAGgEQAGgEAAgHQAAgIgFgCQgGgDgOgBIgUAAg");
	this.shape_452.setTransform(301.825,66.25);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYgBQAWAAAMAKQAMAJAGASIgfAFQgBgJgFgFQgGgEgIAAQgLAAgGAIQgHAIAAASQAAATAHAJQAHAIAKAAQAJAAAGgFQAFgFACgMIAeAGQgFATgNALQgNAKgWAAQgYAAgPgPg");
	this.shape_453.setTransform(288.75,66.25);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#002277").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAYAAAPARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_454.setTransform(270.1258,66.25);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#002277").s().p("AgOA5IAAhZIgkAAIAAgYIBlAAIAAAYIgkAAIAABZg");
	this.shape_455.setTransform(258.75,66.25);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#002277").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABGIAthGIAdAAIAABxg");
	this.shape_456.setTransform(246.6,66.25);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg3IANAAQAIgIAFgSQAFgSABgsIBbAAIAABYIAMAAIAAA3gAgZARIAzAAIAAhAIgkAAQgBAvgOARg");
	this.shape_457.setTransform(232.575,67.75);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#002277").s().p("AgpAoQgLgQAAgXQAAgcAPgPQAOgQAXgBQAYAAAPARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAEQgGASgNAIQgMAIgTAAQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_458.setTransform(219.6758,66.25);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAHAAAQQAAAJgFAHQgGAIgIACQAMABAGAJQAFAHAAAKQAAANgJAIQgKAJgTAAgAgYAmIAYAAQAMAAAGgEQAGgCAAgJQAAgIgHgDQgHgDgSAAIgQAAgAgYgIIAUAAQANAAAGgEQAGgEAAgHQAAgIgFgCQgGgDgOgBIgUAAg");
	this.shape_459.setTransform(207.275,66.25);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#002277").s().p("AhBBPIAAidIA/AAQARAAAKACQAJABAHAFQAHAFAGAJQAEAIAAAKQAAALgFAJQgHAJgKAFQAPAEAHAJQAIAKAAAOQAAALgFAKQgFAKgJAGQgJAGgMACQgIABgeAAgAghA0IAdAAQARAAAEgBQAHgBAFgFQAEgFAAgIQAAgHgEgFQgDgFgGgDQgGgCgVAAIgaAAgAghgPIAUAAIAXgBQAIgBAEgEQAGgFAAgIQAAgHgFgEQgDgFgJgBQgFgBgVAAIgSAAg");
	this.shape_460.setTransform(192.45,64.075);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#0099CC").ss(1,1,1).p("AANAAIgZAA");
	this.shape_461.setTransform(261.125,453.1);

	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(337.3,329.3,1,1,0,0,0,109.7,78.8);

	this.radiosetLorS = new lib.an_RadioSet({'id': 'radiosetLorS', 'label':'', 'visible':true, 'items':'dummy, dummy, items, 1, , 0, , , 2, Да, Нет', 'class':'jqueryui-radioset'});

	this.radiosetLorS.name = "radiosetLorS";
	this.radiosetLorS.setTransform(543.35,336.5,0.1992,1.8751,0,0,0,177.5,34.5);

	this.Btn2Instruction = new lib.КнопкаBtn2Instructionнебесная();
	this.Btn2Instruction.name = "Btn2Instruction";
	this.Btn2Instruction.setTransform(400,545);
	new cjs.ButtonHelper(this.Btn2Instruction, 0, 1, 2);

	this.instance_4 = new lib.Символ12();
	this.instance_4.setTransform(400,245.55,1,1,0,0,0,380,43);

	this.BtnNext1 = new lib.КнопкаBtnNext1небесная();
	this.BtnNext1.name = "BtnNext1";
	this.BtnNext1.setTransform(400,545);
	new cjs.ButtonHelper(this.BtnNext1, 0, 1, 2);

	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(402.1,430,1,1,0,0,0,25.1,30.1);

	this.instance_6 = new lib.hand();
	this.instance_6.setTransform(125,159,0.625,0.625);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#002277").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_462.setTransform(739.8,175.9);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#002277").s().p("AgrAyQgJgJgBgPQAAgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgEgDgLgBQgJAAgEAEQgEADgDAIIgbgFQAEgRALgHQALgIAXAAQATgBAKAFQAKAFAEAIQAEAGAAAVIgBAhQAAAQACAHQACAHADAIIgdAAIgDgJIgCgEQgHAIgJAEQgIADgJABQgTAAgKgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAIABQAGAAAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_463.setTransform(730.6,171.7);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#002277").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgFALgBIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_464.setTransform(719.675,171.65);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#002277").s().p("AhMA5IAAhxIAcAAIAABZIAjAAIAAhZIAbAAIAABZIAjAAIAAhZIAcAAIAABxg");
	this.shape_465.setTransform(704.275,171.7);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJADAHAHQAGAJAAALQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_466.setTransform(685.775,171.7);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#002277").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBPIAdhPIAlAAIAABxg");
	this.shape_467.setTransform(668.275,171.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#002277").s().p("AgrAyQgKgJABgPQAAgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgFgDgLgBQgHAAgFAEQgFADgCAIIgcgFQAFgRALgHQAMgIAWAAQATgBAKAFQAKAFAEAIQAEAGAAAVIgBAhQABAQABAHQABAHAFAIIgfAAIgDgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHABQAIAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_468.setTransform(647.85,171.7);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#002277").s().p("AAhBIIAAgeIhaAAIAAhxIAfAAIAABZIAqAAIAAhZIAeAAIAABZIAMAAIAAA2g");
	this.shape_469.setTransform(635.175,173.2);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAeAAQARABAKACQAJADAHAHQAGAJAAALQAAARgLAIQgLAIgYAAgAgYAmIAcAAQAMAAAEgEQAEgFAAgFQAAgJgHgDQgGgDgPAAIgUAAg");
	this.shape_470.setTransform(621.6,171.7);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_471.setTransform(606.825,171.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_472.setTransform(594.325,171.7);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#002277").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgFALgBIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_473.setTransform(583.075,171.65);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJADAHAHQAGAJAAALQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_474.setTransform(561.425,171.7);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#002277").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAAqIArAAIAAgqIAeAAIAABxg");
	this.shape_475.setTransform(545.3,171.7);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_476.setTransform(531.975,171.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#002277").s().p("Ag2BQIAAidIAcAAIAAARQAFgIAKgGQAIgFALAAQAUAAAOAQQANAPAAAcQABAbgOARQgOAPgUAAQgIAAgIgDQgIgFgJgIIAAA5gAgRguQgIAIAAARQABATAHAIQAHAJAKAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgHgKgLABQgKgBgHAKg");
	this.shape_477.setTransform(518.8,173.75);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_478.setTransform(505.075,171.7);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#002277").s().p("AgOA5IAAhYIglAAIAAgZIBnAAIAAAZIglAAIAABYg");
	this.shape_479.setTransform(493.25,171.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYAAQAWAAAMAJQAMAIAGATIgfAFQgBgJgFgEQgGgFgIAAQgLAAgGAIQgHAHAAATQAAATAHAIQAHAJAKAAQAJAAAGgFQAFgFACgLIAeAEQgFAUgNALQgNALgWAAQgYAAgPgQg");
	this.shape_480.setTransform(481.9,171.7);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#002277").s().p("AAYBQIAAhJIguBJIgeAAIAAhxIAeAAIAABHIAthHIAeAAIAABxgAgVg4QgJgJgBgOIAOAAQABAIAFADQAEAEAIAAQAJAAAFgEQAEgDABgIIAOAAQAAAOgJAJQgKAIgOAAQgNAAgJgIg");
	this.shape_481.setTransform(462.75,169.375);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_482.setTransform(449.325,171.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#002277").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgFALgBIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_483.setTransform(438.075,171.65);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#002277").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgEgDgLgBQgJAAgEAEQgFADgCAIIgcgFQAFgRALgHQAMgIAWAAQATgBAKAFQAKAFAEAIQAEAGAAAVIgBAhQABAQABAHQACAHAEAIIgeAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgNADgEACQgFAEgBAHQABAGAEAFQAFAEAHABQAIAAAHgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_484.setTransform(425.75,171.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#002277").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgFALgBIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_485.setTransform(414.825,171.65);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAZAAQAVAAALAJQANAIAFATIgeAFQgBgJgGgEQgEgFgJAAQgLAAgGAIQgHAHAAATQAAATAHAIQAHAJALAAQAIAAAFgFQAGgFACgLIAeAEQgFAUgNALQgNALgWAAQgYAAgPgQg");
	this.shape_486.setTransform(396.55,171.7);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#002277").s().p("AgPAUQAJgDAEgFQADgFAAgJIgOAAIAAgdIAdAAIAAAVQAAAMgCAHQgCAIgGAGQgGAGgJADg");
	this.shape_487.setTransform(380.925,177.65);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAdAAQASABAKACQAJADAHAHQAGAJAAALQAAARgLAIQgMAIgWAAgAgYAmIAcAAQANAAADgEQAEgFAAgFQAAgJgHgDQgGgDgPAAIgUAAg");
	this.shape_488.setTransform(371.7,171.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#002277").s().p("AgOA5IAAhYIgkAAIAAgZIBlAAIAAAZIgkAAIAABYg");
	this.shape_489.setTransform(359.2,171.7);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#002277").s().p("AgqAyQgLgJABgPQAAgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgFgDgLgBQgHAAgFAEQgFADgCAIIgcgFQAFgRALgHQAMgIAWAAQATgBAKAFQAKAFAEAIQAEAGAAAVIAAAhQAAAQABAHQABAHAFAIIgfAAIgDgJIgBgEQgHAIgJAEQgIADgKABQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAHABQAIAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_490.setTransform(347.7,171.7);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAHQgGAHgIADQAMACAGAHQAFAJAAAJQAAANgJAJQgKAIgTAAgAgYAlIAYAAQAMAAAGgDQAGgDAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANABAGgEQAGgEAAgHQAAgHgFgEQgGgDgOAAIgUAAg");
	this.shape_491.setTransform(335.475,171.7);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJADAHAHQAGAJAAALQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_492.setTransform(319.025,171.7);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#002277").s().p("AgwAbIAbgEQAHARAOAAQAJAAAFgFQAFgFAAgGQAAgGgFgEQgFgEgJAAIgEAAIAAgTIAKgBQAEgBADgDQADgFAAgEQAAgGgEgFQgEgEgIAAQgFAAgEACQgFADgEAKIgagFQAEgPANgIQANgIAPABQAVAAALAJQALAJAAAOQAAAKgFAGQgFAFgKAFQANADAGAGQAGAIAAAKQAAAOgMAJQgNAKgXAAQgoAAgJghg");
	this.shape_493.setTransform(303.775,171.7);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgFgDgLgBQgHAAgFAEQgEADgDAIIgcgFQAFgRAMgHQAKgIAXAAQATgBAKAFQAKAFAEAIQAEAGAAAVIAAAhQgBAQACAHQABAHAFAIIgfAAIgDgJIAAgEQgIAIgJAEQgIADgKABQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAEAIABQAHAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_494.setTransform(292.25,171.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#002277").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgFALgBIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_495.setTransform(281.325,171.65);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_496.setTransform(268.425,171.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#002277").s().p("AAUA5IAAhYIgnAAIAABYIgfAAIAAhxIBlAAIAABxg");
	this.shape_497.setTransform(254.875,171.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#002277").s().p("AgOA5IAAhYIglAAIAAgZIBmAAIAAAZIgkAAIAABYg");
	this.shape_498.setTransform(236.9,171.7);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGARgNAJQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_499.setTransform(225.5758,171.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_500.setTransform(212.275,173.2);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#002277").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_501.setTransform(199.925,174.025);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#002277").s().p("AggBJQgOgJgFgPQgGgPAAgiQAAgpAPgSQAPgSAkAAIAQAAQAGAAACgEIAVAAQgBAOgGAHQgHAHgYAAIgGAAIgEAAQgNAAgJADQgJADgGAJQgGAJAAAVQAHgNALgGQAKgGAOAAQAWAAAQARQAPARAAAXQAAAXgQASQgQARgaAAQgSAAgOgJgAgTAAQgIAIAAAPQAAAQAIAJQAIAJALAAQALAAAIgKQAIgJAAgPQAAgPgIgIQgIgKgLAAQgLAAgIAKg");
	this.shape_502.setTransform(187.425,169.475);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#002277").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgEgDgLgBQgJAAgEAEQgFADgCAIIgcgFQAFgRALgHQAMgIAWAAQATgBAKAFQAKAFAEAIQAEAGAAAVIgBAhQABAQABAHQACAHAEAIIgeAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgMADgFACQgFAEgBAHQABAGAEAFQAFAEAHABQAIAAAHgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_503.setTransform(101.3,171.7);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#002277").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgFALgBIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_504.setTransform(90.375,171.65);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#002277").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_505.setTransform(77.925,174.025);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#002277").s().p("Ag7BPIAAidIAzAAQAcAAAJADQANADAJAMQAJAMAAATQAAAOgFAKQgFAJgIAGQgIAFgJACQgLACgVAAIgUAAIAAA8gAgbgGIARAAQASAAAGgDQAGgCAEgGQAEgFAAgHQAAgIgFgGQgFgGgIgBQgGgBgQAAIgPAAg");
	this.shape_506.setTransform(64.875,169.525);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#002277").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_507.setTransform(773.2,149.35);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAHQgGAHgIADQAMACAGAHQAFAJAAAJQAAANgJAJQgKAIgTAAgAgYAlIAYAAQAMAAAGgDQAGgDAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANABAGgEQAGgEAAgHQAAgHgFgEQgGgDgOAAIgUAAg");
	this.shape_508.setTransform(763.725,145.15);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJADAHAHQAGAJAAALQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_509.setTransform(747.275,145.15);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#002277").s().p("Ag3BQIAAidIAcAAIAAARQAGgIAKgGQAIgFALAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgJAAgHgDQgIgFgJgIIAAA5gAgSguQgGAIgBARQAAATAIAIQAHAJAKAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgIgKgKABQgKgBgIAKg");
	this.shape_510.setTransform(731.4,147.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#002277").s().p("AgwAbIAbgEQAHARAOAAQAJAAAFgFQAFgFAAgGQAAgGgFgEQgFgEgJAAIgEAAIAAgTIAKgBQAEgBADgDQADgFAAgEQAAgGgEgFQgEgEgIAAQgFAAgEACQgFADgEAKIgagGQAEgOANgIQANgIAPABQAVAAALAJQALAJAAAOQAAAKgFAGQgFAFgKAFQANADAGAGQAGAIAAAKQAAAOgMAJQgNAKgXAAQgoAAgJghg");
	this.shape_511.setTransform(718.575,145.15);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgFgDgLgBQgHAAgFAEQgEADgDAIIgbgFQAEgRAMgHQAKgIAXAAQATgBAKAFQAKAFAEAIQAEAGAAAVIAAAhQgBAQACAHQACAHAEAIIgfAAIgCgJIgBgEQgIAIgJAEQgIADgJABQgTAAgJgKgAAAAHQgNADgDACQgHAEABAHQgBAGAGAFQAEAEAIABQAGAAAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_512.setTransform(707.05,145.15);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#002277").s().p("Ag2BQIAAidIAbAAIAAARQAGgIAKgGQAIgFALAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgJAAgHgDQgIgFgJgIIAAA5gAgSguQgGAIgBARQAAATAIAIQAHAJAKAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgIgKgKABQgKgBgIAKg");
	this.shape_513.setTransform(694.5,147.2);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#002277").s().p("AAbA5IAAgwIgCAAQgLAAgEADQgFADgFAIIgBACIgUAgIgjAAIAVghQAKgPAHgCQgMAAgIgIQgIgJAAgNQAAgLAFgJQAGgHAIgDQAIgDASAAIA6AAIAABxgAgKghQgFADAAAIQAAAIAGAEQAFACAMAAIATAAIAAgdIgVAAQgMABgEADg");
	this.shape_514.setTransform(674.15,145.15);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYAAQAWAAAMAJQAMAIAFATIgdAFQgCgJgFgEQgGgFgIAAQgLAAgGAIQgHAHAAATQAAATAHAIQAHAJAKAAQAJAAAGgFQAFgFACgLIAeAEQgFAUgNALQgNALgWAAQgYAAgPgQg");
	this.shape_515.setTransform(662.55,145.15);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#002277").s().p("AgOA5IAAhYIglAAIAAgZIBnAAIAAAZIglAAIAABYg");
	this.shape_516.setTransform(651.2,145.15);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#002277").s().p("AAYA5IAAhIIgvBIIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxg");
	this.shape_517.setTransform(639.05,145.15);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_518.setTransform(625.025,146.65);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_519.setTransform(611.975,145.15);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#002277").s().p("AAWA5IgWgjIgYAjIgjAAIAqg6Igog3IAlAAIAUAfIAUgfIAkAAIgnA2IAqA7g");
	this.shape_520.setTransform(599.6,145.15);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#002277").s().p("AgrAyQgJgJgBgPQABgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgEgDgLgBQgJAAgEAEQgEADgDAIIgbgFQAEgRALgHQALgIAXAAQATgBAKAFQAKAFAEAIQAEAGAAAVIgBAhQAAAQACAHQACAHADAIIgdAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAFQAFAEAHABQAHAAAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_521.setTransform(587.4,145.15);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGARgNAJQgMAJgTAAQgdAAgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgHgJAAQgJAAgGAHg");
	this.shape_522.setTransform(555.6258,145.15);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_523.setTransform(542.325,146.65);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#002277").s().p("AglA5IAAhxIBLAAIAAAZIgtAAIAABYg");
	this.shape_524.setTransform(532.65,145.15);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#002277").s().p("AgPAUQAJgDAEgFQADgFAAgJIgOAAIAAgdIAdAAIAAAVQAAAMgCAHQgCAIgGAGQgGAGgJADg");
	this.shape_525.setTransform(518.025,151.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgFgDgLgBQgHAAgFAEQgEADgDAIIgbgFQAEgRAMgHQALgIAWAAQATgBAKAFQAKAFAEAIQAEAGAAAVIAAAhQgBAQACAHQACAHAEAIIgfAAIgCgJIgBgEQgIAIgJAEQgIADgJABQgSAAgKgKgAAAAHQgNADgDACQgHAEABAHQgBAGAGAFQAEAEAIABQAGAAAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_526.setTransform(509.05,145.15);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#002277").s().p("AAhBIIAAgeIhaAAIAAhxIAfAAIAABZIAqAAIAAhZIAeAAIAABZIAMAAIAAA2g");
	this.shape_527.setTransform(496.375,146.65);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAeAAQARABAKACQAKADAFAHQAHAJAAALQAAARgLAIQgMAIgXAAgAgYAmIAbAAQANAAAEgEQAEgFAAgFQAAgJgGgDQgHgDgPAAIgUAAg");
	this.shape_528.setTransform(482.8,145.15);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_529.setTransform(468.025,145.25);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_530.setTransform(455.525,145.15);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#002277").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgFALgBIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_531.setTransform(444.275,145.1);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJADAHAHQAGAJAAALQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_532.setTransform(422.625,145.15);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_533.setTransform(393.175,145.15);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#002277").s().p("Ag2BQIAAidIAcAAIAAARQAFgIAJgGQAJgFALAAQAUAAAOAQQAOAPAAAcQgBAbgOARQgNAPgUAAQgJAAgHgDQgIgFgIgIIAAA5gAgRguQgIAIABARQAAATAHAIQAIAJAKAAQAKAAAHgIQAHgHAAgUQAAgSgHgIQgHgKgLABQgKgBgHAKg");
	this.shape_534.setTransform(380,147.2);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_535.setTransform(366.275,145.15);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#002277").s().p("AgOA5IAAhYIglAAIAAgZIBnAAIAAAZIglAAIAABYg");
	this.shape_536.setTransform(354.45,145.15);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAZAAQAUAAANAJQAMAIAGATIgfAFQgBgJgGgEQgEgFgJAAQgKAAgHAIQgHAHAAATQAAATAHAIQAHAJALAAQAIAAAGgFQAFgFACgLIAeAEQgFAUgNALQgNALgWAAQgYAAgPgQg");
	this.shape_537.setTransform(343.1,145.15);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#002277").s().p("AAYBQIAAhJIgvBJIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxgAgVg4QgJgJgCgOIAPAAQABAIAFADQAEAEAIAAQAJAAAFgEQAEgDABgIIAPAAQgCAOgIAJQgJAIgPAAQgOAAgIgIg");
	this.shape_538.setTransform(323.95,142.825);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_539.setTransform(310.525,145.15);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#002277").s().p("AgOA5IAAhYIgkAAIAAgZIBlAAIAAAZIgkAAIAABYg");
	this.shape_540.setTransform(298.7,145.15);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAZAAQAUAAAMAJQANAIAFATIgdAFQgCgJgGgEQgEgFgJAAQgKAAgHAIQgHAHAAATQAAATAHAIQAHAJALAAQAIAAAFgFQAGgFACgLIAeAEQgFAUgNALQgNALgWAAQgYAAgPgQg");
	this.shape_541.setTransform(281.25,145.15);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#002277").s().p("AAXBQIAAhJIguBJIgcAAIAAhxIAcAAIAABHIAuhHIAeAAIAABxgAgVg4QgJgJgCgOIAPAAQABAIAEADQAFAEAIAAQAJAAAEgEQAFgDABgIIAPAAQgCAOgJAJQgIAIgPAAQgOAAgIgIg");
	this.shape_542.setTransform(262.1,142.825);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_543.setTransform(248.675,145.15);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#002277").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgFALgBIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_544.setTransform(237.425,145.1);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#002277").s().p("AhMA5IAAhxIAcAAIAABZIAjAAIAAhZIAbAAIAABZIAjAAIAAhZIAcAAIAABxg");
	this.shape_545.setTransform(222.025,145.15);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJADAHAHQAGAJAAALQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_546.setTransform(203.525,145.15);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#002277").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBPIAdhPIAlAAIAABxg");
	this.shape_547.setTransform(186.025,145.15);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAdAAQASABAKACQAKADAFAHQAHAJAAALQAAARgLAIQgMAIgWAAgAgYAmIAbAAQANAAAEgEQAEgFAAgFQAAgJgGgDQgHgDgPAAIgUAAg");
	this.shape_548.setTransform(165.35,145.15);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#002277").s().p("AgOA5IAAhYIglAAIAAgZIBnAAIAAAZIglAAIAABYg");
	this.shape_549.setTransform(152.85,145.15);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#002277").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgEgDgLgBQgJAAgEAEQgFADgCAIIgcgFQAFgRALgHQAMgIAWAAQATgBAKAFQAKAFAEAIQAEAGAAAVIgBAhQABAQABAHQACAHADAIIgdAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgMADgFACQgFAEgBAHQABAGAFAFQAEAEAHABQAIAAAHgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_550.setTransform(141.35,145.15);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#002277").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgFALgBIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_551.setTransform(130.425,145.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#002277").s().p("AAXA5IAAhIIgtBIIgdAAIAAhxIAdAAIAABHIAthHIAdAAIAABxg");
	this.shape_552.setTransform(117.45,145.15);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_553.setTransform(103.075,145.25);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#002277").s().p("AAQA5IgQghQgDgJgDgDQgEgDgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgFALgBIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_554.setTransform(91.675,145.1);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_555.setTransform(72.675,145.15);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_556.setTransform(58.625,146.65);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#002277").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgFgDgKgBQgJAAgEAEQgFADgCAIIgcgFQAFgRALgHQAMgIAWAAQATgBAKAFQAKAFAEAIQAEAGAAAVIgBAhQABAQABAHQACAHAEAIIgeAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgNADgEACQgFAEgBAHQABAGAFAFQAEAEAHABQAIAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_557.setTransform(45.85,145.15);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#002277").s().p("AAfBPIAAhFIg9AAIAABFIggAAIAAidIAgAAIAAA+IA9AAIAAg+IAgAAIAACdg");
	this.shape_558.setTransform(31.7,142.975);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#002277").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_559.setTransform(598.45,122.8);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#002277").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBPIAdhPIAlAAIAABxg");
	this.shape_560.setTransform(587.325,118.6);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_561.setTransform(572.725,118.6);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAHQgGAHgIADQAMACAGAHQAFAJAAAJQAAANgJAJQgKAIgTAAgAgYAlIAYAAQAMAAAGgDQAGgDAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANABAGgEQAGgEAAgHQAAgHgFgEQgGgDgOAAIgUAAg");
	this.shape_562.setTransform(559.875,118.6);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARABAJACQAJADAHAHQAGAJAAALQAAARgLAIQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgHQAAgJgFgDQgGgDgRAAIgUAAg");
	this.shape_563.setTransform(543.425,118.6);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#002277").s().p("Ag2BQIAAidIAbAAIAAARQAGgIAKgGQAIgFALAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgJAAgHgEQgIgEgJgIIAAA5gAgSguQgGAIgBARQAAATAIAIQAHAJAKAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgIgKgKABQgKgBgIAKg");
	this.shape_564.setTransform(527.55,120.65);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#002277").s().p("AgwAbIAbgEQAHARAOAAQAJAAAFgFQAFgFAAgGQAAgGgFgEQgFgEgJAAIgEAAIAAgTIAKgBQAEgBADgDQADgFAAgEQAAgGgEgFQgEgEgIAAQgFAAgEACQgFADgEAKIgagFQAEgPANgIQANgIAPABQAVAAALAJQALAJAAAOQAAAKgFAFQgFAGgKAFQANADAGAGQAGAIAAAKQAAAOgMAJQgNAKgXAAQgoAAgJghg");
	this.shape_565.setTransform(514.725,118.6);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgFgDgLgBQgHAAgFAEQgEADgDAIIgcgFQAFgRAMgHQALgIAWAAQATgBAKAFQAKAFAEAIQAEAGAAAVIAAAhQgBAQACAHQACAHAEAIIgfAAIgCgJIgBgEQgIAIgJAEQgIADgJABQgSAAgKgKgAAAAHQgNADgDACQgHAEABAHQgBAGAGAEQAEAFAIABQAGAAAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_566.setTransform(503.2,118.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#002277").s().p("Ag2BQIAAidIAbAAIAAARQAGgIAKgGQAIgFALAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgJAAgHgEQgIgEgJgIIAAA5gAgSguQgGAIgBARQAAATAIAIQAHAJAKAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgIgKgKABQgKgBgIAKg");
	this.shape_567.setTransform(490.65,120.65);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYAAQAWAAAMAJQAMAIAGATIgfAFQgBgJgFgEQgGgFgIAAQgLAAgGAIQgHAHAAATQAAATAHAIQAHAJAKAAQAJAAAGgFQAFgFACgLIAeAEQgFAUgNALQgNALgWAAQgYAAgPgQg");
	this.shape_568.setTransform(471.55,118.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_569.setTransform(452.475,118.6);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#002277").s().p("AAhBIIAAgeIhaAAIAAhxIAfAAIAABZIAqAAIAAhZIAeAAIAABZIAMAAIAAA2g");
	this.shape_570.setTransform(439.425,120.1);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAeAAQARABAKACQAJADAHAHQAGAJAAALQAAARgLAIQgLAIgYAAgAgYAmIAcAAQANAAADgFQAEgEAAgFQAAgJgHgDQgGgDgPAAIgUAAg");
	this.shape_571.setTransform(425.85,118.6);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_572.setTransform(411.075,118.7);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_573.setTransform(398.575,118.6);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#002277").s().p("AAQA5IgQghQgDgJgDgEQgEgCgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgFALgBIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_574.setTransform(387.325,118.55);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#002277").s().p("AgOA5IAAhYIgkAAIAAgZIBlAAIAAAZIgkAAIAABYg");
	this.shape_575.setTransform(369.65,118.6);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGARgNAJQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_576.setTransform(358.3258,118.6);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_577.setTransform(345.025,120.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#002277").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_578.setTransform(332.675,120.925);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#002277").s().p("AggBJQgOgJgFgPQgGgPAAgiQAAgpAPgSQAPgSAkAAIAQAAQAGAAACgEIAVAAQgBAOgGAHQgHAHgYAAIgGAAIgEAAQgNAAgJADQgJADgGAJQgGAJAAAVQAHgNALgGQAKgGAOAAQAWAAAQARQAPARAAAXQAAAXgQASQgQARgaAAQgSAAgOgJgAgTAAQgIAIAAAPQAAAQAIAJQAIAJALAAQALAAAIgKQAIgJAAgPQAAgPgIgIQgIgKgLAAQgLAAgIAKg");
	this.shape_579.setTransform(320.175,116.375);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGARgNAJQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgGQgHgIgJAAQgJAAgGAIg");
	this.shape_580.setTransform(301.0258,118.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#002277").s().p("AAWA5IAAgwIgrAAIAAAwIgeAAIAAhxIAeAAIAAAqIArAAIAAgqIAeAAIAABxg");
	this.shape_581.setTransform(288.35,118.6);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgFgDgLgBQgHAAgFAEQgEADgDAIIgcgFQAFgRAMgHQAKgIAXAAQATgBAKAFQAKAFAEAIQAEAGAAAVIAAAhQgBAQACAHQABAHAFAIIgfAAIgDgJIAAgEQgIAIgJAEQgIADgKABQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAEQAEAFAHABQAIAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_582.setTransform(275.6,118.6);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#002277").s().p("Ag3BQIAAidIAcAAIAAARQAGgIAKgGQAJgFAKAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgJAAgHgEQgIgEgJgIIAAA5gAgSguQgGAIgBARQAAATAIAIQAIAJAJAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgHgKgLABQgKgBgIAKg");
	this.shape_583.setTransform(263.05,120.65);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#002277").s().p("AAQA5IgQghQgDgJgDgEQgEgCgHAAIAAAwIgeAAIAAhxIAeAAIAAAvQAIgBADgEQADgDAEgNQAFgRAHgEQAHgFALgBIAMABIAAAUQgMAAgDADQgDACgEALQgFARgKADQAOADAKAVIABACIARAfg");
	this.shape_584.setTransform(251.225,118.55);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#002277").s().p("Ag0AYIAegGQADASARAAQAKAAAGgGQAGgIABgOIgeAAIAAgRIAfAAQgBgNgGgGQgGgHgJAAQgHAAgGADQgGADgBAIIgegGQALggAmABQAaAAAOAPQAOARAAAaQAAAdgOAPQgOAQgaAAQgoAAgLgkg");
	this.shape_585.setTransform(238.775,118.6);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#002277").s().p("AgrAyQgJgJgBgPQABgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgDQAAgIgEgEQgEgDgLgBQgJAAgEAEQgEADgDAIIgbgFQAEgRALgHQALgIAXAAQATgBAKAFQAKAFAEAIQAEAGAAAVIgBAhQAAAQACAHQACAHADAIIgdAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgMADgFACQgFAEAAAHQAAAGAEAEQAFAFAHABQAHAAAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_586.setTransform(220.65,118.6);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#002277").s().p("AAfBPIAAhFIg9AAIAABFIggAAIAAidIAgAAIAAA+IA9AAIAAg+IAgAAIAACdg");
	this.shape_587.setTransform(206.5,116.425);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#002277").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_588.setTransform(555.75,96.25);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#002277").s().p("AgMAtQgNgPgCgRIgXAAIAAAsIgfAAIAAhxIAfAAIAAAuIAXAAQADgWAOgNQANgNAYAAQAYAAAQAPQAPAQAAAcQAAARgGANQgFANgMAHQgNAJgSAAQgcAAgMgPgAAIgbQgFAIAAARQAAAWAFAIQAHAIANAAQALAAAGgJQAFgJAAgSQABgUgHgIQgGgHgMAAQgMAAgGAIg");
	this.shape_589.setTransform(543.6,92.05);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#002277").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABHIAthHIAdAAIAABxg");
	this.shape_590.setTransform(527.1,92.05);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#002277").s().p("AAWA5IAAgwIgqAAIAAAwIgfAAIAAhxIAfAAIAAAqIAqAAIAAgqIAeAAIAABxg");
	this.shape_591.setTransform(513.7,92.05);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFAEQgEADgDAIIgcgFQAFgRAMgHQALgIAWAAQATgBAKAFQAKAFAEAIQAEAGAAAVIAAAhQgBAQACAHQACAHAEAIIgfAAIgCgJIgBgEQgIAIgJAEQgIADgJABQgSAAgKgKgAAAAHQgNADgDACQgHAEABAHQgBAGAGAFQAEAEAIABQAGAAAIgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_592.setTransform(500.95,92.05);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_593.setTransform(487.525,93.55);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgMgBQgHAAgFAEQgEADgDAIIgbgFQAEgRAMgHQAKgIAXAAQATgBAKAFQAKAFAEAIQAEAGAAAVIAAAhQAAAQABAHQABAHAEAIIgeAAIgCgJIgBgEQgIAIgJAEQgIADgJABQgTAAgJgKgAAAAHQgMADgEACQgHAEABAHQAAAGAEAFQAFAEAIABQAGAAAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_594.setTransform(474.75,92.05);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#002277").s().p("AgwAbIAbgEQAHARAOAAQAJAAAFgFQAFgFAAgFQAAgHgFgEQgFgEgJAAIgEAAIAAgTIAKgBQAEgBADgDQADgFAAgEQAAgGgEgFQgEgEgIAAQgFAAgEACQgFADgEAKIgagGQAEgOANgIQANgIAPABQAVAAALAJQALAJAAAOQAAAKgFAGQgFAFgKAFQANADAGAGQAGAIAAAKQAAAOgMAJQgNAKgXAAQgoAAgJghg");
	this.shape_595.setTransform(463.125,92.05);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#002277").s().p("AgwBOIgCgXIAMABQALAAAFgGQAFgGADgKIgshxIAgAAIAbBQIAahQIAgAAIgpBsIgHAUQgEAKgDAGIgIAIQgEADgHACQgHACgJAAQgIAAgJgCg");
	this.shape_596.setTransform(445.625,94.375);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#002277").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBPIAdhPIAlAAIAABxg");
	this.shape_597.setTransform(431.875,92.05);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_598.setTransform(417.275,92.05);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAHQgGAHgIADQAMACAGAHQAFAJAAAJQAAANgJAJQgKAIgTAAgAgYAlIAYAAQAMAAAGgDQAGgDAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANABAGgEQAGgEAAgHQAAgHgFgEQgGgDgOAAIgUAAg");
	this.shape_599.setTransform(404.425,92.05);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#002277").s().p("Ag2BQIAAidIAcAAIAAARQAFgIAJgGQAJgFALAAQAUAAAOAQQANAPAAAcQAAAbgOARQgNAPgUAAQgIAAgIgDQgIgFgIgIIAAA5gAgRguQgIAIABARQAAATAHAIQAIAJAKAAQAKAAAHgIQAHgHAAgUQAAgSgHgIQgHgKgLABQgKgBgHAKg");
	this.shape_600.setTransform(390.9,94.1);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGARgNAJQgMAJgTAAQgdAAgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgHgJAAQgJAAgGAHg");
	this.shape_601.setTransform(377.6258,92.05);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#002277").s().p("AAUA5IAAhYIgnAAIAABYIgfAAIAAhxIBlAAIAABxg");
	this.shape_602.setTransform(364.825,92.05);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_603.setTransform(345.525,92.05);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#002277").s().p("AAUA5IAAhYIgnAAIAABYIgfAAIAAhxIBlAAIAABxg");
	this.shape_604.setTransform(331.975,92.05);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#002277").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgEgDgLgBQgJAAgEAEQgFADgCAIIgcgFQAFgRALgHQAMgIAWAAQATgBAKAFQAKAFAEAIQAEAGAAAVIgBAhQABAQABAHQACAHAEAIIgeAAIgEgJIgBgEQgHAIgJAEQgIADgKABQgRAAgLgKgAAAAHQgNADgEACQgFAEgBAHQABAGAEAFQAFAEAHABQAIAAAHgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_605.setTransform(313.25,92.05);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYAAQAWAAAMAJQAMAIAGATIgfAFQgBgJgFgEQgGgFgIAAQgLAAgGAIQgHAHAAATQAAATAHAIQAHAJAKAAQAJAAAGgFQAFgFACgLIAeAEQgFAUgNALQgNALgWAAQgYAAgPgQg");
	this.shape_606.setTransform(300.9,92.05);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_607.setTransform(288.225,92.05);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#002277").s().p("Ag3BQIAAidIAdAAIAAARQAFgIAJgGQAKgFAKAAQAUAAAOAQQAOAPAAAcQgBAbgOARQgNAPgUAAQgIAAgIgDQgIgFgIgIIAAA5gAgRguQgIAIABARQAAATAHAIQAIAJAKAAQAKAAAHgIQAHgHAAgUQAAgSgHgIQgHgKgLABQgKgBgHAKg");
	this.shape_608.setTransform(275.05,94.1);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#002277").s().p("AAUA5IAAhYIgnAAIAABYIgfAAIAAhxIBlAAIAABxg");
	this.shape_609.setTransform(261.225,92.05);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_610.setTransform(248.025,92.05);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#002277").s().p("AAbA5IAAgwIgDAAQgKAAgEADQgFADgFAIIgBACIgUAgIgjAAIAWghQAJgPAHgCQgNAAgHgIQgIgJAAgNQAAgLAFgJQAGgHAIgDQAJgDAQAAIA7AAIAABxgAgLghQgEADAAAIQAAAIAFADQAGADALAAIAUAAIAAgdIgWAAQgKABgGADg");
	this.shape_611.setTransform(669.15,65.5);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#002277").s().p("AAXA5IAAhIIguBIIgcAAIAAhxIAcAAIAABHIAuhHIAeAAIAABxg");
	this.shape_612.setTransform(656.75,65.5);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#002277").s().p("AAVA5IAAgwIgqAAIAAAwIgeAAIAAhxIAeAAIAAAqIAqAAIAAgqIAfAAIAABxg");
	this.shape_613.setTransform(643.35,65.5);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAJgTAAQgdAAgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgHgJAAQgJAAgGAHg");
	this.shape_614.setTransform(630.4758,65.5);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_615.setTransform(617.175,67);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#002277").s().p("AAtA5IgNghQgFgIgCgEQgEgDgGAAIAAAwIgdAAIAAgwQgGAAgCACQgDADgFAKIgPAhIggAAIAQgfQAMgYANgCQgJgEgGgQQgEgLgDgCQgDgDgMAAIAAgUIAMgBQAKAAAHAFQAHAEAHASQAEAOAEADQADAEAFAAIAAgvIAdAAIAAAvQAGAAADgEIAIgRQAGgSAGgEQAIgFAKAAIAMABIAAAUQgLAAgEADQgDACgEALQgFAQgLAEQAOACAMAYIAQAfg");
	this.shape_616.setTransform(602.7,65.45);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_617.setTransform(588.525,65.5);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#002277").s().p("AAWA5IgWgjIgYAjIgiAAIAog6Igng3IAlAAIAUAfIAUgfIAkAAIgnA2IArA7g");
	this.shape_618.setTransform(576.15,65.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_619.setTransform(563.925,65.5);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#002277").s().p("Ag2BQIAAidIAcAAIAAARQAFgIAKgGQAIgFALAAQAUAAAOAQQANAPAAAcQABAbgOARQgOAPgUAAQgIAAgIgEQgIgEgJgIIAAA5gAgRguQgIAIAAARQABATAHAIQAHAJAKAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgHgKgLABQgKgBgHAKg");
	this.shape_620.setTransform(550.75,67.55);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#002277").s().p("AAUA5IAAhYIgnAAIAABYIgfAAIAAhxIBlAAIAABxg");
	this.shape_621.setTransform(536.925,65.5);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#002277").s().p("AAbA5IAAgwIgCAAQgLAAgEADQgFADgFAIIgBACIgUAgIgjAAIAVghQAKgPAIgCQgNAAgIgIQgIgJAAgNQAAgLAFgJQAFgHAJgDQAJgDARAAIA6AAIAABxgAgKghQgFADAAAIQAAAIAGADQAFADAMAAIATAAIAAgdIgVAAQgMABgEADg");
	this.shape_622.setTransform(517.1,65.5);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgDQABgFAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAxQAAAUgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_623.setTransform(503.825,65.6);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#002277").s().p("AArBIIAAgeIhVAAIAAAeIgZAAIAAg2IANAAQAIgKAFgQQAFgTABgsIBbAAIAABZIAMAAIAAA2gAgZASIAzAAIAAhAIgkAAQgBAugOASg");
	this.shape_624.setTransform(490.175,67);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#002277").s().p("AAbA5IAAgwIgCAAQgLAAgEADQgFADgFAIIgBACIgUAgIgjAAIAVghQAKgPAIgCQgNAAgIgIQgIgJAAgNQAAgLAFgJQAGgHAIgDQAIgDASAAIA6AAIAABxgAgKghQgFADAAAIQAAAIAGADQAFADAMAAIATAAIAAgdIgVAAQgLABgFADg");
	this.shape_625.setTransform(470.2,65.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAYAAQAWAAAMAJQAMAIAGATIgeAFQgCgJgFgEQgGgFgIAAQgLAAgGAIQgHAHAAATQAAATAHAIQAHAJAKAAQAJAAAGgFQAFgFACgLIAeAEQgFAUgNALQgNALgWAAQgYAAgPgQg");
	this.shape_626.setTransform(458.6,65.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAvIAdAAQASABAKACQAJADAHAHQAGAJAAALQAAARgLAIQgMAIgWAAgAgYAmIAcAAQANAAADgFQAEgEAAgFQAAgJgHgDQgGgDgPAAIgUAAg");
	this.shape_627.setTransform(445.95,65.5);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#002277").s().p("AgOA5IAAhYIgkAAIAAgZIBlAAIAAAZIgkAAIAABYg");
	this.shape_628.setTransform(433.45,65.5);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#002277").s().p("AgqAyQgLgJABgPQAAgKAEgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFAEQgFADgCAIIgcgFQAFgRALgHQAMgIAWAAQATgBAKAFQAKAFAEAIQAEAGAAAVIAAAhQAAAQABAHQABAHAFAIIgfAAIgDgJIgBgEQgHAIgJAEQgIADgKABQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAEQAEAFAHABQAIAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_629.setTransform(421.95,65.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAIQAKAGAAAPQAAAKgFAHQgGAHgIADQAMACAGAHQAFAJAAAJQAAANgJAJQgKAIgTAAgAgYAlIAYAAQAMAAAGgDQAGgDAAgHQAAgJgHgDQgHgDgSgBIgQAAgAgYgJIAUAAQANABAGgEQAGgEAAgHQAAgHgFgEQgGgDgOAAIgUAAg");
	this.shape_630.setTransform(409.725,65.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_631.setTransform(395.925,65.5);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#002277").s().p("Ag3BQIAAidIAcAAIAAARQAGgIAKgGQAJgFAKAAQAUAAAOAQQANAPAAAcQAAAbgNARQgOAPgUAAQgJAAgHgEQgIgEgJgIIAAA5gAgSguQgGAIgBARQAAATAIAIQAIAJAJAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgHgKgLABQgKgBgIAKg");
	this.shape_632.setTransform(382.75,67.55);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#002277").s().p("AAYA5IAAhIIgvBIIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxg");
	this.shape_633.setTransform(368.95,65.5);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#002277").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAAqIApAAIAAgqIAfAAIAABxg");
	this.shape_634.setTransform(355.55,65.5);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAJgTAAQgdAAgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgHgJAAQgJAAgGAHg");
	this.shape_635.setTransform(342.6758,65.5);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#002277").s().p("Ag2BQIAAidIAcAAIAAARQAFgIAKgGQAIgFALAAQAUAAAOAQQANAPAAAcQABAbgOARQgOAPgUAAQgIAAgIgEQgIgEgJgIIAAA5gAgRguQgIAIAAARQABATAHAIQAHAJAKAAQALAAAHgIQAHgHAAgUQAAgSgHgIQgHgKgLABQgKgBgHAKg");
	this.shape_636.setTransform(330.25,67.55);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#002277").s().p("AgOA5IAAhYIglAAIAAgZIBnAAIAAAZIglAAIAABYg");
	this.shape_637.setTransform(317.85,65.5);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_638.setTransform(306.325,65.5);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#002277").s().p("AAUA5IAAhYIgnAAIAABYIgfAAIAAhxIBlAAIAABxg");
	this.shape_639.setTransform(292.775,65.5);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_640.setTransform(273.475,65.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#002277").s().p("AAVA5IAAgwIgpAAIAAAwIgfAAIAAhxIAfAAIAAAqIApAAIAAgqIAfAAIAABxg");
	this.shape_641.setTransform(260.05,65.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#002277").s().p("AAtA5IgNghQgEgIgEgEQgDgDgGAAIAAAwIgdAAIAAgwQgGAAgCACQgDADgFAKIgPAhIggAAIAQgfQAMgYANgCQgJgEgFgQQgEgLgEgCQgDgDgMAAIAAgUIAMgBQAKAAAHAFQAHAEAHASQAFAOADADQADAEAFAAIAAgvIAdAAIAAAvQAGAAADgEIAIgRQAFgSAHgEQAIgFAKAAIANABIAAAUQgMAAgEADQgEACgDALQgGAQgKAEQAOACAMAYIAQAfg");
	this.shape_642.setTransform(245.6,65.45);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgIAQABQAaAAAQAQQARARAAAZQAAAagRARQgRAQgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_643.setTransform(231.425,65.5);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#002277").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBPIAdhPIAlAAIAABxg");
	this.shape_644.setTransform(216.925,65.5);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#002277").s().p("AgmAsQgPgQAAgcQAAgbAPgQQAPgPAZAAQAUAAAMAJQANAIAFATIgeAFQgBgJgGgEQgEgFgJAAQgKAAgHAIQgHAHAAATQAAATAHAIQAHAJALAAQAIAAAFgFQAGgFACgLIAeAEQgFAUgNALQgNALgWAAQgYAAgPgQg");
	this.shape_645.setTransform(196.65,65.5);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgIQAFgHAIgDQAIgEAQgDQAUgEAIgEIAAgCQAAgJgEgEQgFgDgLgBQgHAAgFAEQgEADgDAIIgcgFQAFgRAMgHQAKgIAXAAQATgBAKAFQAKAFAEAIQAEAGAAAVIAAAhQgBAQACAHQABAHAFAIIgfAAIgCgJIgBgEQgIAIgJAEQgIADgKABQgRAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAEQAEAFAHABQAIAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_646.setTransform(184.25,65.5);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#002277").s().p("AAUA5IAAgtQgRAEgIAAQgOAAgLgGQgLgFgEgJQgFgJAAgQIAAgbIAfAAIAAAbQAAAKACAEQABAEAGAEQAFADAHAAQAJAAAJgEIAAgwIAfAAIAABxg");
	this.shape_647.setTransform(171.625,65.5);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#002277").s().p("AAXBQIAAhJIguBJIgcAAIAAhxIAcAAIAABHIAuhHIAeAAIAABxgAgVg4QgJgJgCgOIAPAAQABAIAEADQAFAEAIAAQAJAAAEgEQAFgDABgIIAPAAQgCAOgJAJQgIAIgPAAQgOAAgIgIg");
	this.shape_648.setTransform(158.6,63.175);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgRQAOgPAXAAQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAJgTAAQgdAAgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgHgJAAQgJAAgGAHg");
	this.shape_649.setTransform(145.6258,65.5);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#002277").s().p("AgwA8QgTgVgBgmQABgmATgWQAVgVAgAAQAdAAASARQALAKAFATIgfAHQgDgMgJgHQgJgHgNAAQgQAAgLAMQgLANAAAcQAAAdALANQAKAMARAAQAMAAAJgIQAKgIAEgRIAeAKQgHAZgQANQgRAMgZAAQgeAAgVgVg");
	this.shape_650.setTransform(131.6,63.325);

	this.CircleTestTrening = new lib.circlesvg();
	this.CircleTestTrening.name = "CircleTestTrening";
	this.CircleTestTrening.setTransform(399.95,299.95);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#002277").s().p("AAEBPIAAhxQgPAQgXAHIAAgbQAMgEAOgLQANgLAFgOIAZAAIAACdg");
	this.shape_651.setTransform(773.05,23.975);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#002277").s().p("AgRBPIg9hlIAABlIgeAAIAAidIAfAAIA+BnIAAhnIAdAAIAACdgAAcBIIAAgYIBNAAIAAAYgAAkAZQgMgNAAgSQAAgUAMgLQAMgMATAAQASAAAMAMQAMANAAATQAAALgFAKQgEAJgJAGQgJAHgPAAQgUAAgLgNgAA5gWQgEAGAAANQAAAJAEAGQADAFAHAAQAHAAADgHQADgGAAgMQAAgKgDgFQgDgGgGAAQgHAAgEAHg");
	this.shape_652.setTransform(749.925,24.025);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXAAQAZAAAOARQAPARgBAiIhKAAQAAANAHAIQAHAHAJAAQAHAAAFgEQAFgDADgJIAeAFQgGARgNAIQgMAJgTAAQgdAAgOgUgAgOgcQgHAHAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAHg");
	this.shape_653.setTransform(724.9258,26.175);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#002277").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABGIAthGIAdAAIAABxg");
	this.shape_654.setTransform(712.15,26.2);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#002277").s().p("AgqAyQgLgJABgPQgBgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgFgDgLAAQgHAAgFADQgEADgDAIIgcgFQAFgRAMgIQAKgIAXAAQATAAAKAFQAKAFAEAHQAEAIAAATIAAAjQgBAPACAHQABAHAFAIIgfAAIgDgJIAAgDQgIAHgJAEQgHAEgKAAQgSAAgKgKgAAAAHQgNADgDACQgHAEAAAHQAAAGAGAFQAEAFAHAAQAIAAAHgGQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_655.setTransform(686,26.175);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgHQAEgIAJgDQAIgEAQgDQAUgEAIgDIAAgDQAAgJgEgEQgFgDgLAAQgHAAgFADQgEADgDAIIgbgFQAEgRAMgIQAKgIAXAAQATAAAKAFQAKAFAEAHQAEAIAAATIAAAjQgBAPACAHQACAHAEAIIgfAAIgCgJIgBgDQgIAHgJAEQgHAEgKAAQgTAAgJgKgAAAAHQgNADgDACQgHAEABAHQgBAGAGAFQAEAFAIAAQAGAAAIgGQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_656.setTransform(659.8,26.175);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#002277").s().p("AgmBJQgOgIgIgWIAegKQAEAPAIAEQAHADALAAQAOABAHgHQAHgGAAgJQAAgJgIgHQgIgFgOAAIgIAAIAAgXIAEAAQAOAAAHgHQAIgGAAgLQAAgJgGgFQgHgHgKAAQgUABgGATIgfgHQAKgnAvAAQAbAAAOANQAOAMAAARQAAALgGAJQgHAJgNAHQAQAFAIAJQAIAKAAAOQAAAVgPANQgQAMgeAAQgYABgOgJg");
	this.shape_657.setTransform(646.375,24);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#002277").s().p("AhIB1IgEgjQALACAIAAQAQAAAHgJQAIgJAEgPIhBiqIAwAAIAoB4IAoh4IAvAAIg8CjIgLAeQgGAPgGAIQgFAIgGAFQgHAFgKACQgLADgMAAQgNAAgNgDg");
	this.shape_658.setTransform(649.175,337.625);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#002277").s().p("AAXBWIgXgxQgGgPgFgEQgFgFgKAAIAABJIgtAAIAAiqIAtAAIAABGQAMgCAEgFQAFgGAGgTQAIgZALgHQAKgHARAAIARAAIABAfQgSAAgFADQgFADgGASQgIAYgPAFQAWAFAOAgIACADIAaAvg");
	this.shape_659.setTransform(633.025,334.1);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#002277").s().p("AAfBWIAAiGIg9AAIAACGIgtAAIAAiqICXAAIAACqg");
	this.shape_660.setTransform(613.5,334.15);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#002277").s().p("AgsBPQgVgLgLgUQgMgVAAgdQAAgWAMgVQALgVAUgLQAVgMAYAAQAmAAAZAaQAaAZgBAmQABAmgaAaQgZAagmgBQgWABgWgLgAgdgmQgMANAAAZQAAAaAMANQAMANARAAQARAAANgNQAMgOAAgZQAAgZgMgNQgNgOgRAAQgRAAgMAOg");
	this.shape_661.setTransform(593.7,334.15);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#002277").s().p("AAgBWIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA+IBAAAIAAg+IAuAAIAACqg");
	this.shape_662.setTransform(573.575,334.15);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#002277").s().p("AAXBWIgXgxQgGgPgFgEQgFgFgKAAIAABJIgtAAIAAiqIAtAAIAABGQAMgCAEgFQAFgGAGgTQAIgZALgHQAKgHARAAIARAAIABAfQgSAAgFADQgFADgGASQgIAYgPAFQAWAFAOAgIACADIAaAvg");
	this.shape_663.setTransform(556.475,334.1);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#002277").s().p("AhABLQgPgOAAgWQAAgPAGgLQAHgMANgEQAMgHAYgEQAfgGAMgFIAAgEQAAgNgHgGQgGgGgRAAQgMAAgHAFQgHAFgEAMIgpgIQAHgZARgLQARgNAhAAQAeAAAOAIQAPAHAGALQAGALAAAeIAAA0QAAAWACAKQACAMAGAMIgtAAIgEgOIgCgFQgLALgNAGQgNAFgPAAQgaAAgPgOgAgBAKQgTAFgFADQgJAGAAAKQAAAJAHAIQAHAGALABQALgBALgHQAJgHACgJQACgFAAgQIAAgJIgbAGg");
	this.shape_664.setTransform(528.825,334.15);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#002277").s().p("AAgBWIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA+IBAAAIAAg+IAuAAIAACqg");
	this.shape_665.setTransform(509.625,334.15);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#002277").s().p("Ag+A8QgRgXAAgkQAAgpAWgYQAWgZAiAAQAlAAAWAaQAXAZgBAzIhxAAQABAUAKALQALALAOAAQALAAAHgFQAHgGAEgNIAtAIQgJAYgSAOQgTANgcgBQgsABgVgegAgXgrQgJALAAATIBDAAQgBgVgKgKQgJgKgOAAQgOAAgKALg");
	this.shape_666.setTransform(481.2021,334.15);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#002277").s().p("AgWBWIAAiGIg2AAIAAgkICZAAIAAAkIg2AAIAACGg");
	this.shape_667.setTransform(464.075,334.15);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#002277").s().p("AAjBWIAAhtIhFBtIgsAAIAAiqIAsAAIAABqIBEhqIAtAAIAACqg");
	this.shape_668.setTransform(445.825,334.15);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#002277").s().p("AA8BWIAAhwIgqBwIglAAIgohwIAABwIgnAAIAAiqIA4AAIAqB2IArh2IA4AAIAACqg");
	this.shape_669.setTransform(423.675,334.15);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#002277").s().p("ABEBWIgVgxQgGgOgFgEQgFgGgJAAIAABJIgsAAIAAhJQgJABgDADQgDADgJARIgWAxIgwAAIAYgvQASgkAUgEQgPgFgIgYQgGgSgFgDQgFgDgSAAIAAgfIATAAQAPAAALAHQAKAGAKAaQAHAUAEAGQAFAFAIABIAAhGIAsAAIAABGQAJAAAEgGQAFgGAHgUQAJgaALgGQAKgHAQAAIASAAIAAAfQgSAAgFADQgFADgGASQgIAYgOAFQATAEATAkIAYAvg");
	this.shape_670.setTransform(399.625,334.1);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#002277").s().p("AhABLQgPgOAAgWQAAgPAGgLQAHgMANgEQAMgHAYgEQAfgGAMgFIAAgEQAAgNgHgGQgGgGgRAAQgMAAgHAFQgHAFgEAMIgpgIQAHgZARgLQARgNAhAAQAeAAAOAIQAPAHAGALQAGALAAAeIAAA0QAAAWACAKQACAMAGAMIgtAAIgEgOIgCgFQgLALgNAGQgNAFgPAAQgaAAgPgOgAgBAKQgTAFgFADQgJAGAAAKQAAAJAHAIQAHAGALABQALgBALgHQAJgHACgJQACgFAAgQIAAgJIgbAGg");
	this.shape_671.setTransform(378.775,334.15);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#002277").s().p("AAgBWIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA+IBAAAIAAg+IAuAAIAACqg");
	this.shape_672.setTransform(359.575,334.15);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#002277").s().p("AgsBPQgVgLgLgUQgMgVAAgdQAAgWAMgVQALgVAUgLQAVgMAYAAQAnAAAYAaQAZAZAAAmQAAAmgZAaQgZAagmgBQgWABgWgLgAgdgmQgMANAAAZQAAAaAMANQAMANARAAQARAAANgNQAMgOAAgZQAAgZgMgNQgNgOgRAAQgRAAgMAOg");
	this.shape_673.setTransform(330.45,334.15);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#002277").s().p("Ag5BWIAAiqIBzAAIAAAkIhGAAIAACGg");
	this.shape_674.setTransform(314.525,334.15);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#002277").s().p("AgrBPQgWgLgLgUQgLgVAAgdQAAgWALgVQALgVAUgLQAVgMAYAAQAnAAAZAaQAYAZAAAmQAAAmgYAaQgaAagmgBQgXABgUgLgAgdgmQgMANAAAZQAAAaAMANQANANAQAAQARAAANgNQALgOAAgZQAAgZgLgNQgNgOgRAAQgQAAgNAOg");
	this.shape_675.setTransform(296.55,334.15);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#002277").s().p("AgWBWIAAiGIg2AAIAAgkICZAAIAAAkIg2AAIAACGg");
	this.shape_676.setTransform(278.325,334.15);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#002277").s().p("AhPAjIAtgIQAFAbAaAAQAPAAAIgKQAKgKACgVIguAAIAAgaIAvAAQgBgVgJgKQgJgJgOgBQgLABgIAFQgKAFgCALIgsgJQAQgvA5gBQAoAAAVAZQAVAYAAAoQAAAqgVAYQgWAYgmgBQg+ABgQg3g");
	this.shape_677.setTransform(260.95,334.15);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#002277").s().p("Ag+A8QgRgXAAgkQAAgpAWgYQAWgZAiAAQAlAAAWAaQAXAZgBAzIhxAAQABAUAKALQALALAOAAQALAAAHgFQAHgGAEgNIAtAIQgJAYgSAOQgTANgcgBQgsABgVgegAgXgrQgJALAAATIBDAAQgBgVgKgKQgJgKgOAAQgOAAgKALg");
	this.shape_678.setTransform(233.6021,334.15);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#002277").s().p("AhbBUIAAghIAIAAIALABQAJgBACgFQACgGAAgcIAAhiICXAAIAACqIgtAAIAAiGIg9AAIAABNQAAAdgHALQgHAMgIAEQgIAEgSAAQgLAAgSgDg");
	this.shape_679.setTransform(213.175,334.3);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#002277").s().p("Ag5BCQgXgYAAgqQAAgpAXgYQAWgXAlgBQAgAAASAOQATANAIAcIgtAIQgCgOgIgGQgIgHgNAAQgQAAgKAMQgKALAAAcQAAAeAKAMQAKAMARAAQANAAAIgHQAIgHADgSIAtAHQgHAfgUAPQgTARghgBQglAAgWgXg");
	this.shape_680.setTransform(194.675,334.15);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#002277").s().p("AgrBPQgWgLgLgUQgLgVAAgdQAAgWALgVQALgVAVgLQATgMAZAAQAmAAAaAaQAZAZAAAmQAAAmgZAaQgaAagmgBQgXABgUgLgAgdgmQgMANAAAZQAAAaAMANQANANAQAAQASAAAMgNQALgOAAgZQAAgZgLgNQgMgOgSAAQgQAAgNAOg");
	this.shape_681.setTransform(175.25,334.15);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#002277").s().p("AAuB2IAAjEIhbAAIAADEIgwAAIAAjrIC7AAIAADrg");
	this.shape_682.setTransform(153.3,330.9);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#990000").s().p("AgfB6QALgWAEgMQAEgNAEgPQAEgQABgOQACgOAAgPQAAgegGgaQgHgbgRgnIAYAAQASAcALAeQAKAfAAAfQAAAZgIAfQgKAigUAhg");
	this.shape_683.setTransform(739.625,243.85);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#990000").s().p("AgPA1QgPgSgCgTIgcAAIAAAzIgkAAIAAiGIAkAAIAAA3IAcAAQADgaARgPQAQgQAcgBQAcAAASATQATASAAAiQAAAUgHAPQgHAQgOAKQgOAIgWABQghAAgPgSgAAKggQgHAJAAAWQAAAZAHAKQAIAIAOABQAOAAAHgLQAHgKAAgWQAAgYgIgJQgHgIgOgBQgOAAgHAKg");
	this.shape_684.setTransform(724.875,243.85);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#990000").s().p("AhABDIAAiGIAjAAIAAA5IAjAAQAWAAALADQALADAHAJQAIAKAAANQAAAUgOAJQgNAKgaAAgAgdAtIAhAAQAQAAAEgFQAEgGAAgGQAAgKgIgDQgHgFgSAAIgYAAg");
	this.shape_685.setTransform(705.8,243.85);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#990000").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_686.setTransform(689.525,243.85);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#990000").s().p("AgiA+QgRgIgJgRQgIgPAAgXQAAgRAIgRQAJgRAQgJQAQgJATAAQAeABAUATQATAVAAAdQAAAegTAVQgUATgeABQgSAAgQgJgAgXgdQgJAKAAATQAAAUAJALQAKALANAAQAOAAAJgLQAKgLAAgUQAAgTgKgKQgJgMgOAAQgNAAgKAMg");
	this.shape_687.setTransform(673.75,243.85);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#990000").s().p("AAzBVIAAgjIhlAAIAAAjIgdAAIAAhAIAPAAQAJgLAGgUQAGgWABg0IBrAAIAABpIAPAAIAABAgAgdAVIA8AAIAAhMIgqAAQgDA3gPAVg");
	this.shape_688.setTransform(657.15,245.625);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#990000").s().p("AgyA7QgMgLAAgSQAAgKAFgKQAFgJAKgDQAKgFATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGAEQgFADgDAKIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAJAAAYIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAEgMABQgUAAgMgMgAAAAIQgPAEgFADQgHAFAAAHQAAAHAGAGQAFAFAJAAQAJAAAIgGQAHgFACgHQABgFAAgMIAAgHIgUAFg");
	this.shape_689.setTransform(642.075,243.85);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#990000").s().p("AhIBCIAAgaIAHAAIAIABQAHAAACgFQACgFAAgWIAAhNIB2AAIAACGIgkAAIAAhpIgvAAIAAA8QAAAXgFAJQgFAKgHADQgHADgOAAQgIAAgPgDg");
	this.shape_690.setTransform(625.85,243.975);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#990000").s().p("AgiA+QgRgIgJgRQgIgPgBgXQABgRAIgRQAJgRAQgJQAQgJATAAQAeABAUATQATAVAAAdQAAAegTAVQgUATgeABQgRAAgRgJgAgXgdQgJAKAAATQAAAUAJALQAKALANAAQAOAAAJgLQAKgLAAgUQAAgTgKgKQgJgMgOAAQgNAAgKAMg");
	this.shape_691.setTransform(603.2,243.85);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#990000").s().p("AgtBDIAAiGIBaAAIAAAeIg2AAIAABog");
	this.shape_692.setTransform(590.65,243.85);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_693.setTransform(577.0277,243.85);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#990000").s().p("AhABDIAAiGIAkAAIAAA5IAjAAQAUAAAMADQALADAHAJQAIAKAAANQAAAUgNAJQgNAKgcAAgAgcAtIAgAAQAQAAAEgFQAEgGAAgGQAAgKgIgDQgHgFgSAAIgXAAg");
	this.shape_694.setTransform(555.15,243.85);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#990000").s().p("AgQBDIAAhoIgsAAIAAgeIB5AAIAAAeIgrAAIAABog");
	this.shape_695.setTransform(540.3,243.85);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#990000").s().p("AA5BDIAAiGIAkAAIAACGgAhcBDIAAiGIAkAAIAAA5IAkAAQAUAAAKADQAMADAHAIQAIAKAAAOQAAAUgNAJQgOAKgaAAgAg4AtIAgAAQANAAAGgEQAGgEgBgKQAAgJgGgDQgIgFgUAAIgWAAg");
	this.shape_696.setTransform(522.95,243.85);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#990000").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_697.setTransform(504.175,246.275);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#990000").s().p("AASBEIgSgnQgEgMgEgDQgEgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBAEgEQADgFAFgPQAGgUAIgFQAJgGANAAIAOABIAAAXQgOAAgEADQgEADgEAOQgHASgLAFQAQADAMAZIACADIATAlg");
	this.shape_698.setTransform(490.225,243.825);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#990000").s().p("AgyA7QgMgLAAgSQAAgKAFgKQAFgJAKgDQAKgFATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGAEQgFADgDAKIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAJAAAYIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAEgMABQgUAAgMgMgAAAAIQgPAEgFADQgHAFAAAHQAAAHAGAGQAFAFAJAAQAJAAAIgGQAHgFACgHQABgFAAgMIAAgHIgUAFg");
	this.shape_699.setTransform(475.675,243.85);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#990000").s().p("Ag5AhIAhgGQAHAUARgBQAKAAAHgEQAGgGAAgHQAAgIgHgEQgGgFgKAAIgFAAIAAgWIAMgBQAFgBADgFQAEgFAAgFQAAgHgFgGQgEgFgKAAQgFAAgGADQgGADgEAMIgegHQAEgSAPgJQAPgJASAAQAZAAANAMQANALAAARQAAALgFAGQgGAHgMAGQAOAEAIAHQAHAJAAAMQAAAQgPALQgOAMgcAAQgvAAgLgmg");
	this.shape_700.setTransform(461.6,243.85);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#990000").s().p("AgiA+QgRgIgJgRQgJgPAAgXQAAgRAJgRQAJgRAQgJQAQgJATAAQAfABATATQATAVABAdQgBAegTAVQgUATgeABQgRAAgRgJgAgXgdQgJAKAAATQAAAUAJALQAKALANAAQAOAAAJgLQAKgLAAgUQAAgTgKgKQgJgMgOAAQgNAAgKAMg");
	this.shape_701.setTransform(440.4,243.85);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#990000").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_702.setTransform(424.575,243.85);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#990000").s().p("AA2BEIgRgnQgEgLgEgDQgEgEgHgBIAAA6IgjAAIAAg6QgHABgCACQgDADgHANIgRAnIgmAAIATglQAOgcAQgDQgMgFgGgSQgFgOgEgDQgEgDgOAAIAAgXIAPgBQAMAAAIAFQAIAFAIAVQAGAQADAFQADAEAHAAIAAg3IAjAAIAAA3QAHAAADgEQAEgFAFgQQAHgUAJgGQAIgFANAAIAOABIAAAXQgOAAgEADQgEADgFAOQgGASgMAFQAQADAOAcIATAlg");
	this.shape_703.setTransform(407.475,243.825);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#990000").s().p("AgiA+QgRgIgJgRQgIgPgBgXQABgRAIgRQAJgRAQgJQAQgJATAAQAeABAUATQATAVAAAdQAAAegTAVQgUATgeABQgRAAgRgJgAgXgdQgJAKAAATQAAAUAJALQAKALANAAQAOAAAJgLQAKgLAAgUQAAgTgKgKQgJgMgOAAQgNAAgKAMg");
	this.shape_704.setTransform(390.35,243.85);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#990000").s().p("AAwBDIAAhXIghBXIgeAAIgfhXIAABXIgfAAIAAiGIAtAAIAgBeIAiheIAsAAIAACGg");
	this.shape_705.setTransform(372.825,243.85);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#990000").s().p("AgSAYQAKgEAFgGQAEgGAAgKIgQAAIAAgjIAiAAIAAAZQAAAOgCAKQgDAIgIAHQgGAHgLAFg");
	this.shape_706.setTransform(352.125,250.9);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_707.setTransform(341.3777,243.85);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#990000").s().p("AgRBDIAAhoIgrAAIAAgeIB5AAIAAAeIgrAAIAABog");
	this.shape_708.setTransform(327.85,243.85);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#990000").s().p("AAcBfIAAhWIg3BWIgiAAIAAiGIAiAAIAABUIA2hUIAjAAIAACGgAgZhDQgLgKgBgRIARAAQAAAJAGAFQAGAFAJAAQALAAAFgFQAGgFAAgJIARAAQgBARgKAKQgLAKgRAAQgQAAgKgKg");
	this.shape_709.setTransform(313.5,241.125);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#990000").s().p("AgyA7QgMgLAAgSQAAgKAFgKQAFgJAKgDQAKgFATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGAEQgFADgDAKIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAJAAAYIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAEgMABQgUAAgMgMgAAAAIQgPAEgFADQgHAFAAAHQAAAHAGAGQAFAFAJAAQAJAAAIgGQAHgFACgHQABgFAAgMIAAgHIgUAFg");
	this.shape_710.setTransform(298.325,243.85);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#990000").s().p("AhABDIAAiGIBNAAQAYABAMAIQAMAJAAASQAAALgHAJQgGAIgKADQAOACAHAJQAGAKAAALQAAAQgLAJQgMAKgWAAgAgcAtIAcAAQAOgBAHgDQAHgEAAgJQAAgKgIgEQgIgDgWgBIgSAAgAgcgKIAXAAQAPAAAIgFQAHgEAAgIQAAgJgHgEQgHgDgQgBIgXAAg");
	this.shape_711.setTransform(283.475,243.85);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#990000").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_712.setTransform(267.05,243.85);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#990000").s().p("AhBBfIAAi6IAiAAIAAAUQAGgKALgGQALgHANAAQAXAAARATQAQASAAAhQAAAhgRATQgQASgYAAQgKAAgJgEQgJgFgKgKIAABEgAgVg3QgIAKAAAUQAAAWAJAKQAJALAMAAQAMAAAIgKQAJgJAAgXQAAgVgJgKQgIgKgNAAQgMAAgJAKg");
	this.shape_713.setTransform(251.475,246.275);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#990000").s().p("Ag5BdIgDgcQAJACAGAAQANAAAGgIQAGgHADgLIgziHIAlAAIAgBfIAfhfIAlAAIgvCBIgJAYIgJASQgEAGgFAEQgFAEgIACQgIACgKAAQgLAAgKgCg");
	this.shape_714.setTransform(235.825,246.575);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#990000").s().p("AAwBDIAAhXIghBXIgeAAIgfhXIAABXIgfAAIAAiGIAtAAIAgBeIAiheIAsAAIAACGg");
	this.shape_715.setTransform(219.175,243.85);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#990000").s().p("AA2BEIgRgnQgEgLgEgDQgEgEgHgBIAAA6IgjAAIAAg6QgHABgCACQgDADgHANIgRAnIgmAAIATglQAOgcAQgDQgMgFgGgSQgFgOgEgDQgEgDgOAAIAAgXIAPgBQAMAAAIAFQAIAFAIAVQAGAQADAFQADAEAHAAIAAg3IAjAAIAAA3QAHAAADgEQAEgFAFgQQAHgUAJgGQAIgFANAAIAOABIAAAXQgOAAgEADQgEADgFAOQgGASgMAFQAQADAOAcIATAlg");
	this.shape_716.setTransform(200.225,243.825);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#990000").s().p("AgyA7QgMgLAAgSQAAgKAFgKQAFgJAKgDQAKgFATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGAEQgFADgDAKIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAJAAAYIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAEgMABQgUAAgMgMgAAAAIQgPAEgFADQgHAFAAAHQAAAHAGAGQAFAFAJAAQAJAAAIgGQAHgFACgHQABgFAAgMIAAgHIgUAFg");
	this.shape_717.setTransform(183.825,243.85);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#990000").s().p("Ag5AhIAhgGQAHAUASgBQAJAAAHgEQAGgGAAgHQAAgIgHgEQgGgFgKAAIgFAAIAAgWIAMgBQAFgBADgFQAEgFAAgFQAAgHgFgGQgEgFgJAAQgHAAgFADQgGADgFAMIgdgHQAEgSAPgJQAPgJASAAQAYAAAOAMQANALAAARQAAALgFAGQgGAHgMAGQAOAEAIAHQAHAJAAAMQAAAQgPALQgOAMgcAAQgvAAgLgmg");
	this.shape_718.setTransform(169.75,243.85);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_719.setTransform(149.1277,243.85);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#990000").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_720.setTransform(134.175,243.85);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#990000").s().p("Ag5AhIAggGQAJAUAQgBQAKAAAHgEQAGgGAAgHQAAgIgHgEQgGgFgKAAIgFAAIAAgWIAMgBQAEgBAEgFQAEgFAAgFQAAgHgEgGQgFgFgKAAQgFAAgGADQgGADgEAMIgfgHQAFgSAPgJQAPgJASAAQAZAAANAMQANALAAARQABALgHAGQgFAHgNAGQAQAEAHAHQAHAJAAAMQAAAQgPALQgOAMgcAAQgvAAgLgmg");
	this.shape_721.setTransform(112.3,243.85);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#990000").s().p("AgyA7QgMgLAAgSQAAgKAFgKQAFgJAKgDQAKgFATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGAEQgFADgDAKIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAJAAAYIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAEgMABQgUAAgMgMgAAAAIQgPAEgFADQgHAFAAAHQAAAHAGAGQAFAFAJAAQAJAAAIgGQAHgFACgHQABgFAAgMIAAgHIgUAFg");
	this.shape_722.setTransform(99.025,243.85);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#990000").s().p("AhIBCIAAgaIAGAAIAJABQAHAAACgFQACgFAAgWIAAhNIB3AAIAACGIgkAAIAAhpIgwAAIAAA8QAAAXgFAJQgGAKgGADQgGADgPAAQgJAAgOgDg");
	this.shape_723.setTransform(82.8,243.975);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#990000").s().p("AgsBDIAAiGIBZAAIAAAeIg2AAIAABog");
	this.shape_724.setTransform(70.7,243.85);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#990000").s().p("AAIB6QgTgdgKgfQgKggAAgeQAAgjAMgiQALgcAQgYIAYAAQgRAngGAbQgHAaAAAeQAAAUAEAXQAEAVAGAUQAFANALAYg");
	this.shape_725.setTransform(60.325,243.85);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#990000").s().p("AhJAqIAqgIQAKAZAWAAQAMAAAIgHQAIgGAAgKQAAgJgIgGQgIgGgNAAIgHAAIAAgcQALAAAFgBQAFgDAFgFQAFgGAAgIQAAgHgGgHQgGgIgMABQgIAAgHADQgHAFgGAOIgmgJQAGgWATgLQATgMAXAAQAfAAARAPQARAOAAAWQAAANgHAIQgIAJgPAIQATAEAJALQAKAKAAAQQAAATgTAPQgTAOgjAAQg8AAgOgvg");
	this.shape_726.setTransform(564.575,203.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#990000").s().p("AhABLQgPgOAAgWQAAgOAGgMQAHgMANgEQAMgHAYgEQAfgGAMgFIAAgEQAAgNgHgGQgGgGgRAAQgMAAgHAFQgHAFgEAMIgpgIQAHgZARgLQARgNAhAAQAeAAAOAIQAPAHAGALQAGALAAAeIAAA0QAAAWACAKQACAMAGAMIgtAAIgEgOIgCgFQgLALgNAGQgNAFgPAAQgaAAgPgOgAgBAKQgTAFgFADQgJAGAAAKQAAAJAHAIQAHAGALABQALgBALgHQAJgHACgJQACgFAAgQIAAgJIgbAGg");
	this.shape_727.setTransform(547.675,203.2);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#990000").s().p("AhbBUIAAghIAIAAIALABQAJgBACgGQACgFAAgcIAAhiICXAAIAACqIgtAAIAAiGIg9AAIAABNQAAAdgHALQgHAMgIAEQgIAEgSAAQgLAAgSgDg");
	this.shape_728.setTransform(527.075,203.35);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#990000").s().p("Ag5BWIAAiqIBzAAIAAAkIhGAAIAACGg");
	this.shape_729.setTransform(511.725,203.2);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#990000").s().p("AAjB4IAAhtIhFBtIgsAAIAAiqIAsAAIAABrIBEhrIAtAAIAACqgAgghVQgOgMgCgWIAWAAQABALAHAGQAHAGANAAQANAAAHgGQAHgGABgLIAWAAQgCAWgNAMQgOANgVAAQgVAAgNgNg");
	this.shape_730.setTransform(484.425,199.725);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#990000").s().p("ABJBWIAAiqIAtAAIAACqgAh1BWIAAiqIAuAAIAABHIAtAAQAaAAANADQAOAEAKAMQAKANAAAQQAAAagRAMQgRANghAAgAhHA5IAqAAQAQAAAHgGQAGgEABgMQAAgNgJgEQgJgFgaABIgcAAg");
	this.shape_731.setTransform(460.3,203.2);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#990000").s().p("AhSBWIAAiqIBiAAQAfgBAPAMQAPALAAAWQAAAOgIALQgJAKgMAEQASADAJANQAIAMAAAOQAAATgPANQgOANgdAAgAgkA5IAjAAQATAAAIgFQAJgFAAgMQAAgNgKgEQgJgFgdAAIgXAAgAgkgNIAdAAQAUAAAKgGQAJgFAAgMQAAgLgJgEQgIgEgWAAIgdAAg");
	this.shape_732.setTransform(436.5,203.2);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#990000").s().p("Ag+A8QgRgXAAgkQAAgpAWgZQAWgYAiAAQAlAAAWAaQAXAZgBAzIhxAAQABAUAKALQALALAOAAQALAAAHgFQAHgGAEgNIAtAIQgJAYgSAOQgTANgcgBQgsABgVgegAgXgrQgJALAAATIBDAAQgBgVgKgKQgJgKgOAAQgOAAgKALg");
	this.shape_733.setTransform(416.5021,203.2);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#990000").s().p("AhbBUIAAghIAIAAIALABQAJgBACgGQACgFAAgcIAAhiICXAAIAACqIgtAAIAAiGIg9AAIAABNQAAAdgHALQgHAMgIAEQgIAEgSAAQgLAAgSgDg");
	this.shape_734.setTransform(396.075,203.35);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#990000").s().p("Ag+A8QgRgXAAgkQAAgpAWgZQAWgYAiAAQAlAAAWAaQAXAZgBAzIhxAAQABAUAKALQALALAOAAQALAAAHgFQAHgGAEgNIAtAIQgJAYgSAOQgTANgcgBQgsABgVgegAgXgrQgJALAAATIBDAAQgBgVgKgKQgJgKgOAAQgOAAgKALg");
	this.shape_735.setTransform(368.0521,203.2);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#990000").s().p("AgWBWIAAiGIg2AAIAAgkICZAAIAAAkIg2AAIAACGg");
	this.shape_736.setTransform(350.925,203.2);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#990000").s().p("AAjB4IAAhtIhFBtIgsAAIAAiqIAsAAIAABrIBEhrIAtAAIAACqgAgghVQgOgMgCgWIAWAAQABALAHAGQAHAGANAAQANAAAHgGQAHgGABgLIAWAAQgCAWgNAMQgOANgVAAQgVAAgNgNg");
	this.shape_737.setTransform(332.675,199.725);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#990000").s().p("AgsBPQgVgLgLgUQgMgVAAgdQAAgWAMgVQALgVAUgLQAVgMAYAAQAmAAAZAaQAZAZAAAmQAAAmgZAaQgZAagmgBQgWABgWgLgAgdgmQgMANAAAZQAAAaAMANQAMANARAAQARAAANgNQAMgOAAgZQAAgZgMgNQgNgOgRAAQgRAAgMAOg");
	this.shape_738.setTransform(312.55,203.2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#990000").s().p("AhTB4IAAjrIArAAIAAAZQAIgNAOgIQAOgIAQAAQAeAAAUAXQAWAYAAAqQAAAqgWAXQgUAYgeAAQgNAAgMgGQgMgGgNgNIAABWgAgbhHQgLAOAAAYQAAAeALAMQAMAOAPAAQARAAAKgNQAKgMAAgcQAAgbgLgNQgKgNgQAAQgQAAgLAMg");
	this.shape_739.setTransform(292.85,206.25);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#990000").s().p("AAXBWIgXgxQgGgPgFgEQgFgFgKAAIAABJIgtAAIAAiqIAtAAIAABGQAMgCAEgFQAFgGAGgTQAIgZALgHQAKgHARAAIARAAIABAfQgSAAgFADQgFADgGASQgIAYgPAFQAWAFAOAgIACADIAaAvg");
	this.shape_740.setTransform(275.125,203.15);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#990000").s().p("AhABLQgPgOAAgWQAAgOAGgMQAHgMANgEQAMgHAYgEQAfgGAMgFIAAgEQAAgNgHgGQgGgGgRAAQgMAAgHAFQgHAFgEAMIgpgIQAHgZARgLQARgNAhAAQAeAAAOAIQAPAHAGALQAGALAAAeIAAA0QAAAWACAKQACAMAGAMIgtAAIgEgOIgCgFQgLALgNAGQgNAFgPAAQgaAAgPgOgAgBAKQgTAFgFADQgJAGAAAKQAAAJAHAIQAHAGALABQALgBALgHQAJgHACgJQACgFAAgQIAAgJIgbAGg");
	this.shape_741.setTransform(256.625,203.2);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#990000").s().p("Ag6BuQgVgMgLgjIAsgOQAHAWALAGQALAGARAAQAVAAAKgKQALgJgBgNQABgOgMgKQgMgIgXgBIgKAAIAAgiIAGAAQAUAAAMgKQAMgKAAgQQAAgMgKgJQgKgKgQABQgegBgJAeIgugKQAPg6BHAAQAoAAAWASQAUASABAZQAAARgKAOQgKANgTAKQAXAIAMAOQAMAPAAAVQAAAggXATQgXATgtAAQgkAAgWgMg");
	this.shape_742.setTransform(236.55,199.95);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#990000").s().p("AAiBWIgig1IgjA1Ig1AAIA9hYIg7hSIA4AAIAeAuIAfguIA1AAIg6BRIA/BZg");
	this.shape_743.setTransform(506.275,112.4);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#990000").s().p("AAjBWIAAhtIhFBtIgsAAIAAiqIAsAAIAABqIBEhqIAtAAIAACqg");
	this.shape_744.setTransform(486.975,112.4);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#990000").s().p("Ag+A8QgRgXAAgkQAAgpAWgZQAWgYAiAAQAlAAAWAaQAXAZgBAzIhxAAQABAUAKALQALAMAOAAQALgBAHgFQAHgGAEgNIAtAIQgJAZgSANQgTAMgcAAQgsAAgVgdgAgXgrQgJALAAATIBDAAQgBgVgKgKQgJgKgOAAQgOAAgKALg");
	this.shape_745.setTransform(458.4021,112.4);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#990000").s().p("AgWBWIAAiGIg2AAIAAgkICZAAIAAAkIg2AAIAACGg");
	this.shape_746.setTransform(441.275,112.4);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#990000").s().p("AAjBWIAAhtIhFBtIgsAAIAAiqIAsAAIAABqIBEhqIAtAAIAACqg");
	this.shape_747.setTransform(423.025,112.4);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#990000").s().p("AA8BWIAAhwIgqBwIglAAIgohwIAABwIgnAAIAAiqIA4AAIAqB1IArh1IA4AAIAACqg");
	this.shape_748.setTransform(400.875,112.4);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#990000").s().p("AAjBWIAAhtIhFBtIgsAAIAAiqIAsAAIAABqIBEhqIAtAAIAACqg");
	this.shape_749.setTransform(378.325,112.4);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#990000").s().p("AAgBWIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA+IBAAAIAAg+IAuAAIAACqg");
	this.shape_750.setTransform(358.225,112.4);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#990000").s().p("Ag5BCQgXgYAAgqQAAgqAXgXQAWgYAlAAQAgAAASAOQATANAIAcIgtAIQgCgOgIgGQgIgHgNAAQgQAAgKAMQgKAMAAAbQAAAdAKANQAKAMARAAQANAAAIgHQAIgHADgSIAtAHQgHAfgUAQQgTAPghAAQglAAgWgXg");
	this.shape_751.setTransform(339.325,112.4);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#990000").s().p("AgsBOQgVgKgLgUQgMgVAAgdQAAgWAMgVQALgVAUgLQAVgMAYAAQAmAAAZAaQAZAZAAAmQAAAmgZAaQgZAZgmAAQgWAAgWgLgAgdgmQgMAOAAAYQAAAaAMANQAMANARAAQARAAANgNQAMgOAAgZQAAgZgMgNQgNgNgRAAQgRAAgMANg");
	this.shape_752.setTransform(310.75,112.4);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#990000").s().p("AgWBWIAAiGIg2AAIAAgkICZAAIAAAkIg2AAIAACGg");
	this.shape_753.setTransform(292.525,112.4);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#990000").s().p("AgYAfQAOgFAGgIQAEgIABgNIgVAAIAAgtIAtAAIAAAhQAAASgEALQgEAMgJAJQgIAJgPAFg");
	this.shape_754.setTransform(765.75,82.45);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#990000").s().p("ABJBVIAAiqIAtAAIAACqgAh1BVIAAiqIAuAAIAABHIAtAAQAaAAANAFQAOADAKALQAKANAAASQAAAZgRAMQgRAMghAAgAhHA5IAqAAQAQAAAHgGQAGgEABgMQgBgMgIgFQgJgEgagBIgcAAg");
	this.shape_755.setTransform(747.4,73.55);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#990000").s().p("AhJApIAqgHQAKAZAWAAQAMAAAIgGQAIgIAAgIQAAgLgIgFQgIgGgNAAIgHAAIAAgcQALAAAFgBQAFgDAFgFQAFgGAAgHQAAgIgGgHQgGgIgMAAQgIAAgHAFQgHADgGAPIgmgIQAGgXATgLQATgLAXAAQAfgBARAOQARAPAAAVQAAANgHAKQgIAIgPAIQATAEAJAKQAKALAAAPQAAAUgTAPQgTAPgjAAQg8AAgOgxg");
	this.shape_756.setTransform(724.575,73.55);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#990000").s().p("AAgBVIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA/IBAAAIAAg/IAuAAIAACqg");
	this.shape_757.setTransform(706.825,73.55);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#990000").s().p("AAjBVIAAhsIhFBsIgsAAIAAiqIAsAAIAABrIBEhrIAtAAIAACqg");
	this.shape_758.setTransform(686.675,73.55);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#990000").s().p("AhbBUIAAgiIAIABIALAAQAJABACgHQACgGAAgbIAAhiICXAAIAACqIgtAAIAAiFIg9AAIAABLQAAAegHAMQgHAMgIADQgIAEgSAAQgLAAgSgDg");
	this.shape_759.setTransform(665.175,73.7);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#990000").s().p("Ag+A8QgRgXAAgkQAAgqAWgYQAWgXAiAAQAlgBAWAaQAXAZgBAzIhxAAQABAUAKAMQALAKAOABQALAAAHgHQAHgFAEgNIAtAIQgJAYgSANQgTAOgcAAQgsAAgVgegAgXgrQgJALAAASIBDAAQgBgTgKgKQgJgLgOAAQgOAAgKALg");
	this.shape_760.setTransform(637.1521,73.55);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#990000").s().p("ABJBVIAAiqIAtAAIAACqgAh1BVIAAiqIAuAAIAABHIAtAAQAaAAANAFQAOADAKALQAKANAAASQAAAZgRAMQgRAMghAAgAhHA5IApAAQARAAAHgGQAGgEABgMQAAgMgJgFQgJgEgZgBIgdAAg");
	this.shape_761.setTransform(614.1,73.55);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#990000").s().p("AAgBVIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA/IBAAAIAAg/IAuAAIAACqg");
	this.shape_762.setTransform(589.925,73.55);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#990000").s().p("AgWBVIAAiFIg2AAIAAglICZAAIAAAlIg2AAIAACFg");
	this.shape_763.setTransform(571.875,73.55);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#990000").s().p("AAXBWIgXgyQgGgPgFgEQgFgEgKAAIAABJIgtAAIAAiqIAtAAIAABGQAMgBAEgGQAFgGAGgTQAIgZALgHQAKgHARAAIARABIABAdQgSABgFADQgFADgGASQgIAYgPAFQAWAFAOAfIACAEIAaAvg");
	this.shape_764.setTransform(556.675,73.5);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#990000").s().p("AhABLQgPgPAAgVQAAgPAGgLQAHgLANgGQAMgFAYgFQAfgGAMgFIAAgFQAAgNgHgFQgGgGgRAAQgMAAgHAFQgHAEgEAMIgpgHQAHgYARgNQARgMAhABQAeAAAOAHQAPAHAGALQAGALAAAdIAAA1QAAAWACALQACAKAGAMIgtAAIgEgNIgCgFQgLALgNAGQgNAFgPABQgaAAgPgPgAgBALQgTADgFAEQgJAHAAAJQAAAKAHAGQAHAIALgBQALABALgJQAJgGACgIQACgHAAgQIAAgJIgbAIg");
	this.shape_765.setTransform(538.175,73.55);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#990000").s().p("AgWBVIAAiFIg2AAIAAglICZAAIAAAlIg2AAIAACFg");
	this.shape_766.setTransform(520.875,73.55);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#990000").s().p("AAgBVIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA/IBAAAIAAg/IAuAAIAACqg");
	this.shape_767.setTransform(502.825,73.55);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#990000").s().p("AgrBOQgWgKgLgVQgLgUAAgdQAAgWALgVQALgVAUgMQAVgLAYABQAngBAZAaQAYAZAAAmQAAAmgYAaQgaAagmAAQgXAAgUgMgAgdgmQgMANAAAZQAAAaAMANQANAOAQAAQARAAANgOQALgNAAgaQAAgYgLgOQgNgNgRAAQgQAAgNANg");
	this.shape_768.setTransform(482.85,73.55);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#990000").s().p("AAXBWIgXgyQgGgPgFgEQgFgEgKAAIAABJIgtAAIAAiqIAtAAIAABGQAMgBAEgGQAFgGAGgTQAIgZALgHQAKgHARAAIARABIABAdQgSABgFADQgFADgGASQgIAYgPAFQAWAFAOAfIACAEIAaAvg");
	this.shape_769.setTransform(465.575,73.5);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#990000").s().p("AAjBVIAAhsIhFBsIgsAAIAAiqIAsAAIAABrIBEhrIAtAAIAACqg");
	this.shape_770.setTransform(436.875,73.55);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#990000").s().p("AhbBUIAAgiIAIABIALAAQAJABACgHQACgGAAgbIAAhiICXAAIAACqIgtAAIAAiFIg9AAIAABLQAAAegHAMQgHAMgIADQgIAEgSAAQgLAAgSgDg");
	this.shape_771.setTransform(415.375,73.7);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#990000").s().p("AAjBVIAAhsIhFBsIgsAAIAAiqIAsAAIAABrIBEhrIAtAAIAACqg");
	this.shape_772.setTransform(395.625,73.55);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#990000").s().p("AAjBVIAAhsIhFBsIgsAAIAAiqIAsAAIAABrIBEhrIAtAAIAACqg");
	this.shape_773.setTransform(366.175,73.55);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#990000").s().p("AAXBWIgXgyQgGgPgFgEQgFgEgKAAIAABJIgtAAIAAiqIAtAAIAABGQAMgBAEgGQAFgGAGgTQAIgZALgHQAKgHARAAIARABIABAdQgSABgFADQgFADgGASQgIAYgPAFQAWAFAOAfIACAEIAaAvg");
	this.shape_774.setTransform(348.925,73.5);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#990000").s().p("AAfBVIAAhEQgbAIgNgBQgUAAgRgJQgRgIgGgNQgGgPAAgWIAAgqIAuAAIAAAqQAAAOACAGQADAHAIAFQAIAFAMAAQAMAAAPgGIAAhJIAtAAIAACqg");
	this.shape_775.setTransform(329.825,73.55);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#990000").s().p("AgsBOQgVgKgLgVQgMgUABgdQgBgWAMgVQALgVAUgMQAVgLAYABQAngBAYAaQAZAZAAAmQAAAmgZAaQgZAagmAAQgXAAgVgMgAgdgmQgMANAAAZQAAAaAMANQAMAOARAAQARAAANgOQALgNAAgaQAAgYgLgOQgNgNgRAAQgRAAgMANg");
	this.shape_776.setTransform(310.4,73.55);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#990000").s().p("Ag+A8QgRgXAAgkQAAgqAWgYQAWgXAiAAQAlgBAWAaQAXAZgBAzIhxAAQABAUAKAMQALAKAOABQALAAAHgHQAHgFAEgNIAtAIQgJAYgSANQgTAOgcAAQgsAAgVgegAgXgrQgJALAAASIBDAAQgBgTgKgKQgJgLgOAAQgOAAgKALg");
	this.shape_777.setTransform(281.8021,73.55);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#990000").s().p("AgWBVIAAiFIg2AAIAAglICZAAIAAAlIg2AAIAACFg");
	this.shape_778.setTransform(264.675,73.55);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#990000").s().p("AAjBVIAAhsIhFBsIgsAAIAAiqIAsAAIAABrIBEhrIAtAAIAACqg");
	this.shape_779.setTransform(246.425,73.55);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#990000").s().p("Ag5BBQgXgXAAgqQAAgpAXgYQAWgYAlABQAgAAASANQATANAIAcIgtAIQgCgOgIgGQgIgHgNAAQgQAAgKAMQgKALAAAcQAAAdAKANQAKANARAAQANAAAIgIQAIgHADgSIAtAIQgHAegUAQQgTAQghAAQglAAgWgZg");
	this.shape_780.setTransform(227.375,73.55);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#990000").s().p("AgsBOQgVgKgLgVQgMgUAAgdQAAgWAMgVQALgVAUgMQAUgLAZABQAmgBAZAaQAaAZAAAmQAAAmgaAaQgZAagmAAQgWAAgWgMgAgdgmQgMANAAAZQAAAaAMANQAMAOARAAQARAAANgOQAMgNAAgaQAAgYgMgOQgNgNgRAAQgRAAgMANg");
	this.shape_781.setTransform(207.95,73.55);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#990000").s().p("AAgBVIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA/IBAAAIAAg/IAuAAIAACqg");
	this.shape_782.setTransform(187.825,73.55);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#990000").s().p("ABJBVIAAiqIAtAAIAACqgAh1BVIAAiqIAtAAIAABHIAtAAQAbAAAOAFQAOADAKALQAJANAAASQAAAZgRAMQgRAMghAAgAhIA5IAqAAQARAAAHgGQAHgEgBgMQABgMgJgFQgKgEgYgBIgeAAg");
	this.shape_783.setTransform(154.7,73.55);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#990000").s().p("AhSBVIAAiqIBjAAQAdABAQAKQAPALAAAXQAAAPgIAKQgJALgMADQASADAIAMQAJAMAAAOQAAAVgOAMQgQAMgcAAgAgkA4IAkAAQASAAAJgEQAJgFAAgMQAAgMgKgFQgLgFgcAAIgXAAgAgkgOIAdAAQAUAAAJgFQAKgFAAgLQAAgLgJgFQgJgFgVAAIgdAAg");
	this.shape_784.setTransform(130.9,73.55);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#990000").s().p("AAjBVIAAhsIhFBsIgsAAIAAiqIAsAAIAABrIBEhrIAtAAIAACqg");
	this.shape_785.setTransform(100.875,73.55);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#990000").s().p("AhbBUIAAgiIAIABIALAAQAJABACgHQACgGAAgbIAAhiICXAAIAACqIgtAAIAAiFIg9AAIAABLQAAAegHAMQgHAMgIADQgIAEgSAAQgLAAgSgDg");
	this.shape_786.setTransform(79.375,73.7);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#990000").s().p("Ag5BBQgXgXAAgqQAAgpAXgYQAWgYAlABQAgAAASANQATANAIAcIgtAIQgCgOgIgGQgIgHgNAAQgQAAgKAMQgKALAAAcQAAAdAKANQAKANARAAQANAAAIgIQAIgHADgSIAtAIQgHAegUAQQgTAQghAAQglAAgWgZg");
	this.shape_787.setTransform(60.875,73.55);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#990000").s().p("AhZB2IAAjrICuAAIAAAoIh+AAIAAA0IB2AAIAAAnIh2AAIAABAICDAAIAAAog");
	this.shape_788.setTransform(40.825,70.3);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#002277").s().p("AgwAcIAbgFQAHAQAOABQAJgBAFgEQAFgEAAgHQAAgGgFgEQgFgEgJAAIgEAAIAAgTIAKgBQAEgBADgDQADgFAAgEQAAgGgEgEQgEgFgIAAQgFAAgEACQgFADgEAKIgagGQAEgOANgIQANgHAPAAQAVAAALAJQALAKAAAOQAAAIgFAGQgFAGgKAFQANACAGAIQAGAGAAALQAAANgMAKQgNAJgXAAQgoAAgJgfg");
	this.shape_789.setTransform(785.325,47.7);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#002277").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgEgLAAQgJABgEADQgFADgCAIIgcgFQAFgRALgHQAMgJAWABQATAAAKAEQAKAFAEAIQAEAGAAAVIgBAiQAAAPACAGQACAIADAIIgdAAIgEgJIgBgEQgHAIgJAEQgIADgKAAQgRAAgLgJgAAAAHQgMACgFADQgFAFgBAGQABAGAFAEQAEAGAHAAQAIgBAHgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_790.setTransform(774.05,47.7);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgEQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAyQAAATgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_791.setTransform(760.275,47.8);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#002277").s().p("AgmA5IAAhxIBNAAIAAAZIguAAIAABYg");
	this.shape_792.setTransform(750.05,47.7);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARAAAJADQAJACAHAIQAGAJAAALQAAAQgLAJQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgIQAAgIgFgDQgGgDgRAAIgUAAg");
	this.shape_793.setTransform(715.825,47.7);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAIAAAOQAAAKgFAHQgGAIgIACQAMABAGAJQAFAHAAAKQAAANgJAJQgKAIgTAAgAgYAmIAYAAQAMAAAGgEQAGgCAAgJQAAgIgHgDQgHgEgSAAIgQAAgAgYgJIAUAAQANAAAGgDQAGgEAAgHQAAgIgFgCQgGgEgOAAIgUAAg");
	this.shape_794.setTransform(699.975,47.7);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#002277").s().p("AgrAyQgKgJAAgPQABgKAEgIQAEgHAJgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgEgLAAQgJABgEADQgFADgCAIIgcgFQAFgRALgHQAMgJAWABQATAAAKAEQAKAFAEAIQAEAGAAAVIgBAiQABAPABAGQACAIADAIIgdAAIgEgJIgBgEQgHAIgJAEQgIADgKAAQgRAAgLgJgAAAAHQgNACgEADQgFAFgBAGQABAGAEAEQAFAGAHAAQAHgBAIgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_795.setTransform(686.75,47.7);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#002277").s().p("Ag3BQIAAicIAdAAIAAAQQAFgJAJgFQAKgFAKAAQAUAAAOAPQAOAQAAAcQgBAcgOAQQgNAPgUAAQgIAAgIgEQgIgEgIgIIAAA5gAgRgvQgIAJABARQAAATAHAIQAIAJAKAAQAKAAAHgJQAHgHAAgTQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_796.setTransform(674.2,49.75);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#002277").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBOIAdhOIAlAAIAABxg");
	this.shape_797.setTransform(776.075,21.15);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_798.setTransform(761.6258,21.15);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#002277").s().p("AAbA5IAAgvIgCAAQgLAAgEACQgFADgFAIIgBACIgUAgIgjAAIAVghQAKgPAHgCQgMAAgIgIQgIgJAAgNQAAgMAFgHQAGgJAIgCQAIgDASAAIA6AAIAABxgAgKghQgFADAAAIQAAAIAGADQAFADAMABIATAAIAAgeIgVAAQgMAAgEAEg");
	this.shape_799.setTransform(748.4,21.15);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#002277").s().p("Ag3BQIAAicIAcAAIAAAQQAGgJAKgFQAIgFALAAQAUAAAOAPQANAQAAAcQAAAcgNAQQgOAPgUAAQgJAAgHgEQgIgEgJgIIAAA5gAgSgvQgGAJgBARQAAATAIAIQAHAJAKAAQALAAAHgIQAHgIAAgTQAAgSgHgJQgIgJgKAAQgKAAgIAJg");
	this.shape_800.setTransform(736.35,23.2);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_801.setTransform(723.0758,21.15);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAIAAAOQAAAKgFAHQgGAIgIACQAMABAGAJQAFAHAAAKQAAANgJAJQgKAIgTAAgAgYAmIAYAAQAMAAAGgEQAGgCAAgJQAAgIgHgDQgHgEgSAAIgQAAgAgYgJIAUAAQANAAAGgDQAGgEAAgHQAAgIgFgCQgGgEgOAAIgUAAg");
	this.shape_802.setTransform(710.675,21.15);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgOAHgPQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAZgRARQgRARgZAAQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_803.setTransform(696.875,21.15);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#002277").s().p("Ag3BQIAAicIAcAAIAAAQQAGgJAKgFQAIgFALAAQAUAAAOAPQANAQAAAcQAAAcgNAQQgOAPgUAAQgJAAgHgEQgIgEgJgIIAAA5gAgSgvQgGAJgBARQAAATAIAIQAHAJAKAAQALAAAHgIQAHgIAAgTQAAgSgHgJQgIgJgKAAQgKAAgIAJg");
	this.shape_804.setTransform(683.7,23.2);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#002277").s().p("AAfBPIAAiCIg9AAIAACCIggAAIAAidIB9AAIAACdg");
	this.shape_805.setTransform(668.75,18.975);

	this.CircleTestOD = new lib.circlesvg();
	this.CircleTestOD.name = "CircleTestOD";
	this.CircleTestOD.setTransform(399.95,299.95);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#990000").s().p("AgfB6QALgXAEgMQAEgMAEgPQAEgQABgOQACgPAAgOQAAgdgGgcQgHgbgRgmIAYAAQASAbALAfQAKAeAAAgQAAAagIAeQgKAigUAhg");
	this.shape_806.setTransform(739.625,243.9);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#990000").s().p("AgPA1QgPgRgCgVIgcAAIAAA0IgkAAIAAiGIAkAAIAAA3IAcAAQADgaARgQQAQgPAcAAQAcAAASASQATATAAAhQAAAUgHAQQgHAPgOAJQgOAJgWAAQghAAgPgRgAAKggQgHAKAAAUQAAAaAHAJQAIAKAOgBQAOAAAHgKQAHgLAAgUQAAgZgIgIQgHgKgOABQgOAAgHAJg");
	this.shape_807.setTransform(724.875,243.9);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#990000").s().p("AhABDIAAiGIAjAAIAAA4IAjAAQAWAAALAEQALADAHAJQAIAKAAAOQAAATgOAKQgNAKgagBgAgdAtIAhAAQAQAAAEgFQAEgFAAgHQAAgKgIgEQgHgDgSAAIgYAAg");
	this.shape_808.setTransform(705.8,243.9);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgIgRAAgWQAAgSAIgQQAJgRAQgIQAQgJATAAQAegBAUAVQATATAAAeQAAAfgTATQgUAVgegBQgSABgQgJgAgXgeQgJALAAATQAAAUAJALQAKAKANAAQAOAAAJgKQAKgLAAgUQAAgTgKgLQgJgLgOABQgNgBgKALg");
	this.shape_809.setTransform(673.75,243.9);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#990000").s().p("AgyA7QgMgLAAgRQAAgMAFgIQAFgKAKgEQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAEgDAKIghgGQAGgTANgKQANgJAbAAQAWAAAMAFQAMAGAFAJQAEAJAAAWIAAApQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUAAgMgLgAAAAIQgPADgFADQgHAFAAAIQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_810.setTransform(642.075,243.9);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgIgRgBgWQABgSAIgQQAJgRAQgIQAQgJATAAQAegBAUAVQATATAAAeQAAAfgTATQgUAVgegBQgRABgRgJgAgXgeQgJALAAATQAAAUAJALQAKAKANAAQAOAAAJgKQAKgLAAgUQAAgTgKgLQgJgLgOABQgNgBgKALg");
	this.shape_811.setTransform(603.2,243.9);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#990000").s().p("AgtBDIAAiGIBaAAIAAAdIg2AAIAABpg");
	this.shape_812.setTransform(590.65,243.9);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#990000").s().p("AgxAwQgNgTAAgcQAAggASgTQARgUAbABQAdgBARAVQASATgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgEQAGgFACgLIAkAHQgHATgPAKQgOAKgXAAQgiAAgRgWgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_813.setTransform(577.0277,243.9);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#990000").s().p("AhABDIAAiGIAkAAIAAA4IAjAAQAUAAAMAEQALADAHAJQAIAKAAAOQAAATgNAKQgNAKgcgBgAgcAtIAgAAQAQAAAEgFQAEgFAAgHQAAgKgIgEQgHgDgSAAIgXAAg");
	this.shape_814.setTransform(555.15,243.9);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#990000").s().p("AgQBDIAAhpIgsAAIAAgdIB5AAIAAAdIgrAAIAABpg");
	this.shape_815.setTransform(540.3,243.9);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#990000").s().p("AA5BDIAAiGIAkAAIAACGgAhcBDIAAiGIAkAAIAAA4IAkAAQAUAAAKAEQAMACAHAJQAIALAAAOQAAATgNAKQgOAKgagBgAg4AtIAgAAQANAAAGgEQAGgEgBgJQAAgKgGgEQgIgDgUAAIgWAAg");
	this.shape_816.setTransform(522.95,243.9);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#990000").s().p("AgyA7QgMgLAAgRQAAgMAFgIQAFgKAKgEQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAEgDAKIghgGQAGgTANgKQANgJAbAAQAWAAAMAFQAMAGAFAJQAEAJAAAWIAAApQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUAAgMgLgAAAAIQgPADgFADQgHAFAAAIQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_817.setTransform(475.675,243.9);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#990000").s().p("Ag5AhIAhgGQAHATARABQAKgBAHgFQAGgFAAgHQAAgIgHgFQgGgEgKAAIgFAAIAAgWIAMgBQAFgBADgFQAEgFAAgGQAAgGgFgGQgEgFgKAAQgFAAgGADQgGADgEALIgegGQAEgSAPgIQAPgJASAAQAZAAANALQANALAAARQAAAKgFAIQgGAGgMAGQAOADAIAJQAHAIAAAMQAAAQgPALQgOALgcAAQgvAAgLglg");
	this.shape_818.setTransform(461.6,243.9);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgJgRAAgWQAAgSAJgQQAJgRAQgIQAQgJATAAQAfgBATAVQATATABAeQgBAfgTATQgUAVgegBQgRABgRgJgAgXgeQgJALAAATQAAAUAJALQAKAKANAAQAOAAAJgKQAKgLAAgUQAAgTgKgLQgJgLgOABQgNgBgKALg");
	this.shape_819.setTransform(440.4,243.9);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgIgRgBgWQABgSAIgQQAJgRAQgIQAQgJATAAQAegBAUAVQATATAAAeQAAAfgTATQgUAVgegBQgRABgRgJgAgXgeQgJALAAATQAAAUAJALQAKAKANAAQAOAAAJgKQAKgLAAgUQAAgTgKgLQgJgLgOABQgNgBgKALg");
	this.shape_820.setTransform(390.35,243.9);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#990000").s().p("AAwBDIAAhXIghBXIgeAAIgfhXIAABXIgfAAIAAiGIAtAAIAgBdIAihdIAsAAIAACGg");
	this.shape_821.setTransform(372.825,243.9);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#990000").s().p("AgSAYQAKgEAFgGQAEgGAAgKIgQAAIAAgjIAiAAIAAAZQAAAOgCAJQgDAJgIAIQgGAGgLAEg");
	this.shape_822.setTransform(352.125,250.95);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#990000").s().p("AgxAwQgNgTAAgcQAAggASgTQARgUAbABQAdgBARAVQASATgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgEQAGgFACgLIAkAHQgHATgPAKQgOAKgXAAQgiAAgRgWgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_823.setTransform(341.3777,243.9);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#990000").s().p("AgRBDIAAhpIgrAAIAAgdIB5AAIAAAdIgrAAIAABpg");
	this.shape_824.setTransform(327.85,243.9);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#990000").s().p("AgyA7QgMgLAAgRQAAgMAFgIQAFgKAKgEQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAEgDAKIghgGQAGgTANgKQANgJAbAAQAWAAAMAFQAMAGAFAJQAEAJAAAWIAAApQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUAAgMgLgAAAAIQgPADgFADQgHAFAAAIQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_825.setTransform(298.325,243.9);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#990000").s().p("AhABDIAAiGIBNAAQAYAAAMAKQAMAIAAASQAAALgHAIQgGAJgKACQAOADAHAKQAGAJAAALQAAAQgLAKQgMAKgWgBgAgcAsIAcAAQAOAAAHgDQAHgEAAgJQAAgKgIgEQgIgEgWABIgSAAgAgcgLIAXAAQAPAAAIgDQAHgFAAgJQAAgIgHgEQgHgDgQAAIgXAAg");
	this.shape_826.setTransform(283.475,243.9);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#990000").s().p("AAcBDIAAhVIg3BVIgiAAIAAiGIAiAAIAABUIA2hUIAjAAIAACGg");
	this.shape_827.setTransform(267.05,243.9);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#990000").s().p("AAwBDIAAhXIghBXIgeAAIgfhXIAABXIgfAAIAAiGIAtAAIAgBdIAihdIAsAAIAACGg");
	this.shape_828.setTransform(219.175,243.9);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#990000").s().p("AgyA7QgMgLAAgRQAAgMAFgIQAFgKAKgEQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAEgDAKIghgGQAGgTANgKQANgJAbAAQAWAAAMAFQAMAGAFAJQAEAJAAAWIAAApQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUAAgMgLgAAAAIQgPADgFADQgHAFAAAIQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_829.setTransform(183.825,243.9);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#990000").s().p("Ag5AhIAhgGQAHATASABQAJgBAHgFQAGgFAAgHQAAgIgHgFQgGgEgKAAIgFAAIAAgWIAMgBQAFgBADgFQAEgFAAgGQAAgGgFgGQgEgFgJAAQgHAAgFADQgGADgFALIgdgGQAEgSAPgIQAPgJASAAQAYAAAOALQANALAAARQAAAKgFAIQgGAGgMAGQAOADAIAJQAHAIAAAMQAAAQgPALQgOALgcAAQgvAAgLglg");
	this.shape_830.setTransform(169.75,243.9);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#990000").s().p("AgxAwQgNgTAAgcQAAggASgTQARgUAbABQAdgBARAVQASATgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgEQAGgFACgLIAkAHQgHATgPAKQgOAKgXAAQgiAAgRgWgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_831.setTransform(149.1277,243.9);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#990000").s().p("Ag5AhIAggGQAJATAQABQAKgBAHgFQAGgFAAgHQAAgIgHgFQgGgEgKAAIgFAAIAAgWIAMgBQAEgBAEgFQAEgFAAgGQAAgGgEgGQgFgFgKAAQgFAAgGADQgGADgEALIgfgGQAFgSAPgIQAPgJASAAQAZAAANALQANALAAARQABAKgHAIQgFAGgNAGQAQADAHAJQAHAIAAAMQAAAQgPALQgOALgcAAQgvAAgLglg");
	this.shape_832.setTransform(112.3,243.9);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#990000").s().p("AgyA7QgMgLAAgRQAAgMAFgIQAFgKAKgEQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAEgDAKIghgGQAGgTANgKQANgJAbAAQAWAAAMAFQAMAGAFAJQAEAJAAAWIAAApQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUAAgMgLgAAAAIQgPADgFADQgHAFAAAIQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_833.setTransform(99.025,243.9);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#990000").s().p("AgsBDIAAiGIBZAAIAAAdIg2AAIAABpg");
	this.shape_834.setTransform(70.7,243.9);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#990000").s().p("AAIB6QgTgdgKggQgKggAAgdQAAgkAMggQALgdAQgYIAYAAQgRAmgGAbQgHAcAAAdQAAAVAEAVQAEAXAGATQAFANALAYg");
	this.shape_835.setTransform(60.325,243.9);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#990000").s().p("AhJApIAqgHQAKAZAWAAQAMAAAIgGQAIgHAAgJQAAgLgIgFQgIgGgNAAIgHAAIAAgcQALAAAFgCQAFgCAFgFQAFgGAAgHQAAgIgGgIQgGgGgMgBQgIAAgHAFQgHADgGAPIgmgIQAGgXATgLQATgLAXAAQAfgBARAOQARAPAAAVQAAANgHAKQgIAIgPAIQATAEAJAKQAKALAAAPQAAAVgTAOQgTAPgjAAQg8AAgOgxg");
	this.shape_836.setTransform(574.175,203.25);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#990000").s().p("AhABLQgPgPAAgVQAAgOAGgMQAHgLANgGQAMgFAYgFQAfgGAMgFIAAgFQAAgNgHgFQgGgGgRAAQgMAAgHAFQgHAEgEAMIgpgHQAHgZARgMQARgMAhABQAeAAAOAHQAPAHAGALQAGALAAAdIAAA0QAAAXACALQACALAGALIgtAAIgEgNIgCgFQgLALgNAFQgNAHgPAAQgaAAgPgPgAgBALQgTADgFAEQgJAGAAAKQAAAKAHAGQAHAIALgBQALABALgJQAJgGACgIQACgHAAgQIAAgJIgbAIg");
	this.shape_837.setTransform(557.275,203.25);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#990000").s().p("AhbBUIAAgiIAIABIALAAQAJAAACgFQACgHAAgbIAAhiICXAAIAACqIgtAAIAAiFIg9AAIAABLQAAAegHALQgHANgIADQgIAEgSAAQgLAAgSgDg");
	this.shape_838.setTransform(536.675,203.4);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#990000").s().p("Ag5BVIAAiqIBzAAIAAAlIhGAAIAACFg");
	this.shape_839.setTransform(521.325,203.25);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#990000").s().p("ABJBVIAAiqIAtAAIAACqgAh1BVIAAiqIAuAAIAABHIAtAAQAaAAANAFQAOADALALQAJAOAAARQAAAZgRAMQgRAMghAAgAhHA5IApAAQARAAAHgFQAHgGAAgLQAAgMgJgFQgKgFgYAAIgdAAg");
	this.shape_840.setTransform(469.9,203.25);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#990000").s().p("AhSBVIAAiqIBiAAQAeAAAQAMQAPAKAAAXQAAAPgIAKQgIAKgNAEQASAEAIALQAJAMAAAOQAAAVgOAMQgPAMgdAAgAgkA4IAjAAQATAAAIgEQAKgFgBgMQABgMgLgFQgKgFgcAAIgXAAgAgkgOIAdAAQAUABAKgGQAJgFAAgLQAAgMgJgEQgJgFgVABIgdAAg");
	this.shape_841.setTransform(446.1,203.25);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#990000").s().p("AhABLQgPgPAAgVQAAgOAGgMQAHgLANgGQAMgFAYgFQAfgGAMgFIAAgFQAAgNgHgFQgGgGgRAAQgMAAgHAFQgHAEgEAMIgpgHQAHgZARgMQARgMAhABQAeAAAOAHQAPAHAGALQAGALAAAdIAAA0QAAAXACALQACALAGALIgtAAIgEgNIgCgFQgLALgNAFQgNAHgPAAQgaAAgPgPgAgBALQgTADgFAEQgJAGAAAKQAAAKAHAGQAHAIALgBQALABALgJQAJgGACgIQACgHAAgQIAAgJIgbAIg");
	this.shape_842.setTransform(426.275,203.25);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#990000").s().p("AhTB4IAAjrIArAAIAAAZQAIgNAOgIQAOgIAQAAQAeAAAUAXQAWAYAAApQAAAqgWAYQgUAYgeAAQgNAAgMgGQgMgFgNgOIAABWgAgbhGQgLANAAAYQAAAdALANQAMAOAPAAQARAAAKgMQAKgMAAgdQAAgbgLgNQgLgNgPAAQgQAAgLANg");
	this.shape_843.setTransform(407.5,206.3);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#990000").s().p("AAeBVIAAiFIg8AAIAACFIgtAAIAAiqICXAAIAACqg");
	this.shape_844.setTransform(386.75,203.25);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#990000").s().p("Ag+A8QgRgXAAgkQAAgqAWgXQAWgYAiAAQAlgBAWAaQAXAZgBAzIhxAAQABAUAKAMQALALAOAAQALAAAHgHQAHgFAEgNIAtAHQgJAZgSANQgTANgcABQgsgBgVgdgAgXgrQgJALAAASIBDAAQgBgTgKgKQgJgLgOAAQgOAAgKALg");
	this.shape_845.setTransform(358.5021,203.25);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#990000").s().p("AgsBPQgVgLgLgVQgMgUAAgcQAAgXAMgVQALgVAUgMQAVgLAYABQAngBAYAaQAaAZAAAmQAAAngaAZQgZAZgmABQgWgBgWgKgAgdgmQgMANAAAZQAAAaAMANQAMAOARAAQARAAANgOQAMgNAAgaQAAgYgMgOQgNgOgRAAQgRAAgMAOg");
	this.shape_846.setTransform(303,203.25);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#990000").s().p("AhTB4IAAjrIArAAIAAAZQAIgNAOgIQAOgIAQAAQAeAAAUAXQAWAYAAApQAAAqgWAYQgUAYgeAAQgNAAgMgGQgMgFgNgOIAABWgAgbhGQgLANAAAYQAAAdALANQAMAOAPAAQAQAAALgMQAKgMAAgdQAAgbgLgNQgLgNgPAAQgQAAgLANg");
	this.shape_847.setTransform(283.3,206.3);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#990000").s().p("AAXBWIgXgyQgGgOgFgFQgFgEgKAAIAABJIgtAAIAAiqIAtAAIAABGQAMgBAEgGQAFgGAGgTQAIgZALgHQAKgHARAAIARABIABAdQgSABgFADQgFADgGASQgIAXgPAGQAWAFAOAfIACAEIAaAvg");
	this.shape_848.setTransform(265.575,203.2);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#990000").s().p("AhABLQgPgPAAgVQAAgOAGgMQAHgLANgGQAMgFAYgFQAfgGAMgFIAAgFQAAgNgHgFQgGgGgRAAQgMAAgHAFQgHAEgEAMIgpgHQAHgZARgMQARgMAhABQAeAAAOAHQAPAHAGALQAGALAAAdIAAA0QAAAXACALQACALAGALIgtAAIgEgNIgCgFQgLALgNAFQgNAHgPAAQgaAAgPgPgAgBALQgTADgFAEQgJAGAAAKQAAAKAHAGQAHAIALgBQALABALgJQAJgGACgIQACgHAAgQIAAgJIgbAIg");
	this.shape_849.setTransform(247.075,203.25);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#990000").s().p("Ag6BuQgVgMgLgiIAsgPQAGAVAMAHQALAGARAAQAVAAAKgJQAKgLAAgMQAAgPgLgIQgMgKgXABIgKAAIAAgjIAGAAQAUAAAMgJQAMgKAAgRQAAgNgKgJQgKgIgQgBQgeAAgJAeIgugKQAPg6BHAAQAoAAAWASQAUATABAYQAAARgKANQgKAOgTAKQAYAHALAQQAMAOAAAWQAAAegXAUQgXATgtAAQglAAgVgMg");
	this.shape_850.setTransform(227,200);

	this.CircleTestOS = new lib.circlesvg();
	this.CircleTestOS.name = "CircleTestOS";
	this.CircleTestOS.setTransform(399.95,299.95);

	this.astBtn = new lib.КнопкаastBtnнебесная();
	this.astBtn.name = "astBtn";
	this.astBtn.setTransform(547.5,225);
	new cjs.ButtonHelper(this.astBtn, 0, 1, 2);

	this.amsBtn = new lib.КнопкаamsBtnнебесная();
	this.amsBtn.name = "amsBtn";
	this.amsBtn.setTransform(252.5,225);
	new cjs.ButtonHelper(this.amsBtn, 0, 1, 2);

	this.duoBtn = new lib.КнопкаduoBtnнебесная();
	this.duoBtn.name = "duoBtn";
	this.duoBtn.setTransform(547.5,150);
	new cjs.ButtonHelper(this.duoBtn, 0, 1, 2);

	this.visBtn = new lib.КнопкаvisBtnнебесная();
	this.visBtn.name = "visBtn";
	this.visBtn.setTransform(252.5,150);
	new cjs.ButtonHelper(this.visBtn, 0, 1, 2);

	this.SaveResBtnAll = new lib.КнопкаBtnNext1небесная();
	this.SaveResBtnAll.name = "SaveResBtnAll";
	this.SaveResBtnAll.setTransform(400,545);
	new cjs.ButtonHelper(this.SaveResBtnAll, 0, 1, 2);

	this.moreTests = new lib.moreTests();
	this.moreTests.name = "moreTests";
	this.moreTests.setTransform(400,74.75,1,1,0,0,0,400,16.5);

	this.AfterText = new lib.Символ5();
	this.AfterText.name = "AfterText";
	this.AfterText.setTransform(400.05,343.45,1,1,0,0,0,316.9,32);

	this.SaveArrow = new lib.Символ4();
	this.SaveArrow.name = "SaveArrow";
	this.SaveArrow.setTransform(400.1,410.8,1,1,0,0,0,25.1,30.1);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f().s("#002277").ss(3,1,1).p("EguGgNDMBcNAAAIAAaHMhcNAAAg");
	this.shape_851.setTransform(399.9,190.725);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("rgba(74,74,74,0)").s().p("EguGANEIAA6HMBcNAAAIAAaHg");
	this.shape_852.setTransform(399.9,190.725);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#002277").s().p("AAXBWIgXgxQgGgQgFgDQgFgFgKAAIAABJIgtAAIAAiqIAtAAIAABGQAMgCAEgFQAFgGAGgTQAIgZALgHQAKgHARAAIARAAIABAfQgSgBgFAEQgFAEgGARQgIAYgPAFQAWAFAOAgIACADIAaAvg");
	this.shape_853.setTransform(633.025,283.35);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#002277").s().p("AgsBOQgVgKgLgUQgMgVAAgdQAAgWAMgVQALgVAUgLQAVgMAYAAQAmAAAZAaQAaAZgBAmQABAmgaAaQgZAZgmAAQgWAAgWgLgAgdgmQgMAOAAAYQAAAaAMANQAMANARAAQARAAANgNQAMgOAAgZQAAgZgMgNQgNgNgRAAQgRAAgMANg");
	this.shape_854.setTransform(593.7,283.4);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#002277").s().p("AAXBWIgXgxQgGgQgFgDQgFgFgKAAIAABJIgtAAIAAiqIAtAAIAABGQAMgCAEgFQAFgGAGgTQAIgZALgHQAKgHARAAIARAAIABAfQgSgBgFAEQgFAEgGARQgIAYgPAFQAWAFAOAgIACADIAaAvg");
	this.shape_855.setTransform(556.475,283.35);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#002277").s().p("AhABLQgPgOAAgWQAAgPAGgLQAHgMANgEQAMgGAYgFQAfgGAMgFIAAgEQAAgNgHgGQgGgGgRAAQgMAAgHAFQgHAFgEAMIgpgIQAHgZARgLQARgNAhAAQAeAAAOAIQAPAHAGALQAGALAAAeIAAA0QAAAWACAKQACALAGANIgtAAIgEgOIgCgFQgLALgNAGQgNAFgPAAQgaAAgPgOgAgBALQgTAEgFADQgJAGAAAKQAAAJAHAHQAHAHALABQALgBALgHQAJgHACgJQACgFAAgQIAAgJIgbAHg");
	this.shape_856.setTransform(528.825,283.4);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#002277").s().p("Ag+A8QgRgXAAgkQAAgpAWgZQAWgYAiAAQAlAAAWAaQAXAZgBAzIhxAAQABAUAKALQALAMAOAAQALgBAHgFQAHgGAEgNIAtAIQgJAYgSAOQgTAMgcAAQgsAAgVgdgAgXgrQgJALAAATIBDAAQgBgVgKgKQgJgKgOAAQgOAAgKALg");
	this.shape_857.setTransform(481.2021,283.4);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#002277").s().p("AA8BWIAAhwIgqBwIglAAIgohwIAABwIgnAAIAAiqIA4AAIAqB1IArh1IA4AAIAACqg");
	this.shape_858.setTransform(423.675,283.4);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#002277").s().p("ABEBWIgVgxQgGgOgFgEQgFgFgJgBIAABJIgsAAIAAhJQgJABgDADQgDADgJARIgWAxIgwAAIAYgvQASgjAUgFQgPgFgIgYQgGgRgFgEQgFgEgSABIAAgfIATAAQAPAAALAGQAKAHAKAaQAHAVAEAFQAFAFAIABIAAhGIAsAAIAABGQAJAAAEgGQAFgFAHgVQAJgZALgIQAKgGAQAAIASAAIAAAfQgSgBgFAEQgFAEgGARQgIAYgOAFQATAFATAjIAYAvg");
	this.shape_859.setTransform(399.625,283.35);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#002277").s().p("AhABLQgPgOAAgWQAAgPAGgLQAHgMANgEQAMgGAYgFQAfgGAMgFIAAgEQAAgNgHgGQgGgGgRAAQgMAAgHAFQgHAFgEAMIgpgIQAHgZARgLQARgNAhAAQAeAAAOAIQAPAHAGALQAGALAAAeIAAA0QAAAWACAKQACALAGANIgtAAIgEgOIgCgFQgLALgNAGQgNAFgPAAQgaAAgPgOgAgBALQgTAEgFADQgJAGAAAKQAAAJAHAHQAHAHALABQALgBALgHQAJgHACgJQACgFAAgQIAAgJIgbAHg");
	this.shape_860.setTransform(378.775,283.4);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#002277").s().p("AgsBOQgVgKgLgUQgMgVAAgdQAAgWAMgVQALgVAUgLQAVgMAYAAQAnAAAYAaQAZAZAAAmQAAAmgZAaQgZAZgmAAQgWAAgWgLgAgdgmQgMAOAAAYQAAAaAMANQAMANARAAQARAAANgNQAMgOAAgZQAAgZgMgNQgNgNgRAAQgRAAgMANg");
	this.shape_861.setTransform(330.45,283.4);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#002277").s().p("AgrBOQgWgKgLgUQgLgVAAgdQAAgWALgVQALgVAUgLQAVgMAYAAQAnAAAZAaQAYAZAAAmQAAAmgYAaQgaAZgmAAQgXAAgUgLgAgdgmQgMAOAAAYQAAAaAMANQANANAQAAQARAAANgNQALgOAAgZQAAgZgLgNQgNgNgRAAQgQAAgNANg");
	this.shape_862.setTransform(296.55,283.4);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#002277").s().p("AhPAjIAtgIQAFAbAaAAQAPAAAIgKQAKgKACgVIguAAIAAgaIAvAAQgBgVgJgKQgJgJgOgBQgLAAgIAGQgKAFgCALIgsgJQAQgvA5gBQAoAAAVAYQAVAYAAApQAAArgVAXQgWAXgmAAQg+AAgQg2g");
	this.shape_863.setTransform(260.95,283.4);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#002277").s().p("Ag+A8QgRgXAAgkQAAgpAWgZQAWgYAiAAQAlAAAWAaQAXAZgBAzIhxAAQABAUAKALQALAMAOAAQALgBAHgFQAHgGAEgNIAtAIQgJAYgSAOQgTAMgcAAQgsAAgVgdgAgXgrQgJALAAATIBDAAQgBgVgKgKQgJgKgOAAQgOAAgKALg");
	this.shape_864.setTransform(233.6021,283.4);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#002277").s().p("AhbBUIAAghIAIAAIALABQAJAAACgHQACgFAAgcIAAhiICXAAIAACqIgtAAIAAiGIg9AAIAABMQAAAegHAMQgHALgIAEQgIAEgSAAQgLAAgSgDg");
	this.shape_865.setTransform(213.175,283.55);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#002277").s().p("Ag5BCQgXgYAAgqQAAgqAXgXQAWgYAlAAQAgAAASAOQATANAIAcIgtAIQgCgOgIgGQgIgHgNAAQgQAAgKAMQgKAMAAAbQAAAdAKANQAKAMARAAQANAAAIgHQAIgHADgSIAtAHQgHAfgUAQQgTAPghAAQglAAgWgXg");
	this.shape_866.setTransform(194.675,283.4);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#002277").s().p("AgrBOQgWgKgLgUQgLgVAAgdQAAgWALgVQALgVAVgLQATgMAZAAQAmAAAaAaQAZAZAAAmQAAAmgZAaQgaAZgmAAQgXAAgUgLgAgdgmQgMAOAAAYQAAAaAMANQANANAQAAQASAAAMgNQALgOAAgZQAAgZgLgNQgMgNgSAAQgQAAgNANg");
	this.shape_867.setTransform(175.25,283.4);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#002277").s().p("AAuB2IAAjDIhbAAIAADDIgwAAIAAjrIC7AAIAADrg");
	this.shape_868.setTransform(153.3,280.15);

	this.BtnColorGo = new lib.КнопкаBtnNext1небесная();
	this.BtnColorGo.name = "BtnColorGo";
	this.BtnColorGo.setTransform(400,545);
	new cjs.ButtonHelper(this.BtnColorGo, 0, 1, 2);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#002277").s().p("Ag0BPQACgQAIgOQAJgOAZgYQAUgSAEgHQAGgJABgJQAAgKgGgFQgFgGgKAAQgIAAgGAGQgFAFgCAOIgdgDQACgZAPgLQANgLAVAAQAXAAAOANQANAMAAATQAAAKgEAKQgEAKgIAJQgGAHgOANIgRASIgGAIIA7AAIAAAcg");
	this.shape_869.setTransform(773.7,23.975);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#990000").s().p("ABJBVIAAiqIAtAAIAACqgAh1BVIAAiqIAuAAIAABHIAtAAQAaAAANAFQAOADAKALQAKAOAAARQAAAZgRAMQgRAMghAAgAhHA5IAqAAQAQAAAHgFQAGgGABgLQAAgMgJgFQgJgFgaAAIgcAAg");
	this.shape_870.setTransform(460.3,203.25);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#990000").s().p("AhSBVIAAiqIBiAAQAfAAAPAMQAPAKAAAXQAAAPgIAKQgJAKgMAEQASAEAJALQAIAMAAAOQAAAVgPAMQgOAMgdAAgAgkA4IAjAAQATAAAIgEQAJgFAAgMQAAgMgKgFQgJgFgdAAIgXAAgAgkgOIAdAAQAUABAKgGQAJgFAAgLQAAgMgJgEQgIgFgWABIgdAAg");
	this.shape_871.setTransform(436.5,203.25);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#990000").s().p("AhbBUIAAgiIAIABIALAAQAJAAACgFQACgHAAgbIAAhiICXAAIAACqIgtAAIAAiFIg9AAIAABLQAAAegHALQgHANgIADQgIAEgSAAQgLAAgSgDg");
	this.shape_872.setTransform(396.075,203.4);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#990000").s().p("Ag+A8QgRgXAAgkQAAgqAWgXQAWgYAiAAQAlgBAWAaQAXAZgBAzIhxAAQABAUAKAMQALALAOAAQALAAAHgHQAHgFAEgNIAtAHQgJAZgSANQgTANgcABQgsgBgVgdgAgXgrQgJALAAASIBDAAQgBgTgKgKQgJgLgOAAQgOAAgKALg");
	this.shape_873.setTransform(368.0521,203.25);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#990000").s().p("AgsBPQgVgLgLgVQgMgUAAgcQAAgXAMgVQALgVAUgMQAVgLAYABQAmgBAZAaQAZAZAAAmQAAAngZAZQgZAZgmABQgWgBgWgKgAgdgmQgMANAAAZQAAAaAMANQAMAOARAAQARAAANgOQAMgNAAgaQAAgYgMgOQgNgOgRAAQgRAAgMAOg");
	this.shape_874.setTransform(312.55,203.25);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#990000").s().p("AhTB4IAAjrIArAAIAAAZQAIgNAOgIQAOgIAQAAQAeAAAUAXQAWAYAAApQAAAqgWAYQgUAYgeAAQgNAAgMgGQgMgFgNgOIAABWgAgbhGQgLANAAAYQAAAdALANQAMAOAPAAQARAAAKgMQAKgMAAgdQAAgbgLgNQgKgNgQAAQgQAAgLANg");
	this.shape_875.setTransform(292.85,206.3);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#990000").s().p("Ag6BuQgVgMgLgiIAsgPQAHAVALAHQALAGARAAQAVAAAKgJQALgLgBgMQABgPgMgIQgMgKgXABIgKAAIAAgjIAGAAQAUAAAMgJQAMgKAAgRQAAgNgKgJQgKgIgQgBQgeAAgJAeIgugKQAPg6BHAAQAoAAAWASQAUATABAYQAAARgKANQgKAOgTAKQAXAHAMAQQAMAOAAAWQAAAegXAUQgXATgtAAQgkAAgWgMg");
	this.shape_876.setTransform(236.55,200);

	this.BtnColorODEq = new lib.norm();
	this.BtnColorODEq.name = "BtnColorODEq";
	this.BtnColorODEq.setTransform(609.9,517.8,0.8886,0.8889);
	new cjs.ButtonHelper(this.BtnColorODEq, 0, 1, 2);

	this.BtnColorODGreen = new lib.green();
	this.BtnColorODGreen.name = "BtnColorODGreen";
	this.BtnColorODGreen.setTransform(488.3,520,0.8887,0.8889);
	new cjs.ButtonHelper(this.BtnColorODGreen, 0, 1, 2);

	this.BtnColorODRed = new lib.red();
	this.BtnColorODRed.name = "BtnColorODRed";
	this.BtnColorODRed.setTransform(731.9,520,0.8887,0.8889);
	new cjs.ButtonHelper(this.BtnColorODRed, 0, 1, 2);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#002277").s().p("AASBEIgSgnQgFgMgDgDQgEgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBADgEQAEgFAFgPQAGgUAIgFQAJgGAMAAIAPABIAAAXQgPAAgDADQgEADgEAOQgHASgLAFQAQADAMAZIABADIAUAlg");
	this.shape_877.setTransform(720.4,304.825);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#002277").s().p("AAYBDIAAhpIgvAAIAABpIgkAAIAAiGIB3AAIAACGg");
	this.shape_878.setTransform(705.025,304.85);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#002277").s().p("AgiA+QgRgIgJgQQgIgQAAgXQAAgSAIgQQAJgRAQgIQAQgKATABQAeAAAUATQATAUAAAeQAAAfgTATQgUAVgeAAQgRAAgRgJgAgWgeQgKALAAATQAAAUAKALQAJAKANAAQAOAAAJgKQAKgLAAgUQAAgTgKgLQgJgLgOAAQgNABgJAKg");
	this.shape_879.setTransform(689.4,304.85);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#002277").s().p("AASBEIgSgnQgFgMgDgDQgEgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBADgEQAEgFAEgPQAHgUAIgFQAJgGAMAAIAPABIAAAXQgPAAgDADQgEADgEAOQgHASgLAFQAQADAMAZIABADIAUAlg");
	this.shape_880.setTransform(660.1,304.825);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#002277").s().p("AgPA1QgPgRgCgVIgcAAIAAA0IgkAAIAAiGIAkAAIAAA3IAcAAQADgaARgPQAQgRAcABQAcAAASASQATATAAAhQAAAVgHAPQgHAPgOAKQgOAIgWABQghgBgPgRgAAKggQgHAJAAAVQAAAaAHAJQAIAJAOAAQAOABAHgLQAHgLAAgUQAAgZgIgJQgHgJgOABQgOgBgHAKg");
	this.shape_881.setTransform(634.825,304.85);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#002277").s().p("Ag5BdIgDgcQAJACAGAAQANAAAGgIQAGgHADgLIgziHIAlAAIAgBfIAfhfIAlAAIgvCBIgJAYIgJASQgEAGgFAEQgFAEgIACQgIACgKAAQgLAAgKgCg");
	this.shape_882.setTransform(615.975,307.575);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#002277").s().p("AA2BEIgRgnQgEgLgEgDQgEgEgHgBIAAA6IgjAAIAAg6QgHABgCACQgDADgHANIgRAnIgmAAIATglQAOgcAQgDQgMgFgGgSQgFgOgEgDQgEgDgOAAIAAgXIAPgBQAMAAAIAFQAIAFAIAVQAGAQADAFQADAEAHAAIAAg3IAjAAIAAA3QAHAAADgEQAEgFAFgQQAHgUAJgGQAIgFANAAIAOABIAAAXQgOAAgEADQgEADgFAOQgGASgMAFQAQADAOAcIATAlg");
	this.shape_883.setTransform(583.925,304.825);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#002277").s().p("Ag5BdIgDgcQAJACAGAAQANAAAGgIQAGgHADgLIgziHIAlAAIAgBfIAfhfIAlAAIgvCBIgJAYIgJASQgEAGgFAEQgFAEgIACQgIACgKAAQgLAAgKgCg");
	this.shape_884.setTransform(567.375,307.575);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#002277").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_885.setTransform(552.425,304.85);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgKAFgJQAFgJAKgFQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWgBAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_886.setTransform(711.075,273.8);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#002277").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_887.setTransform(695.975,273.8);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#002277").s().p("AgxAvQgNgSAAgcQAAghASgTQARgSAbAAQAdAAARATQASAVgBAoIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAGQgHAUgPAKQgOALgXAAQgiAAgRgYgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_888.setTransform(673.5777,273.8);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#002277").s().p("AgRBDIAAhpIgrAAIAAgdIB5AAIAAAdIgrAAIAABpg");
	this.shape_889.setTransform(660.05,273.8);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#002277").s().p("AA2BEIgRgnQgEgLgEgDQgEgEgHgBIAAA6IgjAAIAAg6QgHABgCACQgDADgHANIgRAnIgmAAIATglQAOgcAQgDQgMgFgGgSQgFgOgEgDQgEgDgOAAIAAgXIAPgBQAMAAAIAFQAIAFAIAVQAGAQADAFQADAEAHAAIAAg3IAjAAIAAA3QAHAAADgEQAEgFAFgQQAHgUAJgGQAIgFANAAIAOABIAAAXQgOAAgEADQgEADgFAOQgGASgMAFQAQADAOAcIATAlg");
	this.shape_890.setTransform(609.225,273.775);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgKAFgJQAFgJAKgFQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWgBAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_891.setTransform(592.825,273.8);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#990000").s().p("AgUB0IAAgsIArAAIAAAsgAgUA5IAAgLQAAgTAGgNQAGgMATgPQATgPAEgFQAFgIAAgJQAAgNgKgJQgKgJgRAAQgQAAgLAJQgMAKgEATIgogFQACgcAWgTQAWgUAjAAQAmAAAWAUQAWAUAAAaQAAAPgIANQgIANgbAVQgOAMgDAHQgEAHABASg");
	this.shape_892.setTransform(666.925,187.625);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#990000").s().p("AAiBTIAAhpIhDBpIgqAAIAAilIAqAAIAABoIBChoIArAAIAAClg");
	this.shape_893.setTransform(647.225,190.9);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#990000").s().p("AAWBTIgWgwQgFgOgFgEQgGgFgJAAIAABHIgsAAIAAikIAsAAIAABDQALgBAFgFQAEgGAFgSQAJgZAKgGQAKgIAQABIASABIAAAcQgRAAgFADQgGAEgFARQgIAXgOAGQAVAEAOAfIACACIAZAug");
	this.shape_894.setTransform(630.5,190.85);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#990000").s().p("Ag+BJQgPgOAAgWQAAgOAHgLQAHgLAMgEQAMgGAXgFQAdgGAMgFIAAgEQAAgNgGgFQgGgFgRAAQgLAAgHAEQgGAFgEALIgogHQAGgYARgLQAQgMAhAAQAcAAAOAHQAPAHAGALQAFAKAAAdIAAAyQAAAWACALQACAKAGAMIgrAAIgFgNIgBgFQgMALgMAFQgMAGgPAAQgZAAgPgOgAAAAKQgTAEgFADQgJAHAAAJQAAAJAHAHQAHAHAKAAQALAAALgIQAIgGADgJQABgFAAgQIAAgJIgZAHg");
	this.shape_895.setTransform(612.525,190.925);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#990000").s().p("AAfBTIAAhGIg+AAIAABGIgrAAIAAilIArAAIAAA9IA+AAIAAg9IAsAAIAAClg");
	this.shape_896.setTransform(593.925,190.9);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#990000").s().p("AhGAoIAogHQAJAYAWAAQAMAAAIgGQAHgHAAgJQAAgJgIgGQgIgFgMAAIgHAAIAAgcQALAAAFgBQAFgCAFgGQAEgFAAgIQAAgHgFgHQgGgHgLAAQgIAAgHAEQgHAEgGAOIglgIQAGgWASgLQATgLAWAAQAeAAARAOQAQAOAAAUQAAANgHAJQgHAIgPAIQASAEAJAKQAJAKAAAPQAAAUgSAOQgSAOgiAAQg6AAgNgvg");
	this.shape_897.setTransform(575.875,190.925);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#990000").s().p("AgrBMQgUgKgLgUQgKgUAAgcQAAgVAKgVQALgUATgLQAVgLAXAAQAmAAAXAZQAZAYAAAlQAAAlgZAZQgYAZglAAQgWAAgVgLgAgcglQgLANAAAYQAAAYALAOQAMANAQAAQARAAAMgNQAMgOAAgYQAAgYgMgNQgMgNgRAAQgQAAgMANg");
	this.shape_898.setTransform(717.1,153.175);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#990000").s().p("AAfBTIAAhFIg+AAIAABFIgrAAIAAilIArAAIAAA9IA+AAIAAg9IAsAAIAAClg");
	this.shape_899.setTransform(697.575,153.15);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#990000").s().p("AA/BpIAAgsIh9AAIAAAsIgjAAIAAhQIASAAQAKgMAIgaQAIgaABhBICFAAIAACBIASAAIAABQgAglAZIBKAAIABhdIg1AAQgCBEgUAZg");
	this.shape_900.setTransform(677.35,155.35);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#990000").s().p("AAiBTIAAhpIhDBpIgqAAIAAilIAqAAIAABoIBChoIArAAIAAClg");
	this.shape_901.setTransform(657.775,153.15);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#990000").s().p("AhPBTIAAilIBfAAQAdAAAPALQAPAKAAAXQAAAOgIAJQgIALgNAEQASACAIAMQAIAMAAAOQAAATgOAMQgOAMgcAAgAgjA3IAjAAQARAAAJgEQAJgFAAgMQAAgMgKgFQgKgEgcAAIgWAAgAgjgNIAcAAQAUAAAJgFQAJgGAAgLQAAgKgIgEQgJgFgVAAIgcAAg");
	this.shape_902.setTransform(638.675,153.15);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#990000").s().p("Ag8A6QgRgWAAgjQAAgoAWgXQAWgYAhAAQAkAAAVAZQAVAYgBAxIhtAAQABAUAKALQAKALAOAAQALAAAHgGQAHgGADgMIAsAHQgIAYgSANQgTANgbAAQgqAAgVgdgAgWgqQgJALAAASIBBAAQgBgTgJgKQgJgKgOAAQgNAAgKAKg");
	this.shape_903.setTransform(610.3522,153.175);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#990000").s().p("AhuBTIAAilIAnAAIAACBIA0AAIAAiBIAnAAIAACBIAzAAIAAiBIApAAIAAClg");
	this.shape_904.setTransform(588.3,153.15);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#990000").s().p("AAdBTIAAhCQgZAGgMABQgVAAgPgJQgRgIgGgNQgFgNAAgXIAAgoIAsAAIAAAoQAAAOACAGQADAHAHAFQAJAEAKAAQAMAAAOgFIAAhHIAsAAIAAClg");
	this.shape_905.setTransform(565.5,153.15);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#990000").s().p("AhGByIgEgiQAKACAJAAQAPAAAIgJQAHgJAEgOIhAimIAvAAIAnB1IAnh1IAtAAIg6CfIgLAdQgFAOgGAIQgFAIgFAFQgIAEgJADQgLADgMAAQgNAAgMgDg");
	this.shape_906.setTransform(547.3,156.525);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#990000").s().p("AhYBSIAAghIAIAAIAKABQAJAAACgGQACgGAAgbIAAhfICSAAIAACmIgsAAIAAiCIg7AAIAABKQABAcgIALQgGAMgIAEQgIADgRAAQgLAAgRgCg");
	this.shape_907.setTransform(527.5,153.3);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#990000").s().p("Ag8A6QgRgWAAgjQAAgoAWgXQAWgYAhAAQAkAAAVAZQAVAYgBAxIhtAAQABAUAKALQAKALAOAAQALAAAHgGQAHgGADgMIAsAHQgIAYgSANQgTANgbAAQgqAAgVgdgAgWgqQgJALAAASIBBAAQgBgTgJgKQgJgKgOAAQgNAAgKAKg");
	this.shape_908.setTransform(731.6522,115.425);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#990000").s().p("AAfBTIAAhGIg+AAIAABGIgrAAIAAilIArAAIAAA9IA+AAIAAg9IAsAAIAAClg");
	this.shape_909.setTransform(713.225,115.4);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#990000").s().p("AgrBMQgUgKgLgUQgLgUAAgcQAAgVALgVQALgUATgLQAVgLAXAAQAlAAAZAZQAYAYgBAlQABAlgYAZQgZAZglAAQgVAAgWgLgAgcglQgMANAAAYQAAAYAMAOQAMANAQAAQARAAAMgNQALgOAAgYQAAgYgLgNQgMgNgRAAQgQAAgMANg");
	this.shape_910.setTransform(693.85,115.425);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#990000").s().p("AgUCSIAAhSQgKALgLAGQgLAGgMAAQgbAAgRgZQgSgZAAglQAAglAUgYQAUgZAYAAQAMAAAKAHQALAFAJAMIAAhTIAqAAIAABUQAIgMALgGQALgHAOAAQAbAAARAaQARAaAAAjQAAAkgTAZQgTAZgaAAQgLAAgLgGQgKgGgJgLIAABSgAAegkQgJAQAAAWQABAYAIANQAKAPAMAAQAMAAAJgQQAJgQAAgVQAAgVgIgQQgIgQgOAAQgOAAgIAQgAhHgmQgJAPAAAXQAAAYAIAOQAIAPANAAQANAAAJgPQAJgOAAgYQAAgcgKgMQgJgMgLAAQgMAAgJAOg");
	this.shape_911.setTransform(670,115.4);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#990000").s().p("AA7BTIAAhsIgpBsIgkAAIgnhsIAABsIgmAAIAAilIA3AAIAoByIAqhyIA2AAIAAClg");
	this.shape_912.setTransform(635.425,115.4);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#990000").s().p("AgrBMQgUgKgLgUQgLgUAAgcQAAgVALgVQALgUATgLQAVgLAXAAQAlAAAZAZQAYAYgBAlQABAlgYAZQgZAZglAAQgVAAgWgLgAgcglQgMANAAAYQAAAYAMAOQAMANAQAAQARAAAMgNQAMgOgBgYQABgYgMgNQgMgNgRAAQgQAAgMANg");
	this.shape_913.setTransform(613.75,115.425);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#990000").s().p("AAWBTIgVgwQgHgOgEgEQgGgFgJABIAABGIgsAAIAAilIAsAAIAABFQALgCAFgFQAEgGAGgSQAIgZAKgGQAKgIAQABIASAAIAAAdQgSAAgFAEQgFADgFARQgIAXgOAFQAVAFAOAeIACADIAZAug");
	this.shape_914.setTransform(597,115.35);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#990000").s().p("Ag+BJQgPgOAAgWQAAgOAHgLQAHgLAMgEQAMgGAXgFQAdgGAMgFIAAgEQAAgNgGgFQgGgFgRAAQgLAAgHAEQgGAFgEALIgogHQAGgYARgLQAQgMAhAAQAcAAAOAHQAPAHAGALQAFAKAAAdIAAAyQAAAWACALQACAKAGAMIgrAAIgFgNIgBgFQgMALgMAFQgMAGgPAAQgZAAgPgOgAAAAKQgTAEgFADQgJAHAAAJQAAAJAHAHQAHAHAKAAQALAAALgIQAIgGADgJQABgFAAgQIAAgJIgZAHg");
	this.shape_915.setTransform(579.025,115.425);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#990000").s().p("AAWBTIgWgwQgGgOgFgEQgEgFgKABIAABGIgrAAIAAilIArAAIAABFQALgCAEgFQAFgGAFgSQAJgZAKgGQAKgIAQABIARAAIAAAdQgRAAgEAEQgGADgFARQgHAXgPAFQAUAFAPAeIACADIAYAug");
	this.shape_916.setTransform(563.2,115.35);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#990000").s().p("Ag+BJQgPgOAAgWQAAgOAHgLQAHgLAMgEQAMgGAXgFQAdgGAMgFIAAgEQAAgNgGgFQgGgFgRAAQgLAAgHAEQgGAFgEALIgogHQAGgYARgLQAQgMAhAAQAcAAAOAHQAPAHAGALQAFAKAAAdIAAAyQAAAWACALQACAKAGAMIgrAAIgFgNIgBgFQgMALgMAFQgMAGgPAAQgZAAgPgOgAAAAKQgTAEgFADQgJAHAAAJQAAAJAHAHQAHAHAKAAQALAAALgIQAIgGADgJQABgFAAgQIAAgJIgZAHg");
	this.shape_917.setTransform(536.325,115.425);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#990000").s().p("AAuByIAAhkIhaAAIAABkIgvAAIAAjkIAvAAIAABaIBaAAIAAhaIAuAAIAADkg");
	this.shape_918.setTransform(515.8,112.25);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#990000").s().p("AgVAWIAAgrIArAAIAAArg");
	this.shape_919.setTransform(779.3,83.75);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#990000").s().p("Ag3BTIAAilIBvAAIAAAkIhDAAIAACBg");
	this.shape_920.setTransform(769.2,77.65);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#990000").s().p("AhGByIgEgiQAKACAJAAQAPAAAIgJQAHgJAEgOIhAimIAvAAIAnB1IAnh1IAuAAIg8CfIgKAdQgGAOgFAIQgFAIgFAFQgIAEgJADQgLADgMAAQgNAAgMgDg");
	this.shape_921.setTransform(752.4,81.025);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#990000").s().p("AhQB0IAAjkIApAAIAAAZQAIgNAOgIQAOgHAPAAQAdAAAUAWQAUAXAAAoQAAApgUAXQgUAXgeAAQgMAAgMgFQgKgGgNgNIAABTgAgZhEQgMAMABAYQAAAcALANQALANAPAAQAPAAALgMQAKgLgBgcQAAgagKgNQgKgNgQAAQgPAAgKANg");
	this.shape_922.setTransform(734.35,80.625);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#990000").s().p("AAWBTIgWgvQgGgPgFgEQgEgEgKgBIAABHIgrAAIAAikIArAAIAABDQALgBAEgGQAFgFAFgSQAJgZAKgHQAKgGAQgBIARACIAAAdQgRAAgEACQgFAEgGARQgHAXgPAGQAUAEAPAfIACADIAYAtg");
	this.shape_923.setTransform(717.2,77.6);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#990000").s().p("Ag+BJQgPgOAAgWQAAgOAHgLQAHgLAMgEQAMgGAXgFQAdgGAMgFIAAgEQAAgNgGgFQgGgFgRAAQgLAAgHAEQgGAFgEALIgogHQAGgYARgLQAQgMAhAAQAcAAAOAHQAPAHAGALQAFAKAAAdIAAAyQAAAWACALQACAKAGAMIgrAAIgFgNIgBgFQgMALgMAFQgMAGgPAAQgZAAgPgOgAAAAKQgTAEgFADQgJAHAAAJQAAAJAHAHQAHAHAKAAQALAAALgIQAIgGADgJQABgFAAgQIAAgJIgZAHg");
	this.shape_924.setTransform(690.325,77.675);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#990000").s().p("AAfBTIAAhFIg+AAIAABFIgrAAIAAilIArAAIAAA9IA+AAIAAg9IAsAAIAAClg");
	this.shape_925.setTransform(671.725,77.65);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#990000").s().p("Ag8A6QgRgWAAgjQAAgoAWgXQAWgYAhAAQAkAAAVAZQAVAYgBAxIhtAAQABAUAKALQAKALAOAAQALAAAHgGQAHgGADgMIAsAHQgIAYgSANQgTANgbAAQgqAAgVgdgAgWgqQgJALAAASIBBAAQgBgTgJgKQgJgKgOAAQgNAAgKAKg");
	this.shape_926.setTransform(644.1022,77.675);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#990000").s().p("AgVBTIAAiBIg1AAIAAgkICVAAIAAAkIg1AAIAACBg");
	this.shape_927.setTransform(627.55,77.65);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#990000").s().p("AAiBTIAAhpIhDBpIgqAAIAAilIAqAAIAABoIBChoIArAAIAAClg");
	this.shape_928.setTransform(609.875,77.65);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#990000").s().p("AhQB0IAAjkIApAAIAAAZQAIgNANgIQAOgHAQAAQAdAAAUAWQAUAXAAAoQAAApgUAXQgVAXgcAAQgNAAgLgFQgLgGgNgNIAABTgAgahEQgKAMgBAYQAAAcAMANQALANAPAAQAPAAAKgMQAKgLAAgcQABgagLgNQgLgNgPAAQgPAAgLANg");
	this.shape_929.setTransform(590.75,80.625);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#990000").s().p("AgVBTIAAiBIg1AAIAAgkICVAAIAAAkIg1AAIAACBg");
	this.shape_930.setTransform(572.7,77.65);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#990000").s().p("AgrBMQgUgKgLgUQgLgUAAgcQAAgVALgVQALgUAUgLQATgLAYAAQAlAAAZAZQAXAYAAAlQAAAlgXAZQgZAZglAAQgVAAgWgLgAgcglQgMANAAAYQAAAYAMAOQAMANAQAAQARAAAMgNQALgOAAgYQAAgYgLgNQgMgNgRAAQgQAAgMANg");
	this.shape_931.setTransform(555.15,77.675);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#990000").s().p("AA7BTIAAhsIgpBsIgkAAIgnhsIAABsIgmAAIAAilIA3AAIAoBzIAqhzIA2AAIAAClg");
	this.shape_932.setTransform(533.625,77.65);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#990000").s().p("Ag4BAQgVgXAAgpQAAgoAVgXQAWgXAkAAQAeAAASANQASANAIAbIgrAIQgDgNgHgHQgIgGgMAAQgQAAgJALQgKALAAAbQAAAcAKANQAKAMAPAAQANAAAIgHQAIgHADgSIArAIQgHAdgTAPQgTAQggAAQgjAAgWgXg");
	this.shape_933.setTransform(513.025,77.675);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#990000").s().p("AgrBMQgUgKgLgUQgLgUABgcQgBgVALgVQALgUATgLQAVgLAXAAQAlAAAZAZQAYAYAAAlQAAAlgYAZQgZAZglAAQgVAAgWgLgAgcglQgMANABAYQgBAYAMAOQAMANAQAAQARAAAMgNQAMgOAAgYQAAgYgMgNQgMgNgRAAQgQAAgMANg");
	this.shape_934.setTransform(494.15,77.675);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#990000").s().p("AAtByIAAi9IhZAAIAAC9IguAAIAAjjIC1AAIAADjg");
	this.shape_935.setTransform(472.8,74.5);

	this.instance_7 = new lib.Ш();
	this.instance_7.setTransform(305.2,371.2,0.5534,0.5546,0,90,-90,26.9,28.8);

	this.instance_8 = new lib.Ш();
	this.instance_8.setTransform(357.3,370.85,0.6107,0.6666,0,180,0,26.3,28.9);

	this.instance_9 = new lib.Ш();
	this.instance_9.setTransform(407.85,371.9,0.5534,0.5546,0,-90,90,26.9,28.8);

	this.instance_10 = new lib.Ш();
	this.instance_10.setTransform(458.5,372.3,0.6107,0.6666,0,0,180,26.3,28.9);

	this.instance_11 = new lib.Ш();
	this.instance_11.setTransform(314.9,308.65,0.8588,0.9374,0,180,0,26.3,28.9);

	this.instance_12 = new lib.Ш();
	this.instance_12.setTransform(383.45,311,0.7919,0.9722,0,-90,90,26.4,28.9);

	this.instance_13 = new lib.Ш();
	this.instance_13.setTransform(457.15,311.7,0.8588,0.9374,0,0,180,26.3,28.9);

	this.instance_14 = new lib.Ш();
	this.instance_14.setTransform(319.45,240.7,0.9542,1.1354,0,-90,90,26.3,28.9);

	this.instance_15 = new lib.Ш();
	this.instance_15.setTransform(413.7,241.7,1.0496,1.1458,0,0,180,26.3,28.9);

	this.instance_16 = new lib.Ш();
	this.instance_16.setTransform(227.45,371.2,0.5534,0.5546,-90,0,0,26.9,28.8);

	this.instance_17 = new lib.Ш();
	this.instance_17.setTransform(175.35,370.85,0.6107,0.6666,180,0,0,26.3,28.9);

	this.instance_18 = new lib.Ш();
	this.instance_18.setTransform(124.8,371.9,0.5534,0.5546,90,0,0,26.9,28.8);

	this.instance_19 = new lib.Ш();
	this.instance_19.setTransform(74.15,372.3,0.6107,0.6666,0,0,0,26.3,28.9);

	this.instance_20 = new lib.Ш();
	this.instance_20.setTransform(217.75,308.65,0.8588,0.9374,180,0,0,26.3,28.9);

	this.instance_21 = new lib.Ш();
	this.instance_21.setTransform(149.2,311,0.7919,0.9722,90,0,0,26.4,28.9);

	this.instance_22 = new lib.Ш();
	this.instance_22.setTransform(75.5,311.7,0.8588,0.9374,0,0,0,26.3,28.9);

	this.instance_23 = new lib.Ш();
	this.instance_23.setTransform(213.2,240.7,0.9542,1.1354,90,0,0,26.3,28.9);

	this.instance_24 = new lib.Ш();
	this.instance_24.setTransform(118.95,241.7,1.0496,1.1458,0,0,0,26.3,28.9);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f().s("#000000").ss(1,1,1).p("EAAFgnDQFOABEvBMQJ4ChHuHuQLcLcAAQLQAAQMrcLcQrcLcwMAAQwLAArcrcQmDmDi3nYQg9iggniqQg+kUAAkvQAAkuA+kUQAniqA9igQC3nYGDmDQHunuJ4ihQExhNFQAAQACAAADAAMgAFBOH");
	this.shape_936.setTransform(265,300);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#00AA00").s().p("AoIboQmDmDi2nYQg+iggmiqQg+kUgBkvQABktA+kWQAmipA+igQC2nYGDmDQHvnuJ2igQEyhOFRAAIAEAAMgAEBOHQwMAArcrcg");
	this.shape_937.setTransform(140.25,300);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FF0000").s().p("EgTcgnDQFOABEvBNQJ2CgHvHuQLcLcAAQLQAAQMrcLcQrcLcwLAAg");
	this.shape_938.setTransform(390,300);

	this.BtnColorOS = new lib.КнопкаBtnNext1небесная();
	this.BtnColorOS.name = "BtnColorOS";
	this.BtnColorOS.setTransform(400,545);
	new cjs.ButtonHelper(this.BtnColorOS, 0, 1, 2);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#990000").s().p("ABJBVIAAiqIAtAAIAACqgAh1BVIAAiqIAtAAIAABHIAtAAQAbAAAOAFQAOADAJALQAKAOAAARQAAAZgRAMQgRAMghAAgAhIA5IArAAQAQAAAHgFQAGgGAAgLQAAgMgIgFQgKgFgZAAIgdAAg");
	this.shape_939.setTransform(470.4,203.25);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#990000").s().p("AhSBVIAAiqIBjAAQAeAAAPAMQAPAKAAAXQAAAPgIAKQgJAKgMAEQARAEAJALQAJAMAAAOQAAAVgPAMQgPAMgcAAgAgkA4IAkAAQASAAAJgEQAIgFABgMQgBgMgJgFQgKgFgdAAIgXAAgAgkgOIAdAAQAUABAJgGQAKgFAAgLQAAgMgJgEQgJgFgVABIgdAAg");
	this.shape_940.setTransform(446.6,203.25);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#990000").s().p("AhSB4IAAjrIApAAIAAAZQAJgNAOgIQAOgIAQAAQAeAAAVAXQAUAYAAApQAAAqgUAYQgWAYgeAAQgMAAgMgGQgLgFgNgOIAABWgAgbhGQgLANAAAYQAAAdAMANQALAOAQAAQAQAAAKgMQAKgMAAgdQAAgbgKgNQgMgNgPAAQgQAAgLANg");
	this.shape_941.setTransform(408,206.3);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#990000").s().p("AAfBVIAAiFIg9AAIAACFIgtAAIAAiqICXAAIAACqg");
	this.shape_942.setTransform(387.25,203.25);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#990000").s().p("AgrBPQgWgLgLgVQgLgUAAgcQAAgXALgVQALgVAVgMQATgLAZABQAmgBAaAaQAZAZAAAmQAAAngZAZQgaAZgmABQgXgBgUgKgAgdgmQgMANAAAZQAAAaAMANQANAOAQAAQARAAANgOQALgNAAgaQAAgYgLgOQgNgOgRAAQgQAAgNAOg");
	this.shape_943.setTransform(303.5,203.25);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#990000").s().p("AhSB4IAAjrIApAAIAAAZQAJgNAOgIQAOgIAQAAQAeAAAVAXQAUAYAAApQAAAqgUAYQgWAYgeAAQgMAAgMgGQgLgFgNgOIAABWgAgbhGQgLANAAAYQAAAdAMANQALAOAQAAQAQAAAKgMQAKgMAAgdQAAgbgKgNQgMgNgPAAQgQAAgLANg");
	this.shape_944.setTransform(283.8,206.3);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#990000").s().p("Ag5BuQgWgMgLgiIAsgPQAGAVAMAHQALAGAQAAQAWAAAKgJQALgLAAgMQAAgPgMgIQgMgKgWABIgLAAIAAgjIAFAAQAVAAAMgJQALgKAAgRQAAgNgJgJQgKgIgQgBQgeAAgIAeIgugKQAPg6BFAAQApAAAVASQAWATgBAYQABARgKANQgKAOgTAKQAXAHAMAQQAMAOAAAWQAAAegXAUQgXATgtAAQglAAgUgMg");
	this.shape_945.setTransform(227.5,200);

	this.BtnColorOSEq = new lib.norm();
	this.BtnColorOSEq.name = "BtnColorOSEq";
	this.BtnColorOSEq.setTransform(609.9,517.8,0.8886,0.8889);
	new cjs.ButtonHelper(this.BtnColorOSEq, 0, 1, 2);

	this.BtnColorOSGreen = new lib.green();
	this.BtnColorOSGreen.name = "BtnColorOSGreen";
	this.BtnColorOSGreen.setTransform(488.3,520,0.8887,0.8889);
	new cjs.ButtonHelper(this.BtnColorOSGreen, 0, 1, 2);

	this.BtnColorOSRed = new lib.red();
	this.BtnColorOSRed.name = "BtnColorOSRed";
	this.BtnColorOSRed.setTransform(731.9,520,0.8887,0.8889);
	new cjs.ButtonHelper(this.BtnColorOSRed, 0, 1, 2);

	this.BtnAmslerOD = new lib.КнопкаBtnNext1небесная();
	this.BtnAmslerOD.name = "BtnAmslerOD";
	this.BtnAmslerOD.setTransform(400,545);
	new cjs.ButtonHelper(this.BtnAmslerOD, 0, 1, 2);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#002277").s().p("AgjBFQgOgNgCgUIAdgDQABALAGAGQAGAFAJAAQAIAAAHgGQAGgIAAgLQAAgMgGgGQgGgIgJABQgFgBgIADIAEgYQALABAGgGQAHgGAAgJQAAgIgFgEQgFgGgHAAQgHABgGAFQgFAGgBAJIgcgEQADgOAGgJQAFgJALgEQAKgFANgBQAWAAANAPQALALAAAPQAAAVgXANQAOACAIAJQAIALAAAOQAAAUgPAPQgPAOgWAAQgVABgOgMg");
	this.shape_946.setTransform(773.925,24.1);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#990000").s().p("AhJAqIAqgIQAKAZAWAAQAMAAAIgGQAIgIAAgJQAAgKgIgFQgIgGgNAAIgHAAIAAgcQALAAAFgCQAFgBAFgGQAFgGAAgIQAAgHgGgIQgGgGgMAAQgIAAgHADQgHAEgGAPIgmgJQAGgWATgLQATgMAXAAQAfABARAOQARAOAAAWQAAANgHAIQgIAJgPAIQATAEAJALQAKAKAAAQQAAATgTAPQgTAOgjAAQg8AAgOgvg");
	this.shape_947.setTransform(564.575,233.25);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#990000").s().p("AhABLQgPgOAAgWQAAgOAGgMQAHgMANgEQAMgHAYgEQAfgGAMgFIAAgEQAAgNgHgGQgGgGgRAAQgMAAgHAFQgHAFgEALIgpgHQAHgZARgLQARgMAhgBQAeAAAOAIQAPAHAGALQAGALAAAeIAAAzQAAAXACAKQACAMAGAMIgtAAIgEgOIgCgFQgLALgNAFQgNAHgPgBQgaAAgPgOgAgBAKQgTAEgFAEQgJAHAAAJQAAAJAHAIQAHAGALABQALgBALgHQAJgHACgJQACgFAAgQIAAgJIgbAGg");
	this.shape_948.setTransform(547.675,233.25);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#990000").s().p("AhbBUIAAgiIAIABIALABQAJgBACgFQACgHAAgbIAAhiICXAAIAACqIgtAAIAAiGIg9AAIAABNQAAAdgHALQgHAMgIAEQgIAEgSAAQgLAAgSgDg");
	this.shape_949.setTransform(527.075,233.4);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#990000").s().p("ABJBWIAAiqIAtAAIAACqgAh1BWIAAiqIAuAAIAABHIAtAAQAaAAANADQAOAEAKAMQAKANAAAQQAAAagRAMQgRANghAAgAhHA5IAqAAQAQAAAHgFQAGgGABgLQAAgMgJgFQgJgFgaABIgcAAg");
	this.shape_950.setTransform(460.3,233.25);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#990000").s().p("AhSBWIAAiqIBiAAQAfAAAPALQAPAKAAAXQAAAOgIALQgJALgMADQASAEAJAMQAIAMAAAOQAAATgPANQgOANgdAAgAgkA4IAjAAQATABAIgFQAJgFAAgMQAAgMgKgFQgJgFgdAAIgXAAgAgkgNIAdAAQAUAAAKgGQAJgFAAgMQAAgLgJgEQgIgEgWAAIgdAAg");
	this.shape_951.setTransform(436.5,233.25);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#990000").s().p("Ag+A8QgRgXAAgkQAAgpAWgYQAWgZAiAAQAlABAWAZQAXAZgBAzIhxAAQABAUAKALQALALAOAAQALAAAHgFQAHgGAEgNIAtAHQgJAagSANQgTANgcgBQgsABgVgegAgXgrQgJALAAATIBDAAQgBgVgKgKQgJgKgOAAQgOAAgKALg");
	this.shape_952.setTransform(416.5021,233.25);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#990000").s().p("AhbBUIAAgiIAIABIALABQAJgBACgFQACgHAAgbIAAhiICXAAIAACqIgtAAIAAiGIg9AAIAABNQAAAdgHALQgHAMgIAEQgIAEgSAAQgLAAgSgDg");
	this.shape_953.setTransform(396.075,233.4);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#990000").s().p("Ag+A8QgRgXAAgkQAAgpAWgYQAWgZAiAAQAlABAWAZQAXAZgBAzIhxAAQABAUAKALQALALAOAAQALAAAHgFQAHgGAEgNIAtAHQgJAagSANQgTANgcgBQgsABgVgegAgXgrQgJALAAATIBDAAQgBgVgKgKQgJgKgOAAQgOAAgKALg");
	this.shape_954.setTransform(368.0521,233.25);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#990000").s().p("AgsBPQgVgLgLgVQgMgUAAgcQAAgXAMgVQALgVAUgMQAVgKAYgBQAmABAZAZQAZAZAAAmQAAAngZAZQgZAagmgBQgWABgWgLgAgdgmQgMANAAAZQAAAaAMANQAMAOARAAQARAAANgOQAMgNAAgaQAAgZgMgNQgNgOgRAAQgRAAgMAOg");
	this.shape_955.setTransform(312.55,233.25);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#990000").s().p("AhTB4IAAjrIArAAIAAAZQAIgNAOgIQAOgIAQAAQAeAAAUAXQAWAXAAArQAAAqgWAXQgUAYgeAAQgNAAgMgGQgMgGgNgNIAABWgAgbhHQgLANAAAZQAAAdALANQAMAOAPAAQARAAAKgNQAKgMAAgcQAAgbgLgNQgKgNgQAAQgQAAgLAMg");
	this.shape_956.setTransform(292.85,236.3);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#990000").s().p("AAXBWIgXgxQgGgPgFgEQgFgFgKAAIAABJIgtAAIAAiqIAtAAIAABGQAMgCAEgFQAFgGAGgTQAIgZALgHQAKgHARAAIARAAIABAeQgSAAgFAEQgFAEgGARQgIAXgPAGQAWAFAOAgIACADIAaAvg");
	this.shape_957.setTransform(275.125,233.2);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#990000").s().p("AhABLQgPgOAAgWQAAgOAGgMQAHgMANgEQAMgHAYgEQAfgGAMgFIAAgEQAAgNgHgGQgGgGgRAAQgMAAgHAFQgHAFgEALIgpgHQAHgZARgLQARgMAhgBQAeAAAOAIQAPAHAGALQAGALAAAeIAAAzQAAAXACAKQACAMAGAMIgtAAIgEgOIgCgFQgLALgNAFQgNAHgPgBQgaAAgPgOgAgBAKQgTAEgFAEQgJAHAAAJQAAAJAHAIQAHAGALABQALgBALgHQAJgHACgJQACgFAAgQIAAgJIgbAGg");
	this.shape_958.setTransform(256.625,233.25);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#990000").s().p("Ag6BuQgVgMgLgjIAsgOQAHAWALAGQALAGARAAQAVAAAKgKQALgKgBgMQABgOgMgKQgMgJgXAAIgKAAIAAgiIAGAAQAUAAAMgKQAMgKAAgQQAAgNgKgIQgKgKgQABQgegBgJAeIgugKQAPg6BHAAQAoAAAWASQAUASABAZQAAARgKAOQgKANgTAKQAXAIAMAPQAMAOAAAWQAAAfgXATQgXATgtAAQgkAAgWgMg");
	this.shape_959.setTransform(236.55,230);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#002277").s().p("AhABLQgPgOAAgWQAAgOAGgMQAHgMANgEQAMgHAYgEQAfgGAMgFIAAgEQAAgNgHgGQgGgGgRAAQgMAAgHAFQgHAFgEALIgpgHQAHgZARgLQARgMAhgBQAeAAAOAIQAPAHAGALQAGALAAAeIAAAzQAAAXACAKQACAMAGAMIgtAAIgEgOIgCgFQgLALgNAFQgNAHgPgBQgaAAgPgOgAgBAKQgTAEgFAEQgJAHAAAJQAAAJAHAIQAHAGALABQALgBALgHQAJgGACgKQACgFAAgQIAAgJIgbAGg");
	this.shape_960.setTransform(627.225,162.15);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#002277").s().p("AhSB4IAAjrIApAAIAAAZQAJgNAOgIQAOgIAQAAQAeAAAVAXQAVAXgBArQABAqgVAXQgVAYgfAAQgNAAgLgGQgLgGgNgNIAABWgAgbhHQgLANAAAZQAAAdAMANQALAOAPAAQAQAAALgNQAKgMAAgcQAAgbgLgNQgLgNgPAAQgQAAgLAMg");
	this.shape_961.setTransform(608.45,165.2);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#002277").s().p("AgsBPQgVgLgLgVQgMgUAAgcQAAgXAMgVQALgWAUgLQAVgKAYgBQAnABAYAZQAZAZABAmQgBAngZAZQgZAagmgBQgWABgWgLgAgdgmQgMANAAAZQAAAaAMANQAMANARAAQARAAANgNQAMgOAAgZQAAgZgMgNQgNgOgRAAQgRAAgMAOg");
	this.shape_962.setTransform(587.85,162.15);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#002277").s().p("AgWBWIAAiGIg2AAIAAgkICZAAIAAAkIg2AAIAACGg");
	this.shape_963.setTransform(569.625,162.15);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#002277").s().p("AAjBWIAAhtIhFBtIgsAAIAAiqIAsAAIAABqIBEhqIAtAAIAACqg");
	this.shape_964.setTransform(551.375,162.15);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#002277").s().p("AAgBWIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA+IBAAAIAAg+IAuAAIAACqg");
	this.shape_965.setTransform(531.275,162.15);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#002277").s().p("AgrBPQgWgLgLgVQgLgUAAgcQAAgXALgVQALgWAVgLQATgKAZgBQAnABAZAZQAYAZAAAmQAAAngYAZQgaAagmgBQgXABgUgLgAgdgmQgMANAAAZQAAAaAMANQANANAQAAQASAAAMgNQALgOAAgZQAAgZgLgNQgMgOgSAAQgQAAgNAOg");
	this.shape_966.setTransform(511.3,162.15);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#002277").s().p("AgWBWIAAiGIg2AAIAAgkICZAAIAAAkIg2AAIAACGg");
	this.shape_967.setTransform(459.525,162.15);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#002277").s().p("AgrBPQgWgLgLgVQgLgUAAgcQAAgXALgVQALgWAUgLQAVgKAYgBQAnABAZAZQAYAZAAAmQAAAngYAZQgaAagmgBQgXABgUgLgAgdgmQgMANAAAZQAAAaAMANQANANAQAAQARAAANgNQALgOAAgZQAAgZgLgNQgNgOgRAAQgQAAgNAOg");
	this.shape_968.setTransform(441.45,162.15);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#002277").s().p("AhSBWIAAiqIBiAAQAeAAAQALQAPAKAAAXQAAAOgIALQgJALgMADQASAEAJAMQAIAMAAAOQAAATgPANQgOANgdAAgAgkA4IAjAAQATABAIgFQAJgFAAgMQAAgMgKgFQgJgFgdAAIgXAAgAgkgNIAdAAQAUAAAKgGQAJgFAAgMQAAgLgJgEQgIgEgWAAIgdAAg");
	this.shape_969.setTransform(412.55,162.15);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#002277").s().p("AgsBPQgVgLgLgVQgMgUABgcQgBgXAMgVQALgWAUgLQAVgKAYgBQAnABAYAZQAZAZAAAmQAAAngZAZQgZAagmgBQgXABgVgLgAgdgmQgMANAAAZQAAAaAMANQAMANARAAQARAAANgNQAMgOgBgZQABgZgMgNQgNgOgRAAQgRAAgMAOg");
	this.shape_970.setTransform(391.85,162.15);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#002277").s().p("AhTB4IAAjrIArAAIAAAZQAIgNAOgIQAOgIAQAAQAeAAAUAXQAWAXAAArQAAAqgWAXQgUAYgeAAQgNAAgMgGQgLgGgOgNIAABWgAgbhHQgLANAAAZQAAAdALANQAMAOAQAAQAPAAALgNQAKgMAAgcQAAgbgLgNQgKgNgQAAQgQAAgLAMg");
	this.shape_971.setTransform(372.15,165.2);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#002277").s().p("AgWBWIAAiGIg2AAIAAgkICZAAIAAAkIg2AAIAACGg");
	this.shape_972.setTransform(353.475,162.15);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#002277").s().p("Ag+A8QgRgXAAgkQAAgpAWgYQAWgZAiAAQAlABAWAZQAXAZgBAzIhxAAQABAUAKALQALALAOAAQALAAAHgFQAHgGAEgNIAtAHQgJAagSANQgTANgcgBQgsABgVgegAgXgrQgJALAAATIBDAAQgBgVgKgKQgJgKgOAAQgOAAgKALg");
	this.shape_973.setTransform(336.1021,162.15);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#002277").s().p("AA8BWIAAhwIgqBwIglAAIgohwIAABwIgnAAIAAiqIA4AAIAqB2IArh2IA4AAIAACqg");
	this.shape_974.setTransform(315.025,162.15);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#002277").s().p("AAjBWIAAhtIhFBtIgsAAIAAiqIAsAAIAABqIBEhqIAtAAIAACqg");
	this.shape_975.setTransform(292.475,162.15);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#002277").s().p("AgWBWIAAiGIg2AAIAAgkICZAAIAAAkIg2AAIAACGg");
	this.shape_976.setTransform(274.275,162.15);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#002277").s().p("AAgBWIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA+IBAAAIAAg+IAuAAIAACqg");
	this.shape_977.setTransform(256.225,162.15);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#002277").s().p("AhABLQgPgOAAgWQAAgOAGgMQAHgMANgEQAMgHAYgEQAfgGAMgFIAAgEQAAgNgHgGQgGgGgRAAQgMAAgHAFQgHAFgEALIgpgHQAHgZARgLQARgMAhgBQAeAAAOAIQAPAHAGALQAGALAAAeIAAAzQAAAXACAKQACAMAGAMIgtAAIgEgOIgCgFQgLALgNAFQgNAHgPgBQgaAAgPgOgAgBAKQgTAEgFAEQgJAHAAAJQAAAJAHAIQAHAGALABQALgBALgHQAJgGACgKQACgFAAgQIAAgJIgbAGg");
	this.shape_978.setTransform(237.125,162.15);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#002277").s().p("Ag5BBQgXgXAAgqQAAgpAXgYQAWgXAlgBQAgAAASAOQATAOAIAbIgtAIQgCgNgIgHQgIgHgNAAQgQAAgKAMQgKALAAAcQAAAeAKAMQAKAMARAAQANAAAIgHQAIgHADgSIAtAHQgHAfgUAPQgTARghgBQglAAgWgYg");
	this.shape_979.setTransform(218.975,162.15);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#002277").s().p("Ag3BeQgVgaAAhEQAAhCAXgeQATgYAiAAQAiAAATAZQAYAdAABCQAABDgYAdQgTAYgiAAQgiABgVgbgAgOhNQgGAGgEANQgFARAAApQAAApAFAQQAEAPAGAGQAHAFAHAAQAIAAAGgFQAHgGADgNQAFgSAAgpQAAgpgEgPQgEgPgHgGQgGgFgIAAQgHAAgHAFg");
	this.shape_980.setTransform(191.125,159.05);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#002277").s().p("Ag1BmQgVgTgDgdIArgGQACARAKAJQAJAJANAAQANAAAKgKQAJgMAAgRQAAgSgJgJQgJgLgNAAQgJAAgMAEIAGgkQARAAAKgIQAKgIAAgPQgBgLgHgIQgHgGgLgBQgMABgHAHQgJAJgBAPIgqgHQAEgWAJgMQAJgNAPgIQAQgGATgBQAhAAAUAWQAQARABAWQAAAfgjATQAVAEANAOQAMAPgBAWQAAAegWAXQgXAVghAAQggAAgVgSg");
	this.shape_981.setTransform(172.8,159.05);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#002277").s().p("AAjBVIAAhsIhFBsIgsAAIAAipIAsAAIAABqIBEhqIAtAAIAACpg");
	this.shape_982.setTransform(573.225,123.3);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#002277").s().p("AAjBVIAAhsIhFBsIgsAAIAAipIAsAAIAABqIBEhqIAtAAIAACpg");
	this.shape_983.setTransform(552.925,123.3);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#002277").s().p("AAgBVIAAhHIhAAAIAABHIgtAAIAAipIAtAAIAAA+IBAAAIAAg+IAuAAIAACpg");
	this.shape_984.setTransform(532.825,123.3);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#002277").s().p("AApBVIAAhHIgFAAQgOAAgHAFQgHADgIAMIgCAEIgeAvIg1AAIAhgxQAOgWALgCQgTgBgMgNQgMgOAAgUQAAgQAIgNQAIgLANgFQANgDAZAAIBZAAIAACpgAgQgyQgHAEAAANQAAALAIAGQAIAEASAAIAeAAIAAgsIghAAQgRAAgHAGg");
	this.shape_985.setTransform(512.075,123.3);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#002277").s().p("AgsBOQgVgKgLgUQgMgVAAgdQAAgWAMgVQALgWAVgKQAUgLAYAAQAmAAAZAZQAaAZAAAmQAAAmgaAaQgZAZgmAAQgWAAgWgLgAgdgmQgMAOAAAYQAAAZAMAOQAMANARAAQASAAAMgNQAMgOAAgZQAAgYgMgOQgMgNgSAAQgRAAgMANg");
	this.shape_986.setTransform(493.6,123.3);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#002277").s().p("AgWBVIAAiFIg2AAIAAgkICZAAIAAAkIg2AAIAACFg");
	this.shape_987.setTransform(475.375,123.3);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#002277").s().p("Ag5BCQgXgYAAgqQAAgqAXgXQAWgXAlAAQAgAAASANQATAOAIAbIgtAIQgCgOgIgGQgIgHgNAAQgQAAgKAMQgKAMAAAbQAAAeAKAMQAKAMARAAQANABAIgIQAIgHADgSIAtAIQgHAegUAQQgTAPghAAQglABgWgYg");
	this.shape_988.setTransform(458.375,123.3);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#002277").s().p("Ag5BCQgXgYAAgqQAAgqAXgXQAWgXAlAAQAgAAASANQATAOAIAbIgtAIQgCgOgIgGQgIgHgNAAQgQAAgKAMQgKAMAAAbQAAAeAKAMQAKAMARAAQANABAIgIQAIgHADgSIAtAIQgHAegUAQQgTAPghAAQglABgWgYg");
	this.shape_989.setTransform(440.025,123.3);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#002277").s().p("AhABLQgPgOAAgWQAAgPAGgLQAHgLANgGQAMgFAYgFQAfgGAMgFIAAgFQAAgNgHgFQgGgGgRAAQgMAAgHAFQgHAFgEAMIgpgIQAHgYARgMQARgMAhAAQAegBAOAIQAPAHAGALQAGALAAAeIAAA0QAAAWACAKQACALAGAMIgtAAIgEgNIgCgFQgLALgNAGQgNAFgPAAQgaAAgPgOgAgBALQgTAEgFADQgJAGAAAKQAAAJAHAHQAHAIALAAQALAAALgIQAJgGACgKQACgFAAgQIAAgJIgbAHg");
	this.shape_990.setTransform(421.475,123.3);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#002277").s().p("AhSB4IAAjrIApAAIAAAZQAJgNAOgIQAOgIAQAAQAeAAAVAYQAUAWAAArQAAApgUAYQgWAYgeAAQgMAAgMgGQgLgGgNgNIAABWgAgbhHQgLANAAAaQAAAdAMAMQALAOAPAAQARAAAKgMQAKgMAAgdQAAgbgKgNQgMgNgPAAQgQAAgLAMg");
	this.shape_991.setTransform(402.7,126.35);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#002277").s().p("AhABLQgPgOAAgWQAAgPAGgLQAHgLANgGQAMgFAYgFQAfgGAMgFIAAgFQAAgNgHgFQgGgGgRAAQgMAAgHAFQgHAFgEAMIgpgIQAHgYARgMQARgMAhAAQAegBAOAIQAPAHAGALQAGALAAAeIAAA0QAAAWACAKQACALAGAMIgtAAIgEgNIgCgFQgLALgNAGQgNAFgPAAQgaAAgPgOgAgBALQgTAEgFADQgJAGAAAKQAAAJAHAHQAHAIALAAQALAAALgIQAJgGACgKQACgFAAgQIAAgJIgbAHg");
	this.shape_992.setTransform(373.825,123.3);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#002277").s().p("AAgBVIAAhHIhAAAIAABHIgtAAIAAipIAtAAIAAA+IBAAAIAAg+IAuAAIAACpg");
	this.shape_993.setTransform(354.625,123.3);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#002277").s().p("Ag+A8QgRgXAAgkQAAgpAWgZQAWgYAiABQAlAAAWAZQAXAZgBAzIhxAAQABAUAKALQALAMAOAAQALgBAHgFQAHgGAEgNIAtAIQgJAZgSAMQgTANgcAAQgsAAgVgdgAgXgrQgJAKAAAUIBDAAQgBgVgKgJQgJgLgOAAQgOAAgKALg");
	this.shape_994.setTransform(326.2021,123.3);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#002277").s().p("AgWBVIAAiFIg2AAIAAgkICZAAIAAAkIg2AAIAACFg");
	this.shape_995.setTransform(309.075,123.3);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#002277").s().p("AhSBVIAAipIAuAAIAABHIAsAAQAbAAAOADQAPAEAJAMQAKANAAAQQAAAZgRANQgRAMgiAAgAgkA5IApAAQAUAAAFgHQAGgGAAgJQAAgNgKgEQgJgEgYAAIgdAAg");
	this.shape_996.setTransform(291.425,123.3);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#002277").s().p("ABABsIAAgtIiAAAIAAAtIglAAIAAhSIATAAQALgNAIgaQAHgbAChDICJAAIAACFIATAAIAABSgAgmAaIBNAAIAAhgIg2AAQgDBGgUAag");
	this.shape_997.setTransform(269.8,125.55);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#002277").s().p("AApBVIAAhHIgFAAQgOAAgHAFQgHADgIAMIgCAEIgeAvIg1AAIAhgxQAOgWALgCQgTgBgMgNQgMgOAAgUQAAgQAIgNQAIgLANgFQANgDAZAAIBZAAIAACpgAgQgyQgHAEAAANQAAALAIAGQAIAEASAAIAeAAIAAgsIghAAQgRAAgHAGg");
	this.shape_998.setTransform(248.975,123.3);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#002277").s().p("AhIBaQgeghAAg3QAAg6AeghQAfggAwAAQAsAAAbAaQAQAPAJAcIgwALQgEgSgNgLQgOgLgSAAQgaAAgRATQgQATAAAqQAAAsAQATQAQATAaAAQASAAAOgMQANgMAHgaIAuAPQgKAmgZAUQgZASgmAAQguAAgfggg");
	this.shape_999.setTransform(228.5,120.05);

	this.BtnAmslerODNotEq = new lib.odd();
	this.BtnAmslerODNotEq.name = "BtnAmslerODNotEq";
	this.BtnAmslerODNotEq.setTransform(719.7,520,0.8886,0.8889);
	new cjs.ButtonHelper(this.BtnAmslerODNotEq, 0, 1, 2);

	this.BtnAmslerODEq = new lib.even();
	this.BtnAmslerODEq.name = "BtnAmslerODEq";
	this.BtnAmslerODEq.setTransform(585.95,520,0.8886,0.8889);
	new cjs.ButtonHelper(this.BtnAmslerODEq, 0, 1, 2);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#002277").s().p("AASBEIgSgnQgEgMgFgDQgDgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBADgEQAEgFAEgPQAHgUAIgFQAIgGANAAIAPABIAAAXQgOAAgEADQgEADgFAOQgGASgMAFQARADAMAZIABADIAVAlg");
	this.shape_1000.setTransform(727.9,306.275);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#002277").s().p("AAYBDIAAhoIgvAAIAABoIgkAAIAAiGIB3AAIAACGg");
	this.shape_1001.setTransform(712.525,306.3);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#002277").s().p("AgiA+QgRgIgJgRQgJgPAAgXQAAgRAJgRQAJgRAQgJQAQgJATAAQAfABATATQATAVABAdQgBAfgTATQgUAVgeAAQgRAAgRgJgAgXgeQgJALAAATQAAAUAJALQAKALANgBQAOABAJgLQAKgLAAgUQAAgTgKgLQgJgKgOgBQgNABgKAKg");
	this.shape_1002.setTransform(696.9,306.3);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#002277").s().p("AASBEIgSgnQgEgMgFgDQgDgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBADgEQAEgFAEgPQAHgUAIgFQAIgGANAAIAPABIAAAXQgOAAgEADQgEADgFAOQgGASgMAFQARADAMAZIABADIAVAlg");
	this.shape_1003.setTransform(667.6,306.275);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#002277").s().p("AgPA1QgPgSgCgTIgcAAIAAAzIgkAAIAAiGIAkAAIAAA3IAcAAQADgaARgPQAQgQAcgBQAcAAASATQATATAAAhQAAAVgHAPQgHAPgOAKQgOAIgWABQghAAgPgSgAAKggQgHAJAAAWQAAAZAHAKQAIAIAOABQAOAAAHgLQAHgLAAgUQAAgZgIgJQgHgJgOAAQgOAAgHAKg");
	this.shape_1004.setTransform(642.325,306.3);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAJAAAYIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_1005.setTransform(718.575,275.25);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#002277").s().p("AgxAvQgNgSAAgcQAAggASgUQARgSAbgBQAdABARATQASAVgBAnIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgFQAGgFACgJIAkAFQgHAUgPALQgOAJgXABQgiAAgRgYgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_1006.setTransform(681.0777,275.25);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#002277").s().p("AgQBDIAAhoIgsAAIAAgeIB5AAIAAAeIgrAAIAABog");
	this.shape_1007.setTransform(667.55,275.25);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#002277").s().p("AgyA7QgMgLAAgSQAAgLAFgJQAFgJAKgEQAKgEATgDQAYgGAJgDIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgKAbAAQAWAAAMAHQAMAFAFAIQAEAJAAAYIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_1008.setTransform(600.325,275.25);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#002277").s().p("AAlBdIAAhRIhJAAIAABRIglAAIAAi5IAlAAIAABJIBJAAIAAhJIAlAAIAAC5g");
	this.shape_1009.setTransform(583.6,272.7);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#990000").s().p("AgQBeIAAgjIAiAAIAAAjgAgQAuIAAgJQAAgPAFgLQAFgJAPgMQAPgNADgEQAFgGAAgHQAAgLgIgHQgJgIgOAAQgMAAgJAIQgKAIgDAPIghgDQACgYASgPQASgQAcAAQAeAAATAQQASAQAAAWQAAALgHALQgHAKgVARQgMAKgCAFQgDAGAAAPg");
	this.shape_1010.setTransform(701.375,198.6);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#990000").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbABQAdAAARATQASAUgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAHQgHATgPAKQgOAKgXAAQgiABgRgXgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_1011.setTransform(686.0277,201.25);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#990000").s().p("AA5BDIAAiGIAkAAIAACGgAhcBDIAAiGIAjAAIAAA4IAkAAQAVAAALAEQALACAIAJQAHALAAAOQAAATgOAKQgNAKgagBgAg5AtIAiAAQANAAAFgEQAFgEABgJQAAgKgHgEQgIgDgTAAIgYAAg");
	this.shape_1012.setTransform(667.9,201.25);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#990000").s().p("AhABDIAAiGIBNAAQAYAAAMAJQAMAJAAASQAAALgHAIQgGAJgKACQAOADAHAKQAGAJAAALQAAAQgLAKQgMAKgWgBgAgcAtIAcAAQAOAAAHgEQAHgEAAgJQAAgKgIgEQgIgEgWABIgSAAgAgcgLIAXAAQAPAAAIgDQAHgEAAgKQAAgIgHgEQgHgEgQABIgXAAg");
	this.shape_1013.setTransform(633.425,201.25);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgJgQAAgXQAAgRAJgRQAJgRAQgIQAQgKATABQAfAAATATQAUAUAAAeQAAAfgUATQgUAVgegBQgSABgQgJgAgWgeQgKALAAATQAAAUAKALQAJAKANAAQAOAAAKgKQAJgLAAgUQAAgTgJgLQgKgLgOAAQgNAAgJALg");
	this.shape_1014.setTransform(617.1,201.25);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#990000").s().p("AAbBDIAAhUIg2BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_1015.setTransform(759.95,170.2);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#990000").s().p("AAbBDIAAhUIg2BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_1016.setTransform(712.25,170.2);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#990000").s().p("AhIBCIAAgaIAHAAIAJABQAGAAACgFQACgFAAgWIAAhNIB2AAIAACGIgkAAIAAhpIgvAAIAAA8QAAAXgFAJQgGAKgGADQgGADgPAAQgJAAgOgDg");
	this.shape_1017.setTransform(695.3,170.325);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#990000").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbABQAdAAARATQASAUgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAHQgHATgPAKQgOAKgXAAQgiABgRgXgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_1018.setTransform(673.2277,170.2);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#990000").s().p("AgtA0QgRgTAAghQAAggARgSQASgUAcABQAagBAOAMQAOAKAHAWIgjAGQgCgLgGgFQgHgFgKAAQgMAAgIAJQgIAJAAAVQAAAXAIAKQAIALAMgBQALABAGgGQAHgGADgOIAjAGQgGAYgPAMQgQAMgaAAQgcAAgSgSg");
	this.shape_1019.setTransform(659.1,170.2);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#990000").s().p("AhABDIAAiGIBNAAQAYAAAMAJQAMAJAAASQAAALgHAIQgGAJgKACQAOADAHAKQAGAJAAALQAAAQgLAJQgMALgWgBgAgcAtIAcAAQAOAAAHgEQAHgEAAgJQAAgKgIgEQgIgEgWABIgSAAgAgcgLIAXAAQAPAAAIgDQAHgEAAgKQAAgIgHgEQgHgEgQABIgXAAg");
	this.shape_1020.setTransform(644.075,170.2);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#990000").s().p("AAbBDIAAhUIg2BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_1021.setTransform(620.45,170.2);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#990000").s().p("AASBEIgSgnQgEgMgFgDQgDgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBADgEQAEgFAEgPQAHgUAIgFQAIgGANAAIAPABIAAAXQgOAAgEADQgEADgFAOQgGASgMAFQARADAMAZIABADIAVAlg");
	this.shape_1022.setTransform(606.85,170.175);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#990000").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbABQAdAAARATQASAUgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAHQgHATgPAKQgOAKgXAAQgiABgRgXgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_1023.setTransform(579.3777,170.2);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#990000").s().p("AgtA0QgSgTAAghQAAggASgSQASgUAcABQAagBAOAMQAOAKAHAWIgkAGQgBgLgHgFQgGgFgKAAQgMAAgIAJQgIAJAAAVQAAAXAIAKQAIALAMgBQALABAGgGQAHgGACgOIAjAGQgFAYgPAMQgQAMgaAAQgdAAgRgSg");
	this.shape_1024.setTransform(565.25,170.2);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#990000").s().p("Ag3BcIAAgcIAOAAQANAAAGgEQAFgFAGgQIhFiEIAqAAIArBfIAlhfIAnAAIg/CMQgKAXgKAMQgKAMgRAAQgRAAgJgCg");
	this.shape_1025.setTransform(542.525,167.775);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#002277").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbAAQAdAAARAVQASATgBAoIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgEQAGgGACgKIAkAHQgHATgPAKQgOALgXgBQgiAAgRgWgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_1026.setTransform(692.5277,131.65);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#002277").s().p("AgRBEIAAhpIgrAAIAAgdIB5AAIAAAdIgrAAIAABpg");
	this.shape_1027.setTransform(663.1,131.65);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#002277").s().p("AAZBEIAAg5IgyAAIAAA5IgjAAIAAiGIAjAAIAAAxIAyAAIAAgxIAkAAIAACGg");
	this.shape_1028.setTransform(648.925,131.65);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#002277").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbAAQAdAAARAVQASATgBAoIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgEQAGgGACgKIAkAHQgHATgPAKQgOALgXgBQgiAAgRgWgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_1029.setTransform(633.7277,131.65);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#002277").s().p("AAnBVIAAgjIhqAAIAAiGIAjAAIAABpIAyAAIAAhpIAkAAIAABpIAOAAIAABAg");
	this.shape_1030.setTransform(619.15,133.425);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#002277").s().p("AhABEIAAiGIBNAAQAYgBAMAKQAMAIAAASQAAALgHAJQgGAIgKACQAOADAHAKQAGAJAAALQAAAQgLAKQgMAJgWABgAgcAsIAcAAQAOABAHgEQAHgDAAgKQAAgKgIgEQgIgEgWAAIgSAAgAgcgLIAXAAQAPAAAIgDQAHgFAAgJQAAgIgHgEQgHgEgQAAIgXAAg");
	this.shape_1031.setTransform(595.825,131.65);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#002277").s().p("Ag5BdIgDgcQAJACAGAAQANAAAGgIQAGgHADgLIgziHIAlAAIAgBfIAfhfIAlAAIgvCBIgJAYIgJASQgEAGgFAEQgFAEgIACQgIACgKAAQgLAAgKgCg");
	this.shape_1032.setTransform(758.475,103.325);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#002277").s().p("AASBEIgSgnQgEgMgEgDQgFgEgHAAIAAA6IgkAAIAAiGIAkAAIAAA3QAIgBAFgEQADgFAFgPQAGgUAIgFQAIgGAOAAIANABIABAXQgOAAgEADQgEADgFAOQgGASgMAFQARADAMAZIACADIAUAlg");
	this.shape_1033.setTransform(745.75,100.575);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#002277").s().p("AAYBEIAAg2QgVAFgKAAQgQAAgNgGQgNgIgFgKQgFgLAAgSIAAggIAkAAIAAAgQAAALACAFQACAGAHADQAGAFAJAAQAJAAAMgFIAAg5IAkAAIAACGg");
	this.shape_1034.setTransform(730.675,100.6);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#002277").s().p("AgiA+QgRgIgJgRQgJgQAAgWQAAgSAJgQQAJgRAQgJQAQgIATgBQAeAAAUAVQATATABAeQgBAfgTAUQgUATgeAAQgRAAgRgIgAgXgdQgJAKAAATQAAAUAJALQAKALANAAQAOAAAJgLQAKgLAAgUQAAgTgKgKQgJgLgOAAQgNAAgKALg");
	this.shape_1035.setTransform(715.35,100.6);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#002277").s().p("AgQBEIAAhpIgsAAIAAgdIB5AAIAAAdIgrAAIAABpg");
	this.shape_1036.setTransform(700.95,100.6);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#002277").s().p("AgyA7QgMgLAAgRQAAgLAFgKQAFgIAKgEQAKgFATgEQAYgEAJgFIAAgDQAAgLgFgDQgFgFgNAAQgJAAgGAEQgFADgDAKIghgGQAGgTANgKQANgKAbAAQAWABAMAFQAMAGAFAJQAEAJAAAWIAAApQAAASACAJQABAIAFAKIgjAAIgEgLIgBgEQgJAIgKAFQgKAEgMAAQgUAAgMgLgAAAAIQgPAEgFADQgHAEAAAIQAAAHAGAGQAFAGAJgBQAJABAIgHQAHgFACgHQABgEAAgNIAAgHIgUAFg");
	this.shape_1037.setTransform(680.225,100.6);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#002277").s().p("AAZBEIAAg5IgyAAIAAA5IgjAAIAAiGIAjAAIAAAxIAyAAIAAgxIAkAAIAACGg");
	this.shape_1038.setTransform(665.125,100.6);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#002277").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbAAQAdAAARAVQASATgBAoIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgEQAGgGACgKIAkAHQgHATgPALQgOAKgXgBQgiAAgRgWgAgRgiQgIAJAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_1039.setTransform(642.7277,100.6);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#002277").s().p("AgQBEIAAhpIgsAAIAAgdIB5AAIAAAdIgrAAIAABpg");
	this.shape_1040.setTransform(629.2,100.6);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#002277").s().p("AAbBEIAAhWIg2BWIgiAAIAAiGIAiAAIAABTIA2hTIAjAAIAACGg");
	this.shape_1041.setTransform(614.85,100.6);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#002277").s().p("AgQBEIAAhpIgsAAIAAgdIB5AAIAAAdIgrAAIAABpg");
	this.shape_1042.setTransform(584.55,100.6);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#002277").s().p("AgiA+QgRgIgJgRQgJgQAAgWQAAgSAJgQQAJgRAQgJQAQgIATgBQAfAAATAVQAUATAAAeQAAAfgUAUQgUATgeAAQgSAAgQgIgAgWgdQgKAKAAATQAAAUAKALQAJALANAAQAOAAAKgLQAJgLAAgUQAAgTgJgKQgKgLgOAAQgNAAgJALg");
	this.shape_1043.setTransform(570.3,100.6);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#002277").s().p("AAwBEIAAhYIghBYIgeAAIgfhYIAABYIgfAAIAAiGIAtAAIAgBcIAihcIAsAAIAACGg");
	this.shape_1044.setTransform(552.775,100.6);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#002277").s().p("AgtA0QgRgTAAghQAAggARgSQASgUAdAAQAZAAAOAMQAPAKAFAVIgiAHQgCgKgGgGQgHgGgKABQgMgBgIAKQgIAJAAAVQAAAYAIAKQAIAKANAAQAKgBAHgFQAGgGADgOIAjAGQgGAYgQAMQgPAMgaAAQgdAAgRgSg");
	this.shape_1045.setTransform(536.05,100.6);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#002277").s().p("AAzBVIAAgjIhlAAIAAAjIgdAAIAAhAIAPAAQAJgLAGgUQAGgWABg0IBrAAIAABpIAPAAIAABAgAgdAVIA7AAIAAhMIgpAAQgDA3gPAVg");
	this.shape_1046.setTransform(755.5,71.325);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#002277").s().p("AAZBEIAAg5IgyAAIAAA5IgjAAIAAiGIAjAAIAAAxIAyAAIAAgxIAkAAIAACGg");
	this.shape_1047.setTransform(739.775,69.55);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#002277").s().p("Ag5BdIgDgcQAJACAGAAQANAAAGgIQAGgHADgLIgziHIAlAAIAgBfIAfhfIAlAAIgvCBIgJAYIgJASQgEAGgFAEQgFAEgIACQgIACgKAAQgLAAgKgCg");
	this.shape_1048.setTransform(724.575,72.275);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#002277").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbAAQAdAAARAVQASATgBAoIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgEQAGgGACgJIAkAGQgHATgPAKQgOALgXgBQgiAAgRgWgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_1049.setTransform(697.1277,69.55);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#002277").s().p("AgtA0QgSgTAAghQAAggASgSQARgUAeAAQAYAAAPAMQAOAKAGAVIgjAHQgBgKgHgGQgGgGgKABQgMgBgIAKQgIAJAAAVQAAAYAIAKQAIAKANAAQAKgBAHgFQAGgGADgOIAiAGQgFAYgQAMQgPAMgaAAQgcAAgSgSg");
	this.shape_1050.setTransform(683,69.55);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#002277").s().p("AgiA+QgRgIgJgRQgJgQAAgWQAAgSAJgQQAJgRAQgJQAQgIATgBQAfAAATAVQATATABAeQgBAfgTAUQgUATgeAAQgRAAgRgIgAgXgdQgJAKAAATQAAAUAJALQAKALANAAQAOAAAJgLQAKgLAAgUQAAgTgKgKQgJgLgOAAQgNAAgKALg");
	this.shape_1051.setTransform(660.45,69.55);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#002277").s().p("AASBEIgSgnQgEgMgEgDQgFgEgHAAIAAA6IgkAAIAAiGIAkAAIAAA3QAIgBAFgEQADgFAFgPQAGgUAIgFQAJgGANAAIANABIABAXQgPAAgDADQgEADgFAOQgGASgMAFQARADAMAZIACADIATAlg");
	this.shape_1052.setTransform(646.85,69.525);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#002277").s().p("AhABEIAAiGIAjAAIAAA4IAjAAQAWAAALACQALAEAHAJQAIAKAAANQAAAUgOAKQgNAJgaABgAgdAtIAhAAQAPAAAFgFQAEgGAAgGQAAgKgHgDQgIgEgSgBIgYAAg");
	this.shape_1053.setTransform(631.9,69.55);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#002277").s().p("AhIBCIAAgaIAHAAIAJABQAGAAACgFQACgFAAgWIAAhNIB2AAIAACGIgkAAIAAhpIgvAAIAAA8QAAAXgFAJQgGAKgGADQgHADgOAAQgIAAgPgDg");
	this.shape_1054.setTransform(614.5,69.675);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#002277").s().p("AgiA+QgRgIgJgRQgIgQAAgWQAAgSAIgQQAJgRAQgJQAQgIATgBQAeAAAUAVQATATAAAeQAAAfgTAUQgUATgeAAQgSAAgQgIgAgWgdQgKAKAAATQAAAUAKALQAJALANAAQAOAAAJgLQAKgLAAgUQAAgTgKgKQgJgLgOAAQgNAAgJALg");
	this.shape_1055.setTransform(599.05,69.55);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#002277").s().p("AASBEIgSgnQgEgMgFgDQgEgEgHAAIAAA6IgkAAIAAiGIAkAAIAAA3QAIgBAFgEQADgFAFgPQAGgUAIgFQAIgGAOAAIANABIABAXQgOAAgEADQgEADgFAOQgGASgMAFQARADAMAZIACADIAUAlg");
	this.shape_1056.setTransform(585.45,69.525);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#002277").s().p("AgtA0QgRgTgBghQABggARgSQARgUAeAAQAYAAAPAMQAPAKAFAVIgjAHQgBgKgGgGQgHgGgKABQgMgBgIAKQgIAJAAAVQAAAYAIAKQAIAKANAAQAKgBAHgFQAGgGADgOIAjAGQgGAYgQAMQgPAMgaAAQgdAAgRgSg");
	this.shape_1057.setTransform(571.05,69.55);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#002277").s().p("AgxAwQgNgTAAgcQAAghASgSQARgUAbAAQAdAAARAVQASATgBAoIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgEQAGgGACgJIAkAGQgHATgPAKQgOALgXgBQgiAAgRgWgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_1058.setTransform(556.2777,69.55);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#002277").s().p("AAlBdIAAhSIhJAAIAABSIglAAIAAi5IAlAAIAABJIBJAAIAAhJIAlAAIAAC5g");
	this.shape_1059.setTransform(539.7,67);

	this.instance_25 = new lib.amslergrid();
	this.instance_25.setTransform(257.3,299.85,1,1,0,0,0,242.8,242.5);

	this.BtnAmslerOS = new lib.КнопкаBtnNext1небесная();
	this.BtnAmslerOS.name = "BtnAmslerOS";
	this.BtnAmslerOS.setTransform(400,545);
	new cjs.ButtonHelper(this.BtnAmslerOS, 0, 1, 2);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#990000").s().p("ABJBWIAAiqIAtAAIAACqgAh1BWIAAiqIAuAAIAABHIAtAAQAaAAANADQAOAEALAMQAJANAAAQQAAAagRAMQgRANghAAgAhHA5IApAAQARAAAHgFQAHgGAAgLQAAgMgJgFQgKgFgYABIgdAAg");
	this.shape_1060.setTransform(469.9,233.25);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#990000").s().p("AhSBWIAAiqIBiAAQAeAAAQALQAPAKAAAXQAAAOgIALQgIALgNADQASAEAIAMQAJAMAAAOQAAATgOANQgPANgdAAgAgkA4IAjAAQATABAIgFQAKgFgBgMQABgMgLgFQgKgFgcAAIgXAAgAgkgNIAdAAQAUAAAKgGQAJgFAAgMQAAgLgJgEQgJgEgVAAIgdAAg");
	this.shape_1061.setTransform(446.1,233.25);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#990000").s().p("AhTB4IAAjrIArAAIAAAZQAIgNAOgIQAOgIAQAAQAeAAAUAXQAWAXAAArQAAAqgWAXQgUAYgeAAQgNAAgMgGQgMgGgNgNIAABWgAgbhHQgLANAAAZQAAAdALANQAMAOAPAAQARAAAKgNQAKgMAAgcQAAgbgLgNQgLgNgPAAQgQAAgLAMg");
	this.shape_1062.setTransform(407.5,236.3);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#990000").s().p("AAeBWIAAiGIg8AAIAACGIgtAAIAAiqICXAAIAACqg");
	this.shape_1063.setTransform(386.75,233.25);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#990000").s().p("AgsBPQgVgLgLgVQgMgUAAgcQAAgXAMgVQALgVAUgMQAVgKAYgBQAnABAYAZQAaAZAAAmQAAAngaAZQgZAagmgBQgWABgWgLgAgdgmQgMANAAAZQAAAaAMANQAMAOARAAQARAAANgOQAMgNAAgaQAAgZgMgNQgNgOgRAAQgRAAgMAOg");
	this.shape_1064.setTransform(303,233.25);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#990000").s().p("AhTB4IAAjrIArAAIAAAZQAIgNAOgIQAOgIAQAAQAeAAAUAXQAWAXAAArQAAAqgWAXQgUAYgeAAQgNAAgMgGQgMgGgNgNIAABWgAgbhHQgLANAAAZQAAAdALANQAMAOAPAAQAQAAALgNQAKgMAAgcQAAgbgLgNQgLgNgPAAQgQAAgLAMg");
	this.shape_1065.setTransform(283.3,236.3);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#990000").s().p("AhABLQgPgOAAgWQAAgOAGgMQAHgMANgEQAMgHAYgEQAfgGAMgFIAAgEQAAgNgHgGQgGgGgRAAQgMAAgHAFQgHAFgEALIgpgHQAHgZARgLQARgMAhgBQAeAAAOAIQAPAHAGALQAGALAAAeIAAAzQAAAXACAKQACAMAGAMIgtAAIgEgOIgCgFQgLALgNAFQgNAHgPgBQgaAAgPgOgAgBAKQgTAEgFAEQgJAHAAAJQAAAJAHAIQAHAGALABQALgBALgHQAJgHACgJQACgFAAgQIAAgJIgbAGg");
	this.shape_1066.setTransform(247.075,233.25);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#990000").s().p("Ag6BuQgVgMgLgjIAsgOQAGAWAMAGQALAGARAAQAVAAAKgKQAKgKAAgMQAAgOgLgKQgMgJgXAAIgKAAIAAgiIAGAAQAUAAAMgKQAMgKAAgQQAAgNgKgIQgKgKgQABQgegBgJAeIgugKQAPg6BHAAQAoAAAWASQAUASABAZQAAARgKAOQgKANgTAKQAYAIALAPQAMAOAAAWQAAAfgXATQgXATgtAAQglAAgVgMg");
	this.shape_1067.setTransform(227,230);

	this.BtnAmslerOSNotEq = new lib.odd();
	this.BtnAmslerOSNotEq.name = "BtnAmslerOSNotEq";
	this.BtnAmslerOSNotEq.setTransform(719.7,520,0.8886,0.8889);
	new cjs.ButtonHelper(this.BtnAmslerOSNotEq, 0, 1, 2);

	this.BtnAmslerOSEq = new lib.even();
	this.BtnAmslerOSEq.name = "BtnAmslerOSEq";
	this.BtnAmslerOSEq.setTransform(585.95,520,0.8886,0.8889);
	new cjs.ButtonHelper(this.BtnAmslerOSEq, 0, 1, 2);

	this.BtnAstOD = new lib.КнопкаBtnNext1небесная();
	this.BtnAstOD.name = "BtnAstOD";
	this.BtnAstOD.setTransform(400,545);
	new cjs.ButtonHelper(this.BtnAstOD, 0, 1, 2);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#002277").s().p("AAIBPIAAgfIhAAAIAAgbIBEhjIAZAAIAABjIAUAAIAAAbIgUAAIAAAfgAgbAVIAjAAIAAg1g");
	this.shape_1068.setTransform(773.925,23.975);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#002277").s().p("AhABLQgPgPAAgVQAAgPAGgLQAHgLANgGQAMgFAYgFQAfgGAMgFIAAgFQAAgNgHgFQgGgGgRAAQgMAAgHAFQgHAEgEAMIgpgHQAHgYARgNQARgMAhABQAeAAAOAHQAPAHAGALQAGALAAAdIAAA0QAAAXACALQACAKAGAMIgtAAIgEgNIgCgFQgLALgNAFQgNAGgPABQgaAAgPgPgAgBALQgTADgFAEQgJAHAAAJQAAAKAHAGQAHAIALgBQALABALgJQAJgGACgIQACgHAAgQIAAgJIgbAIg");
	this.shape_1069.setTransform(696.575,143.3);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#002277").s().p("AhTB4IAAjrIAqAAIAAAZQAJgNAOgIQAOgIAQAAQAeAAAVAYQAUAXABApQgBAqgUAYQgWAYgdAAQgOAAgLgGQgMgFgNgOIAABWgAgbhGQgLANAAAZQAAAcAMANQALAOAQAAQAPAAALgMQAKgMAAgdQAAgbgKgNQgLgNgQAAQgQAAgLANg");
	this.shape_1070.setTransform(677.8,146.35);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#002277").s().p("AgrBOQgWgKgLgUQgLgVAAgdQAAgWALgVQALgVAVgMQATgLAZABQAmgBAaAaQAZAZAAAmQAAAngZAZQgaAagmAAQgXAAgUgMgAgdgmQgMANAAAZQAAAaAMANQANAOAQAAQASAAAMgOQALgNAAgaQAAgYgLgOQgNgNgRAAQgQAAgNANg");
	this.shape_1071.setTransform(657.2,143.3);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#002277").s().p("AgWBVIAAiFIg2AAIAAglICZAAIAAAlIg2AAIAACFg");
	this.shape_1072.setTransform(638.975,143.3);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#002277").s().p("AAjBVIAAhsIhFBsIgsAAIAAiqIAsAAIAABrIBEhrIAtAAIAACqg");
	this.shape_1073.setTransform(620.725,143.3);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#002277").s().p("AAgBVIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA/IBAAAIAAg/IAuAAIAACqg");
	this.shape_1074.setTransform(600.625,143.3);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#002277").s().p("AgsBOQgVgKgLgUQgMgVAAgdQAAgWAMgVQALgVAUgMQAVgLAYABQAngBAYAaQAZAZABAmQgBAngZAZQgZAagmAAQgWAAgWgMgAgdgmQgMANAAAZQAAAaAMANQAMAOARAAQARAAANgOQAMgNAAgaQAAgYgMgOQgNgNgRAAQgRAAgMANg");
	this.shape_1075.setTransform(580.65,143.3);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#002277").s().p("AA8BVIAAhvIgqBvIglAAIgohvIAABvIgnAAIAAiqIA4AAIAqB2IArh2IA4AAIAACqg");
	this.shape_1076.setTransform(558.475,143.3);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#002277").s().p("AgWBVIAAiFIg2AAIAAglICZAAIAAAlIg2AAIAACFg");
	this.shape_1077.setTransform(528.875,143.3);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#002277").s().p("AgsBOQgVgKgLgUQgMgVAAgdQAAgWAMgVQALgVAVgMQATgLAZABQAmgBAZAaQAaAZAAAmQAAAngaAZQgZAagmAAQgWAAgWgMgAgdgmQgMANAAAZQAAAaAMANQAMAOARAAQARAAANgOQAMgNAAgaQAAgYgMgOQgNgNgRAAQgRAAgMANg");
	this.shape_1078.setTransform(510.8,143.3);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#002277").s().p("AhSBVIAAiqIBjAAQAdABAQAKQAPALAAAXQAAAPgIAKQgJALgMADQASADAIAMQAJAMAAAOQAAAVgOAMQgQAMgcAAgAgkA4IAkAAQASAAAJgEQAJgFAAgMQAAgMgKgFQgLgFgcAAIgXAAgAgkgOIAdAAQAUAAAJgFQAKgFAAgLQAAgLgJgFQgJgFgVAAIgdAAg");
	this.shape_1079.setTransform(481.9,143.3);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#002277").s().p("AgsBOQgVgKgLgUQgMgVAAgdQAAgWAMgVQALgVAVgMQAUgLAYABQAmgBAZAaQAaAZAAAmQAAAngaAZQgZAagmAAQgWAAgWgMgAgdgmQgMANAAAZQAAAaAMANQANAOAQAAQASAAAMgOQAMgNAAgaQAAgYgMgOQgMgNgSAAQgQAAgNANg");
	this.shape_1080.setTransform(461.2,143.3);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#002277").s().p("Ag5BVIAAiqIBzAAIAAAlIhGAAIAACFg");
	this.shape_1081.setTransform(445.275,143.3);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#002277").s().p("AhABLQgPgPAAgVQAAgPAGgLQAHgLANgGQAMgFAYgFQAfgGAMgFIAAgFQAAgNgHgFQgGgGgRAAQgMAAgHAFQgHAEgEAMIgpgHQAHgYARgNQARgMAhABQAeAAAOAHQAPAHAGALQAGALAAAdIAAA0QAAAXACALQACAKAGAMIgtAAIgEgNIgCgFQgLALgNAFQgNAGgPABQgaAAgPgPgAgBALQgTADgFAEQgJAHAAAJQAAAKAHAGQAHAIALgBQALABALgJQAJgGACgIQACgHAAgQIAAgJIgbAIg");
	this.shape_1082.setTransform(428.175,143.3);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#002277").s().p("AhyBVIAAiqIAqAAIAACGIA0AAIAAiGIApAAIAACGIA1AAIAAiGIApAAIAACqg");
	this.shape_1083.setTransform(405.2,143.3);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#002277").s().p("Ag1BlQgWgSgEgdIAugFQACAQAJAJQAJAIANABQANAAAKgMQAKgMAAgXQAAgWgKgKQgJgKgPAAQgTAAgQAQIglgGIAXh6IB3AAIAAArIhVAAIgHAoQAPgIAQABQAegBAUAWQAWAVAAAjQAAAegRAWQgXAggoAAQghAAgUgSg");
	this.shape_1084.setTransform(373.35,140.4);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#002277").s().p("AhbARIAAghIC3AAIAAAhg");
	this.shape_1085.setTransform(345.575,143.3);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#002277").s().p("Ag1BmQgVgSgDgeIArgFQACAQAKAJQAIAJAOAAQANAAAKgLQAJgKAAgTQAAgQgJgLQgJgKgOAAQgHABgNADIAGgkQARABAKgJQAKgJAAgNQgBgNgHgGQgHgIgLAAQgMAAgHAJQgJAHgBAQIgqgHQAEgVAJgNQAJgNAPgHQAQgIATABQAhAAAUAUQARASAAAWQAAAfgjASQAVAFANAOQAMAPgBAVQAAAggWAVQgXAXghAAQgggBgVgSg");
	this.shape_1086.setTransform(318.05,140.2);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#002277").s().p("AhABLQgPgPAAgVQAAgPAGgLQAHgLANgGQAMgFAYgFQAfgGAMgFIAAgFQAAgNgHgFQgGgGgRAAQgMAAgHAFQgHAEgEAMIgpgHQAHgYARgNQARgMAhABQAeAAAOAHQAPAHAGALQAGALAAAdIAAA0QAAAXACALQACAKAGAMIgtAAIgEgNIgCgFQgLALgNAFQgNAGgPABQgaAAgPgPgAgBALQgTADgFAEQgJAHAAAJQAAAKAHAGQAHAIALgBQALABALgJQAJgGACgIQACgHAAgQIAAgJIgbAIg");
	this.shape_1087.setTransform(290.675,143.3);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#002277").s().p("AAgBVIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA/IBAAAIAAg/IAuAAIAACqg");
	this.shape_1088.setTransform(271.475,143.3);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#002277").s().p("Ag+A8QgRgXAAgkQAAgqAWgYQAWgXAiAAQAlgBAWAaQAXAZgBAzIhxAAQABAUAKAMQALAKAOABQALAAAHgHQAHgFAEgNIAtAHQgJAZgSANQgTAOgcAAQgsAAgVgegAgXgrQgJALAAASIBDAAQgBgTgKgKQgJgLgOAAQgOAAgKALg");
	this.shape_1089.setTransform(243.0521,143.3);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#002277").s().p("AgWBVIAAiFIg2AAIAAglICZAAIAAAlIg2AAIAACFg");
	this.shape_1090.setTransform(225.925,143.3);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#002277").s().p("AAjBVIAAhsIhFBsIgsAAIAAiqIAsAAIAABrIBEhrIAtAAIAACqg");
	this.shape_1091.setTransform(207.675,143.3);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#002277").s().p("ABBBsIAAgtIiBAAIAAAtIglAAIAAhSIATAAQAMgNAHgbQAHgbAChCICJAAIAACFIATAAIAABSgAgmAaIBNAAIAAhgIg2AAQgDBGgUAag");
	this.shape_1092.setTransform(186.65,145.55);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#002277").s().p("AAjB4IAAhtIhFBtIgsAAIAAiqIAsAAIAABrIBEhrIAtAAIAACqgAgghVQgOgMgCgWIAWAAQABALAHAGQAHAGANAAQANAAAHgGQAHgGABgLIAWAAQgCAWgNAMQgOANgVAAQgVAAgNgNg");
	this.shape_1093.setTransform(166.425,139.825);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#002277").s().p("AgsBOQgVgKgLgUQgMgVAAgdQAAgWAMgVQALgVAUgMQAUgLAZABQAmgBAZAaQAaAZAAAmQAAAngaAZQgZAagmAAQgWAAgWgMgAgdgmQgMANAAAZQAAAaAMANQAMAOARAAQARAAANgOQAMgNAAgaQAAgYgMgOQgNgNgRAAQgRAAgMANg");
	this.shape_1094.setTransform(146.3,143.3);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#002277").s().p("AgWBVIAAiFIg2AAIAAglICZAAIAAAlIg2AAIAACFg");
	this.shape_1095.setTransform(128.075,143.3);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#002277").s().p("AhSBaQgfgggBg4QAAgkALgYQAIgTAOgOQAOgOAQgHQAXgJAcAAQA0AAAfAgQAfAhABA4QAAA5ggAhQgeAgg1AAQg0AAgegggAgug8QgSAUAAAoQAAAoASAUQATAWAbAAQAdgBASgUQASgVAAgoQAAgpgSgTQgRgVgeABQgdAAgRAUg");
	this.shape_1096.setTransform(107.25,140.05);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#002277").s().p("AgtBEIAAiGIBaAAIAAAdIg2AAIAABpg");
	this.shape_1097.setTransform(741.05,97.8);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#002277").s().p("AAcBEIAAhWIg3BWIgiAAIAAiGIAiAAIAABTIA2hTIAjAAIAACGg");
	this.shape_1098.setTransform(726.75,97.8);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#002277").s().p("AgRB3IAAhEQgHAKgJAFQgJAEgKAAQgWAAgOgUQgOgUAAgeQAAgeAQgUQAQgUATAAQALAAAIAFQAJAFAGAKIAAhEIAjAAIAABFQAGgKAJgFQAJgFAMAAQAWAAAOAVQANAVAAAcQAAAdgPAUQgQAUgVAAQgJAAgJgEQgIgFgHgKIAABEgAAYgdQgHAMAAATQAAATAIALQAHALAKAAQAKAAAHgMQAIgNAAgRQAAgSgHgMQgHgNgLAAQgLAAgHANgAg6geQgHALAAATQAAATAHAMQAHAMAKAAQAKAAAIgMQAHgMAAgTQAAgWgIgKQgIgKgIAAQgKAAgIAMg");
	this.shape_1099.setTransform(707.375,97.825);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#002277").s().p("AgPA1QgPgSgCgTIgcAAIAAA0IgkAAIAAiGIAkAAIAAA2IAcAAQADgaARgQQAQgQAcAAQAcABASASQATASAAAiQAAAUgHAPQgHAQgOAJQgOAKgWgBQghABgPgSgAAKggQgHAJAAAWQAAAZAHAKQAIAJAOAAQAOAAAHgLQAHgLAAgVQAAgYgIgJQgHgIgOgBQgOAAgHAKg");
	this.shape_1100.setTransform(678.125,97.8);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#002277").s().p("AgtA0QgSgTAAghQAAggASgTQARgTAdAAQAZAAAPAMQAPAKAFAVIgjAHQgBgKgHgGQgGgGgKAAQgMAAgIAKQgIAJAAAWQAAAXAIAKQAIAJAMABQALgBAGgFQAHgGACgOIAjAGQgFAYgPAMQgQAMgaAAQgcABgSgTg");
	this.shape_1101.setTransform(632.4,97.8);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#002277").s().p("AAcBEIAAhWIg3BWIgiAAIAAiGIAiAAIAABTIA2hTIAjAAIAACGg");
	this.shape_1102.setTransform(616.95,97.8);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#002277").s().p("AAYBEIAAg2QgVAFgKAAQgQAAgNgGQgNgIgFgKQgFgLAAgSIAAggIAkAAIAAAgQAAALACAFQACAGAHADQAGAEAJABQAJAAAMgFIAAg5IAkAAIAACGg");
	this.shape_1103.setTransform(601.275,97.8);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#002277").s().p("AhHBCIAAgaIAFAAIAJABQAIAAABgFQACgFAAgWIAAhNIB3AAIAACGIgkAAIAAhpIgwAAIAAA8QAAAXgFAJQgFAKgHADQgGADgPAAQgJAAgNgDg");
	this.shape_1104.setTransform(570.45,97.925);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#002277").s().p("AgyA7QgMgLAAgRQAAgLAFgKQAFgIAKgEQAKgFATgDQAYgFAJgEIAAgEQAAgLgFgDQgFgFgNAAQgJAAgGAEQgFADgDAKIghgGQAGgTANgKQANgKAbAAQAWABAMAFQAMAGAFAJQAEAIAAAXIAAApQAAASACAJQABAIAFAKIgjAAIgEgLIgBgEQgJAIgKAFQgKAEgMAAQgUAAgMgLgAAAAIQgPAEgFADQgHAEAAAIQAAAIAGAFQAFAGAJgBQAJAAAIgGQAHgFACgHQABgEAAgNIAAgHIgUAFg");
	this.shape_1105.setTransform(548.525,97.8);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#002277").s().p("AgxAvQgNgSAAgcQAAghASgTQARgTAbAAQAdAAARAVQASATgBAoIhYAAQAAAQAIAJQAIAJAMAAQAIAAAGgEQAGgGACgJIAkAGQgHATgPALQgOAKgXgBQgiAAgRgXgAgRgiQgIAJAAAPIA1AAQgBgQgHgIQgIgIgLAAQgLAAgHAIg");
	this.shape_1106.setTransform(728.6777,66.75);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#002277").s().p("AgiA+QgRgIgJgRQgJgQAAgWQAAgSAJgQQAJgRAQgJQAQgIATgBQAfAAATAVQAUATAAAeQAAAegUAVQgUATgeAAQgSAAgQgIgAgWgdQgKAKAAATQAAAUAKALQAJALANAAQAOAAAKgLQAJgLAAgUQAAgTgJgKQgKgLgOAAQgNAAgJALg");
	this.shape_1107.setTransform(656.25,66.75);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#002277").s().p("AgtA0QgRgTAAghQAAggARgTQASgTAdAAQAZAAAOAMQAPAKAFAVIgiAHQgCgKgGgGQgHgGgKAAQgMAAgIAKQgIAJAAAWQAAAXAIAKQAIAJANABQAKgBAHgFQAGgGADgOIAjAGQgGAYgQAMQgPAMgaAAQgdABgRgTg");
	this.shape_1108.setTransform(622,66.75);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#002277").s().p("AgiA+QgRgIgJgRQgJgQAAgWQAAgSAJgQQAJgRAQgJQAQgIATgBQAfAAATAVQAUATAAAeQAAAegUAVQgUATgeAAQgSAAgQgIgAgXgdQgJAKAAATQAAAUAJALQAKALANAAQAOAAAKgLQAJgLAAgUQAAgTgJgKQgKgLgOAAQgNAAgKALg");
	this.shape_1109.setTransform(606.65,66.75);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#002277").s().p("AAkBdIAAiaIhIAAIAACaIglAAIAAi5ICTAAIAAC5g");
	this.shape_1110.setTransform(589.3,64.2);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f().s("#000000").ss(3,1,1).p("EADOgmqIAAVYEgAIgmqIAAVJEgDhgmqIAAVeARhDbIVKgDARli8IVGgCAR0AIIU3gDEAZ5gmqIugZIEASmgmqIsuWBEAWegmqIthXaEAmrgSMI1wMkEAmrgZtI5AOcEAmrgV9I3HNWEgmqgaCIZZOlEgmqgWDIXWNbEgmqgSnIWGMtEgmqAAPIVGgCEgmqADiIVagCEgmdgC1IVHgCAjhRUIAAVXAgIRpIAAVCADORXIAAVUEAS2AmrIst2AEAWmAmrItg3YArdNaIunZRAouPYItdXTAmBQoIsuWDEAaWAmrIun5UAvHJHI3jNnAwiGMI2IMyAtILvI5iOwAolvUItf3WAlmwpIsu2BArQtcIuk5OAQ5F2IVyMhAPaJBIXRNXANpLcIY1OR");
	this.shape_1111.setTransform(270.9905,302.8304,1.0101,1.0101);

	this.BtnAstODEq = new lib.equal();
	this.BtnAstODEq.name = "BtnAstODEq";
	this.BtnAstODEq.setTransform(593.75,522.4,0.8886,0.8889);
	new cjs.ButtonHelper(this.BtnAstODEq, 0, 1, 2);

	this.BtnAstODNotEq = new lib.notequal();
	this.BtnAstODNotEq.name = "BtnAstODNotEq";
	this.BtnAstODNotEq.setTransform(723.85,522.4,0.8886,0.8889);
	new cjs.ButtonHelper(this.BtnAstODNotEq, 0, 1, 2);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#002277").s().p("AASBEIgSgnQgFgMgEgDQgDgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBADgEQAEgFAEgPQAHgUAIgFQAJgGAMAAIAPABIAAAXQgPAAgDADQgEADgEAOQgHASgLAFQAQADAMAZIABADIAUAlg");
	this.shape_1112.setTransform(730.85,308.675);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#002277").s().p("AgiA+QgRgIgJgQQgIgRAAgWQAAgSAIgQQAJgRAQgIQAQgJATAAQAegBAUAVQATATAAAeQAAAfgTATQgUAVgegBQgSABgQgJgAgWgeQgKALAAATQAAAUAKALQAJAKANAAQAOAAAJgKQAKgLAAgUQAAgTgKgLQgJgLgOABQgNgBgJALg");
	this.shape_1113.setTransform(699.85,308.7);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#002277").s().p("AASBEIgSgnQgFgMgEgDQgDgEgIAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBADgEQAEgFAEgPQAHgUAIgFQAJgGAMAAIAPABIAAAXQgPAAgDADQgEADgEAOQgHASgLAFQAQADAMAZIABADIAUAlg");
	this.shape_1114.setTransform(670.55,308.675);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#002277").s().p("AgPA1QgPgRgCgVIgcAAIAAA0IgkAAIAAiGIAkAAIAAA3IAcAAQADgaARgQQAQgPAcAAQAcAAASASQATATAAAhQAAAUgHAQQgHAPgOAJQgOAJgWAAQghAAgPgRgAAKggQgHAKAAAUQAAAaAHAJQAIAKAOgBQAOAAAHgKQAHgLAAgUQAAgZgIgIQgHgKgOABQgOAAgHAJg");
	this.shape_1115.setTransform(645.275,308.7);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#002277").s().p("Ag5BdIgDgcQAJACAGAAQANAAAGgIQAGgHADgLIgziHIAlAAIAgBfIAfhfIAlAAIgvCBIgJAYIgJASQgEAGgFAEQgFAEgIACQgIACgKAAQgLAAgKgCg");
	this.shape_1116.setTransform(626.425,311.425);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#002277").s().p("Ag5BdIgDgcQAJACAGAAQANAAAGgIQAGgHADgLIgziHIAlAAIAgBfIAfhfIAlAAIgvCBIgJAYIgJASQgEAGgFAEQgFAEgIACQgIACgKAAQgLAAgKgCg");
	this.shape_1117.setTransform(577.825,311.425);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#002277").s().p("AgyA7QgMgLAAgRQAAgMAFgIQAFgKAKgEQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAEgDAKIghgGQAGgTANgKQANgKAbABQAWAAAMAFQAMAGAFAJQAEAJAAAWIAAApQAAASACAJQABAIAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUAAgMgLgAAAAIQgPADgFADQgHAFAAAIQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_1118.setTransform(721.525,277.65);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#002277").s().p("AgxAwQgNgTAAgcQAAggASgTQARgUAbABQAdgBARAVQASATgBApIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgEQAGgFACgLIAkAHQgHATgPAKQgOAKgXAAQgiAAgRgWgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_1119.setTransform(684.0277,277.65);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#002277").s().p("AgQBDIAAhpIgsAAIAAgdIB5AAIAAAdIgrAAIAABpg");
	this.shape_1120.setTransform(670.5,277.65);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#002277").s().p("AAbBDIAAhVIg2BVIgiAAIAAiGIAiAAIAABUIA2hUIAjAAIAACGg");
	this.shape_1121.setTransform(656.15,277.65);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#002277").s().p("AAwBDIAAhXIghBXIgeAAIgfhXIAABXIgfAAIAAiGIAtAAIAgBdIAihdIAsAAIAACGg");
	this.shape_1122.setTransform(638.625,277.65);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#002277").s().p("AgyA7QgMgLAAgRQAAgMAFgIQAFgKAKgEQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAEgDAKIghgGQAGgTANgKQANgKAbABQAWAAAMAFQAMAGAFAJQAEAJAAAWIAAApQAAASACAJQABAIAFAJIgjAAIgEgKIgBgEQgJAJgKAEQgKAFgMgBQgUAAgMgLgAAAAIQgPADgFADQgHAFAAAIQAAAIAGAFQAFAGAJAAQAJAAAIgHQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_1123.setTransform(603.275,277.65);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#002277").s().p("AAlBdIAAhSIhJAAIAABSIgmAAIAAi5IAmAAIAABJIBJAAIAAhJIAmAAIAAC5g");
	this.shape_1124.setTransform(586.55,275.1);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#990000").s().p("AgQBeIAAgjIAiAAIAAAjgAgQAuIAAgJQAAgPAFgKQAFgLAPgLQAPgNADgEQAFgGAAgHQAAgLgIgHQgJgIgOAAQgMAAgJAIQgKAIgDAPIghgDQACgYASgPQASgQAcAAQAeAAATAQQASAQAAAWQAAALgHALQgHALgVAQQgMAKgCAFQgDAHAAAOg");
	this.shape_1125.setTransform(761.625,202.3);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAghASgSQARgTAbAAQAdAAARATQASAVgBAoIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAGQgHAUgPAKQgOALgXAAQgiAAgRgYgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_1126.setTransform(746.2777,204.95);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#990000").s().p("AA5BDIAAiGIAkAAIAACGgAhcBDIAAiGIAkAAIAAA4IAkAAQAUABAKADQAMACAHAJQAIALAAAOQAAATgNAJQgOALgagBgAg4AtIAgAAQANAAAGgEQAGgEgBgJQAAgKgGgEQgIgDgUAAIgWAAg");
	this.shape_1127.setTransform(728.15,204.95);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#990000").s().p("Ag5AhIAhgGQAHAUASAAQAJAAAHgGQAGgFAAgHQAAgIgHgEQgGgFgKAAIgFAAIAAgWIAMgBQAFgBADgFQAEgFAAgFQAAgHgFgGQgEgFgJAAQgHAAgFADQgGADgFAMIgdgHQAEgRAPgJQAPgKASABQAYAAAOALQANALAAARQAAALgFAGQgGAHgMAGQAOADAIAIQAHAJAAAMQAAAQgPALQgOAMgcAAQgvAAgLgmg");
	this.shape_1128.setTransform(694.45,204.95);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#990000").s().p("AgyA7QgMgLAAgSQAAgKAFgJQAFgJAKgFQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWgBAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_1129.setTransform(681.175,204.95);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgIgQAAgXQAAgSAIgQQAJgRAQgIQAQgKATABQAeAAAUATQATAUAAAeQAAAfgTATQgUAVgeAAQgSAAgQgJgAgXgeQgJALAAATQAAAUAJALQAKAKANAAQAOAAAJgKQAKgLAAgUQAAgTgKgLQgJgKgOgBQgNABgKAKg");
	this.shape_1130.setTransform(611.2,204.95);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#990000").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_1131.setTransform(588,204.95);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#990000").s().p("AhIBCIAAgaIAGAAIAJABQAHAAACgFQACgFAAgWIAAhNIB3AAIAACGIgkAAIAAhpIgwAAIAAA8QAAAXgFAJQgGAKgGADQgHADgOAAQgJAAgOgDg");
	this.shape_1132.setTransform(571.05,205.075);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#990000").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_1133.setTransform(555.5,204.95);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAghASgSQARgTAbAAQAdAAARATQASAVgBAoIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAGQgHAUgPAKQgOALgXAAQgiAAgRgYgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_1134.setTransform(773.8277,173.9);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#990000").s().p("AA6BDIAAiGIAjAAIAACGgAhcBDIAAiGIAkAAIAAA4IAkAAQAUABAKADQAMACAHAJQAIALAAAOQAAATgNAJQgOALgagBgAg4AtIAgAAQANAAAHgEQAEgEAAgJQAAgKgGgEQgIgDgUAAIgWAAg");
	this.shape_1135.setTransform(755.7,173.9);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAghASgSQARgTAbAAQAdAAARATQASAVgBAoIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAGQgHAUgPAKQgOALgXAAQgiAAgRgYgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_1136.setTransform(702.2277,173.9);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgJgQABgXQgBgSAJgQQAJgRAQgIQAQgKATABQAfAAATATQAUAUgBAeQABAfgUATQgUAVgeAAQgSAAgQgJgAgWgeQgKALAAATQAAAUAKALQAJAKANAAQAOAAAJgKQAKgLAAgUQAAgTgKgLQgJgKgOgBQgNABgJAKg");
	this.shape_1137.setTransform(667.25,173.9);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#990000").s().p("AhABDIAAiGIBNAAQAYABAMAIQAMAJAAASQAAALgHAIQgGAJgKADQAOACAHAKQAGAJAAALQAAAQgLAJQgMALgWgBgAgcAtIAcAAQAOAAAHgEQAHgDAAgKQAAgKgIgEQgIgDgWAAIgSAAgAgcgLIAXAAQAPAAAIgEQAHgEAAgIQAAgJgHgEQgHgEgQABIgXAAg");
	this.shape_1138.setTransform(651.675,173.9);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgJgQAAgXQAAgSAJgQQAJgRAQgIQAQgKATABQAfAAATATQATAUABAeQgBAfgTATQgUAVgeAAQgRAAgRgJgAgXgeQgJALAAATQAAAUAJALQAKAKANAAQAOAAAKgKQAJgLAAgUQAAgTgJgLQgKgKgOgBQgNABgKAKg");
	this.shape_1139.setTransform(635.35,173.9);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#990000").s().p("AASBEIgSgnQgFgMgDgDQgFgEgHAAIAAA6IgjAAIAAiGIAjAAIAAA3QAJgBAEgEQADgFAFgPQAGgUAIgFQAJgGANAAIANABIABAXQgPAAgDADQgEADgEAOQgHASgLAFQAQADAMAZIACADIATAlg");
	this.shape_1140.setTransform(621.75,173.875);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#990000").s().p("AgyA7QgMgLAAgSQAAgKAFgJQAFgJAKgFQAKgEATgEQAYgEAJgFIAAgDQAAgKgFgFQgFgEgNAAQgJAAgGADQgFAFgDAJIghgGQAGgUANgJQANgJAbAAQAWgBAMAHQAMAFAFAIQAEAKAAAXIAAAoQAAASACAIQABAJAFAJIgjAAIgEgKIgBgEQgJAIgKAFQgKAFgMAAQgUAAgMgMgAAAAIQgPADgFADQgHAGAAAHQAAAHAGAGQAFAFAJABQAJgBAIgGQAHgFACgGQABgGAAgMIAAgHIgUAFg");
	this.shape_1141.setTransform(607.175,173.9);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#990000").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_1142.setTransform(592.075,173.9);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#990000").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_1143.setTransform(576.2,173.9);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#990000").s().p("AAzBVIAAgjIhlAAIAAAjIgdAAIAAhAIAOAAQAKgLAGgUQAGgWABg0IBsAAIAABpIAOAAIAABAgAgdAVIA8AAIAAhMIgqAAQgDA3gPAVg");
	this.shape_1144.setTransform(559.6,175.675);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#990000").s().p("AgiA+QgRgIgJgQQgIgQgBgXQABgSAIgQQAJgRAQgIQAQgKATABQAeAAAUATQATAUAAAeQAAAfgTATQgUAVgeAAQgRAAgRgJgAgXgeQgJALAAATQAAAUAJALQAKAKANAAQAOAAAJgKQAKgLAAgUQAAgTgKgLQgJgKgOgBQgNABgKAKg");
	this.shape_1145.setTransform(543.8,173.9);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#990000").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_1146.setTransform(718.05,142.85);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#990000").s().p("AAZBDIAAg4IgyAAIAAA4IgjAAIAAiGIAjAAIAAAyIAyAAIAAgyIAkAAIAACGg");
	this.shape_1147.setTransform(686.225,142.85);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#990000").s().p("AAcBDIAAhUIg3BUIgiAAIAAiGIAiAAIAABVIA2hVIAjAAIAACGg");
	this.shape_1148.setTransform(670.35,142.85);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#990000").s().p("AhIBCIAAgaIAGAAIAJABQAHAAACgFQACgFAAgWIAAhNIB3AAIAACGIgkAAIAAhpIgwAAIAAA8QAAAXgFAJQgGAKgGADQgHADgOAAQgJAAgOgDg");
	this.shape_1149.setTransform(653.4,142.975);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#990000").s().p("AgxAvQgNgSAAgcQAAghASgTQARgSAbAAQAdAAARATQASAVgBAoIhYAAQAAAPAIAJQAIAJAMAAQAIAAAGgFQAGgEACgLIAkAGQgHAUgPAKQgOALgXAAQgiAAgRgYgAgRghQgIAIAAAOIA1AAQgBgPgHgIQgIgIgLAAQgLAAgHAJg");
	this.shape_1150.setTransform(631.3277,142.85);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#990000").s().p("AgtA0QgSgTAAghQAAggASgTQARgSAdAAQAZgBAPALQAPALAFAWIgjAGQgBgKgHgGQgGgFgKgBQgMAAgIAKQgIAJAAAVQAAAXAIAKQAIAKANAAQAKABAGgGQAHgGACgOIAjAGQgFAYgPAMQgQANgaAAQgcgBgSgSg");
	this.shape_1151.setTransform(617.2,142.85);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#990000").s().p("AhNBdIAAi5IBKAAQAWAAALACQAKACAJAFQAIAGAGAKQAGAJAAAMQAAAOgHALQgIALgMAFQARAFAKALQAJAMAAAQQAAAMgGANQgGAMgKAHQgLAHgOACIgsABgAgnA9IAjAAQASAAAGgBQAIgBAGgGQAFgGAAgJQAAgJgEgGQgEgGgIgDQgIgCgYAAIgeAAgAgngSIAZAAIAagBQAJgBAGgGQAFgFAAgJQAAgIgFgGQgEgGgJAAIgggBIgVAAg");
	this.shape_1152.setTransform(600.65,140.3);

	this.BtnAstOS = new lib.КнопкаBtnNext1небесная();
	this.BtnAstOS.name = "BtnAstOS";
	this.BtnAstOS.setTransform(400,545);
	new cjs.ButtonHelper(this.BtnAstOS, 0, 1, 2);

	this.BtnAstOSEq = new lib.equal();
	this.BtnAstOSEq.name = "BtnAstOSEq";
	this.BtnAstOSEq.setTransform(593.75,522.4,0.8886,0.8889);
	new cjs.ButtonHelper(this.BtnAstOSEq, 0, 1, 2);

	this.BtnAstOSNotEq = new lib.notequal();
	this.BtnAstOSNotEq.name = "BtnAstOSNotEq";
	this.BtnAstOSNotEq.setTransform(723.85,522.4,0.8886,0.8889);
	new cjs.ButtonHelper(this.BtnAstOSNotEq, 0, 1, 2);

	this.messageOK = new lib.messageOK();
	this.messageOK.name = "messageOK";
	this.messageOK.setTransform(403.05,495.95,1,1,0,0,0,333.3,14.3);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#002277").s().p("AgNA0IAAhRIghAAIAAgWIBdAAIAAAWIgiAAIAABRg");
	this.shape_1153.setTransform(248.85,281.175);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#002277").s().p("AgiAoQgOgPAAgZQAAgZAOgOQANgOAWAAQATAAAMAIQALAIAFARIgcAFQgBgJgFgEQgFgEgHAAQgKAAgGAHQgGAHAAARQAAARAHAIQAGAIAJAAQAIAAAFgFQAFgEACgLIAbAFQgEASgMAKQgMAJgUAAQgWAAgNgOg");
	this.shape_1154.setTransform(238.575,281.175);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#002277").s().p("AglAkQgKgOAAgVQAAgZANgPQAOgOAUAAQAWAAAOAPQANAPgBAfIhDAAQAAAMAGAHQAHAHAIAAQAHAAAEgEQAEgDADgIIAbAEQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgaQgGAHAAALIAoAAQAAgMgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_1155.setTransform(227.2284,281.175);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#002277").s().p("AgNA0IAAhRIghAAIAAgWIBdAAIAAAWIgiAAIAABRg");
	this.shape_1156.setTransform(216.85,281.175);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#002277").s().p("AAWBJIAAhCIgqBCIgbAAIAAhmIAbAAIAABAIAphAIAbAAIAABmgAgTgzQgIgIgBgNIANAAQABAHAEADQAEAEAHABQAIgBAEgEQAEgDABgHIAOAAQgCANgIAIQgIAHgNAAQgMAAgIgHg");
	this.shape_1157.setTransform(200.225,279.05);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#002277").s().p("AAtA0IAAhnIAbAAIAABngAhGA0IAAhnIAbAAIAAArIAcAAQAPAAAJACQAIADAGAGQAFAIABALQAAAPgKAHQgLAIgUAAgAgrAiIAaAAQAJAAAFgDQADgDABgHQAAgHgGgDQgFgDgPAAIgSAAg");
	this.shape_1158.setTransform(185.6,281.175);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#002277").s().p("AATA0IAAgsIgmAAIAAAsIgbAAIAAhnIAbAAIAAAmIAmAAIAAgmIAcAAIAABng");
	this.shape_1159.setTransform(170.95,281.175);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#002277").s().p("AAlA0IAAhEIgaBEIgXAAIgXhEIAABEIgYAAIAAhnIAiAAIAZBHIAahHIAiAAIAABng");
	this.shape_1160.setTransform(157.6,281.175);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#002277").s().p("AgaAwQgNgHgHgMQgGgNgBgRQABgNAGgNQAHgNANgHQALgGAPAAQAXAAAPAPQAPAPAAAXQAAAXgPAQQgPAPgXAAQgNAAgNgGgAgRgXQgIAIAAAPQAAAPAIAJQAHAIAKAAQALAAAHgIQAHgJABgPQgBgPgHgIQgHgIgLAAQgKAAgHAIg");
	this.shape_1161.setTransform(144.05,281.175);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#002277").s().p("AgxBJIAAiOIAZAAIAAAPQAFgIAIgFQAJgFAJAAQASAAANAOQANAPAAAZQAAAZgNAOQgNAPgSAAQgIAAgGgEQgIgDgHgJIAAA1gAgQgqQgGAHAAAQQAAARAGAIQAIAIAIAAQAKAAAGgIQAHgHAAgRQAAgQgHgIQgHgIgJAAQgJAAgHAIg");
	this.shape_1162.setTransform(132.1,283.025);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#002277").s().p("AAUA0IgUggIgVAgIggAAIAlg1IgkgyIAiAAIASAdIATgdIAgAAIgjAxIAmA2g");
	this.shape_1163.setTransform(120.125,281.175);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#002277").s().p("AgaAwQgNgHgHgMQgHgNABgRQgBgNAHgNQAHgNANgHQALgGAPAAQAYAAAPAPQAPAPAAAXQAAAXgPAQQgQAPgXAAQgNAAgNgGgAgRgXQgHAIAAAPQAAAPAHAJQAIAIAJAAQALAAAHgIQAIgJgBgPQABgPgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_1164.setTransform(108.55,281.175);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#002277").s().p("AgrBHIgDgVIAMABQAJAAAFgGQAFgFACgJIgnhnIAdAAIAYBJIAYhJIAcAAIgkBjIgHASIgHAOQgDAFgDADQgFADgGABQgGACgIAAQgIAAgHgCg");
	this.shape_1165.setTransform(96.775,283.275);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#002277").s().p("AAtBXIAAgfIhZAAIAAAfIgYAAIAAg3IAMAAQAJgTADgXQACgYABglIAAgPIBhAAIAAB2IANAAIAAA3gAgZAgIA1AAIAAheIgqAAQAABAgLAeg");
	this.shape_1166.setTransform(83.9,280.775);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#002277").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_1167.setTransform(68.775,284.975);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#002277").s().p("AgvBIQABgPAJgNQAHgNAXgVQASgQAEgGQAFgJAAgIQAAgJgEgFQgFgFgJAAQgIAAgEAFQgGAFAAAMIgcgDQADgWANgKQAMgKATAAQAVAAAMALQAMAMAAARQAAAKgDAIQgEAJgHAJIgSASIgQAQIgGAHIA2AAIAAAag");
	this.shape_1168.setTransform(60.15,279.175);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#002277").s().p("AgmAtQgKgIAAgOQAAgIAFgHQAEgHAHgDQAIgDAOgDQASgEAIgDIAAgDQAAgIgEgDQgEgDgKAAQgHAAgEADQgEACgDAIIgZgFQAEgPALgHQAKgHAUAAQARAAAJAEQAJAEAEAHQAEAHAAASIgBAfQAAANACAHQABAGAEAIIgbAAIgDgIIgBgEQgHAHgIAEQgHADgJAAQgQAAgJgJgAAAAGQgLADgEACQgFAEAAAGQAAAFAEAFQAEAEAHAAQAGAAAHgFQAFgEACgFIABgOIAAgFIgQAEg");
	this.shape_1169.setTransform(208.725,327.175);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#002277").s().p("AgxBJIAAiOIAZAAIAAAPQAFgIAIgFQAJgFAJAAQASAAANAOQANAPAAAZQAAAZgNAOQgNAPgSAAQgIAAgGgEQgIgDgHgJIAAA1gAgQgqQgGAHAAAQQAAARAGAIQAIAIAIAAQAKAAAGgIQAHgHAAgRQAAgQgHgIQgHgIgJAAQgJAAgHAIg");
	this.shape_1170.setTransform(197.35,329.025);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#002277").s().p("AglAkQgKgOAAgVQAAgZANgPQAOgOAUAAQAWAAAOAPQANAPgBAfIhDAAQAAAMAGAHQAHAHAIAAQAHAAAEgEQAEgDADgIIAbAEQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgaQgGAHAAALIAoAAQAAgMgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_1171.setTransform(185.3284,327.175);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#002277").s().p("Ag3AzIAAgUIAFAAIAGAAQAGAAABgEQACgDAAgRIAAg7IBaAAIAABnIgbAAIAAhRIgkAAIAAAuQAAASgEAHQgEAHgFACQgFADgLAAQgHAAgLgCg");
	this.shape_1172.setTransform(172.95,327.275);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#002277").s().p("AgiAoQgOgPAAgZQAAgZAOgOQANgOAWAAQATAAAMAIQALAIAFARIgcAFQgBgJgFgEQgFgEgHAAQgKAAgGAHQgGAHAAARQAAARAHAIQAGAIAJAAQAIAAAFgFQAFgEACgLIAbAFQgEASgMAKQgMAJgUAAQgWAAgNgOg");
	this.shape_1173.setTransform(161.775,327.175);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#002277").s().p("AAkA0IAAhEIgZBEIgWAAIgZhEIAABEIgXAAIAAhnIAiAAIAZBHIAahHIAiAAIAABng");
	this.shape_1174.setTransform(148.75,327.175);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#002277").s().p("AAoBIIgMghIg4AAIgMAhIgfAAIA4iOIAeAAIA5COgAgTAPIAmAAIgTg0g");
	this.shape_1175.setTransform(133.975,325.2);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#002277").s().p("AgMA0IAAhRIgiAAIAAgWIBdAAIAAAWIghAAIAABRg");
	this.shape_1176.setTransform(116.35,327.175);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#002277").s().p("AgiAoQgOgPAAgZQAAgZAOgOQANgOAWAAQATAAAMAIQALAIAFARIgcAFQgBgJgFgEQgFgEgHAAQgKAAgGAHQgGAHAAARQAAARAHAIQAGAIAJAAQAIAAAFgFQAFgEACgLIAbAFQgEASgMAKQgMAJgUAAQgWAAgNgOg");
	this.shape_1177.setTransform(106.075,327.175);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#002277").s().p("AglAkQgKgOAAgVQAAgZANgPQAOgOAUAAQAWAAAOAPQANAPgBAfIhDAAQAAAMAGAHQAHAHAIAAQAHAAAEgEQAEgDADgIIAbAEQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgaQgGAHAAALIAoAAQAAgMgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_1178.setTransform(94.7284,327.175);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#002277").s().p("AgNBIIAAh2IgrAAIAAgYIBxAAIAAAYIgrAAIAAB2g");
	this.shape_1179.setTransform(83.175,325.2);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#002277").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_1180.setTransform(68.775,330.975);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#002277").s().p("AggA+QgNgMgBgRIAagEQACALAFAFQAFAFAIAAQAIAAAGgGQAGgHgBgKQABgLgGgGQgFgGgJAAQgEAAgHACIADgWQAKABAGgFQAGgGAAgIQgBgHgEgEQgEgFgGAAQgHAAgFAFQgFAFgBAJIgagEQADgNAGgHQAFgJAKgEQAJgEAMAAQATAAAMAMQAKALAAAOQAAASgVALQANADAIAJQAGAIAAANQAAATgNAOQgOANgUAAQgTAAgNgLg");
	this.shape_1181.setTransform(60.35,325.3);

	this.Astig_OD = new cjs.Text("", "bold 18px 'Arial'", "#002277");
	this.Astig_OD.name = "Astig_OD";
	this.Astig_OD.textAlign = "center";
	this.Astig_OD.lineHeight = 22;
	this.Astig_OD.lineWidth = 214;
	this.Astig_OD.parent = this;
	this.Astig_OD.setTransform(431.85,360.25);

	this.Amsler_OS = new cjs.Text("", "bold 18px 'Arial'", "#002277");
	this.Amsler_OS.name = "Amsler_OS";
	this.Amsler_OS.textAlign = "center";
	this.Amsler_OS.lineHeight = 22;
	this.Amsler_OS.lineWidth = 214;
	this.Amsler_OS.parent = this;
	this.Amsler_OS.setTransform(651.85,314.25);

	this.Amsler_OD = new cjs.Text("", "bold 18px 'Arial'", "#002277");
	this.Amsler_OD.name = "Amsler_OD";
	this.Amsler_OD.textAlign = "center";
	this.Amsler_OD.lineHeight = 22;
	this.Amsler_OD.lineWidth = 214;
	this.Amsler_OD.parent = this;
	this.Amsler_OD.setTransform(431.85,314.25);

	this.Color_OS = new cjs.Text("", "bold 18px 'Arial'", "#002277");
	this.Color_OS.name = "Color_OS";
	this.Color_OS.textAlign = "center";
	this.Color_OS.lineHeight = 22;
	this.Color_OS.lineWidth = 214;
	this.Color_OS.parent = this;
	this.Color_OS.setTransform(651.2,268.25);

	this.Color_OD = new cjs.Text("", "bold 18px 'Arial'", "#002277");
	this.Color_OD.name = "Color_OD";
	this.Color_OD.textAlign = "center";
	this.Color_OD.lineHeight = 22;
	this.Color_OD.lineWidth = 214;
	this.Color_OD.parent = this;
	this.Color_OD.setTransform(431.2,268.25);

	this.Vis_OS = new cjs.Text("", "bold 18px 'Arial'", "#002277");
	this.Vis_OS.name = "Vis_OS";
	this.Vis_OS.textAlign = "center";
	this.Vis_OS.lineHeight = 22;
	this.Vis_OS.lineWidth = 214;
	this.Vis_OS.parent = this;
	this.Vis_OS.setTransform(651.2,220.25);

	this.Vis_OD = new cjs.Text("", "bold 18px 'Arial'", "#002277");
	this.Vis_OD.name = "Vis_OD";
	this.Vis_OD.textAlign = "center";
	this.Vis_OD.lineHeight = 22;
	this.Vis_OD.lineWidth = 214;
	this.Vis_OD.parent = this;
	this.Vis_OD.setTransform(431.2,220.25);

	this.MessageBAD = new lib.MessageBAD();
	this.MessageBAD.name = "MessageBAD";
	this.MessageBAD.setTransform(278.35,469.3,1,1,0,0,0,225.5,34.1);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#002277").s().p("AAlA0IAAhEIgaBEIgXAAIgXhEIAABEIgYAAIAAhnIAiAAIAZBHIAahHIAiAAIAABng");
	this.shape_1182.setTransform(273,373.175);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#002277").s().p("AgsAZIAZgEQAGAPANAAQAIAAAFgEQAEgEAAgGQAAgGgEgDQgFgEgIAAIgDAAIAAgRIAJgBQADgBADgDQACgEABgEQgBgFgDgEQgDgEgIAAQgEAAgFACQgDACgEAJIgXgFQADgOALgGQAMgHAOAAQASAAALAIQAKAJAAANQAAAIgEAFQgFAGgJAEQAMACAFAHQAFAGAAAKQABAMgLAIQgMAJgVAAQgkAAgJgdg");
	this.shape_1183.setTransform(260.25,373.175);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#002277").s().p("AAWA0IAAhCIgqBCIgbAAIAAhnIAbAAIAABAIAphAIAbAAIAABng");
	this.shape_1184.setTransform(249.375,373.175);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#002277").s().p("AgNA0IAAhRIghAAIAAgWIBdAAIAAAWIgiAAIAABRg");
	this.shape_1185.setTransform(238.35,373.175);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#002277").s().p("AgmAtQgKgIAAgOQAAgIAFgHQAEgHAHgDQAIgDAOgDQASgEAIgDIAAgDQAAgIgEgDQgEgDgKAAQgHAAgEADQgEACgDAIIgZgFQAEgPALgHQAKgHAUAAQARAAAJAEQAJAEAEAHQAEAHAAASIgBAfQAAANACAHQABAGAEAIIgbAAIgDgIIgBgEQgHAHgIAEQgHADgJAAQgQAAgJgJgAAAAGQgLADgEACQgFAEAAAGQAAAFAEAFQAEAEAHAAQAGAAAHgFQAFgEACgFIABgOIAAgFIgQAEg");
	this.shape_1186.setTransform(227.925,373.175);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#002277").s().p("AAkA0IAAhEIgZBEIgWAAIgYhEIAABEIgYAAIAAhnIAiAAIAZBHIAahHIAiAAIAABng");
	this.shape_1187.setTransform(215.05,373.175);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#002277").s().p("AgiA0IAAhnIBFAAIAAAWIgqAAIAABRg");
	this.shape_1188.setTransform(204.05,373.175);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#002277").s().p("AAWA0IAAhCIgqBCIgbAAIAAhnIAbAAIAABAIAphAIAbAAIAABng");
	this.shape_1189.setTransform(193.025,373.175);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#002277").s().p("AgNA0IAAhRIghAAIAAgWIBdAAIAAAWIgiAAIAABRg");
	this.shape_1190.setTransform(182,373.175);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#002277").s().p("AgiAoQgOgPAAgZQAAgZAOgOQANgOAWAAQATAAAMAIQALAIAFARIgcAFQgBgJgFgEQgFgEgHAAQgKAAgGAHQgGAHAAARQAAARAHAIQAGAIAJAAQAIAAAFgFQAFgEACgLIAbAFQgEASgMAKQgMAJgUAAQgWAAgNgOg");
	this.shape_1191.setTransform(171.725,373.175);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#002277").s().p("AgmAtQgKgIAAgOQAAgIAFgHQAEgHAHgDQAIgDAOgDQASgEAIgDIAAgDQAAgIgEgDQgEgDgKAAQgHAAgEADQgEACgDAIIgZgFQAEgPALgHQAKgHAUAAQARAAAJAEQAJAEAEAHQAEAHAAASIgBAfQAAANACAHQABAGAEAIIgbAAIgDgIIgBgEQgHAHgIAEQgHADgJAAQgQAAgJgJgAAAAGQgLADgEACQgFAEAAAGQAAAFAEAFQAEAEAHAAQAGAAAHgFQAFgEACgFIABgOIAAgFIgQAEg");
	this.shape_1192.setTransform(160.475,373.175);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#002277").s().p("AgmAtQgKgIAAgOQAAgIAFgHQAEgHAHgDQAIgDAOgDQASgEAIgDIAAgDQAAgIgEgDQgEgDgKAAQgHAAgEADQgEACgDAIIgZgFQAEgPALgHQAKgHAUAAQARAAAJAEQAJAEAEAHQAEAHAAASIgBAfQAAANACAHQABAGAEAIIgbAAIgDgIIgBgEQgHAHgIAEQgHADgJAAQgQAAgJgJgAAAAGQgLADgEACQgFAEAAAGQAAAFAEAFQAEAEAHAAQAGAAAHgFQAFgEACgFIABgOIAAgFIgQAEg");
	this.shape_1193.setTransform(143.825,373.175);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#002277").s().p("AAUA0IAAgsIgnAAIAAAsIgbAAIAAhnIAbAAIAAAmIAnAAIAAgmIAbAAIAABng");
	this.shape_1194.setTransform(132.2,373.175);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#002277").s().p("AgMA0IAAhRIgiAAIAAgWIBdAAIAAAWIghAAIAABRg");
	this.shape_1195.setTransform(115.7,373.175);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#002277").s().p("AgiAoQgOgPAAgZQAAgZAOgOQANgOAWAAQATAAAMAIQALAIAFARIgcAFQgBgJgFgEQgFgEgHAAQgKAAgGAHQgGAHAAARQAAARAHAIQAGAIAJAAQAIAAAFgFQAFgEACgLIAbAFQgEASgMAKQgMAJgUAAQgWAAgNgOg");
	this.shape_1196.setTransform(105.425,373.175);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#002277").s().p("AglAkQgKgOAAgVQAAgZANgPQAOgOAUAAQAWAAAOAPQANAPgBAfIhDAAQAAAMAGAHQAHAHAIAAQAHAAAEgEQAEgDADgIIAbAEQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgaQgGAHAAALIAoAAQAAgMgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_1197.setTransform(94.0784,373.175);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#002277").s().p("AgNBIIAAh2IgrAAIAAgZIBxAAIAAAZIgrAAIAAB2g");
	this.shape_1198.setTransform(82.525,371.2);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#002277").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_1199.setTransform(68.125,376.975);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#002277").s().p("AAIBIIAAgdIg7AAIAAgYIA+haIAXAAIAABaIASAAIAAAYIgSAAIAAAdgAgZATIAhAAIAAgwg");
	this.shape_1200.setTransform(59.7,371.175);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#002277").s().p("AAZA0IAAgrIgDAAQgJAAgEACQgEACgFAIIgBACIgSAdIggAAIAUgeQAIgNAHgCQgLgBgIgHQgHgIAAgMQAAgLAFgHQAFgHAIgCQAHgDAQAAIA1AAIAABngAgJgeQgFADAAAHQAAAHAFADQAFADALAAIASAAIAAgaIgUAAQgKAAgEADg");
	this.shape_1201.setTransform(227.125,233.175);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#002277").s().p("AAWA0IAAhCIgqBCIgbAAIAAhnIAbAAIAABAIAphAIAbAAIAABng");
	this.shape_1202.setTransform(215.825,233.175);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#002277").s().p("AATA0IAAgsIgmAAIAAAsIgbAAIAAhnIAbAAIAAAmIAmAAIAAgmIAcAAIAABng");
	this.shape_1203.setTransform(203.65,233.175);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#002277").s().p("AglAkQgKgOAAgVQAAgZANgPQAOgOAUAAQAWAAAOAPQANAPgBAfIhDAAQAAAMAGAHQAHAHAIAAQAHAAAEgEQAEgDADgIIAbAEQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgaQgGAHAAALIAoAAQAAgMgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_1204.setTransform(191.9784,233.175);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#002277").s().p("AgxBJIAAiOIAZAAIAAAPQAFgIAJgFQAIgFAJAAQASAAANAOQANAPAAAZQAAAZgNAOQgNAPgSAAQgIAAgGgEQgIgDgHgJIAAA1gAgQgqQgGAHAAAQQAAARAGAIQAIAIAIAAQAKAAAGgIQAHgHAAgRQAAgQgHgIQgHgIgJAAQgJAAgHAIg");
	this.shape_1205.setTransform(180.7,235.025);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#002277").s().p("AgrAZIAZgEQAFAPAOAAQAHAAAFgEQAEgEABgGQAAgGgGgDQgEgEgIAAIgEAAIAAgRIAJgBQAEgBADgDQACgEAAgEQAAgFgDgEQgEgEgGAAQgFAAgEACQgFACgDAJIgYgFQAEgOALgGQAMgHAOAAQATAAAKAIQAKAJAAANQAAAIgEAFQgFAGgJAEQALACAGAHQAFAGABAKQgBAMgKAIQgMAJgVAAQglAAgHgdg");
	this.shape_1206.setTransform(169.05,233.175);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#002277").s().p("AgmAtQgKgIAAgOQAAgIAFgHQAEgHAHgDQAIgDAOgDQASgEAIgDIAAgDQAAgIgEgDQgEgDgKAAQgHAAgEADQgEACgDAIIgZgFQAEgPALgHQAKgHAUAAQARAAAJAEQAJAEAEAHQAEAHAAASIgBAfQAAANACAHQABAGAEAIIgbAAIgDgIIgBgEQgHAHgIAEQgHADgJAAQgQAAgJgJgAAAAGQgLADgEACQgFAEAAAGQAAAFAEAFQAEAEAHAAQAGAAAHgFQAFgEACgFIABgOIAAgFIgQAEg");
	this.shape_1207.setTransform(153.275,233.175);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#002277").s().p("AgMA0IAAhRIgiAAIAAgWIBdAAIAAAWIghAAIAABRg");
	this.shape_1208.setTransform(142.8,233.175);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#002277").s().p("AgaAwQgNgHgHgMQgHgNABgRQgBgNAHgNQAHgNAMgHQAMgGAPAAQAYAAAPAPQAOAPAAAXQAAAXgOAQQgQAPgXAAQgNAAgNgGgAgRgXQgIAIABAPQgBAPAIAJQAIAIAJAAQALAAAHgIQAIgJgBgPQABgPgIgIQgHgIgLAAQgJAAgIAIg");
	this.shape_1209.setTransform(131.85,233.175);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#002277").s().p("AgyBJIAAiOIAaAAIAAAPQAFgIAIgFQAJgFAKAAQASAAAMAOQAMAPAAAZQAAAZgMAOQgMAPgSAAQgIAAgHgEQgIgDgHgJIAAA1gAgPgqQgIAHAAAQQAAARAIAIQAGAIAKAAQAJAAAHgIQAGgHAAgRQAAgQgGgIQgIgIgJAAQgJAAgGAIg");
	this.shape_1210.setTransform(119.9,235.025);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#002277").s().p("AgMA0IAAhRIgiAAIAAgWIBdAAIAAAWIghAAIAABRg");
	this.shape_1211.setTransform(108.6,233.175);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#002277").s().p("AgiAoQgOgPAAgZQAAgZAOgOQANgOAWAAQATAAAMAIQALAIAFARIgcAFQgBgJgFgEQgFgEgHAAQgKAAgGAHQgGAHAAARQAAARAHAIQAGAIAJAAQAIAAAFgFQAFgEACgLIAbAFQgEASgMAKQgMAJgUAAQgWAAgNgOg");
	this.shape_1212.setTransform(98.325,233.175);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#002277").s().p("AgxA2QgUgTABgiQgBgVAHgPQAFgLAJgJQAIgIAKgEQANgGARAAQAfAAAUATQASAUAAAiQAAAjgSATQgTAUggAAQgfAAgSgUgAgcgkQgLAMABAYQgBAYALAMQAMANAQAAQASAAAKgMQAMgNAAgYQAAgYgLgNQgLgMgSABQgRAAgLAMg");
	this.shape_1213.setTransform(84.85,231.2);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#002277").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_1214.setTransform(68.775,236.975);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#002277").s().p("AAEBIIAAhnQgOAOgUAHIAAgZQAKgDANgKQAMgKAEgNIAWAAIAACPg");
	this.shape_1215.setTransform(59.575,231.175);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#002277").s().p("AgwAcIAbgGQAHARAOAAQAJAAAFgEQAFgEAAgHQAAgGgFgEQgFgEgJAAIgEAAIAAgSIAKgBQAEgCADgEQADgEAAgFQAAgFgEgEQgEgFgIAAQgFAAgEADQgFACgEAKIgagGQAEgPANgHQANgHAPgBQAVAAALAKQALAJAAAPQAAAIgFAGQgFAGgKAFQANACAGAIQAGAGAAALQAAANgMAKQgNAJgXAAQgoAAgJgfg");
	this.shape_1216.setTransform(701.475,201.8);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#002277").s().p("AgqAyQgLgKAAgOQAAgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgEgMABQgIAAgEACQgFAEgCAHIgbgEQAEgRAMgIQAKgIAXAAQATABAKAEQAKAFAEAIQAEAHAAATIAAAjQAAAPABAGQABAIAEAIIgeAAIgCgJIgBgDQgIAHgJAEQgIAEgJgBQgTAAgJgJgAAAAHQgMACgFADQgFAFAAAFQAAAHAEAEQAFAGAIgBQAGAAAIgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_1217.setTransform(690.2,201.8);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHABQAGAAACgFQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhZIgoAAIAAAzQAAATgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_1218.setTransform(676.425,201.9);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#002277").s().p("AgmA5IAAhxIBMAAIAAAYIgtAAIAABZg");
	this.shape_1219.setTransform(666.2,201.8);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#002277").s().p("AAYBQIAAhJIgvBJIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxgAgVg4QgJgJgCgOIAPAAQABAHAFAEQAEAEAIAAQAJAAAFgEQAEgEABgHIAPAAQgCAOgIAJQgKAIgOAAQgNAAgJgIg");
	this.shape_1220.setTransform(648.05,199.475);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAwIAfAAQARAAAJACQAJADAHAHQAGAIAAAMQAAARgLAHQgLAJgWAAgAgwAmIAcAAQALAAAFgDQAEgEAAgIQAAgIgFgDQgGgDgRAAIgUAAg");
	this.shape_1221.setTransform(631.975,201.8);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAIAAAPQAAAJgFAIQgGAGgIADQAMABAGAJQAFAIAAAJQAAAOgJAHQgKAJgTAAgAgYAmIAYAAQAMAAAGgDQAGgEAAgIQAAgIgHgDQgHgEgSABIgQAAgAgYgIIAUAAQANAAAGgFQAGgDAAgIQAAgHgFgCQgGgDgOAAIgUAAg");
	this.shape_1222.setTransform(616.125,201.8);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgcAPgPQAOgQAXgBQAZAAAOARQAPARgBAiIhKAAQAAANAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGAQgNAJQgMAJgTgBQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_1223.setTransform(602.7758,201.8);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#002277").s().p("AhCBOIAAgYIAHAAQAKAAAEgDQADgDAAgKIAAgbIAAhZIBtAAIAACcIgfAAIAAiCIgvAAIAABDQAAAdgCALQgCALgIAHQgHAGgQAAIgUgBg");
	this.shape_1224.setTransform(588.35,199.675);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#002277").s().p("AgwAcIAbgGQAHARAOAAQAJAAAFgEQAFgEAAgHQAAgGgFgEQgFgEgJAAIgEAAIAAgSIAKgBQAEgCADgEQADgEAAgFQAAgFgEgEQgEgFgIAAQgFAAgEADQgFACgEAKIgagGQAEgPANgHQANgHAPgBQAVAAALAKQALAJAAAPQAAAIgFAGQgFAGgKAFQANACAGAIQAGAGAAALQAAANgMAKQgNAJgXAAQgoAAgJgfg");
	this.shape_1225.setTransform(484.025,201.8);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#002277").s().p("AgrAyQgJgKgBgOQAAgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgEgLABQgJAAgEACQgEAEgDAHIgbgEQAEgRALgIQALgIAXAAQATABAKAEQAKAFAEAIQAEAHAAATIgBAjQAAAPACAGQABAIAEAIIgdAAIgDgJIgCgDQgHAHgJAEQgIAEgJgBQgTAAgKgJgAAAAHQgMACgFADQgFAFAAAFQAAAHAEAEQAFAGAIgBQAGAAAIgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_1226.setTransform(472.75,201.8);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHABQAGAAACgFQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhZIgoAAIAAAzQAAATgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_1227.setTransform(458.975,201.9);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#002277").s().p("AgmA5IAAhxIBNAAIAAAYIguAAIAABZg");
	this.shape_1228.setTransform(448.75,201.8);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#002277").s().p("AAYBQIAAhJIgvBJIgdAAIAAhxIAdAAIAABHIAuhHIAeAAIAABxgAgVg4QgJgJgCgOIAPAAQABAHAFAEQAEAEAIAAQAJAAAFgEQAEgEABgHIAPAAQgCAOgIAJQgJAIgPAAQgOAAgIgIg");
	this.shape_1229.setTransform(430.6,199.475);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAwIAfAAQARAAAJACQAJADAHAHQAGAIAAAMQAAARgLAHQgLAJgWAAgAgwAmIAcAAQALAAAFgDQAEgEAAgIQAAgIgFgDQgGgDgRAAIgUAAg");
	this.shape_1230.setTransform(414.525,201.8);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAIAAAPQAAAJgFAIQgGAGgIADQAMABAGAJQAFAIAAAJQAAAOgJAHQgKAJgTAAgAgYAmIAYAAQAMAAAGgDQAGgEAAgIQAAgIgHgDQgHgEgSABIgQAAgAgYgIIAUAAQANAAAGgFQAGgDAAgIQAAgHgFgCQgGgDgOAAIgUAAg");
	this.shape_1231.setTransform(398.675,201.8);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#002277").s().p("AgrAyQgJgKgBgOQAAgKAFgHQAFgIAIgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgEgLABQgJAAgEACQgFAEgCAHIgbgEQAEgRALgIQALgIAXAAQATABAKAEQAKAFAEAIQAEAHAAATIgBAjQAAAPACAGQABAIAEAIIgdAAIgDgJIgCgDQgHAHgJAEQgIAEgJgBQgTAAgKgJgAAAAHQgMACgFADQgFAFAAAFQAAAHAEAEQAFAGAIgBQAGAAAIgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_1232.setTransform(385.45,201.8);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#002277").s().p("Ag2BQIAAicIAcAAIAAAQQAFgIAJgGQAJgFALAAQAUAAAOAPQANAQAAAcQAAAcgNAPQgOAQgUAAQgIAAgIgEQgIgDgIgKIAAA6gAgRgvQgIAJABAQQAAAUAHAIQAIAJAKAAQAKAAAHgJQAHgGAAgUQAAgSgHgJQgHgIgLgBQgKABgHAIg");
	this.shape_1233.setTransform(372.9,203.85);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#002277").s().p("AAfBPIAAiCIg9AAIAACCIgfAAIAAidIB8AAIAACdg");
	this.shape_1234.setTransform(357.95,199.625);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#002277").s().p("AgOA5IAAgeIAdAAIAAAegAgOgaIAAgeIAdAAIAAAeg");
	this.shape_1235.setTransform(279.275,201.8);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAwIAfAAQARAAAJACQAJADAHAHQAGAIAAAMQAAARgLAHQgLAJgWAAgAgwAmIAcAAQALAAAFgDQAEgEAAgIQAAgIgFgDQgGgDgRAAIgUAAg");
	this.shape_1236.setTransform(266.275,201.8);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#002277").s().p("AgqAyQgKgKAAgOQgBgKAFgHQAEgIAJgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgFgEgLABQgHAAgFACQgEAEgDAHIgcgEQAFgRAMgIQALgIAWAAQATABAKAEQAKAFAEAIQAEAHAAATIAAAjQgBAPACAGQACAIAEAIIgfAAIgCgJIgBgDQgIAHgJAEQgHAEgKgBQgSAAgKgJgAAAAHQgNACgDADQgHAFAAAFQAAAHAGAEQAEAGAIgBQAGAAAIgFQAGgEABgGIABgPIAAgGIgRAFg");
	this.shape_1237.setTransform(239.95,201.8);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#002277").s().p("Ag2A5IAAhxIAeAAIAAAwIAeAAQARAAAKACQAJADAHAHQAGAIAAAMQAAARgLAHQgLAJgYAAgAgYAmIAcAAQANAAADgFQAEgDAAgHQAAgIgHgDQgGgDgPAAIgUAAg");
	this.shape_1238.setTransform(216.7,201.8);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHABQAGAAACgFQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhZIgoAAIAAAzQAAATgEAIQgFAIgFACQgGADgMAAIgTgCg");
	this.shape_1239.setTransform(201.925,201.9);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#002277").s().p("AgwAcIAbgGQAHARAOAAQAJAAAFgEQAFgEAAgHQAAgGgFgEQgFgEgJAAIgEAAIAAgSIAKgBQAEgCADgEQADgEAAgFQAAgFgEgEQgEgFgIAAQgFAAgEADQgFACgEAKIgagGQAEgPANgHQANgHAPgBQAVAAALAKQALAJAAAPQAAAIgFAGQgFAGgKAFQANACAGAIQAGAGAAALQAAANgMAKQgNAJgXAAQgoAAgJgfg");
	this.shape_1240.setTransform(177.525,201.8);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgcAPgPQAOgQAXgBQAZAAAOARQAPARgBAiIhKAAQAAANAHAHQAHAIAJAAQAHAAAFgEQAFgDADgKIAeAGQgGAQgNAJQgMAJgTgBQgdAAgOgTgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJAAQgJAAgGAGg");
	this.shape_1241.setTransform(166.1258,201.8);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#002277").s().p("Ag3BQIAAicIAcAAIAAAQQAGgIAKgGQAJgFAKAAQAUAAAOAPQANAQAAAcQAAAcgNAPQgOAQgUAAQgJAAgHgEQgIgDgJgKIAAA6gAgSgvQgGAJgBAQQAAAUAIAIQAIAJAJAAQALAAAHgJQAHgGAAgUQAAgSgHgJQgHgIgLgBQgKABgIAIg");
	this.shape_1242.setTransform(153.7,203.85);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#002277").s().p("AAYA5IAAhIIguBIIgeAAIAAhxIAeAAIAABGIAthGIAeAAIAABxg");
	this.shape_1243.setTransform(133.8,201.8);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#002277").s().p("AhMA5IAAhxIAcAAIAABYIAjAAIAAhYIAbAAIAABYIAjAAIAAhYIAcAAIAABxg");
	this.shape_1244.setTransform(117.875,201.8);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#002277").s().p("AgqAyQgKgKAAgOQgBgKAFgHQAEgIAJgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgEgMABQgHAAgFACQgEAEgDAHIgbgEQAEgRAMgIQAKgIAXAAQATABAKAEQAKAFAEAIQAEAHAAATIAAAjQAAAPABAGQABAIAEAIIgeAAIgCgJIgBgDQgIAHgJAEQgHAEgKgBQgTAAgJgJgAAAAHQgMACgEADQgHAFABAFQAAAHAEAEQAFAGAIgBQAGAAAIgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_1245.setTransform(102.6,201.8);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#002277").s().p("AhBBPIAAidIA/AAQASAAAJACQAJABAHAFQAHAFAGAJQAEAIAAAKQABALgHAJQgFAJgLAFQAPAEAHAJQAIAKAAAOQAAALgFAKQgFAKgIAGQgKAGgMACQgIABgeAAgAghA0IAdAAQARAAAEgBQAHgBAFgFQAEgFAAgIQAAgHgDgFQgDgFgHgDQgHgCgUAAIgaAAgAghgPIAVAAIAWgBQAIgBAEgEQAFgFABgIQAAgHgFgEQgEgFgHgBQgFgBgWAAIgSAAg");
	this.shape_1246.setTransform(88.75,199.625);

	this.nextUserBtn = new lib.КнопкаnextUserBtnнебесная();
	this.nextUserBtn.name = "nextUserBtn";
	this.nextUserBtn.setTransform(400,545);
	new cjs.ButtonHelper(this.nextUserBtn, 0, 1, 2);

	this.FIO = new cjs.Text("", "bold 26px 'Arial'", "#000099");
	this.FIO.name = "FIO";
	this.FIO.textAlign = "center";
	this.FIO.lineHeight = 31;
	this.FIO.lineWidth = 646;
	this.FIO.parent = this;
	this.FIO.setTransform(400,60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Omsg,p:{x:388.85,y:383.95,text:"",font:"bold 26px 'Arial'",color:"#005597",lineHeight:31.05,lineWidth:500}},{t:this.place},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280,p:{x:437.05,y:162.25}},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262,p:{x:464.125,y:198.575}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248,p:{x:309.975,y:226.9}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241,p:{x:423.575,y:226.9}},{t:this.shape_240,p:{x:441.1,y:226.9}},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234,p:{x:532.2,y:231.875}},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229,p:{x:613.125,y:229.325}},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223,p:{x:401.45,y:257.95}},{t:this.shape_222,p:{x:417.325,y:257.95}},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219,p:{x:462.875,y:260.375}},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.instance_2},{t:this.BtnReg}]},1).to({state:[{t:this.AllTests1},{t:this.Begin_Btn},{t:this.arrowlength},{t:this.SuggestiveText}]},1).to({state:[]},1).to({state:[{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455,p:{x:258.75,y:66.25}},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447,p:{x:374.1,y:66.25}},{t:this.shape_446,p:{x:387.4,y:66.25}},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443,p:{x:437.875,y:67.75}},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435,p:{x:544.1,y:66.25}},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.altDateFormat},{t:this.FIOmsg},{t:this.homephone},{t:this.homeaddress},{t:this.klass},{t:this.movieClip_4},{t:this.middlename},{t:this.firstname},{t:this.lastname},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.SaveBtn2},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286}]},1).to({state:[{t:this.Omsg,p:{x:400.0019,y:63.0504,text:"Если Вы носите очки, \nконтактные или ночные линзы, \nвыберите  ответ \"Да\", \nесли не носите - \"Нет\"",font:"bold 33px 'Arial'",color:"#002277",lineHeight:38.85,lineWidth:725}},{t:this.Btn2Instruction},{t:this.radiosetLorS},{t:this.instance_3}]},1).to({state:[{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542,p:{x:262.1,y:142.825}},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_447,p:{x:406.5,y:145.15}},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_446,p:{x:574.6,y:145.15}},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501,p:{x:199.925,y:174.025}},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497,p:{x:254.875,y:171.7}},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475,p:{x:545.3,y:171.7}},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.instance_6},{t:this.Omsg,p:{x:400.0025,y:348.998,text:"Если все понятно, нажмите на кнопку, \nесли непонятно - спросите учителя",font:"bold 33px 'Arial'",color:"#990000",lineHeight:38.85,lineWidth:796}},{t:this.instance_5,p:{x:402.1,y:430}},{t:this.BtnNext1},{t:this.instance_4}]},1).to({state:[{t:this.CircleTestTrening}]},1).to({state:[{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763,p:{x:571.875,y:73.55}},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737,p:{x:332.675,y:199.725}},{t:this.shape_736,p:{y:203.2,x:350.925}},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730,p:{x:484.425,y:199.725}},{t:this.shape_729,p:{y:203.2,x:511.725}},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723,p:{y:243.975}},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720,p:{y:243.85,x:134.175}},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716,p:{y:243.825}},{t:this.shape_715},{t:this.shape_714,p:{y:246.575}},{t:this.shape_713,p:{y:246.275}},{t:this.shape_712,p:{x:267.05,y:243.85}},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709,p:{y:241.125}},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705,p:{x:372.825,y:243.85}},{t:this.shape_704},{t:this.shape_703,p:{y:243.825}},{t:this.shape_702,p:{y:243.85,x:424.575}},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698,p:{y:243.825}},{t:this.shape_697,p:{y:246.275,x:504.175}},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690,p:{y:243.975}},{t:this.shape_689},{t:this.shape_688,p:{y:245.625}},{t:this.shape_687},{t:this.shape_686,p:{y:243.85,x:689.525}},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.instance_5,p:{x:402.55,y:430}},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676,p:{y:334.15}},{t:this.shape_675},{t:this.shape_674,p:{y:334.15}},{t:this.shape_673},{t:this.shape_672,p:{y:334.15}},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669,p:{x:423.675,y:334.15}},{t:this.shape_668,p:{y:334.15}},{t:this.shape_667,p:{y:334.15}},{t:this.shape_666},{t:this.shape_665,p:{y:334.15}},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662,p:{y:334.15}},{t:this.shape_661},{t:this.shape_660,p:{y:334.15}},{t:this.shape_659},{t:this.shape_658,p:{y:337.625}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_443,p:{x:672.575,y:27.7}},{t:this.shape_655},{t:this.shape_475,p:{x:698.75,y:26.2}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651}]},1).to({state:[{t:this.CircleTestOD},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_497,p:{x:660.375,y:47.7}},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_542,p:{x:731.9,y:45.375}},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.Omsg,p:{x:400,y:62.1,text:"Нажимайте мышкой с той стороны экрана, где у кольца разрыв. \nЕсли не уверены - нажимайте кнопку \"Не уверен\"",font:"bold 22px 'Arial'",color:"#990000",lineHeight:26.55,lineWidth:757}}]},1).to({state:[{t:this.instance_5,p:{x:402.55,y:430}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_443,p:{x:672.575,y:27.7}},{t:this.shape_655},{t:this.shape_475,p:{x:698.75,y:26.2}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676,p:{y:334.15}},{t:this.shape_675},{t:this.shape_674,p:{y:334.15}},{t:this.shape_673},{t:this.shape_672,p:{y:334.15}},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669,p:{x:423.675,y:334.15}},{t:this.shape_668,p:{y:334.15}},{t:this.shape_667,p:{y:334.15}},{t:this.shape_666},{t:this.shape_665,p:{y:334.15}},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662,p:{y:334.15}},{t:this.shape_661},{t:this.shape_660,p:{y:334.15}},{t:this.shape_659},{t:this.shape_658,p:{y:337.625}},{t:this.shape_850},{t:this.shape_849,p:{x:247.075}},{t:this.shape_848,p:{x:265.575}},{t:this.shape_847},{t:this.shape_846},{t:this.shape_737,p:{x:323.125,y:199.775}},{t:this.shape_763,p:{x:341.375,y:203.25}},{t:this.shape_845,p:{x:358.5021}},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842,p:{x:426.275}},{t:this.shape_841},{t:this.shape_840},{t:this.shape_730,p:{x:494.025,y:199.775}},{t:this.shape_839,p:{x:521.325}},{t:this.shape_838,p:{x:536.675}},{t:this.shape_837,p:{x:557.275}},{t:this.shape_836,p:{x:574.175}},{t:this.shape_835},{t:this.shape_834},{t:this.shape_723,p:{y:244.025}},{t:this.shape_833},{t:this.shape_832},{t:this.shape_720,p:{y:243.9,x:134.175}},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_716,p:{y:243.875}},{t:this.shape_828},{t:this.shape_714,p:{y:246.625}},{t:this.shape_713,p:{y:246.325}},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_709,p:{y:241.175}},{t:this.shape_824,p:{x:327.85,y:243.9}},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_703,p:{y:243.875}},{t:this.shape_702,p:{y:243.9,x:424.575}},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_698,p:{y:243.875}},{t:this.shape_697,p:{y:246.325,x:504.175}},{t:this.shape_816},{t:this.shape_815,p:{x:540.3,y:243.9}},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_690,p:{y:244.025}},{t:this.shape_810},{t:this.shape_688,p:{y:245.675}},{t:this.shape_809},{t:this.shape_686,p:{y:243.9,x:689.525}},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806}]},1).to({state:[{t:this.CircleTestOS},{t:this.Omsg,p:{x:400,y:62.1,text:"Нажимайте мышкой с той стороны экрана, где у кольца разрыв. \nЕсли не уверены - нажимайте кнопку \"Не уверен\"",font:"bold 22px 'Arial'",color:"#990000",lineHeight:26.55,lineWidth:757}}]},1).to({state:[{t:this.shape_852},{t:this.shape_851},{t:this.SaveArrow,p:{x:400.1,y:410.8}},{t:this.AfterText},{t:this.moreTests},{t:this.SaveResBtnAll},{t:this.visBtn},{t:this.duoBtn},{t:this.amsBtn},{t:this.astBtn}]},1).to({state:[{t:this.shape_876},{t:this.shape_842,p:{x:256.625}},{t:this.shape_848,p:{x:275.125}},{t:this.shape_875},{t:this.shape_874},{t:this.shape_737,p:{x:332.675,y:199.775}},{t:this.shape_763,p:{x:350.925,y:203.25}},{t:this.shape_873},{t:this.shape_872},{t:this.shape_845,p:{x:416.5021}},{t:this.shape_871},{t:this.shape_870},{t:this.shape_730,p:{x:484.425,y:199.775}},{t:this.shape_839,p:{x:511.725}},{t:this.shape_838,p:{x:527.075}},{t:this.shape_837,p:{x:547.675}},{t:this.shape_836,p:{x:564.575}},{t:this.SaveArrow,p:{x:402.55,y:430}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_443,p:{x:672.575,y:27.7}},{t:this.shape_655},{t:this.shape_475,p:{x:698.75,y:26.2}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_869},{t:this.BtnColorGo},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_676,p:{y:283.4}},{t:this.shape_862},{t:this.shape_674,p:{y:283.4}},{t:this.shape_861},{t:this.shape_672,p:{y:283.4}},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_668,p:{y:283.4}},{t:this.shape_667,p:{y:283.4}},{t:this.shape_857},{t:this.shape_665,p:{y:283.4}},{t:this.shape_856},{t:this.shape_855},{t:this.shape_662,p:{y:283.4}},{t:this.shape_854},{t:this.shape_660,p:{y:283.4}},{t:this.shape_853},{t:this.shape_658,p:{y:286.875}}]},1).to({state:[{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_280,p:{x:576.1,y:271.25}},{t:this.shape_891},{t:this.shape_890,p:{x:609.225,y:273.775}},{t:this.shape_241,p:{x:628.175,y:273.8}},{t:this.shape_240,p:{x:645.7,y:273.8}},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887,p:{x:695.975,y:273.8}},{t:this.shape_886},{t:this.shape_885,p:{x:552.425,y:304.85}},{t:this.shape_884,p:{x:567.375,y:307.575}},{t:this.shape_883,p:{x:583.925,y:304.825}},{t:this.shape_248,p:{x:601.025,y:304.85}},{t:this.shape_882,p:{x:615.975,y:307.575}},{t:this.shape_881},{t:this.shape_880,p:{x:660.1,y:304.825}},{t:this.shape_222,p:{x:673.575,y:304.85}},{t:this.shape_879},{t:this.shape_878,p:{x:705.025,y:304.85}},{t:this.shape_877},{t:this.shape_262,p:{x:733.125,y:307.575}},{t:this.SaveArrow,p:{x:643.7,y:370.1}},{t:this.BtnColorODRed},{t:this.BtnColorODGreen},{t:this.BtnColorODEq}]},1).to({state:[{t:this.SaveArrow,p:{x:402.55,y:430}},{t:this.shape_945},{t:this.shape_849,p:{x:247.575}},{t:this.shape_848,p:{x:266.075}},{t:this.shape_944},{t:this.shape_943},{t:this.shape_737,p:{x:323.625,y:199.775}},{t:this.shape_763,p:{x:341.875,y:203.25}},{t:this.shape_845,p:{x:359.0021}},{t:this.shape_942},{t:this.shape_941},{t:this.shape_842,p:{x:426.775}},{t:this.shape_940},{t:this.shape_939},{t:this.shape_730,p:{x:494.525,y:199.775}},{t:this.shape_839,p:{x:521.825}},{t:this.shape_838,p:{x:537.175}},{t:this.shape_837,p:{x:557.775}},{t:this.shape_836,p:{x:574.675}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_443,p:{x:672.575,y:27.7}},{t:this.shape_655},{t:this.shape_475,p:{x:698.75,y:26.2}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_869},{t:this.BtnColorOS},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_676,p:{y:283.4}},{t:this.shape_862},{t:this.shape_674,p:{y:283.4}},{t:this.shape_861},{t:this.shape_672,p:{y:283.4}},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_668,p:{y:283.4}},{t:this.shape_667,p:{y:283.4}},{t:this.shape_857},{t:this.shape_665,p:{y:283.4}},{t:this.shape_856},{t:this.shape_855},{t:this.shape_662,p:{y:283.4}},{t:this.shape_854},{t:this.shape_660,p:{y:283.4}},{t:this.shape_853},{t:this.shape_658,p:{y:286.875}}]},1).to({state:[{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_280,p:{x:576.1,y:271.25}},{t:this.shape_891},{t:this.shape_890,p:{x:609.225,y:273.775}},{t:this.shape_241,p:{x:628.175,y:273.8}},{t:this.shape_240,p:{x:645.7,y:273.8}},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887,p:{x:695.975,y:273.8}},{t:this.shape_886},{t:this.shape_885,p:{x:552.425,y:304.85}},{t:this.shape_884,p:{x:567.375,y:307.575}},{t:this.shape_883,p:{x:583.925,y:304.825}},{t:this.shape_248,p:{x:601.025,y:304.85}},{t:this.shape_882,p:{x:615.975,y:307.575}},{t:this.shape_881},{t:this.shape_880,p:{x:660.1,y:304.825}},{t:this.shape_222,p:{x:673.575,y:304.85}},{t:this.shape_879},{t:this.shape_878,p:{x:705.025,y:304.85}},{t:this.shape_877},{t:this.shape_262,p:{x:733.125,y:307.575}},{t:this.SaveArrow,p:{x:643.7,y:370.1}},{t:this.BtnColorOSRed},{t:this.BtnColorOSGreen},{t:this.BtnColorOSEq}]},1).to({state:[{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_669,p:{x:489.125,y:162.15}},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958,p:{x:256.625}},{t:this.shape_957,p:{x:275.125}},{t:this.shape_956},{t:this.shape_955},{t:this.shape_737,p:{x:332.675,y:229.775}},{t:this.shape_736,p:{y:233.25,x:350.925}},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952,p:{x:416.5021}},{t:this.shape_951},{t:this.shape_950},{t:this.shape_730,p:{x:484.425,y:229.775}},{t:this.shape_729,p:{y:233.25,x:511.725}},{t:this.shape_949,p:{x:527.075}},{t:this.shape_948,p:{x:547.675}},{t:this.shape_947,p:{x:564.575}},{t:this.SaveArrow,p:{x:402.55,y:430}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_443,p:{x:672.575,y:27.7}},{t:this.shape_655},{t:this.shape_475,p:{x:698.75,y:26.2}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_946},{t:this.BtnAmslerOD},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_676,p:{y:283.4}},{t:this.shape_862},{t:this.shape_674,p:{y:283.4}},{t:this.shape_861},{t:this.shape_672,p:{y:283.4}},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_668,p:{y:283.4}},{t:this.shape_667,p:{y:283.4}},{t:this.shape_857},{t:this.shape_665,p:{y:283.4}},{t:this.shape_856},{t:this.shape_855},{t:this.shape_662,p:{y:283.4}},{t:this.shape_854},{t:this.shape_660,p:{y:283.4}},{t:this.shape_853},{t:this.shape_658,p:{y:286.875}}]},1).to({state:[{t:this.instance_25},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_880,p:{x:711.85,y:69.525}},{t:this.shape_1048,p:{x:724.575,y:72.275}},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044,p:{x:552.775,y:100.6}},{t:this.shape_1043},{t:this.shape_1042,p:{x:584.55,y:100.6}},{t:this.shape_229,p:{x:599.275,y:103.025}},{t:this.shape_1041,p:{x:614.85,y:100.6}},{t:this.shape_1040,p:{x:629.2,y:100.6}},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036,p:{x:700.95,y:100.6}},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032,p:{x:758.475,y:103.325}},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028,p:{x:648.925,y:131.65}},{t:this.shape_1027},{t:this.shape_219,p:{x:677.825,y:134.075}},{t:this.shape_1026},{t:this.shape_234,p:{x:703.5,y:136.625}},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_824,p:{x:593.05,y:170.2}},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_702,p:{y:170.2,x:728.125}},{t:this.shape_712,p:{x:743.95,y:170.2}},{t:this.shape_1015,p:{x:759.95,y:170.2}},{t:this.shape_697,p:{y:203.675,x:601.525}},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_686,p:{y:201.25,x:648.875}},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_890,p:{x:616.725,y:275.225}},{t:this.shape_241,p:{x:635.675,y:275.25}},{t:this.shape_223,p:{x:653.2,y:275.25}},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_887,p:{x:703.475,y:275.25}},{t:this.shape_1005},{t:this.shape_885,p:{x:559.925,y:306.3}},{t:this.shape_884,p:{x:574.875,y:309.025}},{t:this.shape_883,p:{x:591.425,y:306.275}},{t:this.shape_248,p:{x:608.525,y:306.3}},{t:this.shape_882,p:{x:623.475,y:309.025}},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_222,p:{x:681.075,y:306.3}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_262,p:{x:740.625,y:309.025}},{t:this.BtnAmslerODEq},{t:this.BtnAmslerODNotEq},{t:this.SaveArrow,p:{x:643.7,y:410.8}}]},1).to({state:[{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_669,p:{x:489.125,y:162.15}},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_957,p:{x:265.575}},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_737,p:{x:323.125,y:229.775}},{t:this.shape_736,p:{y:233.25,x:341.375}},{t:this.shape_952,p:{x:358.5021}},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_958,p:{x:426.275}},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_730,p:{x:494.025,y:229.775}},{t:this.shape_729,p:{y:233.25,x:521.325}},{t:this.shape_949,p:{x:536.675}},{t:this.shape_948,p:{x:557.275}},{t:this.shape_947,p:{x:574.175}},{t:this.SaveArrow,p:{x:402.55,y:430}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_443,p:{x:672.575,y:27.7}},{t:this.shape_655},{t:this.shape_475,p:{x:698.75,y:26.2}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_946},{t:this.BtnAmslerOS},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_676,p:{y:283.4}},{t:this.shape_862},{t:this.shape_674,p:{y:283.4}},{t:this.shape_861},{t:this.shape_672,p:{y:283.4}},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_668,p:{y:283.4}},{t:this.shape_667,p:{y:283.4}},{t:this.shape_857},{t:this.shape_665,p:{y:283.4}},{t:this.shape_856},{t:this.shape_855},{t:this.shape_662,p:{y:283.4}},{t:this.shape_854},{t:this.shape_660,p:{y:283.4}},{t:this.shape_853},{t:this.shape_658,p:{y:286.875}}]},1).to({state:[{t:this.instance_25},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_880,p:{x:711.85,y:69.525}},{t:this.shape_1048,p:{x:724.575,y:72.275}},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044,p:{x:552.775,y:100.6}},{t:this.shape_1043},{t:this.shape_1042,p:{x:584.55,y:100.6}},{t:this.shape_229,p:{x:599.275,y:103.025}},{t:this.shape_1041,p:{x:614.85,y:100.6}},{t:this.shape_1040,p:{x:629.2,y:100.6}},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036,p:{x:700.95,y:100.6}},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032,p:{x:758.475,y:103.325}},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028,p:{x:648.925,y:131.65}},{t:this.shape_1027},{t:this.shape_219,p:{x:677.825,y:134.075}},{t:this.shape_1026},{t:this.shape_234,p:{x:703.5,y:136.625}},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_824,p:{x:593.05,y:170.2}},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_702,p:{y:170.2,x:728.125}},{t:this.shape_712,p:{x:743.95,y:170.2}},{t:this.shape_1015,p:{x:759.95,y:170.2}},{t:this.shape_697,p:{y:203.675,x:601.525}},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_686,p:{y:201.25,x:648.875}},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_890,p:{x:616.725,y:275.225}},{t:this.shape_241,p:{x:635.675,y:275.25}},{t:this.shape_223,p:{x:653.2,y:275.25}},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_887,p:{x:703.475,y:275.25}},{t:this.shape_1005},{t:this.shape_885,p:{x:559.925,y:306.3}},{t:this.shape_884,p:{x:574.875,y:309.025}},{t:this.shape_883,p:{x:591.425,y:306.275}},{t:this.shape_248,p:{x:608.525,y:306.3}},{t:this.shape_882,p:{x:623.475,y:309.025}},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_222,p:{x:681.075,y:306.3}},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_262,p:{x:740.625,y:309.025}},{t:this.BtnAmslerOSEq},{t:this.BtnAmslerOSNotEq},{t:this.instance_5,p:{x:643.7,y:410.8}}]},1).to({state:[{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_959},{t:this.shape_958,p:{x:256.625}},{t:this.shape_957,p:{x:275.125}},{t:this.shape_956},{t:this.shape_955},{t:this.shape_737,p:{x:332.675,y:229.775}},{t:this.shape_736,p:{y:233.25,x:350.925}},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952,p:{x:416.5021}},{t:this.shape_951},{t:this.shape_950},{t:this.shape_730,p:{x:484.425,y:229.775}},{t:this.shape_729,p:{y:233.25,x:511.725}},{t:this.shape_949,p:{x:527.075}},{t:this.shape_948,p:{x:547.675}},{t:this.shape_947,p:{x:564.575}},{t:this.SaveArrow,p:{x:402.55,y:430}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_443,p:{x:672.575,y:27.7}},{t:this.shape_655},{t:this.shape_475,p:{x:698.75,y:26.2}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_1068},{t:this.BtnAstOD},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_676,p:{y:283.4}},{t:this.shape_862},{t:this.shape_674,p:{y:283.4}},{t:this.shape_861},{t:this.shape_672,p:{y:283.4}},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_668,p:{y:283.4}},{t:this.shape_667,p:{y:283.4}},{t:this.shape_857},{t:this.shape_665,p:{y:283.4}},{t:this.shape_856},{t:this.shape_855},{t:this.shape_662,p:{y:283.4}},{t:this.shape_854},{t:this.shape_660,p:{y:283.4}},{t:this.shape_853},{t:this.shape_658,p:{y:286.875}}]},1).to({state:[{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1015,p:{x:702.05,y:142.85}},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_815,p:{x:688.7,y:173.9}},{t:this.shape_1136},{t:this.shape_705,p:{x:719.275,y:173.9}},{t:this.shape_720,p:{y:173.9,x:736.675}},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_702,p:{y:204.95,x:626.975}},{t:this.shape_712,p:{x:642.8,y:204.95}},{t:this.shape_697,p:{y:207.375,x:666.325}},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_686,p:{y:204.95,x:709.125}},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_890,p:{x:619.675,y:277.625}},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_887,p:{x:706.425,y:277.65}},{t:this.shape_1118},{t:this.shape_885,p:{x:562.875,y:308.7}},{t:this.shape_1117,p:{x:577.825,y:311.425}},{t:this.shape_883,p:{x:594.375,y:308.675}},{t:this.shape_248,p:{x:611.475,y:308.7}},{t:this.shape_1116,p:{x:626.425,y:311.425}},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_222,p:{x:684.025,y:308.7}},{t:this.shape_1113},{t:this.shape_878,p:{x:715.475,y:308.7}},{t:this.shape_1112},{t:this.shape_1048,p:{x:743.575,y:311.425}},{t:this.SaveArrow,p:{x:656.25,y:413.2}},{t:this.BtnAstODNotEq},{t:this.BtnAstODEq},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1044,p:{x:638.725,y:66.75}},{t:this.shape_1107},{t:this.shape_1042,p:{x:670.5,y:66.75}},{t:this.shape_229,p:{x:685.225,y:69.175}},{t:this.shape_1041,p:{x:700.8,y:66.75}},{t:this.shape_1040,p:{x:715.15,y:66.75}},{t:this.shape_1106},{t:this.shape_1028,p:{x:533.425,y:97.8}},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1032,p:{x:586.525,y:100.525}},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1036,p:{x:645.75,y:97.8}},{t:this.shape_884,p:{x:659.275,y:100.525}},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_882,p:{x:752.725,y:100.525}},{t:this.shape_219,p:{x:768.375,y:100.225}},{t:this.shape_262,p:{x:783.075,y:100.525}}]},1).to({state:[{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_957,p:{x:265.575}},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_737,p:{x:323.125,y:229.775}},{t:this.shape_736,p:{y:233.25,x:341.375}},{t:this.shape_952,p:{x:358.5021}},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_958,p:{x:426.275}},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_730,p:{x:494.025,y:229.775}},{t:this.shape_729,p:{y:233.25,x:521.325}},{t:this.shape_949,p:{x:536.675}},{t:this.shape_948,p:{x:557.275}},{t:this.shape_947,p:{x:574.175}},{t:this.SaveArrow,p:{x:402.55,y:430}},{t:this.shape_657},{t:this.shape_656},{t:this.shape_443,p:{x:672.575,y:27.7}},{t:this.shape_655},{t:this.shape_475,p:{x:698.75,y:26.2}},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_1068},{t:this.BtnAstOS},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_676,p:{y:283.4}},{t:this.shape_862},{t:this.shape_674,p:{y:283.4}},{t:this.shape_861},{t:this.shape_672,p:{y:283.4}},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_668,p:{y:283.4}},{t:this.shape_667,p:{y:283.4}},{t:this.shape_857},{t:this.shape_665,p:{y:283.4}},{t:this.shape_856},{t:this.shape_855},{t:this.shape_662,p:{y:283.4}},{t:this.shape_854},{t:this.shape_660,p:{y:283.4}},{t:this.shape_853},{t:this.shape_658,p:{y:286.875}}]},1).to({state:[{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1044,p:{x:638.725,y:66.75}},{t:this.shape_1107},{t:this.shape_1042,p:{x:670.5,y:66.75}},{t:this.shape_229,p:{x:685.225,y:69.175}},{t:this.shape_1041,p:{x:700.8,y:66.75}},{t:this.shape_1040,p:{x:715.15,y:66.75}},{t:this.shape_1106},{t:this.shape_1028,p:{x:533.425,y:97.8}},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1117,p:{x:586.525,y:100.525}},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1036,p:{x:645.75,y:97.8}},{t:this.shape_1116,p:{x:659.275,y:100.525}},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1048,p:{x:752.725,y:100.525}},{t:this.shape_219,p:{x:768.375,y:100.225}},{t:this.shape_1032,p:{x:783.075,y:100.525}},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_890,p:{x:619.675,y:277.625}},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_887,p:{x:706.425,y:277.65}},{t:this.shape_1118},{t:this.shape_885,p:{x:562.875,y:308.7}},{t:this.shape_884,p:{x:577.825,y:311.425}},{t:this.shape_883,p:{x:594.375,y:308.675}},{t:this.shape_248,p:{x:611.475,y:308.7}},{t:this.shape_882,p:{x:626.425,y:311.425}},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_222,p:{x:684.025,y:308.7}},{t:this.shape_1113},{t:this.shape_878,p:{x:715.475,y:308.7}},{t:this.shape_1112},{t:this.shape_262,p:{x:743.575,y:311.425}},{t:this.SaveArrow,p:{x:656.25,y:413.2}},{t:this.BtnAstOSNotEq},{t:this.BtnAstOSEq},{t:this.shape_1111},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1015,p:{x:702.05,y:142.85}},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_815,p:{x:688.7,y:173.9}},{t:this.shape_1136},{t:this.shape_705,p:{x:719.275,y:173.9}},{t:this.shape_720,p:{y:173.9,x:736.675}},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_702,p:{y:204.95,x:626.975}},{t:this.shape_712,p:{x:642.8,y:204.95}},{t:this.shape_697,p:{y:207.375,x:666.325}},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_686,p:{y:204.95,x:709.125}},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125}]},1).to({state:[{t:this.FIO},{t:this.nextUserBtn},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_501,p:{x:189.325,y:204.125}},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_435,p:{x:228.45,y:201.8}},{t:this.shape_1237},{t:this.shape_455,p:{x:251.45,y:201.8}},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.MessageBAD},{t:this.Vis_OD},{t:this.Vis_OS},{t:this.Color_OD},{t:this.Color_OS},{t:this.Amsler_OD},{t:this.Amsler_OS},{t:this.Astig_OD},{t:this.Omsg,p:{x:938.85,y:324.8,text:"Visus",font:"bold 20px 'Arial'",color:"#002277",lineHeight:24.35,lineWidth:214}},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.messageOK}]},1).to({state:[{t:this.Omsg,p:{x:400,y:280.45,text:"The End",font:"bold 35px 'Arial'",color:"#002277",lineHeight:41.1,lineWidth:178}}]},1).wait(1));

	// background
	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("rgba(0,85,151,0.349)").s().p("ASkCZIAAjsIAqAAIAAAZQAIgNAPgIQAOgIAQAAQAeAAAWAXQAUAYAAApQAAArgUAXQgWAYgeABQgOAAgMgHQgLgFgNgOIAABXgATcgnQgLAOAAAYQgBAdAMANQALAOARAAQAQAAALgNQAKgNgBgcQAAgagKgNQgLgNgQAAQgQAAgLAMgA01CZIAAjsIAqAAIAAAZQAJgNAOgIQAOgIARAAQAeAAAVAXQAUAYAAApQAAArgUAXQgWAYgeABQgOAAgLgHQgMgFgNgOIAABXgAz9gnQgLAOAAAYQAAAdAMANQALAOARAAQAPAAALgNQAKgNAAgcQAAgagKgNQgLgNgQAAQgRAAgLAMgAZFBDQgXgXAAgqQAAgqAXgYQAWgXAmAAQAfAAASANQATAOAIAcIgsAIQgDgOgHgGQgJgIgMABQgRgBgKAMQgKAMAAAbQAAAeAKAMQAKANASAAQAMAAAIgHQAJgIADgSIAsAIQgHAfgUAQQgSAPghABQgmgBgWgYgAWQBRQgVgMgLgUQgMgVAAgcQAAgXAMgUQALgWAUgLQAUgLAaAAQAmAAAZAaQAZAZAAAlQAAAngZAaQgZAagmAAQgYgBgVgKgAWeglQgLAOgBAZQABAZALANQANAOASAAQASAAAMgOQALgNAAgaQAAgYgLgOQgMgNgSAAQgSAAgNANgAM2BRQgVgMgLgUQgLgVAAgcQAAgXALgUQALgWAVgLQAUgLAZAAQAmAAAaAaQAZAZAAAlQAAAngZAaQgaAagmAAQgXgBgWgKgANFglQgMAOAAAZQAAAZAMANQAMAOASAAQASAAAMgOQAMgNAAgaQAAgYgMgOQgMgNgSAAQgSAAgMANgAicBRQgVgMgLgUQgMgVAAgcQAAgXAMgUQALgWAUgLQAUgLAZAAQAnAAAZAaQAZAZAAAlQAAAngZAaQgZAagnAAQgXgBgVgKgAiNglQgMAOAAAZQAAAZAMANQAMAOARAAQASAAAMgOQAMgNAAgaQAAgYgMgOQgMgNgSAAQgRAAgMANgA6wA7QgeghAAg2QAAg7AeggQAfghAxABQArAAAcAZQAQAPAIAcIgwALQgEgSgNgLQgNgKgTAAQgbAAgQASQgPATgBAqQABAsAPATQAQATAaAAQATAAANgMQAOgMAGgaIAvAPQgLAmgZAUQgYASgmABQgvgBgfgggARHBXIAAiGIg9AAIAACGIgtAAIAAiqICXAAIAACqgAJgBXIAAhtIhHBtIgsAAIAAiqIAsAAIAABqIBGhqIAsAAIAACqgAGVBXIAAiqIAtAAIAACqgADWBXIAAiqIAtAAIAABHIAtAAQAbAAAPAEQANADAKAMQAKANAAARQAAAZgRANQgRAMgiAAgAEDA6IAqAAQARAAAHgFQAIgFAAgLQAAgNgKgEQgJgFgZAAIgeAAgAAMBXIAAiqIBjAAQAeAAAPALQAPALAAAWQAAAPgHAKQgJALgNADQASAEAJAMQAIAMAAAOQAAAUgOANQgPAMgcAAgAA5A6IAkAAQAUAAAIgEQAJgGAAgLQAAgNgKgEQgKgGgdAAIgYAAgAA5gMIAdAAQAVAAAKgFQAKgGAAgLQgBgLgIgEQgJgFgXAAIgdAAgAlIBXIAAiqIB0AAIAAAkIhHAAIAACGgAmiBXIAAhIIhAAAIAABIIgtAAIAAiqIAtAAIAAA+IBAAAIAAg+IAtAAIAACqgApoBXIAAhtIhGBtIgsAAIAAiqIAsAAIAABqIBFhqIAtAAIAACqgAszBXIAAhIIhBAAIAABIIgtAAIAAiqIAtAAIAAA+IBBAAIAAg+IAtAAIAACqgAv6BXIAAhtIhFBtIgsAAIAAiqIAsAAIAABqIBEhqIAtAAIAACqgA17BXIgXgxQgGgPgFgEQgGgFgKAAIAABJIgtAAIAAiqIAtAAIAABGQAMgCAFgFQAEgGAHgTQAIgZALgHQAKgHARgBIARABIAAAfQgRAAgFADQgFADgGASQgIAYgPAFQAWAFAPAgIABADIAZAvgAIch2QgOgMgCgWIAWAAQABALAHAHQAHAFANAAQANAAAIgFQAGgHACgLIAVAAQgCAWgNAMQgOANgVAAQgVAAgNgNg");
	this.shape_1247.setTransform(401.05,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1247).to({_off:true},26).wait(1));

	// Layer_27
	this.BtnLeft = new lib.BtnTestLeft();
	this.BtnLeft.name = "BtnLeft";
	this.BtnLeft.setTransform(200.1,300,1,1,0,0,0,200.1,300);
	new cjs.ButtonHelper(this.BtnLeft, 0, 1, 1);

	this.BtnRight = new lib.ButtonTestRight();
	this.BtnRight.name = "BtnRight";
	this.BtnRight.setTransform(599.75,300,1,1,0,0,0,199.8,300);
	new cjs.ButtonHelper(this.BtnRight, 0, 1, 1);

	this.BtnDown = new lib.BtnTestDown();
	this.BtnDown.name = "BtnDown";
	this.BtnDown.setTransform(399.4,449.75,1,1,0,0,0,399.4,149.8);
	new cjs.ButtonHelper(this.BtnDown, 0, 1, 1);

	this.BtnUp = new lib.BtnTestUp();
	this.BtnUp.name = "BtnUp";
	this.BtnUp.setTransform(400,150,1,1,0,0,0,400,150);
	new cjs.ButtonHelper(this.BtnUp, 0, 1, 1);

	this.BtnLeftOD = new lib.BtnTestLeft();
	this.BtnLeftOD.name = "BtnLeftOD";
	this.BtnLeftOD.setTransform(200.1,300,1,1,0,0,0,200.1,300);
	new cjs.ButtonHelper(this.BtnLeftOD, 0, 1, 1);

	this.BtnRightOD = new lib.ButtonTestRight();
	this.BtnRightOD.name = "BtnRightOD";
	this.BtnRightOD.setTransform(599.75,300,1,1,0,0,0,199.8,300);
	new cjs.ButtonHelper(this.BtnRightOD, 0, 1, 1);

	this.BtnDownOD = new lib.BtnTestDown();
	this.BtnDownOD.name = "BtnDownOD";
	this.BtnDownOD.setTransform(399.4,449.75,1,1,0,0,0,399.4,149.8);
	new cjs.ButtonHelper(this.BtnDownOD, 0, 1, 1);

	this.BtnUpOD = new lib.BtnTestUp();
	this.BtnUpOD.name = "BtnUpOD";
	this.BtnUpOD.setTransform(400,150,1,1,0,0,0,400,150);
	new cjs.ButtonHelper(this.BtnUpOD, 0, 1, 1);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#002277").s().p("AgwAcIAbgFQAHAQAOABQAJgBAFgEQAFgEAAgHQAAgGgFgEQgFgEgJAAIgEAAIAAgTIAKgBQAEgBADgDQADgFAAgEQAAgGgEgEQgEgFgIAAQgFAAgEACQgFADgEAKIgagGQAEgOANgIQANgHAPAAQAVAAALAJQALAKAAAOQAAAIgFAGQgFAGgKAFQANACAGAIQAGAGAAALQAAANgMAKQgNAJgXAAQgoAAgJgfg");
	this.shape_1248.setTransform(778.975,47.7);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#002277").s().p("AgqAyQgKgJAAgPQgBgKAFgIQAEgHAJgDQAIgEAQgDQAUgEAIgDIAAgEQAAgIgEgEQgEgEgMAAQgIABgEADQgEADgDAIIgbgFQAEgRAMgHQAKgJAXABQATAAAKAEQAKAFAEAIQAEAGAAAVIAAAiQAAAPABAGQABAIAEAIIgeAAIgCgJIgBgEQgIAIgJAEQgIADgJAAQgTAAgJgJgAAAAHQgNACgDADQgHAFABAGQAAAGAEAEQAFAGAIAAQAGgBAIgFQAFgEACgGIABgPIAAgGIgRAFg");
	this.shape_1249.setTransform(767.7,47.7);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgEQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAyQAAATgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_1250.setTransform(753.925,47.8);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#002277").s().p("AglA5IAAhxIBLAAIAAAZIgtAAIAABYg");
	this.shape_1251.setTransform(743.7,47.7);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#002277").s().p("AAYBQIAAhJIguBJIgeAAIAAhxIAeAAIAABHIAthHIAdAAIAABxgAgVg4QgJgJgBgOIAOAAQABAIAFADQAEAEAIAAQAJAAAFgEQAEgDABgIIAPAAQgBAOgJAJQgKAIgOAAQgNAAgJgIg");
	this.shape_1252.setTransform(725.55,45.375);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#002277").s().p("AAxA5IAAhxIAeAAIAABxgAhOA5IAAhxIAeAAIAAAvIAfAAQARAAAJADQAJACAHAIQAGAJAAALQAAAQgLAJQgLAIgWAAgAgwAmIAcAAQALAAAFgEQAEgDAAgIQAAgIgFgDQgGgDgRAAIgUAAg");
	this.shape_1253.setTransform(709.475,47.7);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAIAAAOQAAAKgFAHQgGAIgIACQAMABAGAJQAFAHAAAKQAAANgJAJQgKAIgTAAgAgYAmIAYAAQAMAAAGgEQAGgCAAgJQAAgIgHgDQgHgEgSAAIgQAAgAgYgJIAUAAQANAAAGgDQAGgEAAgHQAAgIgFgCQgGgEgOAAIgUAAg");
	this.shape_1254.setTransform(693.625,47.7);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_1255.setTransform(680.2758,47.7);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#002277").s().p("Ag8A4IAAgWIAFAAIAHAAQAGAAACgEQABgEAAgSIAAhBIBkAAIAABxIgeAAIAAhYIgoAAIAAAyQAAATgEAIQgFAIgFADQgGACgMAAIgTgCg");
	this.shape_1256.setTransform(666.625,47.8);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#002277").s().p("AAoA5IAAhKIgcBKIgYAAIgbhKIAABKIgaAAIAAhxIAmAAIAbBOIAdhOIAlAAIAABxg");
	this.shape_1257.setTransform(776.075,21.15);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_1258.setTransform(761.6258,21.15);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#002277").s().p("AAbA5IAAgvIgCAAQgLAAgEACQgFADgFAIIgBACIgUAgIgjAAIAVghQAKgPAHgCQgMAAgIgIQgIgJAAgNQAAgMAFgHQAGgJAIgCQAIgDASAAIA6AAIAABxgAgKghQgFADAAAIQAAAIAGADQAFADAMABIATAAIAAgeIgVAAQgMAAgEAEg");
	this.shape_1259.setTransform(748.4,21.15);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#002277").s().p("Ag3BQIAAicIAcAAIAAAQQAGgJAKgFQAIgFALAAQAUAAAOAPQANAQAAAcQAAAcgNAQQgOAPgUAAQgJAAgHgEQgIgEgJgIIAAA5gAgSgvQgGAJgBARQAAATAIAIQAHAJAKAAQALAAAHgIQAHgIAAgTQAAgSgHgJQgIgJgKAAQgKAAgIAJg");
	this.shape_1260.setTransform(736.35,23.2);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#002277").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAYAAAPAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGASgNAIQgMAIgTAAQgdABgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_1261.setTransform(723.0758,21.15);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#002277").s().p("Ag2A5IAAhxIBBAAQAUAAAKAHQAKAIAAAOQAAAKgFAHQgGAIgIACQAMABAGAJQAFAHAAAKQAAANgJAJQgKAIgTAAgAgYAmIAYAAQAMAAAGgEQAGgCAAgJQAAgIgHgDQgHgEgSAAIgQAAgAgYgJIAUAAQANAAAGgDQAGgEAAgHQAAgIgFgCQgGgEgOAAIgUAAg");
	this.shape_1262.setTransform(710.675,21.15);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#002277").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgOAHgPQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAZgRARQgRARgZAAQgPABgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_1263.setTransform(696.875,21.15);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#002277").s().p("Ag3BQIAAicIAcAAIAAAQQAGgJAKgFQAIgFALAAQAUAAAOAPQANAQAAAcQAAAcgNAQQgOAPgUAAQgJAAgHgEQgIgEgJgIIAAA5gAgSgvQgGAJgBARQAAATAIAIQAHAJAKAAQALAAAHgIQAHgIAAgTQAAgSgHgJQgIgJgKAAQgKAAgIAJg");
	this.shape_1264.setTransform(683.7,23.2);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#002277").s().p("AAfBPIAAiCIg9AAIAACCIggAAIAAidIB9AAIAACdg");
	this.shape_1265.setTransform(668.75,18.975);

	this.BtnLeftOS = new lib.BtnTestLeft();
	this.BtnLeftOS.name = "BtnLeftOS";
	this.BtnLeftOS.setTransform(200.1,300,1,1,0,0,0,200.1,300);
	new cjs.ButtonHelper(this.BtnLeftOS, 0, 1, 1);

	this.BtnRightOS = new lib.ButtonTestRight();
	this.BtnRightOS.name = "BtnRightOS";
	this.BtnRightOS.setTransform(599.75,300,1,1,0,0,0,199.8,300);
	new cjs.ButtonHelper(this.BtnRightOS, 0, 1, 1);

	this.BtnDownOS = new lib.BtnTestDown();
	this.BtnDownOS.name = "BtnDownOS";
	this.BtnDownOS.setTransform(399.4,449.75,1,1,0,0,0,399.4,149.8);
	new cjs.ButtonHelper(this.BtnDownOS, 0, 1, 1);

	this.BtnUpOS = new lib.BtnTestUp();
	this.BtnUpOS.name = "BtnUpOS";
	this.BtnUpOS.setTransform(400,150,1,1,0,0,0,400,150);
	new cjs.ButtonHelper(this.BtnUpOS, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.BtnUp},{t:this.BtnDown},{t:this.BtnRight},{t:this.BtnLeft}]},7).to({state:[]},1).to({state:[{t:this.BtnUpOD},{t:this.BtnDownOD},{t:this.BtnRightOD},{t:this.BtnLeftOD}]},1).to({state:[]},1).to({state:[{t:this.BtnUpOS},{t:this.BtnDownOS},{t:this.BtnRightOS},{t:this.BtnLeftOS},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248}]},1).to({state:[]},1).to({state:[]},14).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(400,300,647.9000000000001,300);
// library properties:
lib.properties = {
	id: 'BB307325A7D51844921FF71FAF2DC54B',
	width: 800,
	height: 600,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/visus_atlas_1.png", id:"visus_atlas_1"},
		//{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"jquery/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"jquery/jquery-ui.min.js", id:"jqueryui/jquery-ui-1.12.0/jquery-ui.min.js"},
		//{src:"https://code.jquery.com/ui/1.12.1/jquery-ui.min.js", id:"jqueryui/jquery-ui-1.12.0/jquery-ui.min.js"},
		{src:"jquery/jquery-ui.css", id:"jqueryui/jquery-ui-1.12.0/jquery-ui.min.css"},
		//{src:"https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css", id:"jqueryui/jquery-ui-1.12.0/jquery-ui.min.css"},
		{src:"ui-icons_444444_256x240.png", id:"jqueryui/jquery-ui-1.12.0/images/ui-icons_444444_256x240.png"},
		{src:"ui-icons_555555_256x240.png", id:"jqueryui/jquery-ui-1.12.0/images/ui-icons_555555_256x240.png"},
		{src:"ui-icons_777777_256x240.png", id:"jqueryui/jquery-ui-1.12.0/images/ui-icons_777777_256x240.png"},
		{src:"https://code.jquery.com/ui/images/ui-icons_cc0000_256x240.png", id:"jqueryui/jquery-ui-1.12.0/images/ui-icons_cc0000_256x240.png"},
		{src:"ui-icons_ffffff_256x240.png", id:"jqueryui/jquery-ui-1.12.0/images/ui-icons_ffffff_256x240.png"},
		{src:"components/jqueryui/src/radioset.js", id:"an.RadioSet"},
		{src:"components/jqueryui/src/datepicker.js", id:"an.DatePicker"},
		{src:"components/ui/src/checkbox.js", id:"an.Checkbox"}
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
an.compositions['BB307325A7D51844921FF71FAF2DC54B'] = {
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