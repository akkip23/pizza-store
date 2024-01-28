import React from "react";
import {
  updateOrderTimer,
  updateOrderStatus,
} from "../Redux/OrderPizza/OrderPizzaAction";

// class to update timer and order status
class PizzaOrderTimeManager {
  constructor(size, orderId, dispatch) {
    this.size = size;
    this.orderId = orderId;
    this.startTime = new Date();
    this.totalStartTime = new Date();
    this.totalTime = setInterval(this.totalOrderTime.bind(this), 1000);
    this.timer = setInterval(this.updateTime.bind(this), 1000);
    this.minutes = 0;
    this.seconds = 0;
    this.totalMinutes = 0;
    this.totalSeconds = 0;
    this.dispatch = dispatch;
  }

  // show total time taken to complete an order
  totalOrderTime() {
    const currentTime = new Date();
    const ellapsedMilliSeconds = currentTime - this.totalStartTime;
    this.totalMinutes = Math.floor(ellapsedMilliSeconds / 60000);
    this.totalSeconds = Math.floor((ellapsedMilliSeconds % 60000) / 1000);
  }

  // update timer for each section
  updateTime() {
    const currentTime = new Date();
    const ellapsedMilliSeconds = currentTime - this.startTime;
    this.minutes = Math.floor(ellapsedMilliSeconds / 60000);
    this.seconds = Math.floor((ellapsedMilliSeconds % 60000) / 1000);

    // dispatch action each second to update the timer
    this.dispatch(
      updateOrderTimer({
        min: this.minutes,
        sec: this.seconds,
        totalMin: this.totalMinutes,
        totalSec: this.totalSeconds,
        orderId: this.orderId,
      })
    );
  }

  // update the order status
  updateOrderStatus(order) {
    console.log("The Status is going to be updated for", order);
    this.dispatch(updateOrderStatus(order));

    if (order.status === "ORDER_READY") {
      this.stopTimer();
    } else {
      this.startTime = new Date();
      this.minutes = 0;
      this.seconds = 0;
    }
  }

  // stop the timer once the order is in picked stage
  stopTimer() {
    clearInterval(this.timer);
    clearInterval(this.totalTime);
  }
}

export default PizzaOrderTimeManager;
