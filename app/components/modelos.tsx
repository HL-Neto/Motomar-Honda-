"use client";

import styles from "@/app/styles/modelos.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

import hornet from "@/public/assets/modelos/banner-sitehornet.jpeg";
import miloitocentos from "@/public/assets/modelos/banner-site-1800.jpeg";
import xre from "@/public/assets/modelos/banner-site-XRE.jpeg";
import cbr from "@/public/assets/modelos/banner-site-CBR.jpeg";

const slides = [hornet, miloitocentos, xre, cbr];

export default function Modelos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.carousel} id="modelos">

      {/* TÍTULO */}
      <div className={styles.titleBox}>
        <h1 className={styles.title}>Veja nossas motos</h1>
      </div>

      {/* SETA ESQUERDA */}
      <button
        className={styles.arrowLeft}
        onClick={() => emblaApi?.scrollPrev()}
      >
        ❮
      </button>

      {/* SETA DIREITA */}
      <button
        className={styles.arrowRight}
        onClick={() => emblaApi?.scrollNext()}
      >
        ❯
      </button>

      {/* CARROSSEL */}
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((src, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === selectedIndex ? styles.active : ""
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className={styles.image}
              />

              {/* BOTÃO + EM TODOS OS SLIDES */}
              <a
                href="https://motomar.com.br/zero-km"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.plusLink}
              >
                <div className={styles.plusIcon}>+</div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`${styles.dot} ${
              index === selectedIndex ? styles.dotActive : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
