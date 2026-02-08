import { useEffect, useState } from "react";
import "./App.css";
import { getHome } from "@/features/home/mappers/mapper";

function App() {
  const [msg, setMsg] = useState('Eitcha.');

  useEffect(() => {
    (async () => {
      try {
        const res = await getHome();
        setMsg(res?.data?.message ?? "Sem mensagem");
      } catch (err) {
        setMsg("Erro ao carregar");
        console.error(err);
      }
    })();
  }, []);

  return (
    <h1>{msg}</h1>
  );
}

export default App;
