import { useSyncExternalStore } from "react";
import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
// import appConfig from '../config/app-config'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveSelectedProducts: ["selectedProducts"],
  


});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
selectedProducts: null,
});

/* ------------- Reducers ------------- */

export const saveSelectedProducts = (state, { selectedProducts }) =>
state.merge({ fetching: false, selectedProducts });


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_SELECTED_PRODUCTS]: saveSelectedProducts,
 });
