import Diart from "./../../assets/Pictures/diart-logo.svg";
import ImageRight from "./../../assets/Pictures/img-right.svg";
import Button from "../Button";
import ModalsAuth from "../Modal/ModalsAuth";

const HeaderHome = () => {
  return (
    <section className="w-full px-5 py-10 gap-y-10 flex flex-col items-center md:flex-row md:justify-around mb-5">
      <article>
        <img src={Diart} alt="Diart" className="md:pt-8 w-72 h-auto" />
        <p className="pt-8 text-xl font-bold text-main-white">
          <span className="text-main-yellow">Descubre</span> y recolecta NFTs{" "}
          <br />
          extraordinarios.
        </p>
        <div className="mt-4">
          <ModalsAuth boolean={true} />
        </div>
      </article>
      <article>
        <img src={ImageRight} alt="ImageRight" className="w-72 h-auto" />
      </article>

      {/* <img src={Background} alt="Fondo" className="w-full h-full bg-center" />    */}
    </section>
  );
};

export default HeaderHome;
