import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';

import Sidebar from '../component/Sidebar/Sidebar';
import Header from '../component/Header/Header';
import SideBarExtra from '../component/SideBarExtra/SideBarExtra';
import Footer from '../component/Footer/Footer';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  return (
    <div className={cx('main')}>
      <Sidebar />
      <div className={cx('container')}>
        <Header />
        <div className={cx('content')}>
          {children}
          <div className={cx('footer')}>
            <Footer />
          </div>
        </div>
      </div>
      <SideBarExtra />
    </div>
  );
}

export default DefaultLayout;
