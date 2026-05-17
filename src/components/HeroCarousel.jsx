"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function HeroCarousel() {
  return (
    <div className="header-carousel overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        loop={true}
        speed={1000}
      >
        <SwiperSlide>
          <div className="header-carousel-item hero-section">
            <div className="hero-bg-half-1"></div>
            {/* Removed the blue geometric overlapping shape */}
            <div className="carousel-caption">
              <div className="container">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7 animated fadeInLeft">
                    <div className="text-sm-center text-md-start">
                      <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: "2px", fontSize: "0.95rem" }}>
                        Current Electricity Services
                      </h4>
                      <h1 className="display-3 text-white mb-4 fw-bold" style={{ lineHeight: "1.2" }}>
                        Power for Seamless Electricity Solutions
                      </h1>
                      <p className="mb-4 fs-6 text-light" style={{ opacity: 0.9, lineHeight: "1.7" }}>
                        Deploy state-of-the-art grid distribution systems, high-voltage transformers, and intelligent energy management panels designed for modern sustainable infrastructures.
                      </p>
                      <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-3 mb-4">
                        <a className="btn btn-light py-3 px-4 fw-bold d-flex align-items-center gap-2" href="#ServiceTab-1" style={{ borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
                          <i className="fas fa-th-large text-primary"></i> 
                          <span>Explore Solutions</span>
                        </a>
                        <a className="btn btn-primary py-3 px-4 fw-bold" href="/contact" style={{ borderRadius: "12px", boxShadow: "0 4px 15px rgba(79, 70, 229, 0.2)" }}>
                          Request System Audit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="header-carousel-item hero-section">
            <div className="hero-bg-half-2"></div>
            {/* Removed the blue geometric overlapping shape */}
            <div className="carousel-caption">
              <div className="container">
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7 animated fadeInLeft">
                    <div className="text-sm-center text-md-start">
                      <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: "2px", fontSize: "0.95rem" }}>
                        Current Electricity Services
                      </h4>
                      <h1 className="display-3 text-white mb-4 fw-bold" style={{ lineHeight: "1.2" }}>
                        Experience The Power Of Professionalism
                      </h1>
                      <p className="mb-4 fs-6 text-light" style={{ opacity: 0.9, lineHeight: "1.7" }}>
                        We connect commercial enterprises and factories with elite automation controllers and substation support systems that maximize operational reliability.
                      </p>
                      <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-3 mb-4">
                        <a className="btn btn-light py-3 px-4 fw-bold d-flex align-items-center gap-2" href="#ServiceTab-1" style={{ borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
                          <i className="fas fa-th-large text-primary"></i> 
                          <span>Explore Solutions</span>
                        </a>
                        <a className="btn btn-primary py-3 px-4 fw-bold" href="/contact" style={{ borderRadius: "12px", boxShadow: "0 4px 15px rgba(79, 70, 229, 0.2)" }}>
                          Request System Audit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
