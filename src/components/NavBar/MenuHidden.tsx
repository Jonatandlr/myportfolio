import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DropdownMenu = ({ isOpen, toggleMenu }:{isOpen:boolean, toggleMenu:()=>void}) => {
  const dropdownVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="dropdown-menu"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        >
          <motion.div
            className="bg-white p-4 rounded shadow-md"
            transition={{ ease: 'easeOut', duration: 0.5 }}
          >
            <p className="text-xl font-bold mb-4">Dropdown Content</p>
            <ul>
              <li className="py-2">Item 1</li>
              <li className="py-2">Item 2</li>
              <li className="py-2">Item 3</li>
            </ul>
            <button
              onClick={toggleMenu}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
            >
              Close Menu
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;