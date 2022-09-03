import HeaderHome from '../components/homeSections/HeaderHome'
import HomeTitle from "./../components/homeSections/HomeTitle"
import Carousel from "./../components/homeSections/Carousel"
import BoxTrend from "./../components/homeSections/BoxTrend"
import CategoriesContainer from '../components/homeSections/CategoriesContainer'
import Footer from './../components/homeSections/Footer'
import Button from "./../components/botones/Button"
import ImgTitle1 from "./../assets/Pictures/peep-7.svg"
import ImgTitle2 from "./../assets/Pictures/peep-9.svg"
import "./../index.css";

const Home = () => {
  return (
    <div className="bg-main">

      <HeaderHome />

      <section>
        {/* NFT Collection */}
        <HomeTitle boolean={true} text="Colecciones" image={ImgTitle1} />
        <Carousel />
      </section>

      {/* NFT Trend */}
      <section>
        <HomeTitle boolean={false} text="Tendencias de NFT" image={ImgTitle2} />
        <BoxTrend />

        <article className="flex flex-column justify-center mb-20">
          <Button
            text="Explorar"
            className="btn bg-blue-600 text-lg font-black hover:bg-blue-700 border-none"
          />
        </article>
      </section>

      {/* NFT Trend */}
      <section>
        <CategoriesContainer />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
