import '../Footer/Footer.scss'
const Footer = () => {
    return (
    <footer className="credits">
      <div className="socials">
        <a
          href="https://github.com/SamFio00"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/samuele-fiorini-38bba9325"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://www.instagram.com/fiorini_sam_00"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <p>©2026 Samuele Fiorini. All rights reserved.</p>
    </footer>
    );
}

export default Footer