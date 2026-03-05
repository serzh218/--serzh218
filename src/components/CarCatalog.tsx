
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Fuel, Gauge, Settings } from 'lucide-react';

interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  image: string;
  isNew: boolean;
}

interface CarCatalogProps {
  title?: string;
  subtitle?: string;
}

const cars: Car[] = [
  {
    id: '1',
    brand: 'BMW',
    model: 'X5 xDrive40i',
    year: 2024,
    price: 8900000,
    mileage: 0,
    fuel: 'Бензин',
    transmission: 'Автомат',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
    isNew: true
  },
  {
    id: '2',
    brand: 'Mercedes-Benz',
    model: 'E-Class E300',
    year: 2023,
    price: 6500000,
    mileage: 15000,
    fuel: 'Бензин',
    transmission: 'Автомат',
    image: 'https://images.pexels.com/photos/1209776/pexels-photo-1209776.jpeg?auto=compress&cs=tinysrgb&w=800',
    isNew: false
  },
  {
    id: '3',
    brand: 'Audi',
    model: 'A6 55 TFSI',
    year: 2024,
    price: 7200000,
    mileage: 0,
    fuel: 'Бензин',
    transmission: 'Автомат',
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
    isNew: true
  },
  {
    id: '4',
    brand: 'Toyota',
    model: 'Camry 3.5',
    year: 2024,
    price: 4200000,
    mileage: 0,
    fuel: 'Бензин',
    transmission: 'Автомат',
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800',
    isNew: true
  },
  {
    id: '5',
    brand: 'Lexus',
    model: 'RX 350',
    year: 2023,
    price: 7800000,
    mileage: 8000,
    fuel: 'Бензин',
    transmission: 'Автомат',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
    isNew: false
  },
  {
    id: '6',
    brand: 'Porsche',
    model: 'Cayenne',
    year: 2024,
    price: 12500000,
    mileage: 0,
    fuel: 'Бензин',
    transmission: 'Автомат',
    image: 'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=800',
    isNew: true
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
};

export function CarCatalog({
  title = 'Каталог автомобилей',
  subtitle = 'Представляем лучшие автомобили от проверенных дилеров'
}: CarCatalogProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filter, setFilter] = useState<'all' | 'new' | 'used'>('all');

  const filteredCars = cars.filter(car => {
    if (filter === 'new') return car.isNew;
    if (filter === 'used') return !car.isNew;
    return true;
  });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <section id="catalog" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { key: 'all', label: 'Все' },
            { key: 'new', label: 'Новые' },
            { key: 'used', label: 'С пробегом' }
          ].map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setFilter(tab.key as typeof filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                filter === tab.key
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {car.isNew && (
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Новый
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                <motion.button
                  onClick={() => toggleFavorite(car.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(car.id) ? 'fill-red-500 text-red-500' : 'text-white'
                    }`}
                  />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{car.brand}</h3>
                    <p className="text-gray-400">{car.model}</p>
                  </div>
                  <span className="text-sm text-gray-500">{car.year}</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Gauge className="w-4 h-4 text-orange-500" />
                    <span>{car.mileage === 0 ? '0 км' : `${car.mileage.toLocaleString()} км`}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Fuel className="w-4 h-4 text-orange-500" />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Settings className="w-4 h-4 text-orange-500" />
                    <span>{car.transmission}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className="text-xl font-bold text-white">{formatPrice(car.price)}</span>
                  <motion.button
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Подробнее
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="bg-gray-800 border border-gray-700 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Показать ещё автомобили
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
