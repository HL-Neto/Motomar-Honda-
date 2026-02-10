import styles from "@/app/styles/banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>

        <span className={styles.brand}>
          MOTOMAR <strong>HONDA</strong>
        </span>

        <h1 className={styles.title}>
          QUALIDADE QUE <br /> MOVE VOCÊ
        </h1>

        <p className={styles.subtitle}>
          Tecnologia, desempenho e confiança em cada detalhe.  
          Na Motomar Honda, você encontra motos, peças e serviços com o padrão
          Honda que acompanha você em todos os caminhos, todos os dias.
        </p>

      </div>
    </section>
  );
}
