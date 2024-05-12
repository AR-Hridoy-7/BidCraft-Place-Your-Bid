import React, { useState, useEffect } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/item/get_items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {items.map((item) => (
          <div key={item.item_id} className="item-container">
            <img   src={`data:image/jpeg;base64,${item.pic}`} alt={item.name} />
            <Item
              name={item.name}
              item_id={item.item_id}
              starting_price={item.starting_price}
              current_bid={item.current_bid}
              auction_end_date={item.auction_end_date}
              description={item.description}
              seller={item.seller}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
