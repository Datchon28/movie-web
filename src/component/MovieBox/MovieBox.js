import classNames from 'classnames/bind';
import style from './MovieBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import config from '../../config';
import { useDispatch } from 'react-redux';
import { updateId } from '../../store/IdStore';
import TippyNote from '../TippyNote/TippyNote';

const cx = classNames.bind(style);

function MoiveBox({ id, className = 'wrapper', poster, title, genres, to, interactive = true }) {
  const itemRef = useRef();
  const { idItem } = useParams();

  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState();

  const handleGetId = () => {
    const id = itemRef.current.id;
    dispatch(updateId(id));
    setCurrentId(id);
  };

  useEffect(() => {}, [currentId]);

  return (
    <div className={cx(className)} ref={itemRef} id={id}>
      <div className={cx('backdrop')}>
        <Link className={cx('link-movie')} to={config.routes.movies + `${id} - ` + title} onClick={handleGetId}>
          <img className={cx('backdrop-img')} alt="bdrop" src={poster} />
        </Link>
        {interactive && (
          <div className={cx('interactive')}>
            <div className={cx('menu-child')}>
              <button className={cx('menu-child-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
            <div className={cx('add-list')}>
              <TippyNote note="Save to your watchlist">
                <button className={cx('add-list-btn')} onClick={handleGetId}>
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
