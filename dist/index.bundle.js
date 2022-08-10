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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    font-size: max(min(16px, calc(8px + 1vw)), 14px);\n    height: 100%;\n    width: 100%;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n\n\n.container {\n    height: 100%;\n    width: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.base {\n    height: clamp(500px, 40vh, 800px);\n    width: clamp(750px, 60vw, 900px);\n    background-color: rgb(166, 199, 214);\n    border-radius: 5rem;\n    box-shadow: 5px 5px 50px black;\n    display: grid;\n    grid-template-rows: 1fr 4fr 1fr ;\n    grid-template-columns: 1fr;\n}\n\n.title {\n    grid-row: 1 / 2;\n    font-weight: 700;\n    color: white;\n    font-size: 2rem;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n   \n}\n\n.middle {\n    position: relative;\n    grid-row: 2 / 3;\n    display:grid;\n    grid-template-columns: 1fr 5px 4fr;\n}\n\n.bottom {\n    grid-row: 3 / 4;\n}\n\n\nnav {\n    grid-column: 1 / 2;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    gap:10px;\n    align-items: center;\n}\n\nnav>*, li>button {\n    background-color: inherit;\n    border: none;\n    color: white;\n    font-size: 1.5rem;\n    font-weight: 700;\n    text-align: left;\n    justify-content: center;\n}\n\nnav>* {\n    width: 80%;\n}\n\n.bar {\n    height: 5px;\n    border-radius: 5px;\n    background-color: white;\n}\n\n.bar2 {\n    grid-column: 2 / 3;\n    width: 5px;\n    height: 100%;\n    border-radius: 5px;\n    background-color: white;\n}\n\n\n\n.date_options {\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    align-items: flex-end;\n    width: 100%;\n    gap:5px;\n}\n\nli>button {\n    width: 100%;\n    font-size: 1.2rem;\n}\n\nbutton {\n    position: relative;\n}\n\n.button-bg {\n    display: inline;\n    position: absolute;\n    top: 0;\n    left: -5px;\n    height: 100%;\n    width: 0%;\n    background-color: rgba(98, 139, 167, 0.5);\n    z-index: 0;\n    border-radius: 5px;\n}\n\n.text {\n    position:relative;\n    z-index: 1;\n}\n\nli {\n    width: 80%;\n    position: relative;\n}\n\n@keyframes button-hover {\n    from {width: 0%;}\n    to {width: calc(100% + 5px);}\n}\n\nnav>button:hover>.button-bg, .date_options>li:hover>.button-bg {\n    animation: button-hover;\n    animation-duration: 0.5s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n}\n\n.tasks {\n    height: 100%;\n}\n\n.taskList {\n    position: absolute;\n    grid-column: 3 / 4;\n    height: 100%;\n    width: 100%;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    overflow:auto;\n    gap: 10px;\n\n}\n\n.task {\n    width: 90%;\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n    flex: 0;\n    border-radius: 5px;\n    padding:10px;\n    position: relative;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.destruction {\n    width: 1rem;\n    height: 100%;\n    position:absolute;\n    right: -1rem;\n    background-color: red;\n    border-radius: 5px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.task>* {\n    display: inline;\n}\n\n.task_title {\n    white-space: nowrap;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    overflow-wrap: break-word;\n}\n\n.high {background-color: coral;}\n.medium {background-color: rgb(248, 164, 133);}\n.low {background-color: rgb(255, 207, 189);}\n\nh2 {\n    color:white;\n    text-shadow: 0 0 3px gray;\n}\n.desc {\n    color:white;\n    text-shadow: 0 0 3px gray;\n\n\n\n    \n    overflow-wrap: break-word;\n}\n\n.task>input {\n    max-width: 40%;\n}\n\n.bottom {\n    grid-row: 3/4;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add {\n\n    width: 80%;\n    border-radius: 1rem;\n    font-size: 2rem;\n    color:green;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n}\n\n.project_add {\n    box-sizing: border-box;\n    width: 80%;\n    height: 1rem;\n    border-radius: 1rem;\n    font-size: 2rem;\n    background-color: rgb(148, 255, 127);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n}\n \n\n.fieldset {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    --sizer: 500px;\n    width: clamp(calc(var(--sizer) - 150px), 50vw, 700px);\n    height: clamp(var(--sizer), 80vh, 1000px);\n    background-color: white;\n    border: 5px solid cornflowerblue;\n    background-color: lightblue;\n    border-radius: 30px;\n    \n}\n\n.left {\n    max-width: 60%;\n}\n\n.radio {\n    border:none;\n    border-top: 5px solid cornflowerblue;\n    display: flex;\n    justify-content: space-around;\n    margin-top: 10px;\n}\n\nlabel {\n    font-size: 1.5rem;\n}\n\nlabel, legend {\n    text-align: center;\n    color:white;\n    font-weight: 700;\n    text-shadow: 0px 0px 5px black;\n}\nlegend {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    font-size: 2rem;\n    border: 5px solid cornflowerblue;\n    border-radius: 20px;\n    background-color: lightblue;\n\n}\n\ntextarea {\n    font:inherit;\n    text-align: center;\n    padding: 0.3rem;\n}\n\n.form_buttons>button {\n\n    height: 100%;\n    width: 40%;\n    align-self: center;\n    border-radius: 1rem;\n    justify-self: flex-end;\n    border:none;\n    color:white;\n    font-size: 2rem;\n    text-shadow: 0px 0px 5px white;\n}\n\n.form_buttons {\n    box-sizing: border-box;\n    margin-top: 10%;\n    display:flex;\n    justify-content: center;\n    gap:20px;\n    height: 10%;\n    width:100%;\n    margin-bottom: 1rem;\n}\n\n.submit {\n    background-color:rgb(4, 165, 4);\n}\n.destroy {\n    background-color: rgb(170, 5, 5);\n}\n\ninput[type = \"text\"] {\n    font-size: 1.5rem;\n    text-align: center;\n} \n\n\nfieldset>input[type = \"datetime-local\"] {\n    height: 3rem;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-self: center;\n}\n\n.project_container {\n    box-sizing: border-box;\n    position: absolute;\n    grid-column: 3 / 4;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 10.5rem);\n    grid-template-rows: repeat(auto-fit, 13.5rem);\n    justify-content: center;\n\n    gap: 0.5rem;\n\n    overflow:auto;\n    flex-wrap: wrap;\n}\n\n.project_container>.add_project {\n    \n    width: 3rem;\n    height: 3rem;\n    background-color: rgb(131, 255, 127);\n    color: white;\n    font-size: 2rem;\n    /*display: flex;\n    justify-content: center;\n    align-items: center;*/\n\n    justify-self: center;\n    border: none;\n    border-radius: 3rem;\n    margin-top: 2.5rem;\n}\n\n.project {\n    position: relative;\n\n    box-sizing: border-box;\n    border: 5px solid coral;\n    height: 12rem;\n    width: 10rem;\n    display:flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    justify-self: center;\n    align-items: center;\n    background-color: rgb(48, 152, 250);\n    border-radius: 1rem;\n    margin-top: 1rem;\n}\n\n.project_title {\n    color:white;\n    overflow:hidden;\n    text-align: center;\n    width: 100%;\n    min-height: 2em;\n    max-height: 2em;\n    line-height: 1em;\n    text-overflow: ellipsis;\n    word-wrap: break-word;\n}\n\n.project_description {\n    color:white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 40%;\n    --b_color: white;\n    border-top: 0px solid var(--b_color);\n    border-bottom: 0px solid var(--b_color);\n}\n\n.project_description>* {\n    width: 100%;\n    text-align: center;\n    height: 1rem;\n\n}\n\n.project_name_inp {\n    text-align: center;\n    font-size:1rem;\n}\n\n.destroy_project {\n    box-sizing: content-box;\n    position: absolute;\n    top: -1rem;\n    border: 5px solid coral;\n    border-radius: 1rem;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    \n    width: 100%;\n    height: 1rem;\n    background-color: rgb(165, 4, 4);\n}\n\n.project_name_submit {\n    width: 100%;\n    height: 20%;\n    background-color: rgb(55, 185, 51);\n    border-radius: 2px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border:none;\n}\n\n.home_container {\n    background-color: bisque;\n    border-radius: 10px;\n    grid-column: 3 / 4;\n    position: absolute;\n    width: 90%;\n    height: 100%;\n    justify-self: center;\n}\n\n.home_container>* {\n    font-weight: 700;\n    font-size: min(calc(6vw), 48px);\n    text-align: center;\n    \n}\n\n.home_top {\n    text-shadow: 0 0 10px white;\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%;\n    height: 50%;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.project_info {\n    color: coral;\n}\n\n.project_data {\n    height: min(20vh, 200px);\n    display: flex;\n    flex-direction: column;\n    border: 5px solid cornflowerblue;\n    background-color: lightblue;\n    border-radius: 10px;\n    align-items: center;\n    gap: 1rem;\n    justify-content: space-between;\n}\n\n.task_info {\n    color:green;\n}\n\n.today_info {\n    text-shadow: 0 0 10px white;\n\n    color:rgb(48, 152, 250);\n    width: 100%;\n    height: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n@media only screen and (max-width: 768px) {\n    html {\n        min-height: 100%;\n        height: auto;\n    }\n    body {\n        min-height: 100vh;\n    }\n    .container {\n        min-height: 100vh;\n    }\n    [class=\"base\"] {\n        height: 100%;\n        border-radius: 0;\n    }\n    [class=\"middle\"] {\n        grid-template-rows: 1fr 5px 1.7fr;\n        grid-template-columns: 1fr;\n        height: 100%;\n    }\n    [class=\"navigator\"] {\n        grid-row: 1/2;\n        grid-column: 1 / -1;\n    }\n    [class=\"bar2\"] {\n        display: none;\n    }\n\n    [class=\"project_container\"] {\n        grid-row: 3 / 4;\n        grid-column: 1 / -1;\n        background-color: rgb(0, 107, 156);\n    }\n    [class=\"taskList\"] {\n        grid-row: 3 / 4;\n        grid-column: 1 / -1;\n        background-color: rgb(0, 107, 156);\n\n    }\n    [class=\"home_container\"] {\n        grid-row: 3 / 4;\n        width: 100%;\n        height: 100%;\n        grid-column: 1 / -1;\n        border-radius: 0;\n    }\n    .home_container>* {\n        font-size: 3rem;\n    }\n\n    .task {\n        width: 80%;\n        margin-top: 10px;\n    }\n\n    [type = \"datetime-local\"] {\n        min-height: 2em;\n    max-height: 2em;\n    line-height: 1em;\n    font-size: 0.8rem;\n\n    }\n\n    \n}\n\n\n.hidden {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    height: 100%;\n    width: 100%;\n}\n\nbody {\n    font-size: max(min(16px, calc(8px + 1vw)), 14px);\n    height: 100%;\n    width: 100%;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n\n\n.container {\n    height: 100%;\n    width: 100%;\n    background-image: url('./bg.svg');\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.base {\n    height: clamp(500px, 40vh, 800px);\n    width: clamp(750px, 60vw, 900px);\n    background-color: rgb(166, 199, 214);\n    border-radius: 5rem;\n    box-shadow: 5px 5px 50px black;\n    display: grid;\n    grid-template-rows: 1fr 4fr 1fr ;\n    grid-template-columns: 1fr;\n}\n\n.title {\n    grid-row: 1 / 2;\n    font-weight: 700;\n    color: white;\n    font-size: 2rem;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n   \n}\n\n.middle {\n    position: relative;\n    grid-row: 2 / 3;\n    display:grid;\n    grid-template-columns: 1fr 5px 4fr;\n}\n\n.bottom {\n    grid-row: 3 / 4;\n}\n\n\nnav {\n    grid-column: 1 / 2;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    gap:10px;\n    align-items: center;\n}\n\nnav>*, li>button {\n    background-color: inherit;\n    border: none;\n    color: white;\n    font-size: 1.5rem;\n    font-weight: 700;\n    text-align: left;\n    justify-content: center;\n}\n\nnav>* {\n    width: 80%;\n}\n\n.bar {\n    height: 5px;\n    border-radius: 5px;\n    background-color: white;\n}\n\n.bar2 {\n    grid-column: 2 / 3;\n    width: 5px;\n    height: 100%;\n    border-radius: 5px;\n    background-color: white;\n}\n\n\n\n.date_options {\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    align-items: flex-end;\n    width: 100%;\n    gap:5px;\n}\n\nli>button {\n    width: 100%;\n    font-size: 1.2rem;\n}\n\nbutton {\n    position: relative;\n}\n\n.button-bg {\n    display: inline;\n    position: absolute;\n    top: 0;\n    left: -5px;\n    height: 100%;\n    width: 0%;\n    background-color: rgba(98, 139, 167, 0.5);\n    z-index: 0;\n    border-radius: 5px;\n}\n\n.text {\n    position:relative;\n    z-index: 1;\n}\n\nli {\n    width: 80%;\n    position: relative;\n}\n\n@keyframes button-hover {\n    from {width: 0%;}\n    to {width: calc(100% + 5px);}\n}\n\nnav>button:hover>.button-bg, .date_options>li:hover>.button-bg {\n    animation: button-hover;\n    animation-duration: 0.5s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n}\n\n.tasks {\n    height: 100%;\n}\n\n.taskList {\n    position: absolute;\n    grid-column: 3 / 4;\n    height: 100%;\n    width: 100%;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    overflow:auto;\n    gap: 10px;\n\n}\n\n.task {\n    width: 90%;\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n    flex: 0;\n    border-radius: 5px;\n    padding:10px;\n    position: relative;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.destruction {\n    width: 1rem;\n    height: 100%;\n    position:absolute;\n    right: -1rem;\n    background-color: red;\n    border-radius: 5px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.task>* {\n    display: inline;\n}\n\n.task_title {\n    white-space: nowrap;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    overflow-wrap: break-word;\n}\n\n.high {background-color: coral;}\n.medium {background-color: rgb(248, 164, 133);}\n.low {background-color: rgb(255, 207, 189);}\n\nh2 {\n    color:white;\n    text-shadow: 0 0 3px gray;\n}\n.desc {\n    color:white;\n    text-shadow: 0 0 3px gray;\n\n\n\n    \n    overflow-wrap: break-word;\n}\n\n.task>input {\n    max-width: 40%;\n}\n\n.bottom {\n    grid-row: 3/4;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add {\n\n    width: 80%;\n    border-radius: 1rem;\n    font-size: 2rem;\n    color:green;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n}\n\n.project_add {\n    box-sizing: border-box;\n    width: 80%;\n    height: 1rem;\n    border-radius: 1rem;\n    font-size: 2rem;\n    background-color: rgb(148, 255, 127);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n}\n \n\n.fieldset {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    --sizer: 500px;\n    width: clamp(calc(var(--sizer) - 150px), 50vw, 700px);\n    height: clamp(var(--sizer), 80vh, 1000px);\n    background-color: white;\n    border: 5px solid cornflowerblue;\n    background-color: lightblue;\n    border-radius: 30px;\n    \n}\n\n.left {\n    max-width: 60%;\n}\n\n.radio {\n    border:none;\n    border-top: 5px solid cornflowerblue;\n    display: flex;\n    justify-content: space-around;\n    margin-top: 10px;\n}\n\nlabel {\n    font-size: 1.5rem;\n}\n\nlabel, legend {\n    text-align: center;\n    color:white;\n    font-weight: 700;\n    text-shadow: 0px 0px 5px black;\n}\nlegend {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    font-size: 2rem;\n    border: 5px solid cornflowerblue;\n    border-radius: 20px;\n    background-color: lightblue;\n\n}\n\ntextarea {\n    font:inherit;\n    text-align: center;\n    padding: 0.3rem;\n}\n\n.form_buttons>button {\n\n    height: 100%;\n    width: 40%;\n    align-self: center;\n    border-radius: 1rem;\n    justify-self: flex-end;\n    border:none;\n    color:white;\n    font-size: 2rem;\n    text-shadow: 0px 0px 5px white;\n}\n\n.form_buttons {\n    box-sizing: border-box;\n    margin-top: 10%;\n    display:flex;\n    justify-content: center;\n    gap:20px;\n    height: 10%;\n    width:100%;\n    margin-bottom: 1rem;\n}\n\n.submit {\n    background-color:rgb(4, 165, 4);\n}\n.destroy {\n    background-color: rgb(170, 5, 5);\n}\n\ninput[type = \"text\"] {\n    font-size: 1.5rem;\n    text-align: center;\n} \n\n\nfieldset>input[type = \"datetime-local\"] {\n    height: 3rem;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-self: center;\n}\n\n.project_container {\n    box-sizing: border-box;\n    position: absolute;\n    grid-column: 3 / 4;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 10.5rem);\n    grid-template-rows: repeat(auto-fit, 13.5rem);\n    justify-content: center;\n\n    gap: 0.5rem;\n\n    overflow:auto;\n    flex-wrap: wrap;\n}\n\n.project_container>.add_project {\n    \n    width: 3rem;\n    height: 3rem;\n    background-color: rgb(131, 255, 127);\n    color: white;\n    font-size: 2rem;\n    /*display: flex;\n    justify-content: center;\n    align-items: center;*/\n\n    justify-self: center;\n    border: none;\n    border-radius: 3rem;\n    margin-top: 2.5rem;\n}\n\n.project {\n    position: relative;\n\n    box-sizing: border-box;\n    border: 5px solid coral;\n    height: 12rem;\n    width: 10rem;\n    display:flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    justify-self: center;\n    align-items: center;\n    background-color: rgb(48, 152, 250);\n    border-radius: 1rem;\n    margin-top: 1rem;\n}\n\n.project_title {\n    color:white;\n    overflow:hidden;\n    text-align: center;\n    width: 100%;\n    min-height: 2em;\n    max-height: 2em;\n    line-height: 1em;\n    text-overflow: ellipsis;\n    word-wrap: break-word;\n}\n\n.project_description {\n    color:white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 40%;\n    --b_color: white;\n    border-top: 0px solid var(--b_color);\n    border-bottom: 0px solid var(--b_color);\n}\n\n.project_description>* {\n    width: 100%;\n    text-align: center;\n    height: 1rem;\n\n}\n\n.project_name_inp {\n    text-align: center;\n    font-size:1rem;\n}\n\n.destroy_project {\n    box-sizing: content-box;\n    position: absolute;\n    top: -1rem;\n    border: 5px solid coral;\n    border-radius: 1rem;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    \n    width: 100%;\n    height: 1rem;\n    background-color: rgb(165, 4, 4);\n}\n\n.project_name_submit {\n    width: 100%;\n    height: 20%;\n    background-color: rgb(55, 185, 51);\n    border-radius: 2px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border:none;\n}\n\n.home_container {\n    background-color: bisque;\n    border-radius: 10px;\n    grid-column: 3 / 4;\n    position: absolute;\n    width: 90%;\n    height: 100%;\n    justify-self: center;\n}\n\n.home_container>* {\n    font-weight: 700;\n    font-size: min(calc(6vw), 48px);\n    text-align: center;\n    \n}\n\n.home_top {\n    text-shadow: 0 0 10px white;\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%;\n    height: 50%;\n    align-items: center;\n    box-sizing: content-box;\n}\n\n.project_info {\n    color: coral;\n}\n\n.project_data {\n    height: min(20vh, 200px);\n    display: flex;\n    flex-direction: column;\n    border: 5px solid cornflowerblue;\n    background-color: lightblue;\n    border-radius: 10px;\n    align-items: center;\n    gap: 1rem;\n    justify-content: space-between;\n}\n\n.task_info {\n    color:green;\n}\n\n.today_info {\n    text-shadow: 0 0 10px white;\n\n    color:rgb(48, 152, 250);\n    width: 100%;\n    height: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n@media only screen and (max-width: 768px) {\n    html {\n        min-height: 100%;\n        height: auto;\n    }\n    body {\n        min-height: 100vh;\n    }\n    .container {\n        min-height: 100vh;\n    }\n    [class=\"base\"] {\n        height: 100%;\n        border-radius: 0;\n    }\n    [class=\"middle\"] {\n        grid-template-rows: 1fr 5px 1.7fr;\n        grid-template-columns: 1fr;\n        height: 100%;\n    }\n    [class=\"navigator\"] {\n        grid-row: 1/2;\n        grid-column: 1 / -1;\n    }\n    [class=\"bar2\"] {\n        display: none;\n    }\n\n    [class=\"project_container\"] {\n        grid-row: 3 / 4;\n        grid-column: 1 / -1;\n        background-color: rgb(0, 107, 156);\n    }\n    [class=\"taskList\"] {\n        grid-row: 3 / 4;\n        grid-column: 1 / -1;\n        background-color: rgb(0, 107, 156);\n\n    }\n    [class=\"home_container\"] {\n        grid-row: 3 / 4;\n        width: 100%;\n        height: 100%;\n        grid-column: 1 / -1;\n        border-radius: 0;\n    }\n    .home_container>* {\n        font-size: 3rem;\n    }\n\n    .task {\n        width: 80%;\n        margin-top: 10px;\n    }\n\n    [type = \"datetime-local\"] {\n        min-height: 2em;\n    max-height: 2em;\n    line-height: 1em;\n    font-size: 0.8rem;\n\n    }\n\n    \n}\n\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "makeElement": () => (/* binding */ makeElement),
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
function makeElement(type, cl) {
    let el = document.createElement(type);
    el.classList.add(cl);
    return el;
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
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
taskList.classList.add("hidden");
middle.appendChild(taskList);

middle.appendChild((0,_layoutBuilder__WEBPACK_IMPORTED_MODULE_1__.genProjects)());

/*taskList.appendChild(generateCard("Homework","Math and chemistry","high"));
taskList.appendChild(generateCard("Homework","Math and chemistry","medium"));
taskList.appendChild(generateCard("Homework","Math and chemistry","low"));*/

const bottom = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.makeElement)('div', 'bottom');
base.appendChild(bottom);

bottom.appendChild((0,_layoutBuilder__WEBPACK_IMPORTED_MODULE_1__.genButton)());

(0,_layoutBuilder__WEBPACK_IMPORTED_MODULE_1__.home_on_click)();







/***/ }),

/***/ "./src/layoutBuilder.js":
/*!******************************!*\
  !*** ./src/layoutBuilder.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deduct_task": () => (/* binding */ deduct_task),
/* harmony export */   "form_prompt": () => (/* binding */ form_prompt),
/* harmony export */   "genButton": () => (/* binding */ genButton),
/* harmony export */   "genProjects": () => (/* binding */ genProjects),
/* harmony export */   "home_on_click": () => (/* binding */ home_on_click),
/* harmony export */   "navigation": () => (/* binding */ navigation),
/* harmony export */   "plus_task": () => (/* binding */ plus_task),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _taskGen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskGen.js */ "./src/taskGen.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");





let current_tab = "Home";
let form = undefined;
let total_tasks = 0;
let home_on_click = undefined;
let addProject = undefined;

function deduct_task() {
    total_tasks -= 1;
}

function plus_task() {
    total_tasks += 1;
}


function form_prompt() {
    document.querySelector(".base").classList.add("hidden");
    document.querySelector(".container").appendChild(form);
}

function show(arg = current_tab) {
    if (_projects_js__WEBPACK_IMPORTED_MODULE_2__.project === undefined) { current_tab = arg; }

    const taskList = document.querySelector('.taskList');
    taskList.classList.remove('hidden');
    document.querySelector('.project_container').classList.add('hidden');
    document.querySelector('.home_container').classList.add('hidden');
    (0,_taskGen_js__WEBPACK_IMPORTED_MODULE_1__.reorder)();

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
    else if (arg === "project_tasks") {
        for (let i = 0; i < Array.from(taskList.children).length; i++) {
            taskList.children[i].classList.add('hidden');
        }
        _projects_js__WEBPACK_IMPORTED_MODULE_2__.project.tasks.forEach((task) => {
            task.html_ele.classList.remove('hidden');
        })
    }
    else if (arg === "Home") {
        home_on_click();
    }
    else if (arg === "Projects") {
        document.querySelector('.taskList').classList.add('hidden');
        document.querySelector('.home_container').classList.add('hidden');
        document.querySelector('.project_container').classList.remove('hidden');
        document.querySelector('.project_container').appendChild(addProject);
    }
    else {
        for (let i = 0; i < Array.from(taskList.children).length; i++) {
            taskList.children[i].classList.remove('hidden');
        }
    }

    let sorter = [];

    for (let i = 0; i < Array.from(taskList.children).length; i++) {
        if (taskList.children[i].classList.contains('hidden')) {sorter.push(taskList.children[i]);}
    }

    sorter.sort((a, b) => {
        let date1 = a.querySelector("input[type = 'datetime-local']").value;
        let date2 = a.querySelector("input[type = 'datetime-local']").value;
        if (date1 < date2) {return 1;}
        else {return -1;}

    })

    sorter.forEach((a) => {
        taskList.appendChild(a);
    })
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

    function home_function() {
        const top = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'home_top');
        const home = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'home_container');
        let p_desc = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'project_info');
        let t_desc = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'task_info');
        let t_task = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'today_info');


        top.appendChild(p_desc);
        top.appendChild(t_desc);
        home.classList.add('hidden');
        home.appendChild(top);
        home.appendChild(t_task);
        document.querySelector('.middle').appendChild(home);

        home_on_click = function() {
            home.classList.remove('hidden');
            document.querySelector('.taskList').classList.add('hidden');
            document.querySelector('.project_container').classList.add('hidden');
            if (_projects_js__WEBPACK_IMPORTED_MODULE_2__.total_projects === 1) {p_desc.textContent = `${_projects_js__WEBPACK_IMPORTED_MODULE_2__.total_projects} Project`;}
            else {p_desc.textContent = `${_projects_js__WEBPACK_IMPORTED_MODULE_2__.total_projects} Projects`;}
            if (total_tasks === 1) {t_desc.textContent = `${total_tasks} Task`;}
            else {t_desc.textContent = `${total_tasks} Tasks`;}

            let for_today = 0;
            const taskList = document.querySelector('.taskList');
            let today = new Date();
            for (let i = 0; i < Array.from(taskList.children).length; i++) {
                let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskList.children[i].querySelector("input[type = 'datetime-local']").value);
                if (today.getFullYear() !== date.getFullYear() || today.getMonth() !== date.getMonth() || today.getDate() !== date.getDate()) { continue; }
                else { for_today += 1; }
            }

            if (for_today === 1) {t_task.textContent = `${for_today} task due Today`;}
            else {t_task.textContent = `${for_today} tasks due Today`;}
        }

        b1.addEventListener('click', (e) => {
            show('Home');
        })
    }

    home_function();
    

    let desc = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'tasks');
    desc.textContent = "Tasks";

    let bundler = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('ul', 'date_options');
    gen(bundler, "Today", "This week", "This month", "All");
    desc.appendChild(bundler);

    let b2 = makeB('Projects')

    let buts = [b1, bar, b2, bar2, desc];
    buts.forEach((b) => { nav.appendChild(b) });


    addProject = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'add_project');
    addProject.addEventListener('click', (e) => {
        document.querySelector(".base").classList.add("hidden");
        document.querySelector(".container").appendChild(_projects_js__WEBPACK_IMPORTED_MODULE_2__.p_form);
        })
    addProject.textContent = "+";

    function addP(parent) {
        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'add_project');
    }

    b2.addEventListener('click', (e) => {
        show("Projects");
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
    title.maxLength = 20;

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
        inp.required = true;

    })
    radio_field.children[2].children[1].checked = true;
    field.appendChild(radio_field)


    const button_div = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'form_buttons');

    const submit = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'submit');
    submit.type = "button";
    submit.textContent = "✓";

    const destroy = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'destroy');
    destroy.type = "button";
    destroy.textContent = "X";

    submit.addEventListener('click', () => {
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
        total_tasks += 1;
        const time = date.value;
        const card = (0,_taskGen_js__WEBPACK_IMPORTED_MODULE_1__.generateCard)(title.value, desc, prio.toLowerCase(), time, _projects_js__WEBPACK_IMPORTED_MODULE_2__.project);
        document.querySelector('.taskList').appendChild(card)
        document.querySelector(".base").classList.remove("hidden");
        document.querySelector(".container").removeChild(form);
        (0,_taskGen_js__WEBPACK_IMPORTED_MODULE_1__.reorder)();
        show();
        if (_projects_js__WEBPACK_IMPORTED_MODULE_2__.project !== undefined) {
            _projects_js__WEBPACK_IMPORTED_MODULE_2__.project.tasks.push({title: title.value, description: desc, priority: prio.toLowerCase(), dueDate: time, html_ele: card});
            (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.update_display)();
            
        }
        form.reset();
        radio_field.children[2].children[1].checked = true;


    })

    destroy.addEventListener('click', () => {
            form.reset();
            document.querySelector(".base").classList.remove("hidden");
            document.querySelector(".container").removeChild(form);
            radio_field.children[2].children[1].checked = true;

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
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "makeProject": () => (/* binding */ makeProject),
/* harmony export */   "p_form": () => (/* binding */ p_form),
/* harmony export */   "project": () => (/* binding */ cur_project),
/* harmony export */   "remove_task": () => (/* binding */ remove_task),
/* harmony export */   "total_projects": () => (/* binding */ total_projects),
/* harmony export */   "update_display": () => (/* binding */ update_display)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _layoutBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutBuilder */ "./src/layoutBuilder.js");



let projects = [];
let counter = 0;

if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.storageAvailable)('localStorage')) {
    let prs = JSON.parse(localStorage.getItem("projects"));
    if (prs !== null) {


    let waiter = setInterval(function() {
        if (document.querySelector('.project_container') !== null) {
            clearInterval(waiter);
            prs.forEach((p) => {                
                    makeProject(p.name, p.num);
                
            })
            ;(0,_layoutBuilder__WEBPACK_IMPORTED_MODULE_1__.show)("Home");
            
        }
        
    }, 100);

    if (JSON.parse(localStorage.getItem("counter")) !== null) {
        counter = JSON.parse(localStorage.getItem("counter"));
    }
}
}

const p_form = genForm();
let cur_project = undefined;
let total_projects = 0;


function watch_changes(obj) {
    const parent = obj.html_ele.parentNode;

    function callback(mutationList, observer) {
        console.log("changed");
        mutationList.forEach((mutation) => {
          if (mutation.type === "childList") {
            if (mutation.removedNodes.length > 0 && mutation.removedNodes[0] === obj.html_ele) {
                obj.html_ele = "gone";
                observer.disconnect();
                console.log("removed");
            }
          }
        });
      }

    const observer = new MutationObserver(callback);
    observer.observe(parent, {childList: true});
}




function genForm() {
    const form = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('form', 'project_data');
    const label = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('label', 'project_name');
    label.textContent = "Title";
    const inp = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('input', 'project_name_inp');
    label.for = "p_name";
    inp.id = "p_name";
    inp.name = 'project_title';
    inp.required = true;
    inp.maxLength = 20;

    const submitter = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'project_name_submit');
    submitter.type = "button";

    submitter.addEventListener('click', (e) => {
        if (!inp.checkValidity()) { inp.reportValidity(); return; }

        document.querySelector(".base").classList.remove("hidden");
        document.querySelector(".container").removeChild(p_form);
        makeProject(inp.value);
        document.querySelector(".project_container").appendChild(document.querySelector(".add_project"));
        form.reset();
    })

    form.appendChild(label);
    form.appendChild(inp);
    form.append(submitter);
    return form;



}

function remove_task(task, project) {
    project.tasks.forEach((e) => {
        if (task.title === e.title && task.desc === e.desc &&
             task.priority === e.priority && task.dueDate === e.dueDate
             )
              {
                console.log(project.tasks.findIndex(o => e === o));
                project.tasks.splice(project.tasks.findIndex(o => e === o), 1);
                update_display();
        }
    })
}

const genProject = function(name, desc, ele, numb) {
    const html_ele = ele;
    total_projects += 1;
    let num;
    if (numb !== undefined) {
        num = numb;
    }
    else
    {
        num = counter;
        counter += 1;
    }

    localStorage.setItem("counter", JSON.stringify(counter));
    const tasks = [];
    return {tasks, name, desc, html_ele, num};
}

function update_display()
{
    cur_project = undefined;
    const taskList = document.querySelector('.taskList');
    projects.forEach((p) => {
        let max = 3;

        let descs = p.html_ele.querySelector(".project_description");
        let child = descs.lastElementChild;
        while (child) {
            descs.removeChild(child);
            child = descs.lastElementChild;
        }
        p.tasks.sort((a, b) => {
            if (a.dueDate > b.dueDate) {return 1;}
            else {return -1;}
        })
        p.tasks.forEach((obj) => {
            if (max === 0) {return;}
            else {max -= 1;}
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

function addTask(task) {
    let search = projects.find(a => {
        return task.project === a.num;
    });
    if (search !== undefined) {
       search.tasks.push(task);
       update_display();
       return search;
    }
}

function makeProject(name, num) {
    const container = document.querySelector('.project_container');
    const project = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'project');
    const project_obj = genProject(name, "name", project, num);
    const destroy_project = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'destroy_project');

    const h1 = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h1', 'project_title');

    h1.textContent = project_obj.name;
    const desc = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'project_description');

    const add_b = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', 'project_add');
    on_click(project_obj, add_b);

    desc.addEventListener('click', (e) => {
        cur_project = project_obj;
        (0,_layoutBuilder__WEBPACK_IMPORTED_MODULE_1__.show)("project_tasks");
        cur_project = undefined;
    })

    destroy_project.addEventListener('click', (e) => {
        project_obj.tasks.forEach((task) => {
            document.querySelector('.taskList').removeChild(task.html_ele);
            (0,_layoutBuilder__WEBPACK_IMPORTED_MODULE_1__.deduct_task)();
        })
        container.removeChild(project);
        total_projects -= 1;
        projects.splice(projects.findIndex((a) => {

            return a.html_ele === project;
        }), 1)
        let false_p = projects;
        false_p.forEach((b) => {
            b.tasks = [];
        })
        
        localStorage.setItem("projects", JSON.stringify(false_p));
    })



    project.appendChild(destroy_project);
    project.appendChild(h1);
    project.appendChild(desc);
    project.appendChild(add_b);


    container.appendChild(project);
    projects.push(project_obj);
    let false_p = projects;
    false_p.forEach((b) => {
        b.tasks = [];
    })
    
    localStorage.setItem("projects", JSON.stringify(false_p));

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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _layoutBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layoutBuilder.js */ "./src/layoutBuilder.js");






let tasks = [];

if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.storageAvailable)('localStorage')) {
    let prs = JSON.parse(localStorage.getItem("tasks"));
    if (prs !== null) {
    let waiter = setInterval(function() {
        if (document.querySelector('.taskList') !== null) {
            clearInterval(waiter);
            prs.forEach((p) => {

                let card = generateCard(p.title, p.description, p.priority, p.dueDate, p.project);
                document.querySelector('.taskList').appendChild(card);
                (0,_layoutBuilder_js__WEBPACK_IMPORTED_MODULE_2__.plus_task)();
                if (p.project !== undefined) {
                    let proj = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.addTask)({title: p.title, description: p.description, priority: p.priority, dueDate: p.dueDate, html_ele: card, project: p.project});
                    let chosen_task = tasks.find((a) => a.html_ele === card);
                    chosen_task.project = proj;
                }
                (0,_layoutBuilder_js__WEBPACK_IMPORTED_MODULE_2__.show)("Home");

                
            })
            
        }
        
    }, 100);
}
}


const makeTask = function(title, description, priority, dueDate, project, html_ele) {
    return {title, description, priority, dueDate, project, html_ele};
}

function reorder() {
    const tasks = document.querySelector('.taskList');
    const DOM_el = Array.from(tasks.children);
    const dates = [];
    DOM_el.forEach((ch) => {
        dates.push((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(ch.querySelector(("input[type = 'datetime-local']")).value));
    })

    dates.sort((a, b) => {
        if (a.getTime() > b.getTime()) {return 1;}
        else return -1;
    });
    const newOrder = [];

    dates.forEach((dt) => {
        let chosenInd = DOM_el.findIndex((a) => {
            let el_d = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(a.querySelector("input[type = 'datetime-local']").value);
            console.log(typeof(el_d), el_d)
            return el_d.getTime() === dt.getTime();
        })
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
    const card = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'task');
    const task = makeTask(info[0], info[1], info[2], info[3], info[4], card);
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

    const destroy = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'destruction');
    destroy.addEventListener('click', (e) => {
        if (task.project !== undefined) {
            (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.remove_task)(task, task.project);
        }
        card.parentElement.removeChild(card);
        (0,_layoutBuilder_js__WEBPACK_IMPORTED_MODULE_2__.deduct_task)();

        tasks.splice(tasks.findIndex((a) => a.html_ele === task.html_ele), 1)
        let false_t = tasks;
            false_t.forEach((a) => {
                if (a.project !== undefined && typeof(a.project) !== 'number'){
                    console.log(typeof(a.project));
                    a.project = a.project.num;
                }
            })

        localStorage.setItem("tasks", JSON.stringify(false_t));
    });
   tasks.push(task);
   let false_t = tasks;
    false_t.forEach((a) => {
        if (a.project !== undefined && typeof(a.project) !== 'number'){

            a.project = a.project.num;
        }
    })

   localStorage.setItem("tasks", JSON.stringify(false_t));


    card.appendChild(destroy);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLFlBQVksVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxRQUFRLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLGNBQWMsUUFBUSxPQUFPLEtBQUssVUFBVSw2QkFBNkIsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUsbUJBQW1CLGtCQUFrQixHQUFHLFVBQVUsdURBQXVELG1CQUFtQixrQkFBa0IsK0VBQStFLEdBQUcsb0JBQW9CLG1CQUFtQixrQkFBa0Isd0NBQXdDLG1DQUFtQyw2QkFBNkIsc0JBQXNCLDhCQUE4QiwwQkFBMEIsR0FBRyxXQUFXLHdDQUF3Qyx1Q0FBdUMsMkNBQTJDLDBCQUEwQixxQ0FBcUMsb0JBQW9CLHVDQUF1QyxpQ0FBaUMsR0FBRyxZQUFZLHNCQUFzQix1QkFBdUIsbUJBQW1CLHNCQUFzQix5QkFBeUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsUUFBUSxhQUFhLHlCQUF5QixzQkFBc0IsbUJBQW1CLHlDQUF5QyxHQUFHLGFBQWEsc0JBQXNCLEdBQUcsV0FBVyx5QkFBeUIsbUJBQW1CLDZCQUE2Qiw4QkFBOEIsZUFBZSwwQkFBMEIsR0FBRyxzQkFBc0IsZ0NBQWdDLG1CQUFtQixtQkFBbUIsd0JBQXdCLHVCQUF1Qix1QkFBdUIsOEJBQThCLEdBQUcsV0FBVyxpQkFBaUIsR0FBRyxVQUFVLGtCQUFrQix5QkFBeUIsOEJBQThCLEdBQUcsV0FBVyx5QkFBeUIsaUJBQWlCLG1CQUFtQix5QkFBeUIsOEJBQThCLEdBQUcsdUJBQXVCLG9CQUFvQiw2QkFBNkIsMkJBQTJCLDRCQUE0QixrQkFBa0IsY0FBYyxHQUFHLGVBQWUsa0JBQWtCLHdCQUF3QixHQUFHLFlBQVkseUJBQXlCLEdBQUcsZ0JBQWdCLHNCQUFzQix5QkFBeUIsYUFBYSxpQkFBaUIsbUJBQW1CLGdCQUFnQixnREFBZ0QsaUJBQWlCLHlCQUF5QixHQUFHLFdBQVcsd0JBQXdCLGlCQUFpQixHQUFHLFFBQVEsaUJBQWlCLHlCQUF5QixHQUFHLDZCQUE2QixZQUFZLFdBQVcsVUFBVSx5QkFBeUIsR0FBRyxvRUFBb0UsOEJBQThCLCtCQUErQiwwQ0FBMEMsb0NBQW9DLEdBQUcsWUFBWSxtQkFBbUIsR0FBRyxlQUFlLHlCQUF5Qix5QkFBeUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsNkJBQTZCLDBCQUEwQixvQkFBb0IsZ0JBQWdCLEtBQUssV0FBVyxpQkFBaUIsbUJBQW1CLHFDQUFxQywwQkFBMEIsY0FBYyx5QkFBeUIsbUJBQW1CLHlCQUF5QixpQ0FBaUMsb0NBQW9DLEdBQUcsa0JBQWtCLGtCQUFrQixtQkFBbUIsd0JBQXdCLG1CQUFtQiw0QkFBNEIseUJBQXlCLGdDQUFnQyxtQ0FBbUMsR0FBRyxhQUFhLHNCQUFzQixHQUFHLGlCQUFpQiwwQkFBMEIsa0JBQWtCLHVCQUF1Qiw4QkFBOEIsZ0NBQWdDLEdBQUcsV0FBVyx5QkFBeUIsV0FBVyxzQ0FBc0MsUUFBUSxzQ0FBc0MsUUFBUSxrQkFBa0IsZ0NBQWdDLEdBQUcsU0FBUyxrQkFBa0IsZ0NBQWdDLDRDQUE0QyxHQUFHLGlCQUFpQixxQkFBcUIsR0FBRyxhQUFhLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLFVBQVUsbUJBQW1CLDBCQUEwQixzQkFBc0Isa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG1CQUFtQixHQUFHLGtCQUFrQiw2QkFBNkIsaUJBQWlCLG1CQUFtQiwwQkFBMEIsc0JBQXNCLDJDQUEyQyxvQkFBb0IsOEJBQThCLDBCQUEwQixtQkFBbUIsR0FBRyxrQkFBa0Isb0JBQW9CLDZCQUE2QixxQ0FBcUMscUJBQXFCLDREQUE0RCxnREFBZ0QsOEJBQThCLHVDQUF1QyxrQ0FBa0MsMEJBQTBCLFNBQVMsV0FBVyxxQkFBcUIsR0FBRyxZQUFZLGtCQUFrQiwyQ0FBMkMsb0JBQW9CLG9DQUFvQyx1QkFBdUIsR0FBRyxXQUFXLHdCQUF3QixHQUFHLG1CQUFtQix5QkFBeUIsa0JBQWtCLHVCQUF1QixxQ0FBcUMsR0FBRyxVQUFVLDBCQUEwQix1QkFBdUIsc0JBQXNCLHVDQUF1QywwQkFBMEIsa0NBQWtDLEtBQUssY0FBYyxtQkFBbUIseUJBQXlCLHNCQUFzQixHQUFHLDBCQUEwQixxQkFBcUIsaUJBQWlCLHlCQUF5QiwwQkFBMEIsNkJBQTZCLGtCQUFrQixrQkFBa0Isc0JBQXNCLHFDQUFxQyxHQUFHLG1CQUFtQiw2QkFBNkIsc0JBQXNCLG1CQUFtQiw4QkFBOEIsZUFBZSxrQkFBa0IsaUJBQWlCLDBCQUEwQixHQUFHLGFBQWEsc0NBQXNDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyw0QkFBNEIsd0JBQXdCLHlCQUF5QixJQUFJLGlEQUFpRCxtQkFBbUIsa0JBQWtCLG9CQUFvQiw4QkFBOEIseUJBQXlCLEdBQUcsd0JBQXdCLDZCQUE2Qix5QkFBeUIseUJBQXlCLG1CQUFtQixrQkFBa0Isb0JBQW9CLHVEQUF1RCxvREFBb0QsOEJBQThCLG9CQUFvQixzQkFBc0Isc0JBQXNCLEdBQUcscUNBQXFDLHdCQUF3QixtQkFBbUIsMkNBQTJDLG1CQUFtQixzQkFBc0Isc0JBQXNCLDhCQUE4QiwwQkFBMEIsK0JBQStCLG1CQUFtQiwwQkFBMEIseUJBQXlCLEdBQUcsY0FBYyx5QkFBeUIsK0JBQStCLDhCQUE4QixvQkFBb0IsbUJBQW1CLG1CQUFtQiw2QkFBNkIsb0NBQW9DLDJCQUEyQiwwQkFBMEIsMENBQTBDLDBCQUEwQix1QkFBdUIsR0FBRyxvQkFBb0Isa0JBQWtCLHNCQUFzQix5QkFBeUIsa0JBQWtCLHNCQUFzQixzQkFBc0IsdUJBQXVCLDhCQUE4Qiw0QkFBNEIsR0FBRywwQkFBMEIsa0JBQWtCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4QixrQkFBa0Isa0JBQWtCLHVCQUF1QiwyQ0FBMkMsOENBQThDLEdBQUcsNEJBQTRCLGtCQUFrQix5QkFBeUIsbUJBQW1CLEtBQUssdUJBQXVCLHlCQUF5QixxQkFBcUIsR0FBRyxzQkFBc0IsOEJBQThCLHlCQUF5QixpQkFBaUIsOEJBQThCLDBCQUEwQixtQ0FBbUMsb0NBQW9DLHdCQUF3QixtQkFBbUIsdUNBQXVDLEdBQUcsMEJBQTBCLGtCQUFrQixrQkFBa0IseUNBQXlDLHlCQUF5QixnQ0FBZ0MsaUNBQWlDLGtCQUFrQixHQUFHLHFCQUFxQiwrQkFBK0IsMEJBQTBCLHlCQUF5Qix5QkFBeUIsaUJBQWlCLG1CQUFtQiwyQkFBMkIsR0FBRyx1QkFBdUIsdUJBQXVCLHNDQUFzQyx5QkFBeUIsU0FBUyxlQUFlLGtDQUFrQyxvQkFBb0Isb0NBQW9DLGtCQUFrQixrQkFBa0IsMEJBQTBCLDhCQUE4QixHQUFHLG1CQUFtQixtQkFBbUIsR0FBRyxtQkFBbUIsK0JBQStCLG9CQUFvQiw2QkFBNkIsdUNBQXVDLGtDQUFrQywwQkFBMEIsMEJBQTBCLGdCQUFnQixxQ0FBcUMsR0FBRyxnQkFBZ0Isa0JBQWtCLEdBQUcsaUJBQWlCLGtDQUFrQyxnQ0FBZ0Msa0JBQWtCLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLCtDQUErQyxZQUFZLDJCQUEyQix1QkFBdUIsT0FBTyxZQUFZLDRCQUE0QixPQUFPLGtCQUFrQiw0QkFBNEIsT0FBTyx3QkFBd0IsdUJBQXVCLDJCQUEyQixPQUFPLDBCQUEwQiw0Q0FBNEMscUNBQXFDLHVCQUF1QixPQUFPLDZCQUE2Qix3QkFBd0IsOEJBQThCLE9BQU8sd0JBQXdCLHdCQUF3QixPQUFPLHVDQUF1QywwQkFBMEIsOEJBQThCLDZDQUE2QyxPQUFPLDRCQUE0QiwwQkFBMEIsOEJBQThCLDZDQUE2QyxTQUFTLGtDQUFrQywwQkFBMEIsc0JBQXNCLHVCQUF1Qiw4QkFBOEIsMkJBQTJCLE9BQU8seUJBQXlCLDBCQUEwQixPQUFPLGVBQWUscUJBQXFCLDJCQUEyQixPQUFPLHFDQUFxQywwQkFBMEIsc0JBQXNCLHVCQUF1Qix3QkFBd0IsU0FBUyxXQUFXLGVBQWUsb0JBQW9CLEdBQUcsbUJBQW1CO0FBQ2huMUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RMMEU7QUFDeEI7QUFDTjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHFCQUFxQjtBQUMvRDtBQUNBOztBQUVlO0FBQ2Y7O0FBRUEsRUFBRSxzRUFBWTtBQUNkLHlCQUF5QixtRUFBUzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUN4RSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRTtBQUMxRSxnQ0FBZ0MsRUFBRSxVQUFVLEVBQUU7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsRUFBRSxTQUFTLCtCQUErQixPQUFPLEVBQUUsU0FBUywrQkFBK0I7QUFDOUgsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtRUFBa0IsYUFBYSxxRUFBb0I7QUFDcEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsbUVBQWtCLGFBQWEscUVBQW9CO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4UUEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QnFCO0FBQytEO0FBQ2xDO0FBQ1Q7O0FBRXpDOztBQUVBLGtCQUFrQixxREFBTTtBQUN4Qjs7QUFFQSxhQUFhLHFEQUFNO0FBQ25COztBQUVBLGNBQWMscURBQU07QUFDcEI7QUFDQTs7QUFFQSxlQUFlLHFEQUFNO0FBQ3JCOztBQUVBLG1CQUFtQiwwREFBVTtBQUM3QixtQkFBbUIscURBQU07QUFDekIsaUJBQWlCLHFEQUFNO0FBQ3ZCO0FBQ0E7O0FBRUEsbUJBQW1CLDJEQUFXOztBQUU5QjtBQUNBO0FBQ0EsMEVBQTBFOztBQUUxRSxlQUFlLHFEQUFNO0FBQ3JCOztBQUVBLG1CQUFtQix5REFBUzs7QUFFNUIsNkRBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ3dDO0FBQ1U7QUFDdEI7QUFDb0Q7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGlEQUFPLGtCQUFrQjs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFPOztBQUVYO0FBQ0E7QUFDQSx3QkFBd0IsMENBQTBDO0FBQ2xFLHVCQUF1QixvREFBUTtBQUMvQiw0SUFBNEk7QUFDNUksbUJBQW1CLGlEQUFpRDtBQUNwRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMENBQTBDO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTs7QUFFQSx1QkFBdUIsb0RBQVE7QUFDL0IsdUhBQXVIO0FBQ3ZILG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMENBQTBDO0FBQ2xFLHVCQUF1QixvREFBUTtBQUMvQixzR0FBc0c7QUFDdEcsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQ0FBMEM7QUFDbEU7QUFDQTtBQUNBLFFBQVEsK0RBQXFCO0FBQzdCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMENBQTBDO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsMENBQTBDO0FBQzlELGdFQUFnRTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsY0FBYzs7QUFFZCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQix3REFBTTtBQUN0QixtQkFBbUIsd0RBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdEQUFNO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0EsYUFBYSx3REFBTTtBQUNuQixlQUFlLHdEQUFNO0FBQ3JCO0FBQ0E7QUFDQSxtQkFBbUIsd0RBQU07QUFDekI7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix3REFBTTs7QUFFdEIsY0FBYyx3REFBTTtBQUNwQixlQUFlLHdEQUFNOztBQUVyQjs7QUFFQTtBQUNBLG9CQUFvQix3REFBTTtBQUMxQixxQkFBcUIsd0RBQU07QUFDM0IscUJBQXFCLHdEQUFNO0FBQzNCLHFCQUFxQix3REFBTTtBQUMzQixxQkFBcUIsd0RBQU07OztBQUczQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQWMsU0FBUyx3QkFBd0Isd0RBQWMsRUFBRTtBQUMvRSxrQkFBa0Isd0JBQXdCLHdEQUFjLEVBQUU7QUFDMUQsb0NBQW9DLHdCQUF3QixhQUFhO0FBQ3pFLGtCQUFrQix3QkFBd0IsYUFBYTs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSwyQkFBMkIsb0RBQVE7QUFDbkMsZ0pBQWdKO0FBQ2hKLHVCQUF1QjtBQUN2Qjs7QUFFQSxrQ0FBa0Msd0JBQXdCLFdBQVc7QUFDckUsa0JBQWtCLHdCQUF3QixXQUFXO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLHdEQUFNO0FBQ3JCOztBQUVBLGtCQUFrQix3REFBTTtBQUN4QjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMEJBQTBCLG9CQUFvQjs7O0FBRzlDLGlCQUFpQix3REFBTTtBQUN2QjtBQUNBO0FBQ0EseURBQXlELGdEQUFNO0FBQy9ELFNBQVM7QUFDVDs7QUFFQTtBQUNBLFFBQVEsd0RBQU07QUFDZDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsd0RBQU07QUFDakIsa0JBQWtCLHdEQUFNO0FBQ3hCLG1CQUFtQix3REFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0Isd0RBQU07O0FBRTlCO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQU07QUFDL0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHdEQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0EsdUJBQXVCLHdEQUFNOztBQUU3QixtQkFBbUIsd0RBQU07QUFDekI7QUFDQTs7QUFFQSxvQkFBb0Isd0RBQU07QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdUJBQXVCO0FBQ2hFLFNBQVM7QUFDVCxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLFNBQVM7QUFDVDtBQUNBO0FBQ0EscUJBQXFCLHlEQUFZLDhDQUE4QyxpREFBTztBQUN0RjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFPO0FBQ2Y7QUFDQSxZQUFZLGlEQUFPO0FBQ25CLFlBQVksNERBQWtCLEVBQUUsbUdBQW1HO0FBQ25JLFlBQVksNERBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLGdCQUFnQix3REFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qix3REFBTTtBQUNwQztBQUNBOztBQUVBOzs7O0FBSXdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzVzlEO0FBQzJCO0FBQ047QUFDL0Q7QUFDQTs7QUFFQSxJQUFJLDZEQUFnQjtBQUNwQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWSxxREFBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5Qzs7Ozs7QUFLQTtBQUNBLGlCQUFpQix3REFBTTtBQUN2QixrQkFBa0Isd0RBQU07QUFDeEI7QUFDQSxnQkFBZ0Isd0RBQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isd0RBQU07QUFDNUI7O0FBRUE7QUFDQSxvQ0FBb0Msc0JBQXNCOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0EsNEJBQTRCO0FBQzVCLGtCQUFrQjtBQUNsQix1QkFBdUIsd0RBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFXO0FBQ25CLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQU07QUFDMUI7QUFDQSw0QkFBNEIsd0RBQU07O0FBRWxDLGVBQWUsd0RBQU07O0FBRXJCO0FBQ0EsaUJBQWlCLHdEQUFNOztBQUV2QixrQkFBa0Isd0RBQU07QUFDeEI7O0FBRUE7QUFDQTtBQUNBLFFBQVEsb0RBQUk7QUFDWjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBVztBQUN2QixTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7OztBQUlMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoT3FFO0FBQ3ZCO0FBQ3VCO0FBQ0g7QUFDN0I7O0FBRXJDOztBQUVBLElBQUksNkRBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFTO0FBQ3pCO0FBQ0EsK0JBQStCLHFEQUFPLEVBQUUseUhBQXlIO0FBQ2pLO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1REFBSTs7QUFFcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQVE7QUFDM0IsS0FBSzs7QUFFTDtBQUNBLHdDQUF3QztBQUN4QztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLG9EQUFRO0FBQy9CO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQSw2QkFBNkIscUJBQXFCOztBQUVsRDs7QUFFQTtBQUNBLGlCQUFpQix3REFBTTtBQUN2QjtBQUNBLGtCQUFrQix3REFBTTtBQUN4Qjs7QUFFQSxpQkFBaUIsd0RBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHdEQUFNO0FBQ3ZCO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLHdEQUFNO0FBQzFCO0FBQ0E7QUFDQSxZQUFZLHlEQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFRLDhEQUFXOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sYXlvdXRCdWlsZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza0dlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iZy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogbWF4KG1pbigxNnB4LCBjYWxjKDhweCArIDF2dykpLCAxNHB4KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5iYXNlIHtcXG4gICAgaGVpZ2h0OiBjbGFtcCg1MDBweCwgNDB2aCwgODAwcHgpO1xcbiAgICB3aWR0aDogY2xhbXAoNzUwcHgsIDYwdncsIDkwMHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NiwgMTk5LCAyMTQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDUwcHggYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAxZnIgO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBcXG59XFxuXFxuLm1pZGRsZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVweCA0ZnI7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcblxcbm5hdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOjEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdj4qLCBsaT5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5uYXY+KiB7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5iYXIge1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJhcjIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuLmRhdGVfb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6NXB4O1xcbn1cXG5cXG5saT5idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJ1dHRvbi1iZyB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IC01cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk4LCAxMzksIDE2NywgMC41KTtcXG4gICAgei1pbmRleDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5saSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBidXR0b24taG92ZXIge1xcbiAgICBmcm9tIHt3aWR0aDogMCU7fVxcbiAgICB0byB7d2lkdGg6IGNhbGMoMTAwJSArIDVweCk7fVxcbn1cXG5cXG5uYXY+YnV0dG9uOmhvdmVyPi5idXR0b24tYmcsIC5kYXRlX29wdGlvbnM+bGk6aG92ZXI+LmJ1dHRvbi1iZyB7XFxuICAgIGFuaW1hdGlvbjogYnV0dG9uLWhvdmVyO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFza0xpc3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbi50YXNrIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuXFxuLmRlc3RydWN0aW9uIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxufVxcblxcbi50YXNrPioge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi50YXNrX3RpdGxlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uaGlnaCB7YmFja2dyb3VuZC1jb2xvcjogY29yYWw7fVxcbi5tZWRpdW0ge2JhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDE2NCwgMTMzKTt9XFxuLmxvdyB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA3LCAxODkpO31cXG5cXG5oMiB7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCBncmF5O1xcbn1cXG4uZGVzYyB7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDNweCBncmF5O1xcblxcblxcblxcbiAgICBcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnRhc2s+aW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDQwJTtcXG59XFxuXFxuLmJvdHRvbSB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkIHtcXG5cXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjpncmVlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByb2plY3RfYWRkIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDI1NSwgMTI3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuIFxcblxcbi5maWVsZHNldCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgLS1zaXplcjogNTAwcHg7XFxuICAgIHdpZHRoOiBjbGFtcChjYWxjKHZhcigtLXNpemVyKSAtIDE1MHB4KSwgNTB2dywgNzAwcHgpO1xcbiAgICBoZWlnaHQ6IGNsYW1wKHZhcigtLXNpemVyKSwgODB2aCwgMTAwMHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIFxcbn1cXG5cXG4ubGVmdCB7XFxuICAgIG1heC13aWR0aDogNjAlO1xcbn1cXG5cXG4ucmFkaW8ge1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxubGFiZWwsIGxlZ2VuZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcXG59XFxubGVnZW5kIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcblxcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQ6aW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxufVxcblxcbi5mb3JtX2J1dHRvbnM+YnV0dG9uIHtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggd2hpdGU7XFxufVxcblxcbi5mb3JtX2J1dHRvbnMge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnN1Ym1pdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDQsIDE2NSwgNCk7XFxufVxcbi5kZXN0cm95IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgNSwgNSk7XFxufVxcblxcbmlucHV0W3R5cGUgPSBcXFwidGV4dFxcXCJdIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59IFxcblxcblxcbmZpZWxkc2V0PmlucHV0W3R5cGUgPSBcXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXSB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0X2NvbnRhaW5lciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMTAuNXJlbSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCAxMy41cmVtKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGdhcDogMC41cmVtO1xcblxcbiAgICBvdmVyZmxvdzphdXRvO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5wcm9qZWN0X2NvbnRhaW5lcj4uYWRkX3Byb2plY3Qge1xcbiAgICBcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgMjU1LCAxMjcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgLypkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsqL1xcblxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBjb3JhbDtcXG4gICAgaGVpZ2h0OiAxMnJlbTtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxNTIsIDI1MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0X3RpdGxlIHtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMmVtO1xcbiAgICBtYXgtaGVpZ2h0OiAyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5wcm9qZWN0X2Rlc2NyaXB0aW9uIHtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0MCU7XFxuICAgIC0tYl9jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCB2YXIoLS1iX2NvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHZhcigtLWJfY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdF9kZXNjcmlwdGlvbj4qIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcblxcbn1cXG5cXG4ucHJvamVjdF9uYW1lX2lucCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOjFyZW07XFxufVxcblxcbi5kZXN0cm95X3Byb2plY3Qge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xcmVtO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBjb3JhbDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCA0LCA0KTtcXG59XFxuXFxuLnByb2plY3RfbmFtZV9zdWJtaXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgMTg1LCA1MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlcjpub25lO1xcbn1cXG5cXG4uaG9tZV9jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZV9jb250YWluZXI+KiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogbWluKGNhbGMoNnZ3KSwgNDhweCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5ob21lX3RvcCB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi5wcm9qZWN0X2luZm8ge1xcbiAgICBjb2xvcjogY29yYWw7XFxufVxcblxcbi5wcm9qZWN0X2RhdGEge1xcbiAgICBoZWlnaHQ6IG1pbigyMHZoLCAyMDBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFza19pbmZvIHtcXG4gICAgY29sb3I6Z3JlZW47XFxufVxcblxcbi50b2RheV9pbmZvIHtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHdoaXRlO1xcblxcbiAgICBjb2xvcjpyZ2IoNDgsIDE1MiwgMjUwKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgYm9keSB7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB9XFxuICAgIFtjbGFzcz1cXFwiYmFzZVxcXCJdIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIH1cXG4gICAgW2NsYXNzPVxcXCJtaWRkbGVcXFwiXSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1cHggMS43ZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICBbY2xhc3M9XFxcIm5hdmlnYXRvclxcXCJdIHtcXG4gICAgICAgIGdyaWQtcm93OiAxLzI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICB9XFxuICAgIFtjbGFzcz1cXFwiYmFyMlxcXCJdIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgW2NsYXNzPVxcXCJwcm9qZWN0X2NvbnRhaW5lclxcXCJdIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTA3LCAxNTYpO1xcbiAgICB9XFxuICAgIFtjbGFzcz1cXFwidGFza0xpc3RcXFwiXSB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwNywgMTU2KTtcXG5cXG4gICAgfVxcbiAgICBbY2xhc3M9XFxcImhvbWVfY29udGFpbmVyXFxcIl0ge1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgfVxcbiAgICAuaG9tZV9jb250YWluZXI+KiB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgIH1cXG5cXG4gICAgLnRhc2sge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgW3R5cGUgPSBcXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXSB7XFxuICAgICAgICBtaW4taGVpZ2h0OiAyZW07XFxuICAgIG1heC1oZWlnaHQ6IDJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuXFxuICAgIH1cXG5cXG4gICAgXFxufVxcblxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsWUFBWTtJQUNaLFdBQVc7SUFDWCx3RUFBd0U7QUFDNUU7Ozs7QUFJQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gseURBQWlDO0lBQ2pDLDRCQUE0QjtJQUM1QixzQkFBc0I7O0lBRXRCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixn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Q0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMkJBQTJCOztJQUUzQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQ0FBaUM7UUFDakMsMEJBQTBCO1FBQzFCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtDQUFrQztJQUN0QztJQUNBO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixrQ0FBa0M7O0lBRXRDO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7O0lBRWpCOzs7QUFHSjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiBtYXgobWluKDE2cHgsIGNhbGMoOHB4ICsgMXZ3KSksIDE0cHgpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmcuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmFzZSB7XFxuICAgIGhlaWdodDogY2xhbXAoNTAwcHgsIDQwdmgsIDgwMHB4KTtcXG4gICAgd2lkdGg6IGNsYW1wKDc1MHB4LCA2MHZ3LCA5MDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjYsIDE5OSwgMjE0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1MHB4IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMWZyIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgXFxufVxcblxcbi5taWRkbGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1cHggNGZyO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG5cXG5uYXYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDoxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXY+KiwgbGk+YnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubmF2Pioge1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4uYmFyIHtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5iYXIyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcbi5kYXRlX29wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOjVweDtcXG59XFxuXFxubGk+YnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5idXR0b24tYmcge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAtNXB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OCwgMTM5LCAxNjcsIDAuNSk7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRleHQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxubGkge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBrZXlmcmFtZXMgYnV0dG9uLWhvdmVyIHtcXG4gICAgZnJvbSB7d2lkdGg6IDAlO31cXG4gICAgdG8ge3dpZHRoOiBjYWxjKDEwMCUgKyA1cHgpO31cXG59XFxuXFxubmF2PmJ1dHRvbjpob3Zlcj4uYnV0dG9uLWJnLCAuZGF0ZV9vcHRpb25zPmxpOmhvdmVyPi5idXR0b24tYmcge1xcbiAgICBhbmltYXRpb246IGJ1dHRvbi1ob3ZlcjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2tMaXN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG4udGFzayB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxufVxcblxcbi5kZXN0cnVjdGlvbiB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICByaWdodDogLTFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbn1cXG5cXG4udGFzaz4qIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4udGFza190aXRsZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmhpZ2gge2JhY2tncm91bmQtY29sb3I6IGNvcmFsO31cXG4ubWVkaXVtIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNjQsIDEzMyk7fVxcbi5sb3cge2JhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwNywgMTg5KTt9XFxuXFxuaDIge1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggZ3JheTtcXG59XFxuLmRlc2Mge1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzcHggZ3JheTtcXG5cXG5cXG5cXG4gICAgXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50YXNrPmlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiA0MCU7XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZCB7XFxuXFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6Z3JlZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0X2FkZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAyNTUsIDEyNyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbiBcXG5cXG4uZmllbGRzZXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC0tc2l6ZXI6IDUwMHB4O1xcbiAgICB3aWR0aDogY2xhbXAoY2FsYyh2YXIoLS1zaXplcikgLSAxNTBweCksIDUwdncsIDcwMHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCh2YXIoLS1zaXplciksIDgwdmgsIDEwMDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBcXG59XFxuXFxuLmxlZnQge1xcbiAgICBtYXgtd2lkdGg6IDYwJTtcXG59XFxuXFxuLnJhZGlvIHtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmxhYmVsLCBsZWdlbmQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XFxufVxcbmxlZ2VuZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgY29ybmZsb3dlcmJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG5cXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBmb250OmluaGVyaXQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbn1cXG5cXG4uZm9ybV9idXR0b25zPmJ1dHRvbiB7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IHdoaXRlO1xcbn1cXG5cXG4uZm9ybV9idXR0b25zIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6MjBweDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0LCAxNjUsIDQpO1xcbn1cXG4uZGVzdHJveSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDUsIDUpO1xcbn1cXG5cXG5pbnB1dFt0eXBlID0gXFxcInRleHRcXFwiXSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSBcXG5cXG5cXG5maWVsZHNldD5pbnB1dFt0eXBlID0gXFxcImRhdGV0aW1lLWxvY2FsXFxcIl0ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdF9jb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDEwLjVyZW0pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMTMuNXJlbSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBnYXA6IDAuNXJlbTtcXG5cXG4gICAgb3ZlcmZsb3c6YXV0bztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucHJvamVjdF9jb250YWluZXI+LmFkZF9wcm9qZWN0IHtcXG4gICAgXFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDI1NSwgMTI3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIC8qZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgY29yYWw7XFxuICAgIGhlaWdodDogMTJyZW07XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgMTUyLCAyNTApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdF90aXRsZSB7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDJlbTtcXG4gICAgbWF4LWhlaWdodDogMmVtO1xcbiAgICBsaW5lLWhlaWdodDogMWVtO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ucHJvamVjdF9kZXNjcmlwdGlvbiB7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNDAlO1xcbiAgICAtLWJfY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgdmFyKC0tYl9jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCB2YXIoLS1iX2NvbG9yKTtcXG59XFxuXFxuLnByb2plY3RfZGVzY3JpcHRpb24+KiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMXJlbTtcXG5cXG59XFxuXFxuLnByb2plY3RfbmFtZV9pbnAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZToxcmVtO1xcbn1cXG5cXG4uZGVzdHJveV9wcm9qZWN0IHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMXJlbTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgY29yYWw7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgICBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgNCwgNCk7XFxufVxcblxcbi5wcm9qZWN0X25hbWVfc3VibWl0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDE4NSwgNTEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXI6bm9uZTtcXG59XFxuXFxuLmhvbWVfY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWVfY29udGFpbmVyPioge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IG1pbihjYWxjKDZ2dyksIDQ4cHgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uaG9tZV90b3Age1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbn1cXG5cXG4ucHJvamVjdF9pbmZvIHtcXG4gICAgY29sb3I6IGNvcmFsO1xcbn1cXG5cXG4ucHJvamVjdF9kYXRhIHtcXG4gICAgaGVpZ2h0OiBtaW4oMjB2aCwgMjAwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2tfaW5mbyB7XFxuICAgIGNvbG9yOmdyZWVuO1xcbn1cXG5cXG4udG9kYXlfaW5mbyB7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCB3aGl0ZTtcXG5cXG4gICAgY29sb3I6cmdiKDQ4LCAxNTIsIDI1MCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgIGJvZHkge1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgfVxcbiAgICBbY2xhc3M9XFxcImJhc2VcXFwiXSB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICB9XFxuICAgIFtjbGFzcz1cXFwibWlkZGxlXFxcIl0ge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNXB4IDEuN2ZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG4gICAgW2NsYXNzPVxcXCJuYXZpZ2F0b3JcXFwiXSB7XFxuICAgICAgICBncmlkLXJvdzogMS8yO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgfVxcbiAgICBbY2xhc3M9XFxcImJhcjJcXFwiXSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIFtjbGFzcz1cXFwicHJvamVjdF9jb250YWluZXJcXFwiXSB7XFxuICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEwNywgMTU2KTtcXG4gICAgfVxcbiAgICBbY2xhc3M9XFxcInRhc2tMaXN0XFxcIl0ge1xcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMDcsIDE1Nik7XFxuXFxuICAgIH1cXG4gICAgW2NsYXNzPVxcXCJob21lX2NvbnRhaW5lclxcXCJdIHtcXG4gICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIH1cXG4gICAgLmhvbWVfY29udGFpbmVyPioge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgIC50YXNrIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIFt0eXBlID0gXFxcImRhdGV0aW1lLWxvY2FsXFxcIl0ge1xcbiAgICAgICAgbWluLWhlaWdodDogMmVtO1xcbiAgICBtYXgtaGVpZ2h0OiAyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcblxcbiAgICB9XFxuXFxuICAgIFxcbn1cXG5cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gbWFrZUVsZW1lbnQodHlwZSwgY2wpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2wpO1xuICAgIHJldHVybiBlbDtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbn1cblxuXG5leHBvcnQge21ha2VFbGVtZW50LCBzdG9yYWdlQXZhaWxhYmxlfTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IG5hdmlnYXRpb24sIGdlbkJ1dHRvbiwgZ2VuUHJvamVjdHMsIGhvbWVfb25fY2xpY2sgfSBmcm9tICcuL2xheW91dEJ1aWxkZXInO1xuaW1wb3J0IHsgbWFrZUVsZW1lbnQgYXMgY3JlYXRlIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IGdlbmVyYXRlQ2FyZCB9IGZyb20gJy4vdGFza0dlbic7XG5cbmNvbnN0IGRvYyA9IGRvY3VtZW50O1xuXG5jb25zdCBjb250YWluZXIgPSBjcmVhdGUoJ2RpdicsICdjb250YWluZXInKTtcbmRvYy5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbmNvbnN0IGJhc2UgPSBjcmVhdGUoJ2RpdicsICdiYXNlJyk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoYmFzZSk7XG5cbmNvbnN0IHRpdGxlID0gY3JlYXRlKCdoMScsICd0aXRsZScpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLURvIGxpc3RcIjtcbmJhc2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG5jb25zdCBtaWRkbGUgPSBjcmVhdGUoJ2RpdicsICdtaWRkbGUnKTtcbmJhc2UuYXBwZW5kQ2hpbGQobWlkZGxlKVxuXG5taWRkbGUuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbigpKTtcbm1pZGRsZS5hcHBlbmRDaGlsZChjcmVhdGUoJ2RpdicsICdiYXIyJykpO1xuY29uc3QgdGFza0xpc3QgPSBjcmVhdGUoJ2RpdicsICd0YXNrTGlzdCcpO1xudGFza0xpc3QuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbm1pZGRsZS5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG5cbm1pZGRsZS5hcHBlbmRDaGlsZChnZW5Qcm9qZWN0cygpKTtcblxuLyp0YXNrTGlzdC5hcHBlbmRDaGlsZChnZW5lcmF0ZUNhcmQoXCJIb21ld29ya1wiLFwiTWF0aCBhbmQgY2hlbWlzdHJ5XCIsXCJoaWdoXCIpKTtcbnRhc2tMaXN0LmFwcGVuZENoaWxkKGdlbmVyYXRlQ2FyZChcIkhvbWV3b3JrXCIsXCJNYXRoIGFuZCBjaGVtaXN0cnlcIixcIm1lZGl1bVwiKSk7XG50YXNrTGlzdC5hcHBlbmRDaGlsZChnZW5lcmF0ZUNhcmQoXCJIb21ld29ya1wiLFwiTWF0aCBhbmQgY2hlbWlzdHJ5XCIsXCJsb3dcIikpOyovXG5cbmNvbnN0IGJvdHRvbSA9IGNyZWF0ZSgnZGl2JywgJ2JvdHRvbScpO1xuYmFzZS5hcHBlbmRDaGlsZChib3R0b20pO1xuXG5ib3R0b20uYXBwZW5kQ2hpbGQoZ2VuQnV0dG9uKCkpO1xuXG5ob21lX29uX2NsaWNrKCk7XG5cblxuXG5cblxuIiwiaW1wb3J0IHsgbWFrZUVsZW1lbnQgYXMgY3JlYXRlIH0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCB7IGdlbmVyYXRlQ2FyZCwgcmVvcmRlciwgbWFrZVRhc2sgfSBmcm9tICcuL3Rhc2tHZW4uanMnO1xuaW1wb3J0IHsgYWRkLCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IG1ha2VQcm9qZWN0LCBwcm9qZWN0LCB1cGRhdGVfZGlzcGxheSwgdG90YWxfcHJvamVjdHMsIHBfZm9ybSB9IGZyb20gJy4vcHJvamVjdHMuanMnO1xuXG5sZXQgY3VycmVudF90YWIgPSBcIkhvbWVcIjtcbmxldCBmb3JtID0gdW5kZWZpbmVkO1xubGV0IHRvdGFsX3Rhc2tzID0gMDtcbmxldCBob21lX29uX2NsaWNrID0gdW5kZWZpbmVkO1xubGV0IGFkZFByb2plY3QgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGRlZHVjdF90YXNrKCkge1xuICAgIHRvdGFsX3Rhc2tzIC09IDE7XG59XG5cbmZ1bmN0aW9uIHBsdXNfdGFzaygpIHtcbiAgICB0b3RhbF90YXNrcyArPSAxO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1fcHJvbXB0KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFzZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGZvcm0pO1xufVxuXG5mdW5jdGlvbiBzaG93KGFyZyA9IGN1cnJlbnRfdGFiKSB7XG4gICAgaWYgKHByb2plY3QgPT09IHVuZGVmaW5lZCkgeyBjdXJyZW50X3RhYiA9IGFyZzsgfVxuXG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3QnKTtcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICByZW9yZGVyKCk7XG5cbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgaWYgKGFyZyA9PT0gXCJUb2RheVwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXJyYXkuZnJvbSh0YXNrTGlzdC5jaGlsZHJlbikubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gcGFyc2VJU08odGFza0xpc3QuY2hpbGRyZW5baV0ucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnXVwiKS52YWx1ZSk7XG4gICAgICAgICAgICBpZiAodG9kYXkuZ2V0RnVsbFllYXIoKSAhPT0gZGF0ZS5nZXRGdWxsWWVhcigpIHx8IHRvZGF5LmdldE1vbnRoKCkgIT09IGRhdGUuZ2V0TW9udGgoKSB8fCB0b2RheS5nZXREYXRlKCkgIT09IGRhdGUuZ2V0RGF0ZSgpKSB7IHRhc2tMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOyB9XG4gICAgICAgICAgICBlbHNlIHsgdGFza0xpc3QuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7IGNvbnNvbGUubG9nKHRvZGF5LmdldERhdGUoKSwgZGF0ZS5nZXREYXRlKCkpOyB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYXJnID09PSBcIlRoaXMgd2Vla1wiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXJyYXkuZnJvbSh0YXNrTGlzdC5jaGlsZHJlbikubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBtYXhXID0gdG9kYXkuZ2V0VGltZSgpICsgKCg3IC0gdG9kYXkuZ2V0RGF5KCkpICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICBsZXQgbWluVyA9IHRvZGF5LmdldFRpbWUoKSAtICgodG9kYXkuZ2V0RGF5KCkpICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrKHNEYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNEYXRlLmdldFRpbWUoKSA+IG1pblcgJiYgc0RhdGUuZ2V0VGltZSgpIDwgbWF4VykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRhdGUgPSBwYXJzZUlTTyh0YXNrTGlzdC5jaGlsZHJlbltpXS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZSA9ICdkYXRldGltZS1sb2NhbCddXCIpLnZhbHVlKTtcbiAgICAgICAgICAgIGlmICgodG9kYXkuZ2V0RnVsbFllYXIoKSAhPT0gZGF0ZS5nZXRGdWxsWWVhcigpKSB8fCB0b2RheS5nZXRNb250aCgpICE9PSBkYXRlLmdldE1vbnRoKCkgfHwgY2hlY2soZGF0ZSkpIHsgdGFza0xpc3QuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7IH1cbiAgICAgICAgICAgIGVsc2UgeyB0YXNrTGlzdC5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTsgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGFyZyA9PT0gXCJUaGlzIG1vbnRoXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBcnJheS5mcm9tKHRhc2tMaXN0LmNoaWxkcmVuKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBwYXJzZUlTTyh0YXNrTGlzdC5jaGlsZHJlbltpXS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZSA9ICdkYXRldGltZS1sb2NhbCddXCIpLnZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0b2RheS5nZXRGdWxsWWVhcigpICE9PSBkYXRlLmdldEZ1bGxZZWFyKCkgfHwgdG9kYXkuZ2V0TW9udGgoKSAhPT0gZGF0ZS5nZXRNb250aCgpKSB7IHRhc2tMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOyB9XG4gICAgICAgICAgICBlbHNlIHsgdGFza0xpc3QuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7IH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChhcmcgPT09IFwicHJvamVjdF90YXNrc1wiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXJyYXkuZnJvbSh0YXNrTGlzdC5jaGlsZHJlbikubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhc2tMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgdGFzay5odG1sX2VsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJnID09PSBcIkhvbWVcIikge1xuICAgICAgICBob21lX29uX2NsaWNrKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFyZyA9PT0gXCJQcm9qZWN0c1wiKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrTGlzdCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfY29udGFpbmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X2NvbnRhaW5lcicpLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBcnJheS5mcm9tKHRhc2tMaXN0LmNoaWxkcmVuKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFza0xpc3QuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc29ydGVyID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFycmF5LmZyb20odGFza0xpc3QuY2hpbGRyZW4pLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0YXNrTGlzdC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7c29ydGVyLnB1c2godGFza0xpc3QuY2hpbGRyZW5baV0pO31cbiAgICB9XG5cbiAgICBzb3J0ZXIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBsZXQgZGF0ZTEgPSBhLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlID0gJ2RhdGV0aW1lLWxvY2FsJ11cIikudmFsdWU7XG4gICAgICAgIGxldCBkYXRlMiA9IGEucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnXVwiKS52YWx1ZTtcbiAgICAgICAgaWYgKGRhdGUxIDwgZGF0ZTIpIHtyZXR1cm4gMTt9XG4gICAgICAgIGVsc2Uge3JldHVybiAtMTt9XG5cbiAgICB9KVxuXG4gICAgc29ydGVyLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoYSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2VuKHBhcmVudCwgLi4uYXJncykge1xuICAgIGFyZ3MuZm9yRWFjaCgoYXJnKSA9PiB7XG4gICAgICAgIGxldCBjYXBzdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBsZXQgYiA9IGNyZWF0ZSgnYnV0dG9uJywgJ21lbnUnKTtcbiAgICAgICAgbGV0IHRleHQgPSBjcmVhdGUoJ2RpdicsICd0ZXh0Jyk7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBhcmc7XG4gICAgICAgIGIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGNhcHN1bGUuYXBwZW5kQ2hpbGQoYik7XG4gICAgICAgIGNhcHN1bGUuYXBwZW5kQ2hpbGQoY3JlYXRlKCdkaXYnLCAnYnV0dG9uLWJnJykpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2Fwc3VsZSk7XG5cbiAgICAgICAgYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBzaG93KGFyZyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbWFrZUIobmFtZSkge1xuICAgIGxldCBiMSA9IGNyZWF0ZSgnYnV0dG9uJywgJ21lbnUnKTtcbiAgICBsZXQgdGV4dCA9IGNyZWF0ZSgnZGl2JywgJ3RleHQnKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBiMS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBiMS5hcHBlbmRDaGlsZChjcmVhdGUoJ2RpdicsICdidXR0b24tYmcnKSk7XG4gICAgcmV0dXJuIGIxO1xufVxuXG5mdW5jdGlvbiBuYXZpZ2F0aW9uKCkge1xuICAgIGNvbnN0IG5hdiA9IGNyZWF0ZSgnbmF2JywgJ25hdmlnYXRvcicpO1xuXG4gICAgbGV0IGJhciA9IGNyZWF0ZSgnZGl2JywgJ2JhcicpO1xuICAgIGxldCBiYXIyID0gY3JlYXRlKCdkaXYnLCAnYmFyJyk7XG5cbiAgICBsZXQgYjEgPSBtYWtlQignSG9tZScpO1xuXG4gICAgZnVuY3Rpb24gaG9tZV9mdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdG9wID0gY3JlYXRlKCdkaXYnLCAnaG9tZV90b3AnKTtcbiAgICAgICAgY29uc3QgaG9tZSA9IGNyZWF0ZSgnZGl2JywgJ2hvbWVfY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBwX2Rlc2MgPSBjcmVhdGUoJ2RpdicsICdwcm9qZWN0X2luZm8nKTtcbiAgICAgICAgbGV0IHRfZGVzYyA9IGNyZWF0ZSgnZGl2JywgJ3Rhc2tfaW5mbycpO1xuICAgICAgICBsZXQgdF90YXNrID0gY3JlYXRlKCdkaXYnLCAndG9kYXlfaW5mbycpO1xuXG5cbiAgICAgICAgdG9wLmFwcGVuZENoaWxkKHBfZGVzYyk7XG4gICAgICAgIHRvcC5hcHBlbmRDaGlsZCh0X2Rlc2MpO1xuICAgICAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBob21lLmFwcGVuZENoaWxkKHRvcCk7XG4gICAgICAgIGhvbWUuYXBwZW5kQ2hpbGQodF90YXNrKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZGRsZScpLmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gICAgICAgIGhvbWVfb25fY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3QnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X2NvbnRhaW5lcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgaWYgKHRvdGFsX3Byb2plY3RzID09PSAxKSB7cF9kZXNjLnRleHRDb250ZW50ID0gYCR7dG90YWxfcHJvamVjdHN9IFByb2plY3RgO31cbiAgICAgICAgICAgIGVsc2Uge3BfZGVzYy50ZXh0Q29udGVudCA9IGAke3RvdGFsX3Byb2plY3RzfSBQcm9qZWN0c2A7fVxuICAgICAgICAgICAgaWYgKHRvdGFsX3Rhc2tzID09PSAxKSB7dF9kZXNjLnRleHRDb250ZW50ID0gYCR7dG90YWxfdGFza3N9IFRhc2tgO31cbiAgICAgICAgICAgIGVsc2Uge3RfZGVzYy50ZXh0Q29udGVudCA9IGAke3RvdGFsX3Rhc2tzfSBUYXNrc2A7fVxuXG4gICAgICAgICAgICBsZXQgZm9yX3RvZGF5ID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0Jyk7XG4gICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBcnJheS5mcm9tKHRhc2tMaXN0LmNoaWxkcmVuKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gcGFyc2VJU08odGFza0xpc3QuY2hpbGRyZW5baV0ucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnXVwiKS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRvZGF5LmdldEZ1bGxZZWFyKCkgIT09IGRhdGUuZ2V0RnVsbFllYXIoKSB8fCB0b2RheS5nZXRNb250aCgpICE9PSBkYXRlLmdldE1vbnRoKCkgfHwgdG9kYXkuZ2V0RGF0ZSgpICE9PSBkYXRlLmdldERhdGUoKSkgeyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgIGVsc2UgeyBmb3JfdG9kYXkgKz0gMTsgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm9yX3RvZGF5ID09PSAxKSB7dF90YXNrLnRleHRDb250ZW50ID0gYCR7Zm9yX3RvZGF5fSB0YXNrIGR1ZSBUb2RheWA7fVxuICAgICAgICAgICAgZWxzZSB7dF90YXNrLnRleHRDb250ZW50ID0gYCR7Zm9yX3RvZGF5fSB0YXNrcyBkdWUgVG9kYXlgO31cbiAgICAgICAgfVxuXG4gICAgICAgIGIxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHNob3coJ0hvbWUnKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBob21lX2Z1bmN0aW9uKCk7XG4gICAgXG5cbiAgICBsZXQgZGVzYyA9IGNyZWF0ZSgnZGl2JywgJ3Rhc2tzJyk7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IFwiVGFza3NcIjtcblxuICAgIGxldCBidW5kbGVyID0gY3JlYXRlKCd1bCcsICdkYXRlX29wdGlvbnMnKTtcbiAgICBnZW4oYnVuZGxlciwgXCJUb2RheVwiLCBcIlRoaXMgd2Vla1wiLCBcIlRoaXMgbW9udGhcIiwgXCJBbGxcIik7XG4gICAgZGVzYy5hcHBlbmRDaGlsZChidW5kbGVyKTtcblxuICAgIGxldCBiMiA9IG1ha2VCKCdQcm9qZWN0cycpXG5cbiAgICBsZXQgYnV0cyA9IFtiMSwgYmFyLCBiMiwgYmFyMiwgZGVzY107XG4gICAgYnV0cy5mb3JFYWNoKChiKSA9PiB7IG5hdi5hcHBlbmRDaGlsZChiKSB9KTtcblxuXG4gICAgYWRkUHJvamVjdCA9IGNyZWF0ZSgnYnV0dG9uJywgJ2FkZF9wcm9qZWN0Jyk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFzZVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChwX2Zvcm0pO1xuICAgICAgICB9KVxuICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSBcIitcIjtcblxuICAgIGZ1bmN0aW9uIGFkZFAocGFyZW50KSB7XG4gICAgICAgIGNyZWF0ZSgnYnV0dG9uJywgJ2FkZF9wcm9qZWN0Jyk7XG4gICAgfVxuXG4gICAgYjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBzaG93KFwiUHJvamVjdHNcIik7XG4gICAgfSlcblxuICAgIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIGdlbkZvcm0oKSB7XG5cbiAgICBmdW5jdGlvbiBtYWtlSW5wdXQodHlwZSwgdGV4dCwgaWRkLCBwYXIpIHtcbiAgICAgICAgY29uc3QgaW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wLnR5cGUgPSB0eXBlO1xuICAgICAgICBpbnAuaWQgPSBpZGRcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5mb3IgPSBpZGQ7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgICAgICBwYXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBwYXIuYXBwZW5kQ2hpbGQoaW5wKTtcbiAgICAgICAgcmV0dXJuIGlucDtcbiAgICB9XG5cbiAgICBmb3JtID0gY3JlYXRlKCdmb3JtJywgJ2Zvcm0nKTtcbiAgICBjb25zdCBmaWVsZCA9IGNyZWF0ZSgnZmllbGRzZXQnLCAnZmllbGRzZXQnKTtcbiAgICBjb25zdCBsZWdlbmQgPSBjcmVhdGUoJ2xlZ2VuZCcsICdsZWdlbmQnKTtcbiAgICBsZWdlbmQudGV4dENvbnRlbnQgPSBcIlRhc2sgZGV0YWlsc1wiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQpO1xuICAgIGZpZWxkLmFwcGVuZENoaWxkKGxlZ2VuZCk7XG4gICAgbGV0IHRpdGxlID0gbWFrZUlucHV0KFwidGV4dFwiLCBcIlRpdGxlXCIsIFwiVGl0bGVcIiwgZmllbGQpO1xuICAgIHRpdGxlLnBsYWNlaG9sZGVyID0gXCJDb29sIHRpdGxlXCI7XG4gICAgdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRpdGxlLm1heExlbmd0aCA9IDIwO1xuXG4gICAgY29uc3QgaW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBpbnAucm93cyA9IDg7XG4gICAgaW5wLmlkID0gJ2Rlc2MnO1xuICAgIGlucC5wbGFjZWhvbGRlciA9IFwiVGhpcyB0YXNrIGlzIHZlcnkgY29vbCBhbmQgaW1wb3J0YW50XCI7XG5cbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuZm9yID0gJ2Rlc2MnO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXG4gICAgZmllbGQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGZpZWxkLmFwcGVuZENoaWxkKGlucCk7XG5cbiAgICBjb25zdCByYWRpb19maWVsZCA9IGNyZWF0ZSgnZmllbGRzZXQnLCAncmFkaW8nKTtcblxuICAgIGNvbnN0IHByaW9yaXRpZXMgPSBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdO1xuICAgIGNvbnN0IGJveGVzID0gW107XG4gICAgY29uc3QgcmFkaW9fbGVnZW5kID0gY3JlYXRlKCdsZWdlbmQnLCAncmFkaW9fbGVnZW5kJyk7XG4gICAgcmFkaW9fbGVnZW5kLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICAgIHJhZGlvX2ZpZWxkLmFwcGVuZENoaWxkKHJhZGlvX2xlZ2VuZCk7XG5cbiAgICBjb25zdCBkYXRlID0gbWFrZUlucHV0KFwiZGF0ZXRpbWUtbG9jYWxcIiwgXCJEYXRlXCIsIFwiRGF0ZVwiLCBmaWVsZCk7XG4gICAgZGF0ZS5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBwcmlvcml0aWVzLmZvckVhY2goKHByKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdmkgPSBjcmVhdGUoJ2RpdicsICdmb3JtX3MnKTtcbiAgICAgICAgY29uc3QgaW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgICAgIGlucC5pZCA9IHByO1xuICAgICAgICBpbnAubmFtZSA9IFwicHJpb3JpdGllc1wiXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwuZm9yID0gcHI7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gcHI7XG4gICAgICAgIGRpdmkuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBkaXZpLmFwcGVuZENoaWxkKGlucCk7XG4gICAgICAgIHJhZGlvX2ZpZWxkLmFwcGVuZENoaWxkKGRpdmkpO1xuICAgICAgICBib3hlcy5wdXNoKGlucCk7XG4gICAgICAgIGlucC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICB9KVxuICAgIHJhZGlvX2ZpZWxkLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzFdLmNoZWNrZWQgPSB0cnVlO1xuICAgIGZpZWxkLmFwcGVuZENoaWxkKHJhZGlvX2ZpZWxkKVxuXG5cbiAgICBjb25zdCBidXR0b25fZGl2ID0gY3JlYXRlKCdkaXYnLCAnZm9ybV9idXR0b25zJyk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBjcmVhdGUoJ2J1dHRvbicsICdzdWJtaXQnKTtcbiAgICBzdWJtaXQudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gXCLinJNcIjtcblxuICAgIGNvbnN0IGRlc3Ryb3kgPSBjcmVhdGUoJ2J1dHRvbicsICdkZXN0cm95Jyk7XG4gICAgZGVzdHJveS50eXBlID0gXCJidXR0b25cIjtcbiAgICBkZXN0cm95LnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBzdG9wID0gZmFsc2U7XG4gICAgICAgIFt0aXRsZSwgZGF0ZV0uZm9yRWFjaCgoaW5wdSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpbnB1LmNoZWNrVmFsaWRpdHkoKSkgeyBpbnB1LnJlcG9ydFZhbGlkaXR5KCk7IHN0b3AgPSB0cnVlOyB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChzdG9wKSB7IHJldHVybjsgfVxuICAgICAgICBsZXQgZGVzYyA9IGlucC52YWx1ZTtcbiAgICAgICAgbGV0IHByaW8gPSBcIk1lZGl1bVwiO1xuICAgICAgICBib3hlcy5mb3JFYWNoKChjaCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoLmNoZWNrZWQpIHtwcmlvID0gY2guaWQ7fVxuICAgICAgICB9KVxuICAgICAgICB0b3RhbF90YXNrcyArPSAxO1xuICAgICAgICBjb25zdCB0aW1lID0gZGF0ZS52YWx1ZTtcbiAgICAgICAgY29uc3QgY2FyZCA9IGdlbmVyYXRlQ2FyZCh0aXRsZS52YWx1ZSwgZGVzYywgcHJpby50b0xvd2VyQ2FzZSgpLCB0aW1lLCBwcm9qZWN0KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0JykuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLnJlbW92ZUNoaWxkKGZvcm0pO1xuICAgICAgICByZW9yZGVyKCk7XG4gICAgICAgIHNob3coKTtcbiAgICAgICAgaWYgKHByb2plY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHt0aXRsZTogdGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uOiBkZXNjLCBwcmlvcml0eTogcHJpby50b0xvd2VyQ2FzZSgpLCBkdWVEYXRlOiB0aW1lLCBodG1sX2VsZTogY2FyZH0pO1xuICAgICAgICAgICAgdXBkYXRlX2Rpc3BsYXkoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgcmFkaW9fZmllbGQuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMV0uY2hlY2tlZCA9IHRydWU7XG5cblxuICAgIH0pXG5cbiAgICBkZXN0cm95LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKS5yZW1vdmVDaGlsZChmb3JtKTtcbiAgICAgICAgICAgIHJhZGlvX2ZpZWxkLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzFdLmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIH0pXG4gICAgXG4gICAgXG5cbiAgICBidXR0b25fZGl2LmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgYnV0dG9uX2Rpdi5hcHBlbmRDaGlsZChkZXN0cm95KTtcbiAgICBmaWVsZC5hcHBlbmRDaGlsZChidXR0b25fZGl2KTtcbiAgICByZXR1cm4gZm9ybTtcblxufVxuXG5cbmZ1bmN0aW9uIGdlbkJ1dHRvbigpIHtcbiAgICBjb25zdCBmb3JtID0gZ2VuRm9ybSgpO1xuICAgIGNvbnN0IGFkZCA9IGNyZWF0ZSgnYnV0dG9uJywgJ2FkZCcpO1xuICAgIGFkZC50ZXh0Q29udGVudCA9ICcrJztcbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGZvcm1fcHJvbXB0KCk7XG4gICAgfSlcbiAgICByZXR1cm4gYWRkO1xufVxuXG5mdW5jdGlvbiBnZW5Qcm9qZWN0cyhuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdF9jb250YWluZXIgPSBjcmVhdGUoJ2RpdicsICdwcm9qZWN0X2NvbnRhaW5lcicpO1xuICAgIHByb2plY3RfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHJldHVybiBwcm9qZWN0X2NvbnRhaW5lcjtcblxufVxuXG5cblxuZXhwb3J0IHsgbmF2aWdhdGlvbiwgZ2VuQnV0dG9uLCBnZW5Qcm9qZWN0cywgc2hvdywgZm9ybV9wcm9tcHQsIGhvbWVfb25fY2xpY2ssIGRlZHVjdF90YXNrLCBwbHVzX3Rhc2sgfTtcblxuIiwiaW1wb3J0IHsgYWRkLCBwYXJzZUpTT04gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQge21ha2VFbGVtZW50IGFzIGNyZWF0ZSwgc3RvcmFnZUF2YWlsYWJsZX0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCB7c2hvdywgZm9ybV9wcm9tcHQsIGRlZHVjdF90YXNrfSBmcm9tICcuL2xheW91dEJ1aWxkZXInO1xubGV0IHByb2plY3RzID0gW107XG5sZXQgY291bnRlciA9IDA7XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIGxldCBwcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGlmIChwcnMgIT09IG51bGwpIHtcblxuXG4gICAgbGV0IHdhaXRlciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RfY29udGFpbmVyJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwod2FpdGVyKTtcbiAgICAgICAgICAgIHBycy5mb3JFYWNoKChwKSA9PiB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBtYWtlUHJvamVjdChwLm5hbWUsIHAubnVtKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzaG93KFwiSG9tZVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0sIDEwMCk7XG5cbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50ZXJcIikpICE9PSBudWxsKSB7XG4gICAgICAgIGNvdW50ZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY291bnRlclwiKSk7XG4gICAgfVxufVxufVxuXG5jb25zdCBwX2Zvcm0gPSBnZW5Gb3JtKCk7XG5sZXQgY3VyX3Byb2plY3QgPSB1bmRlZmluZWQ7XG5sZXQgdG90YWxfcHJvamVjdHMgPSAwO1xuXG5cbmZ1bmN0aW9uIHdhdGNoX2NoYW5nZXMob2JqKSB7XG4gICAgY29uc3QgcGFyZW50ID0gb2JqLmh0bWxfZWxlLnBhcmVudE5vZGU7XG5cbiAgICBmdW5jdGlvbiBjYWxsYmFjayhtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlZFwiKTtcbiAgICAgICAgbXV0YXRpb25MaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09IFwiY2hpbGRMaXN0XCIpIHtcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoID4gMCAmJiBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbMF0gPT09IG9iai5odG1sX2VsZSkge1xuICAgICAgICAgICAgICAgIG9iai5odG1sX2VsZSA9IFwiZ29uZVwiO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUocGFyZW50LCB7Y2hpbGRMaXN0OiB0cnVlfSk7XG59XG5cblxuXG5cbmZ1bmN0aW9uIGdlbkZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZSgnZm9ybScsICdwcm9qZWN0X2RhdGEnKTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZSgnbGFiZWwnLCAncHJvamVjdF9uYW1lJyk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gICAgY29uc3QgaW5wID0gY3JlYXRlKCdpbnB1dCcsICdwcm9qZWN0X25hbWVfaW5wJyk7XG4gICAgbGFiZWwuZm9yID0gXCJwX25hbWVcIjtcbiAgICBpbnAuaWQgPSBcInBfbmFtZVwiO1xuICAgIGlucC5uYW1lID0gJ3Byb2plY3RfdGl0bGUnO1xuICAgIGlucC5yZXF1aXJlZCA9IHRydWU7XG4gICAgaW5wLm1heExlbmd0aCA9IDIwO1xuXG4gICAgY29uc3Qgc3VibWl0dGVyID0gY3JlYXRlKCdidXR0b24nLCAncHJvamVjdF9uYW1lX3N1Ym1pdCcpO1xuICAgIHN1Ym1pdHRlci50eXBlID0gXCJidXR0b25cIjtcblxuICAgIHN1Ym1pdHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmICghaW5wLmNoZWNrVmFsaWRpdHkoKSkgeyBpbnAucmVwb3J0VmFsaWRpdHkoKTsgcmV0dXJuOyB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpLnJlbW92ZUNoaWxkKHBfZm9ybSk7XG4gICAgICAgIG1ha2VQcm9qZWN0KGlucC52YWx1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRfcHJvamVjdFwiKSk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9KVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnApO1xuICAgIGZvcm0uYXBwZW5kKHN1Ym1pdHRlcik7XG4gICAgcmV0dXJuIGZvcm07XG5cblxuXG59XG5cbmZ1bmN0aW9uIHJlbW92ZV90YXNrKHRhc2ssIHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYgKHRhc2sudGl0bGUgPT09IGUudGl0bGUgJiYgdGFzay5kZXNjID09PSBlLmRlc2MgJiZcbiAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID09PSBlLnByaW9yaXR5ICYmIHRhc2suZHVlRGF0ZSA9PT0gZS5kdWVEYXRlXG4gICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC50YXNrcy5maW5kSW5kZXgobyA9PiBlID09PSBvKSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UocHJvamVjdC50YXNrcy5maW5kSW5kZXgobyA9PiBlID09PSBvKSwgMSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlX2Rpc3BsYXkoKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGdlblByb2plY3QgPSBmdW5jdGlvbihuYW1lLCBkZXNjLCBlbGUsIG51bWIpIHtcbiAgICBjb25zdCBodG1sX2VsZSA9IGVsZTtcbiAgICB0b3RhbF9wcm9qZWN0cyArPSAxO1xuICAgIGxldCBudW07XG4gICAgaWYgKG51bWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBudW0gPSBudW1iO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBudW0gPSBjb3VudGVyO1xuICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudGVyXCIsIEpTT04uc3RyaW5naWZ5KGNvdW50ZXIpKTtcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgIHJldHVybiB7dGFza3MsIG5hbWUsIGRlc2MsIGh0bWxfZWxlLCBudW19O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVfZGlzcGxheSgpXG57XG4gICAgY3VyX3Byb2plY3QgPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3QnKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIGxldCBtYXggPSAzO1xuXG4gICAgICAgIGxldCBkZXNjcyA9IHAuaHRtbF9lbGUucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBsZXQgY2hpbGQgPSBkZXNjcy5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIGRlc2NzLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIGNoaWxkID0gZGVzY3MubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBwLnRhc2tzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmR1ZURhdGUgPiBiLmR1ZURhdGUpIHtyZXR1cm4gMTt9XG4gICAgICAgICAgICBlbHNlIHtyZXR1cm4gLTE7fVxuICAgICAgICB9KVxuICAgICAgICBwLnRhc2tzLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgICAgICAgaWYgKG1heCA9PT0gMCkge3JldHVybjt9XG4gICAgICAgICAgICBlbHNlIHttYXggLT0gMTt9XG4gICAgICAgICAgICBsZXQgaW5mbyA9IGNyZWF0ZSgnZGl2JywgJ3Byb2plY3RfdGl0bGVfZGVzYycpO1xuICAgICAgICAgICAgaW5mby50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICAgICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZChvYmoucHJpb3JpdHkpO1xuICAgICAgICAgICAgcC5odG1sX2VsZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfZGVzY3JpcHRpb25cIikuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gb25fY2xpY2socHJvamVjdF9hLCBiKSB7XG4gICAgYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGN1cl9wcm9qZWN0ID0gcHJvamVjdF9hO1xuICAgICAgICBmb3JtX3Byb21wdCgpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgIGxldCBzZWFyY2ggPSBwcm9qZWN0cy5maW5kKGEgPT4ge1xuICAgICAgICByZXR1cm4gdGFzay5wcm9qZWN0ID09PSBhLm51bTtcbiAgICB9KTtcbiAgICBpZiAoc2VhcmNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICBzZWFyY2gudGFza3MucHVzaCh0YXNrKTtcbiAgICAgICB1cGRhdGVfZGlzcGxheSgpO1xuICAgICAgIHJldHVybiBzZWFyY2g7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlUHJvamVjdChuYW1lLCBudW0pIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlKCdkaXYnLCAncHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3Rfb2JqID0gZ2VuUHJvamVjdChuYW1lLCBcIm5hbWVcIiwgcHJvamVjdCwgbnVtKTtcbiAgICBjb25zdCBkZXN0cm95X3Byb2plY3QgPSBjcmVhdGUoJ2J1dHRvbicsICdkZXN0cm95X3Byb2plY3QnKTtcblxuICAgIGNvbnN0IGgxID0gY3JlYXRlKCdoMScsICdwcm9qZWN0X3RpdGxlJyk7XG5cbiAgICBoMS50ZXh0Q29udGVudCA9IHByb2plY3Rfb2JqLm5hbWU7XG4gICAgY29uc3QgZGVzYyA9IGNyZWF0ZSgnZGl2JywgJ3Byb2plY3RfZGVzY3JpcHRpb24nKTtcblxuICAgIGNvbnN0IGFkZF9iID0gY3JlYXRlKCdidXR0b24nLCAncHJvamVjdF9hZGQnKTtcbiAgICBvbl9jbGljayhwcm9qZWN0X29iaiwgYWRkX2IpO1xuXG4gICAgZGVzYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGN1cl9wcm9qZWN0ID0gcHJvamVjdF9vYmo7XG4gICAgICAgIHNob3coXCJwcm9qZWN0X3Rhc2tzXCIpO1xuICAgICAgICBjdXJfcHJvamVjdCA9IHVuZGVmaW5lZDtcbiAgICB9KVxuXG4gICAgZGVzdHJveV9wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcHJvamVjdF9vYmoudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0JykucmVtb3ZlQ2hpbGQodGFzay5odG1sX2VsZSk7XG4gICAgICAgICAgICBkZWR1Y3RfdGFzaygpO1xuICAgICAgICB9KVxuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdCk7XG4gICAgICAgIHRvdGFsX3Byb2plY3RzIC09IDE7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5maW5kSW5kZXgoKGEpID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIGEuaHRtbF9lbGUgPT09IHByb2plY3Q7XG4gICAgICAgIH0pLCAxKVxuICAgICAgICBsZXQgZmFsc2VfcCA9IHByb2plY3RzO1xuICAgICAgICBmYWxzZV9wLmZvckVhY2goKGIpID0+IHtcbiAgICAgICAgICAgIGIudGFza3MgPSBbXTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoZmFsc2VfcCkpO1xuICAgIH0pXG5cblxuXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZXN0cm95X3Byb2plY3QpO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChhZGRfYik7XG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3Rfb2JqKTtcbiAgICBsZXQgZmFsc2VfcCA9IHByb2plY3RzO1xuICAgIGZhbHNlX3AuZm9yRWFjaCgoYikgPT4ge1xuICAgICAgICBiLnRhc2tzID0gW107XG4gICAgfSlcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGZhbHNlX3ApKTtcblxufVxuXG5leHBvcnQge3BfZm9ybSwgbWFrZVByb2plY3QsIGN1cl9wcm9qZWN0IGFzIHByb2plY3QsIHVwZGF0ZV9kaXNwbGF5LCByZW1vdmVfdGFzaywgdG90YWxfcHJvamVjdHMsIGFkZFRhc2t9OyIsImltcG9ydCB7bWFrZUVsZW1lbnQgYXMgY3JlYXRlLCBzdG9yYWdlQXZhaWxhYmxlfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IHtjb21wYXJlQXNjLCBwYXJzZUlTT30gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgcmVtb3ZlX3Rhc2ssIHVwZGF0ZV9kaXNwbGF5LCBhZGRUYXNrIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyBkZWR1Y3RfdGFzaywgcGx1c190YXNrLCBzaG93IH0gZnJvbSAnLi9sYXlvdXRCdWlsZGVyLmpzJztcbmltcG9ydCB7IGVsIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcblxubGV0IHRhc2tzID0gW107XG5cbmlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIGxldCBwcnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgIGlmIChwcnMgIT09IG51bGwpIHtcbiAgICBsZXQgd2FpdGVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3QnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3YWl0ZXIpO1xuICAgICAgICAgICAgcHJzLmZvckVhY2goKHApID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBjYXJkID0gZ2VuZXJhdGVDYXJkKHAudGl0bGUsIHAuZGVzY3JpcHRpb24sIHAucHJpb3JpdHksIHAuZHVlRGF0ZSwgcC5wcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3QnKS5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgICAgICAgICBwbHVzX3Rhc2soKTtcbiAgICAgICAgICAgICAgICBpZiAocC5wcm9qZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2ogPSBhZGRUYXNrKHt0aXRsZTogcC50aXRsZSwgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24sIHByaW9yaXR5OiBwLnByaW9yaXR5LCBkdWVEYXRlOiBwLmR1ZURhdGUsIGh0bWxfZWxlOiBjYXJkLCBwcm9qZWN0OiBwLnByb2plY3R9KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNob3Nlbl90YXNrID0gdGFza3MuZmluZCgoYSkgPT4gYS5odG1sX2VsZSA9PT0gY2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIGNob3Nlbl90YXNrLnByb2plY3QgPSBwcm9qO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzaG93KFwiSG9tZVwiKTtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0sIDEwMCk7XG59XG59XG5cblxuY29uc3QgbWFrZVRhc2sgPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBwcm9qZWN0LCBodG1sX2VsZSkge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgcHJvamVjdCwgaHRtbF9lbGV9O1xufVxuXG5mdW5jdGlvbiByZW9yZGVyKCkge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0Jyk7XG4gICAgY29uc3QgRE9NX2VsID0gQXJyYXkuZnJvbSh0YXNrcy5jaGlsZHJlbik7XG4gICAgY29uc3QgZGF0ZXMgPSBbXTtcbiAgICBET01fZWwuZm9yRWFjaCgoY2gpID0+IHtcbiAgICAgICAgZGF0ZXMucHVzaChwYXJzZUlTTyhjaC5xdWVyeVNlbGVjdG9yKChcImlucHV0W3R5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnXVwiKSkudmFsdWUpKTtcbiAgICB9KVxuXG4gICAgZGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5nZXRUaW1lKCkgPiBiLmdldFRpbWUoKSkge3JldHVybiAxO31cbiAgICAgICAgZWxzZSByZXR1cm4gLTE7XG4gICAgfSk7XG4gICAgY29uc3QgbmV3T3JkZXIgPSBbXTtcblxuICAgIGRhdGVzLmZvckVhY2goKGR0KSA9PiB7XG4gICAgICAgIGxldCBjaG9zZW5JbmQgPSBET01fZWwuZmluZEluZGV4KChhKSA9PiB7XG4gICAgICAgICAgICBsZXQgZWxfZCA9IHBhcnNlSVNPKGEucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnXVwiKS52YWx1ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YoZWxfZCksIGVsX2QpXG4gICAgICAgICAgICByZXR1cm4gZWxfZC5nZXRUaW1lKCkgPT09IGR0LmdldFRpbWUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IGNob3NlbiA9IERPTV9lbFtjaG9zZW5JbmRdO1xuICAgICAgICBET01fZWwuc3BsaWNlKGNob3NlbkluZCwgMSk7XG4gXG5cbiAgICAgICAgbmV3T3JkZXIucHVzaChjaG9zZW4pO1xuICAgIH0pXG5cbiAgICB2YXIgY2hpbGQgPSB0YXNrcy5sYXN0RWxlbWVudENoaWxkO1xuICAgIHdoaWxlIChjaGlsZCkge3Rhc2tzLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICBjaGlsZCA9IHRhc2tzLmxhc3RFbGVtZW50Q2hpbGQ7fVxuXG4gICAgbmV3T3JkZXIuZm9yRWFjaCgoZSkgPT4ge3Rhc2tzLmFwcGVuZENoaWxkKGUpfSk7XG5cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDYXJkKC4uLmluZm8pIHtcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlKCdkaXYnLCAndGFzaycpO1xuICAgIGNvbnN0IHRhc2sgPSBtYWtlVGFzayhpbmZvWzBdLCBpbmZvWzFdLCBpbmZvWzJdLCBpbmZvWzNdLCBpbmZvWzRdLCBjYXJkKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZSgnaDInLCAndGFza190aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgIGNvbnN0IGRlc2MgPSBjcmVhdGUoJ2RpdicsICdkZXNjJyk7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJztcbiAgICBkYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuXG4gICAgY29uc3QgbGVmdCA9IGNyZWF0ZSgnZGl2JywgJ2xlZnQnKTtcbiAgICBsZWZ0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGRlc2MpXG5cbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQodGFzay5wcmlvcml0eSk7XG5cbiAgICBjb25zdCBkZXN0cm95ID0gY3JlYXRlKCdkaXYnLCAnZGVzdHJ1Y3Rpb24nKTtcbiAgICBkZXN0cm95LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHRhc2sucHJvamVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZW1vdmVfdGFzayh0YXNrLCB0YXNrLnByb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIGNhcmQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjYXJkKTtcbiAgICAgICAgZGVkdWN0X3Rhc2soKTtcblxuICAgICAgICB0YXNrcy5zcGxpY2UodGFza3MuZmluZEluZGV4KChhKSA9PiBhLmh0bWxfZWxlID09PSB0YXNrLmh0bWxfZWxlKSwgMSlcbiAgICAgICAgbGV0IGZhbHNlX3QgPSB0YXNrcztcbiAgICAgICAgICAgIGZhbHNlX3QuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnByb2plY3QgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YoYS5wcm9qZWN0KSAhPT0gJ251bWJlcicpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YoYS5wcm9qZWN0KSk7XG4gICAgICAgICAgICAgICAgICAgIGEucHJvamVjdCA9IGEucHJvamVjdC5udW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGZhbHNlX3QpKTtcbiAgICB9KTtcbiAgIHRhc2tzLnB1c2godGFzayk7XG4gICBsZXQgZmFsc2VfdCA9IHRhc2tzO1xuICAgIGZhbHNlX3QuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICBpZiAoYS5wcm9qZWN0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mKGEucHJvamVjdCkgIT09ICdudW1iZXInKXtcblxuICAgICAgICAgICAgYS5wcm9qZWN0ID0gYS5wcm9qZWN0Lm51bTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoZmFsc2VfdCkpO1xuXG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlc3Ryb3kpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICByZXR1cm4gY2FyZDtcbn1cblxuZXhwb3J0IHtnZW5lcmF0ZUNhcmQsIHJlb3JkZXIsIG1ha2VUYXNrfTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=