import React from "react";
import { equipment, equipmentBackgroundImg } from "../assets/imageLinks";

export default function Equipment() {
  return (
    <section name="Equipment" className="relative py-12 bg-gray-950">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed sm:bg-scroll"
        style={{ backgroundImage: `url(${equipmentBackgroundImg})` }}
      ></div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative px-4 md:px-6 z-10">
        <h2 className="text-2xl text-gray-200 font-bold tracking-wide sm:text-4xl md:text-4xl text-center mb-8">
          Our Equipments
        </h2>

        {/* Equipment Cards (Horizontal Scroll on Mobile) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 p-4 sm:scrollbar-hide">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md min-w-[200px] h-auto overflow-hidden snap-start"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-32 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{item.alt}</h3>
                <p className="text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
