import { useEffect, useState } from "react";
import api from "./lib/axios";

function App() {
  const [message, setMessage] = useState("Menghubungkan ke server...");

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await api.get("/health");
        setMessage(response.data.message);
      } catch (error) {
        console.error("Gagal menghubungi backend:", error);
        setMessage("Gagal menghubungi backend.");
      }
    };

    checkBackend();
  }, []);

  return (
    <div>
      <h1>Meja Kuliah</h1>
      <p>Status Backend: {message}</p>
    </div>
  );
}

export default App;