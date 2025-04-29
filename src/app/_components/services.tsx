'use client'

import UseEmblaCarousel from "embla-carousel-react"
import { FaArrowRight, FaArrowLeft, FaTaxi, FaWhatsapp } from "react-icons/fa";
import { FaHotel, FaClock } from "react-icons/fa6";
import { LuSyringe } from "react-icons/lu";
import { RiScissorsFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const services = [
    {
      title: "Banho & Tosa",
      description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
      duration: "1h",
      price: "$50",
      icon: <RiScissorsFill />,
      linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },
    {
      title: "Consulta Veterinária",
      description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
      duration: "1h",
      price: "$45",
      icon: <LuSyringe />,
      linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
    },
    {
      title: "Táxi Pet",
      description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
      duration: "2h",
      price: "$80",
      icon: <FaTaxi />,
      linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
    },
    {
      title: "Hotel para pets",
      description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
      duration: "1h",
      price: "$60",
      icon: <FaHotel />,
      linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
    },
  ]

export function Services() {


    const [emblaRef, emblaApi] = UseEmblaCarousel({ 
        loop: false, 
        align: "start",
        slidesToScroll:1,
        breakpoints: {
            "(min-width: 768px)": {
                slidesToScroll: 3,
            }
        }
    });

    function scrollPrev() {
        if (emblaApi) emblaApi.scrollPrev();
    }

    function scrollNext() {
        if (emblaApi) emblaApi.scrollNext();
    }

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    function onSelect() {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(); // inicializa o estado
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
      }, [emblaApi]);
      

    return(
        <section className="bg-white py-16">

            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12">Serviços</h2>

                <div className="relative">

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3" key={index}>
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">

                                        <div className="flex flex-1 items-start justify-between">
                                            <div className="flex gap-3">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl mb-1 my-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">

                                            <div className="flex items-center gap-2 text-sm">
                                                <FaClock className="w-4 h-4"/>
                                                <span>{item.duration}</span>
                                            </div>

                                            <a href={`https://wa.me/5511999320253?text=${item.linkText}`} 
                                            target="_blank"
                                            className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300">
                                                <FaWhatsapp className="w-4 h-4"/>
                                                Entrar em contato
                                            </a>

                                        </div>

                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: canScrollPrev ? 1.1 : 1, rotate: canScrollPrev ? -5 : 0 }}
                        whileTap={{ scale: canScrollPrev ? 0.9 : 1 }}
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        className={`flex items-center justify-center shadow-lg cursor-pointer bg-gray-400 rounded-full w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 transition-opacity ${ canScrollPrev ? 'opacity-100' : 'opacity-30 cursor-not-allowed'}`}
                        >
                        <FaArrowLeft className="w-6 h-6 text-gray-600" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: canScrollNext ? 1.1 : 1, rotate: canScrollNext ? 5 : 0 }}
                        whileTap={{ scale: canScrollNext ? 0.9 : 1 }}
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        className={`flex items-center justify-center shadow-lg cursor-pointer bg-gray-400 rounded-full w-10 h-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 transition-opacity ${ canScrollNext ? 'opacity-100' : 'opacity-30 cursor-not-allowed'}`}
                        >
                        <FaArrowRight className="w-6 h-6 text-gray-600" />
                    </motion.button>


                </div>

            </div>

        </section>
    )
}