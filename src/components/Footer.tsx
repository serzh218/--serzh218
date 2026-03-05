
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  companyName?: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
}

export function Footer({
  companyName = 'AutoPrime',
  description = 'Ваш надежный партнер в мире автомобилей. Мы помогаем найти автомобиль мечты с 2012 года.',
  phone = '+7 (999) 123-45-67',
  email = 'info@autoprime.ru',
  address = 'Москва, ул. Автомобильная, 1'
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.a
              href="#hero"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">{companyName}</span>
            </motion.a>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-3">
              {['Главная', 'Каталог', 'О нас', 'Контакты', 'Акции'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-3">
              {['Автокредит', 'Trade-in', 'Страхование', 'Техобслуживание', 'Выкуп авто'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <a href={`tel:${phone}`} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href={`mailto:${email}`} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {companyName}. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors text-sm">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors text-sm">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
