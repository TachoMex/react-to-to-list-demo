import { React, useState } from 'react';

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

const Task = (props) => {
    const [checked, setChecked] = useState(props.checked)

    const toggleHandler = (event) => {
        setChecked(prevState => { return !prevState })
    }

    const style = checked ? "list-group-item list-group-item-light" : "list-group-item";


    return (
        <label className={style}>
            <input className="form-check-input me-1" type="checkbox" checked={checked} onChange={ toggleHandler }/>
            <Latex>
                { props.name }
            </Latex>
        </label>
    )
}

export default Task;
