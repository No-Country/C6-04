import Title from "./components/title/title";
import Label from './components/label/label'
import Input from './components/input/input'
import Boton from './components/botones/boton'
import Google from './assets/Icons/google.svg';
import useToggle from "./hooks/useToggle";
import ModalBox from "./components/Modal/ModalBox";
import { useState } from "react";

function VentanasModales() {

  const [state, { handleToggle }] = useToggle();
  const [ventanas, setVentanas] = useState(1);

  return (

    <div className="VentanasModales">
      <button
        className='items-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 px-6  rounded-full text-white font-semibold text-lg bg-blue-400 m-2 mr-1'
        onClick={() => {handleToggle();}}
      >
        Login
      </button>

      <button
        className="items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 px-6  rounded-full text-white font-semibold text-lg bg-main-blue m-2 mr-1'"
        type="button"
        onClick={() => {
          handleToggle();
          setVentanas(2);
        }}
      >
        Registro
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
            <div className=' px-10 py-3' >
              <br />
              <Title text='Iniciar Sesión' className='text-4xl font-bold text-main-blue tracking-tighter grid place-items-center' />
              <br />
              <Label text='Tu correo' className='text-lg font-bold' />
              <Input text='Ingrese su correo electrónico' className='w-full border border-black rounded-xl p-2 bg-transparent' />

              <br />
              <Label text='Tu contraseña' className='text-lg font-bold' />
              <Input text='Ingrese su contraseña' types='password' className='w-full border border-black rounded-xl p-2 bg-transparent' />

              <Label text='Recupera tu contraseña' className='text-decoration-line: underline cursor-pointer' />

              <Boton className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2  rounded-full text-white font-semibold text-lg   w-full bg-main-blue m-2' text='Iniciar sesión' />

              <div className="grid place-items-center ">
                <Label className='text-lg font-bold' text='O' />
              </div>

              <Boton className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2  rounded-full text-black font-semibold text-lg  border-white w-full bg-main-gray m-2' google={Google} alt='Google icon' text='Continuar con Google' />
            </div>
          )}

          {ventanas === 2 && (
            <div className=' px-10 py-14' >


              <Title text='¡Te damos la más ' className='text-4xl font-bold text-main-blue tracking-tighter grid place-items-center' />
              <Title text='cordial bienvenida!' className='text-4xl font-bold text-main-blue tracking-tighter grid place-items-center' />
              <br />

              <Boton className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2  rounded-full text-white font-semibold text-lg   w-full bg-main-blue m-2' text='Registrate con tu email' onClick={() => {setVentanas(3)}} />

              <Boton className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2  rounded-full text-black font-semibold text-lg  border-white w-full bg-main-gray m-2' text='Continuar con Google' google={Google} alt='Google icon' />
              <br />

              <div className="font-bold text-xl">
                <Label text='¿Ya tienes cuenta? Iniciar sesión' className='text-decoration-line: underline cursor-pointer' onclick={() => {setVentanas(1)}}/>
              </div>
            </div>
          )}

          {ventanas === 3 && (
            <div className=' px-10 py-5' >

              <Title text='Registro' className='text-4xl font-bold text-main-blue tracking-tighter grid place-items-start' />
              <br />

              <Label text='Ingresa tu email' className='text-lg font-bold' />
              <Input className='w-full border border-black rounded-xl p-2 bg-transparent' text='Ingrese su correo electrónico' />

              <br />
              <Label text='Ingresa tu contraseña' className='text-lg font-bold' />
              <Input className='w-full border border-black rounded-xl p-2 bg-transparent' text='Ingrese su contraseña' types='password' />

              <br />
              <Label text='Confirma tu contraseña' className='text-lg font-bold' />
              <Input className='w-full border border-black rounded-xl p-2 bg-transparent' text='Ingrese su contraseña' types='password' />

              <br />
              <Label text='Ingrese su nombre de usuario' className='text-lg font-bold' />
              <Input className='w-full border border-black rounded-xl p-2 bg-transparent' text='Ingrese su usuario' />

              <div className="text-xs m-2 py-2">
              <Label text='Al registrarte, confirmas que aceptas nuestros Términos ' className='text-decoration-line: underline cursor-pointer' />
              <Label text='y Condiciones, así como nuestra Política de Privacidad. ' className='text-decoration-line: underline cursor-pointer' />
              </div>

              <Boton className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2  rounded-full text-white font-semibold text-lg   w-full bg-main-blue m-2' text='Registrarme' />
            </div>
          )}
        </ModalBox>
      )}
    </div>
  );
}

export default VentanasModales;
