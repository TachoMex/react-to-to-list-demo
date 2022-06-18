import { React, useState } from "react";
import FontAwesomeIcon from "react-fontawesome";

const NewTaskForm = (props) => {
    const [newTask, setTaskForm] = useState('');

    const inputHandler = (event) => {
        setTaskForm(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        let task = { name: newTask, id: Math.random().toString() }
        props.newTaskHandler(task)
        setTaskForm('')
    }

    return (
        <form onSubmit={submitHandler} className="form-inline" >
            <div className="input-group mb-3">
            <input type='text' value={newTask} onChange={inputHandler} className="form-control" placeholder="Jot something you must do" aria-label="New Task" aria-describedby="basic-addon2" />
                <button type="submit" className="btn btn-primary">
                     <FontAwesomeIcon name="plus" />
                </button>
            </div>
        </form>
    )
}
export default NewTaskForm;