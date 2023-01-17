import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './SignUp.module.scss';

const cx = classNames.bind(style);

function SignUp() {
  const [Seepass, setSeePass] = useState(false);

  const handleSeepass = () => {
    setSeePass(!Seepass);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2 className={cx('brand')}>Welcome to</h2>
        <h2>FATCAT Movie</h2>
      </div>

      <div className={cx('table-info')}>
        <label className={cx('name-account')}>
          <span className={cx('title-info')}>Account</span>
          <input className={cx('input')} type="text" placeholder=" 4 charaters minimum" />
        </label>

        <label className={cx('password-account')}>
          <span className={cx('title-info')}>Email</span>
          <input className={cx('input')} type="email" placeholder=" abc@gmail.com" />
        </label>

        <label className={cx('password-account')}>
          <span className={cx('title-info')}>Password {'(6 characters minimum)'}</span>
          <input className={cx('input')} type={Seepass ? 'text' : 'password'} placeholder="6 characters minimum" />
          <span className={cx('see-pass')} onClick={handleSeepass}>
            {Seepass ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </span>
        </label>

        <label className={cx('password-account')}>
          <span className={cx('title-info')}>Password Confirm</span>
          <input className={cx('input')} type={Seepass ? 'text' : 'password'} placeholder="6 characters minimum" />
          <span className={cx('see-pass')} onClick={handleSeepass}>
            {Seepass ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </span>
        </label>
      </div>

      <div className={cx('button')}>
        <div className={cx('check-condition')}>
          <input className={cx('check')} type="checkbox" />
          <span>
            I have read and agree to the FCM <Link className={cx('link-to-terms-of-use')}>terms of use</Link> and{' '}
            <Link className={cx('link-to-privacy')}>privacy policy</Link>.
          </span>
        </div>
        <div className={cx('create-account')}>
          <button className={cx('create-account-btn')}>Create Account</button>
          <span className={cx('link-to-signin')}>
            If you have account, continue with <Link className={cx('link-to-signin-btn')}>Sign In</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
