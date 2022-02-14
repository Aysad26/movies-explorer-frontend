import React from 'react';
import { Link } from 'react-router-dom';
import './UserMenu.css';

function UserMenu({loggedIn}) {
  return (
    <ul className='user__menu'>
      <li className={loggedIn ? 'user__menu-item user__menu-item_login' : 'user__menu-item'}>
        <Link to={loggedIn ? '/profile' : 'signup'} className={loggedIn ? 'user__button-account' : 'user__button-signup'}>{loggedIn ? 'Аккаунт' : 'Регистрация'}</Link>
      </li>
      <li className={loggedIn ? 'user__menu-item user__menu-item_login' : 'user__menu-item'}>
        <Link to='signin' className={loggedIn ? 'user__link user__link_login' : 'user__link'}>
          <button className='user__button-signin'>Войти</button>
        </Link>
      </li>
    </ul>
  )
}

export default UserMenu;
