import classNames from 'classnames/bind';
import style from './Modal.module.scss';

import { useState } from 'react';

const cx = classNames.bind(style);

function Modal({ children, customeCloseBtn = true }) {
  const [closeModal, setCloseModal] = useState(false);

  const handleCLoseModal = () => {
    setCloseModal(!closeModal);
  };

  return (
    <div className={cx('wrapper', closeModal && 'close')}>
      <div className={cx('modal-content')} onClick={handleCLoseModal}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
