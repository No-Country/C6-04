import Search from "../../assets/Icons/search.svg";

const SearchInput = ({ className, placeholder, icon, activeKey, type='text' }) => {
  return (
    <div className="flex relative justify-center w-10/12 md:w-10/12 lg:w-full">
      {icon && (
        <div className="flex absolute inset-y-0 left-0 items-center px-0 md:px-3 pointer-events-none">
          <img src={Search} alt="" />
        </div>
      )}
      <input
        type={type}
        className={className}
        placeholder={placeholder}
      />
      {activeKey && (
        <div className="text-white font-bold text-sm bg-main-white bg-opacity-30 py-0.5 px-2 rounded-lg absolute hidden md:block md:right-2.5 top-3">
          F
        </div>
      )}
    </div>
  );
};

export default SearchInput;
