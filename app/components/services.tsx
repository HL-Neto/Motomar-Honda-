"use client";

import styles from "@/app/styles/services.module.css";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className={styles.services}  id="consorcio">
    

    <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
      
        <div className={styles.consorcio}>
          <div className={styles.letter}>
            
            <h1 className="text-5xl">CONSÓRCIO HONDA</h1>

            O consórcio na Motomar Honda é a forma mais inteligente de conquistar <br />
            sua moto sem pagar juros. Parcelas acessíveis, planejamento e total segurança, <br />
            você realiza seu sonho com a confiança de uma marca líder no mercado.
            <br /><br />
            Mais economia, transparência e a certeza de um ótimo investimento.

            <div className={styles.buttons}>

              <a
                href="https://www.consorcionacionalhonda.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                Saiba mais
              </a>

              <a
                href="https://motomar.com.br/consorcio"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                Tenho interesse
              </a>

            </div>

          </div>
      
        </div>
      </motion.div>

      {/* ================= FINANCIAMENTO ================= */}
    
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
      <div className={styles.financiamento} id="financiamento">
        <div className={styles.letter}>

          <h1 className="text-5xl">FINANCIAMENTO HONDA</h1>

          <p>
            Com o financiamento Honda, você conquista sua moto nova com parcelas<br />
            que cabem no seu bolso. Tenha taxas competitivas, aprovação rápida e condições<br />
            especiais para realizar seu sonho com segurança.
            <br /><br />
            Além da confiança e o respaldo de uma marca líder no mercado.
          </p>

          <div className={styles.buttons}>

            <a
              href="https://www.bancohonda.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              Saiba mais
            </a>

            <a
              href="https://motomar.com.br/financiamento"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Tenho interesse
            </a>

          </div>

        </div>
      </div>
    </motion.div>
      {/* ================= OFICINA ================= */}
    
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
      <div className={styles.oficina} id="oficina">
        <div className={styles.letter}>

          <h1 className="text-5xl">OFICINA HONDA</h1>

          <p>
            Na oficina Honda, sua moto recebe o cuidado que ela merece.<br />
            Contamos com técnicos especializados, peças originais e <br />equipamentos modernos
            <br /><br />para garantir segurança, desempenho e durabilidade em cada revisão <br />ou reparo.
          </p>

          <div className={styles.buttons}>

            <a
              href="https://motomar.com.br/oficina"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              Saiba mais
            </a>

            <a
              href="/oficina"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Tenho interesse
            </a>

          </div>

        </div>
      </div>
    </motion.div>
    </div>
  );
}
    