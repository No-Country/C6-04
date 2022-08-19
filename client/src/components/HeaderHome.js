
import Logo from "./../assets/Pictures/logo.svg";
import Diart from "./../assets/Pictures/diart-logo.svg";
// import Background from "./../assets/Pictures/bg-home.svg";
import ImageRight from "./../assets/Pictures/img-right.svg";

const HeaderHome = () => {
  return (
     <div class="w-full min-h-full bg-main-blue">
      <div class="navbar bg-main-blue text-main-white border-b-[1px]">
        <div class="flex-1">
          <img src={Logo} alt="Logo" className="ml-6 h-14" />
          <a className="ml-6 text-2xl font-bold text-main-yellow uppercase" href="/">
            Digital Art is Art
          </a>
        </div>
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">
            Search 
          </label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>      
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 w-96 text-center opacity-75 border-gray-300 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:border-white dark:placeholder-main-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-second-blue mr-6 h-12"
              placeholder="Search by collection, NFT or user" 
              required
              />
          </div>
          {/* <label class="kbd font-bold bg-second-blue min-h-3 w-1">F</label> */}
          <button class="btn bg-second-blue hover:bg-main-blue border-white h-6 mr-6 rounded-2xl">...</button>
        </form>
      </div>
          <img src={ImageRight} alt="ImageRight" className="mr-32 mt-12 w-72 h-auto float-right" />
      <div>
      <div>
        <img src={Diart} alt="Diart" className="ml-32 mt-14 w-72 h-auto" />
        <p className="ml-32 mt-8 text-xl font-bold text-main-white">
            <span className="text-main-yellow">Descubre</span> y recolecta NFTs <br />
            extraordinarios.
          </p>
          <div className="ml-32 mt-4" >
          <button className="bg-second-blue text-main-white h-9 rounded-xl mr-4 w-32
           hover:bg-main-blue font-bold">Registrate</button>
          <button class="w-32 text-main-white bg-second-blue font-bold h-9 rounded-xl   hover:bg-main-blue">Inicia Sesión</button>
          </div>
      </div>  
       {/* <img src={Background} alt="Fondo" class="w-full h-full bg-center" />    */}
      </div>
    </div>
  );
};

export default HeaderHome