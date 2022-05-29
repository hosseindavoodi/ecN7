import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    //These names are ready in the juke card. Each name is indicated for what is being done
    isEmpty,
    //This is the number for one product
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  const buy = () => {
    alert("operation accomplished successfully...");
  };
  if (isEmpty) return <h1 className="text-center"> Your cart isEmpty </h1>;
  return (
    <section className="container">
      <div className="jistufy-content-center">
        <div className="col-12">
          <h5>
            {" "}
            Cart ({totalUniqueItems}) total Item :({totalItems})
          </h5>
          <table className="table table-light m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} />
                    </td>

                    <td>{item.title}</td>

                    <td>{item.price}</td>

                    <td>Quantity({item.quantity})</td>

                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        +{" "}
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btn-danger ms-2"
                      >
                        {" "}
                        RemoveItem{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="col-auto ms-auto">
            <h2> total price: {cartTotal} $</h2>
          </div>
        </div>
        <div className="mb-2 floatR">
          <button onClick={() => emptyCart()} className="btn btn-danger ms-2 ">
            Clear Cart
          </button>
          <button onClick={buy} className="btn btn-primary ms-2 ">
            Buy Now{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
