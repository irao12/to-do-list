const project = (name) => {
    // private
    let _name = name;
    const _list = [];
    // public
    const getName = () => {
        return _name;
    };
    const setName = (name) => {
        _name = name;
    };
    const getList = () => {
        return _list;
    };
    const addTask = (task) => {
        _list.push(task)
    };

    return {
        getName, setName,
        getList,
        addTask
    };
}

export default project;