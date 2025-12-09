import { CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    'Licensed freight forwarding company',
    'Expert team with decades of experience',
    'Global network spanning 50+ countries',
    'Competitive rates with no hidden charges',
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <img
              src="/About01.png"
              alt="About One Global Consolidators"
              className="w-full h-auto object-cover rounded-xl relative"
              style={{
                filter: "drop-shadow(0px 25px 60px rgba(0, 102, 255, 0.45))"
              }}
            />
          </div>

          {/* Text Section */}
          <div>
            <div className="text-center lg:text-left mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                ABOUT US
              </h2>

              <div className="w-20 h-1 bg-accent mx-auto lg:mx-0 mb-6" />
            </div>

            <div className="text-center lg:text-left">
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                One Global Consolidators (OGC) is a licensed freight forwarding company known 
                globally for providing fully-fledged container services across major trade routes. 
                Backed by decades of deep industry expertise, our team ensures every customer 
                receives world-class logistics support.
              </p>

              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
                We offer tailored logistics and freight management solutions designed to meet 
                the diverse needs of businesses around the world. Excellence, transparency, and 
                customer satisfaction are the pillars that define our service.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-secondary rounded-lg animate-fade-in text-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-body text-foreground">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
