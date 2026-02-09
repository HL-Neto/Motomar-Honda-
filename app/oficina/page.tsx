import styles from "./oficina.module.css";
import Menu from "@/app/components/menu";
import Footer from "@/app/components/footer";

export default function Oficina() {
  return (
    <div>
      <Menu />

      <div className={styles.container}>
        {/* HERO */}
        <a
          href="https://motomar.com.br/oficina"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={`${styles.card} ${styles.hero}`}>
            <div className={styles.letter}>
              <h1>Agende seu horário</h1>
            </div>
          </div>
        </a>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <div className={`${styles.card} ${styles.div1}`}>
            <div className={styles.letter}>
              <h3>ACESSÓRIOS</h3>
            </div>
          </div>

          <div className={`${styles.card} ${styles.div2}`}>
            <div className={styles.letter}>
              <h3>PRODUTOS</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
