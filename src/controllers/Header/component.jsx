import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function countProduct(product) {
  let count = 0;
  product.forEach((element) => {
    count += element.count;
  });
  return count;
}

function Header() {
  let store = useSelector((state) => state).productCart;
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header__subcontainer">
        <div className="header_icon">
          <Link to="/">Home</Link>
        </div>
        <div className="header__user-actions">
          {user ? (
            <>
              <span>Welcome, {user.username}!</span>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
        <Link to="/cart">
          <div className="header__cart">
            🛒<span className="product__count"> ({countProduct(store)})</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
