import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from './Loader';

const Header = lazy(() => import('./Header'));
const HomePage = lazy(() => import('pages/HomePage'));
const CampersPage = lazy(() => import('pages/CampersPage'));
const FavouritesPage = lazy(() => import('pages/FavouritesPage'));
const Features = lazy(() => import('./Features'));
const Reviews = lazy(() => import('./Reviews'));
const ModalBackdrop = lazy(() => import('./ModalBackdrop'));
const CamperModal = lazy(() => import('./CamperModal'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />

        <div className="mainContainer">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CampersPage />}>
              <Route
                path="camper/:camperId"
                element={
                  <ModalBackdrop>
                    <CamperModal />
                  </ModalBackdrop>
                }
              >
                <Route index path="features" element={<Features />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
            <Route path="/favorites" element={<FavouritesPage />}>
              <Route
                path="camper/:camperId"
                element={
                  <ModalBackdrop>
                    <CamperModal />
                  </ModalBackdrop>
                }
              >
                <Route index path="features" element={<Features />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
            <Route path="*" element={<div>error</div>} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
};
