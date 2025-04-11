import React from 'react';
import './Popular.css'; // Ensure this file exists in the correct location
import data_products from "../Assets/popular_data"; // Ensure this file exists and has the correct export
import Item from '../Item/Item'; // Ensure the Item component exists
import '../DarkMode/Dark.css'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN laddo gopal dress</h1>
      <hr />
      <div className='popular-item'>
        {data_products && data_products.length > 0 ? (
          data_products.map((item) => (
            <Item
              key={item.id} // Unique key
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No popular items available</p>
        )}
      </div>
    </div>
  );
};

export default Popular;
