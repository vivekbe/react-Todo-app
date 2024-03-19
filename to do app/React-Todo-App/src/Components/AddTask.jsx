import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTask(){
    const [values, setValues] =  useState({
        taskField : ""
    })

    const dispatch = useDispatch()

    const handleChange = (e) => setValues( () => {
        const name = e.target.name
        return (
            {
                [name] : e.target.value
            }
        )
    }
    )

    const submitHandler = (e) => {

        e.preventDefault()  
        if(values.taskField){
            if(values.taskField.length <= 150){
                dispatch(addTodo(values.taskField))
            }
            else{
                alert("Can't Add Max Length is 150")
            }
        }
        setValues(() => {
            return({
                taskField: ""
            })
        })
    }

    return(
        <div className="add-task">
            <form id = "todoForm" className="add-task--form" onSubmit={submitHandler}>
                <input  
                name = "taskField"
                type = "text"
                className="add-task--input"
                onChange={handleChange}
                value={values.taskField}
                placeholder = "Add New Task"
                />
            </form>
            <button form = "todoForm" type="submit" className="add-task--button">Add Task</button>
        </div>
    )
}

export default AddTask