import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  saveSelectedProducts: ['selectedProducts'],
});

export const ProductTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  selectedProducts: null,
});

/* ------------- Reducers ------------- */

export const saveSelectedProducts = (state: any, {selectedProducts}: any) =>
  state.merge({fetching: false, selectedProducts});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_SELECTED_PRODUCTS]: saveSelectedProducts,
});
