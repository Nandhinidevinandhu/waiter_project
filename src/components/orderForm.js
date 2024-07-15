import React, { useState } from 'react';

const OrderForm = ({ addOrder }) => {
  const [orderId, setOrderId] = useState('');
  const [price, setPrice] = useState('');
  const [dish, setDish] = useState('');
  const [table, setTable] = useState('table1');

  const handleAddOrder = () => {
    addOrder({ orderId, table, dish, price});
    setOrderId('');
    setPrice('');
    setDish('');
  };

  return (
    <div>
      <h2>Add Order</h2>
      <input
        type="text"
        placeholder="Order ID"
        value={orderId}
        onChange={(event) => setOrderId(event.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <input
        type="text"
        placeholder="Dish"
        value={dish}
        onChange={(event) => setDish(event.target.value)}
      />
      <select value={table} onChange={(event) => setTable(event.target.value)}>
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select>
      <button onClick={handleAddOrder}>Add to Bill</button>
    </div>
  );
};

export default OrderForm;
