import React, { useState } from "react";
import Label from "./components/label/label";
import Title from "./components/title/title";
import Card from "./components/cards/card";
import Mico from "./assets/Pictures/Mico.jpg";
import Carrito from "./assets/Icons/carrito.svg";
import Boton from "./components/botones/boton";
import ModalImage from "./components/Modal/ModalImage";

const Pantalla = () => {

  const [clickedImg, setClickedImg] = useState(null);

  const handleClick = () => {
    setClickedImg(Mico);
  };

  return (
    <div className="md:h-screen h-full w-screen bg-main-blue flex justify-center items-center p-2 md:p-9 lg:p-16">
      <div className="w-full h-full bg-blue-400/40 md:flex rounded-lg p-10 md:p-1 lg:p-10 flex-col md:flex-row ">

        {/* //Contenedor izquierdo */}
        <section className="md:w-1/2 sm:h-full md:grid md:place-items-center ">
          <article className="md:h-80 md:w-80 w-60 h-60 ">
            <img
              src={Mico}
              alt="Mico"
              className="cursor-pointer w-50 h-60 md:h-80 md:w-80 rounded-lg"
              onClick={() => handleClick()}
            />

            {clickedImg && (
              <ModalImage
                clickedImg={clickedImg}
                setClickedImg={setClickedImg}
              />
            )}
          </article>

          <article className="md:h-16 md:w-80 w-56 h-14 bg-second-blue rounded-lg grid place-items-center m-2">
            <Label text="Precio actual" className="text-white font-bold text-xl" ></Label>
            <Label text="0.0099 ETH" className="text-black font-bold " ></Label>
          </article>
        </section>
 
        {/* //Contenedor derecho */}
        <section className="w-60 h-full md:w-1/2 md:h-full md:p-1">

          <Title text="RareApepeYachtClub" className="md:text-lg font-bold my-1" />

          <Title text="Rare Apepe #5489" className="text-2xl md:text-3xl font-bold" />
          <br />
          <Label
            text="Este Rare Apepe es un homenaje a Bored Ape #3854. Ademas de ser reconocido por haber salido a la luz por Bored Ape #3854"
            className="font-inter" />
          <Title text="Atributos" className="text-2xl font-bold" />

          <div className="md:grip md:place-items-left">
            <article className="grid grid-cols-2 gap-4 md:w-96">
              <Card text="Fondo" text2="Gris" />
              <Card text="Ropa" text2="Camiseta sin color" />
              <Card text="Ojos" text2="Somnoliento" />
              <Card text="Sombrero" text2="Casco de la era militar" />
              <Card text="Boca" text2="Fonema L" />
              <Card text="Piel" text2="Negro" />
            </article>
          </div>

          <div className="md:w-96 grid place-items-center">
            <article className="md:w-60 md:h-16 w-52 h-14 bg-second-blue rounded-lg flex p-2 gap-5 content-center justify-center m-3">
              <article className=" bg-second-green rounded-lg md:p-3 p-2 font-bold w-44">
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

export default Pantalla;