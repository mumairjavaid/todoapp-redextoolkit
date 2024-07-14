import { createSlice,nanoid } from "@reduxjs/toolkit";

let initialState=[]

export const todo = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addtodo:(state,action) => {    
            const singleTodo = {
                id:nanoid(),
                text:action.payload
            }
            state.push(singleTodo)
        },
        removetodo:(state,action)=> (
            state = state.filter(item => item.id != action.payload )
        ),
        updatetodo: (state, action) => {
            const { id, text } = action.payload;
            state.map(todo => {if(todo.id==id){
                todo.text = text;
            }});

          },
    }
}) 

export const {addtodo,removetodo,updatetodo} = todo.actions 
export default todo.reducer