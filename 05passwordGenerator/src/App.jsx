import { useState,useCallback, useEffect, useRef } from "react"


function App() {
  const[length,setlength] = useState(8)
  const[numberAllowed,setnumberAllowed] = useState(false)
  const[charAllowed,setCharAllowed] = useState(false)
  const[password,setPassword] = useState("")
  // useRef hook
  const passwordRef = useRef(null)

  const copypassToclipboard = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
      }
    if (charAllowed) {
      str += "!@#$%^&*"
      }  

      for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
        
      }
      setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(() => {passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator ])


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password }
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref={passwordRef}
        
        />
        <button onClick={copypassToclipboard}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy</button>
      </div>

      <div className="flex text-sm gap-x-2 ">

      <div className="flex items-cneter gap-x-1">
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e) => {setlength(e.target.value)}} />
        <label> length: {length}</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        id="number input"
        defaultChecked={numberAllowed}
        onChange={() => {
          setnumberAllowed((prev) => !prev)
        }} />
        <label htmlFor="number input">Numbers</label>
      </div>

      <div className="flex items-cemter gap-x-1">
        <input type="checkbox" name="" id="char input"
        defaultChecked={charAllowed}
        onChange={() => {
          setCharAllowed((prev) => !prev)
        }} />
        <label htmlFor="char input">Characters</label>
      </div>

      
      </div>
      
    </div>
  
    </>
  )
}

export default App
