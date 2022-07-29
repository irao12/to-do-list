/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/account.js":
/*!***************************!*\
  !*** ./src/js/account.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst account = () => {\r\n    const _myProjects = [];\r\n    const addProject = (project) => {\r\n        _myProjects.push(project);\r\n    }\r\n    return {\r\n        addProject, _myProjects\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (account());\n\n//# sourceURL=webpack://to-do-list/./src/js/account.js?");

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/js/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/js/task.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n/* harmony import */ var _account_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.js */ \"./src/js/account.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display.js */ \"./src/js/display.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst controller = () => {\r\n    const isValidProjectName = () => {\r\n        // if name is empty, thje result will be \"\" which is not truthy\r\n        return _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectNameInput.value;\r\n    }\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProjectButton.addEventListener('click', () => {\r\n        _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].displayAddProject();\r\n    });\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cancelProjectButton.addEventListener('click', ()=> {\r\n        _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].removeAddProject();\r\n    });\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].confirmProjectButton.addEventListener('click', ()=>{\r\n        if(isValidProjectName()){\r\n            const projectName = _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectNameInput.value;\r\n            const currProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectName);\r\n            _account_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject(currProject);\r\n            _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].removeAddProject();\r\n            _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].refreshProjects();\r\n        }\r\n        else {\r\n            _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].displayProjectNameError();\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller());\r\n\n\n//# sourceURL=webpack://to-do-list/./src/js/controller.js?");

/***/ }),

/***/ "./src/js/display.js":
/*!***************************!*\
  !*** ./src/js/display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n/* harmony import */ var _account_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.js */ \"./src/js/account.js\");\n\r\n\r\n\r\nconst displayController = () => {\r\n\r\n    // methods\r\n    const refreshProjects = () => {\r\n        const projects = _account_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._myProjects;\r\n        const projectList = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList;\r\n        projectList.innerHTML = '';\r\n        projects.forEach((project)=>{\r\n            const projectDiv = document.createElement('div');\r\n            projectDiv.classList.add('project-div');\r\n            projectDiv.textContent = project.getName();\r\n            projectList.appendChild(projectDiv);\r\n        });\r\n    }\r\n\r\n    const displayModal = () => {\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modal.classList.add('active-block');\r\n    }\r\n    const removeModal = () => {\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modal.classList.remove('active-block');\r\n    }\r\n\r\n    const displayAddProject = () => {\r\n        displayModal();\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectModal.classList.add('active-flex')\r\n    }\r\n\r\n    const removeAddProject = () => {\r\n        removeModal();\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectForm.reset();\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectModal.classList.remove('active-flex');\r\n        if (document.querySelector('.error')){\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectNameInput.classList.remove('invalid');\r\n            document.querySelector('.error').remove();\r\n        }\r\n    }\r\n\r\n    const displayProjectNameError = () => {\r\n        const projectNameInput = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectNameInput;\r\n        projectNameInput.classList.add('invalid');\r\n        if (!document.querySelector('.error')){\r\n            const error = document.createElement('div');\r\n            error.classList.add('error');\r\n            error.textContent = 'Please enter a name';\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectNameFormSection.appendChild(error);\r\n        }\r\n    }\r\n\r\n    return {\r\n        refreshProjects,\r\n        displayAddProject, removeAddProject, displayProjectNameError\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController());\n\n//# sourceURL=webpack://to-do-list/./src/js/display.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = () => {\r\n    const projectList = document.querySelector('.project-list');\r\n\r\n    const modal = document.querySelector('.modal');\r\n    const addProjectButton = document.querySelector('.add-project');\r\n    const addProjectModal = document.querySelector('.add-project-modal');\r\n    const addProjectForm = document.querySelector('.add-project-form');\r\n    const projectNameFormSection = document.querySelector('.name-section');\r\n    const projectNameInput = document.querySelector('#project-name-input');\r\n    const cancelProjectButton = document.querySelector('.add-project-modal .cancel-button')\r\n    const confirmProjectButton = document.querySelector('.confirm-project-button')\r\n\r\n    return {\r\n        projectList,\r\n        addProjectButton, cancelProjectButton, confirmProjectButton,\r\n        modal, addProjectModal, addProjectForm, projectNameInput, projectNameFormSection\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom());\n\n//# sourceURL=webpack://to-do-list/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/js/task.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/js/project.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller.js */ \"./src/js/controller.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/js/index.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst project = (name) => {\r\n    // private\r\n    let _name = name;\r\n    const _list = [];\r\n    // public\r\n    const getName = () => {\r\n        return _name;\r\n    };\r\n    const setName = (name) => {\r\n        _name = name;\r\n    };\r\n    const getList = () => {\r\n        return _list;\r\n    };\r\n    const addTask = (task) => {\r\n        _list.push(task)\r\n    };\r\n\r\n    return {\r\n        getName, setName,\r\n        getList,\r\n        addTask\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://to-do-list/./src/js/project.js?");

/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst task = (title, desc, dueDate, priority) => {\r\n    //private\r\n    let _title = title;\r\n    let _desc = desc;\r\n    let _dueDate = dueDate;\r\n    let _priority = priority;\r\n    //public\r\n    // getters\r\n    const getTitle = () => {return _title};\r\n    const getDesc = () => {return _desc};\r\n    const getDueDate = () => {return _dueDate};\r\n    const getPriority = () => {return _priority};\r\n    // setters\r\n    const setTitle = (newTitle) => {_title = newTitle};\r\n    const setDesc = (newDesc) => {_desc = newDesc};\r\n    const setDueDate = (newDueDate) => {_dueDate = newDueDate};\r\n    const setPriority = (newPriority) => {_priority = newPriority}; \r\n\r\n    return {\r\n        getTitle, getDesc, getDueDate, getPriority,\r\n        setTitle, setDesc, setDueDate, setPriority\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);\n\n//# sourceURL=webpack://to-do-list/./src/js/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;