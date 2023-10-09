import Banner from "../Components/Homepage/Banner";
import Cards from "../Components/Homepage/Cards/Cards";
import Footer from "../Components/Homepage/Footer";
import Stats from "../Components/Homepage/Stats";

const Homepage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Banner></Banner>
      <Cards></Cards>
      <Stats></Stats>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
