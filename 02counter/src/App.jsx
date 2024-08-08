import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter] = useState(15)

const addValue = () => {
  setCounter(prevCount => {
    if (prevCount < 20) {
      return prevCount +1;
    } else {
      return prevCount;
    }
  })
}

const dec_Value = () => {
  setCounter(prevCount => {
    if (prevCount > 0) {
      return prevCount - 1;
    } else {
      return prevCount;
    }  
  })
}


  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addValue}>Increase value</button>
      <br />
      <button onClick={dec_Value}>Decrease value</button>
    </>
  )
}

export default App
