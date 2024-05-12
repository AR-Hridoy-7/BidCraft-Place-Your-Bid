import React, { useState, useEffect, useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Item = ({ name, description, condition, starting_price, auction_end_date, pic, item_id, current_bid, seller }) => {
  const { addToCart } = useContext(ShopContext);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(new Date(auction_end_date)));

  useEffect(() => {
    if (auction_end_date) {
      const timer = setInterval(() => {
        setTimeLeft(getTimeRemaining(new Date(auction_end_date)));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [auction_end_date]);

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
        <p>Running</p>
      );
    } else {
      return <p>Ended</p>;
    }
  };

  return (
    <div className='item'>
      <Link to={`/product/${item_id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={pic} alt="" />
      </Link> 
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${starting_price}
        </div> 
        <div className="item-price-old">
          ${current_bid}
        </div>
        <div className="item-Auction-End-Date">
          {renderCountdown()}
        </div>
        <div className="item-bid">
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
    </div>
  );
};

export default Item;
