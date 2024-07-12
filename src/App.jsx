import React from 'react'
import Navbar from './components/Navbar'
import Create from './components/Create'
import Header from './components/Header'
import ContextProvider from './context/Context'

function App() {
  return (
    <ContextProvider>
      <Navbar/>   
      <Create/>
      <Header/>
    </ContextProvider>
  )
}

export default App