import { About } from "./sections/About";
import Address from "./sections/Address";
import { BestSellers } from "./sections/BestSellers";
import Delicious from "./sections/Delicious";
import Modem from "./sections/Modem";
import { Welcome } from "./sections/Welcome";
import { FC } from "react";


const HomePage: FC = () => {
  return (
    <>
      <Welcome />
      <About />
      <BestSellers />
      <Delicious />
      <Modem />
      <Address />
    </>
  );
};

export default HomePage;
