import React, { useState, useEffect } from "react";

function Wave({ color, children }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 960);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 960);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        style={{
          marginTop: isDesktop ? "-10px" : "0",
          marginBottom: "-20px",
          marginLeft: "-150px",
          marginRight: "-150px",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={color}
            fillOpacity="1"
            d="M0,150L48,155.3C96,160,192,170,288,186.3C384,202,480,224,576,207.7C672,192,768,138,864,138.3C960,138,1056,192,1152,191.7C1248,192,1344,138,1392,111.7L1440,85L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      {children}
      <div
        style={{
          marginBottom: isDesktop ? "-150px" : "0",
          marginLeft: "-150px",
          marginRight: "-150px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ transform: "rotate(0.5turn)" }}
        >
          <path
            fill={color}
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Wave;
