
import { useState } from 'react';
import './App.css';
import Todo from './Todo';

const App =()=> {

  const[item, setitem]=useState('');
  const[additems,setadditems]=useState([]);
  const InputEvents=(e)=>{
    setitem(e.target.value);
  }

  const addItem=()=>{
    setadditems((olddata)=>{
return[...olddata,item]
    })
    setitem('')
  }


  const deleteItem = (id)=>{
    setadditems((olddata)=>{
      return olddata.filter((arrEle,index)=>{
        return index !==id;
      })
    })
  }
  return (
    <div className="main_div">
     <div className='center_div'>
       <br/>
       <h1>ToDo List</h1>
       <br/>
       <input type="text" placeholder="Add a Item"
       value={item}
        onChange={InputEvents}
       />
       <button onClick={addItem}> + </button>

       <ol>
         

{
  additems.map((value,index)=>{
  return<Todo key={index} id={index} text={value} onSelect={deleteItem}/>
  })
}
        
       </ol>
     </div>
    </div>
  );
}

export default App;
