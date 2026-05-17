import "./globals.css";
import Script from "next/script";
import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import BackToTop from "../components/BackToTop";

export const metadata = {
  title: "Electra - Electrical Website Template",
  description: "Electrical Website Template in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Edu+TAS+Beginner:wght@400..700&family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

        {/* Icon Font Stylesheet */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        {/* Libraries Stylesheet */}
        <link rel="stylesheet" href="/lib/animate/animate.min.css" />

        {/* Customized Bootstrap Stylesheet */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />

        {/* Template Stylesheet */}
        <link href="/css/style.css" rel="stylesheet" />
      </head>
      <body>
        <Spinner />
        <div className="container-fluid header-top">
          <div className="container d-flex align-items-center">
            <div className="d-flex align-items-center h-100">
              <a href="#" className="navbar-brand" style={{ height: "125px" }}>
                <h1 className="text-primary mb-0"><i className="fas fa-bolt"></i> Electra</h1>
                {/* <img src="img/logo.png" alt="Logo"> */}
              </a>
            </div>
            <div className="w-100 h-100">
              <Topbar />
              <Navbar />
            </div>
          </div>
        </div>

        {children}

        <Footer />
        <Copyright />
        <BackToTop />

        {/* JavaScript Libraries */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/lib/wow/wow.min.js" strategy="beforeInteractive" />
        <Script src="/lib/easing/easing.min.js" strategy="beforeInteractive" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="beforeInteractive" />

        {/* Template Javascript 
        <Script src="/js/main.js" strategy="lazyOnload" />
        */}
      </body>
    </html>
  );
}
