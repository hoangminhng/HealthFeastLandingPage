import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
