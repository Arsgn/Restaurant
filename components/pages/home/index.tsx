import { About } from "./sections/About";
import { BestSellers } from "./sections/BestSellers";
import { Welcome } from "./sections/Welcome";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <Welcome />
      <About />
      <BestSellers />
    </>
  );
};

export default HomePage;
