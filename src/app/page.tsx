import Image from 'next/image';

import { Header } from '@/components/header/Header';

import logoHeader from '../../public/assets/images/stable-icon.png';
import { Inter, Roboto } from "next/font/google";
import { Footer } from '@/components/footer/Footer';
import { CardServico } from '@/components/CardServico/CardServico';

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function PageHome() {
  return (
    <>
      <Header/>    
      <main className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="self-center order-2 md:order-1 texto_main">
          <h1 className={`${inter.className} text-5xl sm:text-6xl font-semibold mb-8`}>
            Uma nova maneira de <span className="text-corP1">diagnosticar</span>
          </h1>
          <p className="text mb-5">
            Tenha o diagnóstico do problema do seu veículo de uma nova maneira.
          </p>
          <a className="botao">UTILIZE O SERVIÇO</a>
        </div>
        <div className="order-1 md:order-2">
        <div
          className="imagem_main w-full h-[350px] sm:h-[477px] md:h-[554px] bg-center bg-cover rounded-tl-[140px] rounded-tr-[20px] rounded-br-[140px] rounded-bl-[20px]"
          style={{ backgroundImage: `url("../../assets/images/banner-main.jpg")` }}
          />
        </div>
      </main>

      <section className="bg-cinzaClaro" id="sobre-serviço" aria-label="Sobre o Serviço">
        <div className="container flex flex-col gap-16 justify-center">

          <div className="flex flex-col">
            <h2 className={`${inter.className} text-4xl sm:text-5xl font-semibold mb-5 text-center`}>Por que utilizar o <span className="text-corP1">serviço AutoCare</span>?</h2>
            <p className={`${roboto.className} text text-center w-fullmd:w-1/2 mx-auto`}>Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos.</p>
          </div>     
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CardServico
              imageSrc={logoHeader}
              imageAlt="Diagnóstico"
              title="Diagnóstico preciso e 100%  online"
              description="Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos."
            />
            <CardServico
              imageSrc={logoHeader}
              imageAlt="Orçamento"
              title="Saiba todos os detalhes do orçamento"
              description="Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos."
            />
            <CardServico
              imageSrc={logoHeader}
              imageAlt="Conserto"
              title="Acompanhe em tempo real o status do conserto"
              description="Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos."
            />
          </div>
          <a className="botao text-center">UTILIZE O SERVIÇO</a>

        </div>
      </section>

      <section id="como-funciona" aria-label="Como funciona" className='container grid grid-cols-1 auto-rows-min gap-[60px] md:grid-cols-2 md:gap-10 md:place-items-start'>
        <div className='self-start md:col-span-1'>
          <h2 className={`${inter.className} text-4xl sm:text-5xl font-semibold mb-5 md:row-span-1`}>Resolva os seus problemas com apenas <span className='text-corP1'>4 passos</span> simples</h2>
        </div>
        
        <div className="col-start-1 row-start-3 md:col-start-1 md:row-start-2">
          <Image
            src={logoHeader}
            alt="Como funciona"
            className='rounded-[20px]'
          />
        </div>

        </section>

      

     
      <Footer/>
    </>
  );
}
