import Title from "../title/title";
import Label from "../label/label";
import Input from "../input/input";
import Boton from "../botones/boton";
import Button from "../Button";
import Google from "../../assets/Icons/google.svg";
import Comprobado from "../../assets/Icons/comprobado.svg";
import useToggle from "../../hooks/useToggle";
import ModalBox from "./ModalBox";
import { useState } from "react";

function ModalsAuth({ boolean }) {
  const [state, { handleToggle }] = useToggle();
  const [ventanas, setVentanas] = useState(1);

  return (
    <>
      {boolean === true && (
        <>
          <Button
            className="btn rounded-xl mr-2 w-32 border-none bg-second-blue font-black hover:bg-second-blue/50 text-main-white text-md"
            text="Registrate"
            onClick={() => {
              handleToggle();
              setVentanas(2);
            }}
          />
          <Button
            className="btn rounded-xl w-34 border-2 border-main-white bg-main-blue font-black hover:border-main-white hover:bg-main-blue/50 text-main-white text-md"
            text="Inicia sesión"
            onClick={() => {
              handleToggle();
              setVentanas(1);
            }}
          />
        </>
      )}

      {boolean === false && (
        <>
          <li
            className="modal-list_logLink"
            onClick={() => {
              handleToggle();
              setVentanas(1);
            }}
          >
            Inicia sesión
          </li>
          <li
            className="modal-list_logLink"
            onClick={() => {
              handleToggle();
              setVentanas(2);
            }}
          >
            Registrate
          </li>
        </>
      )}

      {state && (
        <ModalBox
          state={state}
          onClick={() => {
            handleToggle();
            setVentanas(1);
          }}
        >
          {ventanas === 1 && (
            <div className="px-7 py-1 md:px-10 md:py-3">
              <br />
              <Title
                text="Iniciar Sesión"
                className="text-4xl font-bold text-main-blue tracking-tighter grid place-items-center"
              />
              <br />
              <Label text="Tu correo" className="text-lg font-bold" />
              <Input
                text="Ingrese su correo electrónico"
                className="w-full border border-black rounded-xl p-2 bg-transparent"
              />

              <br />
              <Label text="Tu contraseña" className="text-lg font-bold" />
              <Input
                text="Ingrese su contraseña"
                types="password"
                className="w-full border border-black rounded-xl p-2 bg-transparent"
              />

              <Label
                text="Recupera tu contraseña"
                className="text-decoration-line: underline cursor-pointer"
              />

              <Boton
                className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2  rounded-full text-white font-semibold text-lg   w-full bg-main-blue m-2"
                text="Iniciar sesión"
              />

              <div className="grid place-items-center ">
                <Label className="text-lg font-bold" text="O" />
              </div>

              <Boton
                className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2  rounded-full text-black font-semibold text-lg  border-white w-full bg-main-gray m-2"
                google={Google}
                alt="Google icon"
                text="Continuar con Google"
              />
            </div>
          )}

          {ventanas === 2 && (
            <div className="px-4 py-10 md:px-10 md:py-14 ">
              <Title
                text="¡Te damos la más "
                className="md:text-4xl text-2xl font-bold text-main-blue tracking-tighter grid place-items-center"
              />
              <Title
                text="cordial bienvenida!"
                className="md:text-4xl text-2xl font-bold text-main-blue tracking-tighter grid place-items-center"
              />
              <br />

              <Boton
                className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform md:py-3 py-2 rounded-full text-white font-semibold md:text-lg md:w-full w-56 bg-main-blue md:m-2 m-4"
                text="Registrate con tu email"
                onClick={() => {
                  setVentanas(3);
                }}
              />
              <Boton
                className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform md:py-2 py-1 rounded-full text-black font-semibold md:text-lg border-white md:w-full w-56 bg-main-gray md:m-2 m-4"
                text="Continuar con Google"
                google={Google}
                alt="Google icon"
              />

              <br />

              <Label
                text="¿Ya tienes cuenta? Iniciar sesión"
                className="text-base text-decoration-line: underline cursor-pointer font-bold md:text-xl"
                onclick={() => {
                  setVentanas(1);
                }}
              />
            </div>
          )}

          {ventanas === 3 && (
            <div className="px-5 py-1 md:px-10 md:py-5">
              <Title
                text="Registro"
                className="text-4xl md:text-4xl font-bold text-main-blue tracking-tighter grid place-items-start"
              />

              <Label
                text="Ingresa tu email"
                className="text-sm md:text-lg font-bold"
              />
              <Input
                className="h-9 w-64 md:w-full border border-black rounded-xl md:p-2 bg-transparent"
                text="Ingrese su correo electrónico"
              />

              {/* <br /> */}
              <Label
                text="Ingresa tu contraseña"
                className="text-sm md:text-lg font-bold"
              />
              <Input
                className="h-9 w-64 md:w-full border border-black rounded-xl md:p-2 bg-transparent"
                text="Ingrese su contraseña"
                types="password"
              />

              {/* <br /> */}
              <Label
                text="Confirma tu contraseña"
                className="text-sm md:text-lg font-bold"
              />
              <Input
                className="h-9 w-64 md:w-full border border-black rounded-xl md:p-2 bg-transparent"
                text="Ingrese su contraseña"
                types="password"
              />

              {/* <br /> */}
              <Label
                text="Ingrese su nombre de usuario"
                className="text-sm md:text-lg font-bold"
              />
              <Input
                className="h-9 w-64 md:w-full border border-black rounded-xl md:p-2 bg-transparent"
                text="Ingrese su usuario"
              />

              <div className=" text-xs md:m-2 md:py-2">
                <Label
                  text="Al registrarte, confirmas que aceptas nuestros Términos"
                  className="text-decoration-line: underline cursor-pointer"
                />
                <br />
                <Label
                  text="y Condiciones, así como nuestra Política de Privacidad."
                  className="text-decoration-line: underline cursor-pointer"
                />
              </div>

              <Label
                className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2  rounded-full text-white font-semibold text-lg w-full bg-main-blue m-2"
                text="Registrarme"
                onclick={() => {
                  setVentanas(4);
                }}
              />
            </div>
          )}

          {ventanas === 4 && (
            <div className="px-5 py-1 md:px-10 md:py-5">
              <div className="flex justify-center items-center content-center mx-12">
                <img src={Comprobado} alt="Comprobar" className="" />
              </div>

              <Title
                text="¡Gracias por registrarte!"
                className="md:text-3xl text-xl font-bold text-black tracking-tighter flex justify-center"
              />

              <br />

              <div className="grid place-items-center md:text-base">
                <p>En 10 minutos recibirás un email</p>
                <p>de confirmación, con el link para</p>
                <p>acceder a tu cuenta. Si no aparece</p>
                <p>en tu bandeja de entrada, verifica</p>
                <p>en tu carpeta de spam.</p>
              </div>

              <br />

              <Label
                className="flex items-center justify-center active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2  rounded-full text-white font-semibold md:text-lg w-full bg-main-blue "
                text="Entendido"
                onclick={() => {
                  handleToggle();
                }}
              />
            </div>
          )}
        </ModalBox>
      )}
    </>
  );
}

export default ModalsAuth;
