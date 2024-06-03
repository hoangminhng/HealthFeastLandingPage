import React from "react";
import IconListImage from "../../../assets/IconListImage.png";
import ScanCaloImage from "../../../assets/Instruction/ScanCaloImage.png";
import CaloTrackingImage from "../../../assets/Instruction/CaloTrackingImage.png";
import SelectPlanImage from "../../../assets/Instruction/SelectPlanImage.png";

const Instruction: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-[#F3F2F1]">
      <img
        src={IconListImage}
        className="h-auto w-3/4 sm:w-1/2 m-5"
        alt="Icon List"
      />
      <h1 className="mb-4 text-3xl font-medium leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Kiểm soát lượng calo chỉ với 3 bước
      </h1>

      <div className="flex flex-col md:flex-row items-center w-full md:w-3/4 lg:w-2/3 px-5 my-5">
        <img
          src={ScanCaloImage}
          alt="Step 1"
          className="w-full md:w-2/5 h-auto mb-5 md:mb-0"
        />
        <div className="md:ml-10 text-center md:text-start">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium text-[#9ABF5A]">
            1
          </h2>
          <p className="mb-3 text-xl md:text-2xl lg:text-3xl text-[#2E2E2E] dark:text-gray-400 pb-2">
            Quét lượng calo có trong thức ăn
          </p>
          <p className="text-[#2E2E2E] text-sm md:text-base pb-2 mb-3">
            Healthfeast sẽ ứng dụng AI, tính toán các hình ảnh món ăn và phân
            tích thành dữ liệu sau đó chuẩn đoán lượng calo.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full md:w-3/4 lg:w-2/3 px-5 my-5">
        <div className="md:mr-10 text-center md:text-end order-2 md:order-1">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium text-[#9ABF5A]">
            2
          </h2>
          <p className="mb-3 text-xl md:text-2xl lg:text-3xl text-[#2E2E2E] dark:text-gray-400 pb-2">
            Lựa chọn kế hoạch cho các bữa ăn
          </p>
          <p className="text-[#2E2E2E] text-sm md:text-base pb-2 mb-3">
            Bạn sẽ chọn kế hoạch cho các bữa ăn của mình hoặc Healthfeast sẽ
            automatic giúp bạn lựa chọn.
          </p>
        </div>
        <img
          src={CaloTrackingImage}
          alt="Step 2"
          className="w-full md:w-2/5 h-auto mb-5 md:mb-0 order-1 md:order-2"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center w-full md:w-3/4 lg:w-2/3 px-5 my-5">
        <img
          src={SelectPlanImage}
          alt="Step 3"
          className="w-full md:w-2/5 h-auto mb-5 md:mb-0"
        />
        <div className="md:ml-10 text-center md:text-start">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium text-[#9ABF5A]">
            3
          </h2>
          <p className="mb-3 text-xl md:text-2xl lg:text-3xl text-[#2E2E2E] dark:text-gray-400 pb-2">
            Theo dõi lượng calo, lựa chọn các bài tập
          </p>
          <p className="text-[#2E2E2E] text-sm md:text-base pb-2 mb-3">
            Daily giúp bạn tính toán lượng calo bạn nạp vào, calo của các bữa ăn
            và bài tập của bạn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
