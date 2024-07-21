import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemDetails from "./ItemDetails";
import "./styles.css";
import { checkout, setProducts } from "../redux_store/action/productsAction";
import { getProducts } from "../FetchedItems";

function findTotal(productCart, products) {
  let sum = 0;
  productCart.forEach(
    (item) => (sum += item.count * products[item.id - 1]?.price)
  );
  sum = sum.toFixed(2);
  return sum;
}

function TotalProducts() {
  const { productCart, products } = useSelector((state) => state);
  let dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      let products = await getProducts();
      dispatch(setProducts(products.data));
    }
    fetchData();
  }, [dispatch]);

  const totalAmount = findTotal(productCart, products);
  return (
    <div className="user__cart">
      <div className="left__Cart">
        {productCart.length > 0 ? (
          productCart.map((item, index) => {
            return (
              <ItemDetails key={index} count={item.count} productId={item.id} />
            );
          })
        ) : (
          <h3 style={{ textAlign: "center" }}>No Item in Cart</h3>
        )}
      </div>
      <div className="right__Cart">
        <div className="summary">
          <div className="summary__item">
            <span>Total:</span>
            <span className="cart__price">₹ {totalAmount}</span>
          </div>
          <div className="summary__item">
            <span>Discount:</span>
            <span>₹ 0</span>
          </div>
          <div className="summary__item">
            <span>Final Total:</span>
            <span className="cart__price">₹ {totalAmount}</span>
          </div>
        </div>
        <button className="checkout-button" onClick={() => dispatch(checkout())}>
          Checkout Product
        </button>
      </div>
    </div>
  );
}

export default TotalProducts;