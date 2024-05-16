import s from './CamperModal.module.css';

import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

function CamperModal() {
  //   const navigate = useNavigate();
  const location = useLocation();
  console.log('camper modal', location);

  return (
    <div className={s.modal}>
      Modal camper #2
      <ul>
        <li>
          <NavLink to={''} />
        </li>
        <li>
          <NavLink to={'revievs'} />
        </li>
      </ul>
      <Suspense fallback={<p>...loading</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CamperModal;
