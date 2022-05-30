import React, { useState } from "react";
import { useCart } from "react-use-cart";

import ItemCard from "./ItemCard";
import data from "./data";


const Home = () => {
  const {  totalItems } = useCart();
  const [search, setSearch] = useState('')
  return (
    <>
      <div className="text-center mt-3 totalcard"> {totalItems}</div>
      <input type="text" className="searchbox" onChange={(e)=>setSearch(e.target.value)} placeholder="search" />
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.product.map((item, index) => {
            
            return (
              item.title.toLowerCase().includes(search) ?
              <ItemCard
                img={item.img}
                price={item.price}
                title={item.title}
                item={item}
                key={index}
              />
              :
              ""
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Home;
