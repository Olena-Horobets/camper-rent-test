import s from './Header.module.css';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive ? s['navLinkActive'] : s['navLink']
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/catalog'}
              className={({ isActive }) =>
                isActive ? s['navLinkActive'] : s['navLink']
              }
            >
              Rent
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/favorites'}
              className={({ isActive }) =>
                isActive ? s['navLinkActive'] : s['navLink']
              }
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
