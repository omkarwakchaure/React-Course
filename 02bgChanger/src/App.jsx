import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("pink")

  return (
    <>
       <div style={{background: color} }> 
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("blue")}>Blue</button>
       </div>
    </>
  )
}

export default App
