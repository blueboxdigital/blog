import React from 'react'
import Link from 'gatsby-link'

function Menu() {
    return (
        <ul className="menu" role="navigation">
          <li className="menu__item">
            <Link to="/" className="menu__link">Tutorials</Link>
          </li>
          <li className="menu__item">
            <Link to="/" className="menu__link">Showcase</Link>
          </li>
          <li className="menu__item">
            <Link to="/" className="menu__link">Rants</Link>
          </li>
          <li className="menu__item">
            <Link to="/" className="menu__link">Links</Link>
          </li>
        </ul>
    );
}

export default Menu
