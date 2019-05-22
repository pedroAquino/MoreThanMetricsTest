// @flow

export type Column = {
    id: number;
    width: 'thin' | 'wide'
};

const columnFactory = ({
    id = 0,
    width = 'thin'
}: Column = {}) => ({
    id,
    width,
});

export default columnFactory;