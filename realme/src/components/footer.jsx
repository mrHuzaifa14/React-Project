
import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Recommended Section */}
        <div className="footer-column">
          <h4 className="footer-heading">Recommended</h4>
          <ul className="footer-list">
            <li className="footer-item">realme C75</li>
            <li className="footer-item">realme 13+ 5G</li>
            <li className="footer-item">realme Note 60</li>
            <li className="footer-item">realme C61</li>
            <li className="footer-item">realme C65</li>
            <li className="footer-item">realme 12</li>
            <li className="footer-item">realme 12+ 5G</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-column">
          <h4 className="footer-heading">Support</h4>
          <ul className="footer-list">
            <li className="footer-item">FAQ</li>
            <li className="footer-item">Troubleshooting</li>
          </ul>
        </div>

        {/* About Section */}
        <div className="footer-column">
          <h4 className="footer-heading">About realme</h4>
          <ul className="footer-list">
            <li className="footer-item">Our Brand</li>
            <li className="footer-item">Newsroom</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact realme</h4>
          <ul className="footer-list">
            <li className="footer-item">Whatsapp</li>
            <li className="footer-item">service.pk@realme.com</li>
          </ul>
        </div>

        {/* Contact Number and Socials */}
        <div className="footer-contact">
          <h4 className="footer-contact-number">04238048018</h4>
          <p className="footer-timing">09:30 - 18:00, MON - SAT</p>
          <p className="footer-exclude">Exclude Holidays</p>
          <div className="footer-socials">
            <i className="fab fa-facebook footer-icon"></i>
            <i className="fab fa-twitter footer-icon"></i>
            <i className="fab fa-youtube footer-icon"></i>
            <i className="fab fa-instagram footer-icon"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Pakistan (English / PKR) © 2019-2024 realme. All Rights Reserved.</p>
        <p>
          <a href="#" className="footer-link">User Agreement</a> | 
          <a href="#" className="footer-link">Privacy Policy</a> | 
          <a href="#" className="footer-link">Terms of Sales</a> | 
          <a href="#" className="footer-link">Warranty Terms</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
