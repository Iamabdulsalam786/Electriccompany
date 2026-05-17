"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      className={`btn btn-primary btn-lg-square back-to-top ${visible ? 'd-flex' : 'd-none'}`}
      style={{ display: visible ? "flex" : "none" }}
    >
      <i className="fa fa-arrow-up"></i>
    </a>
  );
}
