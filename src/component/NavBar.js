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
      <nav className="">
        <div className="nav-wrapper">
          <Link to={'/#'} className="brand-logo"></Link>
          <Link className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </Link>

          <ul className="right hide-on-med-and-down ">
            <li>
              <Link to={'/#'}>Home</Link>
            </li>
            <li>
              <Link to={'/Teams'}>Teams</Link>
            </li>
            <li>
              <Link to={'//thedarkestwinters.bandcamp.com/'} target="_blank">
                EFL
              </Link>
            </li>
            <li>
              <Link to={'/FavTeams'}>Favorite Team</Link>
            </li>
            <li>
              <Link to={'/#'}>OTHER</Link>
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
          <Link to={'//thedarkestwinters.bandcamp.com/'} target="_blank">
            EFL
          </Link>
        </li>
        <li>
          <Link to={'/FavTeams'}>Favorite Team</Link>
        </li>
        <li>
          <Link to={'/#'}>OTHER</Link>
        </li>
      </ul>
    </div>
  )
}
