import s from './ModalBackdrop.module.css';

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ModalBackdrop({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onEscPress = e => {
      if (e.code !== 'Escape') {
        return;
      }

      closeModal();
    };

    document.addEventListener('keydown', onEscPress);

    return () => {
      document.removeEventListener('keydown', onEscPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeModal = () => {
    document.querySelector('body').classList.remove('bodyFixed');
    navigate(location.state?.background);
  };

  const onModalClose = e => {
    if (e.target !== e.currentTarget) return;
    closeModal();
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
