import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import './theme.css'
function About() {
  const  {darkMode} = useContext(ThemeContext)
  
  return (
    <div className={darkMode ? `container container-dark` : `container container-light`}>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tenetur laudantium expedita odio accusamus possimus tempora unde enim voluptatibus! Natus laboriosam voluptatum aut tenetur laudantium earum libero eveniet hic quibusdam.</p>
    </div>
  )
}

export default About