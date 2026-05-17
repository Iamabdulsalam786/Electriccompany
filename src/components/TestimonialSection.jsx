"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Evelyn Sterling",
      role: "Director of Infrastructure, Sterling Industries",
      image: "/img/testimonial-1.jpg",
      text: "Electra completely revolutionized our factory's automation framework. Their power layout audits and intelligent backup setups reduced our energy consumption overhead by 30% while ensuring zero unscheduled downtime.",
      rating: 5
    },
    {
      id: 2,
      name: "Markus Vance",
      role: "Head of Operations, Vance Automation Group",
      image: "/img/testimonial-2.jpg",
      text: "The security systems and custom biometric access integrations designed by Electra are robust, secure, and state-of-the-art. Their team operates with absolute precision and unmatched technical expertise.",
      rating: 5
    },
    {
      id: 3,
      name: "Layla Gamil",
      role: "Lead Engineer, Cairo Grid Services",
      image: "/img/testimonial-3.jpg",
      text: "Electra's high-voltage engineering consultation and load flow analysis reports were critical in our urban substation expansion. Highly professional, responsive, and incredibly details-oriented team.",
      rating: 5
    }
  ];

  return (
    <div className="container-fluid testimonial py-5 position-relative overflow-hidden bg-light/40">
      <div className="container py-5 position-relative" style={{ zIndex: 10 }}>
        <div className="row g-5 align-items-center">
          {/* Left Column: Heading and Tag */}
          <div className="col-lg-6 col-xl-5 wow fadeInUp" data-wow-delay="0.2s">
            <div className="premium-tag-chip mb-3" style={{ background: "rgba(79, 70, 229, 0.08)", border: "1px solid rgba(79, 70, 229, 0.12)", color: "var(--bs-primary)" }}>
              <i className="fas fa-quote-left text-primary"></i>
              <span>Customer Praise</span>
            </div>
            
            <h1 className="display-4 text-dark fw-bold mb-4" style={{ lineHeight: "1.2" }}>
              Powerful Praise Heard From Our Enterprise Customers
            </h1>
            
            <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
              Discover how our specialized power grids, smart automation layouts, and protective configurations are driving technical efficiency and safety across top industrial firms.
            </p>
            
            <a 
              className="btn btn-outline-primary py-3 px-5 fw-bold border-2 d-inline-flex align-items-center gap-2" 
              href="#" 
              style={{ borderRadius: "10px", borderColor: "rgba(79, 70, 229, 0.25)" }}
            >
              <span>View All Reviews</span>
              <i className="fas fa-external-link-alt small"></i>
            </a>
          </div>

          {/* Right Column: Premium Light Glass Slider */}
          <div className="col-lg-6 col-xl-7 wow fadeInUp" data-wow-delay="0.4s">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 1 },
                992: { slidesPerView: 2 },
              }}
              className="testimonial-carousel pb-5"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="py-3">
                  <div className="glass-card-light h-100 p-4 d-flex flex-column justify-content-between">
                    <div>
                      {/* Rating and Quote Header */}
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="d-flex gap-1" style={{ color: "#fbbf24" }}>
                          {[...Array(item.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star small"></i>
                          ))}
                        </div>
                        <div className="text-primary/20" style={{ fontSize: "1.75rem", opacity: 0.4 }}>
                          <i className="fa fa-quote-right"></i>
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-secondary mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.65" }}>
                        "{item.text}"
                      </p>
                    </div>

                    {/* Customer Profile Footer */}
                    <div className="d-flex align-items-center mt-3 pt-3 border-top border-light">
                      <img 
                        src={item.image} 
                        className="rounded-circle border border-light" 
                        style={{ width: "55px", height: "55px", objectFit: "cover" }} 
                        alt={item.name} 
                      />
                      <div className="ms-3">
                        <h5 className="text-dark fw-bold mb-1" style={{ fontSize: "1rem" }}>{item.name}</h5>
                        <p className="text-muted small mb-0 fw-medium">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
