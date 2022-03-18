import React, { useState, useContext } from "react";
import { Context } from "../contexts/ProductContext";
import { Product } from "../services/types";

interface ProductItemProps {
  item: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  const [name, setName] = useState(item.name);
  const context = useContext(Context);
  if (context === null) return <p>Oops...context is null</p>;

  const { editProduct, delProduct } = context;

  const id = item.id;
  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          editProduct(id, name);
        }}
      >
        Update
      </button>
      <button
        onClick={() => {
          delProduct(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductItem;
