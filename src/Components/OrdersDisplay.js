import React from "react";
import "../Styles/OrdersDisplay.scss";

// display order in the order stages
const OrderDisplay = ({ orders }) => {
  return (
    <div className="orderContainer">
      {orders.map((order) => (
        <div
          key={order.orderId}
          className="pizzaOrders"
          style={
            order.min >= order.makingTime && order.status != "ORDER_PICKED"
              ? { background: "linear-gradient(0deg, #ec1000, #e91e638c)" }
              : null
          }
        >
          <p>Order No - {order.orderId}</p>
          {order.status != "ORDER_PICKED" && (
            <p>
              {order.min} min {order.sec} sec
            </p>
          )}
          {order.status === "ORDER_PICKED" && <p>Picked</p>}
          {order.status != "ORDER_PICKED" && (
            <button onClick={() => order.timeManager.updateOrderStatus(order)}>
              Next
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderDisplay;
