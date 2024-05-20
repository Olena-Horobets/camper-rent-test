import s from './CamperModal.module.css';

import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';

import { ReactComponent as ReactSprite } from 'images/icons.svg';
import data from 'data.json';
import ModalForm from 'components/ModalForm';

function CamperModal({ onModalClose }) {
  const { camperId } = useParams();
  const camper = data.find(el => el._id === camperId);
  const location = useLocation();

  console.log(camper);

  const normalizePrice = price =>
    `€${price.slice(-9, -6)} ${price.slice(-6, -3)} ${price.slice(-3)},00`;

  return (
    <div className={s.modal}>
      <ReactSprite />

      <button onClick={onModalClose} className={s.modalClose}>
        <svg width="32" height="32" className={s.modalCloseIcon}>
          <use href="#icon-close"></use>
        </svg>
      </button>

      <div className={s.modalHeader}>
        <h2 className={s.modalTilte}>{camper.name}</h2>
        <div className={s.modalHeaderWrapper}>
          <svg width="16" height="16" className={s.itemRatingIcon}>
            <use href="#icon-star"></use>
          </svg>
          <span className={s.itemRating}>
            {camper.rating} ({camper.reviews?.length || 0} Reviews)
          </span>
          <svg width="16" height="16" className={s.itemLocationIcon}>
            <use href="#icon-location"></use>
          </svg>
          <span className={s.itemLocation}>{camper.location}</span>
        </div>
        <p className={s.modalPrice}>{normalizePrice(String(camper.price))}</p>
      </div>

      <ul className={s.modalGallery}>
        {camper.gallery.map((el, id) => (
          <li key={id}>
            <img className={s.modalImg} src={el} alt={camper.name}></img>
          </li>
        ))}
      </ul>

      <p className={s.modalDesc}>{camper.description}</p>

      <div className={s.modalNavWrapper}>
        <ul className="navigation">
          <li className="navItem">
            <NavLink
              to={'features'}
              state={{ background: location.state?.background }}
              className={({ isActive }) =>
                isActive ? 'navLinkActive' : 'navLink'
              }
            >
              Features
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink
              to={'reviews'}
              state={{ background: location.state?.background }}
              className={({ isActive }) =>
                isActive ? 'navLinkActive' : 'navLink'
              }
            >
              Revievs
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={s.modalDetailWrapper}>
        <Suspense fallback={<p>...loading</p>}>
          <Outlet />
        </Suspense>
        <ModalForm />
      </div>
    </div>
  );
}

export default CamperModal;
