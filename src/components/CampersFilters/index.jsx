import Button from 'components/Button';
import s from './CampersFilters.module.css';

import { ReactComponent as ReactSprite } from 'images/icons.svg';
import { useState } from 'react';

export default function CampersFilters() {
  const [location, setLocation] = useState('Ukraine, Kyiv');

  return (
    <div className={s.filterSection}>
      <ReactSprite />
      <label htmlFor="location" className={s.label}>
        <span className={s.filterTitle}>Location</span>
        <input
          id="location"
          className={s.filterInput}
          value={location}
          onChange={e => setLocation(e.target.value)}
        ></input>
        <svg width="18" height="20" className={s.filterLocationIcon}>
          <use href="#icon-location"></use>
        </svg>
      </label>

      <p className={s.filterTitleSecond}>Filters</p>
      <p className={s.filterSubtitle}>Vehicle equipment</p>
      <ul className={s.filterList}>
        <li className={s.filterItem}>
          <input type="checkbox" name="ac" className={s.filterCheckbox}></input>
          <svg width="32" height="32" className={s.filterCheckboxIcon}>
            <use href="#icon-AC"></use>
          </svg>
          <span className={s.filterCheckboxText}>AC</span>
        </li>
        <li className={s.filterItem}>
          <input
            type="checkbox"
            name="automatic"
            className={s.filterCheckbox}
          ></input>
          <svg width="32" height="32" className={s.filterCheckboxIcon}>
            <use href="#icon-transmission-light"></use>
          </svg>
          <span className={s.filterCheckboxText}>Automatic</span>
        </li>
        <li className={s.filterItem}>
          <input
            type="checkbox"
            name="kitchen"
            className={s.filterCheckbox}
          ></input>
          <svg width="32" height="32" className={s.filterCheckboxIcon}>
            <use href="#icon-kitchen-light"></use>
          </svg>
          <span className={s.filterCheckboxText}>Kitchen</span>
        </li>
        <li className={s.filterItem}>
          <input type="checkbox" name="tv" className={s.filterCheckbox}></input>
          <svg width="32" height="32" className={s.filterCheckboxIcon}>
            <use href="#icon-tv"></use>
          </svg>
          <span className={s.filterCheckboxText}>TV</span>
        </li>
        <li className={s.filterItem}>
          <input
            type="checkbox"
            name="shower"
            className={s.filterCheckbox}
          ></input>
          <svg width="32" height="32" className={s.filterCheckboxIcon}>
            <use href="#icon-wc"></use>
          </svg>
          <span className={s.filterCheckboxText}>Shower/WC</span>
        </li>
      </ul>

      <p className={s.filterSubtitle}>Vehicle type</p>
      <ul className={s.filterListSecond}>
        <li className={s.filterItem}>
          <input
            type="checkbox"
            name="van"
            className={s.filterCheckbox}
          ></input>
          <svg width="40" height="28" className={s.filterCheckboxIcon}>
            <use href="#icon-van"></use>
          </svg>
          <span className={s.filterCheckboxText}>Van</span>
        </li>
        <li className={s.filterItem}>
          <input
            type="checkbox"
            name="fullyIntegrated"
            className={s.filterCheckbox}
          ></input>
          <svg width="40" height="28" className={s.filterCheckboxIcon}>
            <use href="#icon-fully-integrated"></use>
          </svg>
          <span className={s.filterCheckboxText}>Fully Integrated</span>
        </li>
        <li className={s.filterItem}>
          <input
            type="checkbox"
            name="alcove"
            className={s.filterCheckbox}
          ></input>
          <svg width="40" height="28" className={s.filterCheckboxIcon}>
            <use href="#icon-alcove"></use>
          </svg>
          <span className={s.filterCheckboxText}>Alcove</span>
        </li>
      </ul>

      <Button
        type="button"
        onClick={() => console.log(12)}
        className="filterBtn"
        text="Search"
      />
    </div>
  );
}
