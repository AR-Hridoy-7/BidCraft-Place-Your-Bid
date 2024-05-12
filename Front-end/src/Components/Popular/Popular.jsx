<<<<<<< HEAD
import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';
=======
import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
>>>>>>> df301b6ebce1d287843a987bb82c9cb5efecb687

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
<<<<<<< HEAD
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
=======
        {data_product.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} AuctionEndDate={item.AuctionEndDate} />
        })}
      </div>
    </div>
  )
}

export default Popular
>>>>>>> df301b6ebce1d287843a987bb82c9cb5efecb687
