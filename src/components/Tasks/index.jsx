import React from 'react'

import './Tasks.scss'
import editSvg from '../../assets/img/edit.svg'
const Tasks = () => {
    return (
        <div className="tasks">
            <h2 className="tasks__title">
                123
            <img src={editSvg}/>
            </h2>
           <div className="tasks__items">
                <label className="checkbox">
                    <input id="check" type="checkbox"/>
                    <label htmlFor="check"></label>
                </label>
           </div>
        </div>
    )
}


export default Tasks