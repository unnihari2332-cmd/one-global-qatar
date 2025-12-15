import { Shield, Award, Handshake, Clock } from 'lucide-react';
import digitalLogisticsImg from '@/assets/digital-logistics.png'; // update path if needed

const CoreValuesPage = () => {
  const values = [
    {
      title: 'Strive for excellence',
      icon: Shield,
    },
    {
      title: 'Adapt, learn & assimilate the best industry practices',
      icon: Award,
    },
    {
      title: 'Open & honest relationship with communications',
      icon: Handshake,
    },
    {
      title: 'Embrace innovation',
      icon: Clock,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">OGL - Digital Logistics</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              It’s our solution-based logistics services coupled with the best technology that makes us stand out.
              We believe in providing the right services using the right tools at the right time.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-5">
              <li>Integrated multi logistics platforms</li>
              <li>Live end to end supply chain visibility</li>
              <li>Customized portals to customer communications</li>
              <li>Tools to automate customer communications</li>
              <li>Real time business intelligence and reporting</li>
            </ul>
          </div>

          <div className="w-full h-[360px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={digitalLogisticsImg}
              alt="Digital Logistics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Core values section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left cards */}
          <div className="space-y-10">
            {values.slice(0, 2).map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center border rounded-xl p-8 shadow-sm"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <p className="font-semibold text-primary">{value.title}</p>
                </div>
              );
            })}
          </div>

          {/* Center image */}
          <div className="w-full h-[420px] rounded-xl overflow-hidden">
            <img
              src={digitalLogisticsImg}
              alt="Logistics Truck"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right cards */}
          <div className="space-y-10">
            {values.slice(2).map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center border rounded-xl p-8 shadow-sm"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <p className="font-semibold text-primary">{value.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesPage;
