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
        nextId: 2,
        src: 'persona.png',
        imageSources: [],
        formatedText: []
    });
});


it('should return default field type when not specified', () => {
    const field = fieldFactory({
        field_type: 'SOME FIELD TYPE'
    });

    expect(field.fieldType).toBe('short-text');
});
