import s from './CampersList.module.css';
import { ReactComponent as ReactSprite } from 'images/icons.svg';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import { Loader } from 'components/Loader';
import TagsList from 'components/TagsList';

import {
  selectFavoritesCampersIds,
  selectIsLoading,
} from 'store/campers/selectors';
import { addToFavoriteAction } from 'store/campers/slice';
import { normalizePrice } from 'utils/helpers';

const tagsList = ['adults', 'transmission', 'engine', 'AC', 'beds', 'kitchen'];

export default function CampersList({ campers }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavoritesCampersIds);
  const isLoading = useSelector(selectIsLoading);

  // action functions
  const onOpenModalClick = id => {
    document.querySelector('body').classList.add('bodyFixed');
    navigate(`camper/${id}/features`, {
      state: { background: location },
    });
  };

  const onAddToFavClick = item => {
    dispatch(addToFavoriteAction(item));
  };

  // helper functions
  const isFavorite = id => favorites.find(el => el === id);

  return (
    <>
      <ReactSprite />
      {isLoading ? (
        <Loader />
      ) : !campers.length ? (
        <p className={s.emptyMessage}>We're sorry, the list is empty!</p>
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
                    width="290px"
                  ></img>

                  <div className={s.cardContent}>
                    <div className={s.cardHeader}>
                      <h2 className={s.itemName}>{el.name}</h2>
                      <span className={s.cardHeaderWrapper}>
                        <span className={s.itemPrice}>
                          {normalizePrice(el.price)}
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
                    <div className={s.tagsWrapper}>
                      <TagsList camper={el} list={tagsList} />
                    </div>

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
        </div>
      )}
    </>
  );
}
