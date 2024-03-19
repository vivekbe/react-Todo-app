import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editText } from "../features/todoSlice";
function Edit(props){
    const todo = useSelector((state) => state.todo.todo.find(obj => obj.id === props.id))
    console.log(todo)
    const [editedText , setEditedText] = useState(todo.text)
    const dispatch = useDispatch();
    const [err,setErr] = useState(false)

    const handleChange = (e) => {
        if(e.target.value === ""){
            setErr(true)
        }
        else{
            setErr(false)
        }
        setEditedText(e.target.value)        
    }

    const logic = () => {
        dispatch(editText({
            id: props.id,
            text: editedText
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(err === false && editedText.length <= 150){
            logic()
        }
        props.handleEdit()
    }   

    return(
        <form className="edit-form" onSubmit={handleSubmit}>
            <input  
            type="text" 
            max="editText"
            value={editedText}
            onChange={handleChange}
            className="edit-text"
            placeholder={err ? "Edited Text Can't Be Empty" : null}
            />
            <button  type="submit" ref={props.setRef} style={{ display: 'none' }} />
        </form>

    )
}

export default Edit