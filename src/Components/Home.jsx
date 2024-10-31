import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

function Home() {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={darkMode ? `box box-dark` : ` box box-light`}>
      <h3>This is a Home page</h3>
    </div>
  )
}

export default Home