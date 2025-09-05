import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main className='pt-18'>
        <SearchBar/>
        <Hero/>
      </main>
    </div>
  )
}

export default App