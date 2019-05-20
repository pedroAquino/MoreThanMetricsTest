import { createStore,  applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const middleWareEnhancer = applyMiddleware(
        sagaMiddleware
    );

    const enhancers = composeWithDevTools(
        middleWareEnhancer
    );

    const store = createStore(
        reducers,
        enhancers
    );

    sagaMiddleware.run(sagas);

    return store; 
};