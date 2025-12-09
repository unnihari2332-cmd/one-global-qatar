import { Users, UserCheck, FileText, Route, Globe, Cloud } from 'lucide-react';

const GlobalNetwork = () => {
  // Updated data to match the image provided
  const features = [
    { icon: Users, name: 'Consol Mate' },
    { icon: UserCheck, name: 'Partner Portal' }, // Using UserCheck to represent the partner team
    { icon: FileText, name: 'E-DO' },
    { icon: Route, name: 'Live Tracking' },
    { icon: Globe, name: 'Integrated Digital Logistics Platform' },
    { icon: Cloud, name: 'Cloud Based' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
            OUR GLOBAL NETWORK
          </h2>
          {/* Optional accent line */}
          <div className="w-20 h-1 bg-accent mx-auto mb-8" />
          
          {/* Long Description Text from Image */}
          <p className="font-body text-muted-foreground leading-relaxed max-w-5xl mx-auto text-justify md:text-center">
            ONE Global Logistics services W.L.L has a strong & Reliable Worldwide Agent network. OGL believes in Technology driven Logistic solution to provide a transparent and hassle free service to its agents & Customers. The strength of any organization is its individuals, and we are no different. We have good number of staffs catering to the business needs of the market. The departments are headed by professionals who have many years of experience in the logistics field as a neutral Sea LCL Consolidation Service Provider to serve the QATAR our network guarantees schedule integrity that's next to none. We have the best transit cycle, reliability, and rates you can find, along with the flexibility you want when it comes to smaller loads. Get in touch with our logistics team at Qatar – ONE GLOBAL LOGISTICS SERVICES now and we shall guarantee timely and professional services.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Container: Dark blue background with rounded corners matching the image */}
                <div className="w-20 h-20 mb-4 bg-primary rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                
                {/* Label */}
                <h3 className="font-heading font-medium text-primary text-center max-w-[150px] leading-tight">
                  {feature.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
