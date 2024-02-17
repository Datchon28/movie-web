import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';

import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);

function MenuDropDown({ menuItem, visible }) {
  return (
    <ul className={cx('menu-item-child', visible && 'openMenuuu')}>
      {menuItem?.map((item, index) => (
        <MenuItemChild key={index} title={item.label} to={item.link} />
      ))}
    </ul>
  );
}

function MenuItemChild({ title, to }) {
  return (
    <NavLink to={to} end className={(nav) => cx('', { active: nav.isActive })}>
      <li>{title}</li>
    </NavLink>
  );
}

export default MenuDropDown;
