import s from './CampersPage.module.css';

import { Outlet } from 'react-router-dom';

import CampersList from 'components/CampersList';
import CampersFilters from 'components/CampersFilters';

function CampersPage() {
  return (
    <div className={s.campersPage}>
      <CampersFilters />
      <CampersList />

      <Outlet></Outlet>
    </div>
  );
}

export default CampersPage;
