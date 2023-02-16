import classNames from 'classnames/bind';
import style from './SignUp.module.scss';

import { faEnvelope, faEye, faEyeSlash, faLeaf, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';

const cx = classNames.bind(style);

function SignUp() {
  const [Seepass, setSeePass] = useState(false);
  const [value, SetValue] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassWord] = useState('');
  const [checkEmailValid, setCheckEmailValid] = useState(true);
  const [checkLenght, setCheckLenght] = useState(true);
  const [checkPassValid, setCheckPassValid] = useState(true);

  const signup_info = [
    {
      username: value,
      password: password,
      email: email,
    },
  ];
  const setjson = JSON.stringify(signup_info);

  const handleSubmit = () => {
    localStorage.setItem('account', setjson);
  };

  const handleSeepass = () => {
    setSeePass(!Seepass);
  };

  // Rules
  const checkLength = (e) => {
    const value = e.target.value;
    SetValue(value);
    if (value.length >= 4 || value.length === 0) {
      setCheckLenght(true);
    } else {
      setCheckLenght(false);
    }
  };

  const checkValidEmail = (e) => {
    const valueEmail = e.target.value;
    SetEmail(valueEmail);
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (valueEmail.match(valid) || valueEmail.length === 0) {
      setCheckEmailValid(true);
    } else {
      setCheckEmailValid(false);
    }
  };

  const checkPassWord = (e) => {
    const valuePass = e.target.value;
    SetPassWord(valuePass);
    const validPass = /^[A-Za-z]\w{7,14}$/;

    if (valuePass.match(validPass) || valuePass.length === 0) {
      setCheckPassValid(true);
    } else {
      setCheckPassValid(false);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h2 className={cx('brand')}>Welcome to</h2>
        <h2>FATCAT Movie</h2>
      </div>

      <div className={cx('table-info')}>
        <label className={cx('name-account')}>
          <span className={cx('title-info')}>Username</span>
          <input
            onChange={checkLength}
            value={value}
            className={cx('input')}
            type="text"
            placeholder=" 4 charaters minimum"
          />
          <span className={cx('icon', checkLenght === false && 'icon-fixed')}>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className={cx('alert-error')}>{checkLenght === false && 'invalid (at least 4 charaters minimum)'}</span>
        </label>

        <label className={cx('email-account')}>
          <span className={cx('title-info')}>Email</span>
          <input
            onChange={checkValidEmail}
            value={email}
            className={cx('input')}
            type="email"
            placeholder=" abc@gmail.com"
          />
          <span className={cx('icon', checkEmailValid === false && 'icon-fixed')}>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className={cx('alert-error')}>{checkEmailValid === false && 'invalid Email'}</span>
        </label>

        <label className={cx('password-account')}>
          <span className={cx('title-info')}>Password {'(6 characters minimum)'}</span>
          <input
            value={password}
            onChange={checkPassWord}
            className={cx('input')}
            type={Seepass ? 'text' : 'password'}
            placeholder="6 characters minimum"
          />
          <span className={cx('see-pass', checkPassValid === false && 'see-fixed')} onClick={handleSeepass}>
            {Seepass ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </span>
          <span className={cx('icon', checkPassValid === false && 'icon-fixed')}>
            <FontAwesomeIcon icon={faLock} />
          </span>
          <span className={cx('alert-error')}>{checkPassValid === false && 'invalid Password'}</span>
        </label>

        <label className={cx('password-account')}>
          <span className={cx('title-info')}>Password Confirm</span>
          <input className={cx('input')} type={Seepass ? 'text' : 'password'} placeholder="6 characters minimum" />
          <span className={cx('see-pass')} onClick={handleSeepass}>
            {Seepass ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </span>
          <span className={cx('icon')}>
            <FontAwesomeIcon icon={faLock} />
          </span>
          {/* <span className={cx('alert-error')}>
            {checkPassValid === false && 'Password Confirm does not match Your PassWord'}
          </span> */}
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
          <input className={cx('create-account-btn')} type="submit" value="Create Account" onClick={handleSubmit} />
          <span className={cx('link-to-signin')}>
            If you have account, continue with{' '}
            <Link to={config.routes.signin} className={cx('link-to-signin-btn')}>
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
