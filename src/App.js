import React, { useState, useEffect } from 'react';
import OrderForm from './components/orderForm';
import OrderList from './components/orderList';
import './App.css';

function App() {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : { table1: [], table2: [], table3: [] };
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    setOrders((prevOrders) => ({
      ...prevOrders,
      [order.table]: [...prevOrders[order.table], order],
    }));
  };

  const deleteOrder = (table, index) => {
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders[table]];
      updatedOrders.splice(index, 1);
      return { ...prevOrders, [table]: updatedOrders };
    });
  };

  return (
    <div className="App">
      <h1>Waiter Helper</h1>
      <OrderForm addOrder={addOrder} />
      <OrderList orders={orders} deleteOrder={deleteOrder} />
    </div>
  );
}

export default App;

