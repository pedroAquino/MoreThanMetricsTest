//import { curry } from 'ramda';

export const setToLoadingState = state => Object.assign({}, state, { entityStatus: 'LOADING' });
export const setToErrorState = (state, errors) => Object.assign({}, state, { entityStatus: 'ERROR', errors });
