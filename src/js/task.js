const taskProto = {
	getTitle() {
		return this.title;
	},
	getDesc() {
		return this.desc;
	},
	getDueDate() {
		return this.dueDate;
	},
	getPriority() {
		return this.priority;
	},
	getStatus() {
		return this.isComplete;
	},
	// setters
	setTitle(newTitle) {
		this.title = newTitle;
	},
	setDesc(newDesc) {
		this.desc = newDesc;
	},
	setDueDate(newDueDate) {
		this.dueDate = newDueDate;
	},
	setPriority(newPriority) {
		this.priority = newPriority;
	},
	setStatus(newStatus) {
		this.isComplete = newStatus;
	},
};

const task = (title, desc, dueDate, priority) => {
	//private
	let isComplete = false;
	//public
	// getters

	const task = Object.create(taskProto);
	task.title = title;
	task.desc = desc;
	task.dueDate = dueDate;
	task.priority = priority;
	task.isComplete = isComplete;

	return task;
};

export default task;
