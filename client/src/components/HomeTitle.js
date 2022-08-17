import React from "react";

const HomeTitle = ({ boolean, text, image }) => {
  return (
    <>
      {boolean === true && (
        <section className="flex justify-start sm:flex sm:justify-start">
          <h1 className="text-main-black flex font-black text-4xl md:text-6xl lg:text-6xl sm:text-5xl mt-16">
            {text}
          </h1>
          <div>
            <img src={image} alt="person" width="80px" />
          </div>
        </section>
      )}
      {boolean === false && (
        <section className="flex justify-end sm:flex sm:justify-end">
          <div>
            <img src={image} alt="person" className="mr-9 mt-1" width="80px" />
          </div>
          <h1 className="text-main-black flex font-black text-4xl md:text-6xl lg:text-6xl sm:text-5xl mt-16 xl:mt-24 lg:mt-20">{text}</h1>
        </section>
      )}
    </>
  );
};

export default HomeTitle;
