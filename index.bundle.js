"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.svg */ "./src/bg.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    font-size: calc(16px);\n    height: 100%;\n    width: 100%;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n\n\n.container {\n    height: 100%;\n    width: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.base {\n    height: max(40vh, 500px);\n    width: max(60vw, 750px);\n    background-color: rgb(166, 199, 214);\n    border-radius: 5rem;\n    box-shadow: 5px 5px 50px black;\n    display: grid;\n    grid-template-rows: 1fr 4fr 1fr ;\n    grid-template-columns: 1fr;\n}\n\n.title {\n    grid-row: 1 / 2;\n    font-weight: 700;\n    color: white;\n    font-size: 2rem;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.middle {\n    position: relative;\n    grid-row: 2 / 3;\n    display:grid;\n    grid-template-columns: 1fr 5px 4fr;\n}\n\nnav {\n    grid-column: 1 / 2;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    gap:10px;\n    align-items: center;\n}\n\nnav>*, li>button {\n    background-color: inherit;\n    border: none;\n    color: white;\n    font-size: 1.5rem;\n    font-weight: 700;\n    text-align: left;\n    justify-content: center;\n}\n\nnav>* {\n    width: 80%;\n}\n\n.bar {\n    height: 5px;\n    border-radius: 5px;\n    background-color: white;\n}\n\n.bar2 {\n    grid-column: 2 / 3;\n    width: 5px;\n    height: 100%;\n    border-radius: 5px;\n    background-color: white;\n}\n\n\n\n.date_options {\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    align-items: flex-end;\n    width: 100%;\n    gap:5px;\n}\n\nli>button {\n    width: 100%;\n    font-size: 1.2rem;\n}\n\nbutton {\n    position: relative;\n}\n\n.button-bg {\n    display: inline;\n    position: absolute;\n    top: 0;\n    left: -5px;\n    height: 100%;\n    width: 0%;\n    background-color: rgba(98, 139, 167, 0.5);\n    z-index: 0;\n    border-radius: 5px;\n}\n\n.text {\n    position:relative;\n    z-index: 1;\n}\n\nli {\n    width: 80%;\n    position: relative;\n}\n\n@keyframes button-hover {\n    from {width: 0%;}\n    to {width: calc(100% + 5px);}\n}\n\nnav>button:hover>.button-bg, .date_options>li:hover>.button-bg {\n    animation: button-hover;\n    animation-duration: 0.5s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n}\n\n.tasks {\n    height: 100%;\n}\n\n.taskList {\n    position: absolute;\n    grid-column: 3 / 4;\n    height: 100%;\n    width: 100%;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    overflow:auto;\n}\n\n.task {\n    width: 90%;\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n    flex: 0;\n    border-radius: 5px;\n    padding:10px;\n}\n\n.task>* {\n    display: inline;\n}\n\n.high {background-color: coral;}\n.medium {background-color: rgb(248, 164, 133);}\n.low {background-color: rgb(255, 207, 189);}\n\nh2 {\n    color:white;\n}\n.desc {\n    color:rgb(46, 44, 44);\n}\n\n.bottom {\n    grid-row: 3/4;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add {\n    width: 80%;\n    height: 40%;\n    border-radius: 1rem;\n    font-size: 2rem;\n    color:green;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n}\n\n.project_add {\n    width: 80%;\n    height: 10%;\n    border-radius: 1rem;\n    font-size: 2rem;\n    background-color: rgb(148, 255, 127);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n}\n \n\n.fieldset {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    --sizer: 500px;\n    width: max(calc(var(--sizer) - 150px), 50vw);\n    height: max(var(--sizer), 50vw);\n    background-color: white;\n    border: 5px solid cornflowerblue;\n    background-color: lightblue;\n    border-radius: 30px;\n    \n}\n\n.radio {\n    border:none;\n    border-top: 5px solid cornflowerblue;\n    display: flex;\n    justify-content: space-around;\n    margin-top: 10px;\n}\n\nlabel {\n    font-size: 1.5rem;\n}\n\nlabel, legend {\n    text-align: center;\n    color:white;\n    font-weight: 700;\n    text-shadow: 0px 0px 5px black;\n}\nlegend {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    font-size: 2rem;\n    border: 5px solid cornflowerblue;\n    border-radius: 20px;\n    background-color: lightblue;\n\n}\n\ntextarea {\n    font:inherit;\n    text-align: center;\n    padding: 0.3rem;\n}\n\n.form_buttons>button {\n\n    height: 100%;\n    width: 40%;\n    align-self: center;\n    border-radius: 1rem;\n    justify-self: flex-end;\n    border:none;\n    color:white;\n    font-size: 2rem;\n    text-shadow: 0px 0px 5px white;\n}\n\n.form_buttons {\n    box-sizing: border-box;\n    margin-top: 10%;\n    display:flex;\n    justify-content: center;\n    gap:20px;\n    height: 10%;\n    width:100%;\n}\n\n.submit {\n    background-color:rgb(4, 165, 4);\n}\n.destroy {\n    background-color: rgb(170, 5, 5);\n}\n\ninput[type = \"text\"] {\n    font-size: 1.5rem;\n    text-align: center;\n} \n\n\nfieldset>input[type = \"datetime-local\"] {\n    height: 3rem;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-self: center;\n}\n\n.project_container {\n    position: absolute;\n    grid-column: 3 / 4;\n    height: 100%;\n    width: 100%;\n    display:flex;\n    gap: 0.5rem;\n    overflow:auto;\n    flex-wrap: wrap;\n}\n\n.project_container>.add_project {\n    width: 3rem;\n    height: 3rem;\n    background-color: rgb(131, 255, 127);\n    color: white;\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 3rem;\n}\n\n.project {\n    border: 5px solid coral;\n    height: 8rem;\n    width: 8rem;\n    display:flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgb(48, 152, 250);\n    border-radius: 1rem;\n}\n\n.project_title {\n    color:white;\n}\n\n.project_description {\n    color:white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n}\n\n.project_description>* {\n    width: 100%;\n    text-align: center;\n}\n\n\n\n\n\n\n.hidden {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body {\n    font-size: calc(16px);\n    height: 100%;\n    width: 100%;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n\n\n.container {\n    height: 100%;\n    width: 100%;\n    background-image: url('./bg.svg');\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.base {\n    height: max(40vh, 500px);\n    width: max(60vw, 750px);\n    background-color: rgb(166, 199, 214);\n    border-radius: 5rem;\n    box-shadow: 5px 5px 50px black;\n    display: grid;\n    grid-template-rows: 1fr 4fr 1fr ;\n    grid-template-columns: 1fr;\n}\n\n.title {\n    grid-row: 1 / 2;\n    font-weight: 700;\n    color: white;\n    font-size: 2rem;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.middle {\n    position: relative;\n    grid-row: 2 / 3;\n    display:grid;\n    grid-template-columns: 1fr 5px 4fr;\n}\n\nnav {\n    grid-column: 1 / 2;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    gap:10px;\n    align-items: center;\n}\n\nnav>*, li>button {\n    background-color: inherit;\n    border: none;\n    color: white;\n    font-size: 1.5rem;\n    font-weight: 700;\n    text-align: left;\n    justify-content: center;\n}\n\nnav>* {\n    width: 80%;\n}\n\n.bar {\n    height: 5px;\n    border-radius: 5px;\n    background-color: white;\n}\n\n.bar2 {\n    grid-column: 2 / 3;\n    width: 5px;\n    height: 100%;\n    border-radius: 5px;\n    background-color: white;\n}\n\n\n\n.date_options {\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    align-items: flex-end;\n    width: 100%;\n    gap:5px;\n}\n\nli>button {\n    width: 100%;\n    font-size: 1.2rem;\n}\n\nbutton {\n    position: relative;\n}\n\n.button-bg {\n    display: inline;\n    position: absolute;\n    top: 0;\n    left: -5px;\n    height: 100%;\n    width: 0%;\n    background-color: rgba(98, 139, 167, 0.5);\n    z-index: 0;\n    border-radius: 5px;\n}\n\n.text {\n    position:relative;\n    z-index: 1;\n}\n\nli {\n    width: 80%;\n    position: relative;\n}\n\n@keyframes button-hover {\n    from {width: 0%;}\n    to {width: calc(100% + 5px);}\n}\n\nnav>button:hover>.button-bg, .date_options>li:hover>.button-bg {\n    animation: button-hover;\n    animation-duration: 0.5s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n}\n\n.tasks {\n    height: 100%;\n}\n\n.taskList {\n    position: absolute;\n    grid-column: 3 / 4;\n    height: 100%;\n    width: 100%;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    overflow:auto;\n}\n\n.task {\n    width: 90%;\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n    flex: 0;\n    border-radius: 5px;\n    padding:10px;\n}\n\n.task>* {\n    display: inline;\n}\n\n.high {background-color: coral;}\n.medium {background-color: rgb(248, 164, 133);}\n.low {background-color: rgb(255, 207, 189);}\n\nh2 {\n    color:white;\n}\n.desc {\n    color:rgb(46, 44, 44);\n}\n\n.bottom {\n    grid-row: 3/4;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add {\n    width: 80%;\n    height: 40%;\n    border-radius: 1rem;\n    font-size: 2rem;\n    color:green;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n}\n\n.project_add {\n    width: 80%;\n    height: 10%;\n    border-radius: 1rem;\n    font-size: 2rem;\n    background-color: rgb(148, 255, 127);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n}\n \n\n.fieldset {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    --sizer: 500px;\n    width: max(calc(var(--sizer) - 150px), 50vw);\n    height: max(var(--sizer), 50vw);\n    background-color: white;\n    border: 5px solid cornflowerblue;\n    background-color: lightblue;\n    border-radius: 30px;\n    \n}\n\n.radio {\n    border:none;\n    border-top: 5px solid cornflowerblue;\n    display: flex;\n    justify-content: space-around;\n    margin-top: 10px;\n}\n\nlabel {\n    font-size: 1.5rem;\n}\n\nlabel, legend {\n    text-align: center;\n    color:white;\n    font-weight: 700;\n    text-shadow: 0px 0px 5px black;\n}\nlegend {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    font-size: 2rem;\n    border: 5px solid cornflowerblue;\n    border-radius: 20px;\n    background-color: lightblue;\n\n}\n\ntextarea {\n    font:inherit;\n    text-align: center;\n    padding: 0.3rem;\n}\n\n.form_buttons>button {\n\n    height: 100%;\n    width: 40%;\n    align-self: center;\n    border-radius: 1rem;\n    justify-self: flex-end;\n    border:none;\n    color:white;\n    font-size: 2rem;\n    text-shadow: 0px 0px 5px white;\n}\n\n.form_buttons {\n    box-sizing: border-box;\n    margin-top: 10%;\n    display:flex;\n    justify-content: center;\n    gap:20px;\n    height: 10%;\n    width:100%;\n}\n\n.submit {\n    background-color:rgb(4, 165, 4);\n}\n.destroy {\n    background-color: rgb(170, 5, 5);\n}\n\ninput[type = \"text\"] {\n    font-size: 1.5rem;\n    text-align: center;\n} \n\n\nfieldset>input[type = \"datetime-local\"] {\n    height: 3rem;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-self: center;\n}\n\n.project_container {\n    position: absolute;\n    grid-column: 3 / 4;\n    height: 100%;\n    width: 100%;\n    display:flex;\n    gap: 0.5rem;\n    overflow:auto;\n    flex-wrap: wrap;\n}\n\n.project_container>.add_project {\n    width: 3rem;\n    height: 3rem;\n    background-color: rgb(131, 255, 127);\n    color: white;\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 3rem;\n}\n\n.project {\n    border: 5px solid coral;\n    height: 8rem;\n    width: 8rem;\n    display:flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgb(48, 152, 250);\n    border-radius: 1rem;\n}\n\n.project_title {\n    color:white;\n}\n\n.project_description {\n    color:white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n}\n\n.project_description>* {\n    width: 100%;\n    text-align: center;\n}\n\n\n\n\n\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeElement": () => (/* binding */ makeElement)
/* harmony export */ });
function makeElement(type, cl) {
    let el = document.createElement(type);
    el.classList.add(cl);
    return el;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _layoutBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutBuilder */ "./src/layoutBuilder.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _taskGen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskGen */ "./src/taskGen.js");





const doc = document;

const container = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.makeElement)('div', 'container');
doc.body.appendChild(container);

const base = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.makeElement)('div', 'base');
container.appendChild(base);

const title = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.makeElement)('h1', 'title');
title.textContent = "To-Do list";
base.appendChild(title);

const middle = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.makeElement)('div', 'middle');
base.appendChild(middle)

middle.appendChild((0,_layoutBuilder__WEBPACK_IMPORTED_MODULE_1__.navigation)());
middle.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.makeElement)('div', 'bar2'));
const taskList = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.makeElement)('div', 'taskList');
middle.appendChild(taskList);

middle.appendChild((0,_layoutBuilder__WEBPACK_IMPORTED_MODULE_1__.genProjects)());

/*taskList.appendChild(generateCard("Homework","Math and chemistry","high"));
taskList.appendChild(generateCard("Homework","Math and chemistry","medium"));
taskList.appendChild(generateCard("Homework","Math and chemistry","low"));*/

const bottom = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.makeElement)('div', 'bottom');
base.appendChild(bottom);

bottom.appendChild((0,_layoutBuilder__WEBPACK_IMPORTED_MODULE_1__.genButton)());





/***/ }),

/***/ "./src/layoutBuilder.js":
/*!******************************!*\
  !*** ./src/layoutBuilder.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form_prompt": () => (/* binding */ form_prompt),
/* harmony export */   "genButton": () => (/* binding */ genButton),
/* harmony export */   "genProjects": () => (/* binding */ genProjects),
/* harmony export */   "navigation": () => (/* binding */ navigation),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _taskGen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskGen.js */ "./src/taskGen.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");





let current_tab = "Home";
let form = undefined;

function form_prompt() {
    document.querySelector(".base").classList.add("hidden");
    document.querySelector(".container").appendChild(form);
}

function show(arg = current_tab) {
    if (_projects_js__WEBPACK_IMPORTED_MODULE_2__.project === undefined) { current_tab = arg; }

    const taskList = document.querySelector('.taskList');
    taskList.classList.remove('hidden');
    document.querySelector('.project_container').classList.add('hidden');

    const today = new Date();
    if (arg === "Today") {
        for (let i = 0; i < Array.from(taskList.children).length; i++) {
            let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskList.children[i].querySelector("input[type = 'datetime-local']").value);
            if (today.getFullYear() !== date.getFullYear() || today.getMonth() !== date.getMonth() || today.getDate() !== date.getDate()) { taskList.children[i].classList.add('hidden'); }
            else { taskList.children[i].classList.remove('hidden'); console.log(today.getDate(), date.getDate()); }
        }
    }
    else if (arg === "This week") {
        for (let i = 0; i < Array.from(taskList.children).length; i++) {
            let maxW = today.getTime() + ((7 - today.getDay()) * 24 * 60 * 60 * 1000);
            let minW = today.getTime() - ((today.getDay()) * 24 * 60 * 60 * 1000);

            function check(sDate) {
                if (sDate.getTime() > minW && sDate.getTime() < maxW) { return false; }
                return true;
            }

            let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskList.children[i].querySelector("input[type = 'datetime-local']").value);
            if ((today.getFullYear() !== date.getFullYear()) || today.getMonth() !== date.getMonth() || check(date)) { taskList.children[i].classList.add('hidden'); }
            else { taskList.children[i].classList.remove('hidden'); }
        }
    }
    else if (arg === "This month") {
        for (let i = 0; i < Array.from(taskList.children).length; i++) {
            let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskList.children[i].querySelector("input[type = 'datetime-local']").value);
            if (today.getFullYear() !== date.getFullYear() || today.getMonth() !== date.getMonth()) { taskList.children[i].classList.add('hidden'); }
            else { taskList.children[i].classList.remove('hidden'); }
        }
    }
    else {
        for (let i = 0; i < Array.from(taskList.children).length; i++) {
            taskList.children[i].classList.remove('hidden');
        }
    }
}

function gen(parent, ...args) {
    args.forEach((arg) => {
        let capsule = document.createElement('li');

        let b = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'menu');
        let text = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'text');
        text.textContent = arg;
        b.appendChild(text);
        capsule.appendChild(b);
        capsule.appendChild((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'button-bg'));
        parent.appendChild(capsule);

        b.addEventListener('click', (e) => {
            show(arg);
        })
    })
}

function makeB(name) {
    let b1 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'menu');
    let text = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'text');
    text.textContent = name;
    b1.appendChild(text);
    b1.appendChild((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'button-bg'));
    return b1;
}

function navigation() {
    const nav = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('nav', 'navigator');

    let bar = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'bar');
    let bar2 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'bar');

    let b1 = makeB('Home');

    let desc = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'tasks');
    desc.textContent = "Tasks";

    let bundler = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('ul', 'date_options');
    gen(bundler, "Today", "This week", "This month", "All");
    desc.appendChild(bundler);

    let b2 = makeB('Projects')

    let buts = [b1, bar, b2, bar2, desc];
    buts.forEach((b) => { nav.appendChild(b) });


    let addProject = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'add_project');
    addProject.addEventListener('click', (e) => {
        (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.makeProject)("name");
        document.querySelector('.project_container').appendChild(addProject);
    })
    addProject.textContent = "+";

    function addP(parent) {
        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'add_project');
    }

    b2.addEventListener('click', (e) => {
        document.querySelector('.taskList').classList.add('hidden');
        document.querySelector('.project_container').classList.remove('hidden');
        document.querySelector('.project_container').appendChild(addProject);
    })

    return nav;
}

function genForm() {

    function makeInput(type, text, idd, par) {
        const inp = document.createElement('input');
        inp.type = type;
        inp.id = idd
        const label = document.createElement('label');
        label.for = idd;
        label.textContent = text;

        par.appendChild(label);
        par.appendChild(inp);
        return inp;
    }

    form = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('form', 'form');
    const field = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('fieldset', 'fieldset');
    const legend = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('legend', 'legend');
    legend.textContent = "Task details";
    form.appendChild(field);
    field.appendChild(legend);
    let title = makeInput("text", "Title", "Title", field);
    title.placeholder = "Cool title";
    title.required = true;

    const inp = document.createElement('textarea');
    inp.rows = 8;
    inp.id = 'desc';
    inp.placeholder = "This task is very cool and important";

    const label = document.createElement('label');
    label.for = 'desc';
    label.textContent = "Description";

    field.appendChild(label);
    field.appendChild(inp);

    const radio_field = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('fieldset', 'radio');

    const priorities = ["High", "Medium", "Low"];
    const boxes = [];
    const radio_legend = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('legend', 'radio_legend');
    radio_legend.textContent = "Priority";
    radio_field.appendChild(radio_legend);

    const date = makeInput("datetime-local", "Date", "Date", field);
    date.required = true;

    priorities.forEach((pr) => {
        const divi = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'form_s');
        const inp = document.createElement('input');
        inp.type = "radio";
        inp.id = pr;
        inp.name = "priorities"
        const label = document.createElement('label');
        label.for = pr;
        label.textContent = pr;
        divi.appendChild(label);
        divi.appendChild(inp);
        radio_field.appendChild(divi);
        boxes.push(inp);

        if (pr === "Medium") { inp.checked = true; }
    })
    field.appendChild(radio_field)


    const button_div = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'form_buttons');

    const submit = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'submit');
    submit.type = "button";
    submit.textContent = "✓";

    const destroy = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'destroy');
    destroy.type = "button";
    destroy.textContent = "X";

    [destroy, submit].forEach((b) => {
        b.addEventListener('click', () => {
            let stop = false;
            [title, date].forEach((inpu) => {
                if (!inpu.checkValidity()) { inpu.reportValidity(); stop = true; }
            })
            if (stop) { return; }
            let desc = inp.value;
            let prio = "Medium";
            boxes.forEach((ch) => {
                if (ch.checked) {prio = ch.id;}
            })
            const time = date.value;
            const card = (0,_taskGen_js__WEBPACK_IMPORTED_MODULE_1__.generateCard)(title.value, desc, prio.toLowerCase(), time);
            document.querySelector('.taskList').appendChild(card)
            document.querySelector(".base").classList.remove("hidden");
            document.querySelector(".container").removeChild(form);
            (0,_taskGen_js__WEBPACK_IMPORTED_MODULE_1__.reorder)();
            show();
            if (_projects_js__WEBPACK_IMPORTED_MODULE_2__.project !== undefined) {
                _projects_js__WEBPACK_IMPORTED_MODULE_2__.project.tasks.push({title: title.value, description: desc, priority: prio.toLowerCase(), dueDate: time});
                (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.update_display)();
            }
        })
    })

    button_div.appendChild(submit);
    button_div.appendChild(destroy);
    field.appendChild(button_div);
    return form;

}

function genButton() {
    const form = genForm();
    const add = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'add');
    add.textContent = '+';
    add.addEventListener('click', () => {
        form_prompt();
    })
    return add;
}

function genProjects(name) {
    const project_container = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'project_container');
    project_container.classList.add('hidden');
    return project_container;

}



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeProject": () => (/* binding */ makeProject),
/* harmony export */   "project": () => (/* binding */ cur_project),
/* harmony export */   "update_display": () => (/* binding */ update_display)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _layoutBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutBuilder */ "./src/layoutBuilder.js");



const projects = [];
let cur_project = undefined;

const genProject = function(name, desc, ele) {
    const html_ele = ele;
    const tasks = [];
    return {tasks, name, desc, html_ele};
}

function update_display()
{
    cur_project = undefined;
    const taskList = document.querySelector('.taskList');
    projects.forEach((p) => {
        let descs = p.html_ele.querySelector(".project_description");
        let child = descs.lastElementChild;
        while (child) {
            descs.removeChild(child);
            child = descs.lastElementChild;
        }
        p.tasks.forEach((obj) => {
            let info = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'project_title_desc');
            info.textContent = obj.title;
            info.classList.add(obj.priority);
            p.html_ele.querySelector(".project_description").appendChild(info);
        })
    })
}

function on_click(project_a, b) {
    b.addEventListener('click', (e) => {
        cur_project = project_a;
        (0,_layoutBuilder__WEBPACK_IMPORTED_MODULE_1__.form_prompt)();
    })
}

function makeProject(name) {
    const container = document.querySelector('.project_container');
    const project = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'project');
    const project_obj = genProject(name, "name", project);

    const h1 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h1', 'project_title');

    h1.textContent = project_obj.name;
    const desc = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'project_description');

    const add_b = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'project_add');
    on_click(project_obj, add_b);



    project.appendChild(h1);
    project.appendChild(desc);
    project.appendChild(add_b);


    container.appendChild(project);
    projects.push(project_obj);
}



/***/ }),

/***/ "./src/taskGen.js":
/*!************************!*\
  !*** ./src/taskGen.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateCard": () => (/* binding */ generateCard),
/* harmony export */   "makeTask": () => (/* binding */ makeTask),
/* harmony export */   "reorder": () => (/* binding */ reorder)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");



const makeTask = function(title, description, priority, dueDate) {
    return {title, description, priority, dueDate};
}

function reorder() {
    const tasks = document.querySelector('.taskList');
    const DOM_el = Array.from(tasks.children);
    const dates = [];
    DOM_el.forEach((ch) => {
        dates.push((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(ch.querySelector(("input[type = 'datetime-local']")).value));
    })

    dates.sort(date_fns__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const newOrder = [];

    dates.forEach((dt) => {
        let chosenInd = DOM_el.findIndex((a) => {
            console.log(DOM_el);
            let el_d = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(a.querySelector("input[type = 'datetime-local']").value);
            return el_d.getTime() === dt.getTime();
        })
        console.log(chosenInd);
        let chosen = DOM_el[chosenInd];
        DOM_el.splice(chosenInd, 1);

        newOrder.push(chosen);
    })

    var child = tasks.lastElementChild;
    while (child) {tasks.removeChild(child);
    child = tasks.lastElementChild;}

    newOrder.forEach((e) => {tasks.appendChild(e)});

}

function generateCard(...info) {
    const task = makeTask(info[0], info[1], info[2], info[3])
    const card = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'task');
    const title = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h2', 'task_title');
    title.textContent = task.title;

    const desc = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'desc');
    desc.textContent = task.description;
    const date = document.createElement('input');
    date.type = 'datetime-local';
    date.value = task.dueDate;

    const left = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'left');
    left.appendChild(title);
    left.appendChild(desc)

    card.classList.add(task.priority);

    card.appendChild(left);
    card.appendChild(date);
    return card;
}






/***/ }),

/***/ "./src/bg.svg":
/*!********************!*\
  !*** ./src/bg.svg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dc563d03b3c5c066ee9.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxvQkFBb0IsdUJBQXVCLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxzQkFBc0IsdUJBQXVCLHdCQUF3QixNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxV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STtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FB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TDtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQSw2QkFBNkIscUJBQXFCOztBQUVsRDs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHdEQUFNO0FBQ3ZCLGtCQUFrQix3REFBTTtBQUN4Qjs7QUFFQSxpQkFBaUIsd0RBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHdEQUFNO0FBQ3ZCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGF5b3V0QnVpbGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tHZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYmcuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNnB4KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5iYXNlIHtcXG4gICAgaGVpZ2h0OiBtYXgoNDB2aCwgNTAwcHgpO1xcbiAgICB3aWR0aDogbWF4KDYwdncsIDc1MHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NiwgMTk5LCAyMTQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDUwcHggYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAxZnIgO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1pZGRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVweCA0ZnI7XFxufVxcblxcbm5hdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOjEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdj4qLCBsaT5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5uYXY+KiB7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5iYXIge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJhcjIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuLmRhdGVfb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6NXB4O1xcbn1cXG5cXG5saT5idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJ1dHRvbi1iZyB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IC01cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk4LCAxMzksIDE2NywgMC41KTtcXG4gICAgei1pbmRleDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5saSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBidXR0b24taG92ZXIge1xcbiAgICBmcm9tIHt3aWR0aDogMCU7fVxcbiAgICB0byB7d2lkdGg6IGNhbGMoMTAwJSArIDVweCk7fVxcbn1cXG5cXG5uYXY+YnV0dG9uOmhvdmVyPi5idXR0b24tYmcsIC5kYXRlX29wdGlvbnM+bGk6aG92ZXI+LmJ1dHRvbi1iZyB7XFxuICAgIGFuaW1hdGlvbjogYnV0dG9uLWhvdmVyO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFza0xpc3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6MTBweDtcXG59XFxuXFxuLnRhc2s+KiB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmhpZ2gge2JhY2tncm91bmQtY29sb3I6IGNvcmFsO31cXG4ubWVkaXVtIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNjQsIDEzMyk7fVxcbi5sb3cge2JhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwNywgMTg5KTt9XFxuXFxuaDIge1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuLmRlc2Mge1xcbiAgICBjb2xvcjpyZ2IoNDYsIDQ0LCA0NCk7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOmdyZWVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdF9hZGQge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAyNTUsIDEyNyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbiBcXG5cXG4uZmllbGRzZXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC0tc2l6ZXI6IDUwMHB4O1xcbiAgICB3aWR0aDogbWF4KGNhbGModmFyKC0tc2l6ZXIpIC0gMTUwcHgpLCA1MHZ3KTtcXG4gICAgaGVpZ2h0OiBtYXgodmFyKC0tc2l6ZXIpLCA1MHZ3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIFxcbn1cXG5cXG4ucmFkaW8ge1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxubGFiZWwsIGxlZ2VuZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcXG59XFxubGVnZW5kIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcblxcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQ6aW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxufVxcblxcbi5mb3JtX2J1dHRvbnM+YnV0dG9uIHtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggd2hpdGU7XFxufVxcblxcbi5mb3JtX2J1dHRvbnMge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuXFxuLnN1Ym1pdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQsIDE2NSwgNCk7XFxufVxcbi5kZXN0cm95IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgNSwgNSk7XFxufVxcblxcbmlucHV0W3R5cGUgPSBcXFwidGV4dFxcXCJdIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59IFxcblxcblxcbmZpZWxkc2V0PmlucHV0W3R5cGUgPSBcXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXSB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0X2NvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wcm9qZWN0X2NvbnRhaW5lcj4uYWRkX3Byb2plY3Qge1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMxLCAyNTUsIDEyNyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGNvcmFsO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxNTIsIDI1MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0X3RpdGxlIHtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5wcm9qZWN0X2Rlc2NyaXB0aW9uIHtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3RfZGVzY3JpcHRpb24+KiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcblxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLHdFQUF3RTtBQUM1RTs7OztBQUlBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5REFBaUM7SUFDakMsNEJBQTRCO0lBQzVCLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVB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Q1gsV0FBVztJQUNYLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7Ozs7Ozs7QUFPQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNnB4KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JnLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJhc2Uge1xcbiAgICBoZWlnaHQ6IG1heCg0MHZoLCA1MDBweCk7XFxuICAgIHdpZHRoOiBtYXgoNjB2dywgNzUwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY2LCAxOTksIDIxNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNTBweCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDFmciA7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWlkZGxlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNXB4IDRmcjtcXG59XFxuXFxubmF2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6MTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2PiosIGxpPmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm5hdj4qIHtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmJhciB7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYmFyMiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5cXG4uZGF0ZV9vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDo1cHg7XFxufVxcblxcbmxpPmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYnV0dG9uLWJnIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogLTVweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTgsIDEzOSwgMTY3LCAwLjUpO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbmxpIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJ1dHRvbi1ob3ZlciB7XFxuICAgIGZyb20ge3dpZHRoOiAwJTt9XFxuICAgIHRvIHt3aWR0aDogY2FsYygxMDAlICsgNXB4KTt9XFxufVxcblxcbm5hdj5idXR0b246aG92ZXI+LmJ1dHRvbi1iZywgLmRhdGVfb3B0aW9ucz5saTpob3Zlcj4uYnV0dG9uLWJnIHtcXG4gICAgYW5pbWF0aW9uOiBidXR0b24taG92ZXI7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrTGlzdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OmF1dG87XFxufVxcblxcbi50YXNrIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzoxMHB4O1xcbn1cXG5cXG4udGFzaz4qIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uaGlnaCB7YmFja2dyb3VuZC1jb2xvcjogY29yYWw7fVxcbi5tZWRpdW0ge2JhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDE2NCwgMTMzKTt9XFxuLmxvdyB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA3LCAxODkpO31cXG5cXG5oMiB7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG4uZGVzYyB7XFxuICAgIGNvbG9yOnJnYig0NiwgNDQsIDQ0KTtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA0MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6Z3JlZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0X2FkZCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDI1NSwgMTI3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuIFxcblxcbi5maWVsZHNldCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgLS1zaXplcjogNTAwcHg7XFxuICAgIHdpZHRoOiBtYXgoY2FsYyh2YXIoLS1zaXplcikgLSAxNTBweCksIDUwdncpO1xcbiAgICBoZWlnaHQ6IG1heCh2YXIoLS1zaXplciksIDUwdncpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgY29ybmZsb3dlcmJsdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgXFxufVxcblxcbi5yYWRpbyB7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgY29ybmZsb3dlcmJsdWU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5sYWJlbCwgbGVnZW5kIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xcbn1cXG5sZWdlbmQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuXFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZm9udDppbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG59XFxuXFxuLmZvcm1fYnV0dG9ucz5idXR0b24ge1xcblxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCB3aGl0ZTtcXG59XFxuXFxuLmZvcm1fYnV0dG9ucyB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB3aWR0aDoxMDAlO1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNCwgMTY1LCA0KTtcXG59XFxuLmRlc3Ryb3kge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCA1LCA1KTtcXG59XFxuXFxuaW5wdXRbdHlwZSA9IFxcXCJ0ZXh0XFxcIl0ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gXFxuXFxuXFxuZmllbGRzZXQ+aW5wdXRbdHlwZSA9IFxcXCJkYXRldGltZS1sb2NhbFxcXCJdIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RfY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIG92ZXJmbG93OmF1dG87XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnByb2plY3RfY29udGFpbmVyPi5hZGRfcHJvamVjdCB7XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDI1NSwgMTI3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgY29yYWw7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDE1MiwgMjUwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLnByb2plY3RfdGl0bGUge1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLnByb2plY3RfZGVzY3JpcHRpb24ge1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdF9kZXNjcmlwdGlvbj4qIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gbWFrZUVsZW1lbnQodHlwZSwgY2wpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2wpO1xuICAgIHJldHVybiBlbDtcbn1cblxuZXhwb3J0IHttYWtlRWxlbWVudH07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBuYXZpZ2F0aW9uLCBnZW5CdXR0b24sIGdlblByb2plY3RzIH0gZnJvbSAnLi9sYXlvdXRCdWlsZGVyJztcbmltcG9ydCB7IG1ha2VFbGVtZW50IGFzIGNyZWF0ZSB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBnZW5lcmF0ZUNhcmQgfSBmcm9tICcuL3Rhc2tHZW4nO1xuXG5jb25zdCBkb2MgPSBkb2N1bWVudDtcblxuY29uc3QgY29udGFpbmVyID0gY3JlYXRlKCdkaXYnLCAnY29udGFpbmVyJyk7XG5kb2MuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG5jb25zdCBiYXNlID0gY3JlYXRlKCdkaXYnLCAnYmFzZScpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGJhc2UpO1xuXG5jb25zdCB0aXRsZSA9IGNyZWF0ZSgnaDEnLCAndGl0bGUnKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJUby1EbyBsaXN0XCI7XG5iYXNlLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuY29uc3QgbWlkZGxlID0gY3JlYXRlKCdkaXYnLCAnbWlkZGxlJyk7XG5iYXNlLmFwcGVuZENoaWxkKG1pZGRsZSlcblxubWlkZGxlLmFwcGVuZENoaWxkKG5hdmlnYXRpb24oKSk7XG5taWRkbGUuYXBwZW5kQ2hpbGQoY3JlYXRlKCdkaXYnLCAnYmFyMicpKTtcbmNvbnN0IHRhc2tMaXN0ID0gY3JlYXRlKCdkaXYnLCAndGFza0xpc3QnKTtcbm1pZGRsZS5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG5cbm1pZGRsZS5hcHBlbmRDaGlsZChnZW5Qcm9qZWN0cygpKTtcblxuLyp0YXNrTGlzdC5hcHBlbmRDaGlsZChnZW5lcmF0ZUNhcmQoXCJIb21ld29ya1wiLFwiTWF0aCBhbmQgY2hlbWlzdHJ5XCIsXCJoaWdoXCIpKTtcbnRhc2tMaXN0LmFwcGVuZENoaWxkKGdlbmVyYXRlQ2FyZChcIkhvbWV3b3JrXCIsXCJNYXRoIGFuZCBjaGVtaXN0cnlcIixcIm1lZGl1bVwiKSk7XG50YXNrTGlzdC5hcHBlbmRDaGlsZChnZW5lcmF0ZUNhcmQoXCJIb21ld29ya1wiLFwiTWF0aCBhbmQgY2hlbWlzdHJ5XCIsXCJsb3dcIikpOyovXG5cbmNvbnN0IGJvdHRvbSA9IGNyZWF0ZSgnZGl2JywgJ2JvdHRvbScpO1xuYmFzZS5hcHBlbmRDaGlsZChib3R0b20pO1xuXG5ib3R0b20uYXBwZW5kQ2hpbGQoZ2VuQnV0dG9uKCkpO1xuXG5cblxuIiwiaW1wb3J0IHsgbWFrZUVsZW1lbnQgYXMgY3JlYXRlIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlQ2FyZCwgcmVvcmRlciwgbWFrZVRhc2sgfSBmcm9tICcuL3Rhc2tHZW4uanMnO1xuaW1wb3J0IHsgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBtYWtlUHJvamVjdCwgcHJvamVjdCwgdXBkYXRlX2Rpc3BsYXkgfSBmcm9tICcuL3Byb2plY3RzLmpzJztcblxubGV0IGN1cnJlbnRfdGFiID0gXCJIb21lXCI7XG5sZXQgZm9ybSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gZm9ybV9wcm9tcHQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNlXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoZm9ybSk7XG59XG5cbmZ1bmN0aW9uIHNob3coYXJnID0gY3VycmVudF90YWIpIHtcbiAgICBpZiAocHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7IGN1cnJlbnRfdGFiID0gYXJnOyB9XG5cbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrTGlzdCcpO1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X2NvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGlmIChhcmcgPT09IFwiVG9kYXlcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFycmF5LmZyb20odGFza0xpc3QuY2hpbGRyZW4pLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IHBhcnNlSVNPKHRhc2tMaXN0LmNoaWxkcmVuW2ldLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlID0gJ2RhdGV0aW1lLWxvY2FsJ11cIikudmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRvZGF5LmdldEZ1bGxZZWFyKCkgIT09IGRhdGUuZ2V0RnVsbFllYXIoKSB8fCB0b2RheS5nZXRNb250aCgpICE9PSBkYXRlLmdldE1vbnRoKCkgfHwgdG9kYXkuZ2V0RGF0ZSgpICE9PSBkYXRlLmdldERhdGUoKSkgeyB0YXNrTGlzdC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTsgfVxuICAgICAgICAgICAgZWxzZSB7IHRhc2tMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOyBjb25zb2xlLmxvZyh0b2RheS5nZXREYXRlKCksIGRhdGUuZ2V0RGF0ZSgpKTsgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGFyZyA9PT0gXCJUaGlzIHdlZWtcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFycmF5LmZyb20odGFza0xpc3QuY2hpbGRyZW4pLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbWF4VyA9IHRvZGF5LmdldFRpbWUoKSArICgoNyAtIHRvZGF5LmdldERheSgpKSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgbGV0IG1pblcgPSB0b2RheS5nZXRUaW1lKCkgLSAoKHRvZGF5LmdldERheSgpKSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVjayhzRGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChzRGF0ZS5nZXRUaW1lKCkgPiBtaW5XICYmIHNEYXRlLmdldFRpbWUoKSA8IG1heFcpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkYXRlID0gcGFyc2VJU08odGFza0xpc3QuY2hpbGRyZW5baV0ucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnXVwiKS52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoKHRvZGF5LmdldEZ1bGxZZWFyKCkgIT09IGRhdGUuZ2V0RnVsbFllYXIoKSkgfHwgdG9kYXkuZ2V0TW9udGgoKSAhPT0gZGF0ZS5nZXRNb250aCgpIHx8IGNoZWNrKGRhdGUpKSB7IHRhc2tMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOyB9XG4gICAgICAgICAgICBlbHNlIHsgdGFza0xpc3QuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7IH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChhcmcgPT09IFwiVGhpcyBtb250aFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXJyYXkuZnJvbSh0YXNrTGlzdC5jaGlsZHJlbikubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gcGFyc2VJU08odGFza0xpc3QuY2hpbGRyZW5baV0ucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnXVwiKS52YWx1ZSk7XG4gICAgICAgICAgICBpZiAodG9kYXkuZ2V0RnVsbFllYXIoKSAhPT0gZGF0ZS5nZXRGdWxsWWVhcigpIHx8IHRvZGF5LmdldE1vbnRoKCkgIT09IGRhdGUuZ2V0TW9udGgoKSkgeyB0YXNrTGlzdC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTsgfVxuICAgICAgICAgICAgZWxzZSB7IHRhc2tMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOyB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXJyYXkuZnJvbSh0YXNrTGlzdC5jaGlsZHJlbikubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhc2tMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW4ocGFyZW50LCAuLi5hcmdzKSB7XG4gICAgYXJncy5mb3JFYWNoKChhcmcpID0+IHtcbiAgICAgICAgbGV0IGNhcHN1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgIGxldCBiID0gY3JlYXRlKCdidXR0b24nLCAnbWVudScpO1xuICAgICAgICBsZXQgdGV4dCA9IGNyZWF0ZSgnZGl2JywgJ3RleHQnKTtcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGFyZztcbiAgICAgICAgYi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgY2Fwc3VsZS5hcHBlbmRDaGlsZChiKTtcbiAgICAgICAgY2Fwc3VsZS5hcHBlbmRDaGlsZChjcmVhdGUoJ2RpdicsICdidXR0b24tYmcnKSk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjYXBzdWxlKTtcblxuICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHNob3coYXJnKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBtYWtlQihuYW1lKSB7XG4gICAgbGV0IGIxID0gY3JlYXRlKCdidXR0b24nLCAnbWVudScpO1xuICAgIGxldCB0ZXh0ID0gY3JlYXRlKCdkaXYnLCAndGV4dCcpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGIxLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGIxLmFwcGVuZENoaWxkKGNyZWF0ZSgnZGl2JywgJ2J1dHRvbi1iZycpKTtcbiAgICByZXR1cm4gYjE7XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb24oKSB7XG4gICAgY29uc3QgbmF2ID0gY3JlYXRlKCduYXYnLCAnbmF2aWdhdG9yJyk7XG5cbiAgICBsZXQgYmFyID0gY3JlYXRlKCdkaXYnLCAnYmFyJyk7XG4gICAgbGV0IGJhcjIgPSBjcmVhdGUoJ2RpdicsICdiYXInKTtcblxuICAgIGxldCBiMSA9IG1ha2VCKCdIb21lJyk7XG5cbiAgICBsZXQgZGVzYyA9IGNyZWF0ZSgnZGl2JywgJ3Rhc2tzJyk7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IFwiVGFza3NcIjtcblxuICAgIGxldCBidW5kbGVyID0gY3JlYXRlKCd1bCcsICdkYXRlX29wdGlvbnMnKTtcbiAgICBnZW4oYnVuZGxlciwgXCJUb2RheVwiLCBcIlRoaXMgd2Vla1wiLCBcIlRoaXMgbW9udGhcIiwgXCJBbGxcIik7XG4gICAgZGVzYy5hcHBlbmRDaGlsZChidW5kbGVyKTtcblxuICAgIGxldCBiMiA9IG1ha2VCKCdQcm9qZWN0cycpXG5cbiAgICBsZXQgYnV0cyA9IFtiMSwgYmFyLCBiMiwgYmFyMiwgZGVzY107XG4gICAgYnV0cy5mb3JFYWNoKChiKSA9PiB7IG5hdi5hcHBlbmRDaGlsZChiKSB9KTtcblxuXG4gICAgbGV0IGFkZFByb2plY3QgPSBjcmVhdGUoJ2J1dHRvbicsICdhZGRfcHJvamVjdCcpO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBtYWtlUHJvamVjdChcIm5hbWVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X2NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICAgIH0pXG4gICAgYWRkUHJvamVjdC50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG4gICAgZnVuY3Rpb24gYWRkUChwYXJlbnQpIHtcbiAgICAgICAgY3JlYXRlKCdidXR0b24nLCAnYWRkX3Byb2plY3QnKTtcbiAgICB9XG5cbiAgICBiMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrTGlzdCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9jb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gICAgfSlcblxuICAgIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGdlbkZvcm0oKSB7XG5cbiAgICBmdW5jdGlvbiBtYWtlSW5wdXQodHlwZSwgdGV4dCwgaWRkLCBwYXIpIHtcbiAgICAgICAgY29uc3QgaW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wLnR5cGUgPSB0eXBlO1xuICAgICAgICBpbnAuaWQgPSBpZGRcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5mb3IgPSBpZGQ7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgICAgICBwYXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBwYXIuYXBwZW5kQ2hpbGQoaW5wKTtcbiAgICAgICAgcmV0dXJuIGlucDtcbiAgICB9XG5cbiAgICBmb3JtID0gY3JlYXRlKCdmb3JtJywgJ2Zvcm0nKTtcbiAgICBjb25zdCBmaWVsZCA9IGNyZWF0ZSgnZmllbGRzZXQnLCAnZmllbGRzZXQnKTtcbiAgICBjb25zdCBsZWdlbmQgPSBjcmVhdGUoJ2xlZ2VuZCcsICdsZWdlbmQnKTtcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIlRhc2sgZGV0YWlsc1wiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQpO1xuICAgIGZpZWxkLmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gICAgbGV0IHRpdGxlID0gbWFrZUlucHV0KFwidGV4dFwiLCBcIlRpdGxlXCIsIFwiVGl0bGVcIiwgZmllbGQpO1xuICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJDb29sIHRpdGxlXCI7XG4gICAgdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgaW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBpbnAucm93cyA9IDg7XG4gICAgaW5wLmlkID0gJ2Rlc2MnO1xuICAgIGlucC5wbGFjZWhvbGRlciA9IFwiVGhpcyB0YXNrIGlzIHZlcnkgY29vbCBhbmQgaW1wb3J0YW50XCI7XG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuZm9yID0gJ2Rlc2MnO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXG4gICAgZmllbGQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGZpZWxkLmFwcGVuZENoaWxkKGlucCk7XG5cbiAgICBjb25zdCByYWRpb19maWVsZCA9IGNyZWF0ZSgnZmllbGRzZXQnLCAncmFkaW8nKTtcblxuICAgIGNvbnN0IHByaW9yaXRpZXMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuICAgIGNvbnN0IGJveGVzID0gW107XG4gICAgY29uc3QgcmFkaW9fbGVnZW5kID0gY3JlYXRlKCdsZWdlbmQnLCAncmFkaW9fbGVnZW5kJyk7XG4gICAgcmFkaW9fbGVnZW5kLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICAgIHJhZGlvX2ZpZWxkLmFwcGVuZENoaWxkKHJhZGlvX2xlZ2VuZCk7XG5cbiAgICBjb25zdCBkYXRlID0gbWFrZUlucHV0KFwiZGF0ZXRpbWUtbG9jYWxcIiwgXCJEYXRlXCIsIFwiRGF0ZVwiLCBmaWVsZCk7XG4gICAgZGF0ZS5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBwcmlvcml0aWVzLmZvckVhY2goKHByKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdmkgPSBjcmVhdGUoJ2RpdicsICdmb3JtX3MnKTtcbiAgICAgICAgY29uc3QgaW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIGlucC5pZCA9IHByO1xuICAgICAgICBpbnAubmFtZSA9IFwicHJpb3JpdGllc1wiXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuZm9yID0gcHI7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gcHI7XG4gICAgICAgIGRpdmkuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBkaXZpLmFwcGVuZENoaWxkKGlucCk7XG4gICAgICAgIHJhZGlvX2ZpZWxkLmFwcGVuZENoaWxkKGRpdmkpO1xuICAgICAgICBib3hlcy5wdXNoKGlucCk7XG5cbiAgICAgICAgaWYgKHByID09PSBcIk1lZGl1bVwiKSB7IGlucC5jaGVja2VkID0gdHJ1ZTsgfVxuICAgIH0pXG4gICAgZmllbGQuYXBwZW5kQ2hpbGQocmFkaW9fZmllbGQpXG5cblxuICAgIGNvbnN0IGJ1dHRvbl9kaXYgPSBjcmVhdGUoJ2RpdicsICdmb3JtX2J1dHRvbnMnKTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGNyZWF0ZSgnYnV0dG9uJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdC50eXBlID0gXCJidXR0b25cIjtcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIuKck1wiO1xuXG4gICAgY29uc3QgZGVzdHJveSA9IGNyZWF0ZSgnYnV0dG9uJywgJ2Rlc3Ryb3knKTtcbiAgICBkZXN0cm95LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGRlc3Ryb3kudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgIFtkZXN0cm95LCBzdWJtaXRdLmZvckVhY2goKGIpID0+IHtcbiAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBzdG9wID0gZmFsc2U7XG4gICAgICAgICAgICBbdGl0bGUsIGRhdGVdLmZvckVhY2goKGlucHUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlucHUuY2hlY2tWYWxpZGl0eSgpKSB7IGlucHUucmVwb3J0VmFsaWRpdHkoKTsgc3RvcCA9IHRydWU7IH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAoc3RvcCkgeyByZXR1cm47IH1cbiAgICAgICAgICAgIGxldCBkZXNjID0gaW5wLnZhbHVlO1xuICAgICAgICAgICAgbGV0IHByaW8gPSBcIk1lZGl1bVwiO1xuICAgICAgICAgICAgYm94ZXMuZm9yRWFjaCgoY2gpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2guY2hlY2tlZCkge3ByaW8gPSBjaC5pZDt9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgdGltZSA9IGRhdGUudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZ2VuZXJhdGVDYXJkKHRpdGxlLnZhbHVlLCBkZXNjLCBwcmlvLnRvTG93ZXJDYXNlKCksIHRpbWUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0JykuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFzZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIikucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgICAgICAgICByZW9yZGVyKCk7XG4gICAgICAgICAgICBzaG93KCk7XG4gICAgICAgICAgICBpZiAocHJvamVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHt0aXRsZTogdGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uOiBkZXNjLCBwcmlvcml0eTogcHJpby50b0xvd2VyQ2FzZSgpLCBkdWVEYXRlOiB0aW1lfSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlX2Rpc3BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgYnV0dG9uX2Rpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIGJ1dHRvbl9kaXYuYXBwZW5kQ2hpbGQoZGVzdHJveSk7XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoYnV0dG9uX2Rpdik7XG4gICAgcmV0dXJuIGZvcm07XG5cbn1cblxuZnVuY3Rpb24gZ2VuQnV0dG9uKCkge1xuICAgIGNvbnN0IGZvcm0gPSBnZW5Gb3JtKCk7XG4gICAgY29uc3QgYWRkID0gY3JlYXRlKCdidXR0b24nLCAnYWRkJyk7XG4gICAgYWRkLnRleHRDb250ZW50ID0gJysnO1xuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZm9ybV9wcm9tcHQoKTtcbiAgICB9KVxuICAgIHJldHVybiBhZGQ7XG59XG5cbmZ1bmN0aW9uIGdlblByb2plY3RzKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0X2NvbnRhaW5lciA9IGNyZWF0ZSgnZGl2JywgJ3Byb2plY3RfY29udGFpbmVyJyk7XG4gICAgcHJvamVjdF9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcmV0dXJuIHByb2plY3RfY29udGFpbmVyO1xuXG59XG5cbmV4cG9ydCB7IG5hdmlnYXRpb24sIGdlbkJ1dHRvbiwgZ2VuUHJvamVjdHMsIHNob3csIGZvcm1fcHJvbXB0IH07IiwiaW1wb3J0IHsgYWRkIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHttYWtlRWxlbWVudCBhcyBjcmVhdGV9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQge3Nob3csIGZvcm1fcHJvbXB0fSBmcm9tICcuL2xheW91dEJ1aWxkZXInO1xuY29uc3QgcHJvamVjdHMgPSBbXTtcbmxldCBjdXJfcHJvamVjdCA9IHVuZGVmaW5lZDtcblxuY29uc3QgZ2VuUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUsIGRlc2MsIGVsZSkge1xuICAgIGNvbnN0IGh0bWxfZWxlID0gZWxlO1xuICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgcmV0dXJuIHt0YXNrcywgbmFtZSwgZGVzYywgaHRtbF9lbGV9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVfZGlzcGxheSgpXG57XG4gICAgY3VyX3Byb2plY3QgPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3QnKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIGxldCBkZXNjcyA9IHAuaHRtbF9lbGUucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBsZXQgY2hpbGQgPSBkZXNjcy5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIGRlc2NzLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkID0gZGVzY3MubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBwLnRhc2tzLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgICAgICAgbGV0IGluZm8gPSBjcmVhdGUoJ2RpdicsICdwcm9qZWN0X3RpdGxlX2Rlc2MnKTtcbiAgICAgICAgICAgIGluZm8udGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgICAgICAgICBpbmZvLmNsYXNzTGlzdC5hZGQob2JqLnByaW9yaXR5KTtcbiAgICAgICAgICAgIHAuaHRtbF9lbGUucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X2Rlc2NyaXB0aW9uXCIpLmFwcGVuZENoaWxkKGluZm8pO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG9uX2NsaWNrKHByb2plY3RfYSwgYikge1xuICAgIGIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjdXJfcHJvamVjdCA9IHByb2plY3RfYTtcbiAgICAgICAgZm9ybV9wcm9tcHQoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBtYWtlUHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZSgnZGl2JywgJ3Byb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0X29iaiA9IGdlblByb2plY3QobmFtZSwgXCJuYW1lXCIsIHByb2plY3QpO1xuXG4gICAgY29uc3QgaDEgPSBjcmVhdGUoJ2gxJywgJ3Byb2plY3RfdGl0bGUnKTtcblxuICAgIGgxLnRleHRDb250ZW50ID0gcHJvamVjdF9vYmoubmFtZTtcbiAgICBjb25zdCBkZXNjID0gY3JlYXRlKCdkaXYnLCAncHJvamVjdF9kZXNjcmlwdGlvbicpO1xuXG4gICAgY29uc3QgYWRkX2IgPSBjcmVhdGUoJ2J1dHRvbicsICdwcm9qZWN0X2FkZCcpO1xuICAgIG9uX2NsaWNrKHByb2plY3Rfb2JqLCBhZGRfYik7XG5cblxuXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChoMSk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGFkZF9iKTtcblxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdF9vYmopO1xufVxuXG5leHBvcnQge21ha2VQcm9qZWN0LCBjdXJfcHJvamVjdCBhcyBwcm9qZWN0LCB1cGRhdGVfZGlzcGxheX07IiwiaW1wb3J0IHttYWtlRWxlbWVudCBhcyBjcmVhdGV9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQge2NvbXBhcmVBc2MsIHBhcnNlSVNPfSBmcm9tICdkYXRlLWZucyc7XG5cbmNvbnN0IG1ha2VUYXNrID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZX07XG59XG5cbmZ1bmN0aW9uIHJlb3JkZXIoKSB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3QnKTtcbiAgICBjb25zdCBET01fZWwgPSBBcnJheS5mcm9tKHRhc2tzLmNoaWxkcmVuKTtcbiAgICBjb25zdCBkYXRlcyA9IFtdO1xuICAgIERPTV9lbC5mb3JFYWNoKChjaCkgPT4ge1xuICAgICAgICBkYXRlcy5wdXNoKHBhcnNlSVNPKGNoLnF1ZXJ5U2VsZWN0b3IoKFwiaW5wdXRbdHlwZSA9ICdkYXRldGltZS1sb2NhbCddXCIpKS52YWx1ZSkpO1xuICAgIH0pXG5cbiAgICBkYXRlcy5zb3J0KGNvbXBhcmVBc2MpO1xuICAgIGNvbnN0IG5ld09yZGVyID0gW107XG5cbiAgICBkYXRlcy5mb3JFYWNoKChkdCkgPT4ge1xuICAgICAgICBsZXQgY2hvc2VuSW5kID0gRE9NX2VsLmZpbmRJbmRleCgoYSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coRE9NX2VsKTtcbiAgICAgICAgICAgIGxldCBlbF9kID0gcGFyc2VJU08oYS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZSA9ICdkYXRldGltZS1sb2NhbCddXCIpLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBlbF9kLmdldFRpbWUoKSA9PT0gZHQuZ2V0VGltZSgpO1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhjaG9zZW5JbmQpO1xuICAgICAgICBsZXQgY2hvc2VuID0gRE9NX2VsW2Nob3NlbkluZF07XG4gICAgICAgIERPTV9lbC5zcGxpY2UoY2hvc2VuSW5kLCAxKTtcblxuICAgICAgICBuZXdPcmRlci5wdXNoKGNob3Nlbik7XG4gICAgfSlcblxuICAgIHZhciBjaGlsZCA9IHRhc2tzLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgd2hpbGUgKGNoaWxkKSB7dGFza3MucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIGNoaWxkID0gdGFza3MubGFzdEVsZW1lbnRDaGlsZDt9XG5cbiAgICBuZXdPcmRlci5mb3JFYWNoKChlKSA9PiB7dGFza3MuYXBwZW5kQ2hpbGQoZSl9KTtcblxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNhcmQoLi4uaW5mbykge1xuICAgIGNvbnN0IHRhc2sgPSBtYWtlVGFzayhpbmZvWzBdLCBpbmZvWzFdLCBpbmZvWzJdLCBpbmZvWzNdKVxuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGUoJ2RpdicsICd0YXNrJyk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGUoJ2gyJywgJ3Rhc2tfdGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICBjb25zdCBkZXNjID0gY3JlYXRlKCdkaXYnLCAnZGVzYycpO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGUudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG4gICAgZGF0ZS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcblxuICAgIGNvbnN0IGxlZnQgPSBjcmVhdGUoJ2RpdicsICdsZWZ0Jyk7XG4gICAgbGVmdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbGVmdC5hcHBlbmRDaGlsZChkZXNjKVxuXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKHRhc2sucHJpb3JpdHkpO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChsZWZ0KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIHJldHVybiBjYXJkO1xufVxuXG5leHBvcnQge2dlbmVyYXRlQ2FyZCwgcmVvcmRlciwgbWFrZVRhc2t9O1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==