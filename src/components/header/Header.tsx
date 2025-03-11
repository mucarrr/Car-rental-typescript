import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { motion } from "framer-motion";

const AnimatedLogo: FC = () => {
  const text = "RENT A CAR".split("");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      className="text-4xl font-extrabold mt-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Header: FC = () => {
  return (
    <header className="w-full z-10">
      <div className="max-width flex justify-between items-center padding-x py-4 mt-2">
        <Link to="/">
          <AnimatedLogo />
        </Link>
        <Button text="Sign Up" designs="min-w-[130px]" />
      </div>
    </header>
  );
};

export default Header;
