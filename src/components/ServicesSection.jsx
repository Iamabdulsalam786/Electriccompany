"use client";

export default function ServicesSection() {
  return (
    <div className="container-fluid premium-light-service-section py-5 position-relative overflow-hidden">
      <div className="container py-5 position-relative" style={{ zIndex: 10 }}>
        <div className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
          <div className="premium-tag-chip mb-3 mx-auto" style={{ background: "rgba(79, 70, 229, 0.08)", border: "1px solid rgba(79, 70, 229, 0.12)", color: "var(--bs-primary)" }}>
            <i className="fas fa-bolt text-primary"></i>
            <span>Premium Bento Offerings</span>
          </div>
          <h1 className="display-5 mb-4 text-dark fw-bold">Our Specialized Technical Services</h1>
          <p className="mb-0 text-secondary" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
            Explore our state-of-the-art grid distribution, PLC automation, and industrial engineering. We provide highly specialized, digital-ready solutions tailored to power modern commercial frameworks.
          </p>
        </div>

        {/* Modern Crisp Capsule Tab Selector */}
        <div className="d-flex justify-content-center mb-5 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-tab-container nav shadow-sm" style={{ background: "rgba(255, 255, 255, 0.9)", border: "1px solid rgba(226, 232, 240, 0.8)", borderRadius: "30px", padding: "6px" }}>
            <a className="service-tab-btn active" data-bs-toggle="pill" href="#ServiceTab-1">Commercial</a>
            <a className="service-tab-btn" data-bs-toggle="pill" href="#ServiceTab-2">Residential</a>
            <a className="service-tab-btn" data-bs-toggle="pill" href="#ServiceTab-3">Industrial</a>
          </div>
        </div>

        {/* Bento Content Sheets */}
        <div className="tab-content wow fadeInUp" data-wow-delay="0.4s">
          
          {/* Tab 1: Commercial Bento Grid */}
          <div id="ServiceTab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4 justify-content-center">
              
              {/* Bento Card 1 */}
              <div className="col-md-6 col-lg-4">
                <div className="bento-service-card">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="bento-icon-wrapper">
                        <i className="fas fa-bolt fa-lg"></i>
                      </div>
                      <span className="badge bg-primary/10 text-primary py-1 px-3" style={{ borderRadius: "20px", fontSize: "0.78rem", fontWeight: "600", backgroundColor: "rgba(79, 70, 229, 0.08)" }}>
                        High-Voltage
                      </span>
                    </div>
                    <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.3rem" }}>Brite Spark Services</h4>
                    <p className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
                      Delivering reliable primary grid connections, bespoke office lighting grids, and electrical layout audits.
                    </p>
                    
                    <ul className="bento-bullet-list">
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-primary me-2"></i>
                        <span>Grid substation planning</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-primary me-2"></i>
                        <span>Intelligent LED grid layouts</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-primary me-2"></i>
                        <span>Compliance & safety audits</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2 mt-2" href="#" style={{ fontSize: "0.92rem" }}>
                    <span>Explore Architecture</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* Bento Card 2 */}
              <div className="col-md-6 col-lg-4">
                <div className="bento-service-card">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="bento-icon-wrapper">
                        <i className="fas fa-leaf fa-lg"></i>
                      </div>
                      <span className="badge bg-success/10 text-success py-1 px-3" style={{ borderRadius: "20px", fontSize: "0.78rem", fontWeight: "600", backgroundColor: "rgba(16, 185, 129, 0.08)" }}>
                        Eco-Grid
                      </span>
                    </div>
                    <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.3rem" }}>Energy Ease Systems</h4>
                    <p className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
                      Proactive carbon monitoring, green solar/battery grid conversions, and modern UPS power system layouts.
                    </p>
                    
                    <ul className="bento-bullet-list">
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <span>Active carbon footprint mapping</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <span>Smart commercial UPS grids</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <span>Net-zero building integration</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2 mt-2" href="#" style={{ fontSize: "0.92rem" }}>
                    <span>Explore Eco-Grid</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* Bento Card 3 */}
              <div className="col-md-6 col-lg-4">
                <div className="bento-service-card">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="bento-icon-wrapper">
                        <i className="fas fa-shield-alt fa-lg"></i>
                      </div>
                      <span className="badge bg-warning/10 text-warning py-1 px-3" style={{ borderRadius: "20px", fontSize: "0.78rem", fontWeight: "600", backgroundColor: "rgba(245, 158, 11, 0.08)", color: "#b45309" }}>
                        24/7 Operations
                      </span>
                    </div>
                    <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.3rem" }}>Electra Priority Support</h4>
                    <p className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
                      Round-the-clock emergency substation support, infrared switchgear thermal checks, and system diagnostics.
                    </p>
                    
                    <ul className="bento-bullet-list">
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-warning me-2" style={{ color: "#d97706" }}></i>
                        <span>Real-time thermal diagnostic logs</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-warning me-2" style={{ color: "#d97706" }}></i>
                        <span>Priority switchgear recovery</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-warning me-2" style={{ color: "#d97706" }}></i>
                        <span>24-Hour live emergency dispatch</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2 mt-2" href="#" style={{ fontSize: "0.92rem" }}>
                    <span>Explore Priority Desk</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Tab 2: Residential Bento Grid */}
          <div id="ServiceTab-2" className="tab-pane fade show p-0">
            <div className="row g-4 justify-content-center">
              
              {/* Bento Card 1 */}
              <div className="col-md-6 col-lg-4">
                <div className="bento-service-card">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="bento-icon-wrapper">
                        <i className="fas fa-home fa-lg"></i>
                      </div>
                      <span className="badge bg-primary/10 text-primary py-1 px-3" style={{ borderRadius: "20px", fontSize: "0.78rem", fontWeight: "600", backgroundColor: "rgba(79, 70, 229, 0.08)" }}>
                        Smart Home
                      </span>
                    </div>
                    <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.3rem" }}>Smart House Wiring</h4>
                    <p className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
                      Delivering custom luxury home automation layouts, premium internal grid control panels, and architectural light styling.
                    </p>
                    
                    <ul className="bento-bullet-list">
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-primary me-2"></i>
                        <span>Bespoke wiring structures</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-primary me-2"></i>
                        <span>Central voice command panels</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-primary me-2"></i>
                        <span>Architectural ambiance setups</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2 mt-2" href="#" style={{ fontSize: "0.92rem" }}>
                    <span>Explore Smart Home</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* Bento Card 2 */}
              <div className="col-md-6 col-lg-4">
                <div className="bento-service-card">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="bento-icon-wrapper">
                        <i className="fas fa-user-shield fa-lg"></i>
                      </div>
                      <span className="badge bg-success/10 text-success py-1 px-3" style={{ borderRadius: "20px", fontSize: "0.78rem", fontWeight: "600", backgroundColor: "rgba(16, 185, 129, 0.08)" }}>
                        Bio-Security
                      </span>
                    </div>
                    <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.3rem" }}>AI Protection Systems</h4>
                    <p className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
                      Incorporating state-of-the-art facial recognition access, intelligent peripheral camera setups, and alarm hubs.
                    </p>
                    
                    <ul className="bento-bullet-list">
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <span>Biometric door access locking</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <span>Dynamic motion tracking loops</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <span>App-controlled safety hubs</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2 mt-2" href="#" style={{ fontSize: "0.92rem" }}>
                    <span>Explore Security</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* Bento Card 3 */}
              <div className="col-md-6 col-lg-4">
                <div className="bento-service-card">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="bento-icon-wrapper">
                        <i className="fas fa-wind fa-lg"></i>
                      </div>
                      <span className="badge bg-warning/10 text-warning py-1 px-3" style={{ borderRadius: "20px", fontSize: "0.78rem", fontWeight: "600", backgroundColor: "rgba(245, 158, 11, 0.08)", color: "#b45309" }}>
                        Climate Grid
                      </span>
                    </div>
                    <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.3rem" }}>Smart Climate Control</h4>
                    <p className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
                      Delivering silent multi-zone cooling installations, programmable smart thermostats, and energy conservation.
                    </p>
                    
                    <ul className="bento-bullet-list">
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-warning me-2" style={{ color: "#d97706" }}></i>
                        <span>Multi-zone variable speed systems</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-warning me-2" style={{ color: "#d97706" }}></i>
                        <span>Smart learning thermostats</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-warning me-2" style={{ color: "#d97706" }}></i>
                        <span>Eco-friendly clean filters</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2 mt-2" href="#" style={{ fontSize: "0.92rem" }}>
                    <span>Explore Climate Control</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Tab 3: Industrial Bento Grid */}
          <div id="ServiceTab-3" className="tab-pane fade show p-0">
            <div className="row g-4 justify-content-center">
              
              {/* Bento Card 1 */}
              <div className="col-md-6 col-lg-4">
                <div className="bento-service-card">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="bento-icon-wrapper">
                        <i className="fas fa-industry fa-lg"></i>
                      </div>
                      <span className="badge bg-primary/10 text-primary py-1 px-3" style={{ borderRadius: "20px", fontSize: "0.78rem", fontWeight: "600", backgroundColor: "rgba(79, 70, 229, 0.08)" }}>
                        Factory PLC
                      </span>
                    </div>
                    <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.3rem" }}>Industrial Automation</h4>
                    <p className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
                      Deploying heavy-duty assembly lines, robotic controller PLCs, and SCADA central command interfaces.
                    </p>
                    
                    <ul className="bento-bullet-list">
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-primary me-2"></i>
                        <span>Robotic arm calibration and logic</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-primary me-2"></i>
                        <span>SCADA real-time metric tracking</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-primary me-2"></i>
                        <span>Fail-safe emergency shutdown systems</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2 mt-2" href="#" style={{ fontSize: "0.92rem" }}>
                    <span>Explore Automation</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* Bento Card 2 */}
              <div className="col-md-6 col-lg-4">
                <div className="bento-service-card">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="bento-icon-wrapper">
                        <i className="fas fa-tools fa-lg"></i>
                      </div>
                      <span className="badge bg-success/10 text-success py-1 px-3" style={{ borderRadius: "20px", fontSize: "0.78rem", fontWeight: "600", backgroundColor: "rgba(16, 185, 129, 0.08)" }}>
                        Heavy Duty
                      </span>
                    </div>
                    <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.3rem" }}>Substation Deployments</h4>
                    <p className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
                      Deploying massive generator grids, heavy high-voltage line terminations, and factory distributions.
                    </p>
                    
                    <ul className="bento-bullet-list">
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <span>High-voltage circuit switchgears</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <span>Substation grid terminations</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-success me-2"></i>
                        <span>Busbar layout calibrations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2 mt-2" href="#" style={{ fontSize: "0.92rem" }}>
                    <span>Explore Substation Desk</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* Bento Card 3 */}
              <div className="col-md-6 col-lg-4">
                <div className="bento-service-card">
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="bento-icon-wrapper">
                        <i className="fas fa-project-diagram fa-lg"></i>
                      </div>
                      <span className="badge bg-warning/10 text-warning py-1 px-3" style={{ borderRadius: "20px", fontSize: "0.78rem", fontWeight: "600", backgroundColor: "rgba(245, 158, 11, 0.08)", color: "#b45309" }}>
                        CAD Planning
                      </span>
                    </div>
                    <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.3rem" }}>Load Architecture</h4>
                    <p className="text-muted small mb-4" style={{ lineHeight: "1.6" }}>
                      Bespoke CAD electrical wiring blueprints, transient voltage load flow mapping, and compliance metrics.
                    </p>
                    
                    <ul className="bento-bullet-list">
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-warning me-2" style={{ color: "#d97706" }}></i>
                        <span>Architectural CAD wiring blueprints</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-warning me-2" style={{ color: "#d97706" }}></i>
                        <span>Transient voltage load mapping</span>
                      </li>
                      <li className="bento-bullet-item">
                        <i className="fas fa-check-circle text-warning me-2" style={{ color: "#d97706" }}></i>
                        <span>National Electrical Code compliance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2 mt-2" href="#" style={{ fontSize: "0.92rem" }}>
                    <span>Explore CAD Desk</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
