import Image from "next/image"
import styles from "@/app/styles/menu.module.css"

import logo from "@/app/assets/logo_motomar.png"
import nome from "@/app/assets/nome_motomar.png"


export default function Hero(){
    return(
        
        
        <div className={styles.menu}>
            
            
            <nav>
                <ul>
                    <li><Image className=" h-[100px] w-[980px] md:w-38 md:h-30 "
                        src={logo}
                        alt="logo" 
                        />
                    </li>
                </ul>
            </nav>
        
               
            <nav>
                <ul>
                    <li><Image className="  h-[100px] w-[1120px] md:w-70 md:h-40"
                        src={nome}
                        alt="nome" 
                        />
                    </li>
                </ul>
            </nav>
           
        
        
        </div>

              
    )
}