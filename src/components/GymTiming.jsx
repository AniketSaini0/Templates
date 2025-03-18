import React from "react";

export default function GymTimings() {
  const timings = [
    { day: "Monday - Friday", time: "6:00 AM - 10:00 PM" },
    { day: "Saturday", time: "8:00 AM - 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section name="Gym-Timing" className="py-12 bg-gray-100 md:px-36">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-4xl text-center mb-8">
          Gym Timings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {timings.map((timing, index) => (
            <div
              key={index}
              className="bg-white flex items-center gap-2 rounded-lg shadow-md p-6"
            >
              <h3 className="text-md font-bold">{timing.day} - </h3>
              <p className="text-sm">{timing.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
