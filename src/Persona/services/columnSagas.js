import { call, put, takeLatest } from 'redux-saga/effects';
import apiFactory from './apiFactory';
import {
    GET_COLUMNS,
    getColumnsError,
    getColumnsComplete
} from './columnDucks';
import createColumnsWithFields from './columnFactory';

function* getColumns(action) {
    try {
        const columnsResponse = yield call(
            apiFactory().getColumns,
            action.payload
        );

        const fieldsResponse = yield call(
            apiFactory().getFields,
            action.payload
        );

        const columns = columnsResponse.data;
        const fields = fieldsResponse.data;

        const response = createColumnsWithFields(columns, fields);

        yield put(getColumnsComplete(response));
    } catch(e) {
        yield put(getColumnsError(e));
    }
}

export default [
    takeLatest(GET_COLUMNS, getColumns)
];