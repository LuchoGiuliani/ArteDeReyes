import { motion } from "framer-motion"
import { useState, useEffect } from "react";

const text = "Arte De Reyes";
const textArray = text.split("");

const Letter = ({ letter }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 10000);
  }, []);

  return (
    <motion.span
      initial={{ y: 0 }}
      animate={isLoaded ? { y: -10, transition: { duration: 6.5 } } : {}}
    >
      {letter}
    </motion.span>
  );
};

export default Text = () => {
  return (
    <h1>
      {textArray.map((letter, i) => (
        <Letter key={i} letter={letter} />
      ))}
    </h1>
  );
};
