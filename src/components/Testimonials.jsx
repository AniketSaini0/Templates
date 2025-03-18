import React from "react";
import { testimonials } from "../assets/imageLinks";

export default function Testimonials() {
  return (
    <section name="Testimonials" className="py-12 md:px-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-center mb-8">
          Testimonials & Success Stories
        </h2>

        {/* Wrapper to enable horizontal scrolling on small screens */}
        <div className="overflow-x-auto sm:overflow-hidden pb-1">
          <div className="grid pb-2 snap-x snap-mandatory scrollbar-hide grid-flow-col sm:grid-flow-row grid-cols-[repeat(auto-fill,minmax(300px,1fr))] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 space-y-2 overflow-hidden min-w-[300px] sm:min-w-0"
              >
                {/* <div
                  src={testimonial.image ? testimonial.image : ""}
                  aria-label={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                /> */}
                <h3 className="text-md font-bold">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
