import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* HEADER */}
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We’re here to answer your questions</p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="contact-container">

        {/* INFO CARD */}
        <div className="card info-card">
          <h3>Contact Information</h3>
          <div className="info-item">
            <span>📍</span>
            <p>Port Harcourt, Nigeria</p>
          </div>
          <div className="info-item">
            <span>📞</span>
            <p>+234 XXX XXX XXXX</p>
          </div>
          <div className="info-item">
            <span>📧</span>
            <p>school@email.com</p>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="card form-card">
          <h3>Send a Message</h3>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

      {/* WHATSAPP BUTTON */}
      <div className="whatsapp-container">
        <a
          href="https://wa.me/2347049597698"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          💬 Chat on WhatsApp
        </a>
      </div>

    </div>
  );
}

export default Contact;