import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
          <div className='input-field'>
            <h1>Password Generator</h1>
            <div className='input'>
              <input 
              type="text"
              value=""
              placeholder='Password'
              readOnly
              />
              <button>Copy</button>
            </div>
          </div>
          <div className='fields'>
            <div>
                <input 
                  type="range"
                  min={8}
                  max={16}
                  value="10"
                  className='scale'
                  
                />
                <label >Length</label>
            </div>
            <div>
                <input 
                  type="checkbox"                
                />
                <label >Numbers</label>
            </div>
            <div>
                <input 
                  type="checkbox"                
                />
                <label >Characters</label>
            </div>
            
          </div>
      </div>
    </>
  )
}

export default App
