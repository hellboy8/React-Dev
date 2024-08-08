import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="muskan" btnTxt="click me"/>
      <Card username="gayatri" btnTxt="visit me"/>
    </>
  )
}

export default App
