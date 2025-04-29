import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import dogimg from '../../../public/hero-dog.webp'
import catimg from '../../../public/cat-hero.png'

export function Hero(){
    return (
        <section className="bg-[#E84C3D] text-white relative overflow-hidden">

            <div>
                <Image 
                    src={dogimg} 
                    alt="Imagem de um cachorro" 
                    className="object-cover opacity-60 lg:hidden"
                    fill
                    sizes="100vw"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
            </div>
            
            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
                <article className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10" data-aos="fade-down">
                            Seu pet merece cuidado, carinho e atenção especial.
                        </h1>

                        <p className="lg:text-lg" data-aos="fade-right">
                            Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.
                        </p>

                        <a 
                        href="https://wa.me/5511999320253?text=Queria%20saber%20mais%20sobre%20os%20servi%C3%A7os!"
                        className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        target="_blank"
                        data-aos="fade-up">
                            <FaWhatsapp  className="w-5 h-5"/>
                            Contato via WhatsApp
                        </a>
                        
                        <div className="mt-8">
                            <p className="text-sm mb-4" data-aos="zoom-in">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra
                            </p>

                            <div className="flex mt-4">
                                <div className="w-32 hidden lg:block ">
                                    <Image 
                                        src={catimg} 
                                        alt="Imagem de um gato" 
                                        className="object-fill"
                                        quality={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block h-full relative">
                        <Image 
                            src={dogimg} 
                            alt="Imagem de um cachorro" 
                            className="object-contain"
                            fill
                            sizes="(max-width: 768px) 0px, 50vw"
                            quality={100}
                        />
                    </div>

                </article>
            </div>

        </section>
    )
}