import { useEffect } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="space-y-32">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <div></div>
    </div>
  );
};

export default Home;
