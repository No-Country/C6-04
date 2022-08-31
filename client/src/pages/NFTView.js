import React, { useState } from "react";
import Label from "../components/label/label";
import Title from "../components/title/title";
import Card from "../components/cards/AttributeCard";
import Mico from "../assets/Pictures/Mico.jpg";
import Carrito from "../assets/Icons/carrito.svg";
import Boton from "../components/botones/boton";
import ModalImage from "../components/Modal/ModalImage";
import Expandir from "../assets/Icons/Expandir.svg";

const NFTView = () => {

  const [clickedImg, setClickedImg] = useState(null);

  const handleClick = () => {
    setClickedImg(Mico);
  };

  return (
    // <div className="md:h-screen h-full bg-main-blue flex justify-center items-center p-2 lg:p-[71px] xl:p-[40px] xl:py-20">
    <div className="h-auto bg-main-blue flex justify-center items-center p-2 lg:p-[71px] xl:py-4 xl:px-28">
      <div className="w-full h-full lg:w-screen bg-second-blue md:flex rounded-lg p-10 md:p-6 lg:p-10 flex-col md:flex-row">

        {/* //Contenedor izquierdo */}
        <section className="md:w-1/2 md:h-full md:grid lg:place-items-center place-items-start">
          <article className="md:h-80 md:w-80 w-60 h-60 ">
            <img
              src={Mico}
              alt="Mico"
              className="w-50 h-60 md:h-80 md:w-80 rounded-lg absolute z-10"
            />
            <div className="float-right ">
              <img
                src={Expandir}
                alt="Expandir"
                // className="cursor-pointer w-8 h-6 p-1 md:w-10 md:h-10 rounded-lg relative z-10"
                className="cursor-pointer w-16 p-2 rounded-lg relative z-10"
                onClick={() => handleClick()}
              />
            </div>

            {clickedImg && (
              <ModalImage
                clickedImg={clickedImg}
                setClickedImg={setClickedImg}
              />
            )}
          </article>

          <article className="md:h-16 md:w-80 w-56 h-14 bg-second-white bg-opacity-40 rounded-lg grid place-items-center m-2 md:mt-28 xl:m-10 font-black text-xl">
            <Label text="Precio actual" className="text-white font-black text-2xl" ></Label>
            <Label text="0.0099 ETH" className="text-black font-black " ></Label>
          </article>
        </section>

        {/* //Contenedor derecho */}
        <section className="w-60 md:w-1/2 md:p-1">

          <Title text="RareApepeYachtClub" className="md:text-base font-black my-1" />

          <Title text="Rare Apepe #5489" className="text-2xl md:text-3xl font-black my-2" />


          {/* <Label className="text-ellipsis overflow-hidden w-10 h-12 relative" text="Este Rare Apepe es un homenaje a Bored Ape #3854. Ademas de ser reconocido por haber salido a la luz por Bored Ape #3854 Mañana veremos que se hace"></Label> */}
          <p className="text-ellipsis overflow-hidden xl:w-[450px] line-clamp-2">Este Rare Apepe es un homenaje a Bored Ape #3854. Ademas de ser reconocido por haber salido a la luz por Bored Ape #3854 Ademas de ser un nft </p>

          <Title text="Atributos" className="text-2xl font-black my-4" />

          <div className="md:grip md:place-items-left">
            <article className="grid grid-cols-2 lg:grid-cols-3 lg:gap-x-20 gap-y-6 gap-4 md:w-96">
              <Card text="Fondo" text2="Gris" />
              <Card text="Ropa" text2="Camiseta sin color" />
              <Card text="Ojos" text2="Somnoliento" />
              <Card text="Sombrero" text2="Casco de la era militar" />
              <Card text="Boca" text2="Fonema L" />
              <Card text="Piel" text2="Negro" />
            </article>
          </div>

          <div className="md:w-96 md:mx-20 md:my-11">
            <article className="md:w-60 md:h-16 h-14 bg-second-white bg-opacity-40 rounded-lg flex p-2 gap-5 content-center justify-center m-2 md:m-4">
              <article className=" bg-second-green rounded-lg md:p-3 p-2 font-black w-44 md:text-lg">
                <Boton text="Comprar ahora" />
              </article>

              <article className=" bg-main-yellow rounded-lg px-1 p-2 ">
                <Boton google={Carrito} />
              </article>
            </article>
          </div>

        </section>
      </div>
    </div>

  );
}

export default NFTView;