import React from "react";
import AddTask from "./AddTask";
import TodoList from "./TodoList";

function Main(){
    return(
        <main className="main">
            <AddTask />
            <TodoList />
        </main>
    )
}

export default Main