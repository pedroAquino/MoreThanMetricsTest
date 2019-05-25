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

export const createColumnsWithFields = (columns = [], fields = []) => {
    const mappedFields = fields.map(fieldFactory);
    const mapper =  c => Object.assign({}, c, { fields: mappedFields.filter(field => field.columnId === c.id) })
    return columns.map(mapper)
};

export default columnFactory;