import { all } from 'redux-saga/effects';
import personaSagas from '../../Persona/services/personaSagas';

export default function* root() {
    yield all([
        ...personaSagas
    ]);
}