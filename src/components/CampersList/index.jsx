import s from './CampersList.module.css';
import { ReactComponent as ReactSprite } from 'images/icons.svg';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  selectCampers,
  selectFavoritesCampers,
  selectIsLastPage,
  selectIsLoading,
} from 'store/campers/selectors';
import {
  getAllCampersAction,
  getNextPageAction,
  addToFavoriteAction,
} from 'store/campers/slice';

import Button from 'components/Button';

export default function CampersList() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const favorites = useSelector(selectFavoritesCampers);
  const isLoading = useSelector(selectIsLoading);
  const isLastPage = useSelector(selectIsLastPage);

  useEffect(() => {
    dispatch(getAllCampersAction());
  }, [dispatch]);

  // action functions
  const onOpenModalClick = id => {
    document.querySelector('body').classList.add('bodyFixed');
    navigate(`camper/${id}/features`, {
      state: { background: location },
    });
  };

  const onLoadMoreClick = () => {
    dispatch(getNextPageAction());
  };

  const onAddToFavClick = item => {
    dispatch(addToFavoriteAction(item));
  };

  // helper functions
  const normalizePrice = price =>
    `€${price.slice(-9, -6)} ${price.slice(-6, -3)} ${price.slice(-3)},00`;

  const isFavorite = id => favorites.find(el => el === id);

  return (
    <>
      <ReactSprite />
      {isLoading ? (
        <p>...loading</p>
      ) : (
        <div className={s.listWrapper}>
          <ul className={s.list}>
            {campers.map(el => {
              return (
                <li key={el._id} className={s.card}>
                  <img
                    className={s.cardImg}
                    src={el.gallery[0]}
                    alt={el.name}
                  ></img>

                  <div className={s.cardContent}>
                    <div className={s.cardHeader}>
                      <h2 className={s.itemName}>{el.name}</h2>
                      <span className={s.cardHeaderWrapper}>
                        <span className={s.itemPrice}>
                          {normalizePrice(String(el.price))}
                        </span>

                        <button
                          className={s.cardFavBtn}
                          onClick={() => onAddToFavClick(el._id)}
                        >
                          <svg width="24" height="24">
                            <use
                              href={
                                isFavorite(el._id)
                                  ? '#icon-heart-full'
                                  : '#icon-heart-empty'
                              }
                            ></use>
                          </svg>
                        </button>
                      </span>
                    </div>

                    <div className={s.cardSubHeader}>
                      <svg width="16" height="16" className={s.itemRatingIcon}>
                        <use href="#icon-star"></use>
                      </svg>
                      <span className={s.itemRating}>
                        {el.rating} ({el.reviews?.length || 0} Reviews)
                      </span>
                      <svg
                        width="16"
                        height="16"
                        className={s.itemLocationIcon}
                      >
                        <use href="#icon-location"></use>
                      </svg>
                      <span className={s.itemLocation}>{el.location}</span>
                    </div>

                    <p className={s.itemDesc}>{el.description}</p>

                    <h3 className="visuallyHidden">Vehicle details</h3>
                    <ul className={s.itemDetails}>
                      <li className={s.itemDetailsPoint}>
                        <svg
                          width="20"
                          height="20"
                          className={s.itemDetailsIcon}
                        >
                          <use href="#icon-Adults"></use>
                        </svg>
                        <span className={s.itemDetailsText}>
                          {el.adults} adults
                        </span>
                      </li>
                      <li className={s.itemDetailsPoint}>
                        <svg
                          width="20"
                          height="20"
                          className={s.itemDetailsIcon}
                        >
                          <use href="#icon-transmission"></use>
                        </svg>
                        <span className={s.itemDetailsTextCapital}>
                          {el.transmission}
                        </span>
                      </li>
                      <li className={s.itemDetailsPoint}>
                        <svg
                          width="20"
                          height="20"
                          className={s.itemDetailsIcon}
                        >
                          <use href="#icon-engine"></use>
                        </svg>
                        <span className={s.itemDetailsTextCapital}>
                          {el.engine}
                        </span>
                      </li>
                      {el.details.kitchen && (
                        <li className={s.itemDetailsPoint}>
                          <svg
                            width="20"
                            height="20"
                            className={s.itemDetailsIcon}
                          >
                            <use href="#icon-Kitchen"></use>
                          </svg>
                          <span className={s.itemDetailsText}>Kitchen</span>
                        </li>
                      )}
                      <li className={s.itemDetailsPoint}>
                        <svg
                          width="20"
                          height="20"
                          className={s.itemDetailsIcon}
                        >
                          <use href="#icon-beds"></use>
                        </svg>
                        <span className={s.itemDetailsText}>
                          {el.details.beds} beds
                        </span>
                      </li>
                      {el.details.airConditioner && (
                        <li className={s.itemDetailsPoint}>
                          <svg
                            width="20"
                            height="20"
                            className={s.itemDetailsIcon}
                          >
                            <use href="#icon-AC"></use>
                          </svg>
                          <span className={s.itemDetailsText}>AC</span>
                        </li>
                      )}
                    </ul>
                    <Button
                      type="button"
                      onClick={() => onOpenModalClick(el._id)}
                      className="cardBtn"
                      text="Show more"
                    />
                  </div>
                </li>
              );
            })}
          </ul>

          {!isLastPage && (
            <Button
              type="button"
              onClick={onLoadMoreClick}
              className="loadMoreBtn"
              text="Load more"
            />
          )}
        </div>
      )}
    </>
  );
}
