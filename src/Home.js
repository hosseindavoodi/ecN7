import React from "react";
import { useCart } from "react-use-cart";

import ItemCard from "./ItemCard";
import data from "./data";


const Home = () => {
  const {  totalItems } = useCart();
  return (
    <>
      <p className="text-center mt-3">cards total: {totalItems}</p>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.product.map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                price={item.price}
                title={item.title}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Home;
