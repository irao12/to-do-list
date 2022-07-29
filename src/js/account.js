const account = () => {
    const _myProjects = [];
    const addProject = (project) => {
        _myProjects.push(project);
    }
    return {
        addProject, _myProjects
    }
}

export default account();