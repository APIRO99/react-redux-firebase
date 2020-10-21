import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, Media } from 'reactstrap';

import textStyles from 'assets/styles/Text/NavLink.module.scss'
import pictureStyles from 'assets/styles/images/porfilePicture.module.scss'


export const SignedInLinks = () => {
  const NewProject = "/NewProject"
  const SignOut = "/SignOut"
  const porfilePicture = "https://lh3.googleusercontent.com/6w25P4USrn-8lqYsXW4AP3rWtmvGNuwbK4q3ofKdCpfFM6hfDR0sqiPKMbH0tYApp9YinaK5ZXOKvhvSw2roHk_BJxfJYXjiJeM4qhSCdMUKMUf-4FdEOyPf8dzxZIrAJADA1pr_2Em8w06v89ZNFCpMl7tDvY9UcJ8w8Edkfg9tJ4R5RokXFVBBQ0Z9BNWtM_kv-a20-CeWe3b4b1BCAMg70ZG6qZHVlp-kxaAZtdnklxU0lhWGQBeg4UU_wfdYv_roTbPuNFinddh1yq01xThB1QmS8kpP8DR85FOl0ayOjA6sbRcYk7gywvpRjKhxZFre3xDa-QB4UJlnK5oNX9v3Ct-Fq2wRM2dlz2L6DTVrHvDi-x_lMjC-usxsjoGX76vCyizYOzeOnDWzpHzlSRui_QGnz8DxRyNLy2QwSK90Lqd66JZdZ9v3cuqVWwGZEUEVm-L1knURi4hND-_YmunxzLwdkLt-envMxOlzrge7LZvYXRmC174oxUbX6opCi9icD23diFzGyWhNten0YE1yrVVQsM-pExKNRkGvEuquTFE50vStTU1kbKlCcB7IZ6CS1oyfc9AAZ-M6MBeluZLkbZRDdG4A92dCBNlJorvNWDs19Nc1lTqTPutreCVcaCCcLb5Ok8tAulZ714lSEpIjDBFjTad6LO6INw21HmNTI3wURh1CegkFbLeHBQ=w653-h1305-no?authuser=0"

  return(
    <Nav navbar>
      <NavItem>
        <Link className={textStyles.NavLinks} to={NewProject}>
          New Project
        </Link> 
      </NavItem>
      <NavItem>
        <Link className={textStyles.NavLinks} to={SignOut}> 
          Sign out
        </Link> 
      </NavItem>
      <NavItem>
        <Media
        className={pictureStyles.picture}
        src={porfilePicture}
        alt="Porfile"
        />
      </NavItem>
    </Nav>
  )
}