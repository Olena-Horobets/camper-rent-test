import Button from 'components/Button';
import s from './ModalForm.module.css';

import { ReactComponent as ReactSprite } from 'images/icons.svg';

export default function ModalForm() {
  return (
    <div className={s.modalFormWrapper}>
      <ReactSprite />
      <p className={s.modalFormTitle}>Book your campervan now</p>
      <p className={s.modalFormSubtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form>
        <label htmlFor="name" className={s.formLabel}>
          <input
            id="name"
            name="name"
            className={s.formInput}
            placeholder="Name"
          />
          {/* <span className={s.formLabelText}>Name</span> */}
        </label>
        <label htmlFor="email" className={s.formLabel}>
          <input
            id="email"
            name="email"
            className={s.formInput}
            placeholder="Email"
          />
          {/* <span className={s.formLabelText}>Email</span> */}
        </label>
        <label htmlFor="date" className={s.formLabel}>
          <input
            id="date"
            name="date"
            className={s.formDateInput}
            type="date"
          ></input>
          {/* <span className={s.formLabelText}>Booking date</span> */}
          <svg width="20" height="20" className={s.formDateIcon}>
            <use href="#icon-calendar"></use>
          </svg>
        </label>
        <label htmlFor="comment" className={s.formCommentLabel}>
          <textarea
            id="comment"
            name="comment"
            className={s.formCommentInput}
            placeholder="Comment"
          />
          {/* <span className={s.formLabelText}>Comment</span> */}
        </label>

        <Button
          type="submit"
          onClick={() => console.log(12)}
          className="formBtn"
          text="Send"
        />
      </form>
    </div>
  );
}
