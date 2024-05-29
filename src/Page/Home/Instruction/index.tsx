const Instruction: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#F3F2F1]">
        <img src="src/assets/IconListImage.png" className="h-full m-5" />
        <h1 className="mb-4 text-3xl font-medium leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Kiểm soát lượng calo chỉ với 3 bước
        </h1>

        <div className="ml-20 flex items-center w-1/2">
          <img
            src="src/assets/Instruction/ScanCaloImage.png"
            alt="image 1"
            className="h-1/2 w-2/5"
          />
          <div className="inset-0 grid">
            <div className="flex flex-col w-fit text-start ml-10">
              <h2 className="text-8xl font-medium text-[#9ABF5A]">1</h2>
              <p className="mb-3 text-3xl text-[#2E2E2E] dark:text-gray-400 pb-2">
                Quét lượng calo có trong thức ăn
              </p>
              <p className="text-[#2E2E2E] text-sm pb-2 mb-3">
                Healthfeast sẽ ứng dụng AI, tính toán các hình ảnh món ăn và
                phân tích thành dữ liệu sau đó chuẩn đoán lượng calo.
              </p>
            </div>
          </div>
        </div>

        <div className="mr-20 flex items-center w-1/2">
          <div className="inset-0 grid">
            <div className="flex flex-col w-fit text-end mr-10">
              <h2 className="text-8xl font-medium text-[#9ABF5A]">2</h2>
              <p className="mb-3 text-3xl text-[#2E2E2E] dark:text-gray-400 pb-2">
                Lựa chọn kế hoạch cho các bữa ăn
              </p>
              <p className="text-[#2E2E2E] text-sm pb-2 mb-3">
                Bạn sẽ chọn kế hoạch cho các bữa ăn của mình hoặc Healthfeast sẽ
                automatic giúp bạn lựa chọn.
              </p>
            </div>
          </div>
          <img
            src="src/assets/Instruction/SelectPlanImage.png"
            alt="image 1"
            className="h-1/2 w-2/5"
          />
        </div>

        <div className="ml-20 flex items-center w-1/2">
          <img
            src="src/assets/Instruction/CaloTrackingImage.png"
            alt="image 1"
            className="h-1/2 w-2/5"
          />
          <div className="inset-0 grid">
            <div className="flex flex-col w-fit text-start ml-10">
              <h2 className="text-8xl font-medium text-[#9ABF5A]">3</h2>
              <p className="mb-3 text-3xl text-[#2E2E2E] dark:text-gray-400 pb-2">
                Theo dõi lượng calo, lựa chọn các bài tập
              </p>
              <p className="text-[#2E2E2E] text-sm pb-2 mb-3">
                Daily giúp bạn tính toán lượng calo bạn nạp vào, calo của các
                bữa ăn và bài tập của bạn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instruction;
