import React from 'react';

export default function Gallery() {
  return (
    <section id="galeria">
      <h2>Galería</h2>
      <div className="gallery">
        
        {/* Imagen 1 */}
        <figure>
          <img className="img-gallery" src="/assets/cafe2.jpeg" alt="Café 2" />
          <figcaption>© Magnagaea, 2024. Blog Magnagaea.</figcaption>
        </figure>

        {/* Imagen 2 */}
        <figure>
          <img className="img-gallery" src="/assets/cafe3.jpg" alt="Café 3" />
          <figcaption>© Vecteezy/Pixabay, s.f. Autor no especificado.</figcaption>
        </figure>

        {/* Imagen 3 */}
        <figure>
          <img className="img-gallery" src="/assets/cafe4.jpg" alt="Café 4" />
          <figcaption>© Pexels, 2023. Autor: Amar Preciado.</figcaption>
        </figure>

        {/* Imagen 4 */}
        <figure>
          <img className="img-gallery" src="/assets/cafe7.jpg" alt="Café 7" />
          <figcaption>© 324PRAXIS, 2024. ArchDaily.</figcaption>
        </figure>
        

        
      </div>
    </section>
  );
}
