
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const orb = orbRef.current;

    if (!container || !orb) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / 20;
      const moveY = (y - centerY) / 20;
      
      orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen pt-24 flex flex-col items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Background Orbs */}
      <div className="absolute pointer-events-none inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/30 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div 
          ref={orbRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/20 blur-[80px] transition-transform duration-300"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6 py-1 px-3 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-white/70 text-sm font-medium">Introducing the future of UI/UX</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
            Speak Anything Into Existence
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Generate stunning interfaces, 3D models, and digital experiences with the power of AI. Transform your ideas into reality with just a few words.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#features" 
              className="bg-primary hover:bg-primary/90 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center justify-center min-w-[180px]"
            >
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#how-it-works" 
              className="bg-white/10 hover:bg-white/15 text-white font-medium py-3 px-8 rounded-full border border-white/10 backdrop-blur-sm transition-all duration-300 min-w-[180px]"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce h-10 w-6 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
