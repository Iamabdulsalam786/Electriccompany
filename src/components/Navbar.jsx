"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("English");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path) => pathname === path ? "active" : "";

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Spanish", flag: "🇪🇸" },
    { code: "ar", name: "Arabic", flag: "🇦🇪" }
  ];

  // Dynamic search data index
  const searchIndex = [
    { title: "Brite Spark Services (Commercial)", path: "/service", desc: "Reliable commercial high-voltage connections and smart audits." },
    { title: "Energy Ease Packages (Commercial)", path: "/service", desc: "Intelligent grid monitoring, backup systems, and green power." },
    { title: "Electra Care Packages (Commercial)", path: "/service", desc: "24/7 preventative commercial thermal support." },
    { title: "Residential Electrical Wiring", path: "/service", desc: "Custom smart home electrical wiring and custom panel audits." },
    { title: "Residential Security Systems", path: "/service", desc: "AI-powered security cameras, biometric locks, and integrated alarms." },
    { title: "Residential Air Conditioner Services", path: "/service", desc: "Central cooling installation, smart thermostats, and servicing." },
    { title: "Industrial Factory Automation", path: "/service", desc: "Heavy-duty PLC programming and machinery control networks." },
    { title: "Industrial General Electrical Grid", path: "/service", desc: "Massive generator substations and high-voltage factory distribution." },
    { title: "Industrial Project CAD Planning", path: "/service", desc: "Advanced CAD architecture designs and loading diagnostics." },
    { title: "About Us & Experience", path: "/about", desc: "Learn about Electra's 25+ years grid credentials." },
    { title: "Our Engineering Specialists Team", path: "/team", desc: "Meet Jonathan Hayes (CEO), Sarah Jenkins, and Marcus Vance." },
    { title: "Contact Our Engineering Desk", path: "/contact", desc: "Get a custom consultation or file emergency requests." }
  ];

  const filteredResults = searchQuery.trim()
    ? searchIndex.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="nav-bar px-0 py-lg-0" style={{ height: "80px" }}>
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between align-items-center w-100 animate__animated animate__fadeIn">
        
        {/* Company Branding */}
        <Link href="/" className="navbar-brand-2">
          <h1 className="text-primary mb-0"><i className="fas fa-bolt"></i> Electra</h1>
        </Link>

        {/* Right Side Header Trigger Controls (Mobile View Only: d-lg-none!) */}
        <div className="d-flex d-lg-none align-items-center gap-2">
          {/* Mobile Circular Search Trigger */}
          <button 
            className="btn btn-light d-flex align-items-center justify-content-center"
            style={{ 
              width: "38px", 
              height: "38px", 
              borderRadius: "50%", 
              backgroundColor: "#f1f5f9",
              border: "none",
              transition: "all 0.25s ease"
            }}
            onClick={() => setIsSearchOpen(true)}
          >
            <i className="fas fa-search text-secondary" style={{ fontSize: "0.9rem" }}></i>
          </button>

          {/* Premium Off-Canvas Drawer Burger Menu Toggler */}
          <button
            className="navbar-toggler border-0 d-flex align-items-center justify-content-center"
            type="button"
            onClick={() => setIsOpen(true)}
            style={{ width: "38px", height: "38px", padding: 0 }}
          >
            <span className="fa fa-bars" style={{ fontSize: "1.15rem", color: "#475569" }}></span>
          </button>
        </div>

        {/* Collapse Content (Desktop Only - Hamburger & mobile elements hidden here) */}
        <div className="collapse navbar-collapse d-none d-lg-block" id="navbarCollapse">
          <div className="navbar-nav mx-lg-auto bg-white align-items-lg-center">
            <Link href="/" className={`nav-item nav-link ${isActive("/")}`}>Home</Link>
            <Link href="/service" className={`nav-item nav-link ${isActive("/service")}`}>Services</Link>
            <Link href="/testimonial" className={`nav-item nav-link ${isActive("/testimonial")}`}>Projects</Link>
            <Link href="/about" className={`nav-item nav-link ${isActive("/about")}`}>About</Link>
            <Link href="/team" className={`nav-item nav-link ${isActive("/team")}`}>Team</Link>
            <Link href="/contact" className={`nav-item nav-link ${isActive("/contact")}`}>Contact</Link>
            
            {/* Desktop Sleek Search Button: Housed right after Contact link item! */}
            <button 
              className="btn nav-item nav-link d-flex align-items-center justify-content-center border-0 ms-2"
              onClick={() => setIsSearchOpen(true)}
              style={{ 
                padding: "0 10px", 
                color: "#64748b", 
                background: "none", 
                cursor: "pointer",
                transition: "color 0.2s ease"
              }}
            >
              <i className="fas fa-search" style={{ fontSize: "0.95rem" }}></i>
            </button>
          </div>

          <div className="nav-btn ps-lg-3 d-flex align-items-center gap-3 w-auto">
            {/* Desktop Language Switcher trigger */}
            <div className="position-relative">
              <button 
                className="btn btn-light dropdown-toggle d-flex align-items-center py-2 px-3 border" 
                style={{ borderRadius: "8px", fontWeight: "500", fontSize: "0.88rem", background: "#ffffff" }}
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              >
                <i className="fas fa-globe text-primary me-2"></i>
                {activeLang}
              </button>
              {isLangDropdownOpen && (
                <div>
                  <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 998, cursor: "default" }} onClick={() => setIsLangDropdownOpen(false)}></div>
                  <div className="dropdown-menu show position-absolute end-0 mt-2 shadow-lg border-0" style={{ top: "100%", zIndex: 999, borderRadius: "12px", minWidth: "130px", background: "#ffffff", border: "1px solid rgba(226, 232, 240, 0.8)" }}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`dropdown-item d-flex align-items-center py-2 px-3 ${activeLang === lang.name ? 'active bg-primary text-white' : 'text-dark'}`}
                        style={{ border: "none", background: activeLang === lang.name ? "var(--bs-primary)" : "transparent", fontSize: "0.88rem" }}
                        onClick={() => {
                          setActiveLang(lang.name);
                          setIsLangDropdownOpen(false);
                        }}
                      >
                        <span className="me-2">{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Premium Get Solution CTA button */}
            <Link 
              href="/contact" 
              className="btn btn-primary text-center"
              style={{ 
                borderRadius: "8px", 
                fontWeight: "600",
                backgroundColor: "var(--bs-primary)",
                border: "none",
                boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)",
                padding: "6px 36px", /* Sleeker height, wider width! */
                fontSize: "0.85rem"
              }}
            >
              Get Solution
            </Link>
          </div>
        </div>
      </nav>

      {/* Off-Canvas Sliding Side Drawer for Mobile */}
      <div className={`mobile-nav-backdrop ${isOpen ? 'show' : ''}`} onClick={() => setIsOpen(false)}></div>
      <div className={`mobile-nav-drawer ${isOpen ? 'show' : ''}`}>
        <div>
          {/* Drawer Header */}
          <div className="d-flex justify-content-between align-items-center pb-3 border-bottom border-light">
            <h3 className="text-primary fw-bold mb-0" style={{ fontSize: "1.3rem" }}>
              <i className="fas fa-bolt me-2"></i>Electra
            </h3>
            <button className="drawer-close-btn animate__animated animate__fadeIn" onClick={() => setIsOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          {/* Drawer Vertical Navigation Links */}
          <div className="d-flex flex-column gap-2 mt-4">
            <Link href="/" className={`nav-item nav-link py-2.5 px-3 rounded-lg ${isActive("/")}`} style={{ borderRadius: "10px", fontWeight: "600", color: isActive("/") ? "var(--bs-primary)" : "#334155", background: isActive("/") ? "rgba(79, 70, 229, 0.06)" : "transparent" }} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/service" className={`nav-item nav-link py-2.5 px-3 rounded-lg ${isActive("/service")}`} style={{ borderRadius: "10px", fontWeight: "600", color: isActive("/service") ? "var(--bs-primary)" : "#334155", background: isActive("/service") ? "rgba(79, 70, 229, 0.06)" : "transparent" }} onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/testimonial" className={`nav-item nav-link py-2.5 px-3 rounded-lg ${isActive("/testimonial")}`} style={{ borderRadius: "10px", fontWeight: "600", color: isActive("/testimonial") ? "var(--bs-primary)" : "#334155", background: isActive("/testimonial") ? "rgba(79, 70, 229, 0.06)" : "transparent" }} onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/about" className={`nav-item nav-link py-2.5 px-3 rounded-lg ${isActive("/about")}`} style={{ borderRadius: "10px", fontWeight: "600", color: isActive("/about") ? "var(--bs-primary)" : "#334155", background: isActive("/about") ? "rgba(79, 70, 229, 0.06)" : "transparent" }} onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/team" className={`nav-item nav-link py-2.5 px-3 rounded-lg ${isActive("/team")}`} style={{ borderRadius: "10px", fontWeight: "600", color: isActive("/team") ? "var(--bs-primary)" : "#334155", background: isActive("/team") ? "rgba(79, 70, 229, 0.06)" : "transparent" }} onClick={() => setIsOpen(false)}>Team</Link>
            <Link href="/contact" className={`nav-item nav-link py-2.5 px-3 rounded-lg ${isActive("/contact")}`} style={{ borderRadius: "10px", fontWeight: "600", color: isActive("/contact") ? "var(--bs-primary)" : "#334155", background: isActive("/contact") ? "rgba(79, 70, 229, 0.06)" : "transparent" }} onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="pt-4 border-top border-light w-100">
          {/* Dynamic Horizontal Flag/Lang Picker */}
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3 py-1 w-100">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setActiveLang(lang.name)}
                className="btn btn-sm d-flex align-items-center gap-1 py-1 px-3"
                style={{
                  background: activeLang === lang.name ? "rgba(79, 70, 229, 0.08)" : "transparent",
                  color: activeLang === lang.name ? "var(--bs-primary)" : "#64748b",
                  fontWeight: activeLang === lang.name ? "600" : "500",
                  borderRadius: "20px",
                  border: "none",
                  fontSize: "0.82rem"
                }}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>

          {/* Gold Glowing CTA inside Drawer */}
          <Link 
            href="/contact" 
            className="btn btn-primary w-100 fw-bold text-center"
            style={{ 
              borderRadius: "10px", 
              backgroundColor: "var(--bs-primary)",
              border: "none",
              boxShadow: "0 4px 12px rgba(79, 70, 229, 0.2)",
              padding: "8px 36px", /* Sleeker height, wider width! */
              fontSize: "0.88rem"
            }}
            onClick={() => setIsOpen(false)}
          >
            Get Solution
          </Link>
        </div>
      </div>

      {/* Modern Glassmorphic Real-Time Search Overlay Modal */}
      {isSearchOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center animate__animated animate__fadeIn" 
          style={{ 
            backgroundColor: "rgba(7, 9, 14, 0.8)", 
            backdropFilter: "blur(12px)", 
            zIndex: 99999,
          }}
        >
          <div className="bg-white p-4 shadow-lg position-relative w-100 mx-3 animate__animated animate__zoomIn" style={{ maxWidth: "500px", borderRadius: "16px" }}>
            <button 
              className="btn-close position-absolute top-0 end-0 m-3" 
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery("");
              }}
            ></button>
            <h5 className="mb-3 text-dark fw-bold d-flex align-items-center">
              <i className="fas fa-search text-primary me-2"></i>
              Real-time Solutions Search
            </h5>
            <div className="input-group shadow-sm mb-2">
              <input 
                type="text" 
                className="form-control border py-2 ps-3" 
                placeholder="Type 'Commercial', 'PLC', 'Team'..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ borderRadius: "8px", borderColor: "#e2e8f0" }}
                autoFocus
              />
            </div>

            {/* Dynamically Filtered Search Results Dropdown */}
            {searchQuery.trim().length > 0 && (
              <div className="search-results-container mt-3 w-100">
                {filteredResults.length > 0 ? (
                  filteredResults.map((result, idx) => (
                    <Link 
                      key={idx} 
                      href={result.path} 
                      className="search-result-item d-flex align-items-center justify-content-between text-decoration-none"
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center bg-primary/10 text-primary rounded-circle me-3" style={{ width: "36px", height: "36px", flexShrink: 0, backgroundColor: "rgba(79, 70, 229, 0.08)" }}>
                          <i className="fas fa-file-alt" style={{ fontSize: "0.85rem" }}></i>
                        </div>
                        <div className="d-flex flex-column text-start">
                          <span className="fw-bold text-dark" style={{ fontSize: "0.92rem" }}>{result.title}</span>
                          <span className="text-muted small mt-0.5" style={{ fontSize: "0.78rem" }}>{result.desc}</span>
                        </div>
                      </div>
                      <i className="fas fa-chevron-right text-muted small ms-2" style={{ fontSize: "0.75rem" }}></i>
                    </Link>
                  ))
                ) : (
                  <div className="p-3 text-center text-muted" style={{ fontSize: "0.9rem" }}>
                    No technical matches found for "<strong>{searchQuery}</strong>"
                  </div>
                )}
              </div>
            )}

            {/* Quick Links Suggestions when search input is empty */}
            {searchQuery.trim().length === 0 && (
              <div className="mt-3 pt-2 border-top border-light">
                <span className="text-muted small d-block mb-2 fw-semibold">Suggested Engineering Portals</span>
                <div className="d-flex flex-wrap gap-2">
                  <Link href="/service" className="btn btn-sm btn-light border py-1 px-3" style={{ borderRadius: "20px", fontSize: "0.8rem" }} onClick={() => setIsSearchOpen(false)}>Services</Link>
                  <Link href="/team" className="btn btn-sm btn-light border py-1 px-3" style={{ borderRadius: "20px", fontSize: "0.8rem" }} onClick={() => setIsSearchOpen(false)}>Our Team Specialists</Link>
                  <Link href="/contact" className="btn btn-sm btn-light border py-1 px-3" style={{ borderRadius: "20px", fontSize: "0.8rem" }} onClick={() => setIsSearchOpen(false)}>Contact Desk</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
