import personaFactory from './personaFactory';

it('Generates an empty persona', () => {
    const persona = personaFactory();
    expect(persona).toEqual({
        id: 0,
        name: '',
        initials: '',
        color: '#fff',
        avatar: 'default.png'
    });
});

it('generates a valid persona from an existing object', () => {
    const persona = personaFactory({
        "id":20,
        "name":"Klaus",
        "initials":"KLA",
        "color":"#F46060",
        "avatar":"klaus"
    });

    expect(persona).toEqual({
        id: 20,
        name: 'Klaus',
        initials: 'KLA',
        color: '#F46060',
        avatar: 'klaus'
    })
});