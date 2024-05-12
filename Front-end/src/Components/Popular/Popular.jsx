import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              name={item.name}
              item_id={item.item_id}
               // Pass the entire seller object
              pic={item.pic} // Use 'pic' instead of 'image'
              starting_price={item.starting_price} // Use 'starting_price' instead of 'new_price'
              current_bid={item.current_bid} // Use 'current_bid' instead of 'old_price'
              auction_end_date={item.auction_end_date} // Use 'auction_end_date' instead of 'AuctionEndDate'
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
