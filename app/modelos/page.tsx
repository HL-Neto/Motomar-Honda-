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
    loop: true,
    align: "center",
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

      {/* BANNER (SEM TEXTO) */}
      <section className={styles.banner}/>
        

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
                  alt={`Tornado ${index + 1}`}
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
