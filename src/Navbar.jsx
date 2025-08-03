import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About Us", "Careers", "Contact Us"];

  return (
    <nav className="w-full bg-white text-black shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-1">
        {/* Logo */}
       <motion.img
  src="/v3.png" // Make sure the image exists in /public/images/
  alt="dubizzlelabs Logo"
  className="h-12 sm:h-16 md:h-20"
  initial={{ x: -50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
/>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base sm:text-lg font-semibold">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#932f2f"}}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-[#020101]" />
            ) : (
              <Menu className="w-6 h-6 text-[#000000]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col bg-white px-6 pb-4 md:hidden space-y-4 text-base font-semibold"
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-[#932f2f] transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};
