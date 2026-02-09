import styles from "./oficina.module.css";

export default function Oficina() {
  return (
    <div className={styles.container}>
      {/* HERO */}
      <div className={`${styles.card} ${styles.hero}`}>
        <div className={styles.letter}>
          <h2>Oficina</h2>
          <p>Serviços especializados para sua moto</p>
          <div className={styles.buttons}>
            <button className={styles.btnPrimary}>Agendar</button>
            <button className={styles.btnOutline}>Saiba mais</button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <div className={`${styles.card} ${styles.div1}`}>
          <div className={styles.letter}>
            <h3>Consórcio</h3>
          </div>
        </div>

        <div className={`${styles.card} ${styles.div2}`}>
          <div className={styles.letter}>
            <h3>Financiamento</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
