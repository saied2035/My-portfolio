import { useState } from 'react';
import '../nav.css';
import navItems from '../navItems';

const DesktopNav = () => {
  const hideNavStyle = {
    transition: '0.25s',
    opacity: '0',
    backgroundColor: '#f2f4f3',
    overflow: 'hidden',
    border: 'none',
    top: '0',
  };
  const showNavStyle = {
    transition: '1.5s',
    opacity: '1',
    backgroundColor: '#f2f4f3',
    overflow: 'hidden',
    top: '0',
  };
  const [timer, setTimer] = useState(null);
  const [scrollValue, setScrollValue] = useState(0);
  const [hideNav, setHideNav] = useState(false);
  const hideNavFun = () => {
    if (window.pageYOffset < scrollValue) {
      setScrollValue(window.pageYOffset);
      return;
    }
    setScrollValue(window.pageYOffset);
    if (timer) {
      clearTimeout(timer);
    }
    setTimeout(() => {
      setTimer(null);
      setHideNav(false);
    }, 500);
    if (!hideNav) setHideNav(true);
  };
  window.onscroll = hideNavFun;
  return (
    <nav
      className="desktop-nav dn flex-ns flex-m justify-center w-100 fixed"
      style={hideNav ? hideNavStyle : showNavStyle}
    >
      <ul className="list flex" style={{ gap: '3rem' }}>
        {
      navItems.map((item) => (
        <li key={item}>
          <a
            className="nav-item db fw6 pa1 pl2 pr2 br3 grow"
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </a>
        </li>
      ))
      }
      </ul>
    </nav>
  );
};

export default DesktopNav;
