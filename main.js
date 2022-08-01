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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst account = () => {\r\n    const _myProjects = [];\r\n    let _currProject;\r\n\r\n    const addProject = (project) => {\r\n        _myProjects.push(project);\r\n    }\r\n\r\n    const getCurrProject = () =>{\r\n        return _currProject;\r\n    }\r\n\r\n    const setCurrProject = (newProject) => {\r\n        _currProject = newProject;\r\n    }\r\n    \r\n    return {\r\n        getCurrProject, setCurrProject, addProject, _myProjects\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (account());\n\n//# sourceURL=webpack://to-do-list/./src/js/account.js?");

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/js/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/js/task.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n/* harmony import */ var _account_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.js */ \"./src/js/account.js\");\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display.js */ \"./src/js/display.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst controller = () => {\r\n\r\n    const isValidProjectTitle = () => {\r\n        // if title is empty, thje result will be \"\" which is not truthy\r\n        return _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectTitleInput.value;\r\n    }\r\n\r\n    const isValidTaskTitle = () => {\r\n        return _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].taskTitleInput.value;\r\n    }\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProjectButton.addEventListener('click', () => {\r\n        _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].displayAddProject();\r\n    });\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cancelProjectButton.addEventListener('click', ()=> {\r\n        _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].removeAddProject();\r\n    });\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].confirmProjectButton.addEventListener('click', ()=>{\r\n        if(isValidProjectTitle()){\r\n            const projectTitle = _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectTitleInput.value;\r\n            const currProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectTitle);\r\n            _account_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject(currProject);\r\n            _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].removeAddProject();\r\n            _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].refreshProjects();\r\n            const currAccProject = _account_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getCurrProject();\r\n            if (!currAccProject) _account_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setCurrProject(currProject);\r\n        }\r\n        else {\r\n            _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].displayProjectTitleError();\r\n        }\r\n    });\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cancelTaskButton.addEventListener('click', _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].removeAddTask)\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].confirmTaskButton.addEventListener('click', ()=>{\r\n        if (isValidTaskTitle()) {\r\n            const taskTitle = _dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].taskTitleInput.value;\r\n            const currTask = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskTitle);\r\n            const currProject = _account_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getCurrProject();\r\n\r\n            currProject.addTask(currTask);\r\n            _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].removeAddTask();\r\n            _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].refreshTasks();\r\n        }\r\n        else {\r\n            _display_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].displayTaskTitleError();\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller());\r\n\n\n//# sourceURL=webpack://to-do-list/./src/js/controller.js?");

/***/ }),

/***/ "./src/js/display.js":
/*!***************************!*\
  !*** ./src/js/display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n/* harmony import */ var _account_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.js */ \"./src/js/account.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/js/task.js\");\n\r\n\r\n\r\n\r\nconst displayController = () => {\r\n\r\n    // methods\r\n    const refreshProjects = () => {\r\n        const projects = _account_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]._myProjects;\r\n        const projectList = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList;\r\n        projectList.innerHTML = '';\r\n        projects.forEach((project)=>{\r\n            const projectDiv = document.createElement('div');\r\n            projectDiv.classList.add('project-div');\r\n\r\n\r\n            const projectTitle = document.createElement('h2');\r\n            projectTitle.textContent = project.getTitle();\r\n\r\n            projectDiv.appendChild(projectTitle);\r\n\r\n            projectDiv.addEventListener('click', ()=>{\r\n                _account_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setCurrProject(project)\r\n                refreshTasks();\r\n            });\r\n            projectList.appendChild(projectDiv);\r\n        });\r\n    }\r\n\r\n    const displayTask = (task) => {\r\n        const taskList = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskList;\r\n        const newTask = document.createElement('div');\r\n        newTask.classList.add('task-div');\r\n        const taskTitle = document.createElement('h2');\r\n        taskTitle.textContent = task.getTitle();\r\n        newTask.appendChild(taskTitle);\r\n        taskList.appendChild(newTask);\r\n    }\r\n\r\n    const refreshTasks = () => {\r\n        const currProject = _account_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCurrProject();\r\n        const taskList = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskList;\r\n        taskList.textContent = '';\r\n\r\n        if (currProject) {\r\n            const taskList = currProject.getList();\r\n            taskList.forEach(displayTask);\r\n        }\r\n\r\n        const addNewTask = document.createElement('div');\r\n        addNewTask.classList.add('add-new-task');\r\n\r\n        const addTaskText = document.createElement('h2');\r\n        addTaskText.textContent = 'Add task';\r\n        addTaskText.classList.add('add-task-text');\r\n        const addTaskButton = document.createElement('div');\r\n        addTaskButton.classList.add('add-task-button');\r\n        addTaskButton.textContent ='+';\r\n        \r\n        addNewTask.appendChild(addTaskButton);\r\n        addNewTask.appendChild(addTaskText);\r\n        addNewTask.addEventListener('click', displayAddTask);\r\n        taskList.appendChild(addNewTask);\r\n    }\r\n\r\n    const displayModal = () => {\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modal.classList.add('active');\r\n    }\r\n    const removeModal = () => {\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modal.classList.remove('active');\r\n    }\r\n\r\n    const displayAddProject = () => {\r\n        displayModal();\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectModal.classList.add('active')\r\n    }\r\n\r\n    const removeAddProject = () => {\r\n        removeModal();\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectForm.reset();\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectModal.classList.remove('active');\r\n        if (document.querySelector('.error')){\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskTitleInput.classList.remove('invalid');\r\n            document.querySelector('.error').remove();\r\n        }\r\n    }\r\n\r\n    const displayProjectTitleError = () => {\r\n        const projectTitleInput = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectTitleInput;\r\n        projectTitleInput.classList.add('invalid');\r\n        if (!document.querySelector('.error')){\r\n            const error = document.createElement('div');\r\n            error.classList.add('error');\r\n            error.textContent = 'Please enter a title';\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectTitleFormSection.appendChild(error);\r\n        }\r\n    }\r\n\r\n    const displayTaskTitleError = () => {\r\n        const taskTitleInput = _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskTitleInput;\r\n        taskTitleInput.classList.add('invalid');\r\n        if (!document.querySelector('.error')){\r\n            const error = document.createElement('div');\r\n            error.classList.add('error');\r\n            error.textContent = 'Please enter a title';\r\n            console.log(_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskTitleFormSection)\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskTitleFormSection.appendChild(error);\r\n        }\r\n    }\r\n\r\n    const displayAddTask = () => {\r\n        displayModal();\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskModal.classList.add('active');\r\n    }\r\n\r\n    const removeAddTask = () => {\r\n        removeModal();\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskForm.reset();\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskModal.classList.remove('active');\r\n        if (document.querySelector('.error')){\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].taskTitleInput.classList.remove('invalid');\r\n            document.querySelector('.error').remove();\r\n        }\r\n    }\r\n\r\n    return {\r\n        refreshProjects, refreshTasks,\r\n        displayAddProject, removeAddProject, displayProjectTitleError,\r\n        displayAddTask, removeAddTask, displayTaskTitleError\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController());\n\n//# sourceURL=webpack://to-do-list/./src/js/display.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = () => {\r\n    const projectList = document.querySelector('.project-list');\r\n    const taskList = document.querySelector('.task-list');\r\n\r\n    const modal = document.querySelector('.modal');\r\n    const addProjectButton = document.querySelector('.add-project');\r\n    const addProjectModal = document.querySelector('.add-project-modal');\r\n    const addProjectForm = document.querySelector('.add-project-form');\r\n\r\n    const projectTitleFormSection = document.querySelector('.project-title-section');\r\n    const projectTitleInput = document.querySelector('#project-title-input');\r\n    const cancelProjectButton = document.querySelector('.add-project-modal .cancel-button');\r\n    const confirmProjectButton = document.querySelector('.confirm-project-button');\r\n\r\n    const addTaskModal = document.querySelector('.add-task-modal');\r\n    const addTaskForm = document.querySelector('.add-task-form');\r\n\r\n    const taskTitleInput = document.querySelector('#form-task-title')\r\n    const taskTitleFormSection = document.querySelector('.task-title-section')\r\n    const cancelTaskButton = document.querySelector('.add-task-modal .cancel-button');\r\n    const confirmTaskButton = document.querySelector('.confirm-task-button');\r\n\r\n    return {\r\n        projectList, taskList,\r\n        addProjectButton, cancelProjectButton, confirmProjectButton,\r\n        modal, addProjectModal, addProjectForm, projectTitleInput, projectTitleFormSection,\r\n        addTaskModal, addTaskForm,\r\n        cancelTaskButton, confirmTaskButton, taskTitleInput, taskTitleFormSection\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom());\n\n//# sourceURL=webpack://to-do-list/./src/js/dom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst project = (title) => {\r\n    // private\r\n    let _title = title;\r\n    const _list = [];\r\n    // public\r\n    const getTitle = () => {\r\n        return _title;\r\n    };\r\n    const setTitle = (title) => {\r\n        _title = title;\r\n    };\r\n    const getList = () => {\r\n        return _list;\r\n    };\r\n    const addTask = (task) => {\r\n        _list.push(task)\r\n    };\r\n\r\n    return {\r\n        getTitle, setTitle,\r\n        getList,\r\n        addTask\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://to-do-list/./src/js/project.js?");

/***/ }),

/***/ "./src/js/task.js":
/*!************************!*\
  !*** ./src/js/task.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst task = (title, desc, dueDate, priority) => {\r\n    //private\r\n    let _title = title;\r\n    let _desc = desc;\r\n    let _dueDate = dueDate;\r\n    let _priority = priority;\r\n    let _isComplete = false;\r\n    //public\r\n    // getters\r\n    const getTitle = () => {return _title};\r\n    const getDesc = () => {return _desc};\r\n    const getDueDate = () => {return _dueDate};\r\n    const getPriority = () => {return _priority};\r\n    const getStatus = () => {return _isComplete};\r\n    // setters\r\n    const setTitle = (newTitle) => {_title = newTitle};\r\n    const setDesc = (newDesc) => {_desc = newDesc};\r\n    const setDueDate = (newDueDate) => {_dueDate = newDueDate};\r\n    const setPriority = (newPriority) => {_priority = newPriority}; \r\n    const setStatus = (newStatus) => {_isComplete = newStatus};\r\n\r\n    return {\r\n        getTitle, getDesc, getDueDate, getPriority,\r\n        setTitle, setDesc, setDueDate, setPriority,\r\n        getStatus, setStatus\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);\n\n//# sourceURL=webpack://to-do-list/./src/js/task.js?");

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