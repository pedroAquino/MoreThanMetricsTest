// @flow
import type { EntityState } from '../../shared/state/entityStateFactory';
import type { Column } from './columnFactory';
import type { Field } from './fieldFactory';
import fieldFactory from './fieldFactory';
import columnFactory, { addFieldToColumn, removeFieldFromColumn } from './columnFactory';
import { withEntityState } from '../../shared/state/entityStateFactory';
import { compose, pipe } from 'ramda';
import { setToLoadingState, setToErrorState } from '../../shared/utils/stateHelper';

export type ColumnState = EntityState & {
    items: Array<Column>
};

export const GET_COLUMNS = 'GET_COLUMNS';
export const GET_COLUMNS_ERROR = 'GET_COLUMNS_ERROR';
export const GET_COLUMNS_COMPLETE = 'GET_COLUMNS_COMPLETE';

export const ADD_FIELD = 'ADD_FIELD';
export const ADD_FIELD_COMPLETE = 'ADD_FIELD_COMPLETE';

export const UPDATE_FIELD = 'UPDATE_FIELD';
export const UPDATE_FIELD_COMPLETE = 'UPDATE_FIELD_COMPLETE';

export const REMOVE_FIELD = 'REMOVE_FIELD';
export const REMOVE_FIELD_COMPLETE = 'REMOVE_FIELD_COMPLETE';

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

export const addField = (field: Field) => ({
    type: ADD_FIELD,
    payload: field
});

export const addFieldComplete = () => ({
    type: ADD_FIELD_COMPLETE
});

export const updateField = (field: Field) => ({
    type: UPDATE_FIELD,
    payload: field
});

export const updateFieldComplete = (field: Field) => ({
    type: UPDATE_FIELD_COMPLETE,
    payload: field
});

export const removeField = (id: number) => ({
    type: REMOVE_FIELD,
    payload: id
});

export const removeFieldComplete = (field: Field) => ({
    type: REMOVE_FIELD_COMPLETE,
    payload: field
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
            return Object.assign({}, state, { entityStatus: 'STABLE', items: [...action.payload] });
        case ADD_FIELD: {
            return pipe(
                fieldFactory,
                addFieldToColumn(state)
            )(action.payload);
        }
        case ADD_FIELD_COMPLETE:
            return Object.assign({}, state, { entityStatus: 'STABLE' });
        case UPDATE_FIELD:
            return Object.assign({}, state, { entityStatus: 'PERSISTING' });
        case UPDATE_FIELD_COMPLETE:
            return Object.assign({}, state, { entityStatus: 'STABLE' });
        case REMOVE_FIELD:
            return Object.assign({}, state, { entityStatus: 'PERSISTING' });
        case REMOVE_FIELD_COMPLETE:
            return pipe(
                fieldFactory,
                removeFieldFromColumn(state)
            )(action.payload)
        default:
            return state;
    }
};