PayPal Logo On Canvas
=====================

a simple javascript library to draw PayPal Logo on a given canvas.

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
  // exists in the DOM, the below code draws the PayPal 
  // logo of size 200px onto that canvas.

  var canvasEl = document.getElementById('paypal-logo');
  PayPalLogoCanvas.draw(canvasEl, 200);
```


### example
* jsfiddle: http://jsfiddle.net/samsel/unqrods8/3/
* html: https://github.com/samsel/paypal-logo-canvas/blob/master/example/index.html
 
###### a blog post about this library
http://samsel.github.io/2014/09/20/the-paypal-logo-challenge/
