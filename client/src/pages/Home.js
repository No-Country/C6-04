import HeaderHome from '../components/HeaderHome'
import HomeTitle from "./../components/HomeTitle";
import ImgTitle1 from "./../assets/Pictures/peep-7.svg";
import ImgTitle2 from "./../assets/Pictures/peep-9.svg";
import Carousel from "./../components/Carousel";
import BoxTrend from "./../components/BoxTrend";
import Button from "./../components/Button";
import Footer from './../components/Footer'
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
        <Footer />
      </section>
    </div>
  );
};

export default Home;
