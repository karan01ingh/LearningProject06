import { createSlice,nanoid} from "@reduxjs/toolkit";
const initialState={
    todos:[{
        id:nanoid(),
        text:"hello Karan"
    }]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id: nanoid(),
                text:action.payload
            }
        state.todos.push(todo)

    },
    removeTodo:(state,action)=>{
        state.todos=state.todos.filter((todos)=>{
            todos.id!==action.payload
        })
    },
    updateTodo:(state,action)=>{
        const index=state.todos.indexOf(todos=>
            todos.id===payload.action.id
        )
        state.todos[index].text=payload.action.text
    }
}

})
export const {updateTodo,removeTodo,addTodo}=todoSlice.actions
export default todoSlice.reducer