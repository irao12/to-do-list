import dom from "./dom.js";
import account from "./account.js";
import {
	format,
	isPast,
	isToday,
	isTomorrow,
	isThisWeek,
	isThisYear,
} from "date-fns";
import project from "./project.js";
import { el } from "date-fns/locale";
import storage from "./storage.js";

const displayController = () => {
	// methods
	const addActive = (element) => {
		element.classList.add("active");
	};
	const removeActive = (element) => {
		element.classList.remove("active");
	};
	const displayModal = () => {
		addActive(dom.modal);
	};
	const removeModal = () => {
		removeActive(dom.modal);
	};

	const displayProject = (project) => {
		const projectList = dom.projectList;
		const projectDiv = document.createElement("div");
		projectDiv.project = project;
		projectDiv.classList.add("project-div");

		const projectTitleSection = document.createElement("div");
		projectTitleSection.classList.add("project-title-section");
		const projectTitle = document.createElement("h2");
		projectTitle.textContent = project.getTitle();

		projectTitleSection.appendChild(projectTitle);

		projectDiv.appendChild(projectTitleSection);

		projectTitleSection.addEventListener("click", () => {
			account.setCurrProject(project);
			storage.saveAccount(account);
			refreshTasks();
			const projectSection = dom.projectSection;
			if (projectSection.classList.contains("open"))
				projectSection.classList.remove("open");
			dom.projectToggle.classList.remove("open");
		});

		//add a div for the delete button
		const deleteButton = document.createElement("div");
		deleteButton.classList.add("delete-project-button");
		deleteButton.innerHTML =
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';
		deleteButton.addEventListener("click", () => {
			displayConfirmProjectDeletion(projectDiv);
		});
		projectDiv.appendChild(deleteButton);

		projectList.appendChild(projectDiv);
	};

	const refreshProjects = () => {
		const projects = account.getProjects();
		const projectList = dom.projectList;
		projectList.innerHTML = "";
		projects.forEach(displayProject);
	};

	const removeProject = (confirmButton) => {
		account.removeProject(confirmButton.target.projectDiv.project);
		refreshProjects();
		refreshTasks();
		storage.saveAccount(account);
		removeConfirmProjectDeletion();
	};

	const displayConfirmProjectDeletion = (projectDiv) => {
		displayModal();
		const projectDeletionModal = dom.confirmProjectDeletionModal;
		addActive(projectDeletionModal);
		const message = dom.delConfirmationMessage;

		// edit the message to say the project name
		message.textContent = `Are you sure you want to delete the project "${projectDiv.project.getTitle()}"`;
		const confirmButton = dom.confirmProjectDeletionButton;

		//save the projectDiv in the button
		confirmButton.projectDiv = projectDiv;

		// remove any previous event listeners so multiple projects do not get deleted
		confirmButton.removeEventListener("click", removeProject);
		confirmButton.addEventListener("click", removeProject);
	};

	const removeConfirmProjectDeletion = () => {
		removeModal();
		removeActive(dom.confirmProjectDeletionModal);
	};

	const displayAddProject = () => {
		displayModal();
		addActive(dom.addProjectModal);
	};

	const removeAddProject = () => {
		removeModal();
		dom.addProjectForm.reset();
		removeActive(dom.addProjectModal);
		if (document.querySelector(".error")) {
			dom.projectTitleInput.classList.remove("invalid");
			document.querySelector(".error").remove();
		}
	};

	const displayProjectTitleError = () => {
		const projectTitleInput = dom.projectTitleInput;
		projectTitleInput.classList.add("invalid");
		if (!document.querySelector(".error")) {
			const error = document.createElement("div");
			error.classList.add("error");
			error.textContent = "Please enter a title";
			dom.projectTitleFormSection.appendChild(error);
		}
	};

	const displayTask = (task) => {
		const taskList = dom.taskList;
		const newTask = document.createElement("div");
		newTask.classList.add("task-div");
		const taskTitle = document.createElement("h2");
		taskTitle.textContent = task.getTitle();

		const details = document.createElement("div");
		details.classList.add("task-details");

		details.appendChild(taskTitle);

		if (task.getDueDate()) {
			const taskDueDate = task.getDueDate();
			let taskDueDateText;

			const dueDate = document.createElement("h3");
			// If the date is in the past, show overdue
			if (isPast(taskDueDate)) {
				taskDueDateText = "Overdue";
				dueDate.classList.add("important");
			}
			// if the date is today, show today
			else if (isToday(taskDueDate)) {
				taskDueDateText = "Today";
				dueDate.classList.add("important");
			} else if (isTomorrow(taskDueDate)) {
				taskDueDateText = "Tomorrow";
				dueDate.classList.add("take-note");
			}
			// if the date is in the current week, show the weekday
			else if (isThisWeek(taskDueDate)) {
				taskDueDateText = format(task.getDueDate(), "EEEE");
				dueDate.classList.add("take-note");
			}

			// if the date is in the current year, show the month and day
			else if (isThisYear(taskDueDate))
				taskDueDateText = format(task.getDueDate(), "MMM dd");
			// otherwise, show the full date
			else {
				taskDueDateText = format(task.getDueDate(), "MMM dd yyyy");
			}

			dueDate.textContent = taskDueDateText;
			details.appendChild(dueDate);
		}

		details.addEventListener("click", () => {
			displayViewTaskModal(task);
		});

		//add a div for the delete button
		const deleteButton = document.createElement("div");
		deleteButton.classList.add("delete-task-button");
		deleteButton.innerHTML =
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>';

		newTask.task = task;

		deleteButton.addEventListener("click", () => {
			displayConfirmTaskDeletion(newTask);
		});

		newTask.appendChild(details);
		newTask.appendChild(deleteButton);
		taskList.appendChild(newTask);
	};

	const refreshTasks = () => {
		const currProject = account.getCurrProject();
		const taskList = dom.taskList;
		taskList.textContent = "";

		if (currProject) {
			const currtaskList = currProject.getList();
			currtaskList.forEach(displayTask);

			const addNewTask = document.createElement("div");
			addNewTask.classList.add("add-new-task");

			const addTaskText = document.createElement("h2");
			addTaskText.textContent = "Add task";
			addTaskText.classList.add("add-task-text");
			const addTaskButton = document.createElement("div");
			addTaskButton.classList.add("add-task-button");
			addTaskButton.textContent = "+";

			addNewTask.appendChild(addTaskButton);
			addNewTask.appendChild(addTaskText);
			addNewTask.addEventListener("click", displayAddTask);
			taskList.appendChild(addNewTask);
		}
	};

	const displayTaskTitleError = () => {
		const taskTitleInput = dom.taskTitleInput;
		taskTitleInput.classList.add("invalid");
		if (!document.querySelector(".task-title-section .error")) {
			const error = document.createElement("div");
			error.classList.add("error");
			error.textContent = "Please enter a title";
			dom.taskTitleFormSection.appendChild(error);
		}
	};

	const removeTaskTitleError = () => {
		if (document.querySelector(".task-title-section .error")) {
			dom.taskTitleInput.classList.remove("invalid");
			document.querySelector(".task-title-section .error").remove();
		}
	};

	const displayTaskDateError = () => {
		const taskDateInput = dom.taskDueDateInput;
		taskDateInput.classList.add("invalid");
		if (!document.querySelector(".task-due-date-section .error")) {
			const error = document.createElement("div");
			error.classList.add("error");
			error.textContent = "Please enter a valid date";

			dom.taskDueDateFormSection.insertBefore(
				error,
				dom.taskToggleDueDate
			);
		}
	};

	const removeTaskDateError = () => {
		if (document.querySelector(".task-due-date-section .error")) {
			dom.taskDueDateInput.classList.remove("invalid");
			document.querySelector(".task-due-date-section .error").remove();
		}
	};

	const displayAddTask = () => {
		displayModal();
		dom.addTaskModal.classList.add("active");
	};

	const removeAddTask = () => {
		removeModal();
		dom.addTaskForm.reset();
		dom.addTaskModal.classList.remove("active");

		removeTaskTitleError();
		removeTaskDateError();

		dom.taskToggleDueDate.textContent = "Remove Due Date";
		dom.taskDueDateInput.classList.remove("inactive");
	};

	const removeTask = (confirmButton) => {
		account.getCurrProject().removeTask(confirmButton.target.task);
		refreshTasks();
		storage.saveAccount(account);
		removeConfirmTaskDeletion();
	};

	const displayConfirmTaskDeletion = (taskDiv) => {
		displayModal();
		const taskDeletionModal = dom.confirmTaskDeletionModal;
		addActive(taskDeletionModal);
		const message = dom.delTaskConfirmationMessage;

		// edit the message to say the project name
		message.textContent = `Are you sure you want to delete the task "${taskDiv.task.getTitle()}"`;
		const confirmButton = dom.confirmTaskDeletionButton;

		//save the projectDiv in the button
		confirmButton.task = taskDiv.task;

		// remove any previous event listeners so multiple projects do not get deleted
		confirmButton.removeEventListener("click", removeTask);
		confirmButton.addEventListener("click", removeTask);
	};

	const removeConfirmTaskDeletion = () => {
		removeModal();
		removeActive(dom.confirmTaskDeletionModal);
	};

	const refreshTaskDetails = () => {
		const task = dom.viewTaskModal.task;
		dom.viewTaskTitleHeading.textContent = task.getTitle();
		dom.viewTaskDescHeading.textContent = task.getDesc();
		dom.viewTaskDueDateHeading.textContent = task.getDueDate()
			? format(task.getDueDate(), "MMM dd yyyy")
			: "No Due Date";
		dom.viewTaskPriorityHeading.textContent =
			task.getPriority() == 0
				? "Low"
				: task.getPriority() == 1
				? "Medium"
				: "High";
	};

	const displayViewTaskModal = (task) => {
		displayModal();
		addActive(dom.viewTaskModal);
		dom.viewTaskModal.task = task;
		refreshTaskDetails(task);
	};

	const removeViewTaskModal = () => {
		removeModal();
		removeActive(dom.viewTaskModal);
		const editTaskButtons = document.querySelectorAll(".edit-task-button");
		editTaskButtons.forEach((button) => {
			dom.addClass(button, "active-block");
		});

		const confirmEditButtons = document.querySelectorAll(
			".confirm-edit-button"
		);
		confirmEditButtons.forEach((button) => {
			dom.removeClass(button, "active-block");
		});

		const cancelEditButtons = document.querySelectorAll(
			".cancel-edit-button"
		);
		cancelEditButtons.forEach((button) => {
			dom.removeClass(button, "active-block");
		});

		// reset the title
		const titleText = document.querySelector(
			".task-title-section .task-specific-detail h2"
		);
		if (!titleText.classList.contains("active-block")) {
			dom.addClass(titleText, "active-block");
			const input = document.querySelector("#edit-task-title");
			if (input.classList.contains("invalid")) {
				dom.removeClass(input, "invalid");
				document.querySelector(".task-title-section .error").remove();
			}
			dom.removeClass(input, "active-block");
		}

		// reset the description
		const descText = document.querySelector(".task-specific-detail p");
		if (!descText.classList.contains("active-block")) {
			dom.addClass(descText, "active-block");
			const textarea = document.querySelector(
				".view-task-modal .task-desc-section textarea"
			);
			dom.removeClass(textarea, "active-block");
		}

		// reset the due date
		const dueDateText = document.querySelector(
			".task-due-date-section .task-specific-detail h2"
		);
		if (!dueDateText.classList.contains("active-block")) {
			dom.addClass(dueDateText, "active-block");
			const input = document.querySelector(
				".task-specific-detail .form-due-date-div"
			);
			dom.removeClass(input.querySelector("input"), "invalid");
			dom.removeClass(input.querySelector("input"), "inactive");
			input.querySelector("button").textContent = "Remove Due Date";
			if (document.querySelector(".error"))
				document.querySelector(".error").remove();
			dom.removeClass(input, "active-flex");
		}

		// reset the priority
		const priorityText = document.querySelector(
			".task-priority-section .task-specific-detail h2"
		);
		if (!priorityText.classList.contains("active-block")) {
			dom.addClass(priorityText, "active-block");
			const input = document.querySelector("#view-form-priority");
			dom.removeClass(input, "active-block");
		}

		// sort the tasks after any changes and refresh the tasks
		account.getCurrProject().sortTasks();
		refreshTasks();
	};

	return {
		addActive,
		removeActive,
		refreshProjects,
		refreshTasks,
		displayAddProject,
		removeAddProject,
		displayProjectTitleError,
		displayAddTask,
		removeAddTask,
		displayTaskTitleError,
		displayTaskDateError,
		removeTaskDateError,
		removeTaskTitleError,
		removeConfirmProjectDeletion,
		removeConfirmTaskDeletion,
		removeViewTaskModal,
		refreshTaskDetails,
	};
};

export default displayController();
