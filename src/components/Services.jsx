import { motion } from 'framer-motion';
import { Leaf, Droplets, Trees, Sun } from 'lucide-react';

const services = [
  {
    icon: Trees,
    title: 'Landscape Design',
    desc: 'High-end, native-forward designs that balance beauty and biodiversity.',
  },
  {
    icon: Droplets,
    title: 'Irrigation & Water',
    desc: 'Smart, water-wise systems that nourish plants while conserving resources.',
  },
  {
    icon: Leaf,
    title: 'Garden Care',
    desc: 'Organic maintenance, soil health, and seasonal planting for year-round vitality.',
  },
  {
    icon: Sun,
    title: 'Lighting & Hardscape',
    desc: 'Warm lighting, stonework, decks, and paths that elevate your outdoor experience.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white to-emerald-50">
      {/* subtle parallax grass blades */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-20 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bottom-0 w-0.5 bg-emerald-400/60"
            style={{ left: `${i * 2}%`, height: `${8 + Math.random() * 24}rem`, borderTopLeftRadius: 999, borderTopRightRadius: 999 }}
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 4 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-emerald-900">Services</h2>
          <p className="mt-3 text-emerald-800/80">Eco-conscious solutions for luxurious outdoor living.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl bg-white/80 backdrop-blur border border-emerald-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 grid place-items-center shadow-inner mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900">{title}</h3>
              <p className="mt-2 text-emerald-800/80">{desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
              <button className="mt-4 text-emerald-700 hover:text-emerald-900 font-medium">Learn more →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
