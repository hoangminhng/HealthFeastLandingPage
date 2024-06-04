import StoryImage from "../../../assets/Story/StoryImage.png";

const Story: React.FC = () => {
  return (
    <>
      <div className="relative">
        <img
          src={StoryImage}
          alt="BMI Image"
          className="inset-0 w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Story;
