import { Product } from "../services/types";
export type ProductActionTypes = "EDIT_PRODUCT" | "DEL_PRODUCT" | "ADD_PRODUCT";

/* Discriminated Unions
   - to type each action's payload differently 
*/

export type AddProductAction = {
  type: "ADD_PRODUCT";
  payload: {
    name: string;
  };
};

export type DelProductionAction = {
  type: "DEL_PRODUCT";
  payload: {
    id: number;
  };
};

export type EditProductAction = {
  type: "EDIT_PRODUCT";
  payload: Product;
};

export type ProductAction =
  | AddProductAction
  | DelProductionAction
  | EditProductAction;

/*Disptach 
  - ProductContext is not responsible for implementing the dispatch
    function; it will receive one.
*/
export type ProductDispatchFunc = (action: ProductAction) => void;
/* Callback
   - function to call when the action is done 
*/
export type ActionDone = () => void;

/*These are functions that are available to the caller
 */
export type ProductBoundActions = {
  addProduct: (name: string, callback?: ActionDone) => void;
  delProduct: (id: number, callback?: ActionDone) => void;
  editProduct: (id: number, name: string, callback?: ActionDone) => void;
};
