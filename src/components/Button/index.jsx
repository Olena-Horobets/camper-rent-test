import s from './Button.module.css';

export default function Button({ type, text, className, onClick }) {
  return (
    <button type={type} onClick={onClick ?? onClick} className={s[className]}>
      {text}
    </button>
  );
}
