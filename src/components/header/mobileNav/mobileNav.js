import '../nav.css';
import { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import navItems from '../navItems';

const MobileNav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav
      className="dn-ns flex flex-column w-auto fixed vh-100"
      style={{ gap: '0.5rem', backgroundColor: `${menu ? '#f2f4f3' : ''}` }}
    >
      <AiOutlineMenuUnfold
        className="dn-ns"
        onClick={() => setMenu(!menu)}
        style={{
          transition: 'transform 0.75s, margin 0.75s',
          transform: `${menu ? 'rotate(180deg)' : ''}`,
          marginLeft: `${menu ? '80%' : '0%'}`,
          color: '#0a0908',
        }}
      />
      <ul
        className="list pa0 ma0 w-100 flex flex-column items-center"
        style={{
          transition: '0.75s',
          overflow: 'hidden',
          width: `${menu ? '80px' : '0'}`,
          gap: '1rem',
        }}
      >
        {
           navItems.map((item) => (
             <li key={item}>
               <a
                 className="mobile-nav-item db fw6 pa1 br3"
                 href={`#${item.toLowerCase()}`}
                 onClick={() => setMenu(!menu)}
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
export default MobileNav;
