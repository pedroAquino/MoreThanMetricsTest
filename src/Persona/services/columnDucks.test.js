import columnsReducer, {
    getColumns,
    getColumnsError,
    getColumnsComplete,
    addField,
    initialState
} from './columnDucks';

describe('column related actions', () => {
   it('should create a get column action', () => {
       const personaId = 20;
       expect(getColumns(personaId)).toEqual({
           type: 'GET_COLUMNS',
           payload: 20
       });
   }); 

   it('should create a column error action', () => {
       const errors = {
           data: 'Error'
       };
       expect(getColumnsError(errors)).toEqual({
           type: 'GET_COLUMNS_ERROR',
           payload: {...errors}
       });
   });

   it('should create a columns complete action', () => {
       const columns = [
            {
                "id": 1,
                "width": "thin"
            }
       ];
       expect(getColumnsComplete(columns)).toEqual({
           type: 'GET_COLUMNS_COMPLETE',
           payload: [...columns]
       });
   }); 

   it('should create an adwd field action', () => {
       const field = {
            id: 1,
            title: "Address",
            fieldType: "short-text",
            data: "Rua anita garibaldi, 100, Jd Guanabara, Ribeirão Pires, Brazil",
            columnId: 1,
            prevId :null,
            nextId: null,
            src: '',
            imageSources: [],
            formatedText: []
       };
       const result = addField(field);
       expect(result).toEqual({
           type: 'ADD_FIELD',
           payload: {
            id: 1,
            title: "Address",
            fieldType: "short-text",
            data: "Rua anita garibaldi, 100, Jd Guanabara, Ribeirão Pires, Brazil",
            columnId: 1,
            prevId :null,
            nextId: null,
            src: '',
            imageSources: [],
            formatedText: []
           }
       });
   });
});

describe('columns reducer',  () => {
    it('should return initialState', () => {
        expect(columnsReducer(undefined, {})).toEqual(initialState);
    });

    it('should set columns to loading state', () => {
        const action = getColumns(20);
        expect(columnsReducer(initialState, action)).toEqual({
            ...initialState,
            entityStatus: 'LOADING'
        });
    });

    it('should set columns to error state', () => {
        const action = getColumnsError({ status: 500 });
        expect(columnsReducer({ 
            ...initialState, 
            entityStatus: 'LOADING' 
        }, action)).toEqual({
            ...initialState,
            entityStatus: 'ERROR',
            errors: { status: 500 }
        });
    });

    it('should set columns to stable state with loaded columns', () => {
        const action = getColumnsComplete([
            {
                id: 1,
                width: 'thin',
                fields: []
            },
            {
                id: 2,
                width: 'wide',
                fields: []
            }
        ]);

        const result = columnsReducer(initialState, action);
        expect(result).toEqual({
            ...initialState,
            entityStatus: 'STABLE',
            items: [...action.payload]
        });
    });

    it('should add a field to a specific column', () => {
        const action = addField({
            title: "Address",
            fieldType: "short-text",
            data: "Rua anita garibaldi, 100, Jd Guanabara, Ribeirão Pires, Brazil",
            columnId: 1,
            prevId :null,
            nextId: null,
            src: '',
            imageSources: [],
            formatedText: []
        });

        const prevState = {
            items: [
                {
                    id: 1,
                    width: 'thin',
                    fields: [
                        {
                            id: 1,
                            title: "Some Field",
                            fieldType: "short-text",
                            data: "Some data",
                            columnId: 1,
                            prevId :null,
                            nextId: null,
                            src: '',
                            imageSources: [],
                            formatedText: [],
                            editable: true,
                            isNew: true
                        }
                    ]
                },
                {
                    id: 2,
                    width: 'thin',
                    fields: [
                        {
                            id: 2,
                            title: "Some Field",
                            fieldType: "short-text",
                            data: "Some data",
                            columnId: 1,
                            prevId :null,
                            nextId: null,
                            src: '',
                            imageSources: [],
                            formatedText: [],
                            editable: false,
                            isNew: true
                        }
                    ]
                }
            ]
        };

        const result = columnsReducer(prevState, action);
        expect(result.items.length).toBe(2);
        
        const columnsSorted = result.items
            .map(item => item.id)
            .sort((prev, next) => prev - next);

        expect(result.items.map(item => item.id)).toEqual(columnsSorted);

        const column1 = result.items.find(i => i.id === 1); 
        expect(column1.fields.length).toBe(2);
        expect(column1.fields.find(f => f.id === 3)).toEqual({
            id: 3,
            title: "Address",
            fieldType: "short-text",
            data: "Rua anita garibaldi, 100, Jd Guanabara, Ribeirão Pires, Brazil",
            columnId: 1,
            prevId :1,
            nextId: null,
            src: '',
            imageSources: [],
            formatedText: [],
            editable: true,
            isNew: true
        });

        const column2 = result.items.find(i => i.id === 2);
        expect(column2.fields.length).toBe(1);
    });
});