import React, { useState, useEffect } from "react";
import { banners } from "../assets/imageLinks";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  return (
    <section
      name="Herosection"
      className="relative w-full min-h-[75vh] sm:h-[90vh] overflow-hidden"
    >
      {/* Parallax Image Wrapper */}
      <div className="absolute inset-0 w-full h-full object-cover bg-no-repeat">
        {banners.map((url, i) => (
          <div
            key={url}
            className={`absolute top-0 inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              currentIndex === i ? "opacity-100 scale-110" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${url}")`,
              transform: `translateY(${scrollY * 0.3}px)`, // Parallax Effect
            }}
            fetchPriority={i === 0 ? "high" : "auto"}
          ></div>
        ))}
      </div>

      {/* Overlay for Darkening */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content (Heading, Buttons, etc.) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-center px-4">
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold">FitLife Gym</h1>
          </div>
          <p className="text-xl md:text-2xl">
            Your Journey to Fitness Starts Here
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Call Us
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="relative">
        <button
          className="absolute right-24 top-[80vh] bg-white rounded-full p-2 shadow-lg z-20"
          onClick={prevSlide}
        >
          <CircleChevronLeft size={28} />
        </button>
        <button
          className="absolute right-6 top-[80vh] bg-white rounded-full p-2 shadow-lg z-40"
          onClick={nextSlide}
        >
          <CircleChevronRight size={28} />
        </button>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </section>
  );
}
