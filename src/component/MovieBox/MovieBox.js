import classNames from 'classnames/bind';
import style from './MovieBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const cx = classNames.bind(style);

function MoiveBox({ id, className = 'wrapper', poster, title, genres, to }) {
  const itemRef = useRef();

  return (
    <div className={cx(className)} ref={itemRef} id={id}>
      <div className={cx('backdrop')}>
        <Link className={cx('link-movie')} to={to}>
          <img className={cx('backdrop-img')} alt="bdrop" src={poster} />
        </Link>
        <div className={cx('interactive')}>
          <div className={cx('menu-child')}>
            <button className={cx('menu-child-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
          <div className={cx('add-list')}>
            <button className={cx('add-list-btn')}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
      <div className={cx('info-movie')}>
        <span className={cx('title-movie')}>{title}</span>
        <span className={cx('genres-movie')}>{genres}</span>
      </div>
    </div>
  );
}

export default MoiveBox;
