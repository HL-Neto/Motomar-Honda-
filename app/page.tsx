import Hero from "@/app/components/hero";
import Menu from "@/app/components/menu";
import About from "@/app/components/about";
import Services from "@/app/components/services";
import Footer from "@/app/components/footer";
import Modelos from "@/app/components/modelos"
import Locals from "@/app/components/locals";
import Seguro from "@/app/components/seguro";
import Banner from "@/app/components/banner";


export default function Home() {
  return (
    
    <>
      <Menu/>
      <Hero/>
      <About/>
      <Modelos/>
      <Banner/>
      <Services/>
      <Seguro/>
      <Locals/>
      <Footer/>
      
    
    </>
    
         
  );
}    