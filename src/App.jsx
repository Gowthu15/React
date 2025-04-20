import { useState } from 'react'

import Card from './components/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    user:"gowtham",
     age:24
  }

  let newArr =[1,2,3,5]
  return (
  <>
   <Card username='Hello Stark' someObj={newArr} />
<Card  username='gowtham' btntext='visit me' />
  </>
  )
}

export default App
