import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components/index'
function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <div className='text-gray-200 text-center mt-24 pb-2'>© Made with Love 🤍</div>
    </>
  )
}

export default App
