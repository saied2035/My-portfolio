import navItems from '../navItems';

const DesktopNav = () => (
  <nav className="dn db-ns ">
    <ul className="list">
      {
      navItems.map((item) => (
        <li key={item}>
          <a
            className="db"
            style={{ color: 'black', backgroundColor: 'transparent', textDecoration: 'none' }}
            href={`#${item}`}
          >
            {item}
          </a>
        </li>
      ))
      }
    </ul>
  </nav>
);

export default DesktopNav;
