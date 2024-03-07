import { } from 'react'
import './App.css'
import Background from './components/background/Background'
import Header from './components/header/Header'
import SignupForm from './components/signup-form/SignupForm'
import CodeLink from './components/CodeLink/CodeLink'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div>
        <Background />
          <div className="content">
            <Header />
            <SignupForm />
            <CodeLink />
            <Footer />
          </div>
      </div>
    </>
  )
}

export default App
