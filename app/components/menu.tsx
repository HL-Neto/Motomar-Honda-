import Image from "next/image"
import styles from "@/app/styles/menu.module.css"

import logo from "@/app/assets/logo_motomar.png"
import nome from "@/app/assets/nome_motomar.png"


export default function Hero(){
    return(
        
        
        <div className={styles.menu}>
            
            
            <nav>
                <ul>
                    <li><Image className=" h-auto  w-[80px] md:w-[130px] "
                        src={logo}
                        alt="logo" 
                        />
                        
                    </li>
                </ul>
            </nav>
           
            
            <nav>
                <ul>
                    <li><Image className="  h-auto w-[120px] md:w-[160px] "
                        src={nome}
                        alt="nome" 
                        />
                    </li>
                </ul>
            </nav>
            
           
        
        
        </div>

              
    )
}