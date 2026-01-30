import Image from "next/image"
import styles from "@/app/styles/menu.module.css"

import logo from "@/app/assets/logohero_motomar.png"
import honda from "@/app/assets/honda_logo.png"
import { FaWhatsapp,FaInstagram } from "react-icons/fa"



export default function Hero(){
    return(
        
        
        <div className={styles.menu}>
            
           
         
            <nav>
                <ul>
                    <li><Image className="  w-[190px] md:w-[250px] h-[190px]"
                        src={logo}
                        alt="logo" 
                        />
                    </li>
                </ul>
            </nav>
           
            <div className={styles.navWrapper}>
                <nav >
                    <ul className={styles.nav}>
                        <li >
                            <a 
                                href="#home">Home
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="#veiculos">Veiculos
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="#financiamento">Financiamento
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="#consorcio">Consórcio
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="#oficina">Oficina
                            </a>
                        </li>

                        <li>
                            <a 
                                href="#duplachance">Dupla Chance
                            </a>
                        </li>


                        <li className={styles.dropdown}>
                            <button type="button" className={styles.dropdownTrigger} aria-expanded="false" aria-haspopup="true">
                                Serviços Honda
                                <span className={styles.arrow} aria-hidden="true">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                            <ul className={styles.dropdownMenu}>
                                <li>
                                    <a href="https://www.honda.com.br/motos/honda-store/" target="_blank" rel="noopener noreferrer">Honda Store</a>
                                </li>
                                <li>
                                    <a href="https://www.honda.com.br/pecas/motos/" target="_blank" rel="noopener noreferrer">Peças e Acessórios</a>
                                </li>
                                <li>
                                    <a href="https://www.honda.com.br/recall" target="_blank" rel="noopener noreferrer">Recall</a>
                                </li>
                            </ul>
                        </li>
                        
                     </ul>
                </nav>
                <a href="https://api.whatsapp.com/send?phone=558330484400&text=Ol%C3%A1
                !%20Tenho%20interesse%20neste%20produto.%20%23chave%3A%20a324M000000e0qfQAA" target="_blank" rel="noopener noreferrer" className={styles.icon_whats}>
                    <FaWhatsapp className="size-0 md:size-6"/>
                </a>
                <a href="https://www.instagram.com/motomar.honda/" target="_blank" rel="noopener noreferrer" className={styles.icon_insta}>
                    <FaInstagram className="size-0 md:size-6"/>
                </a>
            </div>
           
           
            
          
            
           
            
        
        </div>

              
    )
}