import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="container-fluid about py-5" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)" }}>
      <div className="container py-5">
        <div className="row g-5 align-items-center mb-5">
          
          {/* Left Column: Premium Marketing Copy & Features */}
          <div className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="pe-lg-4">
              
              {/* Premium Tag Chip */}
              <div 
                className="premium-tag-chip mb-3 d-inline-flex align-items-center gap-2" 
                style={{ 
                  background: "rgba(79, 70, 229, 0.08)", 
                  border: "1px solid rgba(79, 70, 229, 0.15)", 
                  color: "var(--bs-primary)",
                  borderRadius: "9999px",
                  padding: "6px 16px",
                  textTransform: "uppercase",
                  fontSize: "0.76rem",
                  fontWeight: "600",
                  letterSpacing: "1px"
                }}
              >
                <i className="fas fa-bolt text-primary animate-pulse"></i>
                <span>About Electra Solutions</span>
              </div>
              
              {/* High-End Serif Headline */}
              <h1 
                className="display-4 text-dark fw-bold mb-4" 
                style={{ 
                  fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", 
                  lineHeight: "1.2",
                  letterSpacing: "-0.5px"
                }}
              >
                Providing you with the highest quality of engineering features
              </h1>
              
              <p className="text-secondary mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.75" }}>
                At Electra, we design, deploy, and support state-of-the-art power grids, automated PLC control layouts, and high-security technical ecosystems. Our specialized engineering services maximize durability, safety, and energy efficiency for world-class enterprises.
              </p>

              {/* Glassy Interactive Service Links */}
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <a href="#" className="about-item-link d-flex align-items-center text-decoration-none p-3 bg-white shadow-sm border border-light transition-all" style={{ borderRadius: "20px", transition: "all 0.3s ease" }}>
                    <div className="glass-icon-wrapper me-3" style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(79, 70, 229, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--bs-primary)" }}>
                      <i className="fas fa-bolt"></i>
                    </div>
                    <div>
                      <h5 className="mb-1 text-dark fw-bold" style={{ fontSize: "0.95rem" }}>Emergency Solutions</h5>
                      <span className="text-muted small" style={{ fontSize: "0.78rem" }}>24/7 backup power networks</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="#" className="about-item-link d-flex align-items-center text-decoration-none p-3 bg-white shadow-sm border border-light transition-all" style={{ borderRadius: "20px", transition: "all 0.3s ease" }}>
                    <div className="glass-icon-wrapper me-3" style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(79, 70, 229, 0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--bs-primary)" }}>
                      <i className="fas fa-broadcast-tower"></i>
                    </div>
                    <div>
                      <h5 className="mb-1 text-dark fw-bold" style={{ fontSize: "0.95rem" }}>Electrical Layouts</h5>
                      <span className="text-muted small" style={{ fontSize: "0.78rem" }}>Automated industrial designs</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Checked Items with Elegant Border Highlights */}
              <div className="text-dark mb-5 border-start border-3 border-primary ps-4" style={{ borderColor: "var(--bs-primary) !important" }}>
                <p className="mb-3 d-flex align-items-center text-secondary" style={{ fontSize: "0.95rem" }}>
                  <span className="fa fa-check text-primary me-3 bg-primary/10 p-1 rounded-circle" style={{ width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(79, 70, 229, 0.08)", fontSize: "0.75rem" }}></span> 
                  Installed, maintained and audited mission-critical electrical networks.
                </p>
                <p className="mb-3 d-flex align-items-center text-secondary" style={{ fontSize: "0.95rem" }}>
                  <span className="fa fa-check text-primary me-3 bg-primary/10 p-1 rounded-circle" style={{ width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(79, 70, 229, 0.08)", fontSize: "0.75rem" }}></span> 
                  Deploying renewable solar energy grids and battery storage facilities.
                </p>
                <p className="mb-0 d-flex align-items-center text-secondary" style={{ fontSize: "0.95rem" }}>
                  <span className="fa fa-check text-primary me-3 bg-primary/10 p-1 rounded-circle" style={{ width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(79, 70, 229, 0.08)", fontSize: "0.75rem" }}></span> 
                  Active surge suppression and voltage stabilization configurations.
                </p>
              </div>

              <Link className="btn btn-primary py-3 px-5 fw-bold mb-4 mb-lg-0" href="/contact" style={{ borderRadius: "12px", boxShadow: "0 6px 20px rgba(79, 70, 229, 0.25)" }}>
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Frame with Floating Badges */}
          <div className="col-lg-5 wow fadeInRight" data-wow-delay="0.2s">
            <div className="position-relative p-3">
              {/* Main Border Decoration */}
              <div className="position-absolute border border-3 border-primary/20" style={{ top: 0, left: 0, right: "20px", bottom: "20px", borderRadius: "28px", pointerEvents: "none", borderColor: "rgba(79, 70, 229, 0.15)" }}></div>
              
              {/* Main Card Image */}
              <div className="position-relative overflow-hidden shadow-lg" style={{ borderRadius: "28px", transform: "translate(15px, 15px)" }}>
                <img src="/img/about-1.jpg" className="img-fluid w-100" style={{ height: "480px", objectFit: "cover", transition: "transform 0.5s ease" }} alt="About Electra" />
                
                {/* Gradient dark fade overlay on image bottom */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(to top, rgba(15,23,42,0.45) 0%, rgba(15,23,42,0) 60%)" }}></div>
              </div>

              {/* Floating Widget 1: Experience */}
              <div className="position-absolute floating-stat-box" style={{ bottom: "10%", left: "-5%", zIndex: 10, background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(12px)", border: "1px solid rgba(226, 232, 240, 0.8)", padding: "12px 20px", borderRadius: "18px", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)" }}>
                <div className="bg-primary text-white d-flex align-items-center justify-content-center me-3" style={{ width: "42px", height: "42px", borderRadius: "10px" }}>
                  <i className="fas fa-award fa-lg"></i>
                </div>
                <div>
                  <h4 className="fw-bold text-dark mb-0" style={{ fontSize: "1.2rem" }}>25+</h4>
                  <p className="text-secondary small mb-0 font-medium" style={{ fontSize: "0.78rem" }}>Years Experience</p>
                </div>
              </div>

              {/* Floating Widget 2: Uptime */}
              <div className="position-absolute floating-stat-box" style={{ top: "15%", right: "-8%", zIndex: 10, background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(12px)", border: "1px solid rgba(226, 232, 240, 0.8)", padding: "12px 20px", borderRadius: "18px", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)" }}>
                <div className="bg-success text-white d-flex align-items-center justify-content-center me-3" style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: "#10b981" }}>
                  <i className="fas fa-chart-line fa-lg"></i>
                </div>
                <div>
                  <h4 className="fw-bold text-dark mb-0" style={{ fontSize: "1.2rem" }}>99.8%</h4>
                  <p className="text-secondary small mb-0 font-medium" style={{ fontSize: "0.78rem" }}>System Uptime</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Brand New Bento Tier at the Bottom: Our Leadership Pillars & Engineering Principles */}
        <div className="row g-4 mt-5 pt-5 border-top border-light wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12 text-center mb-4">
            <h4 className="fw-bold text-dark" style={{ letterSpacing: "1px", textTransform: "uppercase", fontSize: "0.95rem", color: "var(--bs-primary) !important" }}>Our Core Engineering Principles</h4>
          </div>
          
          {/* Pillar 1 */}
          <div className="col-md-4">
            <div className="bg-white p-4 h-100 border border-light shadow-sm hover-up transition-all" style={{ borderRadius: "24px", transition: "all 0.3s ease" }}>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="d-flex align-items-center justify-content-center text-primary rounded-circle" style={{ width: "40px", height: "40px", backgroundColor: "rgba(79, 70, 229, 0.08)", flexShrink: 0 }}>
                  <i className="fas fa-microchip" style={{ fontSize: "0.95rem" }}></i>
                </div>
                <h5 className="mb-0 text-dark fw-bold" style={{ fontSize: "1.05rem" }}>Precision Grid Controls</h5>
              </div>
              <p className="text-secondary small mb-0" style={{ lineHeight: "1.6" }}>
                Every high-voltage distribution term, PLC machinery circuit, and copper busbar array is meticulously tested against rigorous national electrical safety metrics.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="col-md-4">
            <div className="bg-white p-4 h-100 border border-light shadow-sm hover-up transition-all" style={{ borderRadius: "24px", transition: "all 0.3s ease" }}>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="d-flex align-items-center justify-content-center text-success rounded-circle" style={{ width: "40px", height: "40px", backgroundColor: "rgba(16, 185, 129, 0.08)", flexShrink: 0 }}>
                  <i className="fas fa-charging-station" style={{ fontSize: "0.95rem", color: "#10b981" }}></i>
                </div>
                <h5 className="mb-0 text-dark fw-bold" style={{ fontSize: "1.05rem" }}>Eco-Energy Integration</h5>
              </div>
              <p className="text-secondary small mb-0" style={{ lineHeight: "1.6" }}>
                We bridge heavy-voltage industrial factory networks seamlessly with sustainable commercial solar arrays, active energy stabilizers, and UPS batteries.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="col-md-4">
            <div className="bg-white p-4 h-100 border border-light shadow-sm hover-up transition-all" style={{ borderRadius: "24px", transition: "all 0.3s ease" }}>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="d-flex align-items-center justify-content-center text-warning rounded-circle" style={{ width: "40px", height: "40px", backgroundColor: "rgba(245, 158, 11, 0.08)", flexShrink: 0 }}>
                  <i className="fas fa-user-shield" style={{ fontSize: "0.95rem", color: "#d97706" }}></i>
                </div>
                <h5 className="mb-0 text-dark fw-bold" style={{ fontSize: "1.05rem" }}>Strict Security Standards</h5>
              </div>
              <p className="text-secondary small mb-0" style={{ lineHeight: "1.6" }}>
                Deploying intelligent, active surge suppressors, automated fail-safe switchgear shut-offs, and custom physical grid insulation barrier audits.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
