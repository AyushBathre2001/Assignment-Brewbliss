import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full'>
      
<nav className="flex lg:flex-row flex-col lg:justify-between justify-center w-full px-5 lg:px-20 py-7 items-center text-white ">
  <h1 className="text-xl text-white lg:text-left text-center font-bold">BrewBliss</h1>
  <div className="flex items-center mt-3 lg:mt-0 justify-center">
 
    <ul className="flex items-center space-x-6">
      <li className="font-semibold text-white">Home</li>
      <li className="font-semibold text-white">About</li>
      <li className="font-semibold text-white">Contact</li>
      
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
