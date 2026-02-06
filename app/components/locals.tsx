"use client";

import styles from "@/app/styles/locals.module.css";
import { useState } from "react";

export default function Locals() {

  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.7643300002114!2d-34.8416820304642!3d-7.119356199555266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd49c4c00001%3A0x80c82bb200b20f02!2sHonda%20Motomar!5e0!3m2!1spt-BR!2sbr!4v1770299810532!5m2!1spt-BR!2sbr"
  );

  const locations = {
    jp:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.7643300002114!2d-34.8416820304642!3d-7.119356199555266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd49c4c00001%3A0x80c82bb200b20f02!2sHonda%20Motomar!5e0!3m2!1spt-BR!2sbr!4v1770299810532!5m2!1spt-BR!2sbr",
  
    sr:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.5185592307298!2d-34.98122209601778!3d-7.121696561398375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acef659a49c1df%3A0xd919439a945830e2!2sHonda%20Motomar%20Santa%20Rita!5e0!3m2!1spt-BR!2sbr!4v1770300048050!5m2!1spt-BR!2sbr" ,
  
    it:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1399.0920064115514!2d-35.335085317315006!3d-7.328069319772688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac653b3c44172d%3A0x7e04bbe9a9638f32!2sHonda%20Motomar%20It!5e0!3m2!1spt-BR!2sbr!4v1770300166440!5m2!1spt-BR!2sbr",
  
    mg:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.460136943362!2d-35.12483420250288!3d-6.835304139444627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ad05f406c58113%3A0x3f75bba5187f9e74!2sHonda%20Motomar%20Mamanguape!5e0!3m2!1spt-BR!2sbr!4v1770300282720!5m2!1spt-BR!2sbr"
  };

  return (
    <div className={styles.container}>
      
     <div className={styles.letter}>
      
        <div className="text-5xl lock text-5xl md:text-5xl font-extrabold text-red-600 tracking-wide">
            Conheça nossas unidades Motomar
           
        </div><br/>
        <div className=" h-1 bg-black/25 rounded-lg  " />
     </div> 
      
      <div className={styles.mapBox}>
        <iframe
          src={mapUrl}
          className={styles.map}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização"
        />
      </div>

      {/* BOTÕES */}
      <div className={styles.buttons}>

        <button
          onClick={() => setMapUrl(locations.jp)}
          className={styles.button}
        >
          João Pessoa
        </button>

        <button
          onClick={() => setMapUrl(locations.sr)}
          className={styles.button}
        >
          Santa Rita
        </button>

        <button
          onClick={() => setMapUrl(locations.it)}
          className={styles.button}
        >
          Itabaiana
        </button>

        <button
          onClick={() => setMapUrl(locations.mg)}
          className={styles.button}
        >
          Mamanguape
        </button>

      </div>
    </div>
  );
}
