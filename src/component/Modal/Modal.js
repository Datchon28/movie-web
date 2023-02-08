import classNames from 'classnames/bind';
import style from './Modal.module.scss';

import { useState } from 'react';

const cx = classNames.bind(style);

function Modal({ children }) {
  const [closeModal, setCloseModal] = useState(false);

  const handleCLoseModal = () => {
    setCloseModal(!closeModal);
  };

  return (
    <div className={cx('wrapper', closeModal && 'close')}>
      <div className={cx('modal-content')}>
        {children}
        <div className={cx('close-modal')}>
          <button className={cx('close-btn')} onClick={handleCLoseModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
