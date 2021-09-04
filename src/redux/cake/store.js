import { createStore, applyMiddleware } from "redux";
import cakeReducer from "./cakeReducer"; 
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension"; //reduxdevtools için bağlantı

const store = createStore(cakeReducer,composeWithDevTools(applyMiddleware(logger))); //ES6 createstore
//applymiddleware ve logger ile ilk ve sonraki durumlarını consolda gösterir
export default store