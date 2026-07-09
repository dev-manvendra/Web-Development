import { useCallback, useState, useEffect} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed , setNumAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");
  const generatePassword = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) {
      str += "0123456789"
      
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}/?<>';:"
      
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);      
    }
    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    generatePassword()
  }, [length, numAllowed, charAllowed, generatePassword])
  return (
    <>
      <div className='main'>
          <div className='input-field'>
            <h1>Password Generator</h1>
            <div className='input'>
              <input 
              type="text"
              value={password}
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
                  value={length}
                  className='scale'
                  onChange={(e) => {setLength(e.target.value)}}
                  
                />
                <label >Length {length}</label>
            </div>
            <div>
                <input 
                  type="checkbox"  
                  defaultChecked={numAllowed} 
                  onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
             
                />
                <label >Numbers</label>
            </div>
            <div>
                <input 
                  type="checkbox"  
                  defaultChecked={charAllowed} 
                  onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}              
                />
                <label >Characters</label>
            </div>
            
          </div>
      </div>
    </>
  )
}

export default App
