import React from 'react';

const CoreValues = () => {
  // Your Original OGL Content
  const features = [
    { 
      title: "Integrated multi logistics platforms", 
      description: "Flexible and efficient platforms for seamless operations.", 
    },
    { 
      title: "Live end to end supply chain visibility", 
      description: "Real-time tracking and monitoring across the entire chain.", 
    },
    { 
      title: "Customized portals to customer communications", 
      description: "Tailored interfaces for effective client interaction.", 
    },
    { 
      title: "Tools to automate customer communications", 
      description: "Automated systems for timely and accurate updates.", 
    },
    { 
      title: "Real time business intelligence reporting", 
      description: "Instant insights and analytics for decision making.", 
    },
  ];

  const values = [
    { title: "Strive for excellence", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Adapt & learn industry practices", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { title: "Open & honest communications", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
    { title: "Embrace innovation", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  ];

  return (
    <section className="bg-[#052e3b] text-white font-sans overflow-hidden">
      
      {/* 1. HERO / FEATURES SECTION (The "Ocean Grid" Look) */}
      <div className="relative w-full border-b border-teal-500/20">
        
        {/* Background Image spanning the whole section */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-35d32469f125?q=80&w=2500&auto=format&fit=crop')",
          }}
        />
        {/* Heavy Teal Overlay */}
        <div className="absolute inset-0 z-0 bg-[#062c38]/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#052e3b] to-transparent opacity-90"></div>

        <div className="container mx-auto max-w-[1600px] relative z-10">
          
          {/* Header */}
          <div className="pt-24 pb-12 px-6 lg:px-0">
             <span className="block text-teal-400 font-bold tracking-wider text-sm mb-2 uppercase">
                Digital Logistics Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                OGL - Digital Logistics
              </h2>
          </div>

          {/* The Grid - Force 5 columns on large screens to match the 'strip' look */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-l border-teal-500/30">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative h-[450px] p-8 flex flex-col justify-end border-r border-b border-teal-500/30 hover:bg-white/5 transition-all duration-300"
              >
                {/* Large Thin Arrow (Top Right) */}
                <div className="absolute top-6 right-6 text-teal-200/30 group-hover:text-white transition-colors duration-500">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>

                {/* Content aligned to bottom */}
                <div className="relative z-10 transform translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-3 text-white leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-teal-100/70 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* "Read More" removed as requested */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* 2. CORE VALUES SECTION (Styled to match the dark theme) */}
      <div className="py-24 bg-[#052e3b] relative">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-12">
               <span className="text-teal-500 font-bold tracking-wider text-sm uppercase mb-2 block">Our DNA</span>
               <h3 className="text-3xl font-bold text-white">Core Values</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="group bg-[#083542] p-10 rounded-[2rem] border border-teal-500/10 hover:border-teal-500 hover:bg-[#0a3f4f] transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 mb-6 text-teal-400 group-hover:text-white transition-colors duration-300">
                     <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={val.icon} />
                     </svg>
                  </div>
                  <h4 className="text-white text-xl font-bold">
                    {val.title}
                  </h4>
                </div>
              ))}
            </div>
         </div>
      </div>

    </section>
  );
};

export default CoreValues;
