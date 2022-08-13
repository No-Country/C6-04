import BotonClose from "../botones/botonclose";
import Close from '../../assets/Icons/close.svg'

const ModalBox = ({ onClick, children }) => {

  return (
  <div className="justify-center items-center w-full h-screen flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">

    <div className=' bg-white  rounded-3xl border-4 border-main-blue' >

      <BotonClose close={Close} alt='Close icon' className='float-right' onclick={() => onClick()} />

      <>
        {children}
      </>
      
    </div>
  </div>
  )
}

export default ModalBox;

