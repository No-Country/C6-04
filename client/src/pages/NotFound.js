import ImgNotFound from '../assets/Pictures/NotFound.svg';

const NotFound = () => {
  return (
    <>
      <main className="w-full h-full bg-main-blue flex justify-center items-center py-6">
        <img src={ImgNotFound} className='w-[320px] md:w-[429px] lg:w-[710px]' alt='Not Found' />
      </main>
    </>
  );
};

export default NotFound;
