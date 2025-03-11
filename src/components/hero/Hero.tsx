import { motion } from "motion/react";
import { FC } from "react";
import Button from "../button/Button";

const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="pt-14 padding-x flex-1 mah-[920px]">
        <h1 className="hero-title">Feel the Freedom, Embark on Your Journey</h1>

        <p className="hero-subtitle">
          Are you ready for an unforgettable journey with gold standard service?
          Elevate your car rental experience with our Golden Options and make
          every moment special.
        </p>

        <Button text="Discover the Cars" designs="mt-10" />
      </div>

      <div className="flex justify-center">
        <motion.img
          src="/hero.png"
          alt="bmw"
          className="object-contain"
          initial={{ translateX: 200, scale: 0.7 }}
          animate={{ translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
