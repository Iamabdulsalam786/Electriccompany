import Link from "next/link";

export default function Copyright() {
  return (
    <div className="container-fluid copyright py-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center text-md-start mb-md-0">
            <span className="text-body text-white-50">
              <i className="fas fa-copyright text-light me-2"></i>Designed by The Nexus Dynamics
            </span>
          </div>
          <div className="col-md-6 text-center text-md-end text-body">
            {/* Removed author attribution as requested */}
          </div>
        </div>
      </div>
    </div>
  );
}
