import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'

export default function NavBar() {
  useEffect(() => {
    const elems = document.querySelector('#mobile-links')
    M.Sidenav.init(elems, {})
  }, [])
  return (
    <div>
      <nav className="indigo darken-4">
        <div className="nav-wrapper">
          <Link to={'/#'} className="brand-logo"></Link>
          <a href="true" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down ">
            <li>
              <Link to={'/#'}>Home</Link>
            </li>
            <li>
              <Link to={'/Teams'}>Teams</Link>
            </li>
            <li>
              <Link
                to={'//www.efl.com/clubs-and-competitions/sky-bet-championship/'}
                target="_blank"
              >
                EFL
              </Link>
            </li>
            <li>
              <Link to={'/FavTeams'}>Favorite Team</Link>
            </li>
            <li>
              <Link to={'/NotFound'}>Other</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* IF YOU CHANGE LINK/ROUTER ABOVE, CHANGE BELOW TOO */}
      <ul className="sidenav sidenav-close sdnv" id="mobile-links">
        <li>
          <Link to={'/#'}>Home</Link>
        </li>
        <li>
          <Link to={'/Teams'}>Teams</Link>
        </li>
        <li>
          <Link
            to={'//www.efl.com/clubs-and-competitions/sky-bet-championship/'}
            target="_blank"
          >
            EFL
          </Link>
        </li>
        <li>
          <Link to={'/FavTeams'}>Favorite Team</Link>
        </li>
        <li>
          <Link to={'/NotFound'}>Other</Link>
        </li>
      </ul>
    </div>
  )
}
