import { Outlet } from 'react-router-dom';

import CampersList from 'components/CampersList';

function CampersPage() {
  return (
    <div>
      <CampersList />

      <Outlet></Outlet>
    </div>
  );
}

export default CampersPage;
