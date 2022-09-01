import { NavLink } from "react-router-dom";

const ItemTrend = ({ number, image, name, price }) => {
  return (
    <NavLink to="/nft">
      <li
        key={number}
        className="flex bg-blue-300/80 justify-evenly rounded-3xl py-3 px-3 items-center w-80"
      >
        <h3 className="font-black text-2xl">{number}</h3>
        <img
          src={image}
          alt="NFT view"
          className="rounded-full object-contain w-12"
        />
        <div className="grid grid-cols-1 text-center place-items-center">
          <h3 className="font-extrabold text-md truncate w-44">{name}</h3>
          <section className="bg-cyan-100/60 rounded-xl h-12 w-28 p-2">
            <h4 className="font-semibold text-xs">Precio</h4>{" "}
            <h5 className="font-bold text-sm">{price} ETH</h5>
          </section>
        </div>
      </li>
    </NavLink>
  );
};

export default ItemTrend;
