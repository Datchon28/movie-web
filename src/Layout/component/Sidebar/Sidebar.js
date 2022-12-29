import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilm,
  faGear,
  faHouse,
  faSignIn,
  faSignOut,
  faTv,
  faUser,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import config from '../../../config';

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('item')}>
        <div className={cx('brand')}>
          <div className={cx('brand-name')}>
            <Link to="/">
              <h1>FAT CAT</h1>
            </Link>
          </div>
        </div>
        <ul className={cx('menu')}>
          <MenuItem to={config.routes.home} title="Home" icon={<FontAwesomeIcon icon={faHouse} />} />
          <MenuItem to={config.routes.popular_movie} title="Movie" icon={<FontAwesomeIcon icon={faFilm} />} />
          <MenuItem to={config.routes.popular_tv} title="TV Show" icon={<FontAwesomeIcon icon={faTv} />} />
          <MenuItem to="/favourite" title="Favourite" icon={<FontAwesomeIcon icon={faHeart} />} />
        </ul>
        <ul className={cx('account')}>
          <div className={cx('account-title')}>
            <h2>Account</h2>
          </div>
          <MenuItem to="/signout" title="New Account " icon={<FontAwesomeIcon icon={faUserPlus} />} />
          <MenuItem to="/signin" title="Sign In" icon={<FontAwesomeIcon icon={faUser} />} />
          <MenuItem to="/setting" title="Setting" icon={<FontAwesomeIcon icon={faGear} />} />
        </ul>
        <div className={cx('sign')}>
          <button className={cx('sign-btn')}>
            <span className={cx('sign-icon')}>
              <FontAwesomeIcon icon={faSignOut} />
            </span>

            <span className={cx('sign-title')}>LogOut</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
