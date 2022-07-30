const account = () => {
    const _myProjects = [];
    let _currProject;

    const addProject = (project) => {
        _myProjects.push(project);
    }

    const getCurrProject = () =>{
        return _currProject;
    }

    const setCurrProject = (newProject) => {
        _currProject = newProject;
    }
    
    return {
        getCurrProject, setCurrProject, addProject, _myProjects
    }
}

export default account();