import React from "react";
import { useSelector, useDispatch } from "react-redux";
// action to cancel order
import { cancelOrder } from "../Redux/OrderPizza/OrderPizzaAction";
// styling for main section
import "../Styles/OrdersMainSection.scss";

// main order section
function OrdersMainSection() {
  const orders = useSelector((state) => state.orderPizza.orders);
  const dispatch = useDispatch();
  const totalOrdersDelivered = orders.filter(
    (order) => order.status === "ORDER_PICKED"
  );

  // order cancel handler
  const orderCancelHandler = (cancelledOrder) => {
    dispatch(cancelOrder(cancelledOrder));
  };

  return (
    <div className="orderMainContainer">
      <h1 id="orderMainHeading">MAIN SECTION</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Stage</th>
            <th>Total time spent (time from order placed)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>Order Id - {order.orderId}</td>
              <td>{order.status}</td>
              <td>
                {order.totalMin} min {order.totalSec} sec
              </td>
              <td>
                {order.status != "ORDER_READY" &&
                  order.status != "ORDER_PICKED" && (
                    <button onClick={() => orderCancelHandler(order)}>
                      Cancel Order
                    </button>
                  )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="totalRow">
            <th colSpan="1">Total order delivered</th>
            <td colSpan="2">{totalOrdersDelivered.length}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default OrdersMainSection;
