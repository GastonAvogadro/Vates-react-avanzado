import React from "react";
import { useParams } from "react-router-dom";

function Category() {
  const { idCategory } = useParams();

  return <div>Usted está buscando: {idCategory}</div>;
}

export default Category;
