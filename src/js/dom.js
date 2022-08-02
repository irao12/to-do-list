const dom = () => {
	const projectToggle = document.querySelector(".project-toggle");
	const projectSection = document.querySelector(".main__projects");
	const projectList = document.querySelector(".project-list");
	const taskList = document.querySelector(".task-list");

	const modal = document.querySelector(".modal");
	const addProjectButton = document.querySelector(".add-project");
	const addProjectModal = document.querySelector(".add-project-modal");
	const addProjectForm = document.querySelector(".add-project-form");

	const projectTitleFormSection = document.querySelector(
		".project-title-section"
	);
	const projectTitleInput = document.querySelector("#project-title-input");
	const cancelProjectButton = document.querySelector(
		".add-project-modal .cancel-button"
	);
	const confirmProjectButton = document.querySelector(
		".confirm-project-button"
	);

	const confirmProjectDeletionModal = document.querySelector(
		".confirm-project-deletion-modal"
	);
	const CPDmodalContent = document.querySelector(
		".confirm-project-deletion-modal .modal-content"
	);
	const delConfirmationMessage = document.querySelector(
		".confirm-project-deletion-modal .del-confirmation-msg"
	);
	const cancelProjectDeletionButton = document.querySelector(
		".confirm-project-deletion-modal .cancel-button"
	);
	const confirmProjectDeletionButton = document.querySelector(
		".confirm-project-deletion-modal .confirm-deletion-button"
	);

	const addTaskModal = document.querySelector(".add-task-modal");
	const addTaskForm = document.querySelector(".add-task-form");

	const taskTitleInput = document.querySelector("#form-task-title");
	const taskTitleFormSection = document.querySelector(".task-title-section");
	const taskDescInput = document.querySelector("#form-task-desc");
	const taskDueDateInput = document.querySelector("#form-due-date");
	const taskDueDateFormSection = document.querySelector(
		".task-due-date-section"
	);
	const taskToggleDueDate = document.querySelector(".due-date-toggle");
	const taskPriorityInput = document.querySelector("#form-priority");
	const cancelTaskButton = document.querySelector(
		".add-task-modal .cancel-button"
	);
	const confirmTaskButton = document.querySelector(".confirm-task-button");

	const confirmTaskDeletionModal = document.querySelector(
		".confirm-task-deletion-modal"
	);
	const CTDmodalContent = document.querySelector(
		".confirm-task-deletion-modal .modal-content"
	);
	const delTaskConfirmationMessage = document.querySelector(
		".confirm-task-deletion-modal .del-confirmation-msg"
	);
	const cancelTaskDeletionButton = document.querySelector(
		".confirm-task-deletion-modal .cancel-button"
	);
	const confirmTaskDeletionButton = document.querySelector(
		".confirm-task-deletion-modal .confirm-deletion-button"
	);

	return {
		projectToggle,
		projectSection,
		projectList,
		taskList,
		addProjectButton,
		cancelProjectButton,
		confirmProjectButton,
		modal,
		addProjectModal,
		addProjectForm,
		projectTitleInput,
		projectTitleFormSection,
		addTaskModal,
		addTaskForm,
		cancelTaskButton,
		confirmTaskButton,
		taskTitleInput,
		taskTitleFormSection,
		taskDescInput,
		taskDueDateInput,
		taskPriorityInput,
		taskDueDateFormSection,
		taskToggleDueDate,
		confirmProjectDeletionModal,
		CPDmodalContent,
		delConfirmationMessage,
		cancelProjectDeletionButton,
		confirmProjectDeletionButton,
		confirmTaskDeletionButton,
		cancelTaskDeletionButton,
		delTaskConfirmationMessage,
		CTDmodalContent,
		confirmTaskDeletionModal,
	};
};

export default dom();
