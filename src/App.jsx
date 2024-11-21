import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { addTodo } from './features/slices/todoSlice'
import Todos from './components/Todos'
// import './index.css'

function App() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <div className="app-container flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-500">Todo App</h1>
      <label className="text-lg mb-2">Enter todo:</label>
      <div className="flex w-full max-w-md gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter here"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={handleKeyDown} // Listen for keydown event
          className="flex-1 px-4 py-2 bg-gray-800 text-gray-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleAddTodo}
          className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
        >
          Add
        </button>
      </div>

      <Todos />
    </div>
  )
}

export default App
