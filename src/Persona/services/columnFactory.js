// @flow
import type { Field } from './fieldFactory';

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

export default columnFactory;