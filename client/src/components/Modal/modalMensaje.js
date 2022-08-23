import React, { useState } from "react";
import Title from "../title/title";
import Boton from '../botones/boton'
import Comprobado from "../../assets/Icons/comprobado.svg";
import useToggle from "../../hooks/useToggle";
import ModalBox from "./ModalBox";

function ModalMensaje() {

  const [state, { handleToggle }] = useToggle();
  const [ventanas, setVentanas] = useState(1);

  return (
    <>
      <button
        className="bg-pink-500 text-black active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => { handleToggle(); }}>
        Mensaje
      </button>

      {state && (
        <ModalBox
          state={state}
          onClick={() => {
            handleToggle();
            setVentanas(1);
          }}
        >
          {ventanas === 1 && (

            <div className='px-1 py-2  md:px-10 md:py-5'>

              <div className="flex justify-center items-center content-center mx-12" >
                <img src={Comprobado} alt="Comprobar" className='' />
              </div>

              <Title text='¡Gracias por registrarte!' className='md:text-3xl text-xl font-bold text-black tracking-tighter flex justify-center' />

              <br />

              <div class='grid place-items-center md:text-base'>
                <p>En 10 minutos recibirás un email</p>
                <p>de confirmación, con el link para</p>
                <p>acceder a tu cuenta. Si no aparece</p>
                <p>en tu bandeja de entrada, verifica</p>
                <p>en tu carpeta de spam.</p>
              </div>

              <br />

              <Boton className='flex items-center justify-center active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2  rounded-full text-white font-semibold md:text-lg w-full bg-main-blue ' text='Entendido' />
            </div>
          )}

        </ModalBox>
      )}
    </>
  );
}

export default ModalMensaje;