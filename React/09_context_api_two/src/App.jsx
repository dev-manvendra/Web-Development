import { useState } from 'react'
import Card from './assets/components/Card'
import Theme from './assets/components/Theme'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <Theme />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
      </div>
    </>
  )
}

export default App
