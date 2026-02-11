import Image from "next/image"
import styles from "@/app/styles/menu.module.css"

import banner50anos from "@/app/assets/WhatsApp Image 2026-02-03 at 11.12.27.jpeg"

export default function Hero() {
  return (
    <div className={styles.menu}>
      <Image
        src={banner50anos}
        alt="Motomar 50 anos Honda"
        className={styles.banner}
        priority
      />

      <nav>
        <ul className={styles.nav}>
          <li>
            <a href="#home">Home</a>
          </li>

          {/* MODELOS */}
          <li className={styles.dropdown}>
            <button
              type="button"
              className={styles.dropdownTrigger}
              aria-expanded="false"
              aria-haspopup="true"
            >
              Modelos
              <span className={styles.arrow} aria-hidden="true">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <ul className={styles.dropdownMenu}>
              <li>
                <a
                  href="/modelos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adventure
                </a>
              </li>
              <li><a href="/modelos?categoria=street">Street</a></li>
              <li><a href="/modelos?categoria=off-road">Off Road</a></li>
              <li><a href="/modelos?categoria=sport">Sport</a></li>
              <li><a href="/modelos?categoria=touring">Touring</a></li>
            </ul>
          </li>

          <li>
            <a href="#financiamento">Financiamento</a>
          </li>

          <li>
            <a href="#consorcio">Consórcio</a>
          </li>

          <li>
            <a href="#oficina">Oficina</a>
          </li>

          {/* SERVIÇOS HONDA */}
          <li className={styles.dropdown}>
            <button
              type="button"
              className={styles.dropdownTrigger}
              aria-expanded="false"
              aria-haspopup="true"
            >
              Serviços Honda
              <span className={styles.arrow} aria-hidden="true">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <ul className={styles.dropdownMenu}>
              <li>
                <a
                  href="https://www.honda.com.br/motos/honda-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Honda Store
                </a>
              </li>
              <li>
                <a
                  href="https://www.honda.com.br/pecas/motos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Peças e Acessórios
                </a>
              </li>
              <li>
                <a
                  href="https://www.honda.com.br/recall"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recall
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
