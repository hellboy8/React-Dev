
import './App.css'
import  AddTodo  from './features/Todo/todoSlice'
import Todos from './components/Todos'
import { Provider } from 'react-redux'

function App() {
  

  return (
    <>
     <h1>Learn about redux toolkit</h1>
     <AddTodo />
     <Todos />

    </>
  )
}

export default App
