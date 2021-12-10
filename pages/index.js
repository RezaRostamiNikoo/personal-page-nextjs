// import * from '../public/assets/vendor/purecounter/purecounter';
// import * from '../public/assets/vendor/bootstrap/js/bootstrap.bundle.min';
// import * from '../public/assets/vendor/glightbox/js/glightbox.min.js';
// import * from '../public/assets/vendor/isotope-layout/isotope.pkgd.min';
// import * from '../public/assets/vendor/swiper/swiper-bundle.min';
// import * from '../public/assets/vendor/waypoints/noframework.waypoints';
// import * from '../public/assets/vendor/php-email-form/validate';

// <!-- Template Main JS File -->
// import * from '../public/assets/js/main';

// components
import Head from 'next/head';
import About from '../src/components/About/About';
import Header from '../src/components/Header/Header';
import Portfolio from '../src/components/Portfolio/portfolio';
import Resume from '../src/components/Resume/Resume';
import Service from '../src/components/Service/Service';
import Contact from '../src/components/Contact/Contact';




export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Reza Rostami Nikoo</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
      </Head>
      <Header></Header>
      <About></About>
      <Resume></Resume>
      <Service></Service>
      <Portfolio></Portfolio>

      <Contact></Contact>
      <script src="assets/vendor/purecounter/purecounter.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      {/* <!-- Template Main JS File --> */}
      <script src="assets/js/main.js"></script>
    </div>
  )
}
