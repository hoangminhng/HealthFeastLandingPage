import { Carousel } from "@material-tailwind/react";
import HomeImage_1 from "../../assets/HomeImage_1.png";
import HomeImage_2 from "../../assets/HomeImage_2.png";
import HomeImage_3 from "../../assets/HomeImage_3.png";
import HomeImage_4 from "../../assets/HomeImage_4.png";

const CarouselImage: React.FC = () => {
  return (
    <div className="overflow-y-hidden w-full h-full">
      <Carousel
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 hidden">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative h-full w-full">
          <img
            src={HomeImage_1}
            alt="image 1"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 grid w-full place-items-center bg-black/75">
            <div className="flex flex-col items-center w-4/5 md:w-3/4 lg:w-2/4 text-center justify-center md:p-4">
              <h2 className="text-base md:text-2xl font-medium text-[#9ABF5A]">
                Healthfeast
              </h2>
              <p className="mb-3 text-xs md:text-xl text-white dark:text-gray-400 w-full md:w-2/3 text-center pb-2">
                Cam kết mang đến cho người dùng trải nghiệm chăm sóc sức khỏe
                toàn diện, thuận tiện và hiệu quả
              </p>
              <p className="text-white text-xs md:text-sm pb-2 mb-3">
                “Giữ gìn sức khỏe, sống cuộc sống của bạn”
              </p>
              <button
                type="button"
                className="bg-[#9ABF5A] font-medium rounded-lg text-xs md:text-sm px-5 py-2 text-center text-gray-900"
              >
                Tải ngay
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full bg-[#2E2E2E]">
          <img
            src={HomeImage_2}
            alt="image 2"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 grid w-full items-center">
            <div className="flex flex-col items-start w-4/5 md:w-3/4 lg:w-2/4 pl-4 md:pl-12 lg:pl-20 text-left justify-center">
              <h2 className="text-base md:text-2xl font-medium text-[#9ABF5A] mb-4">
                HealthFeast Premium
              </h2>
              <p className="mb-3 text-xs md:text-xl text-white w-full md:w-2/3 pb-2">
                HealthFeast Premium, các gói nâng cấp giúp trải nghiệm cân bằng
                sức khoẻ tốt hơn.
              </p>
              <button
                type="button"
                className="bg-[#9ABF5A] font-medium rounded-lg text-xs md:text-sm px-5 py-2 text-center text-gray-900"
              >
                Tải ngay
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full bg-[#2E2E2E]">
          <img
            src={HomeImage_3}
            alt="image 3"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 grid w-full items-center">
            <div className="flex flex-col items-start w-4/5 md:w-3/4 lg:w-2/4 pl-4 md:pl-12 lg:pl-20 text-left justify-center">
              <h2 className="text-base md:text-2xl font-medium text-[#9ABF5A] md:mb-4">
                HealthFeast
              </h2>
              <h2 className="text-base md:text-2xl font-medium w-3/4 md:w-1/2 text-white">
                Sẽ hỗ trợ bạn cảm thấy tốt hơn
              </h2>
              <p className="md:mb-3 text-xs md:text-xl text-white w-full md:w-2/3 md:pb-2">
                Tính năng quét món ăn Việt Nam và xác định lượng calo. Tính năng
                gợi ý thực đơn hàng ngày, hàng tuần. Nhiều tính năng hiệu quả
                khác.
              </p>
              <button
                type="button"
                className="bg-[#9ABF5A] font-medium rounded-lg text-xs md:text-sm px-5 py-2 text-center text-gray-900"
              >
                Tải ngay
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full bg-[#2E2E2E]">
          <img
            src={HomeImage_4}
            alt="image 4"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 grid w-full items-center">
            <div className="flex flex-col items-start w-4/5 md:w-3/4 lg:w-2/4 pl-4 md:pl-12 lg:pl-20 text-left justify-center">
              <h2 className="text-base md:text-2xl font-medium text-[#9ABF5A] md:mb-4">
                HealthFeast
              </h2>
              <h2 className="text-base md:text-2xl font-medium w-4/5 text-white">
                mang đến trải nghiệm thú vị hơn với các nhân vật vui nhộn đầy
                màu sắc.
              </h2>
              <p className="md:mb-3 text-xs md:text-xl text-white w-full md:w-2/3 md:pb-2">
                Mỗi nhân vật có màu sắc riêng đại diện cho các tính năng trong
                ứng dụng Healthfeast.
              </p>
              <button
                type="button"
                className="bg-[#9ABF5A] font-medium rounded-lg text-xs md:text-sm px-5 py-2 text-center text-gray-900"
              >
                Tải ngay
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselImage;
