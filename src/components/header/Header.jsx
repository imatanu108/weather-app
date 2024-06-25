import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from "react-router-dom";

function Header() {
  const currentWeatherData = useSelector((state) => state.weather.currentWeatherData)

  let isday = true; // default value
  if (currentWeatherData && currentWeatherData.current) {
    isday = Boolean(currentWeatherData.current.is_day)
  }

  const title = isday ? 'Weather Updates 🌥️' : 'Weather Updates 🌙';

  return (
    <header className=' lg:mx-5  mt-1 mb-5 p-1 md:p-3 lg:p-5 rounded-md shadow-lg'>
      <nav className='flex flex-col md:flex-row justify-between items-center'>
        <h1 className='w-full md:w-auto flex justify-center md:justify-start items-center mb-4 md:mb-0'>
          <Link to="/" className='text-2xl md:text-3xl font-semibold md:font-semibold text-center'>
            {title}
          </Link>
        </h1>
        <div className='flex flex-row justify-center items-center gap-3 md:gap-2'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-base md:text-lg font-medium py-1 px-2 md:py-2 md:px-4 transition duration-200 hover:bg-transparent border-0 hover:text-lime-500 rounded-md
              ${isActive ? "text-lime-300" : "text-slate-100"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/compare"
            className={({ isActive }) =>
              `text-base md:text-lg font-medium py-2 px-3 md:py-2 md:px-4 transition duration-200  
               hover:bg-transparent border-0 hover:text-lime-500 rounded-md 
              ${isActive ? "text-lime-300" : "text-slate-100"}`
            }
          >
            Multi-location Mood
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header