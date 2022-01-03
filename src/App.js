

import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';

const App = () => {

  let textInput = null;
  useEffect(() => {
    textInput.focus();
  })
  const [item, setitem] = useState('');
  const [additems, setadditems] = useState([]);

  const InputEvents = (e) => {
    setitem(e.target.value);
  }

  const addItem = () => {
    setadditems((olddata) => {
      return [...olddata, item]
    })
    setitem('')
  }


  const deleteItem = (id) => {
    setadditems((olddata) => {
      return olddata.filter((arrEle, index) => {
        return index !== id;
      })
    })
  }

 const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      addItem();
    }
  };


  return (
    <div className="main_div">
      <div className='center_div'>
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add a Item" className='check' ref={(text) => { textInput = text; }}
          value={item}
          onChange={InputEvents}
          onKeyDown={onKeyDownHandler}

        />
        <button onClick={addItem}> ADD </button>

        <ol>


          {
            additems.map((value, index) => {
              return <Todo key={index} id={index} text={value} onSelect={deleteItem} />
            })
          }


        </ol>
      </div>
    </div>
  );
}

export default App;
