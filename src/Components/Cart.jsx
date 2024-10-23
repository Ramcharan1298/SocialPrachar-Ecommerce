import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReply } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import {
  addItemAction,
  decreseQuantityAction,
  deleteItemFromStateAction,
} from "./actions/actions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems)

  const dispatch = useDispatch();

  const increseQuantity = (item) => {
    // console.log("quantity is incresed !!")
    // dispatch(increaseQuantityAction(item))
    dispatch(addItemAction(item));
  };
  const decreaseQuantity = (item) => {
    // console.log("quantity is decreased !!!!!")
    dispatch(decreseQuantityAction(item));
  };

  const deleteItem = (item) => {
    // console.log("item is deleted from state")
    dispatch(deleteItemFromStateAction(item));
  };

  const navigate = useNavigate();

  const goToCheckOut = () => {
    navigate("/checkout");
  };
  const gotoProducts = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="">
        {cartItems.map((item) => (
          <div className="container cart-body my-3 py-3" key={item.id}>
            <div className="row">
              <div className="col-md-5 my-3 ">
                <img src={item.image} alt={item.title} height={200} />
              </div>
              <div className="col-md-7 my-3">
                <h4 className=" text-uppercase">{item.category}</h4>
                <h1 className="  lead">{item.title}</h1>
                <h1 className="  p5">
                  {" "}
                  Price = {item.qty} x {item.price} = $ {item.qty * item.price}
                </h1>

                <p className="">{item.description}</p>

                <p className="my-3 py-3">
                  Quantity :
                  <button
                    className="border-0 decrease px-2 h4 mx-2 "
                    onClick={() => {
                      decreaseQuantity(item);
                    }}
                  >
                    -
                  </button>
                  <span className="box">{item.qty}</span>
                  <button
                    className="border-0 increase px-2 h4 mx-2"
                    onClick={() => {
                      increseQuantity(item);
                    }}
                  >
                    +
                  </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                  className="del-button"
                  onClick={() => {
                    deleteItem(item);
                  }}
                >
                  <MdDeleteForever/>
                </button>
                </p>   
              </div>
              <hr />
            </div>
          </div>
        ))}
        <div className="text-center mb-5">
          {cartItems.length ? (
            <button
              className="proceed-buy buy-to-go"
              onClick={goToCheckOut}
            >
              {" "}
              Proceed to Buy
            </button>
          ) : (
            <div className="container my-5 ">
              <div className="row">
                <div className=" cart-empty">
                  <h3>YOUR CART IS EMPTY......!!!</h3><br />
                  <button className="back" onClick={gotoProducts}>
                    <FaReply />&nbsp;&nbsp;Back to Products
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
