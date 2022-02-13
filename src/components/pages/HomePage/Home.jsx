import React from "react";
import { HeroSection } from "../../HeroSection/HeroSection";
import { Pricing } from "../../Pricing/Pricing";
import { homeObjOne,homeObjThree ,homeObjTwo,homeObjFour} from "./Data";

export const Home = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing/>
      <HeroSection {...homeObjFour} />
    </>
  );
};
