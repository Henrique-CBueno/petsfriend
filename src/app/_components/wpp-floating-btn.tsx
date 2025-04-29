'use client'; // Se for App Router

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/5511999320253?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais!"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
};

export default WhatsappButton;
