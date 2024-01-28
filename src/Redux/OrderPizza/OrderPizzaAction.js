// action for pizza ordering and adding new order
export const orderPizza = (order) => {
  return {
    type: "ADD_ORDER",
    payload: order,
  };
};

// action to update the order timer every 1 second
export const updateOrderTimer = (timer) => {
  return {
    type: "UPDATE_TIMER",
    payload: timer,
  };
};

// action to update order status form one stage to another
export const updateOrderStatus = (updateOrder) => {
  return {
    type: "UPDATE_ORDER_STATUS",
    payload: updateOrder,
  };
};

// cancel the order before going to ready stage / getting ready
export const cancelOrder = (cancelledOrder) => {
  return {
    type: "CANCEL_ORDER",
    payload: cancelledOrder,
  };
};
