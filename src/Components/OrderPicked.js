// import react to use all functionality of react library
import React from "react";
// react redux useSelector to get the updated state of the order
import { useSelector } from "react-redux";
// import order display container to render order
import OrderDisplay from "./OrdersDisplay";

// function to render all order in the order picked stage
function OrderPicked() {
  const orders = useSelector((state) => state.orderPizza.orders);
  const PickedOrders = orders.filter(
    (order) => order.status === "ORDER_PICKED"
  );

  return (
    <>
      <OrderDisplay orders={PickedOrders} />
    </>
  );
}

export default OrderPicked;
