import { call, put, takeLatest } from 'redux-saga/effects';
import apiFactory from './apiFactory';
import {
    GET_PERSONA,
    getPersonaComplete,
    getPersonaError
} from './personaDucks';

function* fetchPersona(action) {
    try {
        const response = yield call(
            apiFactory().getPersona,
            action.payload
        );
        yield put(getPersonaComplete(response.data));
    } catch(e) {
        yield put(getPersonaError(e));
    }
}

export default [
    takeLatest(GET_PERSONA, fetchPersona)
];