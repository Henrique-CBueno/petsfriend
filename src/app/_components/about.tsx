import Image from "next/image";
import { FaCheck, FaWhatsapp } from "react-icons/fa6";
import about1 from '../../../public/about-1.png'
import about2 from '../../../public/about-2.png'
import { FiMapPin } from "react-icons/fi";

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="cointainer px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="relative" data-aos="zoom-in" data-aos-delay="200" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                        <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                            <Image 
                                src={about1}
                                alt="Imagem de um cachorro e um gato"
                                fill
                                className="object-cover hover:scale-110 duration-300"
                                quality={100}
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg overflow-hidden border-4 border-white">
                            <Image 
                                src={about2}
                                alt="Imagem de gato"
                                fill
                                className="hover:scale-110 duration-300"
                                quality={100}
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10 grid lg:gap-3" data-aos="fade-up">
                        <h2 className="text-4xl font-bold">SOBRE</h2>

                        <p>No nosso petshop, cuidamos do seu pet com carinho e dedicação. Oferecemos produtos de qualidade, atendimento especializado e um ambiente acolhedor para você e seu melhor amigo.</p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <FaCheck className="text-red-500"/>
                                Aberto desde 2006.
                            </li>

                            <li className="flex items-center gap-2">
                                <FaCheck className="text-red-500"/>
                                Equipe com mais de 10 veterinários.
                            </li>

                            <li className="flex items-center gap-2">
                                <FaCheck className="text-red-500"/>
                                Qualidade é a nossa prioridade.
                            </li>
                            
                        </ul>

                        <div className="flex gap-2">
                            <a href="https://wa.me/5511999320253?text=Queria%20saber%20mais%20sobre%20os%20servi%C3%A7os!"
                            target="_blank"
                            className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <FaWhatsapp className="w-5 h-5 text-white"/>
                                Contato via WhatsApp
                            </a>

                            <a href="https://maps.app.goo.gl/yApjRLXeAnZjpmJq9" className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <FiMapPin className="w-5 h-5 text-black"/>
                                Endereço da Loja
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}