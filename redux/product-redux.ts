import {useSyncExternalStore} from 'react';
import {createReducer, createActions} from 'reduxsauce';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'seam... Remove this comment to see the full error message
import Immutable from 'seamless-immutable';
// import appConfig from '../config/app-config'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  saveSelectedProducts: ['selectedProducts'],
});

export const UserTypes = Types;
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
  // @ts-expect-error TS(2464): A computed property name must be of type 'string',... Remove this comment to see the full error message
  [Types.SAVE_SELECTED_PRODUCTS]: saveSelectedProducts,
});
