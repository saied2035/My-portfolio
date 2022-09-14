import './contactSection.css';
import ContactForm from './contactForm/contactForm';
import SocialMedia from './socialMedia/socialMedia';

const ContactSection = () => (
  <section
    className="w-100 flex flex-column items-center"
    id="contact"
    style={{ boxShadow: '1px 1px 0.5rem #766C7F', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
  >
    <p className="f2 tc w-100 mb0 mt5 b" style={{ color: '  ' }}>Contact Form</p>
    <p className="f4 w-100 tc" style={{ color: '#766C7F' }}>Feel free to send me a message</p>
    <ContactForm />
    <SocialMedia />
  </section>
);
export default ContactSection;
