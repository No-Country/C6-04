import React from "react";
import Category from "./Category";
import PeepBicycle from "../../assets/Pictures/peep-8.svg";
import HomeTitle from "./HomeTitle";

function CategoriesContainer() {
  const categories = [
    {
      name: "PFP",
      url: "url1",
      down: false,
    },
    {
      name: "Art",
      url: "url2",
      down: true,
    },
    {
      name: "Meta",
      url: "url3",
      down: false,
    },
    {
      name: "Photo",
      url: "url4",
      down: true,
    },
    {
      name: "Games",
      url: "url5",
      down: false,
    },
    {
      name: "Sports",
      url: "url6",
      down: true,
    },
    {
      name: "NFSW",
      url: "url7",
      down: false,
    },
  ];

  return (
    <>
    <div className="flex justify-center items-center md:justify-start md:items-start  flex-col w-full">
    <HomeTitle boolean={true} text="Categorias" image={PeepBicycle} />
    </div>
    <section className="flex justify-center items-center flex-col w-full">
      <article className="flex justify-center flex-wrap w-2/3 md:w-11/12 items-center my-20">
        {categories.map((category) => (
          <Category categoryName={category.name} down={category.down} />
        ))}
      </article>
    </section>
    </>
  );
}

export default CategoriesContainer;
