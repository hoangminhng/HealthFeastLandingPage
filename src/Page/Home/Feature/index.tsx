import FeatureGroup from "../../../assets/Feature/FeatureGroup.png";

const Feature: React.FC = () => {
  return (
    <>
      <div className="relative">
        <img
          src={FeatureGroup}
          alt="BMI Image"
          className="inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex w-full items-center justify-end">
          <div className="flex flex-col items-end w-4/5 md:w-3/4 lg:w-2/4 pr-4 md:pl-12 lg:pl-20 text-left justify-center">
            <h2 className="text-xs md:text-4xl font-medium w-2/5 md:w-2/3 text-white">
              Nhiều chức hiệu quả hơn của <span className="text-[#9ABF5A]">Healthfeast</span> đang chờ bạn
              sử dụng
            </h2>
            <p className="hidden md:block md:text-xl text-white w-2/5 md:w-2/3 pb-2">
              Scan lượng calo có trong thức ăn, Công thức nấu món ăn, Kế hoạch
              luyện tập, gợi ý món ăn, Kết nối cộng đồng (Tin tức, blog, liên hệ
              chuyên gia, tương tác với các Heathfeaster khác.)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
