import React, { useState } from 'react'
import List from '../List'

import closeSVG from '../../assets/img/close.svg'
import './AddButtonList.scss'
import Badge from '../Badge'

const AddButtonList = ({ colors, onAdd }) => { 
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);
    const [inputValue, setInputValue] = useState('');

  
    const onCloseHandler = () => { 
      setVisiblePopup(false);
      setInputValue('');
      setSelectedColor(colors[0].id);
    }

    const addList = () => { 
      if(!inputValue) { 
        alert("Enter name of the list");
        return;
      }
      const color = colors.filter(c => c.id === selectedColor)[0].name;
      onAdd({id: Math.random(), name: inputValue, color})
      onCloseHandler(); 
    }
    return (
        <div className="add-list">
        <List 
        onClick={() => setVisiblePopup(!visiblePopup)}
        items={[
          {
            className: "list__add-button",
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "Add list",
          },
        ]}
        
      /> 
      {visiblePopup && <div className="add-list__popup">
        <img onClick={onCloseHandler} src={closeSVG} alt="close" className="add-list__popup-close-btn"/>
        <input onChange={e => setInputValue(e.target.value)} type="text" placeholder="List name" className="field"/>
        <div className="add-list__popup-colors">
          {colors.map(color => ( 
            <Badge onClick={() => setSelectedColor(color.id)} key={color.id} color={color.name} className={selectedColor === color.id && 'active' }/>
          ))}
        </div>
        <button className="button" onClick={addList}>Add</button>
      </div> }
      </div>
    )
}

export default AddButtonList