import s from './TagsList.module.css';

export default function TagsList({ camper, list }) {
  const data = {
    adults: camper.adults,
    transmission: camper.transmission,
    engine: camper.engine,
    AC: camper.details.airConditioner,
    beds: camper.details.beds,
    kitchen: camper.details.kitchen,
    shower: camper.details.shower,
    cd: camper.details.cd,
    radio: camper.details.radio,
    tv: camper.details.tv,
    hob: camper.details.hob,
    toilet: camper.details.toilet,
    gas: camper.details.gas,
    water: camper.details.water,
    microwave: camper.details.microwave,
    freezer: camper.details.freezer,
  };

  return (
    <ul className={s.itemTagsList}>
      {list.map(el => {
        if (data[el]) {
          return (
            <li className={s.itemTagsPoint} key={el}>
              <svg width="20" height="20" className={s.itemTagsIcon}>
                <use href={`#icon-${el}`}></use>
              </svg>
              <span className={s.itemTagsText}>
                {typeof data[el] === 'string' ? data[el] : el}
              </span>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}
