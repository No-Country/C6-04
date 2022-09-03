const HomeTitle = ({ boolean, text, image }) => {
  return (
    <>
      {boolean === true && (
        <section className="flex justify-start sm:flex sm:justify-start ml-4">
          <h1 className="text-main-black flex font-black text-4xl md:text-6xl lg:text-6xl sm:text-5xl lg:mt-16 mt-12 md:mt-18 mr-2">
            {text}
          </h1>
          <div>
            <img src={image} alt="person" className='w-[120px] md:w-[100px]' />
          </div>
        </section>
      )}
      {boolean === false && (
        <section className="flex justify-end sm:flex sm:justify-end mr-4">
          <div>
            <img src={image} alt="person" className='mr-9 mt-1 w-[80px] md:w-[100px]' />
          </div>
          <h1 className="text-main-black flex font-black text-4xl md:text-6xl lg:text-6xl sm:text-5xl mt-16 xl:mt-24 lg:mt-20">{text}</h1>
        </section>
      )}
    </>
  );
};

export default HomeTitle;
