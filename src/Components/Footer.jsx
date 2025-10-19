import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Gym. Todos os direitos reservados.</p>
      <div className="socials">
        <a href="/#" aria-label="Instagram">
          Instagram
        </a>
        <a href="/#" aria-label="Facebook">
          Facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer;