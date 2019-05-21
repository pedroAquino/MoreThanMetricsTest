// @flow

export type PersonaModel = {
    id: number;
    name: string;
    initials: string;
    color: string;
    avatar: string;
    columns: Array<any>;
};

const personaFactory = ({
    id  = 0,
    name = '',
    initials = '',
    color = '#fff',
    avatar = 'default.png',
    columns = []
}: PersonaModel = {}): PersonaModel => ({
    id,
    name,
    initials,
    color,
    avatar,
    columns
});

export default personaFactory;