import {
  ProductAction,
  ProductDispatchFunc,
  ActionDone,
  ProductBoundActions,
} from "./types";
import { Product } from "../services/types";
import createDataContext from "./createDataContext";

/*reducer
  - define how we modify the state per each action
*/
/*TA-01*/
const productReducer = (state: Product[], action: ProductAction) => {
  switch (action.type) {
    case "EDIT_PRODUCT":
      return state.map((prod) =>
        prod.id === action.payload.id ? action.payload : prod
      );
    case "DEL_PRODUCT":
      return state.filter((prod) => prod.id !== action.payload.id);
    case "ADD_PRODUCT":
      return [
        ...state,
        { id: Math.floor(Math.random() * 9999), name: action.payload.name },
      ];
    default:
      return state;
  }
};

/*#TA-02
  - this function will not expose to the callers;
    the function returned by this function is.
  - dispatch is configured by createDataContext    
*/
const addProduct = (dispatch: ProductDispatchFunc) => {
  return (name: string, callback: ActionDone) => {
    dispatch({ type: "ADD_PRODUCT", payload: { name } });
    if (callback) {
      callback();
    }
  };
};

const delProduct = (dispatch: ProductDispatchFunc) => {
  return (id: number, callback: ActionDone) => {
    dispatch({ type: "DEL_PRODUCT", payload: { id } });
    if (callback) {
      callback();
    }
  };
};

const editProduct = (dispatch: ProductDispatchFunc) => {
  return (id: number, name: string, callback: ActionDone) => {
    dispatch({ type: "EDIT_PRODUCT", payload: { id, name } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext<
  Product[],
  ProductAction,
  ProductBoundActions
>(productReducer, { addProduct, delProduct, editProduct }, [
  { id: 1, name: "No name cookies" },
]);
