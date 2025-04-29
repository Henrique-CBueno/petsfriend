'use client'

import tutor1 from '../../../public/tutor1.png'
import tutor2 from '../../../public/tutor2.png'
import UseEmblaCarousel from "embla-carousel-react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const depoiments = [
    {
        content:
          "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
        author: "Mariana Souza",
        role: "Tutora da Luna (Golden Retriever)",
        image: tutor2,
      },
      {
        content:
          "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
        author: "Rafael",
        role: "Tutor do Thor (Bulldog Francês)",
        image: tutor1,
      },
      {
        content: "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
        author: "Camila fernandes",
        role: "Tutora da Mel e do Max",
        image: tutor2,
      },
  ]

export function Depoiments() {


    const [emblaRef, emblaApi] = UseEmblaCarousel({ 
        loop: true
    });

    function scrollPrev() {
        if (emblaApi) emblaApi.scrollPrev();
    }

    function scrollNext() {
        if (emblaApi) emblaApi.scrollNext();
    }


    return(
        <section className="bg-[#FFD449] py-16">

            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold text-center mb-12">Depoimentos dos Clientes</h2>

                <div className="relative max-w-4xl mx-auto">

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {depoiments.map((item, index) => (
                                <div className="flex-[0_0_100%] min-w-0 px-3" key={index}>
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className='flex flex-col items-center text-center space-y-4'>
                                            <div className='relative w-24 h-24'>
                                                <Image
                                                src={item.image}
                                                alt={item.author}
                                                fill
                                                sizes='96px'
                                                className='object-cover rounded-full'/>
                                            </div>

                                            <p className='text-gray-200'>{item.content}</p>

                                            <div>
                                                <p className='font-bold'>{item.author}</p>
                                                <p className='text-sm text-gray-400'>{item.role}</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollPrev}
                        className="flex items-center justify-center shadow-lg cursor-pointer bg-gray-400 rounded-full w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        >
                            <FaArrowLeft className="w-6 h-6 text-gray-600" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollNext}
                        className="flex items-center justify-center shadow-lg cursor-pointer bg-gray-400 rounded-full w-10 h-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        >
                            <FaArrowRight className="w-6 h-6 text-gray-600" />
                    </motion.button>


                </div>

            </div>

        </section>
    )
}