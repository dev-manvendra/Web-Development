import { useState, useEffect } from 'react'
import Card from './assets/components/Card'
import Theme from './assets/components/Theme'
import { ThemeContextProvider } from './context/context'




function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
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
    </ThemeContextProvider>
  )
}

export default App
