import React, { useState, useEffect, useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

<<<<<<< HEAD
const Item = ({ name, description, condition, starting_price, auction_end_date, pic, item_id, current_bid, seller }) => {
  const { addToCart } = useContext(ShopContext);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(new Date(auction_end_date)));

  useEffect(() => {
    if (auction_end_date) {
      const timer = setInterval(() => {
        setTimeLeft(getTimeRemaining(new Date(auction_end_date)));
=======
const Item = ({ id, name, image, new_price, old_price, AuctionEndDate,bid }) => {
  const { addToCart } = useContext(ShopContext);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(new Date(AuctionEndDate)));

  useEffect(() => {
    if (AuctionEndDate) {
      const timer = setInterval(() => {
        setTimeLeft(getTimeRemaining(new Date(AuctionEndDate)));
>>>>>>> df301b6ebce1d287843a987bb82c9cb5efecb687
      }, 1000);

      return () => clearInterval(timer);
    }
<<<<<<< HEAD
  }, [auction_end_date]);
=======
  }, [AuctionEndDate]);
>>>>>>> df301b6ebce1d287843a987bb82c9cb5efecb687

  function getTimeRemaining(endTime) {
    const total = endTime - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const renderCountdown = () => {
    if (timeLeft.total > 0) {
      const { days, hours, minutes, seconds } = timeLeft;
      return (
<<<<<<< HEAD
=======
        // <p>Time Left: {days} days {hours} hours {minutes} minutes {seconds} seconds</p>
>>>>>>> df301b6ebce1d287843a987bb82c9cb5efecb687
        <p>Running</p>
      );
    } else {
      return <p>Ended</p>;
    }
  };

  return (
    <div className='item'>
<<<<<<< HEAD
      <Link to={`/product/${item_id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={pic} alt="" />
=======
      <Link to={`/product/${id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={image} alt="" />
>>>>>>> df301b6ebce1d287843a987bb82c9cb5efecb687
      </Link> 
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">
<<<<<<< HEAD
          ${starting_price}
        </div> 
        <div className="item-price-old">
          ${current_bid}
=======
          ${new_price}
        </div> 
        <div className="item-price-old">
          ${old_price}
>>>>>>> df301b6ebce1d287843a987bb82c9cb5efecb687
        </div>
        <div className="item-Auction-End-Date">
          {renderCountdown()}
        </div>
        <div className="item-bid">
<<<<<<< HEAD
          <p>Bid: {current_bid}</p>
        </div>
      </div>
      {seller && (
        <div className="seller-info">
          <p>Seller: {seller.name}</p>
          <p>Email: {seller.email}</p>
          <p>Phone: {seller.phone}</p>
        </div>
      )}
=======
          <p>Bid:{bid}</p>
        </div>
      </div>
>>>>>>> df301b6ebce1d287843a987bb82c9cb5efecb687
    </div>
  );
};

export default Item;
