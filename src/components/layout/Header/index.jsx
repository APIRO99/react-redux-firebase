import React, { useState} from 'react'
import { SignedOutLinks } from './SignedOutLinks'
import { SignedInLinks } from './SignedInLinks'
import {  Collapse,     Navbar,   NavbarToggler, Container } from 'reactstrap';

const Header = () => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  
  const Name = (
    <h1 className="d-flex align-middle m-0">My Planner</h1>
  )

  const Navigation = (
    <>
    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    
    <Collapse 
      isOpen={!collapsed} 
      navbar
      className="justify-content-end">
      {(true) ? <SignedInLinks /> : <SignedOutLinks />}
    </Collapse>
    </>
  )

  return(
    <Navbar 
      className="bg-warning"
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