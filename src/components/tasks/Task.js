import React, { useState, useEffect } from "react";
import DeleteButton from "../buttons/DeleteButton";
import {
	endOfDay,
	isPast,
	isToday,
	isTomorrow,
	isThisWeek,
	isThisYear,
	format,
} from "date-fns";

/*
each task: {
    title: ...,
    desc: ...,
    dueDate: ...,
    priority: ...,
    isComplete: true/false,
}
*/

export default function Task(props) {
	const { projects, currProject, task, setTarget, setModal } = props;
	const [dateMessageCategory, setDateMessageCategory] = useState("");
	const [dateMessage, setDateMessage] = useState("");

	const getDateMessage = () => {
		if (task.dueDate === "") {
			setDateMessage("");
			return;
		}

		const dueDate = endOfDay(Date.parse(task.dueDate));
		// If the date is in the past, show overdue
		if (isPast(dueDate)) {
			setDateMessageCategory("important");
			setDateMessage("Overdue");
		}
		// if the date is today, show today
		else if (isToday(dueDate)) {
			setDateMessageCategory("important");
			setDateMessage("Today");
		} else if (isTomorrow(dueDate)) {
			setDateMessageCategory("take-note");
			setDateMessage("Tomorrow");
		}
		// if the date is in the current week, show the weekday
		else if (isThisWeek(dueDate)) {
			setDateMessageCategory("take-note");
			setDateMessage(format(dueDate, "EEEE"));
		}

		// if the date is in the current year, show the month and day
		else if (isThisYear(dueDate)) setDateMessage(format(dueDate, "MMM dd"));
		// otherwise, show the full date
		else {
			setDateMessage(format(dueDate, "MMM dd yyyy"));
		}
	};

	const confirmDelete = () => {
		setTarget(projects[currProject].tasks.indexOf(task));
		setModal("delete-task");
	};

	const viewTask = () => {
		setTarget(projects[currProject].tasks.indexOf(task));
		setModal("view-task");
	};

	useEffect(getDateMessage, [task.dueDate]);

	return (
		<div className="task-div">
			<div onClick={viewTask} className="task-details">
				<h2>{task.title}</h2>
				{task.dueDate !== "" && (
					<h3 className={dateMessageCategory}>{dateMessage}</h3>
				)}
			</div>
			<DeleteButton handleClick={confirmDelete} role="task" />
		</div>
	);
}
