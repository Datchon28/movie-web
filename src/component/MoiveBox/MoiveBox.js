import classNames from 'classnames/bind';
import style from './MoiveBox.module.scss';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function MoiveBox({ id, className = 'wrapper', poster, title, genres, vote, vote_on = true }) {
  return (
    <div className={cx(className)} id={id}>
      <div className={cx('interactive')}>{vote_on && <span className={cx('vote')}>{vote * 10 + '%'}</span>}</div>
      <div className={cx('backdrop')}>
        <Link to="/">
          <img className={cx('backdrop-img')} alt="bdrop" src={poster} />
        </Link>
      </div>
      <div className={cx('info-movie')}>
        <span className={cx('title-movie')}>{title}</span>
        <span className={cx('genres-movie')}>{genres}</span>
      </div>
    </div>
  );
}

export default MoiveBox;
