import s from './CamperModal.module.css';
import { ReactComponent as ReactSprite } from 'images/icons.svg';

import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import ModalForm from 'components/ModalForm';
import { selectAllCampers } from 'store/campers/selectors';

function CamperModal({ onModalClose }) {
  const { camperId } = useParams();
  const location = useLocation();

  const campers = useSelector(selectAllCampers);
  const camper = campers.find(el => el._id === camperId);

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
            <img
              className={s.modalImg}
              src={el}
              alt={camper.name}
              width="290"
            ></img>
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
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={s.modalDetailSection}>
        <div className={s.modalDetailWrapper}>
          <Suspense fallback={<p>...loading</p>}>
            <Outlet context={[camper]} />
          </Suspense>
        </div>
        <ModalForm />
      </div>
    </div>
  );
}

export default CamperModal;
