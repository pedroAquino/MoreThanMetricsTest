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

export default personaFactory;