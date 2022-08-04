import { te } from "date-fns/locale";
import account from "./account";
import project from "./project";
import task from "./task";

const storage = () => {
	const saveAccount = (account) => {
		localStorage.setItem(
			"currProject",
			JSON.stringify(account.getCurrProject())
		);
		localStorage.setItem(
			"projectList",
			JSON.stringify(account.getProjects())
		);
	};

	const loadProjects = (deserializedProjects) => {
		deserializedProjects.forEach((oldProject) => {
			account.addProject(Object.assign(project(), oldProject));
		});
	};

	const loadTasks = (project) => {
		const taskList = project.getList();
		const newTaskList = taskList.map((oldTask) => {
			const result = Object.assign(task(), oldTask);
			if (result.getDueDate())
				result.setDueDate(new Date(result.getDueDate()));
			return result;
		});
		project.setList(newTaskList);
	};

	const loadAccount = (account) => {
		if (localStorage.getItem("projectList") !== null) {
			const deserializedProjects = JSON.parse(
				localStorage.getItem("projectList")
			);
			loadProjects(deserializedProjects);
			account.getProjects().forEach(loadTasks);
		}

		if (localStorage.getItem("currProject") !== "undefined") {
			const currProjString = localStorage.getItem("currProject");
			const projects = account.getProjects();
			projects.forEach((project) => {
				const projectSerialzied = JSON.stringify(project);
				if (projectSerialzied === currProjString) {
					account.setCurrProject(project);
				}
			});
		}
	};

	return {
		saveAccount,
		loadAccount,
	};
};

export default storage();
