import css from './Notification.module.css';

export function Notification({ message }) {
  return (
    <div>
      <p className={css.text}>{message}</p>
    </div>
  );
}