import SocialMediaList from './socialMediaList/socialMediaList';
import Resume from './resume/resume';

const Footer = () => (
  <>
    <hr className="w-70 bg-black ma5" />
    <h2 className="f2 mt0">My Resume ...</h2>
    <Resume />
    <h2 className="f2">Find me on ...</h2>
    <SocialMediaList />
    <hr className="w-70 bg-black ma5" />
  </>
);

export default Footer;
