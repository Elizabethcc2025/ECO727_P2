
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Testimonials from './Components/Testimonials';
import TiposCafe from './Components/TiposCafeList';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section id="nosotros">
        <h2>Sobre Nosotros</h2>
        <p> Somos una cafetería local que combina tradición y calidad. Nuestro objetivo
    es ofrecer café preparado con granos seleccionados y un espacio ideal para
    convivir, estudiar o trabajar. Creemos en el trato cercano y en crear
    experiencias que hagan sentir a cada visitante como en casa. </p>
    
      </section>


      <section id="mision-vision">
        <h2>Misión y Visión </h2>
        <p><strong>Misión:</strong> <br /> Brindar experiencias únicas a través de un café de
    calidad y un servicio cálido.</p>
        <p><strong>Visión:</strong> <br /> Convertirnos en la cafetería preferida de la
    comunidad, reconocida por su ambiente y productos artesanales. </p>
      </section>


      <Services />
      <Gallery />

      


<section id="video">
  <h2>Video de nuestras especialidades</h2>
  <video controls width="650" height="400">
    <source src="/assets/videos/Cafeteria_de_Eli.mp4" type="video/mp4" />
    Tu navegador no soporta video.
  </video>
</section>



      <Testimonials />
      <TiposCafe />
      <Footer />
    </>
  );
}


export default App;
