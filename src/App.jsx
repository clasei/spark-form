import { useState } from 'react'
import Background from './components/background/Background'
import Header from './components/header/Header'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Background />
          <div>
            <Header />
          </div>
      </div>
    </>
  )
}

export default App
