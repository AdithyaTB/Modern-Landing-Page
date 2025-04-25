
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-morphism rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Ready to Transform Your Ideas?
              </h2>
              <p className="text-white/70 mb-6">
                Join thousands of designers and creators who are already using our platform to bring their ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  Get Started Free
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a 
                  href="#"
                  className="bg-white/10 hover:bg-white/15 text-white font-medium py-3 px-6 rounded-lg border border-white/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
                >
                  Schedule Demo
                </a>
              </div>
              <p className="mt-4 text-white/50 text-sm">
                No credit card required • Free 14-day trial
              </p>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-[50px]" />
                <div className="glass-morphism rounded-lg p-6 relative z-10">
                  <div className="flex mb-4 items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white/50 text-sm">Command Prompt</div>
                  </div>
                  <div className="font-mono text-sm text-white/80">
                    <p className="mb-2">$ <span className="text-green-400">create-design</span> --ui "modern dashboard with data visualization"</p>
                    <p className="mb-2 text-white/50">Generating design...</p>
                    <p className="mb-2 text-white/50">Applying style preferences...</p>
                    <p className="mb-2 text-green-400">✓ Design generated successfully!</p>
                    <p className="mb-2">$ <span className="text-green-400">export</span> --format react</p>
                    <p className="text-white/50">Exporting to React components...</p>
                    <p className="text-green-400">✓ Components ready to use!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
