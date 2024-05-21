import s from './Reviews.module.css';
import { ReactComponent as ReactSprite } from 'images/icons.svg';

import { useOutletContext } from 'react-router-dom';

function Reviews() {
  const [camper] = useOutletContext();
  const { reviews } = camper;

  const getStarRating = rating => {
    const arr = [];
    for (let i = 0; i <= 5; i++) {
      arr.push(
        <li key={i}>
          <svg
            width="16"
            height="16"
            className={s[`${i < rating ? 'iconFull' : 'iconEmpty'}`]}
          >
            <use href={`#icon-star`}></use>
          </svg>
        </li>
      );
    }
    return arr;
  };

  return (
    <>
      {reviews.length ? (
        <div>
          <ReactSprite />
          <ul>
            {reviews.map(el => {
              return (
                <li key={el.reviewer_name} className={s.reviewItem}>
                  <div className={s.reviewWrapper}>
                    <div className={s.reviewImg}>
                      {el.reviewer_name.slice(0, 1)}
                    </div>
                    <div className={s.reviewRatingWrapper}>
                      <p className={s.reviewName}>{el.reviewer_name}</p>
                      <ul className={s.ratingList}>
                        {getStarRating(el.reviewer_rating)}
                      </ul>
                    </div>
                  </div>

                  <p className={s.reviewComment}>{el.comment}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>Sorry, no reviews were found</p>
      )}
    </>
  );
}

export default Reviews;
