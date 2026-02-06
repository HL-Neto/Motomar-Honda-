"use client";

import styles from "@/app/styles/footer.module.css";

import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© 2026 MotoMar Honda. Todos os direitos reservados.</p>

        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/company/honda-motomar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/motomarhondapb/?locale=pt_BR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/motomar.honda/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
