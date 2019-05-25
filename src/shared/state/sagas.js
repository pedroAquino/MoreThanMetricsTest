import { all } from 'redux-saga/effects';
import personaSagas from '../../Persona/services/personaSagas';
import columnSagas from '../../Persona/services/columnSagas';

export default function* root() {
    yield all([
        ...personaSagas,
        ...columnSagas
    ]);
}