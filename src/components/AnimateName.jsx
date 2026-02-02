import { useEffect, useState } from "react";
import './AnimateName.css'

const fonts = ["font-style-1", "font-style-2", "font-style-3", "font-style-4", "font-style-5", "font-style-6"];

function AnimateName() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fonts.length);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`hero-name ${fonts[index]}`}>
      PELL.CO
    </span>
  );
}

export default AnimateName;
