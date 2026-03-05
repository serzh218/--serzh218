
import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundImage?: string;
}

export function Hero({
  title = 'Найдите автомобиль своей мечты',
  subtitle = 'Более 500 автомобилей в наличии. Новые и с пробегом от официальных дилеров с гарантией качества.',
  buttonText = 'Смотреть каталог',
  backgroundImage = 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920'
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[700px] flex items-center pt-20"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">Специальные предложения</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#catalog"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-orange-500/25"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(249,115,22,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              {buttonText}
              <ChevronRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.98 }}
            >
              Получить консультацию
            </motion.a>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-800"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Марка</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors">
                <option>Все марки</option>
                <option>BMW</option>
                <option>Mercedes-Benz</option>
                <option>Audi</option>
                <option>Toyota</option>
                <option>Lexus</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Цена от</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors">
                <option>Любая</option>
                <option>1 000 000 ₽</option>
                <option>2 000 000 ₽</option>
                <option>3 000 000 ₽</option>
                <option>5 000 000 ₽</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Год от</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors">
                <option>Любой</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
              </select>
            </div>
            <motion.button
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold mt-6 sm:mt-0 sm:self-end"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Search className="w-5 h-5" />
              Найти
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
