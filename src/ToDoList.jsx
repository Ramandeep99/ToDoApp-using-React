import React from "react";


const ToDoList = (props) => {

    return (
        <>
            <div className='todoStyle'>
                <button 
                className='btn_del' 
                onClick={() =>
                    props.onSelect(props.id)
                } >  x 
                </button>
                <li> {props.val}</li>;
            </div>
        </>
    )
}

export default ToDoList;