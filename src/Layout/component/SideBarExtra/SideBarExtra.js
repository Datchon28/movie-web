import classNames from 'classnames/bind';
import style from './SideBarExtra.module.scss';

import NowPlaying from '../../../pages/Home/Movie/NowPlaying/NowPlaying';
import WatchList from './WatchList/WatchList';

const cx = classNames.bind(style);

function SideBarExtra() {
  const account = JSON.parse(localStorage.getItem('account'));

  // console.log(account[0].username);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('account')}>
        <span className={cx('name')}>{!account ? 'Username' : account.username}</span>
        <img
          className={cx('account-avar')}
          alt="anh"
          src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-png-image_5097430.jpg"
        />
      </div>

      <div className={cx('container')}>
        <div className={cx('content')}>
          <NowPlaying />
          <div className={cx('watch-list')}>
            <WatchList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarExtra;
