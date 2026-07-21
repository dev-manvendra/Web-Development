import React from "react"
import Footer from "./assets/components/Footer"
import Header from "./assets/components/Header"

import { Outlet } from "react-router"


function App() {
  

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
