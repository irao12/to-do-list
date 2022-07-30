const dom = () => {
    const projectList = document.querySelector('.project-list');
    const taskList = document.querySelector('.task-list');

    const modal = document.querySelector('.modal');
    const addProjectButton = document.querySelector('.add-project');
    const addProjectModal = document.querySelector('.add-project-modal');
    const addProjectForm = document.querySelector('.add-project-form');

    const projectNameFormSection = document.querySelector('.name-section');
    const projectNameInput = document.querySelector('#project-name-input');
    const cancelProjectButton = document.querySelector('.add-project-modal .cancel-button');
    const confirmProjectButton = document.querySelector('.confirm-project-button');

    const addTaskModal = document.querySelector('.add-task-modal');
    const addTaskForm = document.querySelector('.add-task-form');

    const cancelTaskButton = document.querySelector('.add-task-modal .cancel-button');
    const confirmTaskButton = document.querySelector('.confirm-task-button');

    return {
        projectList, taskList,
        addProjectButton, cancelProjectButton, confirmProjectButton,
        modal, addProjectModal, addProjectForm, projectNameInput, projectNameFormSection,
        addTaskModal, addTaskForm,
        cancelTaskButton, confirmTaskButton
    }
}

export default dom();