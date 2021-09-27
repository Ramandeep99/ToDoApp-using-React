
import React , {useState} from "react";
import ToDoList from "./ToDoList";



const App = () =>{

  const [inputItem, setstate] = useState("");
  const [items , setItems] = useState([]);

  const inputFun = (e) =>{
    setstate(e.target.value)
  };

  const inputSubmitFun = () =>{
    
    setItems((olditems) =>{
      // console.log(olditems)
      // console.log(inputItem)
      return [...olditems , inputItem]
    })
    setstate("")
  }

  const deleteItem = (id) =>{
    // console.log('deleted')
    setItems((olditems) => {
      return olditems.filter((arrEle , idx) =>{
        return idx !== id;
      })
    })
  }

  return(

    <>

    <div className='mainDiv'>
      <div className='centreDiv'>

        <br />
        <h1> TO DO LIST  </h1>
        <br />

        <input type='text' placeholder='Add an item' onChange={inputFun} value={inputItem} />
        <button className='btn' onClick={inputSubmitFun}> + </button>      

        <ol>
          {items.map((itemVal , index) =>{
             return <ToDoList  val = {itemVal} key={index} id={index} onSelect={deleteItem} />
            })}
        </ol>  
      </div>
    </div>

    </>
  )
}




export default App;









// incre - decre  ==========================================

// import React, { useState } from 'react'

// const App = () => {

//   const [state, setstate] = useState(0);

//   const incrFun = () => {

//     setstate(state + 1);
//   }

//   const decFun = () => {
//     let count = state;
//     if (count === 0) {
//       alert('Limit Reached, You can not decrease value below zero.')
//     }
//     else {
//       setstate(state - 1);
//     }
//   }

//   return (
//     <>
//       <div className='mainDiv'>
//         <div className='card'>
//           <h1 className='result'> {state} </h1>
//           <button className='btn' onClick={incrFun} >INC</button>
//           <button className='btn' onClick={decFun} > DEC </button>
//         </div>
//       </div>
//     </>
//   )
// }


// export default App;