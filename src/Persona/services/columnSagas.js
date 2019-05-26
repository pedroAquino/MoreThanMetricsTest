import { call, put, takeLatest } from 'redux-saga/effects';
import apiFactory from './apiFactory';
import {
    GET_COLUMNS,
    getColumnsError,
    getColumnsComplete,
    ADD_FIELD,
    addFieldComplete,
    UPDATE_FIELD,
    updateFieldComplete,
    REMOVE_FIELD,
    removeFieldComplete
} from './columnDucks';
import { createColumnsWithFields } from './columnFactory';

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

function* addField(action) {
    const response = yield call(
        apiFactory().createField,
        '20',
        action.payload,
    );

    yield put(addFieldComplete(response));
}

function* updateField(action) {
    const response = yield call(
        apiFactory().updateField,
        '20',
        action.payload,
    );

    yield put(updateFieldComplete(response));
}

function* removeField(action) {
    const response = yield call(
        apiFactory().deleteField,
        '20',
        action.payload
    );

    yield put(removeFieldComplete(response));
}


export default [
    takeLatest(GET_COLUMNS, getColumns),
    takeLatest(ADD_FIELD, addField),
    takeLatest(UPDATE_FIELD, updateField),
    takeLatest(REMOVE_FIELD, removeField)
];