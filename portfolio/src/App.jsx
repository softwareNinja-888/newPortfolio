import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <div className="flex flex-col h-full w-screen bg-primary">
        <Header />
        <Main/>
        <Footer/>
      </div>
    </>
  )
}

export default App
