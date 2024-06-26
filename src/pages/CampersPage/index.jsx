import s from './CampersPage.module.css';

import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';

import CampersList from 'components/CampersList';
import CampersFilters from 'components/CampersFilters';
import Button from 'components/Button';
import { Loader } from 'components/Loader';

import { getAllCampersAction, getNextPageAction } from 'store/campers/slice';
import {
  isLoadMoreShown,
  selectFilteredCampers,
  selectIsLoading,
} from 'store/campers/selectors';

function CampersPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const campers = useSelector(selectFilteredCampers);
  const showLoadMoreBtn = useSelector(isLoadMoreShown);

  useEffect(() => {
    dispatch(getAllCampersAction());
  }, [dispatch]);

  const onLoadMoreClick = () => {
    dispatch(getNextPageAction());
  };

  return (
    <div className={s.campersPage}>
      <CampersFilters />

      <div className={s.campersPageWrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CampersList campers={campers} />
            {showLoadMoreBtn && (
              <Button
                type="button"
                onClick={onLoadMoreClick}
                className="loadMoreBtn"
                text="Load more"
              />
            )}
          </>
        )}
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default CampersPage;
