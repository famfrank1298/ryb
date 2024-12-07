import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-left">
          <p>© 2024 RYB Premier LLC | Chicago, IL</p>
        </div>
        <div className="footer-middle">
          <ul className="quick-links">
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/consultation">Book Now</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <p>Follow Us</p>
          <a
            href="https://www.instagram.com/RYBPREMIERLLC"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 RYB Premier LLC | All rights reserved</p>
      </div>
    </div>
  );
}
