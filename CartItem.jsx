import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items || []
  );

  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) =>
        total + calculateTotalCost(item),
      0
    );
  };

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            width="120"
          />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <p>
            Total Cost:
            ${calculateTotalCost(item)}
          </p>

          <button
            onClick={() => increaseQuantity(item)}
          >
            +
          </button>

          <button
            onClick={() => decreaseQuantity(item)}
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={() => alert("Coming Soon")}
      >
        Checkout
      </button>

      <br />
      <br />

      <a href="/products">
        Continue Shopping
      </a>
    </div>
  );
}

export default CartItem;
