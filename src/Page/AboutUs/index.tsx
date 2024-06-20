import background from "../../assets/AboutUs/background.png";
import IconListImage from "../../assets/IconListImage.png";
import OurStory from "./OurStory";
import Team from "./Team";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="relative">
        <img
          src={background}
          alt="BMI Image"
          className="inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex w-full items-center justify-center">
          <div className="flex flex-col items-center w-4/5 md:w-3/4 lg:w-2/4 pr-4 md:pl-12 lg:pl-20 text-center justify-center">
            <h2 className="text-lg md:text-5xl font-medium w-3/5 md:w-3/4 text-white">
              “Embrace your health, live your life”
            </h2>
            <p className="md:block text-base md:text-2xl text-white w-2/5 md:w-2/3 pb-2">
              “Healthfeast”
            </p>
            <img src={IconListImage} alt="BMI Image" className="w-3/5 h-auto" />
          </div>
        </div>
      </div>
      <Team />
      <OurStory />
    </>
  );
};

export default AboutUs;
