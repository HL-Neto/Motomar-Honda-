"use client";

import styles from "@/app/styles/modelos.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

import hornet from "@/public/assets/modelos/banner-sitehornet.jpeg";

const slides = [
  hornet,
  "/assets/modelos/banner-site-1800.jpg",
  "/assets/modelos/banner-site-XRE.jpg",
  "/assets/modelos/banner-site-CBR.jpg",
];

export default function Modelos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.carousel}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((src, index) => (
            <div
              className={`${styles.slide} ${
                index === selectedIndex ? styles.active : ""
              }`}
              key={index}
            >
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                priority={index === 0}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === selectedIndex ? styles.dotActive : ""
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
