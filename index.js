(function (window, document, undefined) {

	'use strict';

	var drawLetter_P = function (ctx, startX, startY, size, color) {
		var height = startY + size;
		var legWidth = startX + size * 0.26;
		var legHeight = height - size * 0.4;
		var headWidth = legWidth + size * 0.60;
		var headHeight = height - legHeight;
		var headCurvePullOffset = startY + size * 0.22;
		var cornerRadius = 4;
		var headPrefix = legWidth + size * 0.23;
		ctx.beginPath();

		// move to start point to start drawing head of 'P'
		ctx.moveTo(startX, startY+cornerRadius);
		ctx.quadraticCurveTo(startX, startY, startX+cornerRadius, startY);
		ctx.lineTo(headPrefix, startY);
		// the curved Head portion to the right of 'P' that closes 'P'
		ctx.bezierCurveTo(headWidth,startY, 
		headWidth - 2*cornerRadius, headHeight + headCurvePullOffset, 
		legWidth+ 2*cornerRadius,legHeight); 

		ctx.lineTo(legWidth+cornerRadius, legHeight);
		ctx.quadraticCurveTo(legWidth, legHeight, legWidth, legHeight+cornerRadius);

		ctx.lineTo(legWidth, height-cornerRadius);
		ctx.quadraticCurveTo(legWidth, height, legWidth-cornerRadius, height);

		ctx.lineTo(startX+cornerRadius, height);
		ctx.quadraticCurveTo(startX, height, startX, height-cornerRadius);

		ctx.lineTo(startX, startY+cornerRadius);

		ctx.fillStyle = color;
		ctx.fill();  
		ctx.strokeStyle = color;
		ctx.lineWidth = 1;
		ctx.stroke();
	};  	

	return {
		drawPayPalLogoOnCanvas : function (canvasEl) {
			var size = 120;
			var startX = 40;
			var startY = 10;
			var ctx = canvasEl.getContext('2d');
			ctx.transform(1, 0, Math.sin(-0.1), 1, 0, 0);
			drawLetter_P(ctx, startX+size * 0.26, startY+size * 0.25, size*0.96, 'rgba(23,155,215,1)');
			drawLetter_P(ctx, startX, startY, size, 'rgba(31,59,128,0.9)');	
		};
	};

})(window, document);