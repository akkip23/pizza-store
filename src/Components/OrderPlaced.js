// import react to use all functionality of react library
import React from "react";
// react redux useSelector to get the updated state of the order
import { useSelector } from "react-redux";
// import order display container to render order
import OrderDisplay from "./OrdersDisplay";

// function to render all order in the order placed stage
function OrderPlaced() {
  const orders = useSelector((state) => state.orderPizza.orders);
  const placedOrders = orders.filter(
    (order) => order.status === "ORDER_PLACED"
  );

  return (
    <>
      <OrderDisplay orders={placedOrders} />
    </>
  );
}

export default OrderPlaced;
