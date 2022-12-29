import classNames from 'classnames/bind';
import style from './SideBarExtra.module.scss';

import NowPlaying from '../../../pages/Home/Movie/NowPlaying/NowPlaying';

const cx = classNames.bind(style);

function SideBarExtra() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('account')}>
        <span className={cx('name')}>User</span>
        <img
          className={cx('account-avar')}
          alt="anh"
          src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-png-image_5097430.jpg"
        />
      </div>

      <div className={cx('container')}>
        <div className={cx('content')}>
          <NowPlaying />
        </div>
      </div>
    </div>
  );
}

export default SideBarExtra;
