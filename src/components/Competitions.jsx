import React from "react";
import { competitions, instagramLink } from "../assets/imageLinks";

export default function Competitions() {
  return (
    <section
      name="Competitions"
      className=" relative py-12 md:px-32 bg-gray-950"
    >
      <div className="absolute -z-20- left-0 top-0 min-w-screen min-h-2/12 bg-gradient-to-b from-white via-transparent to-transparent"></div>

      <div className="container px-4 md:px-6">
        <h2 className="text-2xl pt-1.5 tracking-wide text-gray-100 font-bold  sm:text-4xl md:text-4xl text-center mb-8">
          Competitions & Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {competitions.map((comp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 space-y-2"
            >
              <h3 className="text-md font-bold">{comp.name}</h3>
              <p className="text-sm">{comp.details}</p>
            </div>
          ))}
        </div>

        {/* Instagram Redirect Link */}
        <div className="text-center mt-8">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition"
          >
            Checkout our Instagram for more ---&gt;
          </a>
        </div>
      </div>
    </section>
  );
}
