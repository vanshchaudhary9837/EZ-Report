import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center gap-3 fixed top-0 left-0 w-full z-50 bg-gray-100 px-4 py-2'>
        <div className='logo bg-white shadow rounded-md px-4 py-2'>
            <img src="/src/assets/logo.png" alt="logo" className="h-10"/>
        </div>
        <div className='nav-items flex flex-1 items-center justify-between bg-white shadow rounded-md px-6 py-3'>
            <h1 className='text-xl font-bold text-orange-600 pl-10'>Smart Report Finder</h1>
            <div className="nav-icons flex items-center gap-6 pr-14">
                <a href="#"><img src="/src/assets/notificationBell.png" alt="" className="h-6"/></a>
                <a href="#"><img src="/src/assets/settings.png" alt="" className="h-6"/></a>
                <a href="#"><img src="/src/assets/profile.png" alt="" className="h-8 w-auto rounded-full"/></a>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar