import classNames from 'classnames/bind';
import style from './SignIn.module.scss';

import { faEye, faEyeSlash, faLock, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config';
import axios from 'axios';

const cx = classNames.bind(style);

function SignIn() {
  const [Seepass, setSeePass] = useState(false);
  const [value, SetValue] = useState('');
  const [password, SetPassWord] = useState('');
  const [checkLenght, setCheckLenght] = useState(true);
  const [checkPassValid, setCheckPassValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const [rememberAccountToggle, setRememberAccountToggle] = useState(false);

  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const handlesignin = async () => {
    try {
      setLoading(true);
      await axios
        .get('https://movie-api-xzce.onrender.com/login', {
          userName: value,
          userPassword: password,
        })
        .then((acc) => {
          const user = acc.data;
          const auth = user.filter((i, index) => i.userName === value && i.userPassword === password);
          if (auth.length > 0) {
            rememberAccountToggle
              ? localStorage.setItem('current_account', JSON.stringify(auth[0]))
              : sessionStorage.setItem('current_account', JSON.stringify(auth[0]));
            alert('Login success');
            navigate('/');
            window.location.reload();
          } else {
            setLoading(true);
            // alert('Account or Password does not match');
          }
        });
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleRemember = () => {
    setRememberAccountToggle(!rememberAccountToggle);
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

      <div className={cx('table-info')} onKeyUp={(e) => e.keyCode === 13 && handlesignin()}>
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
      </div>

      <div className={cx('account-more')}>
        <label className={cx('remember-login')}>
          <input
            type="checkbox"
            className={cx('remember-toggle')}
            onClick={toggleRemember}
            checked={rememberAccountToggle ? true : false}
          />
          <span className={cx('remember-title')}>Remember me</span>
        </label>

        <div>
          <h5>Need help?</h5>
        </div>
      </div>

      <div className={cx('button')}>
        <div className={cx('create-account')}>
          <span className={cx('link-to-signin')}>
            If you haven't account, continue with{' '}
            <Link to={config.routes.signup} className={cx('link-to-signin-btn')}>
              Sign Up
            </Link>
          </span>
          <button className={cx('create-account-btn')} onClick={handlesignin}>
            {loading ? (
              <span className={cx('loading-icon')}>
                <FontAwesomeIcon icon={faSpinner} />
              </span>
            ) : (
              'Login'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
