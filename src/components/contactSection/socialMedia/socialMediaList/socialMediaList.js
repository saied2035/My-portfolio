import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';
import links from './mediaLinks';

const SocialMediaList = () => (
  <ul className="list flex justify-center pa0 mb0" style={{ gap: '2rem' }}>
    <li>
      <a className="f2" href={links[0]} target="_blank" rel="noreferrer">
        <AiFillLinkedin className="social-link" />
      </a>
    </li>
    <li>
      <a className="f2" href={links[1]} target="_blank" rel="noreferrer">
        <FaAngellist className="social-link" />
      </a>
    </li>
    <li>
      <a className="f2" href={links[2]} target="_blank" rel="noreferrer">
        <AiFillTwitterSquare className="social-link" />
      </a>
    </li>
    <li>
      <a className="f2" href={links[3]} target="_blank" rel="noreferrer">
        <AiFillGithub className="social-link" />
      </a>
    </li>
  </ul>
);

export default SocialMediaList;
