
import { Check } from "lucide-react";

interface PricingPlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan = ({ title, price, description, features, isPopular }: PricingPlanProps) => {
  return (
    <div className={`glass-morphism rounded-xl overflow-hidden transition-all duration-300 flex flex-col ${isPopular ? 'border-primary/50 border-2' : 'border-white/10'}`}>
      {isPopular && (
        <div className="bg-primary text-center py-1 text-sm font-semibold text-black">
          Most Popular
        </div>
      )}
      <div className="p-8 flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/70 mb-6">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Free' && <span className="text-white/70 ml-2">/month</span>}
        </div>
        
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <span className="mr-2 bg-primary/20 p-1 rounded-full"><Check size={16} className="text-primary" /></span>
              <span className="text-white/80">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-auto">
          <a
            href="#contact"
            className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
              isPopular
                ? "bg-primary hover:bg-primary/90 text-black"
                : "bg-white/10 hover:bg-white/15 text-white"
            }`}
          >
            {isPopular ? "Get Started" : "Choose Plan"}
          </a>
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "Free",
      description: "Perfect for trying out the platform",
      features: [
        "10 design generations per month",
        "Export in PNG format",
        "Basic component library",
        "Community support",
      ],
    },
    {
      title: "Professional",
      price: "$29",
      description: "For professional creators and designers",
      features: [
        "Unlimited design generations",
        "Export in all formats (PNG, SVG, React)",
        "Full component library access",
        "Priority support",
        "Custom brand settings",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "$99",
      description: "For teams and organizations",
      features: [
        "Everything in Professional",
        "Team collaboration tools",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "99.9% uptime SLA",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Choose the plan that works best for your needs. All plans include core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
