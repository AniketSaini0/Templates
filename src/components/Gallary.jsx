import React, { useEffect, useState } from "react";
import {
  smallDeviceImages,
  largeDeviceImages,
  instagramLink,
} from "../assets/imageLinks";

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState(smallDeviceImages);

  // Update images based on screen size
  useEffect(() => {
    const updateGallery = () => {
      if (window.innerWidth >= 768) {
        setGalleryImages(largeDeviceImages);
      } else {
        setGalleryImages(smallDeviceImages);
      }
    };

    updateGallery(); // Run on initial load
    window.addEventListener("resize", updateGallery);

    return () => window.removeEventListener("resize", updateGallery);
  }, []);

  return (
    <div className="p-6 relative w-full">
      {/* <div className="absolute inset-0 -z-20- left-0 bottom-0 min-w-screen min-h-5/6 bg-gradient-to-b from-black opacity-40 via-transparent to-transparent"></div> */}
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

      {/* Responsive Grid Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {galleryImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Redirect to Instagram */}
      <div className="mt-4 text-center">
        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 transition"
        >
          20+ photos, click to view on Instagram →
        </a>
      </div>
    </div>
  );
}
