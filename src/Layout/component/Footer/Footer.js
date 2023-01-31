import classNames from 'classnames/bind';
import style from './Footer.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <ul className={cx('list')}>
        <li className={cx('item', 'logo-brand')}>
          <h1 className={cx('brand')}>FC</h1>
          <button className={cx('join')}>Join With Us</button>
        </li>
        <li className={cx('item', 'info-brand')}>
          <h3>About Us</h3>
          <Link className={cx('link')}>Information</Link>
          <Link className={cx('link')}>License</Link>
        </li>
        <li className={cx('item', 'legal')}>
          <h3>Terms of Use</h3>
          <Link className={cx('link')}>Terms of Use</Link>
          <Link className={cx('link')}>Privacy Policy</Link>
          <Link className={cx('link')}>Security</Link>
        </li>
        <li className={cx('item', 'social-brand')}>
          <h3>Social </h3>
          <Link className={cx('link')}>FaceBook</Link>
          <Link className={cx('link')}>Instagram</Link>
          <Link className={cx('link')}>Tiktok</Link>
        </li>
        <li className={cx('item', 'contact')}>
          <h3>Suport</h3>
          <Link className={cx('link')}>Contact</Link>
          <Link className={cx('link')}>Email</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
