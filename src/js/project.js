import task from "./task";
import { compareAsc } from "date-fns";

let projectProto = {
	getTitle() {
		return this.title;
	},
	setTitle(title) {
		this.title = title;
	},
	getList() {
		return this.list;
	},
	setList(newList) {
		this.list = newList;
	},
	addTask(task) {
		this.list.push(task);
	},
	removeTask(task) {
		const taskIndex = this.list.indexOf(task);
		this.list.splice(taskIndex, 1);
	},
	sortTasks() {
		this.list.sort((taskA, taskB) => {
			const taskAPriority = taskA.getPriority();
			const taskBPriority = taskB.getPriority();

			if (taskAPriority > taskBPriority) return -1;
			else if (taskAPriority < taskBPriority) return 1;
			else {
				// if priorities are equal, sort based on the due date
				const taskADueDate = taskA.getDueDate();
				const taskBDueDate = taskB.getDueDate();

				// tasks with no due dates should be at the end
				if (!taskADueDate && taskBDueDate) return 1;
				else if (!taskBDueDate && taskADueDate) return -1;
				else if (!taskADueDate && !taskBDueDate) return 0;
				else {
					// if both dates are valid, the earlier one is first
					return compareAsc(taskADueDate, taskBDueDate);
				}
			}
		});
	},
};

const project = (titleInput) => {
	// private
	let list = [];
	let title = titleInput;
	// public
	const project = Object.create(projectProto);
	project.list = list;
	project.title = title;
	return project;
};

export default project;
