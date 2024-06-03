import mobile from "../../../assets/MobileScreen/test.png";

const Mobile: React.FC = () => {
  return (
    <>
      <div className="relative">
        <img
          src={mobile}
          alt="BMI Image"
          className="inset-0 w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Mobile;
