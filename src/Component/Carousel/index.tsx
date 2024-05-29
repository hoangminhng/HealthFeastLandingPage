import { Carousel } from "@material-tailwind/react";

const CarouselImage: React.FC = () => {
  return (
    <Carousel
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="relative h-full w-full">
        <img
          src="src/assets/HomeImage_1.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="flex flex-col items-center w-3/4 text-center md:w-2/4 justify-center">
            <h2 className="text-4xl font-medium text-[#9ABF5A]">Healthfeast</h2>
            <p className="mb-3 text-xl text-white dark:text-gray-400 w-2/3 text-center pb-2">
              Cam kết mang đến cho người dùng trải nghiệm chăm sóc sức khỏe toàn
              diện, thuận tiện và hiệu quả
            </p>
            <p className="text-white text-sm pb-2 mb-3">
              “Giữ gìn sức khỏe, sống cuộc sống của bạn”
            </p>
            <button
              type="button"
              className="bg-[#9ABF5A] font-medium rounded-lg text-sm px-5 py-2 text-center text-gray-900"
            >
              Tải ngay
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full bg-[#2E2E2E]">
        <img
          src="src/assets/HomeImage_2.png"
          alt="image 2"
          className="right-0"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="flex flex-col items-start w-3/4 pl-12 text-left md:w-2/4 justify-center md:pl-20 lg:pl-32">
            <h2 className="text-4xl font-medium text-[#9ABF5A] mb-4">
              HealthFeast Premium
            </h2>
            <p className="mb-3 text-xl text-white w-2/3 pb-2">
              HealthFeast Premium, các gói nâng cấp giúp trải nghiệm cân bằng
              sức khoẻ tốt hơn.
            </p>
            <button
              type="button"
              className="bg-[#9ABF5A] font-medium rounded-lg text-sm px-5 py-2 text-center text-gray-900"
            >
              Tải ngay
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full bg-[#2E2E2E]">
        <img
          src="src/assets/HomeImage_3.png"
          alt="image 3"
          className="right-0"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="flex flex-col items-start w-3/4 pl-12 text-left md:w-2/4 justify-center md:pl-20 lg:pl-32">
            <h2 className="text-4xl font-medium text-[#9ABF5A] mb-4">
              HealthFeast
            </h2>
            <h2 className="text-4xl font-medium w-1/2 text-white">
              Sẽ hỗ trợ bạn cảm thấy tốt hơn
            </h2>
            <p className="mb-3 text-xl text-white w-2/3 pb-2">
              Tính năng quét món ăn Việt Nam và xác định lượng calo. Tính năng
              gợi ý thực đơn hàng ngày, hàng tuần. Nhiều tính năng hiệu quả
              khác.
            </p>
            <button
              type="button"
              className="bg-[#9ABF5A] font-medium rounded-lg text-sm px-5 py-2 text-center text-gray-900"
            >
              Tải ngay
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full bg-[#2E2E2E]">
        <img
          src="src/assets/HomeImage_4.png"
          alt="image 3"
          className="right-0"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="flex flex-col items-start w-3/4 pl-12 text-left md:w-2/4 justify-center md:pl-20 lg:pl-32">
            <h2 className="text-4xl font-medium text-[#9ABF5A] mb-4">
              HealthFeast
            </h2>
            <h2 className="text-4xl font-medium w-4/5 text-white">
              mang đến trải nghiệm thú vị hơn với các nhân vật vui nhộn đầy màu
              sắc.
            </h2>
            <p className="mb-3 text-xl text-white w-2/3 pb-2">
              Mỗi nhân vật có màu sắc riêng đại diện cho các tính năng trong ứng
              dụng Healthfeast.
            </p>
            <button
              type="button"
              className="bg-[#9ABF5A] font-medium rounded-lg text-sm px-5 py-2 text-center text-gray-900"
            >
              Tải ngay
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselImage;
