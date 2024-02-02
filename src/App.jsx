import React from 'react'
import PasswordGenerator from './components/PasswordGenerator'
import Header from './components/Header'

function App() {
  return (
    <div className='h-screen w-full bg-black text-white text-center'>
      <Header />
      <PasswordGenerator />
    </div>
  )
}

export default App
