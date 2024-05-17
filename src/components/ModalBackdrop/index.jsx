import { useLocation, useNavigate } from 'react-router-dom';
import s from './ModalBackdrop.module.css';

import React, { useEffect } from 'react';

export default function ModalBackdrop({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onEscPress = e => {
      if (e.code !== 'Escape') {
        return;
      }

      onModalClose();
    };

    document.addEventListener('keydown', onEscPress);

    return () => {
      document.removeEventListener('keydown', onEscPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onModalClose = () => {
    document.querySelector('body').classList.remove('bodyFixed');
    navigate(location.state?.background);
  };

  const modalWindowContent = () =>
    React.cloneElement(children, {
      onModalClose,
    });

  return (
    <div className={s['backdrop']} onClick={onModalClose}>
      {modalWindowContent()}
    </div>
  );
}
