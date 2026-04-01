import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-clay">
      {/* About Section */}
      <div className="footer-section footer-about">
        <h2>Opendoors International School</h2>
        <p>© 2026 Opendoors International School. All rights reserved.</p>
        <p>
          Building future leaders through discipline, innovation, and excellence.
        </p>
      </div>

      {/* Quick Links */}
      <div className="footer-section footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/admissions">Admissions</a></li>
        </ul>
      </div>

      {/* Courses */}
      <div className="footer-section footer-courses">
        <h3>Courses</h3>
        <ul>
          <li><a href="/courses/science">Science</a></li>
          <li><a href="/courses/arts">Arts</a></li>
          <li><a href="/courses/commerce">Commerce</a></li>
          <li><a href="/courses/ict">ICT</a></li>
        </ul>
      </div>

      {/* Contact & Social Media */}
      <div className="footer-section footer-contact">
        <h3>Contact Us</h3>
        <p><FaMapMarkerAlt /> No 24 Alcon Road Woji Port-Harcout,Rivers State</p>
        <p><FaPhone /> +234 456 7890</p>
        <p><FaEnvelope /> info@opendoors.edu</p>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;