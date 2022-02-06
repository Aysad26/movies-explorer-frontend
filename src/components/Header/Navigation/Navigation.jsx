import './Navigation.css';
import {NavLink} from "react-router-dom";
import {useState} from "react";

function Navigation() {
  const [isNavOpened, setIsNavOpened] = useState(false);                                        

  function handleNavClick() {
    setIsNavOpened(!isNavOpened);
  }

  function handleOffNavClick() {
    setIsNavOpened(false);
  }

  return (
    <>
      {/* Тут закомментировал пока */}
      {/*<nav className='nav guest'>
        <ul className='nav__list'>
          <li>
            <NavLink className='nav__guest-link' to='/signup'>Регистрация</NavLink>
          </li>
          <li>
            <NavLink className='nav__guest-link nav__guest-link_green' to='/signin'>Войти</NavLink>
         </li>
      </ul>
  </nav>*/}

      {/* Меню авторизованного пользователя */}
      <button type='button' className={`nav-btn ${isNavOpened && 'nav-btn_close'}`} onClick={handleNavClick}/>
      <nav className={`nav ${isNavOpened && 'nav__mobile'}`}>
        <div activeClassName='nav__empty-object'></div>
        <ul className={`nav__list ${isNavOpened && 'nav__list_mobile'}`}>
          <li><NavLink activeClassName='nav__link_active' onClick={handleOffNavClick}
                       className={`nav__link ${isNavOpened && 'nav__link_mobile'}`} to='/movies'>Фильмы</NavLink></li>
          <li><NavLink activeClassName='nav__link_active' onClick={handleOffNavClick}
                       className={`nav__link ${isNavOpened && 'nav__link_mobile'}`} to='/saved-movies'>Сохраненные
            фильмы</NavLink></li>
        </ul>
        <ul className={`nav__list ${isNavOpened && 'nav__list_mobile'}`}>
          <li>
            <NavLink
              activeClassName='nav__link-account'
              onClick={handleOffNavClick}
              className={`nav__link-account ${isNavOpened && 'nav__link_mobile'}`}
              to='/profile'>
                Аккаунт 
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation;
