import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient with soft greens and earth tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-green-50 to-white" />

      {/* Floating pollen particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-300/40"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Spline plant animation */}
      <div className="relative h-[70vh] md:h-[78vh] lg:h-[86vh]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Overlay content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-emerald-900"
            >
              Lush, sustainable landscapes that feel alive
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-5 text-emerald-800/80 text-lg leading-relaxed"
            >
              We design and maintain high-end outdoor spaces with native plants,
              water-wise systems, and eco-friendly practices.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#services" className="inline-flex items-center rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 shadow-lg shadow-emerald-600/20 transition-colors">
                Explore Services
              </a>
              <a href="#portfolio" className="inline-flex items-center rounded-full bg-white/80 hover:bg-white text-emerald-900 px-6 py-3 border border-emerald-100 backdrop-blur">
                View Portfolio
              </a>
            </motion.div>
          </div>
        </div>

        {/* Soft gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/80" />
      </div>
    </section>
  );
}
