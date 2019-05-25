// @flow
import type { EntityState } from '../../shared/state/entityStateFactory';
import type { Column } from './columnFactory';
import columnFactory from './columnFactory';
import { withEntityState } from '../../shared/state/entityStateFactory';
import { compose } from 'ramda';
import { setToLoadingState, setToErrorState } from '../../shared/utils/stateHelper';

type ColumnState = EntityState & {
    columns: Array<Column>
};

export const GET_COLUMNS = 'GET_COLUMNS';
export const GET_COLUMNS_ERROR = 'GET_COLUMNS_ERROR';
export const GET_COLUMNS_COMPLETE = 'GET_COLUMNS_COMPLETE';

export const getColumns = (personaId: number) => ({
    type: GET_COLUMNS,
    payload: personaId
});

export const getColumnsError = (errors: any) => ({
    type: GET_COLUMNS_ERROR,
    payload: errors
});

export const getColumnsComplete = (columns: Array<Column>) => ({
    type: GET_COLUMNS_COMPLETE,
    payload: [...columns]
});

const withiItems = column => ({ ...column, items: [columnFactory()] });
 
export const initialState: ColumnState = compose(
    withiItems,
    withEntityState
)({});

export default function columnsReducer(state: ColumnState = initialState, action: any) {
    switch (action.type) {
        case GET_COLUMNS:
            return setToLoadingState(state);
        case GET_COLUMNS_ERROR:
            return setToErrorState(state, action.payload);
        case GET_COLUMNS_COMPLETE:
            return Object.assign({}, state, { entityStatus: 'STABLE', items: [...action.payload] })
        default:
            return state;
    }
};