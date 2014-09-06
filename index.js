/*global exports, define */
/*jslint vars: true*/

(function(root, factory) {

	'use strict';

	// Set up appropriately for the environment. Start with AMD.
	if (typeof define === 'function' && define.amd) {
		define([], function() {
		// Export global even in AMD case in case this script is loaded with
		// others that may still expect a global PayPalLogoCanvas.
		root.PayPalLogoCanvas = factory(root, {});
	});

	// Next for Node.js or CommonJS.
	} else if (typeof exports !== 'undefined') {
		factory(root, {});

	// Finally, as a browser global.
	} else {
		root.PayPalLogoCanvas = factory(root, {});
	}

}(this, function(root, PayPalLogoCanvas) {
	
	'use strict';

	var darkBlue = 'rgba(31,59,128,0.9)';
	var lightBlue = 'rgba(23,155,215,1)';

	var drawLetter_P = function (config) {
		
		// characteristic definitions for
		// the appearance of Letter 'P'
		var cornerRadius = 4;
		var height       = config.y + config.size;
		var legWidth     = config.x + config.size * 0.26;
		var legHeight    = height - config.size * 0.4;
		var headWidth    = legWidth + config.size * 0.60;
		var headHeight   = height - legHeight;
		var topHeadProjection     = legWidth + config.size * 0.23;
		var bottomHeadCurveOffset = config.y + config.size * 0.22;

		var ctx = config.ctx;
		// begin the path trace on the given context
		ctx.beginPath();
		// init the cursor's start point to  
		// start drawing head of 'P'
		ctx.moveTo(config.x, config.y+cornerRadius);

		// draw the top left curved corner and the top of
		// 'P' till it starts to curve down.
		ctx.quadraticCurveTo(config.x, config.y, config.x+cornerRadius, config.y);
		ctx.lineTo(topHeadProjection, config.y);

		// draw the curved Head portion of 'P'
		ctx.bezierCurveTo(headWidth,config.y, 
		headWidth - 2*cornerRadius, headHeight + bottomHeadCurveOffset, 
		legWidth+ 2*cornerRadius,legHeight); 

		// draw the right side of the leg 
		// and the curved potion that connects
		// this leg to the Head of 'P'
		ctx.quadraticCurveTo(legWidth, legHeight, legWidth, legHeight+cornerRadius);
		ctx.lineTo(legWidth, height-cornerRadius);

		// draw the bottom potion of the leg
		// and the bottom two rounded corners
		// for the leg of 'P'
		ctx.quadraticCurveTo(legWidth, height, legWidth-cornerRadius, height);
		ctx.lineTo(config.x+cornerRadius, height);
		ctx.quadraticCurveTo(config.x, height, config.x, height-cornerRadius);

		// finish by drawing the left side of the 'P'
		ctx.lineTo(config.x, config.y+cornerRadius);

		// stroke and fill the drawn path
		// with the supplied color
		ctx.fillStyle = config.color;
		ctx.fill();  
		ctx.strokeStyle = config.color;
		ctx.lineWidth = 1;
		ctx.stroke();
	};

	/*
		The public api to draw the PayPal Logo on canvas.

		@param {object} canvasEl - the canvas HTML Element to draw.
		@param {number} size - pixel size of the PayPal logo to draw.
	*/
	PayPalLogoCanvas.draw = function (canvasEl, size) {
		// get a reference to the 2d context of canvas
		var ctx = canvasEl.getContext('2d'); 
		// give enough padding-room by shifting
		// the start point inside canvas with the 
		// following values so that the logo appears  
		// visible even after it is titled.
		var startX = 25;
		var startY = 10;  	
		// apply a transform on the x axis so that 
		// the logo appears a bit tilted on the x-axis.
		ctx.transform(1, 0, Math.sin(-0.1), 1, 0, 0);
		// draw the light blue 'P', with shifted start point and
		// 96% of the given size so that it appears below the 
		// dark colored 'P' that we are about to draw.
		drawLetter_P({
			ctx: ctx,
			x: startX + size*0.26,
			y: startY + size*0.25,
			size: size*0.96,
			color: lightBlue 
		});
		//draw the dark colored 'P'
		drawLetter_P({
			ctx: ctx,
			x: startX,
			y: startY,
			size: size,
			color: darkBlue 
		});
	};

	return PayPalLogoCanvas;

}));