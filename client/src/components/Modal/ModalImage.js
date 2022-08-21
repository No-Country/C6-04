import React from "react";

const ModalImage = ({ clickedImg, setClickedImg }) => {

  const handleClick = () => {
      setClickedImg(null);
  };
  return (
    <>
      <div className="absolute h-full  w-screen inset-0 z-50 backdrop-blur-xl" onClick={handleClick} >

        <img src={clickedImg} alt="Mico" className='w-full h-full m-0 px-96 py-20 cursor-pointer ' />

      </div>
    </>
  );
};
export default ModalImage;