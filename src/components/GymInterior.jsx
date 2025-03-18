import React from "react";
import { features } from "../assets/imageLinks";

export default function GymInterior() {
  return (
    <section name="Gym-Interior" className="py-12 bg-black">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl text-gray-100 font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          What we provide
        </h2>
        <div className="overflow-x-auto sm:overflow-hidden">
          <div className="grid snap-x snap-mandatory scrollbar-hide grid-flow-col sm:grid-flow-row grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map((image, index) => (
              <div
                key={index}
                className="bg-white/20 border-amber-100 rounded-lg shadow-md drop-shadow-md overflow-hidden min-w-[250px] sm:min-w-0"
              >
                <div
                  style={{ backgroundImage: `url(${image.src})` }}
                  aria-label={`${image.alt}`}
                  className="w-full h-24 object-cover bg-center bg-no-repeat"
                />
                <div className="p-4 m-auto">
                  <h3 className="text-xl flex justify-center font-bold text-gray-100">
                    {image.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
