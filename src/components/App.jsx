import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './Header';
import HomePage from 'pages/HomePage';
import CampersPage from 'pages/CampersPage';
import FavouritesPage from 'pages/FavouritesPage';
import Features from './Features';
import Reviews from './Reviews';
import CamperModal from './CamperModal';

export const App = () => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;
  console.log('app', location);

  return (
    <div className="container">
      <Header />

      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campers" element={<CampersPage />}>
            {/* <Route path=":camperId" element={<CamperModal />}>
              <Route index element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route> */}
          </Route>
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/*" element={<div>error</div>} />
        </Routes>

        {/* {previousLocation && (
          <Routes>
            <Route path="/modal/:id" element={<CamperModal />}>
              <Route index element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        )} */}
      </Suspense>
    </div>
  );
};
