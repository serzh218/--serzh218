
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Truck, Award, HeadphonesIcon, FileCheck } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Гарантия качества',
    description: 'Все автомобили проходят тщательную проверку перед продажей'
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Выгодный кредит',
    description: 'Оформление автокредита от 4.9% годовых без скрытых комиссий'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Доставка по России',
    description: 'Бесплатная доставка автомобиля в любой город России'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Trade-in',
    description: 'Обмен вашего старого автомобиля на новый с доплатой'
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: 'Поддержка 24/7',
    description: 'Консультация специалистов в любое время дня и ночи'
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: 'Юридическая чистота',
    description: 'Полная проверка истории автомобиля и документов'
  }
];

export function Features({
  title = 'Почему выбирают нас',
  subtitle = 'Мы предоставляем полный комплекс услуг при покупке автомобиля'
}: FeaturesProps) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
