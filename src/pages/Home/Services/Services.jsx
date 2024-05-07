import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  });
  return (
    <div>
      <div className="text-center space-y-5">
        <h3 className="text-2xl font-bold text-[#FF3811]">Services</h3>
        <h2 className="text-5xl">Our Services Area</h2>
        <p className="md:w-3/4 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 place-items-center">
        {services.map((services) => (
          <ServicesCard key={services._id} services={services}></ServicesCard>
        ))}
      </div>
      <div
        className="w-full 
      flex justify-center items-center pt-10"
      >
        <button className="btn btn-outline btn-error mx-auto">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
