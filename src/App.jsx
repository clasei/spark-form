import { } from 'react'
import Background from './components/background/Background'
import Header from './components/header/Header'
import SignupForm from './components/signup-form/SignupForm'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Background />
          <div>
            <Header />
            <SignupForm />
          </div>
      </div>
    </>
  )
}

export default App
