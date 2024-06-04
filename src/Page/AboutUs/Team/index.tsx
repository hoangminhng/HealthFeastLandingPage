interface UserProps {
  id: number;
  img: string;
  name: string;
  position: string;
  Specialties: string;
}

const tabs: UserProps[] = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/lego/3.jpg",
    name: "Nguyễn Trần Bâng Bâng",
    position: "Multimedia Communication Faculty",
    Specialties: "Specialties: Planning, Researching, Organizing,...",
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/lego/3.jpg",
    name: "Tống Ái Linh",
    position: "Multimedia Communication Faculty",
    Specialties:
      "Specialties: Market Research, Critical Thinking, Problem Solving,..",
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/lego/3.jpg",
    name: "Nguyễn Hùng Nghĩa",
    position: "Software Engineering Faculty",
    Specialties: "Specialties: Back-end, Front-end Development",
  },
  {
    id: 4,
    img: "https://randomuser.me/api/portraits/lego/3.jpg",
    name: "Lê Vũ Đình Duy",
    position: "Software Engineering Faculty",
    Specialties: "Specialties: Back-end, Front-end Development",
  },
  {
    id: 5,
    img: "https://randomuser.me/api/portraits/lego/3.jpg",
    name: "Nguyễn Văn Hoàng Minh",
    position: "Software Engineering Faculty",
    Specialties: "Specialties: Back-end, Front-end Development",
  },
  {
    id: 6,
    img: "https://randomuser.me/api/portraits/lego/3.jpg",
    name: "Bùi Nguyễn Phúc Khang",
    position: "Software Engineering Faculty",
    Specialties: "Specialties: Back-end, Front-end Development",
  },
  {
    id: 7,
    img: "https://randomuser.me/api/portraits/lego/3.jpg",
    name: "Nguyễn Văn Dũng",
    position: "Graphic Design Faculty",
    Specialties: "Specialties: 2D, Animation, Branding, Packaging Design,",
  },
  {
    id: 8,
    img: "https://randomuser.me/api/portraits/lego/3.jpg",
    name: "Lê Trung Thọ",
    position: "Graphic Design Faculty",
    Specialties: "Specialties: 2D, Model 3D Design",
  },
];

const Team: React.FC = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col bg-[#2E2E2E]">
        <div className="mx-10 mt-5">
          <h2 className="text-lg md:text-5xl font-medium w-full text-white">
            Đội ngũ
          </h2>
          <p className="md:block text-base md:text-2xl text-white w-full pb-2">
            Gặp gỡ đội ngũ trong mơ của Healthfeast: Những nhà đổi mới đang thay
            đổi và phát triển!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {tabs.map((tab) => (
            <div className="flex flex-col items-center justify-center dark:bg-gray-800 mt-3 w-full">
              <img
                className="rounded-full w-36 h-36"
                src="https://randomuser.me/api/portraits/lego/3.jpg"
                alt="Extra large avatar"
              />
              <div className="flex flex-col items-center">
                <h2 className="text-lg md:text-xl font-medium text-white">
                  {tab.name}
                </h2>
                <p className="text-base md:text-lg font-medium text-white text-center">
                  {tab.position}
                </p>
                <p className="text-base md:text-lg font-medium text-white text-center">
                  {tab.Specialties}
                </p>
                <button className="border border-[#9ABF5A] px-7 py-3 rounded-2xl text-white mt-3">
                  Xem thêm thông tin
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Team;
