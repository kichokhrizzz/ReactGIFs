import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      <AddCategory
        //setCategories={ setCategories }
        onNewCategory={onAddCategory}
      ></AddCategory>

      {/* Listado de GIF's */}

      {
        categories.map(( category ) => (
            <GifGrid key={category}
            category = {category}>

            </GifGrid>
        ))
      }

      {/* GIF Item */}
    </>
  );
};
