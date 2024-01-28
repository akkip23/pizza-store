// import store and combineReducers to combine multiple reducer as a root object / root reducer
import { createStore, combineReducers } from "redux";
// import order pizza reducer
import OrderPizzaReducer from "./OrderPizza/OrderPizzaReducer";

// root reducer to handle all the reducer
const rootReducer = combineReducers({
  orderPizza: OrderPizzaReducer,
});

const store = createStore(rootReducer);

export default store;
