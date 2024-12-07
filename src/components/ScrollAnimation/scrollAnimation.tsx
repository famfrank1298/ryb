// components/ScrollAnimation.jsx
import { useEffect } from "react";

const ScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return null;
};

export default ScrollAnimation;
