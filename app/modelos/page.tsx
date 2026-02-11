"use client";

import Image from "next/image";
import styles from "./veiculos.module.css";

import Menu from "@/app/components/menu";
import Footer from "@/app/components/footer";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";

const slides = [
  "/assets/modelos/Adventure/Trail/3_4FD.png",
  "/assets/modelos/Adventure/Trail/Lateral.png",
  "/assets/modelos/Adventure/Trail/3_4TD.png",
  "/assets/modelos/Adventure/Trail/3_4TE.png",
];

export default function Modelos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center", // loop removido
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <Menu />

      {/* BANNER */}
      <section className={styles.banner} />

      {/* TÍTULO */}
      <section className={styles.titleSection}>
        <h1 className={styles.category}>Adventure</h1>
        <h2 className={styles.model}>Trail</h2>
      </section>

      {/* CARROSSEL */}
      <section className={styles.carousel}>
        <button
          className={styles.arrowLeft}
          onClick={() => emblaApi?.scrollPrev()}
        >
          ❮
        </button>

        <button
          className={styles.arrowRight}
          onClick={() => emblaApi?.scrollNext()}
        >
          ❯
        </button>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.carouselContainer}>
            {slides.map((src, index) => (
              <div
                key={index}
                className={`${styles.slide} ${
                  index === selectedIndex ? styles.active : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Trail ${index + 1}`}
                  fill
                  className={styles.image}
                  priority={index === selectedIndex}
                />
              </div>
            ))}
          </div>
        </div>

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
      </section>

      <Footer />
    </div>
  );
}
