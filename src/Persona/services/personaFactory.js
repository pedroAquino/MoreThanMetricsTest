// @flow

export type PersonaModel = {
    id: number;
    name: string;
    initials: string;
    color: string;
    avatar: string;
};

const personaFactory = ({
    id  = 0,
    name = '',
    initials = '',
    color = '#fff',
    avatar = 'default.png'
}: PersonaModel = {}): PersonaModel => ({
    id,
    name,
    initials: name ? name.substring(0, 3).toUpperCase() : initials,
    color,
    avatar
});

export const validatePersona = (persona: PersonaModel) => {
    const parsed = personaFactory(persona);
    const errors = {};

    if (!parsed['name']) {
        errors['name'] = 'Name is required';
    }

    if (!parsed['initials']) {
        errors['initial'] = 'Initials is required';
    }

    return errors;
};

export default personaFactory;