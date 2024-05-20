import s from './FavouritesPage.module.css';

import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import CampersList from 'components/CampersList';
import { selectFavoritesCampers } from 'store/campers/selectors';

function FavouritesPage() {
  const campers = useSelector(selectFavoritesCampers);

  return (
    <div className={s.favPage}>
      <CampersList campers={campers} />

      <Outlet />
    </div>
  );
}

export default FavouritesPage;
