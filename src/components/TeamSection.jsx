export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Jonathan Hayes",
      role: "Chief Executive Officer",
      bio: "With over 15 years in energy management, Jonathan drives Electra's long-term technology vision and smart grid sustainability strategies.",
      image: "/img/team-1.jpg",
      delay: "0.2s"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Lead Automation Architect",
      bio: "Sarah leads our global growth strategy and search engine presence, connecting our complex infrastructure solutions with global enterprises.",
      image: "/img/team-2.jpg",
      delay: "0.4s"
    },
    {
      id: 3,
      name: "Marcus Vance",
      role: "Industrial Power Consultant",
      bio: "Marcus architects our real-time grid monitoring portals and API integrations, bridging power physics with high-performance software systems.",
      image: "/img/team-3.jpg",
      delay: "0.6s"
    },
    {
      id: 4,
      name: "Emily Collins",
      role: "Smart Grid Security Director",
      bio: "Emily oversees our large-scale industrial electrical layouts and substation deployments with absolute technical precision.",
      image: "/img/team-4.jpg",
      delay: "0.8s"
    }
  ];

  return (
    <div className="container-fluid team py-5 cinematic-team-section bg-white">
      <div className="container py-5">
        <div className="d-flex flex-column mx-auto text-center mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
          <div className="premium-tag-chip mb-3 mx-auto">
            <i className="fas fa-users"></i>
            <span>Our Elite Experts</span>
          </div>
          <h1 className="display-5 mb-4 text-dark fw-bold">Innovative Leaders in Modern Grid Solutions</h1>
          <p className="mb-0 text-secondary" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
            Meet our elite engineering team driving innovation, reliability, and precision across commercial and industrial infrastructure projects worldwide.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay={member.delay}>
              <div className="cinematic-team-card">
                {/* 40px squircle image wrapper (kept clean of hover texts) */}
                <div className="squircle-img-wrapper">
                  <img src={member.image} className="img-fluid w-100" style={{ height: "350px", objectFit: "cover" }} alt={member.name} />
                </div>

                {/* Text Content Area */}
                <div className="text-center px-2">
                  <h4 className="team-serif-name mb-1">{member.name}</h4>
                  <p className="team-gold-role mb-0">{member.role}</p>

                  {/* Dynamic Expand-on-Hover Bio & Social Link Block */}
                  <div className="team-hover-details">
                    <p className="team-details-bio-light mb-3">{member.bio}</p>
                    <div className="team-social-links-light">
                      <a className="team-social-icon-light" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="team-social-icon-light" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="team-social-icon-light" href="#"><i className="fab fa-instagram"></i></a>
                      <a className="team-social-icon-light" href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
