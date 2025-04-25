
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const examples = [
  {
    id: 1,
    title: "Product Dashboard",
    description: "A modern analytics dashboard with interactive charts and real-time data visualization.",
    image: "/lovable-uploads/6d9b54c2-64d4-44f3-959b-b0c71fff7a04.png",
    tags: ["Dashboard", "Analytics", "Web App"],
  },
  {
    id: 2,
    title: "Mobile App Interface",
    description: "Clean and intuitive mobile application interface with smooth navigation and animations.",
    image: "/lovable-uploads/7973c816-d414-4bfa-b312-1407036a6e21.png",
    tags: ["Mobile", "UI/UX", "App Design"],
  },
];

const ExamplesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % examples.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + examples.length) % examples.length);
  };

  return (
    <section id="how-it-works" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            See What's Possible
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Explore examples of what you can create with our AI-powered design platform
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="glass-morphism rounded-2xl overflow-hidden">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <div
                className="flex transition-transform duration-500 h-full"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {examples.map((example) => (
                  <div key={example.id} className="min-w-full h-full relative">
                    <img
                      src={example.image}
                      alt={example.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8">
                      <div className="flex gap-2 mb-3">
                        {example.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white/90"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {example.title}
                      </h3>
                      <p className="text-white/80 max-w-lg">
                        {example.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-6">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Previous example"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {examples.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeIndex === index ? "bg-primary" : "bg-white/20"
                    }`}
                    aria-label={`Go to example ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Next example"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
