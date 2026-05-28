export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#E2725B", // mismo color que el formulario
        color: "white",
        textAlign: "center",
        padding: "15px",
      }}
    >
      <p>©2026 Cafetería Cecytem La Paz | Autor: Elizabeth</p>
      <p>Página realizada con fines académicos.</p>
      <div style={{ marginTop: "10px" }}>
        <a href="#aviso" style={{ color: "white", margin: "0 10px" }}>
          Aviso de Privacidad
        </a>
        <a href="https://facebook.com" style={{ color: "white", margin: "0 10px" }}>
          Facebook
        </a>
        <a href="https://tiktok.com" style={{ color: "white", margin: "0 10px" }}>
          TikTok
        </a>
        <a href="https://youtube.com" style={{ color: "white", margin: "0 10px" }}>
          YouTube
        </a>
        <a href="https://wa.me/tu-numero" style={{ color: "white", margin: "0 10px" }}>
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
