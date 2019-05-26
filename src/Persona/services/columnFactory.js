// @flow
import type { Field } from './fieldFactory';
import fieldFactory from './fieldFactory';
import { curry } from 'ramda';
import type { ColumnState } from './columnDucks';

export type Column = {
    id: number;
    width: 'thin' | 'wide',
    fields: Array<Field>;
};

const columnFactory = ({
    id = 0,
    width = 'thin',
    fields = []
}: Column = {}) => ({
    id,
    width,
    fields
});

export const createColumnsWithFields = (columns: Array<any> = [], fields: Array<any> = []): Array<Column> => {
    const mappedFields = fields.map(fieldFactory);
    const mapper =  (c: any) => Object.assign({}, c, { fields: mappedFields.filter(field => field.columnId === c.id) })
    return columns.map(mapper)
};

export const addFieldToColumn = curry((columnState: ColumnState, field: Field): ColumnState => {

    const fields = columnState.items
        .map(column => column.fields)
        .reduce(
            (acc, value) => acc.concat(value),
            []
        )
        .map(field => field.id)
        .sort((prev, next) => prev - next);

    const column: Column = columnFactory(columnState.items.find(column => column.id === field.columnId));
    const parsedField = Object.assign({}, field, { 
        id: fields[fields.length -1] + 1,
        columnId: column.id,
        prevId: column.fields[column.fields.length - 1].id,
        nextId: null,
        editable: true
    });

    const columnWithField = Object.assign({}, column, {
        fields: [parsedField, ...column.fields]
    });

    const nextColumns: Array<Column> = columnState.items
        .filter((column: Column) => column.id !== field.columnId)
        .concat([columnWithField])
        .sort((prev, next) => prev.id - next.id)

    return Object.assign({}, columnState, { items: nextColumns });
});

export default columnFactory;