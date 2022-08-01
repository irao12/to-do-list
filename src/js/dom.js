const dom = () => {
    const projectList = document.querySelector('.project-list');
    const taskList = document.querySelector('.task-list');

    const modal = document.querySelector('.modal');
    const addProjectButton = document.querySelector('.add-project');
    const addProjectModal = document.querySelector('.add-project-modal');
    const addProjectForm = document.querySelector('.add-project-form');

    const projectTitleFormSection = document.querySelector('.project-title-section');
    const projectTitleInput = document.querySelector('#project-title-input');
    const cancelProjectButton = document.querySelector('.add-project-modal .cancel-button');
    const confirmProjectButton = document.querySelector('.confirm-project-button');

    const addTaskModal = document.querySelector('.add-task-modal');
    const addTaskForm = document.querySelector('.add-task-form');

    const taskTitleInput = document.querySelector('#form-task-title')
    const taskTitleFormSection = document.querySelector('.task-title-section')
    const cancelTaskButton = document.querySelector('.add-task-modal .cancel-button');
    const confirmTaskButton = document.querySelector('.confirm-task-button');

    return {
        projectList, taskList,
        addProjectButton, cancelProjectButton, confirmProjectButton,
        modal, addProjectModal, addProjectForm, projectTitleInput, projectTitleFormSection,
        addTaskModal, addTaskForm,
        cancelTaskButton, confirmTaskButton, taskTitleInput, taskTitleFormSection
    }
}

export default dom();