import React from 'react'
import './styles/App.css'
import './styles/Todo.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskProvider from './context/TaskProvider'

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <TaskProvider>
        <TaskForm />
        <TaskList />
      </TaskProvider>
    </div>
  )
}

export default App
