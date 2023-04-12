import classNames from 'classnames/bind';
import style from './Settings.module.scss';

const cx = classNames.bind(style);

function Settings() {
  return (
    <div className={cx('wrapper')}>
      <ul>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Security</li>
        <li></li>
      </ul>
    </div>
  );
}

export default Settings;
