import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';

import Sidebar from '../component/Sidebar/Sidebar';
import Header from '../component/Header/Header';
import SideBarExtra from '../component/SideBarExtra/SideBarExtra';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx('main')}>
      <Sidebar />
      <div className={cx('container')}>
        <Header />
        <div className={cx('content')}>{children}</div>
      </div>
      <SideBarExtra />
    </div>
  );
}

export default DefaultLayout;
