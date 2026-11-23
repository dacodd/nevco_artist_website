
import './Footer.css';
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2026 Nevzat Çopur</p>
        <div className="social-links">
          <a href="https://instagram.com/_nevzatcopur_/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/nevzat.copur.9/" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:nevzat.copur@icloud.com" title="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;