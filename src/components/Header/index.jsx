import s from './Header.module.css';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={s.header}>
      <div className="mainContainer">
        <nav className={s.headerNav}>
          <ul className="navigation">
            <li className="navItem">
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  isActive ? 'navLinkActive' : 'navLink'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to={'/catalog'}
                className={({ isActive }) =>
                  isActive ? 'navLinkActive' : 'navLink'
                }
              >
                Rent
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to={'/favorites'}
                className={({ isActive }) =>
                  isActive ? 'navLinkActive' : 'navLink'
                }
              >
                Favourites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
