import React, { useContext, useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";


const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { getTotalCartItems } = useContext(ShopContext);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct the parameter value based on input text and selected category
    const parameterValue = searchValue.trim() !== "" ? searchValue : selectedCategory;
    // Navigate to the demo route with the parameter value using Link
    // Note: Make sure to use backticks for string interpolation
    window.location.href = `/demo/${parameterValue}`;
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>BidCraft</p>
      </div>
      <form onSubmit={handleSubmit} className="nav-search">
        <input
          type="text"
          placeholder="Search category..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kids</option>
        </select>
        <button type="submit">Search</button>
      </form>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("mens") }}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Vehicle</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("womens") }}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Electronics</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Others</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <div className="nav-create-bid">
          <Link to='/createbid'><button>Create bid</button></Link>
        </div>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;
