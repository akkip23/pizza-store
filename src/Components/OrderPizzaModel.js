// react dom to render portals for the model
import ReactDom from "react-dom";
// styling for pizza order model
import "../Styles/OrderPizzaModel.scss";
import { useState } from "react";
// dispatch and get the updated state using useSelector
import { useDispatch, useSelector } from "react-redux";
// order pizza action
import { orderPizza } from "../Redux/OrderPizza/OrderPizzaAction";
// imported class to use for each order to update the timer and status of the order
import PizzaOrderTimeManager from "./PizzaOrderTimeManager";
// import toster message func
import { createToast } from "../TosterMessage/static_tosterMsg";

function OrderPizzaModel({ modelOpen, modelClose }) {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orderPizza.orders);

  // useState hook to update the pizza type, size, base and add new order
  const [pizzaType, setPizzaType] = useState("OptDisabled");
  const [pizzaSize, setPizzaSize] = useState("OptDisabled");
  const [pizzaBase, setPizzaBase] = useState("OptDisabled");
  const orderMakingTime = { small: 3, medium: 4, large: 5 };

  // handle form submit handler
  const handleOrderPizzaFormSubmit = (e) => {
    e.preventDefault();

    let orderId = orders.length + 1;

    const timeManager = new PizzaOrderTimeManager(pizzaSize, orderId, dispatch);
    // console.log("timeManager", timeManager);

    // dispatch action to add new order
    dispatch(
      orderPizza({
        orderId: orderId,
        value: pizzaType,
        size: pizzaSize,
        base: pizzaBase,
        min: 0,
        sec: 0,
        totalMin: 0,
        totalSec: 0,
        makingTime: orderMakingTime[pizzaSize],
        timeManager,
        status: "ORDER_PLACED",
      })
    );
    setPizzaType("OptDisabled");
    setPizzaSize("OptDisabled");
    setPizzaBase("OptDisabled");
    createToast("success", "New Order Created Successfully");
  };

  if (!modelOpen) return null;

  return ReactDom.createPortal(
    <>
      <div className="ModelContainerOverlayStyles" />
      <form onSubmit={(e) => handleOrderPizzaFormSubmit(e)}>
        <div className="orderPizzaFormContainer">
          <div className="modelTitle">
            <h2>ORDER PIZZA</h2>
            <button
              className="close-button"
              aria-label="Close alert"
              type="button"
              data-close
              onClick={() => modelClose(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="orderPizzaFormBody">
            <div id="orderPizzaFormBodyOne">
              <div>
                <div>
                  <label htmlFor="CbnPizzaType">Pizza Types</label>
                </div>
                <select
                  name="pizzaType"
                  id="CbnPizzaType"
                  value={pizzaType}
                  onChange={(e) => setPizzaType(e.target.value)}
                  required
                >
                  <option value="OptDisabled" disabled>
                    --- Select Pizza Type ---
                  </option>
                  <option value="veg">Veg</option>
                  <option value="non-veg">Non-Veg</option>
                </select>
              </div>
              <div>
                <div>
                  <label htmlFor="CbnPizzaSize">Pizza Size</label>
                </div>
                <select
                  name="pizzaSize"
                  id="CbnPizzaSize"
                  value={pizzaSize}
                  onChange={(e) => setPizzaSize(e.target.value)}
                  required
                >
                  <option value="OptDisabled" disabled>
                    --- Select Pizza Size ---
                  </option>
                  <option value="large">Large</option>
                  <option value="medium">Medium</option>
                  <option value="small">Small</option>
                </select>
              </div>
            </div>
            <div id="orderPizzaFormBodyTwo">
              <div>
                <div>
                  <label htmlFor="CbnPizzaBase">Pizza Base</label>
                </div>
                <select
                  name="pizzaBae"
                  id="CbnPizzaBase"
                  value={pizzaBase}
                  onChange={(e) => setPizzaBase(e.target.value)}
                  required
                >
                  <option value="OptDisabled" disabled>
                    --- Select Pizza Base ---
                  </option>
                  <option value="thin">Thin</option>
                  <option value="thick">Thick</option>
                </select>
              </div>
              <button type="submit">Order</button>
            </div>
          </div>
        </div>
      </form>
    </>,
    document.getElementById("portals")
  );
}

export default OrderPizzaModel;
