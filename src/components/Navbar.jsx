import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center gap-3 fixed top-0 left-0 w-full z-50 
                    bg-white/70 backdrop-blur-md shadow-md px-4 py-2 transition">
      
      {/* Logo */}
      <div className="logo bg-white/80 backdrop-blur-sm shadow rounded-md px-4 py-2">
        <img src="/src/assets/logo.png" alt="logo" className="h-10" />
      </div>

      {/* Nav Items */}
      <div className="nav-items flex flex-1 items-center justify-between 
                      bg-white/80 backdrop-blur-sm shadow rounded-md px-6 py-3">
        
        {/* Title */}
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide">
          Smart Report Finder
        </h1>

        {/* Icons */}
        <div className="nav-icons flex items-center gap-6 pr-14">
          <a href="#" className="hover:scale-110 transition-transform duration-200">
            <img src="/src/assets/notificationBell.png" alt="" className="h-6" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-200">
            <img src="/src/assets/settings.png" alt="" className="h-6" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-200">
            <img src="/src/assets/profile.png" alt="" className="h-8 w-auto rounded-full" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
