import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoStore } from './api/TodoStore'
import Form from './component/Form'
import DisplayTodo from './component/DisplayTodo'

function App() {
  return(
    <TodoStore>
      <Form></Form>
      <DisplayTodo></DisplayTodo>
    </TodoStore>
  )
}

export default App
