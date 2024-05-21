import s from './CampersPage.module.css';

import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense } from 'react';

import CampersList from 'components/CampersList';
import CampersFilters from 'components/CampersFilters';
import Button from 'components/Button';
import { Loader } from 'components/Loader';

import { getNextPageAction } from 'store/campers/slice';
import {
  isLoadMoreShown,
  selectFilteredCampers,
} from 'store/campers/selectors';

function CampersPage() {
  const dispatch = useDispatch();

  const campers = useSelector(selectFilteredCampers);
  const showLoadMoreBtn = useSelector(isLoadMoreShown);

  const onLoadMoreClick = () => {
    dispatch(getNextPageAction());
  };

  return (
    <div className={s.campersPage}>
      <CampersFilters />

      <div className={s.campersPageWrapper}>
        <CampersList campers={campers} />
        {showLoadMoreBtn && (
          <Button
            type="button"
            onClick={onLoadMoreClick}
            className="loadMoreBtn"
            text="Load more"
          />
        )}
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CampersPage;
