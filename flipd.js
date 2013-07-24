/*!
 * Flipd Feature Flagging Library v0.0.1
 * http://github.com/eclifford/flipd
 *
 */
window.Flipd = (function(window, document, undefined) {
  "use strict";

  // Hash to store feature flags
  var features = {},
      QUERY_STRING_KEY = 'fp',
      CSS_PREFIX = 'fp-';

  // Retrieve features to turn on from the query string
  function getQueryStringFeatures() {
    // Override features w/query string
    var queryString = getParameterByName(QUERY_STRING_KEY);

    if(queryString) {
      var featureKeys = queryString.split(',');
      for (var i = 0; i < featureKeys.length; i++) {
        features[featureKeys[i]] = true;
      };    
    }
  }

  // Append feature flag classes to body tag
  function setCssClasses() {
    // Set CSS classes on HTML for features
    var body = document.body;
    for(var feature in features) {
      body.className = body.className + " " + feature;
    }   
  }

  // Retrieve query string parameter by name
  function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  return {
    init: function(data) {
      features = data;
      getQueryStringFeatures();
      setCssClasses();
    },
    on: function(feature, callback) {
      if(feature in features && features[feature]) {
        callback();
      }
    },
    off: function(feature, callback) {
      if(!(feature in features) || !features[feature]) {
        callback();
      }
    },
    add: function() {
      features[key] = true;
    },
    remove: function() {
      features[key] = false;
    }
  }
})(this, this.document);