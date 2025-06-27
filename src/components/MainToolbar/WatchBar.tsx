import { useEffect, useState } from "react";

function WatchBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Atualiza o relógio a cada 1 segundo
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpa o intervalo quando o componente desmonta
    return () => clearInterval(interval);
  }, []);

  // Formata o horário no formato HH:MM:SS
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR');
  };
  return (<div style={{
    border: "2px #bbb inset"
  }} className="w-18 text-lg bg-gray-300 flex flex-row items-center justify-center">
    {formatTime(time)}
  </div>);
}

export default WatchBar;