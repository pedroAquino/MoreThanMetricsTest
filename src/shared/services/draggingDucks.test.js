import {
    startDragging,
    stopDragging
} from './draggingDucks';

describe('dragging ducks tests', () => {
    it('should create a start dragging action', () => {
        const field = {
            id: 1,
            title: "Image",
            fieldType: "image",
            data: "persona.png",
            columnId: 1,
            prevId :null,
            nextId: 2,
            src: 'persona.png',
            imageSources: [],
            formatedText: []
        };
        const action = startDragging(field);
        expect(action).toEqual({
            type: 'START_DRAGGING',
            payload: {
                id: 1,
                title: "Image",
                fieldType: "image",
                data: "persona.png",
                columnId: 1,
                prevId :null,
                nextId: 2,
                src: 'persona.png',
                imageSources: [],
                formatedText: []
            }
        });
    });

    it('should create a stop dragging action', () => {
        const field = {
            id: 1,
            title: "Image",
            fieldType: "image",
            data: "persona.png",
            columnId: 1,
            prevId :null,
            nextId: 2,
            src: 'persona.png',
            imageSources: [],
            formatedText: []
        };
        const position = {
            x: 20,
            y: 20
        };
        const action = stopDragging(field, position);
        expect(action).toEqual({
            type: 'STOP_DRAGGING',
            payload: {
                field: {
                    id: 1,
                    title: "Image",
                    fieldType: "image",
                    data: "persona.png",
                    columnId: 1,
                    prevId :null,
                    nextId: 2,
                    src: 'persona.png',
                    imageSources: [],
                    formatedText: []
                },
                position: {
                    x: 20,
                    y: 20
                }
            }
        });
    });
});