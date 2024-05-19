import s from './CamperModal.module.css';

import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';

function CamperModal({ onModalClose }) {
  const { camperId } = useParams();
  const location = useLocation();

  return (
    <div className={s['modal']}>
      Modal camper #${camperId} <button onClick={onModalClose}>Close</button>
      <ul>
        <li>
          <NavLink
            to={'features'}
            state={{
              background: location.state?.background || {
                pathname: '/catalog',
              },
            }}
            className={({ isActive }) =>
              isActive ? s['navLinkActive'] : s['navLink']
            }
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'reviews'}
            state={{ background: location.state?.background }}
            className={({ isActive }) =>
              isActive ? s['navLinkActive'] : s['navLink']
            }
          >
            Revievs
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<p>...loading</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CamperModal;
