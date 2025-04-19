import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase =()=>{
    setCount(count + 1);
  }

  const decrease =()=>{
    setCount(count - 1);
  }

  return (
    <>
    <p >leats see count value here {count}</p>
    <button  onClick ={increase}>increase{count}</button>
    
    <button  onClick ={decrease}>Decrease{count}</button>

    
    </>
  )
}

export default App
