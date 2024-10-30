import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
  const {darkMode,toggleDarkmode} = useContext(ThemeContext)
  return (
    <div>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Link  to={'./'} style={{textDecoration:'none',color:'white'}} className='me-3'>Home</Link>
          <Nav className="me-auto">
            <Link to={'./about'} style={{textDecoration:'none',color:'white'}} className='me-3'>About Us</Link>
            <Link to={'./contact'} style={{textDecoration:'none',color:'white'}}>Contact Us</Link>
          </Nav>
          <Button variant="primary">Dark mode</Button>
        </Container>
      </Navbar>
  </div>
  )
}

export default Header