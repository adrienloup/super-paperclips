import { useEffect, useState } from "react";

export const Production = () => {
  const [paperclips, setPaperclips] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [clicksPerSecond, setClicksPerSecond] = useState<number[]>([]);

  const makePaperclip = () => {
    setPaperclips((prev) => prev + 1);
  };

  useEffect(() => {
    const now = Date.now();
    setClicksPerSecond((prev) =>
      [...prev, now].filter((time) => now - time <= 1e3)
    );
    setRate(clicksPerSecond.length);
  }, [paperclips]);

  useEffect(() => {
    const time = setTimeout(() => setRate(0), 1e3);
    return () => clearTimeout(time);
  }, [rate]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Production</h2>
      <p>Trombones produits : {paperclips}</p>
      <p>Rendement : {rate} trombone(s)/s</p>
      <button
        onClick={makePaperclip}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Fabriquer un trombone
      </button>
    </div>
  );
};
