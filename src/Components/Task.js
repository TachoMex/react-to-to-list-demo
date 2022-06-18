import { React, useState } from 'react';

const Task = (props) => {
    const [checked, setChecked] = useState(props.checked)

    const toggleHandler = (event) => {
        setChecked(prevState => { return !prevState })
    }

    const style = checked ? "list-group-item list-group-item-light" : "list-group-item";


    return (
        <label className={style}>
            <input className="form-check-input me-1" type="checkbox" checked={checked} onChange={ toggleHandler }/>
            { props.name }
        </label>
    )
}

export default Task;
