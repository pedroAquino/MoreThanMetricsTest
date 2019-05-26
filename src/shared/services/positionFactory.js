// @flow

export type Position = {
    x: number;
    y: number;
};

const positionFactory = ({
    x = 0,
    y = 0
}: Position = {}) => ({
    x,
    y
});

export default positionFactory;