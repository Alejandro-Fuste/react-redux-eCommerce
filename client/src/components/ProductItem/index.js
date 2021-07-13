import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pluralize } from "../../utils/helpers";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { image, name, id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {};

  return (
    <div className="card px-1 py-1">
      <Link></Link>
      <div></div>
      <button></button>
    </div>
  );
}

export default ProductItem;
