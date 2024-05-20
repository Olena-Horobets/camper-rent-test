import s from './Features.module.css';

import { useOutletContext } from 'react-router-dom';

function Features() {
  const [camper] = useOutletContext();

  const getTagsList = () => {
    const data = [
      ['Adults', camper.adults],
      ['transmission', camper.transmission],
      ['engine', camper.engine],
      ['AC', camper.details.airConditioner],
      ['beds', camper.details.beds],
      ['Kitchen', camper.details.kitchen],
      ['cd', camper.details.cd],
      ['radio', camper.details.radio],
      ['tv', camper.details.tv],
      ['hob', camper.details.hob],
      ['toilet', camper.details.toilet],
      ['gas', camper.details.gas],
      ['water', camper.details.water],
      ['microwave', camper.details.microwave],
      ['freezer', camper.details.freezer],
    ];

    return data.map(el => {
      if (el[1]) {
        return (
          <li className={s.itemTagsPoint} key={el[0]}>
            <svg width="20" height="20" className={s.itemTagsIcon}>
              <use href={`#icon-${el[0]}`}></use>
            </svg>
            <span className={s.itemTagsText}>
              {typeof el[1] === 'string' ? el[1] : el[0]}
            </span>
          </li>
        );
      }
      return null;
    });
  };

  return (
    <>
      <ul className={s.itemTagsList}>{getTagsList()}</ul>

      <p className={s.featuresTitle}>Vehicle details</p>
      <ul className={s.itemDetails}>
        <li className={s.detailsPoint}>
          <span className={s.detailsName}>Form</span>
          <span className={s.detailsValue}>{camper.form}</span>
        </li>
        <li className={s.detailsPoint}>
          <span className={s.detailsName}>Length</span>
          <span className={s.detailsValue}>{camper.length}</span>
        </li>
        <li className={s.detailsPoint}>
          <span className={s.detailsName}>Width</span>
          <span className={s.detailsValue}>{camper.width}</span>
        </li>
        <li className={s.detailsPoint}>
          <span className={s.detailsName}>Height</span>
          <span className={s.detailsValue}>{camper.height}</span>
        </li>
        <li className={s.detailsPoint}>
          <span className={s.detailsName}>Tank</span>
          <span className={s.detailsValue}>{camper.tank}</span>
        </li>
        <li className={s.detailsPoint}>
          <span className={s.detailsName}>Consumption</span>
          <span className={s.detailsValue}>{camper.consumption}</span>
        </li>
      </ul>
    </>
  );
}

export default Features;
