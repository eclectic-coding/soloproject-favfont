// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/fontData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var fontData = [{
  id: 1,
  name: 'Roboto',
  fallback: 'san-serif',
  designer: 'Christian Robertson'
}, {
  id: 2,
  name: 'Goldman',
  fallback: 'cursive',
  designer: 'Lam Bao, Duy Dao, Yellow Type Foundry'
}, {
  id: 3,
  name: 'Xanh Mono',
  fallback: 'mono-space',
  designer: 'Lam Bao, Duy Dao, Yellow Type Foundry'
}, {
  id: 4,
  name: 'Open Sans',
  fallback: 'san-serif',
  designer: 'Steve Matteson'
}, {
  id: 5,
  name: 'Big Shoulder Stencil Text',
  fallback: 'cursive',
  designer: 'Patric King'
}, {
  id: 6,
  name: 'Noto Sans JP',
  fallback: 'sans-serif',
  designer: 'Google'
}, {
  id: 7,
  name: 'Lato',
  fallback: 'sans-serif',
  designer: 'Łukasz Dziedzic'
}, {
  id: 8,
  name: 'Source Sans Pro',
  fallback: 'sans-serif',
  designer: 'Paul D. Hunt'
}, {
  id: 9,
  name: 'Oswald',
  fallback: 'sans-serif',
  designer: 'Vernon Adams, Kalapi Gajjar, Cyreal'
}, {
  id: 10,
  name: 'Poppins',
  fallback: 'sans-serif',
  designer: 'Indian Type Foundry, Jonny Pinhorn'
}, {
  id: 11,
  name: 'Raleway',
  fallback: 'sans-serif',
  designer: 'Multiple Designers'
}, {
  id: 12,
  name: 'Merriweather',
  fallback: 'sans-serif',
  designer: 'Sorkin Type'
}];
var _default = fontData;
exports.default = _default;
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

var _fontData = _interopRequireDefault(require("../data/fontData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var originalSampleText = 'Almost before we knew it, we had left the ground.';
var fontSearch = document.getElementById('font-search');
var changeText = document.getElementById('input-text');
var fontSize = document.getElementById('font-size');
var resetIcon = document.getElementById('reset-ui'); // Variables

var fontCard = document.getElementById('card-array'); // Load fonts

var getFont = function getFont() {
  _fontData.default.map(function (font) {
    return fontCard.innerHTML += "\n        <div class=\"card\">\n          <div class=\"card__title\">\n            <h2>".concat(font.name, "</h2>\n            <span><i class=\"far fa-plus-square card__icon\"></i></span>\n          </div>\n          <p class=\"card__subtitle\">").concat(font.designer, "</p>\n          <p id=\"body-text\"\n            class=\"card__bodytext\" \n            style=\"font-family: '").concat(font.name, "', ").concat(font.fallback, "\"\n            >\n            ").concat(originalSampleText, "\n          </p>\n        </div>\n      ");
  });
};

getFont(); // Search font array

var filterItems = function filterItems(arr, query) {
  return arr.includes(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}; // Event listeners
// Change sample text


changeText.addEventListener('input', function (event) {
  var formValue = event.target.value.trim();
  var textField = Array.prototype.slice.call(document.querySelectorAll('#body-text'));
  event.preventDefault();

  if (formValue !== '') {
    textField.forEach(function (text) {
      text.textContent = formValue;
    });
  } else {
    textField.forEach(function (text) {
      text.textContent = originalSampleText;
    });
  }
}); // Change font size -- defaults to 20px

fontSize.addEventListener('input', function (event) {
  var textField = Array.prototype.slice.call(document.querySelectorAll('#body-text'));
  var currentFontSize = event.target.value;
  textField.forEach(function (text) {
    text.style.fontSize = currentFontSize;
  });
}); // Reset UI

resetIcon.addEventListener('click', function () {
  // Reset font size
  var textField = Array.prototype.slice.call(document.querySelectorAll('#body-text'));
  textField.forEach(function (text) {
    text.style.fontSize = "20px";
  }); // Reset custom text

  textField.forEach(function (text) {
    text.textContent = originalSampleText;
  });
});
},{"../data/fontData":"data/fontData.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37257" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map