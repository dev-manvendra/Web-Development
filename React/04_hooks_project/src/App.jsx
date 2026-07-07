import { useState } from 'react'

function App() {
  let [color, setColor] = useState("olive")

  return (
    <div className='main'
    style={{backgroundColor: color}}>
        <div className='heading'>
          <h1>Background Colour Changer</h1>
          <p>Click on the button below to change the background-color</p>
        </div>
        <div className='colour'>
          <button 
          onClick={() => setColor("red")}
          className='btn'
          style={{backgroundColor: "red"}}>Red</button>
          
          <button 
          onClick={() => setColor("green")}
          className='btn'
          style={{backgroundColor: "green"}}>Green</button>
          
          <button 
          onClick={() => setColor("blue")}
          className='btn'
          style={{backgroundColor: "blue"}}>Blue</button>
          
          <button 
          onClick={() => setColor("white")}
          className='btn'
          style={{backgroundColor: "whitesmoke"}}>White</button>
          
          <button 
          onClick={() => setColor("orange")}
          className='btn'
          style={{backgroundColor: "orange"}}>Orange</button>
          
          <button 
          onClick={() => setColor("yellow")}
          className='btn'
          style={{backgroundColor: "yellow"}}>Yellow</button>
          
        </div>
    </div>
  );
}

export default App
