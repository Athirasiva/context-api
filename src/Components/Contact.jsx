import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

function Contact() {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={darkMode ? `container container-dark` : `container container-light`}> 
      <h3>This is Contact Page</h3>
    </div>
  )
}

export default Contact