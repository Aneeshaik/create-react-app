import { useState } from "react";
import Tasklist from "./Tasklist";

const Todotask = () => {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const changeHandler = (e) => {
        setTask(e.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        setTaskList([...taskList, task]);
        setTask('')
    }
    const deleteHandler = (indexValue) => {
        const filteredTodo = taskList.filter((todo, index) => (index !== indexValue))
        setTaskList(filteredTodo);
    }
    return (
        <div>
            {console.log("rendered")}
            <form onSubmit={submitHandler}>
                <input  type="text" name="task" onChange={changeHandler} value={task}/> &nbsp;
                <button type="submit">Add</button>
            </form>
            <Tasklist lists={taskList}  deleteHandler={deleteHandler}/>
        </div>
    )
}

export default Todotask;