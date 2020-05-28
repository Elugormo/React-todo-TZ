import React from 'react'
import './List.scss'
import classNames from 'classnames'
import Badge from '../Badge'
import remove from '../../assets/img/remove.svg'
const List = ({ items, isRemovable, onClick, onRemove }) => { 

    const removeList = item => { 
        if(window.confirm('Are you sure you want to delete this item?')) { 
            onRemove(item);
        }
    }


    return ( 
        <ul className="list" onClick={onClick}>
            {items.map((item, id) => ( 
                <li key={id} className={classNames(item.className, {'active' : item.active})}>
                    <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
                    <span>{item.name}</span>
                    {isRemovable && <img className="list__remove-icon" src={remove} alt="Remove" onClick={onRemove} />}
                </li>
            ))}
        </ul>
    )
}

export default List