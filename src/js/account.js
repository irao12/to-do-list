const account = () => {
    const _myProjects = [];
    let _currProject;

    const addProject = (project) => {_myProjects.push(project);}

    const getCurrProject = () =>{return _currProject;}

    const setCurrProject = (newProject) => {_currProject = newProject;}

    const removeProject = (project) => {
        const projectIndex = _myProjects.indexOf(project);
        if (_currProject === project) {
            _currProject = undefined;
        }
        _myProjects.splice(projectIndex, 1);
    }
    
    return {
        getCurrProject, setCurrProject, addProject, removeProject, _myProjects
    }
}

export default account();