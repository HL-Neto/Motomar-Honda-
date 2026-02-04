import styles from "@/app/styles/hero.module.css"
import Image from "next/image";






export default function Hero(){
    return(
        
        
        <div  className={styles.hero}> 

            <div className={styles.bg_overlay}></div>

            <div className={styles.center_logo}>
               
                
                
                <div className={styles.bg_overlay}></div>
            </div>
            
        </div>

        

       
    )
}