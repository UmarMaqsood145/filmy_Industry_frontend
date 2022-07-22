import React, { useState, useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";

function BackToTopButton() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTop && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#0ca4eb",
            color: "white",
            padding: "7px 7px",
            cursor: "pointer",
            borderRadius: "3px",
          }}
          onClick={scrollUp}
        >
          <BsChevronUp fontSize={25} />
        </div>
      )}
    </>
  );
}

export default BackToTopButton;
