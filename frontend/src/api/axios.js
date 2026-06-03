import axios from "axios";


// Conexión frontend (Netlify) → backend (Railway)
export default axios.create({
  baseURL: "eco727p2-production-5dcb.up.railway.app/api/",
});
