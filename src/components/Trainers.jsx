import React from "react";
import { trainers } from "../assets/imageLinks";

export default function Trainers() {
  return (
    <section name="Trainers" className="py-12 bg-gray-950 md:px-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl text-gray-200 font-mono tracking-wider font-bold sm:text-4xl md:text-4xl text-center mb-8">
          OUR TRAINERS
        </h2>
        <div
          className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-${Math.min(
            2,
            trainers.length - 1
          )} lg:grid-cols-${Math.min(
            2,
            trainers.length
          )} md:place-items-evenly`}
        >
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="flex flex-row space-x-6 items-start bg-white rounded-lg shadow-md p-6 space-y-2"
            >
              <div>
                <img
                  src={`${trainer.image}`}
                  alt={trainer.name}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">{trainer.name}</h3>
                <p className="text-gray-500 text-sm">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
