import s from './CamperModal.module.css';

import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';

function CamperModal({ onModalClose }) {
  const { camperId } = useParams();
  const location = useLocation();

  console.log(location);
  console.log(location.state.background);

  return (
    <div className={s['modal']}>
      Modal camper #${camperId} <button onClick={onModalClose}>Close</button>
      <ul>
        <li>
          <NavLink to={''} state={{ background: location }}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to={'reviews'} state={{ background: location }}>
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
