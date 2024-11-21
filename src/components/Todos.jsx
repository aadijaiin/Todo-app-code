import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/slices/todoSlice'
import '../index.css'

const Todos = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-purple-400 mb-4 text-center">
        Todos
      </h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-800 text-gray-200 p-4 rounded-lg shadow-md"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="ml-4 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
