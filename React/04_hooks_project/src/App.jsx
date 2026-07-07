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
          <button className='btn'
          style={{backgroundColor: "red", border: "none"}}>Red</button>
          <button className='btn'
          style={{backgroundColor: "green", border: "none"}}>Green</button>
          <button className='btn'
          style={{backgroundColor: "blue", border: "none"}}>Blue</button>
          <button className='btn'
          style={{backgroundColor: "whitesmoke", border: "none"}}>White</button>
          <button className='btn'
          style={{backgroundColor: "orange", border: "none"}}>Orange</button>
          <button className='btn'
          style={{backgroundColor: "yellow", border: "none"}}>Yellow</button>
          
        </div>
    </div>
  );
}

export default App
