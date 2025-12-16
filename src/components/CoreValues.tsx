import React from 'react';
import { Shield, Target, BookOpen, Lightbulb } from 'lucide-react';

const CoreValues = () => {
  // Data for the top section bullet points
  const bulletPoints = [
    "Integrated multi logistics platforms",
    "Live end to end supply chain visibility",
    "Customized portals to customer communications",
    "Tools to automate customer communications",
    "Real time business intelligence and reporting"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* --- TOP SECTION: Text & Map Image --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800">OGL - Digital Logistics</h3>
            <p className="text-gray-600 leading-relaxed">
              It's our solution-based logistics services couple with the best
              technology that makes us standout. We believe in providing the
              right services using the right tools at the right time.
            </p>
            <ul className="space-y-3 mt-4">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Map Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" 
              alt="Global Logistics Network" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* --- BOTTOM SECTION: Core Values Grid --- */}
        {/* Layout: Column 1 (Cards) | Column 2 (Tall Image) | Column 3 (Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: 2 Cards */}
          <div className="flex flex-col justify-between gap-8 h-full">
            <ValueCard 
              icon={Target} 
              title="Strive for excellence" 
            />
            <ValueCard 
              icon={Shield} 
              title="Open & honest relationship with communications" 
            />
          </div>

          {/* Center Column: Tall Image */}
          <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
             <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" 
              alt="Truck Logistics" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: 2 Cards */}
          <div className="flex flex-col justify-between gap-8 h-full">
            <ValueCard 
              icon={BookOpen} 
              title="Adapt, learn & assimilate the best industry practices" 
            />
            <ValueCard 
              icon={Lightbulb} 
              title="Embrace innovation" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Card Component to match the design in the image
// (White box, border, centered icon in circle, text below)
const ValueCard = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="bg-white border-2 border-gray-200 rounded-xl p-8 flex flex-col items-center text-center justify-center h-full hover:shadow-lg transition-shadow duration-300 min-h-[220px]">
    <div className="mb-6 relative">
      {/* Circle Ring */}
      <div className="w-20 h-20 rounded-full border-4 border-gray-900 flex items-center justify-center">
        {/* Inner Icon styling to look like the 'C' logo */}
        <Icon className="w-8 h-8 text-rose-600" strokeWidth={2.5} />
      </div>
    </div>
    <h3 className="font-bold text-gray-800 text-lg leading-tight px-2">
      {title}
    </h3>
  </div>
);

export default CoreValues;
