import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DrawPath = () => {
  useEffect(() => {
    const pathVar = document.querySelector(".theLine");
    const pathLength = pathVar.getTotalLength();
    pathVar.style.strokeDasharray = pathLength;
    pathVar.style.strokeDashoffset = pathLength;

    ScrollTrigger.create({
      trigger: pathVar,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const scrollPercentage = self.progress.toFixed(3) * 1.05;
        const drawLength = pathLength * scrollPercentage;

        let curOffset = parseFloat(pathVar.style.strokeDashoffset);
        pathVar.style.strokeDashoffset = Math.min(
          curOffset,
          pathLength - drawLength
        );
      },
    });
  }, []);

  return (
    <>
      <div className="pathDraw">
        <svg
          id="myPath"
          viewBox="0 0 360 6275"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="theLine"
            d="M269.677 10C183.087 33.3413 30.2693 190.101 111.721 630.411C140.564 786.331 286.52 1091.03 222.892 1244.52C178.965 1350.49 113.185 1340.62 61.2673 1303.31C41.1443 1288.85 7.36053 1302.65 10.3867 1327.25C22.7165 1427.46 50.8319 1567.23 104.814 1662.33C176.463 1788.56 227.125 1795.84 249.181 1815.92C284.159 1849.99 332.771 1954.75 283.936 2067.54C235.101 2180.32 164.373 2114.53 135.113 2067.54C200.539 2190.31 329.162 2460.23 320.25 2557.7C312.051 2647.39 334.28 2775.3 349.281 2841.23C351.467 2850.84 347.943 2860.74 340.764 2867.49C281.713 2922.99 196.13 3068.28 249.181 3287.82C320.25 3581.92 310.67 4054.81 111.721 4430.61C-47.4392 4731.24 82.2383 4769.99 166.972 4751.78C278.366 4711.64 434.54 4527.24 291.065 4915.64C170.721 5241.42 220.86 5413.49 279.903 5482C292.634 5496.77 292.531 5523.47 277.146 5535.45C189.731 5603.54 73.268 5752.1 111.721 5961.33C155.922 6201.84 82.3125 6589.99 39.9828 6754"
            stroke="url(#paint0_linear_737_85)"
            strokeWidth="60"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_737_85"
              x1="266.113"
              y1="218.906"
              x2="-119.713"
              y2="6736.38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E83B68" />
              <stop offset="0.125" stopColor="#F9D55B" />
              <stop offset="0.25" stopColor="#E83B68" />
              <stop offset="0.375" stopColor="#F9D35D" />
              <stop offset="0.5" stopColor="#E83B68" />
              <stop offset="0.625" stopColor="#F9D35D" />
              <stop offset="0.75" stopColor="#E83B68" />
              <stop offset="0.875" stopColor="#F9D35D" />
              <stop offset="1" stopColor="#E83B68" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};
export default DrawPath;
