const ItemCard = ({ type = "NFT" }) => {
  return (
    <>
      {type === "NFT" && (
        <section className="flex flex-col justify-start items-center px-6 py-[22px] m-0 bg-main-white bg-opacity-30 h-[300px] w-[199px] rounded-3xl gap-1 cursor-pointer hover:pb-3 opacity-80 hover:opacity-100">
          <figure>
            <img
              className="object-cover h-40 w-40 rounded-2xl"
              src="https://cdn.decrypt.co/wp-content/uploads/2021/10/bored-ape-nft-sothebys-record-sale-gID_4.png.webp"
              alt=""
            />
          </figure>

          <article className="w-full">
            <h2 className="text-main-white text-md font-normal">
              MV5 - Edicion
            </h2>
            <h2 className="text-main-white text-md font-bold">
              Pase de Acceso
            </h2>
          </article>

          <article className="bg-main-white bg-opacity-20 w-full rounded-2xl px-3 py-1">
            <h2 className="text-main-black font-black text-[0.7rem] ">
              Precio
            </h2>
            <div className="flex flex-row items-end justify-between">
              <h3 className="text-main-black font-black text-md">0.3 ETH</h3>
              <h3 className="text-main-black font-black underline text-[0.7rem]">
                Comprar
              </h3>
            </div>
          </article>
        </section>
      )}
      {type === "Collection" && (
        <section className="flex flex-col justify-start items-center bg-main-white bg-opacity-30 h-[180px] w-[220px] md:h-[200px] md:w-[240px] rounded-3xl gap-2 cursor-pointer hover:pb-3 opacity-80 hover:opacity-100">
          <figure>
            <img
              className="w-[220px] h-[108px] md:w-[240px] md:h-[128px] object-fill rounded-t-3xl"
              src="https://picsum.photos/200/300"
              alt=""
            />
          </figure>
          <article className="bg-main-white bg-opacity-20 rounded-2xl pl-4 py-1 pr-24">
            <h3 className="font-bold text-xl text-main-white">Evolution</h3>
            <h4 className="text-main-white text-sm">25 ACTIVOS</h4>
          </article>
        </section>
      )}
    </>
  );
};

export default ItemCard;
