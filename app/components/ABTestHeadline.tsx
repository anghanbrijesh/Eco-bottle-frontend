'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ABTestHeadline() {
  const searchParams = useSearchParams();
  const [variant, setVariant] = useState<'A' | 'B'>('A');

  useEffect(() => {
    const variantParam = searchParams.get('variant');
    if (variantParam === 'B') {
      setVariant('B');
    } else {
      setVariant('A');
    }
  }, [searchParams]);

  const headlines = {
    A: {
      title: 'Why Choose Our Eco Bottles?',
      subtitle: 'Sustainable, durable, and designed for your lifestyle',
    },
    B: {
      title: 'Join the Sustainability Revolution',
      subtitle: 'Every bottle saves 156 plastic bottles per year',
    },
  };

  return (
    <section className="py-16 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {headlines[variant].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {headlines[variant].subtitle}
          </p>
          <div className="mt-4 text-sm text-gray-400">
            Viewing variant: {variant}
          </div>
        </motion.div>
      </div>
    </section>
  );
}