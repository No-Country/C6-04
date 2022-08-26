import React from "react";
import ItemTrend from "./ItemTrend";
import useCount from "../../hooks/useCount";

const BoxTrend = () => {
  const array = [
    {
      image: "https://source.boringavatars.com/beam",
      name: "Index, the forest",
      price: "0,35",
      url: "/",
    },
    {
      image: "https://source.boringavatars.com/beam",
      name: "Index, the forest",
      price: "0,35",
      url: "/",
    },
    {
      image: "https://source.boringavatars.com/beam",
      name: "Index, the forest",
      price: "0,35",
      url: "/",
    },
    {
      image: "https://source.boringavatars.com/beam",
      name: "Index, the forest",
      price: "0,35",
      url: "/",
    },
    {
      image: "https://source.boringavatars.com/beam",
      name: "Index, the forest",
      price: "0,35",
      url: "/",
    },
    {
      image: "https://source.boringavatars.com/beam",
      name: "Index, the forest",
      price: "0,35",
      url: "/",
    },
    {
      image: "https://source.boringavatars.com/beam",
      name: "Index, the forest",
      price: "0,35",
      url: "/",
    },
    {
      image: "https://source.boringavatars.com/beam",
      name: "Index, the forest",
      price: "0,35",
      url: "/",
    },
  ];
  const [count, { handleCount }] = useCount();

  return (
    <div className="my-16 flex justify-center">
      <ul className="gap-x-20 gap-y-7 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
        {array.map((li) => (
          <>
            <ItemTrend
              image={li.image}
              number={count}
              name={li.name}
              price={li.price}
            />
          </>
        ))}
      </ul>
    </div>
  );
};

export default BoxTrend;
