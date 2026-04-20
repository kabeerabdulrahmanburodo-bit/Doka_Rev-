import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, Zap, Target, Crosshair, Wrench, Quote } from 'lucide-react';
import { MagneticButton } from './components/MagneticButton';
import { useState, useEffect } from 'react';

const builds = [
  { title: "Project Apex", chassis: "E92 M3", hp: "850HP", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop" },
  { title: "Nightmare", chassis: "Nissan S15", hp: "720HP", img: "https://images.unsplash.com/photo-1600705663784-219eeefe23d5?q=80&w=1000&auto=format&fit=crop" },
  { title: "Widowmaker", chassis: "A90 Supra", hp: "900HP", img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1000&auto=format&fit=crop" }
];

const services = [
  { title: "Performance Tuning", cta: "Get Tuned", icon: Zap, desc: "Dyno-proven ECU mapping for relentless power delivery." },
  { title: "Pro Drift Setup", cta: "Dial It In", icon: Crosshair, desc: "Custom geometry, angle kits, and suspension tuning." },
  { title: "Custom Aero", cta: "Upgrade Look", icon: Target, desc: "Wind-tunnel tested aggressive bodywork and downforce." },
  { title: "Turnkey Builds", cta: "Commission Build", icon: Wrench, desc: "Ground-up chassis fabrication and engine swaps." }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  // Dynamic header background
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#FF2A00] selection:text-white font-sans overflow-x-hidden">
      
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-[#FF2A00] flex items-center justify-center transform -skew-x-12 shrink-0">
              <span className="font-heading font-bold text-xl tracking-tighter text-white">DR</span>
            </div>
            <div className="font-heading font-bold text-2xl tracking-widest uppercase text-white">
              Doka <span className="text-[#FF2A00]">Rev</span>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex space-x-10 font-heading uppercase text-sm tracking-widest font-medium text-gray-400">
              <a href="#garage" className="hover:text-white transition-colors">Garage</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#shop" className="hover:text-white transition-colors">Shop</a>
              <a href="#media" className="hover:text-white transition-colors">Media</a>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 text-xs font-heading tracking-widest text-[#FF7300]">
              <div className="w-2 h-2 rounded-full bg-[#FF7300] animate-pulse"></div>
              <span>2 SLOTS OPEN FOR Q4</span>
            </div>
            <div className="hidden md:block">
              <MagneticButton className="px-6 py-2.5 text-sm">Start Build</MagneticButton>
            </div>
            <button className="md:hidden text-white hover:text-[#FF2A00] transition-colors"><Zap /></button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Dark overlays and image placeholder simulating cinematic video */}
           <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A] z-10"></div>
           <div className="absolute inset-0 bg-[#0A0A0A]/40 z-10"></div>
           <motion.div 
             className="w-full h-full"
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
           >
             <img src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2500&auto=format&fit=crop" alt="Hero Drift Car" className="w-full h-full object-cover origin-center" />
           </motion.div>
        </div>

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-7xl md:text-[8rem] lg:text-[10rem] font-bold uppercase tracking-tighter leading-[0.85] mb-6 text-white"
          >
            Engineered To <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2A00] to-[#FF7300]">Dominate.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-medium"
          >
            Elite custom drift builds and high-performance tuning for those who refuse to blend in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton className="w-full sm:w-auto px-10 py-5 text-lg">
              Start Your Build <ChevronRight className="ml-2 w-5 h-5" />
            </MagneticButton>
            <MagneticButton variant="secondary" className="w-full sm:w-auto px-10 py-5 text-lg">
              Enter The Garage
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Strip */}
      <div className="border-y border-white/5 py-4 bg-[#1A1A1A]/50 overflow-hidden relative group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-[200%] animate-marquee">
          <div className="flex w-1/2 justify-around items-center font-heading text-sm text-gray-400 tracking-widest uppercase">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF2A00]"></div> 150+ Elite Builds Worldwide</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF2A00]"></div> 5 National Drift Podiums</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF2A00]"></div> 250K+ Global Crew</span>
          </div>
          <div className="flex w-1/2 justify-around items-center font-heading text-sm text-gray-400 tracking-widest uppercase">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF2A00]"></div> 150+ Elite Builds Worldwide</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF2A00]"></div> 5 National Drift Podiums</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#FF2A00]"></div> 250K+ Global Crew</span>
          </div>
        </div>
      </div>

      {/* Problem / Desire */}
      <section className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF2A00]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8">
              Tired of being in the <span className="text-[#FF2A00]">rearview?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-sans max-w-3xl mx-auto">
              You don't just want a car. You want a weapon. DOKA REV engineers aggressive aero, dialed-in angle kits, and raw horsepower that commands respect on the street and the track.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Builds (Garage) */}
      <section id="garage" className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-heading text-[#FF2A00] tracking-widest text-sm font-bold uppercase mb-4">The Garage</h2>
              <p className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tight">Featured Builds</p>
            </div>
            <div className="hidden md:block">
              <MagneticButton variant="outline" className="px-6 py-3 text-sm">
                View All Builds
              </MagneticButton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {builds.map((build, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative h-[500px] bg-[#1A1A1A] overflow-hidden cursor-pointer"
              >
                <img src={build.img} alt={build.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="font-display text-4xl font-bold uppercase tracking-tight">{build.title}</h3>
                    <span className="font-heading text-xl text-[#FF2A00] font-bold">{build.hp}</span>
                  </div>
                  <div className="font-heading tracking-widest text-gray-400 text-sm uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Chassis: {build.chassis}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <MagneticButton variant="outline" className="w-full py-4 text-sm">
                View All Builds
             </MagneticButton>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-32 px-6 bg-[#1A1A1A] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading text-[#FF7300] tracking-widest text-sm font-bold uppercase mb-4">Our Expertise</h2>
            <p className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tight">Precision Performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0A0A0A] p-8 border border-white/5 hover:border-[#FF2A00]/50 transition-colors duration-300 group flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-[#FF2A00]/10 flex items-center justify-center mb-6 group-hover:bg-[#FF2A00] transition-colors duration-300 transform -skew-x-12">
                  <service.icon className="w-6 h-6 text-[#FF2A00] group-hover:text-white transition-colors duration-300 skew-x-12" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-3">{service.title}</h3>
                <p className="text-gray-400 font-sans text-sm mb-8 flex-grow">{service.desc}</p>
                <a href="#" className="inline-flex items-center text-sm font-heading font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#FF2A00] transition-colors mt-auto">
                  {service.cta} <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-6 bg-[#0A0A0A] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0A0A]/90 z-10"></div>
          <img src="https://images.unsplash.com/photo-1547038577-323ec1a4204c?q=80&w=2000&auto=format&fit=crop" alt="Background Texture" className="w-full h-full object-cover grayscale opacity-20" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-[#1A1A1A]/80 backdrop-blur-lg border border-[#FF2A00]/20 p-12 md:p-20 relative shadow-[0_0_50px_rgba(255,42,0,0.05)]"
          >
            <Quote className="w-16 h-16 text-[#FF2A00]/20 absolute top-8 left-8" />
            <p className="font-sans text-xl md:text-3xl font-medium text-gray-200 leading-relaxed mb-8 relative z-10">
              "DOKA REV didn't just build me a car. They built me a podium-winning machine. The chassis balance is psychopathic."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full border-2 border-[#FF2A00] overflow-hidden">
                 {/* Empty div representing user avatar for Alex V. */}
                 <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-lg uppercase tracking-wide">Alex V.</p>
                <p className="text-[#FF7300] font-sans text-sm font-medium">Pro-Am Drifter</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          {/* Dashboard POV image */}
          <img src="https://images.unsplash.com/photo-1546514355-7fdc90ccbc0a?q=80&w=2500&auto=format&fit=crop" alt="Driver POV" className="w-full h-full object-cover scale-105" />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-6 text-white shadow-black drop-shadow-2xl">
              Your Machine Is <span className="text-[#FF2A00]">Waiting.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12">
              Limited build slots available for this quarter. Let's talk numbers.
            </p>
            
            <div className="flex justify-center">
              <MagneticButton className="px-12 py-6 text-xl shadow-[0_0_30px_rgba(255,42,0,0.5)]">
                Secure Your Slot Now
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-heading tracking-widest text-gray-500 uppercase">
          <div className="flex justify-center items-center gap-2">
            <div className="w-8 h-8 bg-white/5 flex items-center justify-center transform -skew-x-12">
              <span className="font-bold text-white text-xs">DR</span>
            </div>
            <span>© 2026 DOKA REV PERFORMANCE.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
