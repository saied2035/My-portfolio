import './contactSection.css';
import ContactForm from './contactForm/contactForm';

const ContactSection = () => (
  <section
    className="w-100 flex flex-column items-center"
    id="contact"
    style={{ boxShadow: '1px 1px 0.5rem #766C7F', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
  >
    <ContactForm />
  </section>
);
export default ContactSection;
