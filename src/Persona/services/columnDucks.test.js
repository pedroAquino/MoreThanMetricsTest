import {
    getColumns,
    getColumnsError,
    getColumnsComplete
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
       const column = {
        "id": 1,
        "width": "thin"
       };
       expect(getColumnsComplete(column)).toEqual({
           type: 'GET_COLUMNS_COMPLETE',
           payload: {...column}
       });
   }); 
});