import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todo : JSON.parse(localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [],
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo : (state,action) => {
            state.todo.push({
                id: nanoid(),
                text : action.payload,
                status : false,
            })
            localStorage.setItem('todo',JSON.stringify(state.todo))
        },
        setStatus : (state,action) => {
            const obj = state.todo.find(obj => obj.id === action.payload.id)
            obj.status = action.payload.status
            localStorage.setItem('todo',JSON.stringify(state.todo))
        },
        deleteObject : (state,action) => {
            const newArray = state.todo.filter(obj => obj.id !== action.payload.id)
            state.todo = newArray
            localStorage.setItem('todo',JSON.stringify(state.todo))
        },
        editText: (state,action) => {
            const obj = state.todo.find(obj=> obj.id === action.payload.id)
            obj.text = action.payload.text;
            localStorage.setItem('todo',JSON.stringify(state.todo))
        },
        reset: (state) => {
            state.todo = []
            localStorage.clear()
        }
    }
})

export default todoSlice.reducer
export const { addTodo, setStatus, deleteObject, editText, reset } = todoSlice.actions