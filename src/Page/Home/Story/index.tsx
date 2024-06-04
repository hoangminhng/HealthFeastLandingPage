import { ChevronRightIcon } from "@heroicons/react/24/solid";
import StoryImage from "../../../assets/Story/StoryImage.png";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface TabProps {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
}

const tabs: TabProps[] = [
  {
    id: "LeftIcon",
    label: (
      <ChevronLeftIcon className="md:h-10 md:w-10 w-4 h-4 text-[#2E2E2E] mx-2" />
    ),
    content: (
      <div className="flex flex-col items-start lg:items-center">
        <p className="md:mb-3 text-xs md:text-xl lg:text-3xl text-[#2E2E2E] dark:text-gray-400 w-full md:w-2/3 text-start md:pb-2">
          <span className="font-bold">[Health]</span> Là tình trạng của cơ thể
          và mức độ thoát khỏi bệnh tật, hay trạng thái khỏe mạnh.
        </p>
        <p className="md:mb-3 text-xs md:text-xl lg:text-3xl text-[#2E2E2E] dark:text-gray-400 w-full md:w-2/3 text-start md:pb-2">
          <span className="font-bold">[Feast]</span> là Một bữa ăn đặc biệt với
          những món ăn rất ngon hoặc một bữa ăn thịnh soạn cho nhiều người
        </p>
      </div>
    ),
  },
  {
    id: "RightIcon",
    label: (
      <ChevronRightIcon className="md:h-10 md:w-10 w-4 h-4 text-[#2E2E2E] mx-2" />
    ),
    content: (
      <div className="flex flex-col items-start lg:items-center">
        <p className="font-bold text-xs md:text-xl lg:text-3xl text-[#2E2E2E] dark:text-gray-400 w-full md:w-3/4 text-start md:pb-2">
          <span className="font-bold">Tầm nhìn</span> của Healthfeast
        </p>
        <p className="text-xs md:text-xl lg:text-3xl text-[#2E2E2E] dark:text-gray-400 w-full md:w-3/4 text-start md:pb-2">
          Trở thành trợ lý giúp người dùng chủ động quản lý sức khỏe và nâng cao
          chất lượng cuộc sống mỗi ngày
        </p>
        <p className="font-bold text-xs md:text-xl lg:text-3xl text-[#2E2E2E] dark:text-gray-400 w-full md:w-3/4 text-start md:pb-2">
          <span className="font-bold">Sứ mệnh</span> của Healthfeast
        </p>
        <p className="text-xs md:text-xl lg:text-3xl text-[#2E2E2E] dark:text-gray-400 w-full md:w-3/4 text-start md:pb-2">
          Chúng tôi cam kết mang đến cho người dùng trải nghiệm chăm sóc sức
          khỏe toàn diện, tiện lợi và hiệu quả
        </p>
      </div>
    ),
  },
];

const Story: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  return (
    <>
      <div className="relative">
        <img
          src={StoryImage}
          alt="Story Image"
          className="inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 grid w-full place-items-stretch">
          <div className="flex flex-col items-start lg:items-center w-4/5 md:w-3/4 lg:w-2/4 text-start justify-center md:p-4 px-1">
            <div id="default-tab-content">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`${activeTab === tab.id ? "block" : "hidden"}`}
                  id={tab.id}
                  role="tabpanel"
                  aria-labelledby={`${tab.id}-tab`}
                >
                  {tab.content}
                </div>
              ))}
            </div>

            <button
              type="button"
              className="bg-[#2E2E2E] font-medium rounded-lg text-xs md:text-sm px-1 py-1 md:px-5 md:py-2 text-center text-[#F3F2F1]"
            >
              Tìm hiểu thêm
            </button>

            <div className="flex mt-1 md:mt-3">
              {tabs.map((tab) => (
                <button onClick={() => setActiveTab(tab.id)}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
