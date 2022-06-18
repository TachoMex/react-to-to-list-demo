import Task from './Task'
import Container from '../UI/Container'
import NewTaskForm from './NewTaskForm'
import { React, useState } from 'react'

const ToDoList = () => {
    const [tasks, setTodoList] = useState([]);

    const newTaskHandler = (newTask) => {
        setTodoList(prevTasks => { return [...tasks, newTask] })
    }

    return (
        <Container>
            <div className="list-group">
                { tasks.map( (task) => { return (<Task name={task.name} key={task.id}/>) }) }
            </div>
            <NewTaskForm newTaskHandler={newTaskHandler}/>
        </Container>
        
    )
}

export default ToDoList;