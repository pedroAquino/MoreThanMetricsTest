// @flow

type Column = {
    id: number;
    width: 'thin' | 'wide',
    getFlexGrow: function;
};

const columnFactory = ({
    id = 0,
    width = 'thin'
}: Column = {}) => ({
    id,
    width,
});

export default columnFactory;