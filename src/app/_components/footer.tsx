import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'
import { PiInstagramLogo, PiGithubLogo } from 'react-icons/pi'
import { MdComputer } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";


const brands = [
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: primier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
  ]

export function Footer() {
    return (
        <section className='bg-[#E84c3d] py-16 text-white'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((brand, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{ width: 'auto', height: 'auto' }}
                                    className='object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-5'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Pets Friend</h3>
                            <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
                            <a href="https://wa.me/5511999320253?text=Queria%20saber%20mais%20sobre%20os%20servi%C3%A7os!" className='bg-green-500 px-4 py-2 rounded-md mt-4'
                            target='_blank'>
                                Contato via WhatsApp
                            </a>
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                            <p>Email: teste@teste.com</p>
                            <p>Telefone: (XX) 1231831238</p>
                            <p>Rua X, centro, São Paulo | SP</p>
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
                            <div className='flex gap-4'>
                                <a 
                                href=""
                                target='_blank'
                                >
                                    <PiInstagramLogo className='h-8 w-8'/>
                                </a>
                                
                                <a 
                                href=""
                                target='_blank'
                                >
                                    <MdComputer className='h-8 w-8'/>
                                </a>
                                
                                <a 
                                href=""
                                target='_blank'
                                >
                                    <PiGithubLogo className='h-8 w-8'/>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-2'>Nosso endereço</h3>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6438582060823!2d-46.47680412391466!3d-23.54530846100423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66dec98fb855%3A0xf2b061ffbcd2ecf8!2sNeo%20Qu%C3%ADmica%20Arena!5e0!3m2!1spt-BR!2sbr!4v1745948717945!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy"></iframe>
                            </div>
                        </div>
                </footer>
            </div>
        </section>
    )
}