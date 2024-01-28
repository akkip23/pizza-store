import React from "react";
// imported all the stages component
import OrderPlaced from "./OrderPlaced";
import OrderMaking from "./OrderMaking";
import OrderReady from "./OrderReady";
import OrderPicked from "./OrderPicked";
// styling for the stages section
import "../Styles/OrderStagesSection.scss";

function OrderStagesSection() {
  return (
    <>
      <h1 id="pizzaStageHeading">PIZZA STAGES</h1>
      <div className="orderStagesBody">
        <section>
          <div className="OrderHeadingContainer" id="OrderPlaced">
            <h3 className="stagesHeading">ORDER PLACED</h3>
          </div>
          <OrderPlaced />
        </section>
        <section>
          <div className="OrderHeadingContainer" id="OrderMaking">
            <h3 className="stagesHeading">ORDER IN MAKING</h3>
          </div>
          <OrderMaking />
        </section>
        <section>
          <div className="OrderHeadingContainer" id="OrderReady">
            <h3 className="stagesHeading">ORDER READY</h3>
          </div>
          <OrderReady />
        </section>
        <section>
          <div className="OrderHeadingContainer" id="OrderPicked">
            <h3 className="stagesHeading">ORDER PICKED</h3>
          </div>
          <OrderPicked />
        </section>
      </div>
    </>
  );
}

export default OrderStagesSection;
