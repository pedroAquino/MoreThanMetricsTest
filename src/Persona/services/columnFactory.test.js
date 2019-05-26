import columnFactory from './columnFactory';

it('should create an empty column', () => {
    const column = columnFactory();
    expect(column).toEqual({
        id: 0,
        width: 'thin',
        fields: []
    });
});