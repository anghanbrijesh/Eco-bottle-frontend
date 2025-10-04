'use client';
import { motion, MotionStyle, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Droplet } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50">
      {/* Animated background circles */}
      <motion.div
        style={{ y }}
        className="absolute top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
        className="absolute top-40 -right-20 w-72 h-72 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: opacity } as MotionStyle}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <Droplet className="text-primary-600 w-8 h-8" />
              <span className="text-primary-700 font-semibold text-lg">
                Sustainable Living
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Hydrate{' '}
              <span className="text-primary-600">
                Sustainably
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
            >
              Premium eco-friendly water bottles designed for your active lifestyle. 
              Reduce plastic waste while staying hydrated in style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>

              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors"
              >
                Learn More
              </motion.a>
            </motion.div>

            {/* Stats - FIXED LAYOUT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 md:gap-8"
            >
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">Happy Customers</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">100%</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">BPA Free</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">24h</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">Cold Retention</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-[500px] md:h-[600px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80"
                alt="Eco-friendly water bottle"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Floating badges - FIXED POSITIONING */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-16 -left-4 md:top-20 md:-left-10 bg-white rounded-2xl shadow-xl p-4 z-20"
            >
              <div className="text-2xl mb-1">♻️</div>
              <div className="text-sm font-semibold whitespace-nowrap">100% Recyclable</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-32 -right-4 md:bottom-40 md:-right-10 bg-white rounded-2xl shadow-xl p-4 z-20"
            >
              <div className="text-2xl mb-1">❄️</div>
              <div className="text-sm font-semibold whitespace-nowrap">Stays Cold 24h</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}