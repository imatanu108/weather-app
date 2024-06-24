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
      <div className="text-[rgba(212,252,255,0.77)] text-center text-xs md:text-sm mt-24 pb-2">
        © Made with 🤍 by <a href="https://github.com/imatanu108" target="_blank" rel="noopener noreferrer" className="hover:underline">Atanu</a>
      </div>

    </>
  )
}

export default App
