import React from "react";
import BIMImage from "../../../assets/BMI/BIMImage.png";
import MobileImage from "../../../assets/BMI/MobileImage.png";

const BMI: React.FC = () => {
  return (
    <div className="relative min-h-[60vh] md:min-h-[80vh]">
      <img
        src={BIMImage}
        alt="BMI Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 grid w-full place-items-center">
        <div className="flex flex-col items-center md:w-3/4 lg:w-3/4 text-center justify-center p-4">
          <h2 className="text-base md:text-2xl font-medium text-white">
            Asking BMI
          </h2>
          <p className="mb-3 text-xs md:text-xl text-white dark:text-gray-400 w-full md:w-2/3 text-center pb-2">
            Các chỉ số cơ thể cá nhân sẽ giúp Healthfeast hiểu hơn và cá nhân
            hoá người dùng.
          </p>
          <img
            src={MobileImage}
            alt="Mobile Image"
            className="w-full max-w-sm md:max-w-xl object-contain mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default BMI;
