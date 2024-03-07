import { useState } from 'react'
import Background from './components/background/Background'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Background />
      </div>
    </>
  )
}

export default App
