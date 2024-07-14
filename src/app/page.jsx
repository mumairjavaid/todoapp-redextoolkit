"use client"

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addtodo, removetodo, updatetodo} from "./features/todo"

const page = () => {

  const [todoText, setTodoText] = useState('');
  const items = useSelector(state => state)
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(addtodo(todoText))
    setTodoText("");
  }
  const handleUpdateTodo = (id) => {
    const updatedText = prompt('Enter the new text for the todo:');
    dispatch(updatetodo({id,text:updatedText}));
  }


  return (
    <div className='bg-gray-300 h-screen w-full'>
    <div className="container pt-10 mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-12">Todo App</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="flex-grow p-2 border rounded-lg"
          placeholder="Add a new todo"
        />
        <button onClick={addTodo} className="ml-2 p-2 w-20 bg-cyan-500 text-white rounded-lg">
          Add
        </button>
      </div>
      <div className='mt-10'>
      {items.map(todo => (
        <div className='flex flex-col gap-5'>
        <div key={todo.id} className="flex items-center justify-between p-3 bg-gray-200 shadow-md rounded-lg my-2">
          <p className='text-base'>{todo.text}</p>
          <div className='flex gap-4'>
          <button onClick={()=>handleUpdateTodo(todo.id)} className="bg-cyan-500 p-2 text-white rounded-lg">
            Update
          </button>
          <button onClick={() => dispatch(removetodo(todo.id))} className="bg-red-500 p-2 text-white rounded-lg">
            Delete
          </button>
          </div>
        </div>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default page