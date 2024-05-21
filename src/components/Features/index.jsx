import TagsList from 'components/TagsList';
import s from './Features.module.css';

import { useOutletContext } from 'react-router-dom';

const tagsList = [
  'adults',
  'transmission',
  'engine',
  'AC',
  'beds',
  'kitchen',
  'shower',
  'cd',
  'radio',
  'tv',
  'hob',
  'toilet',
  'gas',
  'water',
  'microwave',
  'freezer',
];

function Features() {
  const [camper] = useOutletContext();

  return (
    <>
      <div className={s.tagsWrapper}>
        <TagsList camper={camper} list={tagsList} />
      </div>

      <p className={s.featuresTitle}>Vehicle details</p>
      <ul className={s.itemDetails}>
        {['form', 'length', 'width', 'height', 'tank', 'consumption'].map(
          el => {
            return (
              <li className={s.detailsPoint} key={el}>
                <span className={s.detailsName}>{el}</span>
                <span className={s.detailsValue}>{camper[el]}</span>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}

export default Features;
