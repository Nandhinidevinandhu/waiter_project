import React from 'react';

const OrderList = ({ orders, deleteOrder }) => {
  return (
    <div>
      <h2>Orders</h2>
      {Object.keys(orders).map((table) => (
        <div key={table}>
          <h3>{table}</h3>
          <ul>
            {orders[table].map((order, index) => (
              <li key={index}>
                {order.orderId} - {table} - {order.dish} - Rs.{order.price}
                <button onClick={() => deleteOrder(table, index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
