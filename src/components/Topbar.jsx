import Link from "next/link";

export default function Topbar() {
  return (
    <div className="topbar px-0 py-2 d-none d-lg-block" style={{ height: "45px" }}>
      <div className="row gx-0 align-items-center">
        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
          <div className="d-flex flex-wrap">
            <div className="ps-0">
              <a href="mailto:example@gmail.com" className="text-muted small">
                <i className="fas fa-envelope text-primary me-2"></i>example@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-flex justify-content-end">
            <div className="d-flex pe-0">
              <a className="btn p-0 text-primary me-3" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn p-0 text-primary me-3" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn p-0 text-primary me-3" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn p-0 text-primary me-0" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

