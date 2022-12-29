import classNames from 'classnames/bind';
import style from './Header.module.scss';

import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from './Search/Search';

const cx = classNames.bind(style);

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Search />

        <div className={cx('user')}>
          <div className={cx('notice')}>
            <button className={cx('notice-icon')}>
              <FontAwesomeIcon icon={faBell} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
