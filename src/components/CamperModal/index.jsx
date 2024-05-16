import s from './CamperModal.module.css';

import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';

function CamperModal() {
  const { camperId } = useParams();

  return (
    <div className={s.modal}>
      `Modal camper #${camperId}`
      <ul>
        <li>
          <NavLink to={''}>Features</NavLink>
        </li>
        <li>
          <NavLink to={'reviews'}>Revievs</NavLink>
        </li>
      </ul>
      <Suspense fallback={<p>...loading</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CamperModal;
