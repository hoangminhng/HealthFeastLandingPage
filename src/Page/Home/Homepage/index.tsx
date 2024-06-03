import CarouselImage from "../../../Component/Carousel";
import BMI from "../BMI";
import Feature from "../Feature";
import Instruction from "../Instruction";
import Mobile from "../Mobile";

const Homepage: React.FC = () => {
  return (
    <>
      <CarouselImage />
      <Instruction />
      <BMI />
      <Mobile />
      <Feature />
    </>
  );
};

export default Homepage;
