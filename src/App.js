// imported react to use all react features
import React, { useState } from "react";
// import Model to add new order
import OrderPizzaModel from "./Components/OrderPizzaModel";
// import stages section
import OrderStagesSection from "./Components/OrderStagesSection";
// import orders main section to view all orders details
import OrdersMainSection from "./Components/OrdersMainSection";
// import css file for styling
import "./Styles/App.css";
// styling for toster message
import "./TosterMessage/static_tosterMsg.css";
import { useSelector } from "react-redux";
import { createToast } from "./TosterMessage/static_tosterMsg";

function App() {
  // useState hook to handle model opening and closing
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const orders = useSelector((state) => state.orderPizza.orders);
  const activeOrders = orders.filter(
    (order) => order.status !== "ORDER_PICKED" && order.status !== "ORDER_READY"
  );

  // container to render all section for the project
  return (
    <>
      <div className="addNewOrder">
        <ul id="notify" className="notifications"></ul>

        <button
          type="button"
          onClick={() =>
            activeOrders.length <= 10
              ? setModelIsOpen(true)
              : createToast("info", "Not Taking any orders for now")
          }
        >
          Add Order
        </button>
      </div>
      <OrderPizzaModel modelOpen={modelIsOpen} modelClose={setModelIsOpen} />
      <OrderStagesSection />
      <OrdersMainSection />
    </>
  );
}

export default App;
