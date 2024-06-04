import StoryImage from "../../../assets/Story/StoryImage.png";

const OurStory: React.FC = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${StoryImage})` }}
      >
        <div className="relative inset-0 grid w-full place-items-stretch">
          <div className="flex flex-col items-start lg:items-center w-4/5 md:w-3/4 lg:w-2/4 text-start justify-start md:p-10">
            <h1 className="text-base md:text-4xl 3xl:text-5xl font-medium w-full text-[#2E2E2E] mt-1 px-1">
              Câu chuyện về chúng tôi
            </h1>
            <h1 className="text-base md:text-xl font-medium w-full text-[#2E2E2E] mt-1 px-1">
              Healthfeast: “Embrace your health, live your life”
            </h1>
            <h1 className="text-sm md:text-sm font-medium w-full text-[#2E2E2E] mt-1 px-1">
              Trong thời đại công nghệ hiện đại, những người quan tâm đến sức
              khỏe và phát triển thể hình tại Việt Nam đã tìm thấy một người bạn
              đồng hành đáng tin cậy - Healthfeast. Đây là ứng dụng đột phá,
              cung cấp cho người dùng những công cụ hiệu quả để theo dõi, hướng
              dẫn và lưu trữ thông tin về bữa ăn, dinh dưỡng và tập luyện.
            </h1>
            <h1 className="text-sm md:text-sm font-medium w-full text-[#2E2E2E] mt-1 px-1">
              Healthfeast được sinh ra từ nhu cầu thực sự của người Việt, nhằm
              đáp ứng những mong muốn được sống khỏe mạnh và hạnh phúc. Ứng dụng
              này có thể quét nhanh chóng các món ăn Việt Nam, tính toán lượng
              calo và chất dinh dưỡng một cách chính xác. Điều đặc biệt là
              Healthfeast còn có khả năng gợi ý các thực đơn lành mạnh, phù hợp
              với nhu cầu cá nhân, giúp người dùng dễ dàng lập kế hoạch bữa ăn
              hàng ngày và tuần.
            </h1>
            <h1 className="text-sm md:text-sm font-medium w-full text-[#2E2E2E] mt-1 px-1">
              Với Healthfeast, mọi người có thể tự tin theo đuổi các mục tiêu về
              sức khỏe và thể hình, đồng thời khám phá những món ăn Việt Nam
              ngon lành mà vẫn đảm bảo dinh dưỡng. Ứng dụng này không chỉ là
              công cụ quản lý, mà còn là người bạn đồng hành tin cậy trên hành
              trình cải thiện sức khỏe và phong cách sống lành mạnh của người
              Việt.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
