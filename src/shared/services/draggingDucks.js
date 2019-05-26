// @flow
import type { Field } from '../../Persona/services/fieldFactory';
import type { Position } from './positionFactory';
import positionFactory from './positionFactory';

type DraggingState = {
    field: ?Field;
    position: ?Position;
    dragStatus: 'DRAGGING' | 'PARKED'
};

export const START_DRAGGING = 'START_DRAGGING';
export const STOP_DRAGGING = 'STOP_DRAGGING';

export const startDragging = (field: Field) => ({
    type: START_DRAGGING,
    payload: field
});

export const stopDragging = (field: Field, position: Position) => ({
    type: STOP_DRAGGING,
    payload: { field: field, position: position }
});

const initialState: DraggingState = {
    field: null,
    position: null,
    dragStatus: 'PARKED'
};

export default function draggingReducer(state: DraggingState = initialState, action: any) {
    switch (action.type) {
        case START_DRAGGING:
            return Object.assign({}, state, { dragStatus: 'DRAGGING', field: action.payload });
        case STOP_DRAGGING:
            return Object.assign({}, state, { 
                dragStatus: 'PARKED', 
                field: action.payload.field,
                position: action.payload.position
            });
        default:
            return state;
    }
};
