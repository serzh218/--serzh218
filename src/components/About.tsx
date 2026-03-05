
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Car, Award, Star } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface AboutProps {
  title?: string;
  description?: string;
}

const stats: Stat[] = [
  { icon: <Users className="w-6 h-6" />, value: '15 000+', label: 'Довольных клиентов' },
  { icon: <Car className="w-6 h-6" />, value: '500+', label: 'Автомобилей в наличии' },
  { icon: <Award className="w-6 h-6" />, value: '12 лет', label: 'На рынке' },
  { icon: <Star className="w-6 h-6" />, value: '4.9', label: 'Рейтинг' }
];

export function About({
  title = 'О нашем автосалоне',
  description = 'AutoPrime — это современный автосалон, который предлагает широкий выбор новых автомобилей и автомобилей с пробегом от официальных дилеров. Мы работаем на рынке более 12 лет и за это время помогли тысячам клиентов найти автомобиль их мечты.'
}: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5867441/pexels-photo-5867441.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Автосалон"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-white">
                <div className="text-4xl font-bold">12+</div>
                <div className="text-sm opacity-90">лет опыта</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{description}</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900 rounded-xl p-5 border border-gray-800"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-orange-500">{stat.icon}</div>
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
