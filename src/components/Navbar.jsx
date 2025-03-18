import React, { useState, useEffect } from "react";
import { logo } from "../assets/imageLinks";

function Navbar() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 400) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div
      className={`fixed z-50 py-1 top-0 w-full h-[70px] px-5 flex items-center  transition-all duration-500 ${
        show ? "bg-black" : "bg-transparent"
      }`}
    >
      <img
        className={`w-20 object-contain cursor-pointer ${
          show ? "opacity-100" : "opacity-0"
        } `}
        src={logo}
        alt="netflix-logo"
      />
    </div>
  );
}

export default Navbar;
