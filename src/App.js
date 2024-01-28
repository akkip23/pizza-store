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

function App() {
  // useState hook to handle model opening and closing
  const [modelIsOpen, setModelIsOpen] = useState(false);

  // container to render all section for the project
  return (
    <>
      <div className="addNewOrder">
        <button type="button" onClick={() => setModelIsOpen(true)}>
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
