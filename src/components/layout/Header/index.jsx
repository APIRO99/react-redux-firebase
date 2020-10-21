import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import { SignedOutLinks } from './SignedOutLinks'
import { SignedInLinks } from './SignedInLinks'
import {  Collapse,     Navbar,   NavbarToggler, Container } from 'reactstrap';

import textStyles from 'assets/styles/Text/NavLink.module.scss'

const Header = () => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  
  const Name = (
    <Link className={textStyles.Title} to='/'>
      <h1 className="d-flex align-middle m-0">My Planner</h1>
    </Link>
  )

  const Navigation = (
    <>
    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    
    <Collapse 
      isOpen={!collapsed} 
      navbar
      className="justify-content-end">
      {(false) ? <SignedInLinks /> : <SignedOutLinks />}
    </Collapse>
    </>
  )

  return(
    <Navbar 
      className="bg-yellow"
      color="faded" 
      light 
      expand="md">
      <Container>
        { Name }
        { Navigation }
      </Container>
    </Navbar>
  )
}

export default Header