'use client';

import { motion } from 'framer-motion';
import { Leaf, Shield, Sparkles, Recycle } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Made from sustainable materials that reduce environmental impact',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Shield,
    title: 'BPA-Free',
    description: '100% safe materials that protect your health and the environment',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Double-wall insulation keeps drinks cold for 24h, hot for 12h',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Recycle,
    title: 'Lifetime Warranty',
    description: 'Built to last with recyclable components and lifetime support',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}