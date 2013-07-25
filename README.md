# Flipd 

## About

Flipd is a very simple JavaScript feature flag library. It provides an easy to use mechanism for on/off blocks of code per feature as well as appending class names pertaining to activated features to the DOM. 

## Features

* Pure JavaScript no library dependencies 
* Easy configuration
* Supported on all browsers

## Setup

Flipd needs included and configured before any JavaScript files that need feature flagged. Below is an example of basic setup.

```html
<!-- Example: index.html or something similar -->
<html>
  <head>
    <!-- HEAD CONTENT --> 
  </head>
  <body>
    <!-- BODY CONTENT --> 

    <!-- 1) Include flipd -->
    <script src='flipd.js'></script>

    <script>
      // 2) Create your feature hash. Usually injected dynamically by server side code etc. 
      var features = {
        'feature1': true,
        'feature2': false,
        'feature3': true
      };
      
      // 3) Pass hash to Flipd
      Flipd.init(features);
    </script>

    <!-- FEATURE FLAG DEPENDENT JAVASCRIPTS --> 
  </body>
</html>

```

## Usage

### JavaScript

Flipd provides two simple methods **on** and **off** which execute a callback if a feature flag is set.

```javascript

Flipd.on('FEATURE_NAME', function() {
  // Execute desired logic when a feature flag is turned on
});

Flipd.off('FEATURE_NAME', function() {
  // Execute desired logic when a feature flag is turned off
});

```

### Stylesheet

In addition css class names are appended to the **body** for all enabled features. Therefor in CSS you can use specificity around your feature names to hide/show your features DOM elements.

```css
#feature1, #feature2, #feature3 {
  display: none;
}

.fp-feature1 #feature1 {
  display: block;
}

.fp-feature2 #feature2 {
  display: block;
}

.fp-feature3 #feature3 {
  display: block;
}

```

## Example

## License

The MIT License (MIT)

Copyright (c) 2013 Eric Clifford

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.