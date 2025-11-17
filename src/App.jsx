import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-emerald-100 py-10 bg-emerald-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-emerald-800/80">© {new Date().getFullYear()} Verdant Landscapes. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-emerald-900/80">
            <a href="#services" className="hover:text-emerald-900">Services</a>
            <a href="#portfolio" className="hover:text-emerald-900">Portfolio</a>
            <a href="#testimonials" className="hover:text-emerald-900">Testimonials</a>
            <a href="#contact" className="hover:text-emerald-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;