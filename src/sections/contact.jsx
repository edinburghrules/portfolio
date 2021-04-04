import "../styles/contact/contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__header">
        <span className="contact__header-title">Contact</span>
        <p className="contact__header-p">
          If you'd like to get in touch with me, please use the contact form and
          I'll respond the same day.
        </p>
      </div>
      <div className="contact__content">
        <form
          id="contact"
          className="contact__form"
          action="https://formsubmit.co/your@email.com"
          method="POST"
        >
          <input
            className="contact__input"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <input
            className="contact__input"
            type="text"
            name="name"
            placeholder="Full name"
            required
          />
          <textarea
            className="contact__textarea"
            type="textarea"
            rows="12"
            name="message"
            placeholder="Type your message"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
