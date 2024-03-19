import React, { useEffect,  useRef,  useState } from "react";
import { useDispatch} from "react-redux";
import { setStatus } from "../features/todoSlice";
import { deleteObject,editText } from "../features/todoSlice";
import Edit from "./Edit";

function Task({item}){

    const [check, setCheck] = useState(item.status)
    const [edit, setEdit] = useState(false)

    const setRef = useRef()

    const dispatch = useDispatch();
    useEffect(()=> setCheck(item.status),[item.status])
    const handleOnChange = () => {
        setCheck((lastState)=>{
            dispatch(setStatus({
                id: item.id,
                status: !lastState
            }))
            return !lastState
        })


    }

    const styles = {
        textDecoration: check ? "line-through" : null,
        color: check ? "#b4bab9" : "black"
    }

    function handleDelete(){
        dispatch(deleteObject({
            id: item.id}))
    }

    function handleEdit(){
        setEdit(lastState => {
            if(lastState === true){
                setRef.current.click()
            }
            return !lastState
        })
    }


    return(
        <div className="todo-list--task">
        {edit ? <Edit id={item.id} handleEdit={handleEdit} setRef={setRef}/> : <div className="task-left">
        <input 
        type="checkbox"
        name="checkbox"
        className="task--checkbox"
        checked={check}
        onChange={handleOnChange}
        />
        <p className="task--name" style={styles}>{item.text}</p>
        </div>}
        <div className="task-right">
            <button className="edit" onClick={handleEdit}>{edit ? "Done" : "Edit"}</button>
            <button className="delete-task" onClick={handleDelete }>X</button>
            
        </div>
    </div>
    )
}

export default Task