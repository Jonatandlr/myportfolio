import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SubTitleNav from './SubTitleNav';

const DropdownMenu = ({ isOpen, toggleMenu }: { isOpen: boolean, toggleMenu: () => void }) => {
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
          transition={{ duration: 0.3 }}
          className="fixed z-50 top-0 left-0 w-full h-full bg-black  flex items-center justify-center"
        >
          <div className="bg-transparent p-4 flex flex-col">
            <div className='grid grid-cols-1 gap-3 mb-3'>
              <SubTitleNav click={toggleMenu} index="01." title=" Home" href='#' />
              <SubTitleNav click={toggleMenu} index="02." title=" About Me" href='#About' />
              <SubTitleNav click={toggleMenu} index="03." title=" Experience" href='#Experience' />
              <SubTitleNav click={toggleMenu} index="04." title=" Proyects" href='#Proyects' />
            </div>
            <div className='flex justify-center'>
              <button
                onClick={toggleMenu}
                className="font-bold text-Custom-red border-4 border-white rounded-full w-[50px] h-[50px] hover:bg-Custom-red hover:text-white transition duration-300">
                X
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;