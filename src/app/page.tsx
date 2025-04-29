import { About } from "./_components/about";
import { Depoiments } from "./_components/depoiments";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import WhatsappButton from "./_components/wpp-floating-btn";

export default function Home(){
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Depoiments />
      <Footer />


      <WhatsappButton />
    </main>
  )
}