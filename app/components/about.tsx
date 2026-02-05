"use client";

import styles from "@/app/styles/about.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

import Logo from "@/public/assets/about/MM_250821__0757.jpeg";

export default function About() {
  return (
    <div className={styles.about}>

      {/* IMAGEM */}
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src={Logo}
          alt="Motomar Honda Concessionária"
          priority
        />
      </motion.div>

      {/* TEXTO */}
      <motion.div
        className={styles.textContent}
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >

        <h1 className="text-sm uppercase tracking-widest text-gray-500 pb-3">
          Sobre Nós
        </h1>
        <br/>
        <h2 className="leading-tight">
          <span className="block text-5xl md:text-4xl font-extrabold text-red-600 tracking-wide">
            Motomar Honda
          </span>
        </h2>

        <div className="space-y-5 text-gray-600 leading-relaxed mt-6 text-base">
        <br/>
          <p>
            Na Motomar Honda, tecnologia, atendimento e paixão por motos
            se encontram para oferecer uma experiência completa,
            do primeiro contato à entrega das chaves.<br/><br/>
          </p>

          <p>
            Trabalhamos com soluções modernas em consórcio,
            financiamento e serviços, sempre com transparência,
            agilidade e foco no que realmente importa: você.<br/><br/>
          </p>

          <p>
            Mais do que vender motos, construímos relações,
            entregamos confiança e acompanhamos cada etapa
            da sua jornada sobre duas rodas.
          </p>

        </div>

      </motion.div>

    </div>
  );
}
