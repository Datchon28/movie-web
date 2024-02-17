import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCaretDown,
  faCaretRight,
  faFilm,
  faGear,
  faHouse,
  faSignOut,
  faTv,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import config from '../../../config';
import { Fragment, useContext, useState } from 'react';
import { Responsive } from '../../DefaultLayout/DefaultLayout';
import MenuDropDown from './MenuDropDown';

const cx = classNames.bind(style);

function Sidebar({ openonmobile }) {
  const { isTable, isMobile } = useContext(Responsive);
  const [openSidebar, setOpenSibar] = useState(false);
  const [openMenuMovie, setOpenMenuMovie] = useState(false);
  const [openMenuTv, setOpenMenuTv] = useState(false);

  const account =
    JSON.parse(localStorage.getItem('current_account')) || JSON.parse(sessionStorage.getItem('current_account'));

  const handleLogout = () => {
    sessionStorage.removeItem('current_account');
    localStorage.removeItem('current_account');
    window.location = config.routes.home;
  };

  const handleOpenSideBar = () => {
    setOpenSibar(!openSidebar);
  };

  const openMenuItemMovie = () => {
    setOpenMenuMovie(!openMenuMovie);
  };

  const openMenuItemTv = () => {
    setOpenMenuTv(!openMenuTv);
  };

  return (
    <div className={cx('wrapper', openSidebar && 'open-side-bar', openonmobile)}>
      <div className={cx('item')}>
        <div className={cx('brand')}>
          <div className={cx('brand-name')}>
            {isTable ? (
              <span className={cx('menu-for-tablet-and-mobile')} onClick={handleOpenSideBar}>
                <FontAwesomeIcon icon={faBars} />
              </span>
            ) : isMobile ? (
              account ? (
                <div>
                  <img
                    className={cx('account-avar')}
                    alt="anh"
                    src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-png-image_5097430.jpg"
                  />
                  <h3 className={cx('name-user')}>
                    {account.first_Name} {account.last_Name}
                  </h3>
                </div>
              ) : (
                <h1>
                  FAT CAT <br></br> Movie
                </h1>
              )
            ) : (
              <Link to="/">
                <h1>
                  FAT CAT <br></br> Movie
                </h1>
              </Link>
            )}
          </div>
        </div>
        <ul className={cx('menu')}>
          <MenuItem to={config.routes.home} title="Home" icon={<FontAwesomeIcon icon={faHouse} />} />

          <li className={cx('menu-item')}>
            <div className={cx('title-item')} onClick={openMenuItemMovie}>
              <span>
                <FontAwesomeIcon icon={faFilm} className={cx('ml-4', 'mr-3')} /> Movie
              </span>
              <span>
                {openMenuMovie ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretRight} />}
              </span>
            </div>

            <MenuDropDown menuItem={config.routes.moviesChild} visible={openMenuMovie} />
          </li>

          <li className={cx('menu-item')}>
            <div className={cx('title-item')} onClick={openMenuItemTv}>
              <span>
                <FontAwesomeIcon icon={faTv} className={cx('ml-4', 'mr-3')} /> TV Show
              </span>
              <span>
                {openMenuTv ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretRight} />}
              </span>
            </div>

            <MenuDropDown menuItem={config.routes.tvsChild} visible={openMenuTv} />
          </li>

          {/* <MenuItem to={config.routes.popular_movie} title="Movie" icon={<FontAwesomeIcon icon={faFilm} />} /> */}
          {/* <MenuItem to={config.routes.popular_tv} title="TV Show" icon={<FontAwesomeIcon icon={faTv} />} /> */}
          <MenuItem to="/favourite" title="Favourite" icon={<FontAwesomeIcon icon={faHeart} />} />
        </ul>
        <ul className={cx('account')}>
          <div className={cx('account-title')}>
            <h2>Account</h2>
          </div>

          {account ? (
            <MenuItem to={config.routes.your_account} title="Account" icon={<FontAwesomeIcon icon={faUser} />} />
          ) : (
            <MenuItem to={config.routes.signin} title="Login" icon={<FontAwesomeIcon icon={faUser} />} />
          )}
          <MenuItem to="/setting" title="Setting" icon={<FontAwesomeIcon icon={faGear} />} />
        </ul>
        <div className={cx('sign')}>
          <button className={cx('sign-btn')} onClick={handleLogout}>
            {account && (
              <Fragment>
                <span className={cx('sign-icon')}>
                  <FontAwesomeIcon icon={faSignOut} />
                </span>

                <span className={cx('sign-title')}>Logout</span>
              </Fragment>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
