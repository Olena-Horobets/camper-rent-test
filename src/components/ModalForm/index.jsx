import Button from 'components/Button';
import s from './ModalForm.module.css';

import { ReactComponent as ReactSprite } from 'images/icons.svg';
import { useState } from 'react';

export default function ModalForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setDate('');
    setComment('');
  };

  const onFormSubmit = e => {
    e.preventDefault();
    resetForm();
  };

  return (
    <div className={s.modalFormWrapper}>
      <ReactSprite />
      <p className={s.modalFormTitle}>Book your campervan now</p>
      <p className={s.modalFormSubtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name" className={s.formLabel}>
          <input
            id="name"
            name="name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            className={s.formInput}
            pattern="\w{2,22}"
            required
          />
          {!name && <span className={s.formLabelText}>Name</span>}
        </label>
        <label htmlFor="email" className={s.formLabel}>
          <input
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            className={s.formInput}
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
            required
          />
          {!email && <span className={s.formLabelText}>Email</span>}
        </label>
        <label htmlFor="date" className={s.formLabel}>
          <input
            id="date"
            name="date"
            value={date}
            onChange={e => setDate(e.currentTarget.value)}
            className={s[date ? 'formDateInput' : 'formDateInputEmpty']}
            type="date"
            required
          ></input>
          {!date && <span className={s.formLabelText}>Booking date</span>}
          <svg width="20" height="20" className={s.formDateIcon}>
            <use href="#icon-calendar"></use>
          </svg>
        </label>
        <label htmlFor="comment" className={s.formCommentLabel}>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={e => setComment(e.currentTarget.value)}
            className={s.formCommentInput}
          />
          {!comment && <span className={s.formLabelText}>Comment</span>}
        </label>

        <Button type="submit" className="formBtn" text="Send" />
      </form>
    </div>
  );
}
