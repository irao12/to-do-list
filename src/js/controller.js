import project from "./project.js";
import task from "./task.js";
import dom from "./dom.js";
import account from "./account.js";
import displayController from "./display.js";
import { compareAsc, endOfDay } from "date-fns";

const controller = () => {
	const formatDate = (date) => {
		// date is originally in YYYY-MM-DD format
		const dateArray = date.split("-");
		// dateArray = ['YYYY', 'MM', 'DD]
		// move the YYYY to the end and join the elements
		// to create the formatted date
		dateArray.push(dateArray.shift());
		return dateArray.join("-");
	};

	const isValidProjectTitle = () => {
		// if title is empty, thje result will be "" which is not truthy
		return dom.projectTitleInput.value;
	};

	const isValidTaskTitle = () => {
		// if title is empty, thje result will be "" which is not truthy
		return dom.taskTitleInput.value;
	};

	const isValidTaskDate = () => {
		// if the user opted to not include a due date, return true
		if (dom.taskDueDateInput.classList.contains("inactive")) return true;

		const dueDate = new Date(dom.taskDueDateInput.value);
		if (dueDate != "Invalid Date") return true;
		return false;
	};

	dom.addProjectButton.addEventListener("click", () => {
		displayController.displayAddProject();
	});

	dom.cancelProjectButton.addEventListener("click", () => {
		displayController.removeAddProject();
	});

	dom.confirmProjectButton.addEventListener("click", () => {
		if (isValidProjectTitle()) {
			const projectTitle = dom.projectTitleInput.value;
			//create a new project with the title
			const currProject = project(projectTitle);
			account.addProject(currProject);

			displayController.removeAddProject();
			displayController.refreshProjects();

			const currAccProject = account.getCurrProject();
			// if the account does not have a project selected yet,
			// set the new project as the selecte done
			if (!currAccProject) account.setCurrProject(currProject);
		} else {
			displayController.displayProjectTitleError();
		}
	});

	dom.cancelTaskButton.addEventListener("click", () => {
		displayController.removeAddTask();
	});

	dom.confirmTaskButton.addEventListener("click", () => {
		if (isValidTaskTitle() && isValidTaskDate()) {
			const taskTitle = dom.taskTitleInput.value;
			const taskDesc = dom.taskDescInput.value;

			let formattedDate;
			// if the user inputted a date, format it
			if (dom.taskDueDateInput.value) {
				formattedDate = formatDate(dom.taskDueDateInput.value);
			}
			// set the due date as a Date Object referring to the end of the day
			// set the due date as "" if no due date was inputted
			const taskDueDate = dom.taskDueDateInput.value
				? endOfDay(new Date(formattedDate))
				: "";

			const taskPriority = dom.taskPriorityInput.value;

			const currTask = task(
				taskTitle,
				taskDesc,
				taskDueDate,
				taskPriority
			);

			const currProject = account.getCurrProject();

			currProject.addTask(currTask);
			currProject.sortTasks();
			displayController.removeAddTask();
			displayController.refreshTasks();
		} else {
			if (!isValidTaskTitle()) displayController.displayTaskTitleError();
			else {
				displayController.removeTaskTitleError();
			}

			if (!isValidTaskDate()) {
				displayController.displayTaskDateError();
			} else {
				displayController.removeTaskDateError();
			}
		}
	});

	dom.taskToggleDueDate.addEventListener("click", () => {
		const toggleButton = dom.taskToggleDueDate;
		if (toggleButton.textContent === "Remove Due Date") {
			toggleButton.textContent = "Add Due Date";
			dom.taskDueDateInput.value = "";
			dom.taskDueDateInput.classList.add("inactive");
			if (dom.taskDueDateInput.classList.contains("invalid")) {
				dom.taskDueDateInput.classList.remove("invalid");
				document
					.querySelector(".task-due-date-section .error")
					.remove();
			}
		} else if (toggleButton.textContent === "Add Due Date") {
			toggleButton.textContent = "Remove Due Date";
			dom.taskDueDateInput.classList.remove("inactive");
		}
	});

	dom.cancelProjectDeletionButton.addEventListener(
		"click",
		displayController.removeConfirmProjectDeletion
	);
	dom.cancelTaskDeletionButton.addEventListener(
		"click",
		displayController.removeConfirmTaskDeletion
	);

	dom.projectToggle.addEventListener("click", () => {
		if (dom.projectSection.classList.contains("open")) {
			dom.projectSection.classList.remove("open");
			dom.projectToggle.classList.remove("open");
		} else {
			dom.projectSection.classList.add("open");
			dom.projectToggle.classList.add("open");
		}
	});

	dom.editTaskToggleDueDate.addEventListener("click", () => {
		const toggleButton = dom.editTaskToggleDueDate;
		console.log(dom.editTaskDueDateInput);
		if (toggleButton.textContent === "Remove Due Date") {
			toggleButton.textContent = "Add Due Date";
			dom.editTaskDueDateInput.value = "";
			dom.editTaskDueDateInput.classList.add("inactive");
			if (dom.editTaskDueDateInput.classList.contains("invalid")) {
				dom.editTaskDueDateInput.classList.remove("invalid");
				document
					.querySelector(
						".view-task-section.task-due-date-section .error"
					)
					.remove();
			}
		} else if (toggleButton.textContent === "Add Due Date") {
			toggleButton.textContent = "Remove Due Date";
			dom.editTaskDueDateInput.classList.remove("inactive");
		}
	});

	dom.closeViewTaskButton.addEventListener("click", () => {
		displayController.removeViewTaskModal();
	});

	dom.editTaskTitleButton.addEventListener("click", () => {
		const taskSection = document.querySelector(
			".view-task-modal .task-title-section"
		);

		dom.removeClass(dom.editTaskTitleButton, "active-block");

		const heading = taskSection.querySelector(".task-specific-detail h2");
		dom.removeClass(heading, "active-block");

		const input = taskSection.querySelector("input");
		input.value = dom.viewTaskModal.task.getTitle();
		dom.addClass(input, "active-block");

		const confirmButton = taskSection.querySelector(".confirm-edit-button");
		confirmButton.addEventListener("click", () => {
			if (input.value) {
				if (input.classList.contains("invalid")) {
					dom.removeClass(input, "invalid");
					taskSection.querySelector(".error").remove();
				}
				const currTask = dom.viewTaskModal.task;
				currTask.setTitle(input.value);
				dom.addClass(heading, "active-block");
				dom.addClass(dom.editTaskTitleButton, "active-block");
				dom.removeClass(input, "active-block");
				dom.removeClass(confirmButton, "active-block");
				dom.removeClass(cancelButton, "active-block");
				displayController.refreshTaskDetails();
			} else {
				if (!input.classList.contains("invalid")) {
					dom.addClass(input, "invalid");
					const error = document.createElement("h3");
					error.classList.add("error");
					error.textContent = "Please enter a valid title";
					input.parentNode.appendChild(error);
				}
			}
		});

		const cancelButton = taskSection.querySelector(".cancel-edit-button");
		cancelButton.addEventListener("click", () => {
			if (input.classList.contains("invalid")) {
				dom.removeClass(input, "invalid");
				taskSection.querySelector(".error").remove();
			}
			dom.addClass(heading, "active-block");
			dom.addClass(dom.editTaskTitleButton, "active-block");
			dom.removeClass(input, "active-block");
			dom.removeClass(confirmButton, "active-block");
			dom.removeClass(cancelButton, "active-block");
		});

		dom.addClass(confirmButton, "active-block");
		dom.addClass(cancelButton, "active-block");
	});

	dom.editTaskDescButton.addEventListener("click", () => {
		const taskSection = document.querySelector(
			".view-task-modal .task-desc-section"
		);

		dom.removeClass(dom.editTaskDescButton, "active-block");

		const heading = taskSection.querySelector(".task-specific-detail p");
		dom.removeClass(heading, "active-block");

		const textarea = taskSection.querySelector("textarea");
		textarea.textContent = dom.viewTaskModal.task.getDesc();
		dom.addClass(textarea, "active-block");

		const confirmButton = taskSection.querySelector(".confirm-edit-button");
		confirmButton.addEventListener("click", () => {
			const currTask = dom.viewTaskModal.task;
			currTask.setDesc(textarea.value);
			dom.addClass(heading, "active-block");
			dom.addClass(dom.editTaskDescButton, "active-block");
			dom.removeClass(textarea, "active-block");
			dom.removeClass(confirmButton, "active-block");
			dom.removeClass(cancelButton, "active-block");
			displayController.refreshTaskDetails();
		});

		const cancelButton = taskSection.querySelector(".cancel-edit-button");
		cancelButton.addEventListener("click", () => {
			dom.addClass(heading, "active-block");
			dom.addClass(dom.editTaskDescButton, "active-block");
			dom.removeClass(textarea, "active-block");
			dom.removeClass(confirmButton, "active-block");
			dom.removeClass(cancelButton, "active-block");
		});

		dom.addClass(confirmButton, "active-block");
		dom.addClass(cancelButton, "active-block");
	});

	dom.editTaskDueDateButton.addEventListener("click", () => {
		const taskSection = document.querySelector(
			".view-task-modal .task-due-date-section"
		);

		dom.removeClass(dom.editTaskDueDateButton, "active-block");

		const heading = taskSection.querySelector(".task-specific-detail h2");
		dom.removeClass(heading, "active-block");

		const input = taskSection.querySelector(".form-due-date-div");
		dom.addClass(input, "active-flex");

		const confirmButton = taskSection.querySelector(".confirm-edit-button");
		confirmButton.addEventListener("click", () => {
			if (
				!dom.editTaskDueDateInput.value &&
				!dom.editTaskDueDateInput.classList.contains("inactive")
			) {
				const taskDateInput = dom.editTaskDueDateInput;
				taskDateInput.classList.add("invalid");
				if (!document.querySelector(".task-due-date-section .error")) {
					const error = document.createElement("div");
					error.classList.add("error");
					error.textContent = "Please enter a valid date";

					document
						.querySelector(
							".task-due-date-section .form-due-date-div"
						)
						.insertBefore(error, dom.editTaskToggleDueDate);
				}
			} else {
				if (document.querySelector(".form-due-date-div .error")) {
					dom.editTaskDueDateInput.classList.remove("invalid");
					document
						.querySelector(".form-due-date-div .error")
						.remove();
				}

				const taskDueDate = dom.editTaskDueDateInput.value
					? endOfDay(
							new Date(formatDate(dom.editTaskDueDateInput.value))
					  )
					: "";

				dom.viewTaskModal.task.setDueDate(taskDueDate);
				dom.addClass(heading, "active-block");
				dom.addClass(dom.editTaskDueDateButton, "active-block");
				dom.removeClass(input, "active-flex");
				dom.removeClass(confirmButton, "active-block");
				dom.removeClass(cancelButton, "active-block");
				displayController.refreshTaskDetails();
			}
		});

		const cancelButton = taskSection.querySelector(".cancel-edit-button");
		cancelButton.addEventListener("click", () => {
			if (document.querySelector(".form-due-date-div .error")) {
				dom.editTaskDueDateInput.classList.remove("invalid");
				document.querySelector(".form-due-date-div .error").remove();
			}

			dom.addClass(heading, "active-block");
			dom.addClass(dom.editTaskDueDateButton, "active-block");
			dom.removeClass(input, "active-flex");
			dom.removeClass(confirmButton, "active-block");
			dom.removeClass(cancelButton, "active-block");
		});
		dom.addClass(confirmButton, "active-block");
		dom.addClass(cancelButton, "active-block");
	});

	dom.editTaskPriorityButton.addEventListener("click", () => {
		const taskSection = document.querySelector(
			".view-task-modal .task-priority-section"
		);

		dom.removeClass(dom.editTaskPriorityButton, "active-block");

		const heading = taskSection.querySelector(".task-specific-detail h2");
		dom.removeClass(heading, "active-block");

		const input = taskSection.querySelector("select");
		dom.addClass(input, "active-block");

		const confirmButton = taskSection.querySelector(".confirm-edit-button");
		confirmButton.addEventListener("click", () => {
			const currTask = dom.viewTaskModal.task;
			currTask.setPriority(input.value);
			dom.addClass(heading, "active-block");
			dom.addClass(dom.editTaskPriorityButton, "active-block");
			dom.removeClass(input, "active-block");
			dom.removeClass(confirmButton, "active-block");
			dom.removeClass(cancelButton, "active-block");
			displayController.refreshTaskDetails();
		});

		const cancelButton = taskSection.querySelector(".cancel-edit-button");
		cancelButton.addEventListener("click", () => {
			dom.addClass(heading, "active-block");
			dom.addClass(dom.editTaskPriorityButton, "active-block");
			dom.removeClass(input, "active-block");
			dom.removeClass(confirmButton, "active-block");
			dom.removeClass(cancelButton, "active-block");
		});
		dom.addClass(confirmButton, "active-block");
		dom.addClass(cancelButton, "active-block");
	});
};

export default controller();
