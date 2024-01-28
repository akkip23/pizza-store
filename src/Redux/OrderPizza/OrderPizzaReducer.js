// initial statee when the page render for the first time
const initialState = {
  orders: [],
};

// pizza order reducer to handle all task related to the order and update the state by sening the data to store
const OrderPizzaReducer = (state = initialState, action) => {
  const { orderId, min, sec, totalMin, totalSec, status } =
    action?.payload ?? {};

  const OrderIndex = state.orders.findIndex(
    (order) => order.orderId === orderId
  );

  // switch statement to handle state based on action type
  switch (action.type) {
    // add new order
    case "ADD_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    // update timer for order for every 1 second
    case "UPDATE_TIMER":
      return {
        ...state,
        orders: state.orders.map((order, index) => {
          if (index === OrderIndex) {
            return {
              ...order,
              min: min,
              sec: sec,
              totalMin: totalMin,
              totalSec: totalSec,
            };
          }
          return order;
        }),
      };

    // update order status
    case "UPDATE_ORDER_STATUS":
      let updateOrderStatus = "";

      if (status === "ORDER_PLACED") {
        updateOrderStatus = "ORDER_IN_MAKING";
      } else if (status === "ORDER_IN_MAKING") {
        updateOrderStatus = "ORDER_READY";
      } else if (status === "ORDER_READY") {
        updateOrderStatus = "ORDER_PICKED";
      }

      return {
        ...state,
        orders: state.orders.map((order, index) => {
          if (index === OrderIndex && updateOrderStatus != "ORDER_PICKED") {
            return { ...order, status: updateOrderStatus, min: 0, sec: 0 };
          } else if (
            index === OrderIndex &&
            updateOrderStatus === "ORDER_PICKED"
          ) {
            return { ...order, status: updateOrderStatus };
          }
          return order;
        }),
      };

    // cancel order before getting redy
    case "CANCEL_ORDER":
      console.log("in reducer");
      return {
        ...state,
        orders: state.orders.filter(
          (order) => order.orderId != action.payload.orderId
        ),
      };

    default:
      return state;
  }
};

export default OrderPizzaReducer;
