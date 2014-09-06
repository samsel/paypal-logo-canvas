Paypal Logo On Canvas
=====================

a javascript library to draw PayPal Logo on a given canvas.

![PayPal Logo](https://raw.githubusercontent.com/samsel/paypal-logo-canvas/master/example/example.png)

### installation
```bash
$ bower install paypal-logo-canvas
```

### usage
```javascript
  // include the library in any browswer enviroment.
  //  - AMD or
  //  - CommonJS or 
  //  - just a simple global.

  // call the draw function on the exposed object
  // and supply a canvasElement and size of the
  // PayPal logo to draw.

  // assuming a canvas element with ID 'paypal-logo' 
  // exists in the DOM, the below code draw the PayPal 
  // logo of size 200px into that canvas.

  var canvasEl = document.getElementById('paypal-logo');
  PayPalLogoCanvas.draw(canvasEl, 200);
```


### example
* jsfiddle: http://jsfiddle.net/samsel/unqrods8/
* html: https://github.com/samsel/paypal-logo-canvas/blob/master/example/index.html