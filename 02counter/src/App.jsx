import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  
  //let counter=5

  const addValue=()=>{
   if(counter>=15)
      {
        setCounter(counter=15)
      }
    //counter=counter+1
    else{
    setCounter(counter+1)
    }
  }
  const removeValue=()=>{
    
    //counter=counter+1
    if (counter !=0){
    setCounter(counter-1)
    }
    
    else{
      setCounter(counter=0)
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
