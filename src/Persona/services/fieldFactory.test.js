import fieldFactory from './fieldFactory';

it('should create a field according to object', () => {
    const field = fieldFactory({
        "id": 1,
        "title": "Image",
        "field_type": "image",
        "data": "persona.png",
        "column_id": 1,
        "prev_id": null,
        "next_id":2
    });
    expect(field).toEqual({
        id: 1,
        title: "Image",
        fieldType: "image",
        data: "persona.png",
        columnId: 1,
        prevId :null,
        nextId: 2
    });
});
