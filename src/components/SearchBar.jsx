import React from 'react'

const SearchBar = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-500 
                        rounded-2xl shadow-lg mx-4 p-10 text-center 
                        relative overflow-hidden">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
        Smart Report Finder
      </h1>
      <p className="text-orange-100 font-medium mb-8">
        Quickly search and access detailed reports with advanced filters.
      </p>

      {/* Search input */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search reports..."
          className="w-96 px-5 py-3 bg-white/80 backdrop-blur-md rounded-l-xl 
                     outline-none text-gray-700 shadow focus:ring-2 
                     focus:ring-orange-400 transition"
        />
        <button className="bg-[#F9F9F9] px-5 py-3 rounded-r-xl 
                          hover:cursor-pointer transition shadow">
          <img src="/src/assets/search.png" alt="search icon" className="h-6" />
        </button>
      </div>
    </section>
  )
}

export default SearchBar
