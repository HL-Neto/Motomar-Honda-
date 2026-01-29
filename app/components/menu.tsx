import Image from "next/image"
import styles from "@/app/styles/menu.module.css"

import logo from "@/app/assets/logohero_motomar.png"




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


      



            <div>
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
                                href="duplachance">Dupla Chance
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="https://www.honda.com.br/motos/honda-store/"  
                                target="_blank"
                                rel="noopener noreferrer">Honda Store
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.honda.com.br/pecas/motos/"
                                target="_blank"
                                rel="noopener noreferrer">Peças/Acessórios
                            </a>
                        </li>

                        <li>
                            <a 
                                href="https://api.whatsapp.com/send?phone=558330484400&text=Ol%C3%
                                A1!%20Tenho%20interesse%20neste%20produto.%20%23chave%3A%20a324M0000
                                00e0qfQAA"
                                target="_blank"
                                rel="noopener noreferrer">Contato 
                            </a>
                        </li>
                        
                        <li>
                            <a 
                                href="https://www.honda.com.br/recall"
                                target="_blank"
                                rel="noopener noreferrer">Recall
                            </a>
                        </li>                   
                    </ul>
                </nav> 
            </div>
           
            
          
            
           
            
        
        </div>

              
    )
}