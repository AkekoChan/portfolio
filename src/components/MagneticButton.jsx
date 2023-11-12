import React, { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { gsap } from "gsap";

const MagneticButton = ({ label, to, isInternal }) => {
  useEffect(() => {
    const magnets = document.querySelectorAll(".magnetic");
    const strength = 30;

    const moveMagnet = (event) => {
      const magnetButton = event.currentTarget;
      const bounding = magnetButton.getBoundingClientRect();

      gsap.to(magnetButton, {
        duration: 1,
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          strength,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          strength,
        ease: "power4.out",
      });
    };

    magnets.forEach((magnet) => {
      magnet.addEventListener("mousemove", moveMagnet);
      magnet.addEventListener("mouseout", (event) => {
        gsap.to(event.currentTarget, {
          duration: 1,
          x: 0,
          y: 0,
          ease: "power4.out",
        });
      });
    });
  }, []); // Le tableau vide [] signifie que cela s'exécutera une seule fois, équivalent à componentDidMount

  if (isInternal) {
    return (
      <div className="magnetic">
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          className="magnetic-button"
        >
          {label}
        </ScrollLink>
      </div>
    );
  } else {
    return (
      <div className="magnetic">
        <a href={to} className="magnetic-button">
          {label}
        </a>
      </div>
    );
  }
};

export default MagneticButton;
