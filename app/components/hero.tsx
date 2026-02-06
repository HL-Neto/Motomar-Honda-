"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/app/styles/hero.module.css";

import img1 from "@/public/assets/Hero/BANNER_DESKTOP_1920x700_INST-KV-INVERTIDO.jpeg";
import img2 from "@/public/assets/Hero/CRF300F_COVER_YOUTUBE_v2-2.png";
import img3 from "@/public/assets/Hero/Banner Desktop.jpeg";
import img4 from "@/public/assets/Hero/CRF300F_COVER_YOUTUBE_v2-2.png";

const images = [img1, img2, img3, img4];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>

      {/* SLIDES */}
      <div className={styles.carousel}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === current ? styles.active : ""
            }`}
          >
            <Image
              src={img}
              alt={`Banner ${index + 1}`}
              fill
              priority={index === 0}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === current ? styles.activeDot : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* WHATSAPP */}
      <a
        href="https://api.whatsapp.com/send?phone=558330484400&text=Ol%C3%A1%2C+pode+me+ajudar%3F"
        className={styles.whatsappFloat}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>

    </div>
  );
}
