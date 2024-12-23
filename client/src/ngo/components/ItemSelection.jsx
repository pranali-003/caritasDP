import React, { useState } from 'react';

const items = [
  { category: 'Clothing', item: 'T-Shirts', qty: 0 },
  { category: 'Groceries', item: 'Rice', qty: 0 },
  { category: 'Stationary', item: 'Notebooks', qty: 0 },
  { category: 'Monetary', item: 'Donation', qty: 0 },
];

const ItemSelection = ({ addToCart }) => {
  const [quantities, setQuantities] = useState(items);

  const handleQuantityChange = (index, value) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index].qty = value;
    setQuantities(updatedQuantities);
  };

  return (
    <div className="container mt-4">
      <h3>Select Items for Donation</h3>
      {quantities.map((item, index) => (
        <div key={index} className="mb-3 row">
          <label className="col-sm-2 col-form-label">{item.item}</label>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control"
              value={item.qty}
              onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
            />
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={() => addToCart(quantities)}>Add to Cart</button>
    </div>
  );
};

export default ItemSelection;
