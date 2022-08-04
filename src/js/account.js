const account = () => {
	let projects = [];
	let currProject;

	const addProject = (project) => {
		projects.push(project);
	};

	const getCurrProject = () => {
		return currProject;
	};

	const setCurrProject = (newProject) => {
		currProject = newProject;
	};

	const getProjects = () => {
		return projects;
	};

	const setProjects = (newProjects) => {
		projects = newProjects;
	};

	const removeProject = (project) => {
		const projectIndex = projects.indexOf(project);
		if (currProject === project) {
			currProject = undefined;
		}
		projects.splice(projectIndex, 1);
	};

	return {
		projects: projects,
		getCurrProject,
		setCurrProject,
		getProjects,
		setProjects,
		addProject,
		removeProject,
	};
};

export default account();
