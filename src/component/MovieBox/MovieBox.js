import classNames from 'classnames/bind';
import style from './MovieBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import config from '../../config';
import { useDispatch } from 'react-redux';
import { updateIdWatchlist } from '../../store/IdStore';
import TippyNote from '../TippyNote/TippyNote';

const cx = classNames.bind(style);

function MoiveBox({ id, className = 'wrapper', poster, title, genres, to, interactive = true }) {
  const itemRef = useRef();
  const [openMenuChild, setOpenMenuChild] = useState(false);

  const dispatch = useDispatch();

  const handleGetIdForDetail = () => {
    const id = itemRef.current.id;
    localStorage.setItem('id_detail', JSON.stringify(id));
  };

  const handleGetIdWatchList = () => {
    const id = itemRef.current.id;
    dispatch(updateIdWatchlist(id));
  };

  const handleOpenMenuChild = () => {
    setOpenMenuChild(!openMenuChild);
  };

  return (
    <div className={cx(className)} ref={itemRef} id={id}>
      <div className={cx('backdrop')}>
        <Link className={cx('link-movie')} to={config.routes.movies + `${id}`} onClick={handleGetIdForDetail}>
          <img className={cx('backdrop-img')} alt="bdrop" src={poster} />
        </Link>
        {interactive && (
          <div className={cx('interactive')}>
            <div className={cx('menu-child')}>
              <button className={cx('menu-child-btn')} onClick={handleOpenMenuChild}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>

              {openMenuChild && (
                <div className={cx('menu-small')}>
                  <ul className={cx('menu-small-list')}>
                    <li className={cx('menu-small-item')}>Optionnnnnnnn</li>
                    <li className={cx('menu-small-item')}>Optionnnnnnnn</li>
                    <li className={cx('menu-small-item')}>Optionnnnnnnn</li>
                  </ul>
                </div>
              )}
            </div>
            <div className={cx('add-list')}>
              <TippyNote note="Save to your watchlist">
                <button className={cx('add-list-btn')} onClick={handleGetIdWatchList}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </TippyNote>
            </div>
          </div>
        )}
      </div>
      <div className={cx('info-movie')}>
        <span className={cx('title-movie')}>{title}</span>
        <span className={cx('genres-movie')}>{genres}</span>
      </div>
    </div>
  );
}

export default MoiveBox;
