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
          <button className='btn'>Red</button>
          <button className='btn'>Green</button>
          <button className='btn'>Blue</button>
          <button className='btn'>White</button>
          <button className='btn'>Burgandy</button>
          <button className='btn'>Yellow</button>
          
        </div>
    </div>
  );
}

export default App
