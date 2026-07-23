import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Context API for data tranfer through Components</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App