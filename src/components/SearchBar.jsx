import React from 'react'

const SearchBar = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-500 rounded-md shadow mx-4 p-6 text-center">
        <h1 className="text-4xl font-semibold text-white mb-2">
            Smart Report Finder
        </h1>
        <p className="text-gray-200  font-semibold mb-6">
            Quickly search and access detailed reports with advanced filters.
        </p>
        <div className="flex justify-center">
            <input type="text" placeholder='Search' className="w-80 px-4 py-2 bg-white rounded-l-md outline-none text-gray-500"/>
            <button className="bg-[#F9F9F9] px-4 py-2 rounded-r-md text-gray-400"><a href="#"><img src="/src/assets/search.png" alt="search icon" className='h-6' /></a></button>
        </div>
    </section>
  )
}

export default SearchBar