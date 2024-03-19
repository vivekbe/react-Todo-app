import React, { useState, useRef, useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import Task from "./Task";
import { reset } from "../features/todoSlice";
function TodoList(){


    const list = useSelector((state) => state.todo.todo)
    const dispatch = useDispatch()
    const todoRef = useRef(null)

    useEffect(() => {       
            todoRef.current.scrollTop = todoRef.current.scrollHeight
    },[list])

    const todoList = list.map(item => {
        return (
            <Task item={item}/>
        )
    })


    const handleClear = () => {
        dispatch(reset())
    }

    return(
        <section className="todo-card">
            <div className="todo-list--wrapper">
              <div className="todo-list" ref={todoRef}>
                {todoList.length ?  (todoList) : <h1 className="no-todo">No Todos</h1>}
              </div>
            {todoList.length ? <button 
                className="add-task--button reset"
                onClick={handleClear}
                >Clear All</button> : null}
            </div>
        </section>
    )
}

export default TodoList