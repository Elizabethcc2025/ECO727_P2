export default function HeroSection() {
  return (
    <section id="inicio" className="hero">
      <h1>Bienvenidos a nuestra cafetería "Cecytem La Paz"</h1>
      <br />
      <p>Tradición, calidad y un espacio para compartir momentos especiales</p>
      <br />

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/F2Lg-ehdSDE"
        title="Coffee Cinematic Stock Footage"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Créditos del video */}
      <p className="video-credit">
        Video cortesía de <strong>Viral Edits – Coffee Cinematic Stock Footage (No Copyright Music)</strong>
      </p>
    </section>
  );
}



