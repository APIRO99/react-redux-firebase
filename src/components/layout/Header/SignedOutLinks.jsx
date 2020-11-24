import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';

import styles from 'assets/styles/Text/NavLink.module.scss'

const SignedOutLinks = () => {
  const signIn = "/signIn"
  const signUp = "/signUp"

  return(
    <Nav navbar>
        <NavItem>
          <Link className={styles.NavLinks} to={signIn}>
            Sign In
          </Link> 
        </NavItem>
        <NavItem>
          <Link className={styles.NavLinks} to={signUp}> 
            Sign Up
          </Link> 
        </NavItem>
      </Nav>
  )
}

export default SignedOutLinks