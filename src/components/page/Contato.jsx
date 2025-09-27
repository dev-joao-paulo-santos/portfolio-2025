import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contato({ visible, onClose }) {
  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      link: "https://github.com/dev-joao-paulo-santos",
      color: "bg-[#181717] hover:bg-gray-900 text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      link: "https://linkedin.com/in/jo4o-s4ntos",
      color: "bg-blue-600 hover:bg-blue-500 text-white",
    },
    {
      name: "E-mail",
      icon: <FaEnvelope className="text-2xl" />,
      link: "mailto:contato281joaopaulofreire@gmail.com",
      color: "bg-red-500 hover:bg-red-400 text-white",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-2xl" />,
      link: "https://wa.me/5514988207085",
      color: "bg-green-500 hover:bg-green-400 text-white",
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-end bg-black backdrop-blur-sm bg-opacity-70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: .4 }}
          transition={{ duration: .5, ease: "easeInOut" }}
        >
          <motion.div
            className="relative w-full max-w-sm h-full bg-white dark:bg-slate-700 shadow-lg p-6 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: .5, ease: "easeInOut" }}
          >
            {/* Botão fechar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-black hover:text-red-900"
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-2xl font-bold text-center my-16">Fale comigo!</h2>

            <div className="flex flex-col gap-4 mt-8">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl shadow-md transition transform hover:scale-105 ${contact.color}`}
                >
                  {contact.icon}
                  <span className="font-medium">{contact.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
