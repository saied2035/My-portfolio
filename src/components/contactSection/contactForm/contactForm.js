const ContactForm = () => {
  const endPoint = 'https://public.herotofu.com/v1/08e32500-3408-11ed-9de0-b73c4b901972';
  return (
    <form className="contact-form mt3 w-70 flex flex-wrap justify-center" action={endPoint} method="post">
      <input
        className="w-100 br3 pa3"
        type="text"
        placeholder="Name"
        style={{ marginRight: 'auto' }}
        required
      />
      <input
        className="ww-100 br3 pa3"
        type="email"
        placeholder="Email"
        style={{ marginLeft: 'auto' }}
        required
      />
      <input className="w-100 br3 pa3" placeholder="Subject" type="text" required />
      <textarea className="w-100 br3 pa3" placeholder="Message" required />
      <div className="flex flex-row-ns flex-column justify-center" style={{ gap: '0.5rem 1rem' }}>
        <input
          className="submit-btn pointer pa2 pl3 pr3 br3 tc b--none center f4 fw6"
          type="submit"
          value="Send Message"
        />
        <input
          className="reset-btn pointer pa2 pl3 pr3 br3 tc b--none center f4 fw6"
          type="reset"
          value="Clear Form"
        />
      </div>
    </form>
  );
};

export default ContactForm;
