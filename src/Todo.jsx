import React from 'react'
import { useState } from 'react/cjs/react.development'

const Todo = (props) => {
  const [line, setline] = useState()

  const cutit = () => {
    setline(!line)
  }
  return (
    <>
      <div className='todo_style'>
        <i className='fa fa-trash'
          onClick={() => {
            props.onSelect(props.id)
          }} />
        <span>
          <input type="checkbox" onClick={cutit} id='cut' />
          <li style={{ textDecoration: line ? "line-through" : line }}> {props.text} </li>

        </span>
      </div>
    </>
  );
}

export default Todo
