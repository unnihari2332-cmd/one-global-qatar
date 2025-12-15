import { Plane, Ship, Truck, Package, Boxes, Warehouse } from "lucide-react";
import OneGlobalCard from "./OneGlobalCard";

const ServicesScroll = () => {
  const services = [
    {
      image: "/aircargo2.png",
      title: "Air Freight",
      icon: <Plane />,
      points: [
        "Express & deferred services",
        "Airport-to-airport & door-to-door",
        "Dangerous goods & temperature-controlled cargo",
      ],
    },
    {
      image: "/oceanf.png",
      title: "Sea Freight",
      icon: <Ship />,
      points: [
        "FCL & LCL solutions",
        "Breakbulk & Ro-Ro cargo",
        "Global consolidation network",
      ],
    },
    {
      image: "/CARGO.png",
      title: "Road Freight",
      icon: <Truck />,
      points: [
        "GCC transportation",
        "Cross-border trucking",
        "Last-mile delivery",
      ],
    },
    {
      image: "/lovable-uploads/cc.jpg",
      title: "Customs Clearance",
      icon: <Package />,
      points: [
        "Import & export clearance",
        "Free zone & mainland support",
        "Regulatory compliance",
      ],
    },
    {
      image: "/warhouseh1.png",
      title: "Warehousing",
      icon: <Warehouse />,
      points: [
        "Bonded & non-bonded storage",
        "Inventory management",
        "Value-added services",
      ],
    },
    {
      image: "/h4.png",
      title: "Project Logistics",
      icon: <Boxes />,
      points: [
        "End-to-end planning",
        "Heavy & OOG cargo",
        "Dedicated project team",
      ],
    },
  ];

  return (
    <section className="bg-[#0E3A45] py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 text-white">
          <span className="uppercase text-sm tracking-widest text-orange-400">
            What We Offer
          </span>
          <h2 className="text-4xl font-bold mt-2">
            Explore Our Services
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mt-3">
            Reliable, scalable and technology-driven logistics solutions worldwide.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <OneGlobalCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesScroll;
