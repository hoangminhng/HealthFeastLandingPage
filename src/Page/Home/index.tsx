import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
