import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import Menu from '../components/Menu'

const Header = ({siteTitle}) => (
  <header className="header">
    <Container>
      <div className="flex align-middle">
        <Link to="/" className="header__logo__link">
          <img
            className="header__logo"
            src="http://www.blue-box-digital.com/images/logo.svg"
            alt=""/>
        </Link>
        <Menu/>
      </div>
    </Container>
  </header>
)

export default Header
