import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import HomePage from 'pages/HomePage';
import CampersPage from 'pages/CampersPage';
import FavouritesPage from 'pages/FavouritesPage';
import Features from './Features';
import Reviews from './Reviews';
import CamperModal from './CamperModal';
import ModalBackdrop from './ModalBackdrop';

export const App = () => {
  return (
    <div className="mainContainer">
      <Header />

      <Suspense fallback={<p>...loading</p>}>
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
          <Route path="/favorites" element={<FavouritesPage />} />
          <Route path="/*" element={<div>error</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};
