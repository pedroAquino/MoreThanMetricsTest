// @flow
import type { Field } from './fieldFactory';
import fieldFactory from './fieldFactory';

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

export default columnFactory;