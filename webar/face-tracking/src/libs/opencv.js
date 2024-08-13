// Note: there is bug (maybe just an update, not a bug?) in vite esbuild, introduced since version 4.1.0-beta.2
//  commit:  https://github.com/vitejs/vite/commit/c895379
// This bug incorrectly replace some code around `"use strict";`
// We manually added a single space, i.e. `"use strict" ;` to get around the regex replacement
// If we need to compile a new opencvjs file later, we might have to do that again (until vite fixed it)

let Module = {};

export var cv = (function () {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
    function (cv) {
      cv = cv || {};



      return cv.ready
    }
  );
})();

cv(Module);

