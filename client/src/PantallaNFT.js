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
    <div className="h-screen w-screen bg-main-blue flex justify-center items-center p-16">
      <div className="w-full h-full bg-blue-400/40 flex rounded-lg p-10 ">

        {/* //Contenedor izquierdo */}
        <section className="w-1/2 h-full grid place-items-center">
          <article className="h-80 w-80 rounded-lg ">
            <img
              src={Mico}
              alt="Mico"
              className="cursor-pointer"
              onClick={() => handleClick()}
            />

            {clickedImg && (
              <ModalImage
                clickedImg={clickedImg}
                setClickedImg={setClickedImg}
              />
            )}
          </article>

          <article className="h-16 w-80 bg-second-blue rounded-lg grid place-items-center">
            <Label text="Precio actual" className="text-white font-bold text-xl" ></Label>
            <Label text="0.0099 ETH" className="text-black font-bold " ></Label>
          </article>
        </section>
 
        {/* //Contenedor derecho */}
        <section className="w-1/2 h-full p-1">

          <Title text="RareApepeYachtClub" className="text-lg font-bold my-1" />

          <Title text="Rare Apepe #5489" className="text-3xl font-bold" />
          <br />
          <Label
            text="Este Rare Apepe es un homenaje a Bored Ape #3854. Ademas de ser reconocido por haber salido a la luz por Bored Ape #3854"
            className="font-inter" />
          <Title text="Atributos" className="text-2xl font-bold" />

          <div className="grip place-items-left">
            <article className="grid grid-cols-2 gap-4 w-96">
              <Card text="Fondo" text2="Gris" />
              <Card text="Ropa" text2="Camiseta sin color" />
              <Card text="Ojos" text2="Somnoliento" />
              <Card text="Sombrero" text2="Casco de la era militar" />
              <Card text="Boca" text2="Fonema L" />
              <Card text="Piel" text2="Negro" />
            </article>
          </div>

          <div className="w-96 grid place-items-center">
            <article className="w-60 h-16 bg-second-blue rounded-lg flex p-2 gap-5 content-center justify-center m-3">
              <article className=" bg-second-green rounded-lg p-3 font-bold">
                <Boton text="Comprar ahora  " />
              </article>

              <article className=" bg-main-yellow rounded-lg px-1">
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