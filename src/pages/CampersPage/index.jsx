import s from './CampersPage.module.css';

import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CampersList from 'components/CampersList';
import CampersFilters from 'components/CampersFilters';
import Button from 'components/Button';

import { getNextPageAction } from 'store/campers/slice';
import { selectCampers, selectIsLastPage } from 'store/campers/selectors';
import { Suspense } from 'react';
import { Loader } from 'components/Loader';

function CampersPage() {
  const campers = useSelector(selectCampers);
  const isLastPage = useSelector(selectIsLastPage);
  const dispatch = useDispatch();

  const onLoadMoreClick = () => {
    dispatch(getNextPageAction());
  };

  return (
    <div className={s.campersPage}>
      <CampersFilters />

      <div className={s.campersPageWrapper}>
        <CampersList campers={campers} />
        {!isLastPage && (
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
