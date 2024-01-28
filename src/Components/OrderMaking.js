// import react to use all functionality of react library
import React from "react";
// react redux useSelector to get the updated state of the order
import { useSelector } from "react-redux";
// import order display container to render order
import OrderDisplay from "./OrdersDisplay";

// function to render all order in the order making stage
function OrderMaking() {
  const ordersPlaced = useSelector((state) => state.orderPizza.orders);
  const ordersInMaking = ordersPlaced.filter(
    (order) => order.status === "ORDER_IN_MAKING"
  );

  return (
    <>
      <OrderDisplay orders={ordersInMaking} />
    </>
  );
}

export default OrderMaking;
