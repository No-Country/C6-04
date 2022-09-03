import React from "react";

const ModalImage = ({ clickedImg, setClickedImg }) => {

  const handleClick = () => {
      setClickedImg(null);
  };
  return (
    <>
      <div className="absolute h-full w-screen inset-0 z-50 backdrop-blur-xl" onClick={handleClick} >

        <img src={clickedImg} alt="Mico" className='w-72 m-4 pt-32 md:w-full md:h-full md:m-0 md:px-[160px] md:py-20 xl:px-80 xl:p-10 cursor-pointer' />

      </div>
    </>
  );
};
export default ModalImage;