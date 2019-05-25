import columnsReducer, {
    getColumns,
    getColumnsError,
    getColumnsComplete,
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
});