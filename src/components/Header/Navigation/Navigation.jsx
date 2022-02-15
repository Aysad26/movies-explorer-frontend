import './Navigation.css';
import React from 'react';
import UserMenu from '../../UserMenu/UserMenu';
import FilmsMenu from '../../FilmsMenu/FilmsMenu';
import MobileMenu from '../../MobileMenu/MobileMenu';

function Navigation({loggedIn, windowWidth}) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);

  function handleMenuClick() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  return (
    <nav className='nav'>
      <div className='nav__empty-object'></div>
      {(loggedIn && windowWidth > 768) && <FilmsMenu />}
      {(loggedIn && windowWidth > 768) && <UserMenu loggedIn={loggedIn} />}
      {(loggedIn && windowWidth <= 768) && <button className='nav__menu' onClick={handleMenuClick}/>}
      {!loggedIn && <UserMenu loggedIn={loggedIn} />}
      <MobileMenu loggedIn={loggedIn} handleMenuClick={handleMenuClick} isMobileMenuOpened={isMobileMenuOpened} />
    </nav>
  )
}

export default Navigation;
