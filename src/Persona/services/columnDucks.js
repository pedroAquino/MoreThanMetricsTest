// @flow
import type { EntityState } from '../../shared/state/entityStateFactory';
import type { Column } from './columnFactory';
import columnFactory from './columnFactory';
import { withEntityState } from '../../shared/state/entityStateFactory';
import { compose } from 'ramda';
import listHelper from '../../shared/utils/listHelper';

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

export const getColumnsComplete = (column: Column) => ({
    type: GET_COLUMNS_COMPLETE,
    payload: {...column}
});


const initialState: ColumnState = compose(
    listHelper.add,
    withEntityState,
    columnFactory
)({});

export default function columnsReducer(state: ColumnState = initialState, action: any) {
    switch (action.payload) {
        default:
            return state;
    }
};