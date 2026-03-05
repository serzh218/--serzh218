
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Phone, MapPin, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

interface HeaderProps {
  logo?: string;
  phone?: string;
  address?: string;
  bgColor?: string;
}

export function Header({
  logo = 'AutoPrime',
  phone = '+7 (999) 123-45-67',
  address = 'Москва, ул. Автомобильная, 1',
  bgColor = 'bg-gray-950'
}: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Главная', href: '#hero' },
    { label: 'Каталог', href: '#catalog' },
    { label: 'О нас', href: '#about' },
    { label: 'Контакты', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx('fixed top-0 left-0 right-0 z-40', bgColor)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">{logo}</span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-sm">{address}</span>
            </div>
            <motion.a
              href={`tel:${phone}`}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              {phone}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-800"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-3 rounded-lg font-medium mt-4"
              >
                <Phone className="w-4 h-4" />
                {phone}
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
