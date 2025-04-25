
import { LucideIcon, Cpu, MessageCircle, Zap, Layers, Shield, Globe } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const FeatureCard = ({ title, description, icon: Icon, color }: FeatureCardProps) => {
  return (
    <div className="glass-morphism p-6 rounded-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-primary/10 group">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "AI-Powered Design",
      description: "Generate beautiful interfaces and 3D models with advanced AI that understands design principles.",
      icon: Cpu,
      color: "bg-purple-500/20",
    },
    {
      title: "Natural Language",
      description: "Describe what you want in plain language and watch as your ideas are transformed into reality.",
      icon: MessageCircle,
      color: "bg-blue-500/20",
    },
    {
      title: "Lightning Fast",
      description: "Get results in seconds, not hours. Iterate quickly and explore multiple design directions.",
      icon: Zap,
      color: "bg-yellow-500/20",
    },
    {
      title: "Component Library",
      description: "Access thousands of pre-built components that can be customized to fit your needs.",
      icon: Layers,
      color: "bg-green-500/20",
    },
    {
      title: "Secure & Private",
      description: "Your designs and data are encrypted and never shared with third parties.",
      icon: Shield,
      color: "bg-red-500/20",
    },
    {
      title: "Multilingual Support",
      description: "Create designs in over 100 languages to reach a global audience.",
      icon: Globe,
      color: "bg-indigo-500/20",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Powerful Features
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Everything you need to transform your ideas into stunning visual experiences
            with the power of AI and cutting-edge design technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
