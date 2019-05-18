// @flow

export type PersonaModel = {
    name: string;
    shortName: string;
    avatar: string;
    age: number;
    gender: 'MALE' | 'FEMALE' | 'UNDEFINED';
    moodImages: Array<string>;
    occupation: string;
    nationality: string;
    maritalStatus: 'MARRIED' | 'SINGLE' | 'DIVORCED';
    quote: string;
    description: string;
};

const personaFactory = ({
    name = '',
    shortName = '',
    avatar = '',
    age = 0,
    gender = 'UNDEFINED',
    moodImages = [],
    occupation = '',
    nationality = '',
    maritalStatus = 'SINGLE',
    quote = '',
    description = '',
}: PersonaModel = {}): PersonaModel => ({
    name,
    shortName,
    avatar,
    age,
    gender,
    moodImages,
    occupation,
    nationality,
    maritalStatus,
    quote,
    description,
    setShortName() {
        this.shortName = this.name.substring(0, 3);
        return this;
    }
});

export default personaFactory;