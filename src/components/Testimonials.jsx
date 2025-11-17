import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Our yard feels like a private sanctuary. Their team blended native species with modern design flawlessly.',
    name: 'Amelia R.',
  },
  {
    quote: 'They transformed our outdoor space into a vibrant, low‑maintenance garden we enjoy every day.',
    name: 'Jonathan K.',
  },
  {
    quote: 'Professional, sustainable, and stunning. The best investment we made for our home.',
    name: 'Priya S.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-emerald-900">What clients say</h2>
          <p className="mt-3 text-emerald-800/80">Kind words from homeowners and developers.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white/80 backdrop-blur border border-emerald-100 p-6 shadow-sm"
            >
              <p className="text-emerald-900/90">“{t.quote}”</p>
              <footer className="mt-4 text-emerald-700 font-medium">{t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
