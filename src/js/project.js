import task from "./task";
import { compareAsc } from "date-fns"

const project = (title) => {
    // private
    let _title = title;
    const _list = [];
    // public
    const getTitle = () => {
        return _title;
    };
    const setTitle = (title) => {
        _title = title;
    };
    const getList = () => {
        return _list;
    };
    const addTask = (task) => {
        _list.push(task)
    };

    const sortTasks = () => {
        _list.sort((taskA, taskB)=>{
            const taskAPriority = taskA.getPriority();
            const taskBPriority = taskB.getPriority();

            if (taskAPriority < taskBPriority) return -1;
            else if (taskAPriority > taskBPriority) return 1;
            else {
                const taskADueDate = taskA.getDueDate();
                const taskBDueDate = taskB.getDueDate();
                console.log(taskADueDate, taskBDueDate)
                if (!taskADueDate && taskBDueDate) return 1;
                else if (!taskBDueDate && taskADueDate) return -1;
                else if (!taskADueDate && !taskBDueDate) return 0;
                else {
                    return compareAsc(taskADueDate, taskBDueDate);
                }
            }
        });
    }

    return {
        getTitle, setTitle,
        getList,
        addTask,
        sortTasks
    };
}

export default project;