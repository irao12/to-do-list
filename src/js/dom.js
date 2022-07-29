const dom = () => {
    const modal = document.querySelector('.modal');
    const addProjectButton = document.querySelector('.add-project');
    const addProjectModal = document.querySelector('.add-project-modal');
    const addProjectForm = document.querySelector('.add-project-form');
    const projectNameFormSection = document.querySelector('.name-section');
    const projectNameInput = document.querySelector('#project-name-input');
    const cancelProjectButton = document.querySelector('.add-project-modal .cancel-button')
    const confirmProjectButton = document.querySelector('.confirm-project-button')

    return {
        addProjectButton, cancelProjectButton, confirmProjectButton,
        modal, addProjectModal, addProjectForm, projectNameInput, projectNameFormSection
    }
}

export default dom();