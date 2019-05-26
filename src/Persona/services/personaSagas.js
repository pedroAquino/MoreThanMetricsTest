import { call, put, takeLatest } from 'redux-saga/effects';
import apiFactory from './apiFactory';
import {
    GET_PERSONA,
    getPersonaComplete,
    getPersonaError,
    UPDATE_PERSONA,
    updatePersonaComplete,
    updatePersonaError
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

function* updatePersona(action) {
  try {
      const response = yield call(
        apiFactory().updatePersona,
        action.payload
      );
      yield put(updatePersonaComplete(response.data))
  } catch(e) {
      yield put(updatePersonaError(e));
  }
} 

export default [
    takeLatest(GET_PERSONA, fetchPersona),
    takeLatest(UPDATE_PERSONA,  updatePersona)
];